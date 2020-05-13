import React from 'react';
import API from './API'
import './App.css';

class App extends React.Component {
  state ={
    drinks: []
  }
  componentDidMount(){
    fetch("https://www.thecocktaildb.com/api/json/v1/1/search.php?s=margarita")
      .then(resp => resp.json())
      .then(data => this.setState({
        drinks: data.drinks
      }))
  }

  renderDrinks = () => {
    return this.state.drinks.map(drink => <img src={drink.strDrinkThumb} alt={drink.strDrinkThumb} />)
  }

  render(){
    console.log(this.state.drinks)
  return (
    <div>
      {this.renderDrinks()}
    </div>
  );
}
}

export default App;
