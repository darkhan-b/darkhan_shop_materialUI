import React from 'react'
import {Drawer,  List, ListItem, ListItemIcon, ListItemText, Divider, Typography} from "@mui/material"
import BasketItem from './BasketItem';
import { ShoppingBasket } from '@mui/icons-material';
const Basket = (props) => {
    const {
        cartOpen,
        closeCart = Function.prototype,
        order = [],
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
            ) : (
            <>
            {order.map((item) => (
                <BasketItem 
                key={item.name} 
                removeFromOrder={removeFromOrder} 
                {...item}/>
            ))}
            <Divider/>
            <ListItem>
                <Typography sx={{fontWeight: 700}}>
                    Общая стоймость: {' '}
                    {order.reduce((acc,item) => {
                        return acc + item.price * item.quantity;
                    },0)}{' '} тенге.
                </Typography>
            </ListItem>
            
            </>
            )}
        </List>
    </Drawer>
  )
}

export default Basket