import React from "react";
import {View, Text, FlatList} from 'react-native';

const ExcerciseScreen =()=>{
    const ShopList=[
        {Food:"Banana", Amount:"5"},
        {Food:"Water", Amount:"2"},
        {Food:"Noodle", Amount:"1"}
    ]
    return(
            <View>
                <FlatList
                    data={StudentList}
                    renderItem={({item})=>{
                        return <Text>{item.Food} {item.Amount}</Text>
                    }}
                />
            </View>
        )
}

export default ExcerciseScreen;