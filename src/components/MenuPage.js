// Menu component
import React, {Component} from 'react';

class MenuPage extends Component {
    render(){
      return(
        <div>
          <h1>Menu</h1>
          <p>Check out our amazing menu:
            <ul>
              <li><h4>Ice Cream & Pastries </h4></li>
              <li><h4>Pizza & Garlic Bread</h4></li>
              <li><h4>Soup & Salad</h4></li>
              <img src="https://media4.giphy.com/media/46fWvfBnp0QRNXunyF/200w.webp?cid=ecf05e47425b14a87b1612f2debfac5012431e49b3b1e1c2&rid=200w.webp"/>
            </ul>
          </p>
        </div>
      );
    }
  }
  export default MenuPage;