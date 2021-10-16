import React, { Component } from 'react'
import Shipment from './Shipment'
import { TransitionGroup, CSSTransition } from 'react-transition-group'
export default class Order extends Component {
    renderOrder = (key) =>{
        const burger = this.props.burgers[key]
        const count = this.props.order[key]

        const isAvailable = burger && burger.status === 'available'
        const transitionOptions = {
            classNames="order",
            key,
            timeout={ enter: 5000, exit: 500}
        }
        if (!burger) return null
        if (!isAvailable){
            return (
                <CSSTransition {...transitionOptions}>
                    <li className="unavailable" key={key}>
                        Извините,{burger ? burger.name : 'burger'} временно невщступен
                    </li>
                </CSSTransition>
            )
        }

        return (
            <CSSTransition {...transitionOptions}>
            <li key={key}>
               <span>
                   <TransitionGroup component='span' className='count'>
                       <CSSTransition 
                       classNames="count"
                       key={count}
                       timeout={{ enter: 5000, exit: 500}}>
                           <span>{count}</span>
                       </CSSTransition>
                   </TransitionGroup>
                   шт. {burger.name}
                   <span>{count * burger.price} rub</span>
                   <button 
                       onClick={() => this.props.deleteFromOrder(key)}
                       className="cancellItem"
                       >&times;
                   </button>
               </span>
            </li>
            </CSSTransition>
        )
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
                <TransitionGroup component='ul' className="order">
                    {idOrders.map(this.renderOrder
                    )}
                </TransitionGroup>
                
                {total > 0 ? (
                    <Shipment total={total} />
                ) : (
                    <div className="nithingSelected">
                        Выберите блюда и добавте к заказу
                    </div>
                )}
            </div>
        )
    }
}
