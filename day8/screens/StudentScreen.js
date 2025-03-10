import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import StudentDetails from '../components/StudentDetails';
import { ScrollView } from 'react-native-gesture-handler';

const StudentScreen = ({ navigation }) => {
  //  return (
   //     <View style={styles.container}>
   //         <Text style={styles.text}>Welcome to the Students App</Text>
   //     </View>
   // );

   const students = [
    {
        id: 1,
        name: 'Rrita',
        description: 'Loves Coding and Exploring',
        image: require('../assets/student1.jpg'),
    },
    {
        id: 1,
        name: 'Jon',
        description: 'Loves Coding and Exploring',
        image: require('../assets/student3.jpg'),
    },
    {
        id: 1,
        name: 'Liburna',
        description: 'Loves Coding and Exploring',
        image: require('../assets/student2.jpg'),
    },
   ];
   return(
    <ScrollView contentContainerStyle={styles.container}>
        {students.map(students =>(
            <StudentDetails 
                key={students.id}
                name={students.name}
                description={students.description}
                image={students.image}
            />
        ))}
    </ScrollView>
   )
};

const styles = StyleSheet.create({
    container: {
        flex: 1, 
        justifyContent: 'center', 
        alignItems: 'center', 
        backgroundColor: '#f0f0f0', 
    },
    text: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#333', 
    }
});

export default StudentScreen;
