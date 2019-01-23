import React from "react";
import PaypalExpressBtn from "react-paypal-express-checkout";
// import { withRouter } from 'react-router-dom'

export default class PayPalButton extends React.Component {

  render() {

    const onSuccess = payment => {

      console.log("The payment was succeeded!", payment);
      this.props.clearCart();

    //   attempt to bring customer back to home page on successful payment
    //   const success = withRouter(({ history }) => (
    //     this.props.history.push("/")
    //   ));
    //   success();
    };

    const onCancel = data => {
      // User pressed "cancel" or close Paypal's popup
      console.log("The payment was cancelled!", data);
    };

    const onError = err => {
      console.log("Error!", err);
    };

    let env = "sandbox"; // set here to 'production' for production
    let currency = "USD"; // set this value from props or state
    //let total = 1;

    // sandbox environment and keys here
    const client = {
      sandbox: "ATfuXz7FwHPppV6IGZlOdrHT0OaiC733DKQxzbZCqSmZBXRcVFW3vJv3O-UAy0Nrjl_gD-jJqmM_paO8",
        // sandbox: process.env.PAYPAL_CLIENT_ID
        // add this for production build
      production: "YOUR-PRODUCTION-APP-ID"
    };

    // For sandbox app-ID (after logging into your developer account, please locate the "REST API apps" section, click "Create App"):
    //   => https://developer.paypal.com/docs/classic/lifecycle/sb_credentials/
    // For production app-ID:
    //   => https://developer.paypal.com/docs/classic/lifecycle/goingLive/

    return (

      <PaypalExpressBtn
        env={env}//set to production when ready
        client={client}//
        currency={currency}//
        total={this.props.totalAmount}//
        onError={onError}
        onSuccess={onSuccess}
        onCancel={onCancel}
      />

    );
  }
}