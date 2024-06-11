import { useState , useContext } from 'react';
import { DataContext } from '../../context/Dataprovider';

import { Box  , Button , Typography , styled ,Badge } from '@mui/material';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import Logindialog from '../Login/Logindialog';
import Profile from './Profile';
import { useNavigate } from 'react-router-dom';
import { UseSelector, useSelector } from 'react-redux';

const Container = styled(Box)(({ theme }) => ({
  display: 'flex',
  cursor:'pointer',
  [theme.breakpoints.down('sm')]: {
      display: 'block'
  }
}));

const Wrapper = styled(Box)(({ theme }) => ({
  margin: '0 3% 0 auto',
  display: 'flex',
  '& > *': {
      marginRight: '40px !important',
      textDecoration: 'none',
      color: '#FFFFFF',
      fontSize: 16,
      alignItems: 'center',
      [theme.breakpoints.down('sm')]: {
          color: '#2874f0',
          display: 'flex',
          flexDirection: 'column',
          marginTop: 10
      }
  },
  [theme.breakpoints.down('sm')]: {
      display: 'block'
  }
}));

const Loginbutton = styled(Button)(({ theme }) => ({
  color: '#2874F0',
  background: '#FFFFFF',
  textTransform: 'none',
  fontWeight: 600,
  borderRadius: 2,
  padding: '5px 40px',
  height: 32,
  boxShadow: 'none',
  [theme.breakpoints.down('sm')]: {
      background: '#2874F0',
      color: '#FFFFFF'
  }
}))


const Custombuttons = () => {
  const [open , setOpen] = useState(false);
  const {account , setaccount}  = useContext(DataContext);
  const navigate = useNavigate();
  const {cartItems} = useSelector(state => state.cart)

  const gotoCart =()=>{
    navigate('/cart');
  }
  const openDialog = ()=>{
    setOpen(true);
  }

  return (
    <Wrapper>
      {
        account?<Profile account={account} setaccount={setaccount}></Profile>:<Loginbutton variant="contained" onClick={()=> openDialog()}>Login</Loginbutton>
      }
      <Typography style = {{marginTop : 3 , width : 135}}>Become a Seller</Typography>
      <Typography style = {{marginTop : 3}}>More</Typography>
      <Container onClick={()=>gotoCart()}>
        <Badge badgeContent={cartItems?.length} color='secondary'  style={{marginRight:10}}>
          <ShoppingCartIcon/>
        </Badge>
        <Typography >Cart</Typography>
      </Container>
      <Logindialog open={open} setOpen={setOpen}/>
    </Wrapper>
  )
}

export default Custombuttons;
