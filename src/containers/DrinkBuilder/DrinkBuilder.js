// import React, { Component } from 'react';

// import Orders from '../../components/Orders/Orders';
// import Button from '../../components/UI/Button/Button';
// import classes from './DrinkBuilder.module.css'

// class DrinkBuilder extends Component {
//     state = {
//         drinks: [
//             {
//                 name:'Bubble Milk Tea',
//                 price: 50,
//                 notes: '',
//                 options: [
//                     { value: 'common', displayValue: '-' },
//                     { value: 'no ice, less sugar', displayValue: 'No ice, less sugar' },
//                     { value: '50% ice, 50% sugar', displayValue: '50% ice, 50% sugar' },
//                     { value: '80% ice, 20% sugar', displayValue: '80% ice, 20% sugar' },
//                 ]
//             },
//             // {
//             //     name:'Jasmine Tea',
//             //     price: 40,
//             //     notes: '',
//             //     options: [
//             //         { value: 'common', displayValue: '-' },
//             //         { value: 'no ice, less sugar', displayValue: 'No ice, less sugar' },
//             //         { value: '50% ice, 50% sugar', displayValue: '50% ice, 50% sugar' },
//             //         { value: '80% ice, 20% sugar', displayValue: '80% ice, 20% sugar' },
//             //     ]
//             // },
//             // {
//             //     name:'Black Tea',
//             //     price: 35,
//             //     notes: '',
//             //     options: [
//             //         { value: 'common', displayValue: '-' },
//             //         { value: 'no ice, less sugar', displayValue: 'No ice, less sugar' },
//             //         { value: '50% ice, 50% sugar', displayValue: '50% ice, 50% sugar' },
//             //         { value: '80% ice, 20% sugar', displayValue: '80% ice, 20% sugar' },
//             //     ]
//             // },
//             // {
//             //     name: 'Americano',
//             //     price: 90,
//             //     notes: '',
//             //     options: [
//             //         { value: 'common', displayValue: '-' },
//             //         { value: 'no ice, less sugar', displayValue: 'No ice, less sugar' },
//             //         { value: '50% ice, 50% sugar', displayValue: '50% ice, 50% sugar' },
//             //         { value: '80% ice, 20% sugar', displayValue: '80% ice, 20% sugar' },
//             //     ]
//             // },
//         ]
//     }

//     addDrinkHandler = (name, price) => {
//         const drinks = [...this.state.drinks];
//         console.log(drinks)
//         drinks.push({
//             name: '',
//             price: '',
//             notes: '',
//             options: [
//                 { value: null, displayValue: '-' },
//                 { value: 'no ice, less sugar', displayValue: 'No ice, less sugar' },
//                 { value: '50% ice, 50% sugar', displayValue: '50% ice, 50% sugar' },
//                 { value: '80% ice, 20% sugar', displayValue: '80% ice, 20% sugar' },
//             ]
//         });
//         console.log({drinks})
//         this.setState({drinks: drinks});
//     };

//     removeDrinkHandler = (index) => {
//         const updateddrinks = [...this.state.drinks];
//         console.log(index)
//         updateddrinks.splice(index, 1);
//         this.setState({drinks: updateddrinks });
//     }

//     clickedDrinkHandler = e => {
//         e.stopPropagation();
//     }

//     changeDrinkHandler = (e, type, index) => {
//         console.log(e.target.value, type, index)
//         const editedValue = e.target.value;
//         const updateddrinks = [...this.state.drinks];
//         const updateddrink = {...updateddrinks[index]};
//         updateddrink[type] = editedValue;
//         updateddrinks[index] = updateddrink;
//         console.log(updateddrinks)
//         this.setState=({drinks: updateddrinks});
//     }

//     render() {
//         console.log(this.state.drinks)
//         return (
//             <>
//                 <input className={classes.input} />
//                 <Orders
//                     drinks={this.state.drinks}
//                     removed={this.removeDrinkHandler}
//                     added={this.addDrinkHandler}
//                     edited={this.changeDrinkHandler}
//                     clicked={this.clickedDrinkHandler} />
//             </>
//         );
//     }

// }

// export default DrinkBuilder;



import React, { Component } from 'react';

import Orders from '../../components/Orders/Orders';

class DrinkBuilder extends Component {
    state = {
        drinks: [
            {
                name: 'Bubble Milk Tea',
                price: 50,
                notes: '',
                options: [
                    { value: 'common', displayValue: '-' },
                    { value: 'no ice, less sugar', displayValue: 'No ice, less sugar' },
                    { value: '50% ice, 50% sugar', displayValue: '50% ice, 50% sugar' },
                    { value: '80% ice, 20% sugar', displayValue: '80% ice, 20% sugar' },
                ]
            },
        ],
        onBlur: false
    }

    addDrinkHandler = () => {
        const drinks = [...this.state.drinks];
        drinks.push({
            name: '',
            price: '',
            notes: '',
            options: [
                { value: null, displayValue: '-' },
                { value: 'no ice, less sugar', displayValue: 'No ice, less sugar' },
                { value: '50% ice, 50% sugar', displayValue: '50% ice, 50% sugar' },
                { value: '80% ice, 20% sugar', displayValue: '80% ice, 20% sugar' },
            ]
        });
        this.setState({ drinks: drinks });
    };

    removeDrinkHandler = (index) => {
        const updateddrinks = [...this.state.drinks];
        console.log(index)
        updateddrinks.splice(index, 1);
        this.setState({ drinks: updateddrinks });
    }

    changeDrinkHandler = (e, type, index) => {
        console.log(e.target.value, type, index)
        const editedValue = e.target.value;
        const updateddrinks = [...this.state.drinks];
        const updateddrink = { ...updateddrinks[index] };
        updateddrink[type] = editedValue;
        updateddrinks[index] = updateddrink;
        this.setState({ drinks: updateddrinks });
    }

    render() {
        console.log("state: ", this.state)
        return (
            <>  
                <h3>What's your order today?</h3>
                <Orders
                    drinks={this.state.drinks}
                    removed={this.removeDrinkHandler}
                    edited={(e, type, index) => this.changeDrinkHandler(e, type, index)} />
                <button onClick={this.addDrinkHandler}>ADD ONE!</button>
            </>
        );
    }

}

export default DrinkBuilder;
