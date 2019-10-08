import React               from 'react';
import {Provider}                         from 'react-redux';
import { Route, Switch }                  from 'react-router'
import { ConnectedRouter }                from 'connected-react-router'
import { createStore, compose, applyMiddleware } from 'redux';
import { createBrowserHistory }           from 'history'
import { connectRouter, routerMiddleware } from 'connected-react-router'
import thunk                                from 'redux-thunk';
import Reducers                           from './Reducers';
import './style.scss';
import Container                           from '@material-ui/core/Container';
import SearchFab                          from './components/searchFab/SearchFab'
import Header                             from './components/Header/Header';
//import Footer                             from './components/Common/Footer'
import Home                               from './pages/Home/home';
// import Movie                               from './components/movie';
// import Tv                                  from './components/tv';
// import Person                             from './components/person';
// import SearchResults                from './components/searchResult'; 



const history = createBrowserHistory()

const initialState = {};

const store = createStore(
  connectRouter(history)(Reducers),
    initialState,
    compose(
      applyMiddleware(
        routerMiddleware(history),
        thunk
      ),
  ),
)

function App() {

    return ( 
          <Provider store={store}>
                  <ConnectedRouter history={history}>
              
                  <div className='pageLayout'>

                      <Header />

                      < Container className='pageContentLayout'>
                          <Switch>
                              <Route exact path="/" component={Home} />
                                <Route path="/movie" component={Home} /> 
                                <Route path="/tv" component={Home} />
                                <Route path="/person/" component={Home} />
                                <Route path="/searchResults" component={Home} /> 
                                             
                          </Switch>
                      </ Container>
                      <SearchFab />
                      {/* <Footer /> */}
                  </div>    

              </ConnectedRouter>
          </Provider>
    );
  }
export default App 