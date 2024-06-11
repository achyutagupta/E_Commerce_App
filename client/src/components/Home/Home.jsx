import React , {useEffect} from 'react';

//components
import Navbar from './Navbar';
import Banner from './Banner';
import Slide from './Slide';
import Midslide from './Midslide';
import Midsection from './Midsection';



import { styled , Box } from '@mui/material';
import { getProducts } from '../../redux/actions/productActions';
import {useDispatch , useSelector} from 'react-redux'

const Component = styled(Box)`
    padding : 10px ;
    background:#F2F2F2;
`

const Home = () => {

  const {products}  = useSelector(state=> state.getProducts);
  const dispatch = useDispatch();

  useEffect(()=>{
    dispatch(getProducts());
  } , [dispatch]);

  return (
    <>
        <Navbar/>
        <Component>
            <Banner/>
            <Midslide products={products} title="Deal of the Day" timer={true}/>
            <Midsection/>
            <Slide products={products} title="Discounts for You" timer={false}/>
            <Slide products={products} title="Suggested Items" timer={false}/>
            <Slide products={products} title="Top Selection" timer={false}/>
            <Slide products={products} title="Trending Offers" timer={false}/>
            <Slide products={products} title="Recommended Items" timer={false}/>
            <Slide products={products} title="Top Deal on Accessories" timer={false}/>
        </Component>
    </>
  )
}

export default Home;
