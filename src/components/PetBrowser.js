import React from 'react'

import Pet from './Pet'

const PetBrowser = (props) => {
  let renderPets = ()=>{
    return props.pets.map(pet => 
      {
        return <Pet 
          pet={pet}
          key={pet.id}
          id={pet.id}
          name={pet.name}
          age={pet.age}
          weight={pet.weight}
          gender={pet.gender==="male" ? '♂' : '♀'}
          typePet={pet.type}
          isAdopted={pet.isAdopted}
          onAdoptPet={props.onAdoptPet}
        />
      })
  }
    return (<div className="ui cards">{renderPets()}</div>)
}
// //id: '5c142d9e-ea45-4231-8146-cccf71c704c0',
// type: 'dog',
// gender: 'male',
// age: 4,
// weight: 1,
// name: 'Trident',
// isAdopted: false,
export default PetBrowser
