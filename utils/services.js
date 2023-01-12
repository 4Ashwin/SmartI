import { Web3Storage } from 'web3.storage';
import { ethers } from "ethers";


let eth;

const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJkaWQ6ZXRocjoweDJmYjE2MGNjMDUxYTE0OUFhM2NGMkE0QWE3QjJDQWJCYWEyYjgxODQiLCJpc3MiOiJ3ZWIzLXN0b3JhZ2UiLCJpYXQiOjE2NzAwNTE1ODAwMzgsIm5hbWUiOiJ0cGdoaCJ9.H3lIt8wLVmlkXCaipxByAVJmjOHGSJYcrB2UtbiWJ1A"

const storage = new Web3Storage({ token });


if (typeof window !== "undefined") {
    eth = window.ethereum;
};
function getAccessToken() {
    return "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJkaWQ6ZXRocjoweDJmYjE2MGNjMDUxYTE0OUFhM2NGMkE0QWE3QjJDQWJCYWEyYjgxODQiLCJpc3MiOiJ3ZWIzLXN0b3JhZ2UiLCJpYXQiOjE2NzAwNTE1ODAwMzgsIm5hbWUiOiJ0cGdoaCJ9.H3lIt8wLVmlkXCaipxByAVJmjOHGSJYcrB2UtbiWJ1A"
}

export function makeStorageClient() {
    return new Web3Storage({ token: getAccessToken() })
}

