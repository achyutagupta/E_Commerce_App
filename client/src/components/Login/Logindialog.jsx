import React , {useState , useContext} from 'react';

import { DataContext } from '../../context/Dataprovider';

import { Dialog  , Box , TextField, Typography, Button , styled} from '@mui/material';
import { authenticateSignup , authenticateLogin} from '../../service/api';

const Component = styled(Box)`
    height:74vh;
    width:90vh;
    display:flex;
`
const Image = styled(Box)`
    background:#2874f0 url('https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/login_img_c4a81e.png') center 85% no-repeat;
    height:83%;
    width:28%;
    padding:45px 35px;
    & > p, & > h5{
        color:#ffffff;
        font-weight:600;
    }
`

const Wrapper = styled(Box)`
    display:flex;
    flex-direction:column;
    padding:25px 35px;
    flex:1;
    & > div , & > p{
        margin-top:15px;
    } 
`

const Loginbutton = styled(Button)`
    text-transform:none;
    background: #FB6418;
    color:#fff;
    height:48px;
    border-radius:2px;
    margin-top: 20px;
`
const Otpbutton = styled(Button)`
    text-transform:none;
    background: #fff;
    color:#2874f0;
    height:48px;
    border-radius:2px;
    box-shadow: 0 2px 4px 0 rgb(0 0 0/ 20%);
    margin-top: 10px;
`

const Text = styled(Typography)`
    font-size:12px;
    color:#878787;
`
const Createaccount = styled(Typography)`
    font-size:14px;
    text-align:center;
    color:#2874f0;
    font-weight:600;
    cursor:pointer;
`
const Error = styled(Typography)`
    font-size:10px;
    color:#ff6161;
    line-height:0;
    margin-top:10px;
    font-weight:600;
`
const Accountinitialvalues = {
    login:{
        view: 'login',
        heading: "Login",
        subHeading: "Get access to your orders, wishlist and Recommendations."
    },
    signup:{
        view: 'signup' ,
        heading: "Looks like you're new here!" , 
        subHeading: "Signup with your mobile to get started."
    }
}

const Signupinitialvalues = {
    firstname:'',
    lastname:'',
    username:'',
    email:'',
    password:'',
    phone:''
}
const LoginInitialValues = {
    username:'',
    password:''
}


const Logindialog = ({open , setOpen}) => {

    const [account , toggleAccount] = useState(Accountinitialvalues.login);
    const [signup , setsignup]= useState(Signupinitialvalues);
    const [login , setlogin]= useState(LoginInitialValues);
    const [error , seterror]= useState(false);
    const {setaccount}=useContext(DataContext);

    const handleClose =()=>{
        setOpen(false);
        toggleAccount(Accountinitialvalues.login);
    }

    const toggleSignup = ()=>{
        toggleAccount(Accountinitialvalues.signup);
    }

    const onInputChange = (e) =>{
        setsignup({...signup,[e.target.name]:e.target.value});  
    }

    const signupuser = async () => {
        let response = await authenticateSignup(signup);
        console.log(response);
        handleClose();
        setaccount(signup.firstname);   
    }

    const onValueChange = (e)=>{
        setlogin({...login,[e.target.name]:e.target.value});
    }

    const loginuser = async () =>{
        let response = await authenticateLogin(login);
        console.log(response);
        if(response.status===200){
            handleClose();
            setaccount(response.data.data.firstname);
        }
        else{
            seterror(true);
        }
    }

    return (
        <Dialog open={open} onClose={handleClose} PaperProps={{ sx: {maxWidth : 'unset'}}}>
            <Component>
                <Image>
                    <Typography variant='h5'>{account.heading}</Typography>
                    <Typography style={{marginTop:20}}>{account.subHeading}</Typography>
                </Image>
                {
                    (account.view==='login')?
                    <Wrapper>
                        <TextField variant='standard' label='Enter Username' name='username' onChange={(e)=>onValueChange(e)}/>
                        <TextField variant='standard' label='Enter Password' name='password' onChange={(e)=>onValueChange(e)}/>
                        {error&&<Error>Please enter valid username and password</Error>}
                        <Text>By continuing, you agree to flipkart terms of Use and Privacy Policy.</Text>
                        <Loginbutton onClick={()=>{loginuser()}}>Login</Loginbutton>
                        <Typography style={{textAlign:'center'}}>OR</Typography>
                        <Otpbutton>Request OTP</Otpbutton>
                        <Createaccount onClick={() => toggleSignup()}>New to Flipkart?Create an account</Createaccount>
                    </Wrapper>
                    :
                    <Wrapper>
                        <TextField variant='standard' label='Enter Firstname' name='firstname' onChange={(e)=>onInputChange(e)}/>
                        <TextField variant='standard' label='Enter Lastname' name='lastname' onChange={(e)=>onInputChange(e)}/>
                        <TextField variant='standard' label='Enter Username' name='username' onChange={(e)=>onInputChange(e)}/>
                        <TextField variant='standard' label='Enter Email' name='email' onChange={(e)=>onInputChange(e)}/>
                        <TextField variant='standard' label='Enter Password' name='password' onChange={(e)=>onInputChange(e)}/>
                        <TextField variant='standard' label='Enter Phone' name='phone' onChange={(e)=>onInputChange(e)}/>
                        <Loginbutton onClick={()=>signupuser()}>Continue</Loginbutton>
                    </Wrapper>
                }
            </Component>
        </Dialog>
    )
}

export default Logindialog;
