import React, { Component } from 'react';
import {
    StyleSheet,
    Linking,
    TouchableOpacity,
    ImageBackground,
    View,
    Text,
    ScrollView,
} from 'react-native';
import {
    Button, Form,
} from 'native-base';

import Icon from 'react-native-vector-icons/FontAwesome';
import { Input, SocialIcon } from 'react-native-elements';


export default class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            button: 'Login'
        }
    }
    render() {
        const { button } = this.state;
        return (
            // <View style={{
            //     flex: 1
            // }}>
            // 
            <ScrollView
                contentContainerStyle={{
                    flex:1
                }}
            >
                <ImageBackground
                    style={{
                        flex: 1,
                        width: "100%",
                        height: "100%",
                        position: 'absolute'
                    }}
                    source={require('../img/floristaBackground.jpg')}
                />
                < ScrollView
                    contentContainerStyle={{
                        paddingBottom: 10,
                        // width: "100%",
                        // height: "100%",
                        // alignItems: 'center',
                    }}
                    keyboardDismissMode='none'
                >

                    <View style={{
                        flex: 1,
                        alignItems: 'center',
                    }}>
                        <TouchableOpacity style={{ padding: 20, alignSelf: 'flex-end', justifyContent: 'flex-start' }}>
                            <Text>Skip</Text>
                        </TouchableOpacity>

                        <Text>Florista LOGO</Text>

                        <View style={styles.loginContainer}>

                            <View style={styles.loginButtonView}>
                                <Button style={
                                    button == 'Login' ?
                                        styles.onButton :
                                        styles.offButton
                                }
                                    onPress={() => {
                                        this.setState({
                                            button: 'Login'
                                        })
                                    }}
                                >
                                    <Text style={{ color: button == 'Login' ? '#fff' : '#000', fontSize: 16, fontWeight: 'bold' }}>
                                        Login
                                         </Text>
                                </Button>
                                <Button style={
                                    button == 'SignUp' ?
                                        styles.onButton :
                                        styles.offButton}
                                    onPress={() => {
                                        this.setState({
                                            button: 'SignUp'
                                        })
                                    }}
                                >
                                    <Text style={{ color: button == 'SignUp' ? '#fff' : '#000', fontSize: 16, fontWeight: 'bold' }}>
                                        Signup
                            </Text>
                                </Button>
                            </View>
                            {button == 'Login' ?
                                <Form

                                >
                                    <Input
                                        inputStyle={styles.input}
                                        containerStyle={{
                                            marginRight: 20,
                                            marginBottom: 20,
                                            marginTop: 20,
                                            marginLeft: 0
                                        }}
                                        inputContainerStyle={{ width: '98%' }}
                                        label='Email Address'
                                        labelStyle={styles.label}
                                        placeholder='johnsmith@gmail.com'
                                        leftIcon={{ type: 'font-awesome', name: 'envelope-o', color: '#849F66' }}
                                        leftIconContainerStyle={styles.iconContainer}
                                    />
                                    <Input
                                        inputStyle={styles.input}
                                        containerStyle={{
                                            marginRight: 20,
                                            marginBottom: 20,
                                            marginTop: 20,
                                            marginLeft: 0
                                        }}
                                        inputContainerStyle={{ width: '98%' }}
                                        label='Password'
                                        labelStyle={styles.label}
                                        placeholder={'\u2B24\u2B24\u2B24\u2B24\u2B24\u2B24\u2B24'}
                                        leftIcon={{ type: 'EvilIcon', name: 'lock', color: '#849F66' }}
                                        leftIconContainerStyle={styles.iconContainer}

                                    />
                                    <Button 
                                    onPress={()=>{
                                        this.props.navigation.navigate('Home')
                                    }}
                                    style={[styles.onButton, { width: '98%', marginTop: 20 }]}>
                                        <Text
                                            style={{
                                                color: '#fff',
                                                fontSize: 16,
                                                fontWeight: 'bold',
                                            }}>
                                            LOGIN</Text>
                                    </Button>
                                    <View style={{
                                        flexDirection: 'row',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        marginVertical: 30,
                                    }}>
                                        <Text>{"Forgot your password? "}
                                        </Text>
                                        <TouchableOpacity>
                                            <Text style={{
                                                color: '#849F66',
                                                borderBottomWidth: 1,
                                                borderBottomColor: '#849F66'
                                            }}>
                                                Reset Now</Text>
                                        </TouchableOpacity>
                                    </View>

                                    <View style={{
                                        width: '90%',
                                        margin: 10
                                    }}>
                                        <View style={{ alignSelf: 'auto', position: 'absolute', borderBottomColor: '#d3d3d3', borderBottomWidth: 1, height: '50%', width: '25%' }} />
                                        <Text style={{ alignSelf: 'center', paddingHorizontal: 5 }}>Or Sign In Using</Text>
                                        <View style={{ alignSelf: 'flex-end', position: 'absolute', borderBottomColor: '#d3d3d3', borderBottomWidth: 1, height: '50%', width: '25%' }} />
                                    </View>
                                    <View style={{
                                        flexDirection: 'row',
                                        justifyContent: 'center',
                                        alignItems: 'center',
                                        marginBottom: -60
                                    }} >
                                        <View style={{
                                            justifyContent: 'center',
                                            alignItems: 'center',
                                            borderRadius: 50,
                                            width: 76,
                                            height: 76,
                                            backgroundColor: '#d3d3d350'
                                        }}>
                                            <View style={{
                                                justifyContent: 'center',
                                                alignItems: 'center',
                                                borderRadius: 50,
                                                width: 63,
                                                height: 63,
                                                backgroundColor: '#d3d3d380'

                                            }}>
                                                <SocialIcon onPress={() => Linking.openURL('http://facebook.com')} type='facebook' />
                                            </View>
                                        </View>
                                        <View style={{
                                            marginLeft: 14,
                                            justifyContent: 'center',
                                            alignItems: 'center',
                                            borderRadius: 50,
                                            width: 76,
                                            height: 76,
                                            backgroundColor: '#d3d3d350'
                                        }}>
                                            <View style={{
                                                justifyContent: 'center',
                                                alignItems: 'center',
                                                borderRadius: 50,
                                                width: 63,
                                                height: 63,
                                                backgroundColor: '#d3d3d380'

                                            }}>
                                                <SocialIcon onPress={() => Linking.openURL('http://google.com')} type='google' />
                                            </View>
                                        </View>
                                    </View>
                                </Form>

                                :
                                <Form>
                                    <Input
                                        inputStyle={styles.input}
                                        containerStyle={{
                                            marginRight: 20,
                                            marginBottom: 20,
                                            marginTop: 20,
                                            marginLeft: 0
                                        }}
                                        inputContainerStyle={{ width: '98%' }}
                                        label='Full Name'
                                        labelStyle={styles.label}
                                        placeholder='John Smith'
                                        leftIcon={{ type: 'antdesign', name: 'user', color: '#849F66' }}
                                        leftIconContainerStyle={styles.iconContainer}
                                    />
                                    <Input
                                        inputStyle={styles.input}
                                        containerStyle={{
                                            marginRight: 20,
                                            marginBottom: 20,
                                            marginTop: 20,
                                            marginLeft: 0
                                        }}
                                        inputContainerStyle={{ width: '98%' }}
                                        label='Email Address'
                                        labelStyle={styles.label}
                                        placeholder='johnsmith@gmail.com'
                                        leftIcon={{ type: 'font-awesome', name: 'envelope-o', color: '#849F66' }}
                                        leftIconContainerStyle={styles.iconContainer}
                                    />
                                    <Input
                                        inputStyle={styles.input}
                                        containerStyle={{
                                            marginRight: 20,
                                            marginBottom: 20,
                                            marginTop: 20,
                                            marginLeft: 0
                                        }}
                                        inputContainerStyle={{ width: '98%' }}
                                        label='Phone Number'
                                        labelStyle={styles.label}
                                        placeholder='+97158639158'
                                        leftIcon={{ type: 'antdesign', name: 'mobile1', color: '#849F66' }}
                                        leftIconContainerStyle={styles.iconContainer}
                                    />
                                    <Input
                                        inputStyle={styles.input}
                                        containerStyle={{
                                            marginRight: 20,
                                            marginBottom: 20,
                                            marginTop: 20,
                                            marginLeft: 0
                                        }}
                                        inputContainerStyle={{ width: '98%' }}
                                        label='Password'
                                        labelStyle={styles.label}
                                        placeholder={'\u2B24\u2B24\u2B24\u2B24\u2B24\u2B24\u2B24'}
                                        leftIcon={{ type: 'EvilIcon', name: 'lock', color: '#849F66' }}
                                        leftIconContainerStyle={styles.iconContainer}

                                    />
                                    <Button style={[styles.onButton, { width: '98%', marginTop: 20 }]}>
                                        <Text
                                            style={{
                                                color: '#fff',
                                                fontSize: 16,
                                                fontWeight: 'bold',
                                            }}>
                                            SIGNUP</Text>
                                    </Button>
                                </Form>
                            }


                        </View>
                    </View>
                </ScrollView >
            </ScrollView>
            // {/* </ImageBackground> */ }
            //         // </View>
            //         // {/* // </ImageBackground> */}
        );
    }
}


const styles = StyleSheet.create({
    loginContainer: {
        margin: 20,
        borderRadius: 40,
        padding: 30,
        backgroundColor: '#ffffff',
        width: '88%',
    },
    loginButtonView: {
        borderRadius: 10,
        borderColor: '#d3d3d3',
        borderWidth: 1,
        height: 52,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        alignSelf: 'center',
    },
    onButton: {
        // marginBottom: 24,
        borderRadius: 8,
        backgroundColor: '#B53647',
        elevation: 0,
        width: 100,
        height: 50,
        justifyContent: "center",
        alignItems: "center"
    },
    offButton: {
        // marginBottom: 24,
        borderRadius: 8,
        backgroundColor: '#fff',
        elevation: 0,
        width: 80,
        height: 50,
        justifyContent: "center",
        alignItems: "center"
    },
    input: {
        padding: 0,
        paddingLeft: 10,
        fontSize: 14,
    },
    label: {
        fontWeight: '100',
        fontFamily: 'arial',
        fontSize: 14,
        marginLeft: 60,
        color: '#d3d3d3'
    },
    iconContainer: {
        paddingRight: 10,
        paddingBottom: 30
        //   color:'#849F66'
    }
});