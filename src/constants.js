const { getPublicKey } = require("nostr-tools/pure");

require("dotenv").config();

const LNBITS_ADMIN_KEY = process.env.LNBITS_ADMIN_KEY;
const LNBITS_URL = process.env.LNBITS_URL;
const NWC_SERVICE_PRIVKEY = process.env.NWC_SERVICE_PRIVKEY;
const RELAY_URI = process.env.RELAY_URI;
const AUTHORIZED_PUBKEY = process.env.AUTHORIZED_PUBKEY;
const NWC_CONNECTION_SECRET = process.env.NWC_CONNECTION_SECRET;
const TOTAL_MAX_SEND_AMOUNT_IN_SATS = process.env.TOTAL_MAX_SEND_AMOUNT_IN_SATS
  ? Number(process.env.TOTAL_MAX_SEND_AMOUNT_IN_SATS)
  : 10000;

if (!LNBITS_ADMIN_KEY) {
  console.log("Missing LNBITS_ADMIN_KEY in .env file.");
  process.exit(1);
}

if (!LNBITS_URL) {
  console.log("Missing LNBITS_URL in .env file.");
  process.exit(1);
}

if (!NWC_SERVICE_PRIVKEY) {
  console.log("Missing NWC_SERVICE_PRIVKEY in .env file.");
  console.log(
    "You can run `npm run generate-secret` to create a new private key.",
  );
  process.exit(1);
}

if (!RELAY_URI) {
  console.log("Missing RELAY_URI in .env file");
  process.exit(1);
}

if (!AUTHORIZED_PUBKEY) {
  console.log("Missing AUTHORIZED_PUBKEY in .env file");
  process.exit(1);
}

if (!NWC_CONNECTION_SECRET) {
  console.log("Missing NWC_CONNECTION_SECRET in .env file");
  console.log(
    "You can run `npm run generate-secret` to create a new connection secret.",
  );
  process.exit(1);
}

module.exports = {
  LNBITS_ADMIN_KEY,
  LNBITS_URL,
  NWC_SERVICE_PUBKEY: getPublicKey(NWC_SERVICE_PRIVKEY),
  NWC_SERVICE_PRIVKEY,
  RELAY_URI,
  AUTHORIZED_PUBKEY,
  NWC_CONNECTION_PUBKEY: getPublicKey(NWC_CONNECTION_SECRET),
  NWC_CONNECTION_SECRET,
  TOTAL_MAX_SEND_AMOUNT_IN_SATS,
};
