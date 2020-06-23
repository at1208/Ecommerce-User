import React, { Fragment } from 'react';
import Layout from '../components/layout/layout'
import Signin from '../components/auth/SigninComponent'

const App = () => {
  return <Fragment>
           <Layout>
             <Signin />
           </Layout>
         </Fragment>
}

export default App;
