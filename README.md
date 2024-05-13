# lnbits-nwc-service
Nostr Wallet Connect service using LNbits API.

## Helper Scripts

`npm run generate-secret` will randomly generate a 32 byte hex encoded string which you can use to create your `NWC_SERVICE_PRIVKEY` and `NWC_CONNECTION_SECRET` env vars.

`npm run print-nwc` will print out your NWC connection string that you can use in Nostr clients such as Damus to make payments.

## Usage

1. Install the dependencies using npm or yarn or whatever your heart desires
1. Create a .env file with all the required env variables (see .env.example)
1. Make sure you have sats in your LNbits wallet
1. Print your NWC connection by running `npm run print-nwc` and copy it into whatever Nostr client you'd like to use to make payments
1. Run the server `npm start`

Make sure the server is running whenever making payments.
