import React from 'react';

import classes from './Order.module.css';

const Order = props => (
        <div className={classes.Order}>
            <span className={classes.deleteIcon} onClick={props.removed}>X</span>
            <input
                type="text"
                className={props.name ? classes.text : null}
                onChange={(e) => props.changed(e, "name")}
                placeholder="Please add drink"
                value={props.name} />
            <input
                type="number"
                className={props.name ? classes.text : null}
                onChange={(e) => props.changed(e, "price")}
                placeholder="Please add price"
                value={props.price} />
            <label>Note: </label>
            <select onChange={(e) => props.changed(e, "notes")} >
                {props.options.map((opt, i) => (
                    <option key={i} value={opt.value}>{opt.displayValue}</option>
                ))}
            </select>
        </div>
    )

export default Order;