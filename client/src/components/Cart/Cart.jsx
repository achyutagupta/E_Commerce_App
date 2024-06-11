import { Box, Grid, Typography ,styled ,Button } from '@mui/material';
import React ,{useEffect} from 'react';
import { useParams } from 'react-router-dom';
import { useSelector ,useDispatch } from 'react-redux';
import { AddtoCart, RemovefromCart } from '../../redux/actions/cartActions';
// components
import CartItem from './CartItem';
import Totalview from './Totalview';
import EmptyCart from './EmptyCart';


const Component = styled(Grid)(({ theme }) => ({
  padding: '30px 135px',
  display: 'flex',
  [theme.breakpoints.down('sm')]: {
      padding: '0',
      alignItems:'center'
  }
}));

const LeftComponent = styled(Grid)(({ theme }) => ({
  paddingRight: 15,
  [theme.breakpoints.down('md')]: {
    paddingRight:0,
    marginBottom: 15,
    width:'85%'
  },
}));


const RightComponent = styled(Grid)(({ theme }) => ({
  [theme.breakpoints.down('md')]: {
    width:'85%',
  },
}));



const Header = styled(Box)`
  padding: 15px 24px;
  background: #fff;
`;

const BottomWrapper = styled(Box)`
  padding: 16px 22px;
  background: #fff;
  box-shadow: 0 -2px 10px 0 rgb(0 0 0 / 10%);
  border-top: 1px solid #f0f0f0;
`;

const StyledButton = styled(Button)`
  display: flex;
  margin-left: auto;
  background: #fb641b;
  color: #fff;
  border-radius: 2px;
  width: 250px;
  height: 51px;
`;

const Cart = () => {
  const {cartItems} =  useSelector(state=>state.cart);
  // const {item} = {cartItems};
  // console.log(item);
  const { id } = useParams();
  const dispatch = useDispatch();
    
  useEffect(() => {
      if(cartItems && id !== cartItems.id)   
          dispatch(AddtoCart(id));
  }, [dispatch, cartItems, id]);

  const removeItemFromCart = (id) => {
      dispatch(RemovefromCart(id));
  }

  const buyNow = async () => {
      // let response = await payUsingPaytm({ amount: 500, email: 'kunaltyagi@gmail.com'});
      // var information = {
      //     action: 'https://securegw-stage.paytm.in/order/process',
      //     params: response    
      // }
      // post(information);
  }
  return (
    <>
    { cartItems.length?        
        <Component container>
          <LeftComponent lg={9} md={9} sm={12} item>
            <Header>
              <Typography style={{fontWeight: 600, fontSize: 18}}>My Cart ({(cartItems.length)}) </Typography>
            </Header>
            {cartItems.map(item => (
                <CartItem item={item} removeItemFromCart={removeItemFromCart}/>
               ))
            }
            <BottomWrapper>
              <StyledButton onClick={()=>buyNow()} variant="contained">Place Order</StyledButton>
            </BottomWrapper>
          </LeftComponent>
          <RightComponent lg={3} md={3} sm={12} item>
            <Totalview cartItems={cartItems} />
          </RightComponent>
        </Component>
        :<EmptyCart/>
    }

    </>
  )
}

export default Cart;