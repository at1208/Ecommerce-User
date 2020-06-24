import React, { Fragment, useState, useEffect } from 'react';
import { Input } from 'antd';
import Button from '@material-ui/core/Button';
import { updateProfile,userProfile,getCookie, isAuth } from '../../actions/auth';
import { ToastContainer, toast } from 'react-toastify';
const { TextArea } = Input;

const Profile = () => {
  const token = getCookie('token');
  const userId = isAuth() && isAuth()._id

 var [values, setValues] = useState({
   name: '',
   address: '',
   email: '',
   _id: ''
 })

useEffect(() => {
   userProfile(userId, token)
    .then((value) => {
    setValues({...values, name: value.name, email:value.email, address: value.address, _id: value._id})
    })
    .catch((err) => {console.log(err)})
 },[])

console.log(values)
  const { name, email, address, _id } = values

  const updateUserInfo = () => {
    updateProfile({userId:  _id, name: name, address: address}, token)
        .then(res => toast.success(res.message))
        .catch(err => toast.error(err.error))
  }


  return <Fragment>
              <ToastContainer />
              <div className="text-center">
              <h1>
              Profile
              </h1>
              </div>
             <div>
              <small>Name</small>
               <Input
               variant="outlined"
               fullWidth
               size="large"
               value={name}
               className="profile-input"
               onChange={(e) => {
                 setValues({...values, name: e.target.value})
               }} />

              <small>Address</small>
               <TextArea
               rows={3}
               fullWidth
               size="large"
               value={address}
               className="profile-input"
               onChange={(e) => {
                  setValues({...values, address: e.target.value})
               }} />

             <small>Email</small>
               <Input
               variant="outlined"
               fullWidth
               disabled
               value={email}
               size="large"
               className="profile-input"
                 />

              <div className="text-center">
               <Button variant="contained" className="profile-btn" onClick={updateUserInfo}>
                  Update
               </Button>
              </div>
             </div>
         </Fragment>
}

export default Profile;
