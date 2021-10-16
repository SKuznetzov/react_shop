import React, { Component } from 'react'

export default class EditBurgerForm extends Component {
    render() {
        return (
            <div className="burger-edit">
                <input name='name' type='text' value={this.props.burger.name } />
                <input name='price' type='text' value={this.props.burger.price} />
                <select name='status' className='status'value={this.props.burger.status} >
                    <option value='available'>Доступно</option>
                    <option value='unavailable'>Неоступно</option>
                </select>
                <textarea name='desc' value={this.props.burger.desc} />
                <input name='image' type='text' value={this.props.burger.image} />
            </div>
        )
    }
}
