import React from 'react'
import Landing from './Landing'
import { BrowserRouter,Route,Switch} from 'react-router-dom'

export default function Router() {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path='/' component={Landing} />
            </Switch>
        </BrowserRouter>
    )
}


