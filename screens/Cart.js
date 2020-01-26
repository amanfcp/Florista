import React, { Component } from 'react';
import {
    StyleSheet,
    ScrollView,
    View,
    ToastAndroid,
    Text,
    Image,
} from 'react-native';
import {
    Input,
    Header,
    Icon
} from 'react-native-elements';
import { Button } from 'native-base';
import CartCard from '../components/Cartcard';

export default class Cart extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
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
                        }}>My Cart</Text>
                    }
                    centerContainerStyle={{
                        marginLeft: 12,
                    }}
                />
                <ScrollView>
                    <CartCard />
                    <CartCard />
                    <CartCard />
                    <CartCard />
                    <CartCard />
                    <CartCard />
                </ScrollView>

                <View
                    style={styles.footer}
                >
                    <View
                        style={{
                            flexDirection: 'row',
                            justifyContent: 'space-between',
                            alignItems: 'center',
                        }}
                    >
                        <Text
                            style={styles.footerText}
                        >Sub Total</Text>
                        <Text
                            style={{
                                marginHorizontal:20,
                                fontSize:16,
                                color: '#AFAFAF'
                            }}
                        >
                            200 AED
                        </Text>
                    </View>
                    <View
                        style={{
                            alignItems: "center",
                        }}
                    >
                        <Button style={{
                            borderRadius: 8,
                            backgroundColor: '#B53647',
                            elevation: 0,
                            height: 50,
                            justifyContent: "center",
                            alignItems: "center",
                            width: '90%',
                            marginTop: 20
                        }}>
                            <Text
                                style={{
                                    color: '#fff',
                                    fontSize: 16,
                                    fontWeight: 'bold',
                                }}>
                                CONTINUE</Text>
                        </Button>
                    </View>
                </View>



            </View>
        );
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F9F7F7',
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
    footer: {
        paddingTop: 14,
        flexDirection: 'column',
        width: '100%',
        height: 120,
        backgroundColor: '#fff',
    },
    footerText: {
        marginLeft: 20,
        fontWeight: 'bold',
        fontSize: 18,
        color: '#202020',
    },
});
