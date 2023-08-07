import {AppBar, Toolbar, IconButton, Typography} from "@mui/material";
import {ShoppingBasket} from '@mui/icons-material';

function Header({handleCart}) {
    return (
        <AppBar position="static">
            <Toolbar>
            <Typography 
            variant="h6"
            component="span"
            style={{flexGrow:1}}>
                Darkhan Shop
            </Typography>
            <IconButton 
            color="inherit"
            onClick={() => handleCart()}>
                <ShoppingBasket />
            </IconButton>
            </Toolbar>
        </AppBar>
    )
}

export default Header;