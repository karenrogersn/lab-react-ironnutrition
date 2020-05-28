import React, { Component } from 'react';
import Mealbox from './Components/Mealbox';
import Search from './Components/Search';

import './App.scss';
import meals from './meals.json';

//this will let you see each meal object in the console
//console.log(meals);

class App extends Component {
  constructor() {
    super();
    this.state = {
      mealArray: [...meals],
      inputName: '',
      inputCalories: '',
      inputPicture: ''
    };
  }

  //Handling form subission
  handleSubmit = (e) => {
    e.preventDefault();

    const addedItem = {
      name: this.state.inputName,
      calories: this.state.inputCalories,
      picture: this.state.inputPicture
    };

    this.setState({
      mealArray: [...this.state.mealArray, addedItem],
      inputName: '',
      inputCalories: '',
      inputPicture: ''
    });
  };

  //handling the addition of meals
  handleChange = (e) => {
    const $domNode = e.target;
    const value = $domNode.value;
    // const value = e.target.value
    // const name = e.target.name
    const name = $domNode.name; //Name = inputName
    console.log(value);
    console.log(name);
    this.setState({
      [name]: value
    });
  };

  render() {
    //the variable lisMeals helps make the targeting of the props simpler and more readable
    //const listMeals = this.state.mealArray; --> //name={listMeals[0].name}
    return (
      <div className="App">
        <p>IronNutrition</p>
        <>
          <label htmlFor="search">Search a meal:</label>
          <input type="text" value={this.state.inputName} onChange={} />
        </>
        <form className="form" onSubmit={this.handleSubmit}>
          <p>Add a New Meal</p>
          <label>
            Name:
            <input
              name="inputName"
              type="text"
              value={this.state.inputName}
              onChange={this.handleChange}
              placeholder="Meal name here..."
            />
          </label>
          <br />
          <label>
            Calories:
            <input
              name="inputCalories"
              type="text"
              value={this.state.inputCalories}
              onChange={this.handleChange}
              placeholder="Amount of calories"
            />
          </label>
          <br />
          <label>
            Paste the image's link:
            <input
              name="inputPicture"
              type="text"
              value={this.state.inputPicture}
              onChange={this.handleChange}
            />
          </label>
          <button>Click to add ✅</button>
        </form>
        {this.state.mealArray.map((meal) => {
          return (
            <Mealbox
              key={meal.name}
              name={meal.name}
              img={meal.image}
              calories={meal.calories}
              quantity={meal.quantity}

              // name={this.state.mealArray[0].name}
              // img={this.state.mealArray[0].image}
              // calories={this.state.mealArray[0].calories}
              // quantity={this.state.mealArray[0].quantity}
            />
          );
        })}
      </div>
    );
  }
}

export default App;
