import React from 'react'
import {Drawer,  List, ListItem, ListItemIcon, ListItemText, Divider} from "@mui/material"
import BasketItem from './BasketItem';
import { ShoppingBasket } from '@mui/icons-material';
const Basket = (props) => {
    const {
        cartOpen,
        closeCart = Function.prototype,
        order,
        removeFromOrder
    } = props;
  return (
    <Drawer 
    anchor="right"
    open={cartOpen}
    onClose={closeCart}> 
        <List sx={{width: "400px"}}>
            <ListItem>
                <ListItemIcon>
                    <ShoppingBasket/>
                </ListItemIcon>
                <ListItemText primary="Корзинка" />
            </ListItem>
            <Divider />
            {!order.length ? (
                <ListItem>Корзина пуста"</ListItem>
            ) : (order.map((item) => (
                <BasketItem key={item.name} removeFromOrder={removeFromOrder} {...item}/>
            )))}
        </List>
    </Drawer>
  )
}

export default Basket