import { Box, Button , styled } from '@mui/material';
import React ,{useState} from 'react';
import {ShoppingCart as Cart ,FlashOn as Flash } from '@mui/icons-material/';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { AddtoCart } from '../../redux/actions/cartActions.js';


const LeftContainer = styled(Box)(({ theme }) => ({
    minWidth: '40%',
    padding: '40px 0 0 80px',
    [theme.breakpoints.down('md')]: {
        padding: '20px 40px'
    }
}))

const Image = styled('img')({
    padding:'15px'
});

const StyledButton = styled(Button)(({theme})=>({
    width: '48%',
    borderRadius: 2,
    height: 50,
    color: '#FFF',
    [theme.breakpoints.down('lg')]:{
        width:'46%'
    },
    [theme.breakpoints.down('sm')]:{
        width:'48%'
    },
}))


const ActionItems = ({product}) => {

    const navigate = useNavigate();
    const dispatch = useDispatch();
    const [quantity , setQuantity] = useState(1);
    const {id} = product;

    const additemtoCart = () =>{
        dispatch(AddtoCart(id , quantity));
        navigate('/cart');
    }

  return (
    <LeftContainer>
        <Box style={{padding: '15px 20px', width: '90%',
    border: '1px solid #f0f0f0'}}><Image src={product.detailUrl} alt="product" /></Box>
      <StyledButton variant='contained' onClick={()=>{additemtoCart()}} style={{marginRight:10,backgroundColor:'#ff9f00'}}><Cart/>Add to Cart</StyledButton>
      <StyledButton variant='contained' style={{backgroundColor:'#fb541b'}}><Flash/>Buy Now</StyledButton>
    </LeftContainer>
  )
}

export default ActionItems;




// import { useState } from 'react';

// import { Button, Box, styled } from '@mui/material';
// import { ShoppingCart as Cart, FlashOn as Flash } from '@mui/icons-material';

// import { useNavigate } from 'react-router-dom';
// import { payUsingPaytm } from '../../service/api';
// import { post } from '../../utils/paytm';

// import { addToCart } from '../../redux/actions/cartActions';
// import { useDispatch } from 'react-redux';

// const LeftContainer = styled(Box)(({ theme }) => ({
//     minWidth: '40%',
//     padding: '40px 0 0 80px',
//     [theme.breakpoints.down('md')]: {
//         padding: '20px 40px'
//     }
// }))

// const Image = styled('img')({
//     padding: '15px 20px',
//     border: '1px solid #f0f0f0',
//     width: '95%'
// });

// const StyledButton = styled(Button)`
//     width: 46%;
//     border-radius: 2px;
//     height: 50px;
//     color: #FFF;
// `;

// const ActionItem = ({ product }) => {
//     const navigate = useNavigate();
//     const { id } = product;
        
//     const [quantity, setQuantity] = useState(1);
//     const dispatch = useDispatch();

//     const buyNow = async () => {
//         let response = await payUsingPaytm({ amount: 500, email: 'codeforinterview01@gmail.com'});
//         var information = {
//             action: 'https://securegw-stage.paytm.in/order/process',
//             params: response    
//         }
//         post(information);
//     }

//     const addItemToCart = () => {
//         dispatch(addToCart(id, quantity));
//         navigate('/cart');
//     }

//     return (
//         <LeftContainer>
//             <Image src={product.detailUrl} /><br />
//             <StyledButton onClick={() => addItemToCart()} style={{marginRight: 10, background: '#ff9f00'}} variant="contained"><Cart />Add to Cart</StyledButton>
//             <StyledButton onClick={() => buyNow()} style={{background: '#fb641b'}} variant="contained"><Flash /> Buy Now</StyledButton>
//         </LeftContainer>
//     )
// }

// export default ActionItem;