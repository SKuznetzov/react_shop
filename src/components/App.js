import React,{Component} from 'react';
import restaurants from '../sample-restaurants';


class App extends Component {
    render(){

        return (
            <div className='restorant_select'>
               <div className='restorant_select_top'>
                  <div className='restorant_select_top-header font-effect-outline'>Выбери ресторан</div>
                   
                  <div className='arrow_picker'>
                  <div className='arrow_picker_up'></div>
                  <div className='arrow_picker_down'></div>
                </div>
              </div>

              <div className='restaurant_select_button'>
                  <ul>
                      {restaurants.map(restaurant =>{
                       return <li key={restaurant.id}>{restaurant.title}</li>
                      })}
                  </ul>
              </div>
              <button>Перейти в ресторан</button>
            </div>
        );
    }
}
 export default App;