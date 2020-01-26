import React, { Component } from 'react';
import {
    StyleSheet,
    View,
    ToastAndroid,
    Text,
    FlatList
} from 'react-native';
import {
    Header,
    Icon
} from 'react-native-elements';
import { Button } from 'native-base';
import Flowercard from '../components/Flowercard'

export default class CustomArrangements extends Component {
    constructor(props) {
        super(props);

        this.state = {
            flowerDesc: [
                {
                    img: require('../img/flower1.jpg'),
                    name: 'Fresh Rose Stick',
                    color: '#EF4D95',
                    cost: 10
                },
                {
                    img: require('../img/flower2.jpg'),
                    name: 'Calendula Stick',
                    color: '#FEA003',
                    cost: 15
                },
                {
                    img: require('../img/flower3.jpg'),
                    name: 'Gladiolus',
                    color: '#FFD67B',
                    cost: 10
                },
                {
                    img: require('../img/flower1.jpg'),
                    name: 'Fresh Jasmine',
                    color: '#EFEFEF',
                    cost: 15
                },
                {
                    img: require('../img/flower2.jpg'),
                    name: 'Fresh Rose Stick',
                    color: '#EF4D95',
                    cost: 10
                },
                {
                    img: require('../img/flower3.jpg'),
                    name: 'Calendula Stick',
                    color: '#FEA003',
                    cost: 15
                },
            ]
        }
    }
    render() {
        return (
            <View style={styles.container}>
                <Header
                    placement='center'
                    containerStyle={{
                        // alignItems:'center',
                        marginTop: -20,
                        paddingBottom: 10,
                    }}
                    backgroundColor='#EEE8EA'
                    leftComponent={
                        <Icon
                            name='menu'
                            type='material'
                            color='#fff'
                            onPress={() => {
                                ToastAndroid.show('A pikachu appeared nearby !', ToastAndroid.SHORT);
                            }} />
                    }
                    leftContainerStyle={styles.menu}
                    centerComponent={
                        <Text style={{
                            fontSize: 18,
                        }}>Custom Arrangements</Text>
                    }
                    centerContainerStyle={{
                        marginLeft: 12,
                    }}
                    rightComponent={
                        <Button
                            style={{
                                borderTopLeftRadius: 30,
                                borderBottomLeftRadius: 30,
                                // alignSelf: 'center',
                                alignItems: "center",
                                justifyContent: "center",
                                marginRight: -12,
                                // marginTop: 0,
                                // marginTop: 30,
                                width: 70,
                                height: 45,
                                backgroundColor: '#B53647'
                            }}
                        >
                            <Text
                                style={{
                                    fontSize: 16,
                                    color: '#fff'
                                }}
                            >Next</Text>
                        </Button>
                    }
                >
                </Header>
                <Text style={{
                    marginHorizontal: 16,
                    marginVertical: 12,
                    fontWeight: 'bold',
                    fontSize: 18,
                    color: '#404040'
                }}>Choose your Favourite Flowers</Text>

                <View style={styles.flatlist}>
                    <FlatList
                        data={this.state.flowerDesc}
                        renderItem={({ item }) => (
                            <Flowercard
                                flowerImg={item.img}
                                flowerName={item.name}
                                flowerCost={item.cost}
                                flowerColor={item.color}
                            />
                        )}
                        //Setting the number of column
                        numColumns={2}
                        keyExtractor={(item, index) => index.toString()}
                    />
                    <View
                        style={styles.footer}
                    >
                        <View>
                            <Text
                                style={styles.footerText}
                            >Total Amount</Text>
                        </View>
                        <View
                            style={{
                                flex: 1,
                                flexDirection: "row",
                                alignItems: 'center',
                                justifyContent: 'flex-end',
                            }}
                        >
                            <View
                                style={styles.costButton}
                            >
                                <Text
                                    style={{
                                        color: '#B53647'
                                    }}
                                >200 AED</Text>
                            </View>
                            <Icon
                                name='shopping-cart'
                                type='feather'
                                color='#B53647'
                                containerStyle={{
                                    backgroundColor: '#fff',
                                    height: 34,
                                    width: 34,
                                    justifyContent: 'center',
                                    alignItems: 'center',
                                    borderRadius: 8,
                                    marginHorizontal: 10
                                }}
                                onPress={() => {
                                    ToastAndroid.show('Cart logo tapped', ToastAndroid.SHORT);
                                }}
                            />
                        </View>
                    </View>
                </View>
                {/* <ColorPalette/> */}

            </View>
        );
    }
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F9F7F7'
    },
    menu: {
        borderTopRightRadius: 30,
        borderBottomRightRadius: 30,
        // alignSelf: 'center',
        alignItems: "center",
        justifyContent: "center",
        marginLeft: -12,
        // marginTop: 0,
        // marginTop: 30,
        width: 60,
        height: 45,
        backgroundColor: '#B53647'
    },
    flatlist: {
        justifyContent: 'center',
        flex: 1,
        // paddingTop: 30,
    },
    footer: {
        alignItems: 'center',
        flexDirection: 'row',
        width: '100%',
        height: 60,
        backgroundColor: '#B53647',
        // marginTop: 20
    },
    footerText: {
        marginLeft: 20,
        fontWeight: 'bold',
        fontSize: 16,
        color: '#fff',
    },
    costButton: {
        backgroundColor: '#fff',
        width: 80,
        height: 34,
        borderRadius: 8,
        alignItems: 'center',
        justifyContent: 'center',
    }
});
