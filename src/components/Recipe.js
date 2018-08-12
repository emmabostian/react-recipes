import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Recipe extends Component {
  render() {
    const ingredients = this.props.ingredients.map((ingredient, i) => <li key={i}>{ingredient}</li>);
    const steps = this.props.steps.map((step, i) => <li key={i}>{step}</li>);
    return (
      <div className="Recipe">
        <h2 className="Recipe__title">{this.props.title}</h2>
        <h3 className="Recipe__sub-title">Ingredients</h3>
        <ul className="Recipe__ingredients">
          {ingredients}
        </ul>
        <h3 className="Recipe__sub-title">Steps</h3>
        <ol className="Recipe__steps">
          {steps}
        </ol>
      </div>
    );
  }
}

Recipe.propTypes = {
  ingredients: PropTypes.array.isRequired,
  steps: PropTypes.array.isRequired,
  title: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired
};

export default Recipe;
