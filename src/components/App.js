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

  onChangeType = (newType) =>{
    this.setState({
      ...this.state,
      filters:{
        type: newType
      }
    })
  }

  onFindPetsClick = () =>{
    this.fetchAnimals()
  }

  fetchAnimals = () =>{
    let filterUrl = '/api/pets'
    if(this.state.filters.type !== 'all'){
      filterUrl += `?type=${this.state.filters.type}`
    }
    fetch(filterUrl)
      .then(res => res.json())
      .then(json =>
        this.setState({
          ...this.state,
          pets: json
        })
        )
  }
  onAdoptPet = id =>{
    let newPets = []

    this.state.pets.forEach(pet =>{
      newPets.push({...pet, isAdopted: pet.id === id ? true : pet.isAdopted }) // making sure that you are not mut...
    })

    this.setState({
      ...this.state,
      pets: newPets
    })  
    
  }

  render() {
    // this.fetchAnimals()
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
