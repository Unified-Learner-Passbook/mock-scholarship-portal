import * as CredentialHandlerPolyfill from "credential-handler-polyfill";

await CredentialHandlerPolyfill.loadOnce();
console.log("Ready to work with credentials!");

async function requestCredential(credentialQueryType, walletUrl, credentialQueryReason = '') {
    // create Verifiable Presentation Request
    const testVpr = {
        query: [
            {
                type: "QueryByExample",
                credentialQuery: {
                    reason: credentialQueryReason,
                    example: {
                        "@context": [
                            "https://w3id.org/credentials/v1",
                            "https://www.w3.org/2018/credentials/examples/v1",
                        ],
                        type: [credentialQueryType],
                        credentialSubject: {
                            id: "did:example:ebfeb1f712ebc6f1c276e12ec21",
                        },
                    },
                },
            },
        ],
    };

    // create Credential Interface Query
    const credentialInterfaceQuery = {
        web: {
            VerifiablePresentation: testVpr,
            recommendedHandlerOrigins: [
                walletUrl
            ]
        },
    };

    console.log("Requesting credential...");

    const result = await navigator.credentials.get(
        credentialInterfaceQuery
    );

    if (result) {
        const jsonData = result.data.credentialSubject;
        return jsonData
    }
    return JSON.stringify({"error": "You either do not have a registered wallet or there was some error trying to fetch your credentials."});
}
export default requestCredential