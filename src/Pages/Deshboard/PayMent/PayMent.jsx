
import { Elements } from '@stripe/react-stripe-js';
import SectionTitle from './../../../Components/SectionTittle/SectionTitle';
import CheckoutForm from './CheckoutForm';
import { loadStripe } from '@stripe/stripe-js';
const PayMent = () => {
    //TODO: Pk Key Peyment Method 

    const stripePromise = loadStripe(import.meta.env.VITE_Payment_Gateway_PK);
    return (
        <div className='w-full'>
            <SectionTitle heading="Please Provide Your" subHeading="Payment Info" />
            <Elements stripe={stripePromise}>
                <CheckoutForm>

                </CheckoutForm>
            </Elements>

        </div>
    );
};

export default PayMent;