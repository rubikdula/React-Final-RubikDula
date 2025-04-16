import React, { useEffect, useState } from "react";
import {View, Text, FlatList, StyleSheet} from 'react-native';
const Main = () =>{
    const [products, setProducts]=useState([]);

    useEffect(() => {
        fetch("https://fakestoreapi.com/products").then(response=>response.json())
        .then(data => {
            setProducts(data)
        })
    }, [])

    return(
        <FlatList 
            data={products}
            keyExtractor={(item)=>item.id.toString()}
            renderItem={({item})=>{
                <View>
                    <Text style={styles.title}>{item.title}</Text>
                </View>
            }}
        />
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
    },
    item: {
        marginBottom: 10,
        padding: 15,
        backgroundColor: '#f9f9f9',
        borderRadius: 8,
        shadowColor: '#000',
        shadowOpacity: 0.1,
    },
    title: {
        fontWeight: 'bold',
        marginBottom: 5,
    }
})
export default Main;