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
        <nav className="Navigation__nav">
          <ul className="Navigation__list">
            {
              this.props.recipes.map((recipe) => 
                <li>
                  <button 
                    id={recipe.id + '_button'} 
                    key={recipe.id}
                    onClick={this.changeRecipe}
                    className={
                      recipe.id  === this.props.activeRecipe  ? 
                        'Navigation__button Navigation__button--active' 
                        : 
                        'Navigation__button'
                    }
                  >
                    {recipe.title}
                  </button>
                </li>
              )
            }
          </ul>
        </nav>
      </div>
    );
  }
}

Navigation.propTypes = {
  activeRecipe: PropTypes.string.isRequired,
  recipes: PropTypes.array.isRequired,
  recipeToSelect: PropTypes.func.isRequired
};

export default Navigation;
