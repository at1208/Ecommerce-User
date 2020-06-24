import React, { Fragment, useState } from 'react';
import Layout from '../../../components/layout/layout';
import { searchProduct } from '../../../actions/product';
import ProductCard from '../../../components/product/card';

const SearchedProduct = ({ data }) => {

 const showResult = () => {
    return data && data.map((product, i) => {
      return <div className="col-md-3" key={i}>
                <ProductCard data={product} />
             </div>
    })
 }

  return <Fragment>
           <Layout>
               <div className="searchpage-container">
                  <div className="col row justify-content-center">
                   {showResult()}
                  </div>
               </div>
           </Layout>
        </Fragment>
}

SearchedProduct.getInitialProps = ({  query }) => {
  return searchProduct(query.pid)
           .then(res => {
             return { data: res }
           })
}

export default SearchedProduct;
