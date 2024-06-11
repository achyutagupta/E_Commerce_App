import { InputBase , Box , styled , List , ListItem , } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import KeyboardVoiceIcon from '@mui/icons-material/KeyboardVoice';
import CloseIcon from '@mui/icons-material/Close';
import React , {useEffect , useState} from 'react';
import { Link } from 'react-router-dom';
import { getProducts as listProducts } from '../../redux/actions/productActions';
import {useSelector , useDispatch} from 'react-redux';
import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition';

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
    display:flex;
    justify-content:space-inbetween;
    color:#2874f0;
    padding:5px;
`




const Search = () => {

  
  const [ text, setText ] = useState();
  const [ open, setOpen ] = useState(true);
  const [ mic, setmic ] = useState(true);
  // const [ textval , setval] = useState('');
  
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

  const startlistening = () => {
    setmic(false);
    SpeechRecognition.startListening({ continuous: true });
  }
  
  const { transcript , resetTranscript , browserSupportsSpeechRecognition } = useSpeechRecognition();
  if (!browserSupportsSpeechRecognition) {
    return null
  }

  const handleClick = () =>{
    const textt = {transcript}
    console.log(transcript);
    getText(textt.transcript);
  }
  const handleclose = () =>{
    SpeechRecognition.stopListening();
    setmic(true);
  }


  return (
    <Styledcontainer>
      {/* <div>{transcript}</div> */}
        <InputBasestyled
            placeholder='Search for products, brands and more' value={mic?'':transcript} onChange={(e)=>getText(e.target.value)}
        />
        <Searchiconbox>
            
            {mic?<KeyboardVoiceIcon onClick={startlistening}/>:<CloseIcon onClick={()=>handleclose() & resetTranscript()} />}
            <SearchIcon onClick={()=>handleClick()}/>
            
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
