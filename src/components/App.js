import React from 'react'

import Filters from './Filters'
import PetBrowser from './PetBrowser'
let URI = "/api/pets";

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
  adoptPet = (id) =>{
    let index = 0;
    let pet = this.state.pets.find((p=>p.id===id));
    
    index = this.state.pets.indexOf(pet);

    pet = {...pet}
    pet.isAdopted = true;

    let petArray = [...this.state.pets]

    petArray[index]=pet;

    this.setState({
      pets: petArray
    })
  }
  setType = (type)=> {
    // debugger
    this.setState({
      filters: {...this.state.filters, type: type.toLowerCase()}
    })
  }
  componentDidMount= () =>{
    this.fetchPets(null);
  }
  // componentDidUpdate 
  fetchPets = (e)=>{
    
    if (e) {e.preventDefault();}
    // console.log("this still happens")
    // debugger
    // console.log(this.state.filters)
    fetch(this.state.filters.type === 'all' ? URI : `${URI}?type=${this.state.filters.type}`)
    .then(resp => resp.json())
    .then(jsonData =>{
        // console.log(jsonData);
        this.setState({
          pets: jsonData
        })
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
              <Filters onChangeType={this.setType} onFindPetsClick={this.fetchPets}/>
            </div>
            <div className="twelve wide column">
              <PetBrowser pets={this.state.pets} onAdoptPet={this.adoptPet}/>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default App
