import React, { Fragment, useState } from 'react';
import Layout from '../../components/layout/layout';
import { isAuth } from '../../actions/auth';
import { getProductBySlug } from '../../actions/product';
import { addToCart } from '../../actions/cart'
import { withRouter } from 'next/router';
import { Button,Carousel,Breadcrumb,Tag } from 'antd';
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
              {/* <div className="row col justify-content-center product-detail-container">
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
              </div> */}
              
    <section className="page-add">
        <div className="container">
            <div className="row">
                <div className="col-lg-4">
                    <div className="page-breadcrumb">
                        <h2>Category<span>.</span></h2>
                            <Breadcrumb>
                                <Breadcrumb.Item>Home</Breadcrumb.Item>
                                <Breadcrumb.Item>
                                <a href="">Category</a>
                                </Breadcrumb.Item>
                                <Breadcrumb.Item>{data.result.name}</Breadcrumb.Item>
                            </Breadcrumb>
                    </div>
                </div>
            </div>
        </div>
    </section>


    <section className="product-page">
        <div className="container">
            <div className="row">
                <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel" style={{width: "20rem", height: "20rem"}}>
                    <ol className="carousel-indicators">
                        <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"></li>
                        <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                        <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
                    </ol>
                    
                    <Carousel autoplay effect="fade" >
                      <div>
                        <img
                        alt="Product Image"
                        src="https://cdn.shopify.com/s/files/1/0070/7032/files/camera_56f176e3-ad83-4ff8-82d8-d53d71b6e0fe.jpg?v=1527089512"
                        style={{ width:"100%"}}
                        />
                      </div>
                      <div>
                        <img
                        alt="Product Image"
                        src="https://cdn.shopify.com/s/files/1/0070/7032/files/camera_56f176e3-ad83-4ff8-82d8-d53d71b6e0fe.jpg?v=1527089512"
                        style={{ width:"100%"}}
                        />
                      </div>
                    </Carousel>
                </div> 
                <div className="col-lg-6">
                    <div className="product-content">
                        <h2>{data.result.name}</h2>
                        <div className="pc-meta">
                            <h5>₹{data.result.price}</h5>
                            <div className="rating">
                                <i className="fa fa-star"></i>
                                <i className="fa fa-star"></i>
                                <i className="fa fa-star"></i>
                                <i className="fa fa-star"></i>
                                <i className="fa fa-star"></i>
                            </div>
                        </div>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis.</p>
                        <ul className="tags">
                            <li><span>Category :</span> Category</li>
                            <li><span>Tags :</span> <Tag color="magenta">Tag1</Tag>
                                                    <Tag color="red">Tag2</Tag>
                                                    <Tag color="volcano">Tag3</Tag>
                                                    <Tag color="orange">Tag4</Tag>
                                                    <Tag color="gold">Tag5</Tag>
                                                    <Tag color="lime">Tag6</Tag>
                                                    <Tag color="green">Tag6</Tag>
                                                    <Tag color="cyan">Tag7</Tag>
                                                    <Tag color="blue">Tag8</Tag>
                                                    <Tag color="geekblue">Tag9</Tag>
                                                    <Tag color="purple">Tag10</Tag></li>
                        </ul>
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
                        <ul className="p-info">
                            <li>Product Information</li>
                            <li>Reviews</li>
                            <li>Product Care</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </section>


    <section className="related-product spad">
        <div className="container">
            <div className="row">
                <div className="col-lg-12 text-center">
                    <div className="section-title">
                        <h2>Related Products</h2>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-lg-3 col-sm-6">
                </div>
            </div>
        </div>
    </section>
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
