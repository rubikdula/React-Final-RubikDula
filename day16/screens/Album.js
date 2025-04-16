import react, { useEffect, useState } from 'react'
import {View, Text, StyleSheet, FlatList} from 'react-native'
const Albums=()=>{
    const [album, setAlbums] = useState([])
    const thirrjeAPI = async ()=>{
        const pergjigja=await fetch("https://jsonplaceholder.typicode.com/album")
        const data= await pergjigja.json()
        setComments(data)
    }
    useEffect(()=>{
        thirrjeAPI()
    },[])

    return(
        <View>
            <FlatList
                data={album}
                renderItem={({item})=>{
                    return(<View>
                            <Text>{item.title}</Text>
                        </View>)
                }}
            />
        </View>
    );
}
const styles = StyleSheet.create({
    container: {
      padding: 16,
      backgroundColor: '#f2f2f2',
    },
    card: {
      backgroundColor: '#fff',
      padding: 16,
      borderRadius: 12,
      marginBottom: 12,
      shadowColor: '#000',
      shadowOpacity: 0.1,
      shadowOffset: { width: 0, height: 2 },
      elevation: 3,
    },
    completedCard: {
      backgroundColor: '#e0f7e9',
    },
    title: {
      fontSize: 16,
      fontWeight: 'bold',
      marginBottom: 6,
    },
    status: {
      fontSize: 14,
      fontWeight: '600',
    },
    completed: {
      color: '#27ae60',
    },
    pending: {
      color: '#e67e22',
    },
    loader: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },
  }); 

export default Albums;