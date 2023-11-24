import { loadStripe } from "@stripe/stripe-js";
import SectionTitle from "../../../Components/SectionTitle/SectionTitle";
import CheckoutForm from "./CheckoutForm";
import { Elements } from "@stripe/react-stripe-js";

const stripePromise=loadStripe(import.meta.env.VITE_Payment_Gateway_Pk);


const Payment = () => {
    return (
        <div>
             <SectionTitle heading='payment' subHeading='please pay to eat' ></SectionTitle>
             <div className="">
                <Elements stripe={stripePromise}>
                   <CheckoutForm>

                   </CheckoutForm>
                </Elements>
             </div>
        </div>
    );
};

export default Payment;