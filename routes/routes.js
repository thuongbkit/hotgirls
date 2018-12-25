import React from 'react';
import { ScrollView, Image, View } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import { createStackNavigator, createAppContainer, createDrawerNavigator, DrawerItems, SafeAreaView } from 'react-navigation';
import HotGirls  from '../screens/HotGirls';
import  HotGirlProfile  from '../screens/HotGirlProfile';
import Home  from '../screens/Home';
import HotGirlFavorite from '../screens/HotGirlFavorite';

const getDrawerItemIcon = icon => ({ tintColor }) => (
    <MaterialIcons name={icon} size={22} style={{ color: tintColor }} />
);


const HotGirlsScreens = createStackNavigator({
    HotGirls: {
        screen: HotGirls
    },
    HotGirlProfile: {
        screen: HotGirlProfile
    }
    
});

const HomeScreens = createStackNavigator({
    Home: {
        screen: Home,
    }
})

const HotGirlFavoriteScreens = createStackNavigator({
    HotGirlFavorite: {
        screen: HotGirlFavorite,
    }
})

const CustomDrawerContentComponent = (props) => (
    <SafeAreaView style={{ flex: 1 }}>
        <View style={{ height: 150, backgroundColor: 'white',  alignItems: 'center', justifyContent: 'center' }}>
            <Image source={require('../assets/img/mark.jpg')} style={{ height: 120, width: 120, borderRadius: 60 }} />
        </View>

        <ScrollView>
            <DrawerItems {...props} />
        </ScrollView>

    </SafeAreaView>
);

const AppDrawerNavigator = createDrawerNavigator(
    {
        Home: {
            screen: HomeScreens,
            navigationOptions: {
                drawerLabel: 'Home',
                drawerIcon: getDrawerItemIcon('home')
                
            }
        },
        HotGirls: {
            screen: HotGirlsScreens,
            navigationOptions: {
                drawerLabel: 'Hot Girls',
                drawerIcon: getDrawerItemIcon('list')
            }
        },
        HotGirlFavoriteScreens: {
            screen: HotGirlFavoriteScreens,
            navigationOptions: {
                drawerLabel: 'Favorites',
                drawerIcon: getDrawerItemIcon('camera')
            }
        }

    },
    {
        contentComponent: CustomDrawerContentComponent,
        contentOptions: {
            activeTintColor: 'orange'
        }
    }
)

const AppContainer = createAppContainer(AppDrawerNavigator);

export default AppContainer;