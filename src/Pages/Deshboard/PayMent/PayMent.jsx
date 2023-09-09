import { loadStripe } from "@stripe/stripe-js";
import SectionTitle from "../../../Components/SectionTittle/SectionTitle";
import { Elements } from "@stripe/react-stripe-js";
import CheckoutForm from "./CheckoutForm";
import useCarts from "../../../hooks/useCarts";


const stripePromise = loadStripe(import.meta.env.VITE_PAYMENT_SECRET_KEY);

const Payment = () => {
    const [cart] = useCarts();
    const total = cart.reduce((sum, item) => item.price + sum, 0)
    const price = parseFloat(total.toFixed(2));
    return (
        <div className="w-full">
            <SectionTitle heading="Please Process To" subHeading="Payment"></SectionTitle>

            <Elements stripe={stripePromise}>
                <CheckoutForm price={price}></CheckoutForm>
            </Elements>
        </div>
    );
};

export default Payment;