import { Keypair } from "@solana/web3.js";

const keypair = Keypair.generate();

console.log("GENERATED WALLET");
console.log(`Public Key: ${keypair.publicKey.toBase58()}`);
console.log(`Private Key: [${keypair.secretKey}]`);