import React, { Component } from 'react'
import Header from './Header'
import Order from './Order'
import MenuAdmin from './MenuAdmin'



export default class App extends Component {
    state = {
        burgers: {},
        order: {}
    }
    addBurger = (burger) =>{
        const burgers = {...this.state.burgers}
        burgers[`burger${Date.now()}`] = burger
        this.setState({burgers})
    }
    render() {
        return (            
            <div className="burger-paradise">
                <div className="menu">
                    <Header title="Very Hot Burger" />
                </div>
                    <Order />
                    <MenuAdmin addBurger={this.addBurger} />
            </div>
        )
    }
}
