var braintree = require("braintree");
require("dotenv").config();

const merchantId = process.env.BRAINTREE_MERCHANT_ID;
const publicKey = process.env.BRAINTREE_PUBLIC_KEY;
const privateKey = process.env.BRAINTREE_PRIVATE_KEY;

var gateway =
  merchantId && publicKey && privateKey
    ? new braintree.BraintreeGateway({
        environment: braintree.Environment.Sandbox,
        merchantId: merchantId,
        publicKey: publicKey,
        privateKey: privateKey,
      })
    : null;

const notConfigured = (res) =>
  res.status(503).json({ error: "Payment gateway is not configured" });

class brainTree {
  ganerateToken(req, res) {
    if (!gateway) return notConfigured(res);
    gateway.clientToken.generate({}, (err, response) => {
      if (err) {
        return res.json(err);
      }
      return res.json(response);
    });
  }

  paymentProcess(req, res) {
    if (!gateway) return notConfigured(res);
    let { amountTotal, paymentMethod } = req.body;
    gateway.transaction.sale(
      {
        amount: amountTotal,
        paymentMethodNonce: paymentMethod,
        options: {
          submitForSettlement: true,
        },
      },
      (err, result) => {
        if (err) {
          console.error(err);
          return res.json(err);
        }

        if (result.success) {
          console.log("Transaction ID: " + result.transaction.id);
          return res.json(result);
        } else {
          console.error(result.message);
        }
      }
    );
  }
}

const brainTreeController = new brainTree();
module.exports = brainTreeController;
