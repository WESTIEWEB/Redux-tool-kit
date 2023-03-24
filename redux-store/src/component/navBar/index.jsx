import React from 'react'
import Box from '@mui/material/Box';
import LocalMallIcon from '@mui/icons-material/LocalMall';
import { NavBarContainer, useStyle, CartParagraph } from './style';
import { useSelector } from 'react-redux';

const Navbar = () => {
    const classes = useStyle();
    const item = 3;
    console.log(useSelector(state => state)  )

    const CartItems = () => {
        if(item > 0) {
            return (
                <CartParagraph>
                    {item}
                </CartParagraph>
            )
        } else {
            return ('')
        }
    }
  return (
    <NavBarContainer>
        <span>
            Redux Toolkit
        </span>
        <Box className={classes.cartBox}>
            <LocalMallIcon style={{color: '#FFF'}} />
            <CartItems />
        </Box>

    </NavBarContainer>
  )
}
export default Navbar;