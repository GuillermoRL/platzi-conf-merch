import React, { useContext } from 'react';
import { PayPalButton } from 'react-paypal-button-v2';
import AppContext from '../context/AppContext';
import '../styles/components/Payment.css';

const Payment = ({history}) => {
  const { state: { cart, buyer }, addNewOrder } = useContext(AppContext);
  const paypalOptions = {
    clientId: 'AX9iP2BqNH1a2VNbyw7YwqQq-qrUuly3yQR7ocgS4hEPKjR2FFXSj33v20yl1esyufVEZ8IxuLooXvxC',
    intent: 'capture',
    currency: 'USD'
  }
  const buttonStyles= {
    layout: 'vertical',
    shape: 'react'
  }

  const handleSumTotal = () => {
    const reducer = (accumulaltor, currentValue) => accumulaltor + currentValue.price;
    const sum = cart.reduce(reducer, 0);
    return sum;
  }

  const handlePaymentSuccess = (data) => {
    if(data.status === 'COMPLETED'){
      const newOrder = {
        buyer,
        products: cart,
        payment: data
      };
      addNewOrder(newOrder);
      history.push('/checkout/success');
    }
  }

  return(
    <div className="Payment">
      <div className="Payment-content">
        <h3>Resumen del pedido: </h3>
        {cart.map( item => (
          <div className="Payment-item">
            <h4>{item.title}</h4>
            <span>${' '}{item.price}</span>
          </div>
        ))}
        <div className="Payment-button">
          <PayPalButton 
            paypalOptions={paypalOptions}
            buttonStyles={buttonStyles}
            amount={handleSumTotal()}
            onError={(error) => console.log(error)}
            onSuccess={ (data) => handlePaymentSuccess(data)}
          />
          Boton de pago con PayPal
        </div>
      </div>
      <div />
    </div>
  );
}

export default Payment
