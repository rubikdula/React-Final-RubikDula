import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import { Ionicons, FontAwesome, MaterialIcons } from "@expo/vector-icons";

const Second=()=>{
    return(
        <View style={style.container}>
            {/*Ionicon*/}
            <Ionicons name="md-home" size={40} color="red"/>
            {/*FontAwesome*/}
            <FontAwesome name="rocket" size={40} color="blue"/>
            {/*MaterialIcons*/}
            <MaterialIcons name="star" size={40} color="gold"/>
        </View>
    )
}
const style = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center',
        alignItems:"center",
        backgroundColor:'#fff'
    },
    text:{
        fontSize:20,
        marginBottom:20
    }
})

export default Second