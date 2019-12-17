import React from 'react'

const Pet = (props)=> {
  
    return (
      <div className="card">
        <div className="content">
          <a className="header">
            {/*'♀' OR '♂' */props.gender}
            {props.name}
          </a>
          <div className="meta">
            <span className="date">{props.typePet}</span>
          </div>
          <div className="description">
            <p>Age: {props.age}</p>
            <p>Weight: {props.weight}</p>
          </div>
        </div>
        <div className="extra content">
          {props.isAdopted ? 
          <button className="ui disabled button">Already adopted</button> :
          <button className="ui primary button" onClick={()=>props.onAdoptPet(props.id)}>Adopt pet</button>
          }
        </div>
      </div>
    )
  
}

export default Pet
