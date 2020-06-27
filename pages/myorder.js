import React, { Fragment, useState, useEffect } from 'react';
import Layout from '../components/layout/layout';
import OrderCard from '../components/myorder/orderCard';
import { allOrdersOfUser } from '../actions/order';
import { isAuth } from '../actions/auth';

const MyOrder = () => {
  const [orders, setOrders] = useState();
  const userId = isAuth() && isAuth()._id

  useEffect(() => {
   allOrdersOfUser(userId)
     .then((res) => setOrders(res.result))
  },[])


const showOrder = () => {
    return orders && orders.map((item, i) => {
      return <div key={i}>
                <OrderCard data={item}/>
             </div>
    })
}


  return <Fragment>
          <Layout>
           <div className="myorder-page-container">
               {showOrder()}
           </div>
          </Layout>
        </Fragment>
}




export default MyOrder;
