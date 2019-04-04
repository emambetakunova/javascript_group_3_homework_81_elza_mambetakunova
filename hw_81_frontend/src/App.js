import React, {Component} from 'react';
import {Switch, Route} from "react-router-dom";

import ShortLink from "./components/ShortLink/ShortLink";


class App extends Component {
    render() {
        return (

            <Switch>
                <Route path="/" exact component={ShortLink}/>
            </Switch>
        );
    }
}

export default App;
