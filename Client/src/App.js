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
import Container from '@material-ui/core/Container';
// import SearchBar                          from './components/Common/searchBar.js'
import Header                             from './components/Common/Header/Header.js';
//import Footer                             from './components/Common/Footer'
import Home                               from './components/home';
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
                  <ConnectedRouter onUpdate={() => window.scrollTo(0,0)} history={history}>
              
                  <div className='pageLayout'>

                      <Header />

                      < Container className='pageContentLayout'>
                          <Switch>
                              <Route exact path="/" component={Home} />
                                 {/* <Route path="/movie" component={Movie} /> 
                                <Route path="/tv" component={Tv} />
                                <Route path="/person/" component={Person} />
                                <Route path="/searchResults" component={SearchResults} />  */}
                                             
                          </Switch>
                      </ Container>
                      {/* <SearchBar /> */}
                      {/* <Footer /> */}
                  </div>    

              </ConnectedRouter>
          </Provider>
    );
  }
export default App 