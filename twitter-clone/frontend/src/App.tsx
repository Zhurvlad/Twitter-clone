import React from 'react';
import Button from '@material-ui/core/Button';
import {Switch, Route} from 'react-router-dom'

import {ThemeProvider} from '@material-ui/core'
import theme from './theme'
import {Home} from "./pages/Home";
import {SignIn} from "./pages/SignIn";

function App() {
    return (
        <div className="App">
            <ThemeProvider theme={theme}>
                <Switch>
                    <Route path={'/signin'} component={SignIn} exact/>
                    <Route path={'/'} component={Home} />
                </Switch>
            </ThemeProvider>
        </div>
    );
}

export default App;
