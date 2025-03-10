import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';

const StudentDetails = ({name, description, image}) => {
    return(
        <View style={styles.studentContainer}>
            <Image source={image} style={styles.image}/>
            <View>
                <Text style= {styles.name}>{name}</Text>
                <Text style={styles.info}>{description}</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    studentContainer:{
        flexDirection: 'row',
        marginBottom: 20,
        alignItems: 'center',
        backgroundColor: '#f1f1f1',
        padding: 15,
        borderRadius: 6
    },
    image:{
        width: 80,
        height: 80,
        marginRight: 15,
        borderRadius: 40
    },
    info: {
        flex: 1
    },
    name:{
        fontSize:18,
        fontWeight: 'bold',
        marginBottom: 7
    }
})
export default StudentDetails;