import {ListItem, IconButton, Typography} from "@mui/material"
import {Close} from "@mui/icons-material"
const BasketItem = ({removeFromOrder, id, name, price, quantity }) => {
    return (
        <ListItem>
            <Typography variant="body1">
            {name} {price} тг x{quantity}
            </Typography>
            <IconButton
               
                onClick={() => removeFromOrder(id)}
            >
                 <Close />
            </IconButton>
        </ListItem>
    );
};

export default BasketItem;