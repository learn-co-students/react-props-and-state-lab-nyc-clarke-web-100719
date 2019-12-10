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
      }
    }
  }

  onChangeType = (newType) => {
    // unnecessary, type is already changed when you onFindPetsClick
    // this.setState(previousState => {
    //   return {
    //     pets: newType === 'all' 
    //       ? previousState.pets
    //       : previousState.pets.filter(pet => pet.type === this.props.type),
    //     filters: {
    //       type: newType
    //     }
    //   }
    // })

    return {
      filters: {
        type: newType
      }
    }
  }

  onFindPetsClick = () => {
    let petsUrl
    if (this.state.filters.type === 'all') {
      petsUrl = '/api/pets'
    } else {
      petsUrl = '/api/pets?type=' + this.state.filters.type
    }
    
    fetch(petsUrl)
      .then(resp => resp.json())
      .then(json => this.setState({pets: json}))
  }

  onAdoptPet = (id) => {
    const petIndex = this.state.pets.findIndex(pet => pet.id === id)
    if (petIndex >= 0) {
      // petWithId.isAdopted = true

      this.setState(previousState => {
        let newDogArray = previousState.pets
        newDogArray[petIndex].isAdopted = true
        return {
          ...previousState,
          pets: newDogArray
        }
      })
    }
  }

  render() {
    console.log(this.state)
    return (
      <div className="ui container">
        <header>
          <h1 className="ui dividing header">React Animal Shelter</h1>
        </header>
        <div className="ui container">
          <div className="ui grid">
            <div className="four wide column">
              <Filters onChangeType={this.onChangeType} onFindPetsClick={this.onFindPetsClick}/>
            </div>
            <div className="twelve wide column">
              <PetBrowser pets={this.state.pets} onAdoptPet={this.onAdoptPet}/>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default App
