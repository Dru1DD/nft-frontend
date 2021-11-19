import React from 'react'
import {
    HashRouter,
    Switch,
    Route
} from 'react-router-dom'
import App from './App'
import Gallery from './screens/Gallery/Gallery'
import Marketplace from './screens/MarketPlace/Marketplace'
import MyStuff from './screens/MyStuff/MyStuff'
import NoMatch from './screens/NoMatch/NoMatch'

const  RouterHandler: React.FunctionComponent = () => {
    return (
        <HashRouter basename='/'>
            <Switch>
                <Route exact path="/" component={App} />
                <Route exact  path="/gallery" component={Gallery} />
                <Route exact path="/marketplace" component={Marketplace} />
                <Route exact path="/mystuff" component={MyStuff} />
                <Route path="*" component={NoMatch} />
            </Switch>
        </HashRouter>
    )
}

export default RouterHandler