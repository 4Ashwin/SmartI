import { Web3Storage } from 'web3.storage';
import { ethers } from "ethers";


let eth;

const token = "YOUR TOKEN"

const storage = new Web3Storage({ token });


if (typeof window !== "undefined") {
    eth = window.ethereum;
};
function getAccessToken() {
    return token
}

export function makeStorageClient() {
    return new Web3Storage({ token: getAccessToken() })
}

