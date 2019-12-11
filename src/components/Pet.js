import React from 'react'

class Pet extends React.Component {
  render() {
    // console.log(this.props.pet.isAdopted)
    return (
      <div key={this.props.pet.id} className="card">
        <div className="content">
          <a className="header">
          Gender: {this.props.pet.gender === 'male' ? "♂":"♀"}
            
          </a>
          <div className="meta">
            <span className="date">{this.props.pet.type}</span>
          </div>
          <div className="description">
            <p>Name: {this.props.pet.name}</p>
            <p>Age: {this.props.pet.age}</p>
            <p>Weight: {this.props.pet.weight}</p>
            <p> </p>
          </div>
        </div>
        <div className="extra content">
          {this.props.pet.isAdopted ? <button className="ui disabled button">Already adopted</button> : <button onClick={() => this.props.onAdoptPet(this.props.pet.id)} className="ui primary button">Adopt pet</button>}
        </div>
      </div>
    )
  }
}

export default Pet
