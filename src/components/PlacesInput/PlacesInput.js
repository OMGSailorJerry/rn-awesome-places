import React,  {Component} from 'react';
import { View, TextInput, StyleSheet, Button } from 'react-native';

class PlacesInput extends Component {
    state = {
        placeName: ''
    };

    componentDidMount() {
        
    }
    
    onInputChanged = (val) => {
        this.setState({
            placeName: val
        })
    };

    placeSubmitHandler = () => {
        if (this.state.placeName.trim() === '') {
          return;
        };

        this.props.onPlaceAdded(this.state.placeName);
    };

    render() {
        return (
            <View style={styles.inputContainer}>
                <TextInput
                    style={styles.placeInput}
                    value={this.state.placeName}
                    onChangeText={this.onInputChanged}
                    placeholder="Awesome place"/>
                <Button 
                    title="Add" 
                    onPress={this.placeSubmitHandler}
                    style={styles.placeButton}/>
            </View>
        );
    }
};

const styles = StyleSheet.create({
    inputContainer: {
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
      },
      placeInput: {
        width: "70%"
      },
      placeButton: {
        width: "30%"
      }
});

export default PlacesInput;