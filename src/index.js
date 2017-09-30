import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { Home, Edit, Fill, Check } from './components';

ReactDOM.render(
    <BrowserRouter>
        <div style={{ background: '#eee', height: '100%' }}>
            <App />
            <div style={{ width: '80%', margin: '80px auto', padding: '20px 40px 40px 40px', background: '#fff' }}>
                <Switch>
                    <Route exact path="/" component={Home} />
                    <Route exact path="/edit" component={Edit} />
                    <Route exact path="/fill" component={Fill} />
                    <Route exact path="/check" component={Check} />
                </Switch>
            </div>
        </div>
    </BrowserRouter>
    , document.getElementById('root')
);
registerServiceWorker();
