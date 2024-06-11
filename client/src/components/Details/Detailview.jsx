import React , {useEffect} from 'react';
import {useDispatch , useSelector} from 'react-redux';
import {useParams} from 'react-router-dom';
import { getProductDetails } from '../../redux/actions/productActions';
import { Box , Grid,styled } from '@mui/material';
import ActionItems from './ActionItems';
import ProductDetails from './ProductDetails';

const Component = styled(Box)`
    margin-top: 55px;
    background: #F2F2F2;
`
const Container = styled(Grid)(({ theme }) => ({
    background: '#FFFFFF',
    display: 'flex',
    [theme.breakpoints.down('md')]: {
        margin: 0
    }
}))

const RightContainer = styled(Grid)`
    margin-top:50px;
    padding: 0 0 0 24px;
`


const Detailview = () => {
    
    
    
    const { loading , product}  = useSelector(state=> state.getProductDetails);
    
    const dispatch = useDispatch();
    
    const { id } = useParams();
    
    // console.log({product});
    
    useEffect(()=>{
        if( product && id!== product.id)
        dispatch(getProductDetails(id));
    } , [dispatch , id ,product , loading])
    


    return (
        <Component>
            {product && Object.keys(product).length&& 
                    <Container container>
                        <Grid item lg={4} md={4} sm={4} xs={12}>
                            <ActionItems product={product}/>
                        </Grid>
                        <RightContainer item lg={8} md={4} sm={8} xs={12}>
                            <ProductDetails product={product}/>
                        </RightContainer>
                    </Container>}
        </Component>
    )
}

export default Detailview;
