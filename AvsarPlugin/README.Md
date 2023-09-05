# Third party website plugin for AVSAR wallet
Third party websites can request for specific type of credentials for a user

## How to use
1. Install the module
``` bash
npm i avsar-thirdparty-plugin
```

2. Import the module
``` javascript
import requestCredential from 'avsar-thirdparty-plugin';
```

3. Call the function with suitable parameters
``` javascript
const result = await requestCredential('TypeOfCredential', "avsar-url/wallet-worker");
const result = await requestCredential('alumniCredential', "avsar-url/wallet-worker", "optional reason for request");
```

