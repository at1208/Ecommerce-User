import React, { Fragment, useState } from 'react';
import Layout from '../../components/layout/layout';
import { isAuth } from '../../actions/auth';
import { getProductBySlug } from '../../actions/product';
import { addToCart } from '../../actions/cart'
import { withRouter } from 'next/router';
import { Button } from 'antd';
import { FaShoppingCart,FaHeartbeat } from "react-icons/fa";
import { IoMdCart } from "react-icons/io";
import { ToastContainer, toast } from 'react-toastify';
import Link from 'next/link'

const Product = ({ data, router, slug }) => {
  const [cartItem, setCartItem] = useState(0);

  const product = {
    product: data && data.result._id,
    name: data && data.result.name,
    price: data && data.result.price,
    user: isAuth() && isAuth()._id
  };

  const cart = () => {
    addToCart(product)
       .then(res => {
          toast.success(res.message)
          if(res.res=="ok"){
              setCartItem(1)
              }
            }
       )
       .catch(err => {
         console.log(err)
         toast.error(err.error)
       })
  }

  return <Fragment>
           <Layout data={cartItem}>
          <ToastContainer />
              <div className="row col justify-content-center product-detail-container">
                <div className="col-md-5 p-1">
                 <img className="img img-fluid" src="https://img.grouponcdn.com/deal/3H5QzVtGHYD8P51AMbu7KD1QoLr4/3H-1561x937/v1/c700x420.jpg"/>
                </div>
                <div className="col-md-2 p-2 text-center pt-5">
                  <div className="pt-3 pb-5">
                    <div className="product-detail-price pb-3">
                      ₹{data.result.price}
                    </div>
                    <div className="p-1 mb-3">
                       <Button size="large" className="product-detail-add-cart-btn" onClick={cart}>
                           <IoMdCart className="product-detail-add-cart-btn-icon"/>
                            Add to Cart
                       </Button>
                    </div>
                    <div className="p-1">
                    <Link href="/product/checkout/[pid]" as={`/product/checkout/${slug}`}>
                      <Button size="large" className="product-detail-buy-btn">
                        <FaHeartbeat className="product-detail-buy-btn-icon"/>
                         Buy Now
                      </Button>
                    </Link>
                    </div>
                  </div>
                </div>
                <div className="col-md-5 p-2">
                <div className="product-detail-pdt-name">
                  {data.result.name}
                </div>
                </div>
              </div>
           </Layout>
         </Fragment>
}

Product.getInitialProps = ({ query }) => {
     return getProductBySlug(query.pid)
             .then((res) => {
               return { data: res, slug:query.pid }
             })
}
export default withRouter(Product);
