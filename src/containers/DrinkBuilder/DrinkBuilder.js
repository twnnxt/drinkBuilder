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
