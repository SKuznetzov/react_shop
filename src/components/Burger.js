import React, { Component } from 'react'
import PropTypes from 'prop-types'


export default class Burger extends Component {

    static propTypes = {
        details: PropTypes.shape({
            image: PropTypes.string,
            name: PropTypes.string,
            price: PropTypes.number,
            desc: PropTypes.string,
            status: PropTypes.string
        }),
        index: PropTypes.string,
        addOrder: PropTypes.func
    }
    handleClick = () =>{
        this.props.addOrder(this.props.index)
    }
    render() {
        const { image,name,price,desc,status } = this.props.details
        const isAvailable = status === 'available'
        return (
            <li className="menu-burger">
                <div className="image-container">
                    <img src={image} alt={name}/>
                </div>
                <div className="image-details">
                    <h3 className="burger-name">{name}
                    <span className="price">{price} rub</span>
                    </h3> 
                    <p>{desc}</p>
                    <button 
                    className="buttonOrder" 
                    disabled={!isAvailable}
                    onClick={this.handleClick}
                    >
                        {isAvailable ? 'Заказать' : 'Временно нет'}</button>
                </div>
            </li>
        )
    }
}
