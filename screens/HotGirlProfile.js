import React, { Component } from 'react'
import { View, StyleSheet, Text, Image, Dimensions, ScrollView } from 'react-native';
import { Icon, Button } from 'native-base';
import { connect } from 'react-redux';
import { addFavorite, removeFavorite } from '../actions/hotgirl';

class HotGirlProfile extends Component {
    static navigationOptions = ({ navigation: { state: { params } } }) => {
        const { hotgirl: { name } } = params;
        return {
            title: name.split(' ')[0],
            headerTintColor: 'black',
        };
    };

    constructor(props) {
        super(props);
        this.state = {
            toggle: false,
            hotgirl: undefined
        }
    }

    markFavorite(hotgirl) {
        this.setState({
            toggle: !this.state.toggle
        }, () => {
            if (this.state.toggle) {
                this.props.addFavorite(hotgirl)
            } else {
                this.props.removeFavorite(hotgirl)
            }
        });
    }

    componentWillMount() {
        const { navigation } = this.props;
        const hotgirl = navigation.getParam('hotgirl');
        const favorites = this.props.favorites;
        this.setState({
            toggle: favorites.some(item => item.phone === hotgirl.phone) ? true : false,
            hotgirl: hotgirl
        })

    }


    render() {
        const { image, name, phone } = this.state.hotgirl;
        const textValue = this.state.toggle ? "red" : "black";

        console.log('FAVORITE LIST ', this.props.favorites);

        return (
            <View style={{ flex: 1 }}>
                <ScrollView style={styles.container}>
                    <Image
                        style={styles.image}
                        source={{ uri: image }}
                        resizeMode={'contain'}
                    />
                    <View style={{ padding: 10 }}>

                        <View style={styles.row}>
                            <Button transparent onPress={() => this.markFavorite(this.state.hotgirl)}>
                                <Icon name="heart" style={{ color: textValue }} />
                            </Button>
                        </View>

                        <View style={styles.row}>
                            {name !== '' && <Text style={[styles.name]}>{name}</Text>}
                        </View>

                        <View style={styles.row}>
                            {phone !== '' && <Text style={[styles.phone]}>{phone}</Text>}
                        </View>
                    </View>


                </ScrollView>


            </View>
        )
    }
}


const mapStateToProps = state => ({
    favorites: state.hotgirl.favorites,
})
const mapDispatchToProps = dispatch => ({
    addFavorite: (hotgirl) => dispatch(addFavorite(hotgirl)),
    removeFavorite: (hotgirl) => dispatch(removeFavorite(hotgirl)),
});

export default connect(mapStateToProps, mapDispatchToProps)(HotGirlProfile);

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'white',
        marginBottom: 40,
    },
    image: {
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').height / 2,
    },
    row: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingBottom: 20,
        marginBottom: 20,
        borderBottomWidth: 1,
        borderBottomColor: '#E2E2E2',
    },
    name: {
        fontSize: 20,
        fontWeight: 'bold',
    },
    phone: {
        fontSize: 16,
        fontWeight: 'bold',
    },
});
