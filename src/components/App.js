import React, { Component } from 'react'
import Header from './Header'
import Order from './Order'
import MenuAdmin from './MenuAdmin'
import sampleBurgers from '../sample-burgers'


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
    loadSampleBurgers = () =>{
        this.setState({burgers: sampleBurgers})
    }
    render() {
        return (            
            <div className="burger-paradise">
                <div className="menu">
                    <Header title="Very Hot Burger" />
                </div>
                    <Order />
                    <MenuAdmin 
                    addBurger={this.addBurger} 
                    loadSampleBurgers={this.loadSampleBurgers}
                    />
            </div>
        )
    }
}
