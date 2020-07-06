import React, { Fragment, useState } from 'react';
import Layout from '../../components/layout/layout';
import { isAuth } from '../../actions/auth';
import { getProductBySlug,listRelatedProducts } from '../../actions/product';
import  ProductCard from '../../components/product/card';
import { addToCart } from '../../actions/cart'
import { withRouter } from 'next/router';
import { Button,Carousel,Breadcrumb,Tag } from 'antd';
import { FaShoppingCart,FaHeartbeat } from "react-icons/fa";
import { IoMdCart } from "react-icons/io";
import { ToastContainer, toast } from 'react-toastify';
import Link from 'next/link'
import renderHTML from 'react-render-html';


const Product = ({ data, router, slug, relatedProducts }) => {

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


    const showRelatedProducts = () => {
        return relatedProducts && relatedProducts.map((product, i) => {
              return <div className="col-md-3 col-sm-3 col-lg-3 m-2" key={i}>
                       <ProductCard data={product} />
                     </div>
        });
    };


  return <Fragment>
           <Layout data={cartItem}>
          <ToastContainer />

    <section className="page-add">
        <div className="container">
            <div className="row">
                <div className="col-lg-4">
                    <div className="page-breadcrumb">
                        <h2>{data.result.category.name}<span>.</span></h2>
                            <Breadcrumb>
                                <Breadcrumb.Item>
                                  <Link href='/'>
                                     <a>Home</a>
                                  </Link>
                                </Breadcrumb.Item>
                                <Breadcrumb.Item>
                                  <Link href={`/product/category/${data.result.category._id}`}>
                                     <a>{data.result.category.name}</a>
                                  </Link>
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
                       {renderHTML(data.result.description)} 
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
            <div className="row col justify-content-center">
                  {showRelatedProducts()}
            </div>
        </div>
    </section>
           </Layout>
         </Fragment>
}

Product.getInitialProps = ({ query }) => {
     return getProductBySlug(query.pid)
             .then((res) => {
                   return listRelatedProducts({ _id: res.result._id, category: res.result.category._id })
                          .then(related => {
                         return { data: res, slug:query.pid, relatedProducts: related }
                          })
             })
}
export default withRouter(Product);
