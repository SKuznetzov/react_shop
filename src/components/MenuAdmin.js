import React, { Component } from 'react'
import PropTypes from 'prop-types'

import AddBurgerForm from './AddBurgerForm'
import EditBurgerForm from './EditBurgerForm'
export default class MenuAdmin extends Component {
    
    state = {
        photo: '',
        user: ''
    }
    static propTypes = {
        burgers: PropTypes.object,
        deleteBurger: PropTypes.func,
        updateBurger: PropTypes.func,
        addBurger: PropTypes.func,
        loadSampleBurgers: PropTypes.func,

    }
    render() {
        return (
            <div className="menu-admin">
                <div className="login-header">
                    <div className="avatar">
                        <img src='/images/avatar.png' alt='avatar' />
                    </div>
                    <button className="buttonLogout"
                            onClick={this.props.handleLogout}
                            >Выйти
                    </button>
                </div>
                <h2>Управление меню</h2>
                {Object.keys(this.props.burgers).map(key =>{
                    return <EditBurgerForm 
                    key={key} 
                    index={key}
                    deleteBurger={this.props.deleteBurger}
                    burger={this.props.burgers[key]} 
                    updateBurger={this.props.updateBurger}
                    />
                })}
                <AddBurgerForm addBurger={this.props.addBurger} />
                <button onClick={this.props.loadSampleBurgers}>Загрузить бургеры</button>
            </div>
        )
    }
}
