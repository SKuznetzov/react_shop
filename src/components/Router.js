import React from 'react'
import App from './App'
import Landing from './Landing'
import NotFound from './NotFound'
import { BrowserRouter,Route,Switch} from 'react-router-dom'

export default function Router() {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path='/' component={Landing} />
                <Route path='/restaurant/:restaurantId'  component={App} />
                <Route component={NotFound} />
            </Switch>
        </BrowserRouter>
    )
}


