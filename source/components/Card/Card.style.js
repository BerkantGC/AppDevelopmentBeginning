import React from "react";
import { StyleSheet } from "react-native";

const CardStyle = StyleSheet.create({
    body:{
        margin: 10,
    },
    title: {
        color: 'black', 
        fontSize: 24,
        fontWeight: 'bold',
        marginLeft: 5,
        marginTop: 2,
    },
    description: {
        color: 'black',
        marginLeft: 5,
        marginBottom: 2,
        fontSize: 17,
    },
    top:{
        backgroundColor: 'white',
        padding: 10,
        borderColor: 'black',
        borderWidth: 2,
        borderTopRightRadius: 7,
        borderTopLeftRadius: 7,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 7,
        },
        shadowOpacity: 0.43,
        shadowRadius: 9.51,
        elevation: 15,
        },
    button_layout: {
        backgroundColor: 'skyblue',
        borderBottomColor: 'black',
        borderBottomWidth: 1,
        borderLeftColor: 'black',
        borderLeftWidth: 1,
        borderRightColor: 'black',
        borderRightWidth: 1,
        borderBottomLeftRadius: 5,
        borderBottomRightRadius: 5,
    },
    button_title: {
        color: 'white',
        textAlign: 'center',
        fontSize: 18,
    }
});

export default CardStyle;