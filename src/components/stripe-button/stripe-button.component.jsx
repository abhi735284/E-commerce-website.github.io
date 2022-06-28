import React from "react";
import StripeCheckout from "react-stripe-checkout";

const StripeCheckoutButton = ({ price }) => {
  const priceForStripe = price * 100;
  const publishableKey =
    "pk_test_51IZT4rSByvUBjvhPX9MAEoin9iWgbdLuy9DiJMtsy65KGgRGgryV6it2apq6JZW0cwtwjUXnPnA0e2pI5KcbJemU00knHBCj27";

  const onToken = (token) => {
    console.log(token);
    alert("Payment Succesful!");
  };

  return (
    <StripeCheckout
      label="Pay Now"
      name="CRWN Clothing Ltd."
      billingAddress
      shippingAddress
      image="https://svgshare.com/i/CUz.svg"
      description={`Your total is RS${price}`}
      amount={priceForStripe}
      panelLabel="Pay Now"
      token={onToken}
      stripeKey={publishableKey}
      currency="INR"
      bitcoin
    />
  );
};

export default StripeCheckoutButton;
