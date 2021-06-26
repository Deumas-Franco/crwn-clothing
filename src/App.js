import React,{Component} from 'react';
import HomePage from './pages/homepage/HomePage';
import ShopPage from './pages/ShopPage/ShopPage';
import {Route,Switch} from 'react-router-dom';
import Header from './components/header/header';
import SignInSignup from './pages/sign-in-sign-up/sign-in-sign-up';
import { auth } from './components/firebase/firebase.utils';
import './App.css';

class App extends Component {

  state = {
    user: null
  }

  unSubscribeAuth = null;

  componentDidMount() {
    this.unSubscribeAuth = auth.onAuthStateChanged(user => {
      this.setState({
        user
      });
    })
  }

  componentWillUnmount() {
    this.unSubscribeAuth();
  }



  render() {
    return (
      <div className="App">
        <Header user={this.state.user}/>
        <Switch>
          <Route exact path='/' component={HomePage} />
          <Route path='/shop' component={ShopPage} />
          <Route path='/signin' component={SignInSignup} />
        </Switch>
      </div>
    );
  }
}

export default App;
