import React, { Fragment, useEffect, useState } from 'react';
import Drawer from './drawer';
import Search from './search';
import Menu from './menu';
import {Button} from 'antd';
import SignIn from '../auth/signinModal';
import SignUp from '../auth/signupModal';
import { isAuth } from '../../actions/auth';
import { getCartProduct } from '../../actions/cart';
import Link from 'next/link'
import { GrCart } from "react-icons/gr";
import Badge from '@material-ui/core/Badge';
import { withStyles } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';

const Header = ({ data }) => {
  var [cartItem, setCartItem] = useState(0);
  const userId = isAuth() && isAuth()._id;
  const [state,setState] = useState(true)

  useEffect(() => {
    getCartProduct(userId)
         .then(res => setCartItem(res.result.length))
         .catch(err => console.log(err))
  },[])


  const StyledBadge = withStyles((theme) => ({
  badge: {
    right: -3,
    top: 13,
    border: `2px solid ${theme.palette.background.paper}`,
    padding: '0 4px',
  },
}))(Badge);

 while (data==1 && state) {
  setCartItem(cartItem= cartItem + data)
  setState(false)
  return;
 }


  return <Fragment>
          <div className="header-nav-bar">
            <div className="row col">
                <div className="col-1 header-col-1">
                 <Drawer />
                </div>
                <div className="col-2 header-col-2">
                <Link href="/"><a>Geekstore</a></Link>
                </div>
                <div className="col-md-5 header-col-3 text-center pl-2 pr-2">
                 <Search />
                </div>
                <div className="col-4 col-sm-4 header-col-5 pt-1 row justify-content-center">
                  <div className="d-none d-md-block d-lg-none d-lg-block d-xl-block">
                    <Link href="/product/cart">
                      <a>
                         <IconButton>
                           <StyledBadge badgeContent={cartItem} color="secondary">
                             <ShoppingCartIcon className="header-cart-icon"/>
                           </StyledBadge>
                         </IconButton>
                     </a>
                   </Link>
                 </div>
                 {
                   !isAuth() &&
                   <div className="d-none d-md-block d-lg-none d-lg-block d-xl-block">
                       <div className="row   header-access-container ">
                          <SignIn size="small"/>
                          <SignUp size="small"/>
                       </div>
                   </div>
                 }
                </div>
            </div>
          </div>
         </Fragment>
}

export default Header;
