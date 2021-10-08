import React, { Component } from 'react'
import Header from './Header'
import Order from './Order'
import MenuAdmin from './MenuAdmin'



export default class App extends Component {
    render() {
        return (
            
                <div className="burger-paradise">
                    <div className="menu">
                        <Header />
                    </div>
                        <Order />
                        <MenuAdmin />
                    </div>
            
        )
    }
}
