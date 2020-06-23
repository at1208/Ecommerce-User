import React, { Fragment, useState, useEffect } from 'react';
import Layout from '../../../../components/layout/layout';
import {Button} from 'antd';
import { getCartProduct } from '../../../../actions/cart';
import { isAuth } from '../../../../actions/auth';
import CheckoutComponent from '../../../../components/checkout/checkout';


const Checkout = () => {
  const [cartProduct, setCartProduct] = useState();
  const userId = isAuth() && isAuth()._id

  useEffect(() => {
    getCartProduct(userId)
      .then(res => setCartProduct(res.result))
      .catch(err => console.log(err))

  }, [])

  const totalPrice = () => {
        const amountArray = cartProduct && cartProduct.map(item => {
              return (item.count * item.price)
        })
        if(amountArray){
          let sum = amountArray.reduce(function(a, b){
                return a + b;
            }, 0);
            return sum;
        }
  }

  return <Fragment>
            <Layout>
               <div className="checkoutpage-container">
                  <CheckoutComponent pay={totalPrice()} product={cartProduct}/>
               </div>
               <div className="text-center">
                 <Button size="large" className="checkoutpage-pay-now-btn">
                    Pay now
                 </Button>
               </div>
            </Layout>
         </Fragment>
}

export default Checkout;
