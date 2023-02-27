import { useState } from 'react';
import {AppBar,Toolbar,styled,Box, Typography ,InputBase} from  '@mui/material'
import {Menu,BookmarkAdd,ExpandMore} from '@mui/icons-material';
import { logoURL } from '../../constant/constant';
import { routePath } from '../../constant/route';
import HeaderMenu from './HeaderMenu';
import {useNavigate} from 'react-router-dom'

const StyledToolBar = styled(Toolbar)`
background:black;
min-height:56px !important;
padding:0  115px !important;
justify-content:space-between;
&> *{
    padding:0 16px;
}
&>div{
    display:flex;
    align-item:center;
    cursor:pointer;
    &>p{
        font-size:14px;
        font-weight:600;
    }
}
&>p{
    font-size:14px;
        font-weight:600;
}`

const InputSearchField = styled(InputBase)`
background:white;
height:30px;
width:55%;
border-radius:5px`

const Logo = styled('img')({
    width:64
})


const Header = ()=>{
    const [open,setopen] = useState(null);

    const navigate =  useNavigate();

    const  handleClick = (e)=>{
        setopen(e.currentTarget);
    }

    const handleClose =()=>{
        setopen(null);
    }
    return (
        <div>
           <AppBar position='static'>
            <StyledToolBar>
               <Logo src={logoURL} alt="logo" onClick={()=> navigate(routePath.home)}/>
                <Box  onClick={handleClick}>
                <Menu/>
                <Typography>Menu</Typography>
                </Box> 
                <HeaderMenu open={open} handleClose={handleClose}/>
                <InputSearchField/>
                <Typography>IMDb<Box component='span'>Pro</Box></Typography>
                <Box>
                    <BookmarkAdd/>
                    <Typography>watchlist</Typography>
                </Box>
                <Typography>Sign in</Typography>
                <Box>
                    <Typography>EN</Typography>
                </Box>
                <ExpandMore/>
            </StyledToolBar>
           </AppBar> 
        </div>
    )
}


export default Header