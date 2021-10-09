import React,{Component} from 'react';
import restaurants from '../sample-restaurants';


class Landing extends Component {
    state = {
        display: false,
        title: '',
        url: ''
    }

    displayList = ()=>{
        const {display} = this.state;
        this.setState({
            display: !display
        });
    };

    getTitle = (restaurant)=>{
        const {title,url} = restaurant;
        this.setState({
            title,url,display: false
        })
    };

    getRestaurant = ()=>{
        console.log('111')
    };
    render(){

        return (
            <div className='restorant_select'>
               <div className='restorant_select_top'>
                  <div onClick={this.displayList}className='restorant_select_top-header font-effect-outline'>{this.state.title ? this.state.title : 'Выбери ресторан'}</div>
                   
                  <div className='arrow_picker'>
                  <div className='arrow_picker_up'></div>
                  <div className='arrow_picker_down'></div>
                </div>
              </div>

              {this.state.display ? (<div className='restaurant_select_button'>
                  <ul>
                      {restaurants.map(restaurant =>{
                       return <li onClick={()=>this.getTitle(restaurant)}key={restaurant.id}>{restaurant.title}</li>
                      })}
                  </ul>
              </div>) : null}
              {this.state.title && !this.state.display ? <button onClick={this.getRestaurant}>Перейти в ресторан</button> : null}
            </div>
        );
    }
}
 export default Landing;