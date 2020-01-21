import {Client} from './backend';


function getBackendPath() {
    return 'https://backend.myriaddreamin.com:23335';
}

const client = new Client({
    baseURLGetter: getBackendPath,
});

window.client = client;

export {
    getBackendPath,
    client,
}
