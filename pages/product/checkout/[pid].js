import React, {Fragment, useState} from 'react';
import Layout from '../../../components/layout/layout';
import { getProductBySlug } from '../../../actions/product';
import ProductCard from '../../../components/cart/card';
import { Button } from 'antd';

const Checkout = ({ data }) => {
 const showProduct = () => {
     return  <div className="product-checkout-page-card card col-md-4 col-sm-5 p-2">
              <ProductCard data={data}/>
            </div>
 }

 const paymentHandler = () => {
     const options = {
     key: process.env.NEXT_PUBLIC_RZPID,
     amount:  1*100,
     currency: 'INR',
     name: 'Payments',
     order_id: "orderID",
 
     handler(response) {
       console.log(response)
      PaymentVerification(response.razorpay_order_id, response.razorpay_payment_id, response.razorpay_signature)
        .then((res) => console.log(res))
        .catch(err => console.log(err))
       }
     }
     const razorpay = new window.Razorpay(options);
     razorpay.open()
 }

  return <Fragment>
            <Layout>
               <div className="product-checkout-page-container row justify-content-center">
                {showProduct()}
               </div>
               <div className="container text-center mt-4">
                <Button className="product-checkout-pay-btn">
                  Pay
                </Button>
               </div>
            </Layout>
         </Fragment>
}

Checkout.getInitialProps = ({ query }) => {
  return getProductBySlug(query.pid)
          .then((res) => {
             return { data: res.result }
          })
}

export default Checkout;
