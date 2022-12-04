import React from 'react';
import {BrowserRouter, Switch, Route} from "react-router-dom";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './App.css';
import AddWebsite from './pages/AddWebsite';
import AllWebsite from './pages/AllWebsite';
import Home from './pages/Home';
import Header from './components/Header';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header/>
        <ToastContainer position="top-center"/>
        <Switch>
          <Route exact path="/" component={Home}/>
          <Route path="/AllWebsite" component={AllWebsite}/>
          <Route path="/UpdateWebsite/:id" component={AddWebsite}/>
          <Route path="/AddWebsite" component={AddWebsite}/>
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;