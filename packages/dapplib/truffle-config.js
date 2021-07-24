require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'idea climb flee skull guard render remain connect gesture inhale fringe gaze'; 
let testAccounts = [
"0x8d04ab46e8eea54571196be2cb1d08c1432f3d9677d8a06c1d0e5f36a30ce4c5",
"0xafc4c3e5e8513d9db0167d0aa72d588abb97ee50ad7441521b5168610fa413a9",
"0x79b33a8243d4979cca1b7467399ee2275f3f1f58431df7847ae19f19548b243b",
"0x67459860c4622161665e94841c72e06a266443c8807c11ba9dac75ed50446c79",
"0x80b3eff13d3ba0da991806b532cd5463a01a2e08f7ef0c012f72a1f8555f40f9",
"0x5c479aea331a05d4cd273ab9e4b16846dcf06bbdc67faabfa450b93c8fa56495",
"0x048da336cdcd943e9356af58aedf9ccd6cd46c024946d36bf888729bd4941443",
"0x70a704d554a5ce4ef8f72bb20a4416fd202e3b9ebc17d238303d9c6d16342e5d",
"0xfab98dcbfc09384a5ec90f7a3233a2f07e9afb054cbba34e9fa5f2d2fb8a301c",
"0x1d44dbc746662e9317d5042a657dad44f66dc4d4c09efe9984962af4c422d2a8"
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
            version: '^0.8.0'
        }
    }
};

