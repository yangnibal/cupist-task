import React from 'react'
import { Route, Switch, BrowserRouter } from 'react-router-dom'
import { PATHS } from './constants/paths'
import Routes from './pages'

const Router = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path={PATHS.HOME} component={Routes.Home}/>
                <Route exact path={PATHS.PROFILE} component={Routes.Profile}/>
                <Route exact path={PATHS.PROFILE + PATHS.EDIT} component={Routes.EditProfile}/>
            </Switch>
        </BrowserRouter>
    )
}

export default Router