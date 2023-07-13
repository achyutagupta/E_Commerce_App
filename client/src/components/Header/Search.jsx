import { InputBase , Box , styled , List , ListItem , } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import React , {useEffect , useState} from 'react';
import { Link } from 'react-router-dom';
import { getProducts as listProducts } from '../../redux/actions/productActions';
import {useSelector , useDispatch} from 'react-redux';

const Styledcontainer = styled(Box)`
    background:#fff;
    width:38%;
    border-radius:2px;
    margin-left:10px;
    display:flex;
`
const ListWrapper = styled(List)`
  position: absolute;
  color: #000;
  background: #FFFFFF;
  margin-top: 36px;
`

const InputBasestyled = styled(InputBase)`
    padding-left:20px;
    width:100%;
    font-size:unset;
    display:flex;
`

const Searchiconbox = styled(Box)`
    color:#2874f0;
    padding:5px;
`

const Search = () => {
  const [ text, setText ] = useState();
  const [ open, setOpen ] = useState(true)

  const getText = (text) => {
      setText(text);
      setOpen(false);
  }

  const getProducts = useSelector(state => state.getProducts);
  const { products } = getProducts;

  const dispatch = useDispatch();

  useEffect(() => {
      dispatch(listProducts())
  }, [dispatch])


  return (
    <Styledcontainer>
        <InputBasestyled
            placeholder='Search for products, brands and more' onChange={(e)=>getText(e.target.value)}
        />
        <Searchiconbox>
          <SearchIcon/>
        </Searchiconbox>
        {
              text && 
              <ListWrapper hidden={open}>
                {
                  products.filter(product => product.title.longTitle.toLowerCase().includes(text.toLowerCase())).map(product => (
                    <ListItem>
                      <Link 
                        to={`/product/${product.id}`} 
                        style={{ textDecoration:'none', color:'inherit'}}
                        onClick={() => setOpen(true)}  
                      >
                        {product.title.longTitle}
                      </Link>
                    </ListItem>
                  ))
                }  
              </ListWrapper>
            }
    </Styledcontainer>
  )
}

export default Search;
