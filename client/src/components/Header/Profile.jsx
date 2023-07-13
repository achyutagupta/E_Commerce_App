import React, { useState } from 'react';
import { Box , Typography , MenuItem ,styled } from '@mui/material';
import {Menu} from '@mui/material';
import PowerSettingsNewIcon from '@mui/icons-material/PowerSettingsNew';

const Component = styled(Menu)`
    margin-top:5px;
`
const Logout = styled(Typography)`
    font-size: 14px;
    margin-left: 20px;
`


const Profile = ({account , setaccount}) => {

    const [open , setOpen] = useState(false);

    const handleClick = (event)=>{
        setOpen(event.currentTarget);
    }

    const handleClose = ()=>{
        setOpen(false);
    }

    const logoutuser = () =>{
        setaccount('');
    }

  return (
    <>
      <Box onClick={handleClick}>
        <Typography style = {{marginTop:3 , cursor:'pointer'}}>{account}</Typography>
      </Box>
      <Component
        anchorEl={open}
        open={Boolean(open)}
        onClose={handleClose}
      ><MenuItem onClick={()=>{handleClose();logoutuser();}}>
        <PowerSettingsNewIcon color='primary' fontSize='small'/>
        <Logout>Logout</Logout>
      </MenuItem>
      </Component>
    </>
  )
}

export default Profile;
