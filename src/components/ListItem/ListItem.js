import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';

const listItem = (props) => (
    <TouchableOpacity onPress={props.onItemPressed}>
        <View style={style.listItem}>
        <Image resizeMode="cover" source={props.placeImage} style={style.placeImage}/>
        <Text>{props.placeName}</Text>
        </View>
    </TouchableOpacity>
);

const style = StyleSheet.create({
    listItem: {
        width: "100%",
        padding: 10,
        backgroundColor: "#eee",
        margin: 5,
        flexDirection: "row",
        alignItems: "center"
    },
    placeImage: {
        marginRight: 8,
        height: 30,
        width: 30
    }
})

export default listItem;