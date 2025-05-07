import react from 'react-native';
import {View, Text, StyleSheet, Dimensions} from 'react-native';
import Swiper from 'react-native-swiper';
import { Image } from 'react-native-web';


const Main =()=>{
    return(
        <Swiper showsButton={true}>
            <View style={styles.slide1}>
                <Text style={styles.text}>Slide 1</Text>
                <Image source={require('../assets/landscape1.jpg')}
                    style={{width: 1000, height: 800}}
                />
            </View>
            <View style={styles.slide2}>
                <Text style={styles.text}>Slide 2</Text>
                <Image source={require('../assets/landscape2.jpg')}
                    style={{width: 1000, height: 800}}
                ></Image>
            </View>
            <View style={styles.slide3}>
                <Text style={styles.text}>Slide 3</Text>
                <Image source={require('../assets/landscape3.jpg')}
                    style={{width: 1000, height: 800}}
                >
                
                </Image>
            </View>
        </Swiper>
    )
}

export default Main

const styles = StyleSheet.create({
    wrapper:{

    },
    slide1:{
        flex: 1,
        justifyContent:"center",
        alignItems:"center",
       
    },
    slide2:{
        flex:1,
        justifyContent:"center",
        alignItems:"center",
    },
    slide3:{
        flex:1,
        justifyContent:"center",
        alignItems:"center",
    },
    text:{
        color:"#fff",
        fontSize:30,
        fontWeight: "bold",
    }
})