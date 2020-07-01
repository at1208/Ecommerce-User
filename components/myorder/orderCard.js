import React, { Fragment, useState, useEffect } from 'react';
import { productById } from '../../actions/product';
import moment from 'moment';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

const useStyles = makeStyles({
  table: {
    minWidth: 700,
  },
});


const OrderCard  = ({ data }) => {
  
  const classes = useStyles();
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

      return(
                <TableRow key={item.product.name}>
                  <TableCell>{i+1}. {item.product.name}</TableCell>
                  <TableCell align="right">{item.count}</TableCell>
                  <TableCell align="right">₹{item.product.price}</TableCell>
                  <TableCell align="right">{item.product.price * item.count}</TableCell>
                </TableRow>);
   })
 }

  const payment = data.status ? "Paid" : "Failed";

  return <Fragment>
            <div className="container-fluid row col justify-content-center">
              <div className="text-center card col-md-8">
              <p>Order Date - {data && moment(data.createdAt).format('LLLL')}</p>
              <p>Order ID - {data && data.order_id}</p>
                  <br />
                {data && data.status}
              <TableContainer component={Paper}>
                <Table className={classes.table} aria-label="spanning table">
                  <TableHead>
                    <TableRow>
                      <TableCell align="center" colSpan={3}>
                      <b>Details</b>
                      </TableCell>
                      <TableCell align="right"><b>Price</b></TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell><b>Desc</b></TableCell>
                      <TableCell align="right"><b>Qty.</b></TableCell>
                      <TableCell align="right"><b>Unit</b></TableCell>
                      <TableCell align="right"><b>Sum</b></TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {showOrderedProduct()}
                  </TableBody>
                </Table>
              </TableContainer>
                  <br />
                <h6 style={{color:"red"}}>Payment Status - {payment}</h6>
              <br/>
              </div>
            </div>
         </Fragment>
}

export default OrderCard;
