import React, { Component } from 'react'
import Header from './Header'
import Order from './Order'
import MenuAdmin from './MenuAdmin'
import Burger from './Burger'
import sampleBurgers from '../sample-burgers'
import base from '../base'

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
    addOrder = key =>{
        const order = {...this.state.order}
        order[key] = order[key] + 1 || 1
        this.setState({order})
    }
    render() {
        return (            
            <div className="burger-paradise">
                <div className="menu">
                    <Header title="Very Hot Burger" />
                    <ul className="burgers">
                        {Object.keys(this.state.burgers).map(key =>{
                            return <Burger 
                            key={key}
                            index={key}
                            addOrder={this.addOrder}
                            details={this.state.burgers[key]} />
                        })}
                    </ul>
                </div>
                    <Order burgers={this.state.burgers} order={this.state.order} />
                    <MenuAdmin 
                    addBurger={this.addBurger} 
                    loadSampleBurgers={this.loadSampleBurgers}
                    />
            </div>
        )
    }
}
