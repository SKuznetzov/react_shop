import React, { Component } from 'react'
import AddBurgerForm from './AddBurgerForm'
import EditBurgerForm from './EditBurgerForm'
export default class MenuAdmin extends Component {
    render() {
        return (
            <div className="menu-admin">
                <h2>Управление меню</h2>
                {Object.keys(this.props.burgers).map(key =>{
                    return <EditBurgerForm key={key} burger={this.props.burgers[key]} />
                })}
                <AddBurgerForm addBurger={this.props.addBurger} />
                <button onClick={this.props.loadSampleBurgers}>Загрузить бургеры</button>
            </div>
        )
    }
}
