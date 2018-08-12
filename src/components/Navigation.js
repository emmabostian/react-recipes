import React, { Component } from 'react';

import PropTypes from 'prop-types';

class Navigation extends Component {
  constructor(props) {
    super(props);
    this.changeRecipe = this.changeRecipe.bind(this);
  }
  
  changeRecipe(e) {
    const buttonId = e.target.id;
    const recipeId = buttonId.split('_')[0];
    this.props.recipeToSelect(recipeId);
  }
  render() {
    return (
      <div className="Navigation">
        <ul>
          {
            this.props.recipes.map((recipe) => 
              <button 
                id={recipe.id + '_button'} 
                key={recipe.id}
                onClick={this.changeRecipe}
              >
                {recipe.title}
              </button>
            )
          }
        </ul>
      </div>
    );
  }
}

Navigation.propTypes = {
  recipes: PropTypes.array.isRequired
};

export default Navigation;
