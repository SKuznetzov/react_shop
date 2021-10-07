import React,{Component} from 'react';
import restaurants from '../sample-restaurants';


class App extends Component {
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
    }
    render(){

        return (
            <div className='restorant_select'>
               <div className='restorant_select_top'>
                  <div onClick={this.displayList}className='restorant_select_top-header font-effect-outline'>Выбери ресторан</div>
                   
                  <div className='arrow_picker'>
                  <div className='arrow_picker_up'></div>
                  <div className='arrow_picker_down'></div>
                </div>
              </div>

              {this.state.display ? (<div className='restaurant_select_button'>
                  <ul>
                      {restaurants.map(restaurant =>{
                       return <li key={restaurant.id}>{restaurant.title}</li>
                      })}
                  </ul>
              </div>) : null}
              <button>Перейти в ресторан</button>
            </div>
        );
    }
}
 export default App;