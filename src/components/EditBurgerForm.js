import React, { Component } from 'react'

export default class EditBurgerForm extends Component {
    render() {
        return (
            <div className="burger-edit">
                <input name='name' type='text' />
                <input name='price' type='text' />
                <select name='status' className='status'>
                    <option value='available'>Доступно</option>
                    <option value='unavailable'>Неоступно</option>
                </select>
                <textarea name='desc' />
                <input name='image' type='text' />
            </div>
        )
    }
}
