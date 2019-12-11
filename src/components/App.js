import React from 'react';
import Filters from './Filters';
import PetBrowser from './PetBrowser';

class App extends React.Component {
  constructor() {
    super()

    this.state = {
      pets: [],
      filters: {
        type: 'all'
      }
    }
  }

  fetchPets = () => {
    if (this.state.filters.type === 'all') {
      fetch('/api/pets')
      .then(resp => resp.json())
      .then(object => 
        this.setState({pets: object}))
    } else {
      fetch('/api/pets' + `?type=${this.state.filters.type}`)
      .then(resp => resp.json())
      .then(object => this.setState({pets: object}))
    }
  }

  handleChange = (event) => {
    this.setState({
      filters: {
        type: event.target.value
      }
    })
  }

  onAdoptPet = (id) => {
    let copyOfPets = [...this.state.pets];
    copyOfPets.forEach(pet => {
      if (pet.id === id) {
        pet.isAdopted = true;
      }})
    this.setState({
      pets: copyOfPets
    })
  }
    


  render() {
    return (
      <div className="ui container">
        <header>
          <h1 className="ui dividing header">React Animal Shelter</h1>
        </header>
        <div className="ui container">
          <div className="ui grid">
            <div className="four wide column">
              <Filters onChangeType={this.handleChange} onFindPetsClick={this.fetchPets}/>
            </div>
            <div className="twelve wide column">
              <PetBrowser pets={this.state.pets} onAdoptPet={this.onAdoptPet} />
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default App
