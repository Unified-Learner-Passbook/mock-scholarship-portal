import React, { useState, useEffect } from "react";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import * as CredentialHandlerPolyfill from "credential-handler-polyfill";

await CredentialHandlerPolyfill.loadOnce();
console.log("Ready to work with credentials!");

function CustomButton() {
	const [creddata, setData] = useState('');
  const [isLoading, setLoading] = useState(false);
  
	async function onClickRequest() {
		setLoading(true);
		// create Verifiable Presentation Request
		const testVpr = {
			query: [
				{
					type: "QueryByExample",
					credentialQuery: {
						reason: "Please present your University Degree to continue the teacher application process.",
						example: {
							"@context": [
								"https://w3id.org/credentials/v1",
								"https://www.w3.org/2018/credentials/examples/v1",
							],
							type: ["alumniCredential"],
							credentialSubject: {
								id: "did:example:ebfeb1f712ebc6f1c276e12ec21",
							},
						},
					},
				},
			],
		};

		// fake OID4VP url
		let oid4vpUrl;
		{
			const searchParams = new URLSearchParams();
			searchParams.set("fake", JSON.stringify(testVpr));
			oid4vpUrl = `https://test.example?${searchParams}`;
		}
		console.log("oid4vpUrl", oid4vpUrl);

		// fake VC API url
		let vcapiUrl;
		{
			const searchParams = new URLSearchParams();
			searchParams.set("fakevpr", JSON.stringify(testVpr));
			vcapiUrl =
				"https://vcapi.example/exchangers/z123/exchanges/z456?" +
				searchParams;
		}
		console.log("vcapiUrl", vcapiUrl);

		// create Credential Interface Query
		const credentialInterfaceQuery = {
			web: {
				VerifiablePresentation: testVpr,
				recommendedHandlerOrigins: ["https://192.168.56.1:8081/"],
				protocols: {
					OID4VP: oid4vpUrl,
					vcapi: vcapiUrl,
				},
			},
		};

		console.log("Requesting credential...");

		const result = await navigator.credentials.get(
			credentialInterfaceQuery
		);

    if (result) {

			const data = JSON.stringify(result.data[0].credentialSubject, null, 2);
      console.log(data);
      setData(data);
		}
		setLoading(false);
	}

	return (
		<>
		<div>
			<Stack spacing={3} direction="column">
				<h3>Degree</h3>
				<Button
					variant="contained"
					size="small"
					component="span"
					onClick={onClickRequest}
				>
					Apply Using Avsar
        </Button>
        
			</Stack>
		</div>
		{isLoading ? <pre>Loading...</pre> : <pre>{creddata}</pre>}
		</>
	);
}

export default CustomButton;
