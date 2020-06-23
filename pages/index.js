import React, { Fragment } from 'react';
import Layout from '../components/layout/layout'
import Home from '../components/pages/home/home'
import { homepageProducts } from '../actions/product'
import CarouselContainer from '../components/carousel/carousel'

const App = ({ data }) => {

 const showCarousel = () => {
   return data.map((item,i) => {
     return <Fragment key={i}>
              <CarouselContainer products={item} />
            </Fragment>
    })
 }

  return <Fragment>
           <Layout>
             <Home />
             <div className="container">
               {showCarousel()}
             </div>
           </Layout>
         </Fragment>
}

App.getInitialProps = () => {
    return homepageProducts()
     .then((res) => {
       return { data: res }
     })

}

export default App;
