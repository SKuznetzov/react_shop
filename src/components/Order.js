import React, { Component } from 'react'

export default class Order extends Component {
    renderOrder = (key) =>{
        const burger = this.props.burgers[key]
        const count = this.props.order[key]

        const isAvailable = burger && burger.status === 'available'
        if (!isAvailable){
            return <li className="unavailable" key={key}>
                Извините,{burger ? burger.name : 'burger'} временно невщступен
            </li>
        }

        return (
            <li key={key}>
               <span>
                   <span>{count}</span>
                   шт. {burger.name}
                   <span>{count * burger.price} rub</span>
                   <button className="cancellItem">&times;</button>
               </span>
            </li>)
    }
    render() {
        const idOrders = Object.keys(this.props.order)
        const total = idOrders.reduce((prevTotal,key)=>{
            const burger = this.props.burgers[key]
            const count = this.props.order[key]
            const isAvailable = burger && burger.status === 'available'
            if (isAvailable) {
                return prevTotal + burger.price * count
            }
            return prevTotal            
        },0)
        return (
            <div className="order-wrap">
                <h2>Ваш заказ</h2>
                <ul className="order">
                    {idOrders.map(this.renderOrder
                    )}
                </ul>
                <div className="total">
                    <div className="total_wrap">
                        <div className="total_wrap-final">Итого: {total} rub</div>
                    </div>
                </div>
            </div>
        )
    }
}
