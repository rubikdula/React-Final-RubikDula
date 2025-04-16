import react,{ useEffect, useState } from "react";
import {View, Text, FlatList} from 'react-native';
import data from '../data/countries.json';

class CountriesScreen extends React.Component{
    constructor(){
        super();
        this.state = {
            countries:[]
        }
    }

    componentDidMount(){
        this.setState({
            countries : data
        })
    }
    render(){
        return(
            <View>
                <Text style={styles.screenTitle}>Countries Screen</Text>
                <FlatList
                    data = {this.state.countries}
                    keyExtractor={countries => countries.id}
                    renderItem = {({item}) => (
                            <View style={styles.cardWrapper}>
                                <Text>City Name: {item.name}</Text>
                                <Text>Country Name: {item.name}</Text>
                                <Text>Description Name: {item.description}</Text>
                            </View>
                    )}
                />
            </View>
        )
    }
}

const styles = StyleSheet.create({
    screenTitle:{
        fontSize:20,
        textAlign:'center',
        marginVertical: 15,
        fontWeight: 'bold'
    },
    cardWrapper:{
        backgroundColor: 'lightgrey',
        marginVertical: 5
    }
})