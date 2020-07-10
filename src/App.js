import React,{Component} from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import Navbar from './components/Layout/Navbar';
import Index from './components/Layout/Index';
import Lyrics from './components/tracks/Lyrics';
import {Provider} from './context';

class App extends Component{
  render(){
    return(
      <Provider>
        <Router>
          <React.Fragment>
            <h1> 
              <Navbar />
              <div className='Container'>
                <Switch>
                  <Route exact path = '/' component={Index}></Route>
                  <Route exact path='/lyrics/track/:id'component={Lyrics}></Route>
                </Switch>
              </div>
            </h1>
          </React.Fragment>
        </Router> 
      </Provider>
      
     
    )
  }
}


export default App;
