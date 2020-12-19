import React, {Component} from 'react';
import{BrowserRouter as Router, Route} from 'react-router-dom'; //alias as
import MenuPage from './components/MenuPage';
import AboutPage from './components/AboutPage';
import HomePage from './components/HomePage';
import HobbyPage from './components/HobbyPage';
import NavBarPage from "./NavBarPage";

class Routes extends Component{
    render(){
return(
    
        <Router>
<NavBarPage />
<div>
<hr />
    <Route name ="Home" exact path="/" component={HomePage} />
    <Route name ="Menu" path="/menu" component={MenuPage} />
    <Route name ="About" path="/about" component={AboutPage} />
    <Route name ="About" path="/hobby" component={HobbyPage} />
       
        </div>
        </Router>
);

    }

}
export default Routes;