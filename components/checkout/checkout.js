import React, { Fragment} from 'react';

const Checkout = ({ pay, product }) => {
  console.log(pay)
  console.log(product)
  const showCheckout = () => {
    return product && product.map((item, i) => {
      return  <div className="m-1" key={i}>
                  <div className="checkout-card-text-1">
                      {i+1}.{item.name}
                  </div>
                  <div className="checkout-card-text-2">
                    {item.count}Qty X ₹{item.price}
                  </div>
              </div>

    })
  }

  return <Fragment>
           <div className="row justify-content-center p-3">
                <div className="card checkoutpage-card-container col-md-4 col-sm-5">
                 {showCheckout()}
                 <hr />
                 <div className="checkoutpage-card-text-3">
                   Total Amount: ₹{pay}
                 </div>
                </div>
           </div>
         </Fragment>
}

export default Checkout;
