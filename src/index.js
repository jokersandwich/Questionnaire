import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

const Home = () => (<div><h2>Home</h2></div>);
const Edit = () => (<div><h2>Edit</h2></div>);
const Fill = () => (<div><h2>Fill</h2></div>);
const Check = () => (<div><h2>Check</h2></div>);

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
