import React, {Fragment, useState} from 'react';
import Layout from '../../../components/layout/layout';
import { getProductBySlug } from '../../../actions/product';
import ProductCard from '../../../components/cart/card';
import { createOrder, orderVerify } from '../../../actions/order';
import { isAuth } from '../../../actions/auth';
import { Button } from 'antd';
import Router from 'next/router';

const Checkout = ({ data }) => {

  const userId = isAuth() && isAuth()._id
  const [orderID, setOrderID]= useState();
  const [payStatus, setPayStatus] = useState(false)
  const [orderVerification, setOrderVerification] = useState();


  console.log(data)
 const showProduct = () => {
     return  <div className="product-checkout-page-card card col-md-4 col-sm-5 p-2">
              <ProductCard data={data}/>
            </div>
 }

 const totalPrice = () => {
   
 }

 const generateOrder = () => {
 const order = {
             userId: userId,
             products: {product: data, count: data.count, price: data.price},
             order_amount: totalPrice() }
   createOrder(order)
     .then(res => {
       console.log(res)
       setOrderID(res.order_id)
       setPayStatus(true)
     })
     .catch(err => console.log(err))
 }

 const onOrderverification = (res) => {
   if(res.payment ===0){
     return;
   }
   if(res.payment ===1){
      return Router.push(`/myorder`)
   }
   return;
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


 if(payStatus){
   paymentHandler()
   setPayStatus(false)
 }

  return <Fragment>
            <Layout>
               <div className="product-checkout-page-container row justify-content-center">
                {showProduct()}
               </div>
               <div className="container text-center mt-4">
                <Button className="product-checkout-pay-btn" onClick={generateOrder}>
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
