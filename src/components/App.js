import React from 'react'

import Filters from './Filters'
import PetBrowser from './PetBrowser'

class App extends React.Component {
  constructor() {
    super()

    this.state = {
      pets: [],
      filters: {
        type: 'all'
      },
      adoptedPets: []
    }
  }

  onChangeType = (event) => {
    this.setState({
      filters:{
        type: event.target.value
      },
      pets: []
    });

    console.log(this.state.filters.type);
  };

  onFindPetsClick = () => {
    let type = this.state.filters.type !== "all"
                  ? `?type=${this.state.filters.type}`
                  : "";


    fetch(`/api/pets${type}`)
      .then(data => data.json())
      .then(data => this.setState({pets: [...data]}))
      .catch(console.error);
  };

  onAdoptPet = (petID) => {
    const pets = this.state.pets
      .map(pet => pet.id === petID
        ? {...pet, isAdopted: true}
        : pet
      );

    console.log(pets);

    this.setState({
      pets: pets
    });
  };

  render() {
    // this.onFindPetsClick();

    return (
      <div className="ui container">
        <header>
          <h1 className="ui dividing header">React Animal Shelter</h1>
        </header>
        <div className="ui container">
          <div className="ui grid">
            <div className="four wide column">
              <Filters onChangeType={this.onChangeType}
                       onFindPetsClick={this.onFindPetsClick}
              />
            </div>
            <div className="twelve wide column">
              <PetBrowser
                // pets={this.state.pets.length !== 0 ? this.state.pets : null}
                pets={this.state.pets}
                onAdoptPet={this.onAdoptPet}
              />
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default App
