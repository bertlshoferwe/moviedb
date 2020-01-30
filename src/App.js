import React               from 'react';
import {Provider}                         from 'react-redux';
import { Route, Switch }                  from 'react-router'
import { ConnectedRouter }                from 'connected-react-router'
import { createStore, compose, applyMiddleware } from 'redux';
import { createBrowserHistory }           from 'history'
import { connectRouter, routerMiddleware } from 'connected-react-router'
import thunk                                from 'redux-thunk';
import Reducers                           from './Reducers';
import firebase                           from 'firebase';
import './style.scss';
import Container                           from '@material-ui/core/Container';
import SearchFab                          from './components/searchFab/SearchFab'
import Header                             from './components/Header/Header';
import Trailer                            from './components/trailer/trailer'
//import Footer                             from './components/Common/Footer'
import Home                               from './pages/Home/home';
import Movie                               from './pages/Media/movie';
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


  const fireBaseConfig = {
    apiKey: "AIzaSyCQOo5d0vzdZm1jwKJ4GsAqbmGJlZPP9wU",
    authDomain: "movie-database-c489c.firebaseapp.com",
    databaseURL: "https://movie-database-c489c.firebaseio.com",
    projectId: "movie-database-c489c",
    storageBucket: "movie-database-c489c.appspot.com",
    messagingSenderId: "337082456483"
  };

  firebase.initializeApp(fireBaseConfig);


function App() {


    return ( 
          <Provider store={store}>
                  <ConnectedRouter history={history}>
              
                  <div className='pageLayout'>

                      <Header />

                      < Container className='pageContentLayout'>
                          <Switch>
                              <Route exact path="/" component={Home} />
                                <Route path="/movie" component={Movie} /> 
                                <Route path="/tv" component={Home} />
                                <Route path="/person/" component={Home} />
                                <Route path="/searchResults" component={Home} /> 
                                             
                          </Switch>
                      </ Container>
                      <SearchFab />
                      <Trailer />
                      {/* <Footer /> */}
                  </div>    

              </ConnectedRouter>
          </Provider>
    );
  }
export default App 