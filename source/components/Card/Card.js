import React from "react";

import {
    View,
    Text,
    Button,
    SafeAreaView,
    TouchableOpacity,
    Alert,
} from "react-native";
import CardStyle from "./Card.style";

const Card = (props) => {
    return(
    <View style = {CardStyle.body}>
        <View style = {CardStyle.top}>
            <Text style = {CardStyle.title}>
                {props.title}
            </Text>
            <Text style = {CardStyle.description}>
                {props.description}
            </Text>
        </View>
        <TouchableOpacity style = {CardStyle.button_layout} onPress ={() => Alert.alert("Tabii efendim!")}>
            <Text style = {CardStyle.button_title}>
                LIKED</Text>
        </TouchableOpacity>
    </View>
    );
}

export default Card;