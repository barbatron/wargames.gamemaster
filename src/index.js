import React from 'react'
import {render} from 'react-dom'
import {Provider} from 'react-redux'
import configureStore from './store/configureStore'
import rootSaga from './sagas'
import {Route, Router} from 'react-router-dom';
import createHistory from 'history/createBrowserHistory'
import AuthPage from './containers/Auth';
import Games from './containers/Games.jsx';

const history = createHistory();

const store = configureStore(history);
store.runSaga(rootSaga);

render(
  <Provider store={store}>
    <Router history={history}>
      <div>
        <Route exact path="/" component={AuthPage}/>
        <Route path="/games" component={Games}/>
      </div>
    </Router>
  </Provider>,
  document.getElementById('root')
);

