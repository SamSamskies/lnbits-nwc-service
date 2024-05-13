const axios = require("axios");
const { LNBITS_URL, LNBITS_ADMIN_KEY } = require("./constants");

const payInvoice = async (invoice) => {
  const url = `${LNBITS_URL}/api/v1/payments`;
  const headers = {
    "X-Api-Key": LNBITS_ADMIN_KEY,
    "Content-Type": "application/json",
  };

  const { data } = await axios.post(
    url,
    {
      out: true,
      bolt11: invoice,
    },
    { headers }
  );

  return data;
};

module.exports = { payInvoice };
