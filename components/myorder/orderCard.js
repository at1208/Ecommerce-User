import React, { Fragment, useState, useEffect } from 'react';
import { productById } from '../../actions/product';
import moment from 'moment';

const OrderCard  = ({ data }) => {
 const [orderedItem, setOrderedItem] = useState();

  const product = async () => {
     const items = []
     for(var x =0; x<data.products.length; x++){
          const result = await productById(data.products[x].product)
                     items.push({ product: result.result, count: data.products[x].count})

     }
     setOrderedItem(items)
  }

  useEffect(() => {
   product()
  }, [])

 const showOrderedProduct = () => {
   return orderedItem && orderedItem.map((item, i) => {

      return <div key={i} className="">
               <div className="">
                 {i+1}.{item.product.name}
               </div>
               <div>
                {item.count} X ₹{item.product.price}
               </div>
             </div>
   })
 }

  const payment = data.status ? "Paid" : "Failed";

  return <Fragment>
            <div className="container-fluid row col justify-content-center">
              <div className="text-center card col-md-5">
                {showOrderedProduct()}
                {data && moment(data.createdAt).format('LLLL')}
                <br />
                {data && data.order_id}
                  <br />
                {data && data.status}
                  <br />
                {payment}
              </div>
            </div>
         </Fragment>
}

export default OrderCard;
