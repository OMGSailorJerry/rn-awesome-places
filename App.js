import React, { Component } from 'react';
import { StyleSheet, View } from 'react-native';
import { connect } from 'react-redux';

import PlacesInput from './src/components/PlacesInput/PlacesInput';
import PlaceList from './src/components/PlaceList/PlaceList';
import PlaceDetail from './src/components/PlaceDetail/PlaceDetail';
import {addPlace, deletePlace, selectPlace, unselectPlace} from './src/store/actions/index';

class App extends Component {
  placeAddedHandler = placeName => {
    this.props.onAddPlace(placeName);
  };

  placeSelectedHandler = key => {
    this.props.onSelectPlace(key);
    
  };

  placeDeletedHandler = () => {
    this.props.onDeletePlace();
  };

  modalClosedHandler = () => {
    this.props.onDeselectPlace();
  };

  render() {
    return (
      <View style={styles.container}>
        <PlaceDetail selectedPlace={this.props.selectedPlace} onItemDeleted={this.placeDeletedHandler} onModalClosed={this.modalClosedHandler}/>
        <PlacesInput placeName={this.props.placeName} onInputChanged={this.placeNameChangeHandler} onPlaceAdded={this.placeAddedHandler}/>
        <PlaceList places={this.props.places} onItemSelected={this.placeSelectedHandler}/>
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

const mapStateToProps = (state) => {
  return {
    places: state.places.places,
    selectedPlace: state.places.selectedPlace
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onAddPlace: (name) => dispatch(addPlace(name)),
    onDeletePlace: () => dispatch(deletePlace()),
    onSelectPlace: (key) => dispatch(selectPlace(key)),
    onDeselectPlace: () => dispatch(unselectPlace())
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(App)