require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'gloom clog other security notice birth spice pulp hunt drink equal genuine'; 
let testAccounts = [
"0x594a2b2a9f61025134c46f6a84e812501f3d4a4296e4e05bce4e2612a3fb4742",
"0x31c8028c15f900c1a2fea55273eff0a230f00211833fa189ca2dce270efbcde2",
"0xb4e44735f494b150407c9b9be29f300ae9f64028d8de2558179c2d5ad4c710e4",
"0x3a4585679f632d3a9bddf834cf5c8e761e6152b61d044797ca85dfe40b0e3a8d",
"0x4bf60deceb9bd824738e7cb63fa9e984108ceb785e65b8ac03736125d101203b",
"0xa959c0a3a717794cf0fcc2f430006b3a1c8e9ae65083e489d9cbc8a0b883e362",
"0x99c9a97b8343032b8858a3e2681fe466254ac98bd1816679ddc9c1f0eb476e31",
"0x56cee601eaf6bd9138cf950197bf399b1b0e4807c08466b4cf21b1f3863727b4",
"0x03fa37d702c33865a7787ffc5bd9de9fe7022f59aaaf43f5227e45ea086608c2",
"0xb73c50c8e6468807a4a36cc189fbc4e2801302b403025bd9e9039bdae2a7ec94"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};
