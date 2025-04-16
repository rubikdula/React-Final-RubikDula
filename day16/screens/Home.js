import React from "react";
import { View, Button } from "react-native";

const Home=({navigation})=>{
    return(<View>
        <Button title="Go to ToDos" onPress={()=>navigation.navigate('ToDos')}></Button>
        <Button title="Go to Comments" onPress={()=>navigation.navigate('Comments')}></Button>
        <Button title="Go to Albums" onPress={()=>navigation.navigate('ALbums')}></Button>
    </View>)
}

export default Home;