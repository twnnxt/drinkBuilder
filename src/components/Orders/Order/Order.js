// import React from 'react';

// import classes from './Order.module.css';

// const Order = props => {
//     console.log(props)
//     return (
//         <div className={classes.BuildControl} onClick={props.removed}>
//             <div
//                 onClick={(e) => props.clicked(e)}
//                 onInput={(e) => props.changed(e, "name")}
//                 onBlur={(e) => props.changed(e, "name")}
//                 placeholder="Please add drink"
//                 contentEditable="true">{props.name}</div>
//             <div
//                 onClick={(e) => props.clicked(e)}
//                 onInput={(e) => props.changed(e, "price")}
//                 onBlur={(e) => props.changed(e, "price")}
//                 placeholder="Please add price"
//                 contentEditable="true">{props.price}</div>
//             <label>Notes: </label>
//             <select
//                 onClick={(e) => props.clicked(e)}
//                 onChange={(e) => props.changed(e, "notes")} >
//                 {props.options.map((opt, i) => (
//                     <option key={i} value={opt.value}>{opt.displayValue}</option>
//                 ))}
//             </select>
//         </div>
//     )
// }

// export default Order;


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