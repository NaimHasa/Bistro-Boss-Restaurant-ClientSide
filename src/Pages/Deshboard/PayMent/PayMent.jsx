
import { Elements } from '@stripe/react-stripe-js';
import SectionTitle from './../../../Components/SectionTittle/SectionTitle';
import CheckoutForm from './CheckoutForm';
import { loadStripe } from '@stripe/stripe-js';
import useCarts from '../../../hooks/useCarts';

//TODO: Pk Key Peyment Method 

const stripePromise = loadStripe(import.meta.env.VITE_Payment_Gateway_PK);

const PayMent = () => {
    const [cart] = useCarts();
    const total = cart.reduce((sum, item) => sum + item.price, 0);
    const price = parseFloat(total.toFixed(2))


    return (
        <div className='w-full'>
            <SectionTitle heading="Please Provide Your" subHeading="Payment Info" />
            <Elements stripe={stripePromise}>
                <CheckoutForm price={price}>

                </CheckoutForm>
            </Elements>

        </div>
    );
};

export default PayMent;