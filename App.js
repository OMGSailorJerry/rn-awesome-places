import React, { Component } from 'react';
import { StyleSheet, View } from 'react-native';

import PlacesInput from './src/components/PlacesInput/PlacesInput';
import PlaceList from './src/components/PlaceList/PlaceList';
import PlaceDetail from './src/components/PlaceDetail/PlaceDetail';

export default class App extends Component {
  state = {
    places: [ ],
    selectedPlace: null
  };

  placeAddedHandler = placeName => {
    this.setState(prevState => {
      return {
        places: prevState.places.concat({
          key: `${Math.random()}`,
          name: placeName,
          image: {
            uri: 'https://www.seetorontonow.com/wp-content/uploads/2017/12/cn-tower-dusk.jpg'
          }})
      }
    })
  };

  placeSelectedHandler = key => {
    this.setState(prevState => {
      return {
        selectedPlace: prevState.places.find(place => {
          return place.key === key
        })
      }
    })
  };

  placeDeletedHandler = () => {
    this.setState(prevState => {
      return {
        places: prevState.places.filter((place) => {
          return place.key !== prevState.selectedPlace.key;
        }),
        selectedPlace: null
      }
    })
  };

  modalClosedHandler = () => {
    this.setState({
      selectedPlace: null
    })
  };

  render() {
    return (
      <View style={styles.container}>
        <PlaceDetail selectedPlace={this.state.selectedPlace} onItemDeleted={this.placeDeletedHandler} onModalClosed={this.modalClosedHandler}/>
        <PlacesInput placeName={this.state.placeName} onInputChanged={this.placeNameChangeHandler} onPlaceAdded={this.placeAddedHandler}/>
        <PlaceList places={this.state.places} onItemSelected={this.placeSelectedHandler}/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
});
