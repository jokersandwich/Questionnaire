import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { Home, Edit, Fill, Check } from './components';

ReactDOM.render(
    <BrowserRouter>
            <div>
                <App />
                <Switch>
                    <Route exact path="/" component={Home} />
                    <Route exact path="/edit" component={Edit} />
                    <Route exact path="/fill" component={Fill} />
                    <Route exact path="/check" component={Check} />
                </Switch>
            </div>
    </BrowserRouter>
    , document.getElementById('root')
);
registerServiceWorker();
