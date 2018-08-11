import React, { Component } from 'react';

import Recipe from './Recipe';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      recipes: [
        {
          title: 'Bagel',
          ingredients: [
            '1 Bagel',
            'Cream cheese'
          ],
          steps: [
            'Slice bagel in half',
            'Spread on cream cheese',
            'Enjoy!'
          ],
          id: 1
        },
        {
          title: 'Pizza',
          ingredients: [
            '1 Pizza Crust',
            '1 Jar of Pizza Sauce',
            '3 oz Part-Skim Mozerella Cheese'
          ],
          steps: [
            'Put sauce on crust',
            'Sprinkle mozarella cheese over sauce',
            'Bake at 350 degrees for 20 minutes'
          ],
          id: 2
        },
      ]
    }
  }
  render() {
    return (
      <div className="App">
        <h1>React Recipe Book</h1>
        { 
          this.state.recipes.map((recipe, i) => 
            <Recipe
              title={recipe.title} 
              ingredients={recipe.ingredients}
              steps={recipe.steps}
              key={i}
            />
          ) 
        }
      </div>
    );
  }
}

export default App;
