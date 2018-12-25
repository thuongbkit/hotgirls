import React, { Component } from 'react'
import { connect } from 'react-redux';
import { FlatList, StyleSheet, View, ActivityIndicator, Text } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import HotGirlListItem from '../components/hotgirls/HotGirlListItem';
import colors from '../utils/colors';
import { Loading } from '../components/commons/Loading';

import { getHotGirls } from '../actions/hotgirl';

class HotGirls extends Component {

    static navigationOptions = ({ navigation }) => ({
        title: 'Hot Girls',
        headerLeft: (
            <MaterialIcons name="menu" size={24}
                style={{ color: colors.black, marginLeft: 10 }}
                onPress={() => navigation.toggleDrawer()}
            />
        ),
    });

    componentWillMount() {
        this.props.getHotGirls();
    }

    _keyExtractor = (item, index) => index.toString()

    _renderItem = ({ item }) => {
        const { navigation: { navigate } } = this.props;
        const { name, image, phone } = item;
        return <HotGirlListItem name={name} image={image} phone={phone} onPress={() => navigate('HotGirlProfile', {
            hotgirl: item
        })} />;
    }
    render() {
        const { isLoading } = this.props;
        const { hotGirls } = this.props;

        const dataSorted = hotGirls.sort((a, b) => a.name.localeCompare(b.name));
        return (
            <View style={styles.container}>
                {isLoading && <ActivityIndicator size="large" />}
                {
                    !isLoading && (
                        <FlatList
                            keyExtractor={this._keyExtractor}
                            data={dataSorted}
                            renderItem={this._renderItem}
                        />
                    )
                }

            </View>

        )


    }
}

const mapStateToProps = (state) => {
    return {
        hotGirls: state.hotgirl.hotgirls,
        isLoading: state.hotgirl.isLoading
    }
}

const mapDispatchToProps = dispatch => ({
    getHotGirls: () => dispatch(getHotGirls())
});

export default connect(mapStateToProps, mapDispatchToProps)(HotGirls);

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'white',
        justifyContent: 'center',
        flex: 1,
    },
    loadingView: {
        alignItems: 'center',
        justifyContent: 'center',
        flex: 1,
    },
    loadingText: {
        color: '#512DA8',
        fontSize: 14,
        fontWeight: 'bold'
    }
});
