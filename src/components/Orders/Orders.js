import React from 'react';

import Order from './Order/Order';
import classes from './Orders.module.css'

const Orders = props => {
    const orders = props.drinks.map((order, i) => {
        return <Order
            key={i}
            {...order}
            removed={() => props.removed(i)}
            changed={(e, type) => props.edited(e, type, i)}/>
    })
    return (
        <>
            {orders}
        </>
    );
}

export default Orders;