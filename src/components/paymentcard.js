import React from "react";
import CustomButton from "../library/custombutton";
import Payments from "../assests/images/payments.svg";
import Savings from "../assests/images/savings.svg";
import Virtual from "../assests/images/virtual.svg";
import Credit from "../assests/images/credit.svg"
import "../assests/css/home.css"

const Payment = () => {
  return (
    <div className="payments">
      <div className="payments_container">
        <div className="payments_app">
          <h1>Payments</h1>
          <p>
            Experience secure, dependable and effortless payments with CredPal.
            Whether you're paying for goods, a subscription, or anything else,
            CredPal is streamlined to make the payment process fast and
            straightforward.
          </p>
          <CustomButton className="button_app"  buttonColor="#3772FF" textColor="#FCFCFD"  buttonWidth="10rem">Download App</CustomButton>
        </div>
        <div>
          <img src={Payments} alt="Payments" />
        </div>
      </div>
      <div className="payments_container">
        <div className="payments_app">
          <h1>Savings </h1>
          <p>
            Simplify your savings journey by setting a budget. Get started on
            saving with ease by setting goals, monitoring your progress, and
            enabling automatic transfers with your bank account. It couldn't be
            any easier!
          </p>
          <div>
          <CustomButton className="button_app"  buttonColor="#3772FF" textColor="#FCFCFD" buttonWidth="10rem">Download App</CustomButton>
          </div>
        </div>
        <div>
          <img src={Savings} alt="Payments" />
        </div>
      </div>
      <div className="payments_container">
        <div className="payments_app">
          <h1>Virtual Cards</h1>
          <p>
            Create a virtual credit or cash card, make secure online purchases,
            keep track of your spending, and have complete visibility into where
            your funds are going. With advanced security features, you have the
            ability to set spending limits and exert control over your spending.
          </p>
          <CustomButton className="button_app"  buttonColor="#3772FF" textColor="#FCFCFD" buttonWidth="10rem">Download App</CustomButton>
        </div>
        <div>
          <img src={Virtual} alt="Payments" />
        </div>
      </div>
      <div className="payments_container">
        <div className="payments_app">
          <h1>Credit Builder</h1>
          <p>
            Fund your virtual card and make payments everywhere. Use your
            CredPal virtual card to make purchases both online and in-person
            with ease, and benefit from our reward-rich programs.
          </p>
          <CustomButton className="button_app" buttonColor="#3772FF" textColor="#FCFCFD" buttonWidth="10rem">Download App</CustomButton>
        </div>
        <div>
          <img src={Credit} alt="Payments" />
        </div>
      </div>
    </div>
  );
};

export default Payment;
