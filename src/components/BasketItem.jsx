import {ListItem} from "@mui/material"
const BasketItem = (props) => {
    return (
        <ListItem>
            {props.name} {props.price}руб x{props.quantity}
            <button
                className='btn btn-primary'
                onClick={() => props.setOrder(props.id)}
            >
                Удалить из корзины
            </button>
        </ListItem>
    );
};

export default BasketItem;