import React, { Component } from 'react'
import { connect } from 'react-redux';
import { fetchAnimals } from '../../redux/actions/Animals';

export class AnimalList extends Component {
  componentDidMount() {
    this.props.fetchAnimals();
  }

  render() {
    console.log('animals', this.props.animals);

    const { animals } = this.props;

    return (
      <div>
        {animals.list.map((animal, index) => (
          <div key={index}>
            <div>{animal.name} | {animal.age} | {animal.gender}</div>
          </div>
        ))}
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    animals: state.animals
  };
};

const mapDispatchToProps =  {
  fetchAnimals
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AnimalList)

// export default AnimalList

