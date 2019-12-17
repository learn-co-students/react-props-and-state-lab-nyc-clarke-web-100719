import React from 'react'
import Pet from './Pet'
import PropTypes from 'prop-types'

class PetBrowser extends React.Component {



  static propTypes = {
    pets: PropTypes.array
  };

  static defaultProps = {
    pets: ['string']
  };




  render() {
    return (<div className="ui cards">
      {this.props.pets
        .map((pet, index) => {
          return <Pet
            key={index}
            pet={pet}
            onAdoptPet={this.props.onAdoptPet}
            />
        })}
      {/*)}*/}

    </div>
    )}
}

// PetBrowser.propTypes = {
//   pets: PropTypes.array
// };

export default PetBrowser
