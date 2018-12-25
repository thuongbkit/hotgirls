import React, { Component } from 'react'
import { StyleSheet, Image, ScrollView } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import colors from '../utils/colors';
import { connect } from 'react-redux';
import { Container, Content, Card, CardItem, Text, Left} from 'native-base';

class HotGirlFavorite extends Component {
    static navigationOptions = ({ navigation }) => ({
        title: 'Favorite',
        headerLeft: (
            <MaterialIcons name="menu" size={24}
                style={{ color: colors.black, marginLeft: 10 }}
                onPress={() => navigation.toggleDrawer()}
            />
        ),
    });

    componentWillMount() {
    }


    render() {
        const favorites = this.props.favorites;
        return (
           
            <ScrollView>
                <Container style={styles.container}>
                    <Content>
                        {
                            favorites.map((item, index) => {
                                return (
                                    <Card key={index}>
                                        <CardItem cardBody>
                                            <Image resizeMode={'contain'} source={{ uri: item.image }} style={{ height: 200, width: null, flex: 1 }} />
                                        </CardItem>
                                        <CardItem>
                                            <Left>
                                                <Text>{item.name}</Text>
                                            </Left>
                                        </CardItem>
                                    </Card>
                                )
                            })
                        }
                    </Content>
                </Container>
            </ScrollView>


        )
    }
}

const mapStateToProps = state => ({
    favorites: state.hotgirl.favorites,
})

export default connect(mapStateToProps)(HotGirlFavorite);

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
});

