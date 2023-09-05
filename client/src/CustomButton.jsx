import React, { useState } from "react";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import AvsarForm from "./AvsarForm";
import * as CredentialHandlerPolyfill from "credential-handler-polyfill";
import requestCredential from 'avsar-thirdparty-plugin';

// import * as CredentialHandlerPolyfill from "credential-handler-polyfill";

// await CredentialHandlerPolyfill.loadOnce();
// console.log("Ready to work with credentials!");

function CustomButton() {
	const [jsonData, setData] = useState({
			id: "",
			grade: "",
			programme: "",
			certifyingInstitute: "",
			evaluatingInstitute: "",
		},);
	const [isLoading, setLoading] = useState(false);

	async function onClickRequest() {
		setLoading(true);
		const result = await requestCredential('alumniCredential', "http://localhost:4200/wallet-worker");
		if (result) {
			console.log(result);
			const jsonData = result;
			console.log(jsonData);
			setData(jsonData);
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
			{isLoading ? (
				<pre>Loading...</pre>
			) : (
				<AvsarForm initialData={jsonData} />
			)}
		</>
	);
}

export default CustomButton;
