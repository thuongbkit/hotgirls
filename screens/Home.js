import React, {Component} from 'react'
import { StyleSheet, View, Text } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import colors from '../utils/colors';

class Home extends Component {
    static navigationOptions = ({ navigation }) => ({
        title: 'Home',
        headerLeft: (
            <MaterialIcons name="menu" size={24}
                style={{ color: colors.black, marginLeft: 10 }}
                onPress={() => navigation.toggleDrawer()}
            />
        ),
    });

    render() {
        return (
            <View style={styles.container}>
                <Text>Home Screen.</Text>
            </View>
        )
    }
}

export default Home;

const styles = StyleSheet.create({ 
    container: { 
        backgroundColor: 'white',
        alignItems: 'center', 
        justifyContent: 'center', 
        flex: 1, 
    }, 
});

