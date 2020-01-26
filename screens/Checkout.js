import React, { Component } from 'react';
import {
    StyleSheet,
    ScrollView,
    View,
    Text,
    ToastAndroid
} from 'react-native';
import {
    Input,
    Header,
    Icon
} from 'react-native-elements';
import { Button } from 'native-base';
import { TouchableOpacity } from 'react-native-gesture-handler';
import DatePicker from 'react-native-datepicker';



export default class Checkout extends Component {
    constructor(props) {
        super(props);
        this.state = {
            paymentMethod: 'credit',
            sendToFriend: false,
            date: new Date(),
            time: "",
        };
    }

    render() {
        const { sendToFriend, paymentMethod } = this.state
        return (
            <ScrollView style={styles.container}>
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
                        }}>Check Out</Text>
                    }
                    centerContainerStyle={{
                        marginLeft: 12,
                    }}
                />


                {/* Send to a friend */}
                <View>
                    <View
                        style={{
                            flexDirection: 'row',
                            alignItems: 'center',
                            margin: 14,
                            borderBottomColor: '#d3d3d3',
                            borderBottomWidth: 0.5,

                        }}
                    >
                        <TouchableOpacity
                            style={styles.iconStyle}
                        >
                            {sendToFriend == false ?
                                <Icon
                                    underlayColor='transparent'
                                    containerStyle={{
                                        borderWidth: 1,
                                        borderRadius: 100,
                                        borderColor: '#B53647'
                                    }}
                                    type='antdesign'
                                    name='check'
                                    color='#fff'
                                    onPress={() => {
                                        this.setState({
                                            sendToFriend: true
                                        })
                                    }}
                                />
                                :
                                <Icon
                                    underlayColor='transparent'
                                    containerStyle={{
                                        borderWidth: 1,
                                        borderRadius: 100,
                                        borderColor: '#B53647'
                                    }}
                                    type='antdesign'
                                    name='check'
                                    color='#B53647'
                                    onPress={() => {
                                        this.setState({
                                            sendToFriend: false
                                        })
                                    }}
                                />}
                        </TouchableOpacity>
                        <Text>
                            Send to a friend
                        </Text>
                    </View>
                    {sendToFriend == true &&
                        <View
                            style={{
                                flexDirection: 'row',
                                alignItems: 'center',
                                margin: 14,
                            }}
                        >
                            <View
                                style={{
                                    width: '50%'
                                }}
                            >
                                <Input
                                    inputStyle={styles.input}
                                    placeholder='Name'
                                    leftIcon={{ type: 'antdesign', name: 'user', color: '#B53647' }}
                                    leftIconContainerStyle={styles.iconContainer}
                                />
                            </View>
                            <View
                                style={{
                                    width: '50%'
                                }}
                            >
                                <Input
                                    inputStyle={styles.input}
                                    placeholder='Phone Number'
                                    leftIcon={{ name: 'call', color: '#B53647' }}
                                    leftIconContainerStyle={styles.iconContainer}
                                />
                            </View>
                        </View>}
                </View>

                {/* Location */}
                <View
                    style={{
                        margin: 14,
                        borderBottomColor: '#d3d3d3',
                        borderBottomWidth: 0.5,
                    }}
                >
                    <View
                        style={{
                            flexDirection: 'row',
                            justifyContent: 'space-between',
                            alignItems:'center'
                        }}
                    >
                        <Text
                            style={styles.heading}
                        >
                            Share Delivery Location
                        </Text>
                        <Icon
                            type="entypo"
                            name="location-pin"
                            color="#B53647"
                        />
                    </View>
                    <View
                        style={{
                            flexDirection: 'row'
                        }}
                    >
                        <View
                            style={{
                                width: '50%'
                            }}
                        >
                            <Input
                                inputStyle={styles.input}
                                placeholder='City'
                                leftIcon={{ type: 'font-awesome', name: 'building-o', color: '#B53647' }}
                                leftIconContainerStyle={styles.iconContainer}
                            />
                        </View>
                        <View
                            style={{
                                width: '50%'
                            }}
                        >
                            <Input
                                inputStyle={styles.input}
                                placeholder='Area'
                                leftIcon={{ type: 'entypo', name: 'location', color: '#B53647' }}
                                leftIconContainerStyle={styles.iconContainer}
                            />
                        </View>
                    </View>
                    <View
                        style={{
                            flexDirection: 'row'
                        }}
                    >
                        <View
                            style={{
                                width: '50%'
                            }}
                        >
                            <Input
                                inputStyle={styles.input}
                                placeholder='Street'
                                leftIcon={{ type: 'font-awesome', name: 'road', color: '#B53647' }}
                                leftIconContainerStyle={styles.iconContainer}
                            />
                        </View>
                        <View
                            style={{
                                width: '50%'
                            }}
                        >
                            <Input
                                inputStyle={styles.input}
                                placeholder='House Number'
                                leftIcon={{ type: 'antdesign', name: 'home', color: '#B53647' }}
                                leftIconContainerStyle={styles.iconContainer}
                            />
                        </View>
                    </View>

                </View>
                <View
                    style={{
                        margin: 14,
                        borderBottomColor: '#d3d3d3',
                        borderBottomWidth: 0.5,
                    }}
                >
                    <Text
                        style={styles.heading}
                    >
                        Select Date or Time
                    </Text>
                    <View
                        style={{
                            flexDirection: 'row'
                        }}
                    >
                        <View
                            style={{
                                width: '50%'
                            }}
                        >
                            <DatePicker
                                style={{ width: 170 }}
                                // date={this.state.date}
                                mode="date"
                                placeholder="Select Date"
                                format="DD-MM-YYYY"
                                minDate={this.state.date}
                                maxDate="22-11-2020"
                                confirmBtnText="Confirm"
                                cancelBtnText="Cancel"
                                iconComponent={
                                    <View
                                        style={{
                                            position: 'absolute',
                                            left: 20,
                                            top: 10,
                                        }}
                                    >
                                        <Icon
                                            iconStyle={{
                                                paddingRight: 10,
                                                paddingBottom: 5
                                            }}
                                            type="antdesign"
                                            name="calendar"
                                            color="#B53647"
                                        />
                                    </View>
                                }
                                customStyles={{
                                    dateInput: {
                                        marginLeft: 36,
                                        borderWidth: 0
                                    }
                                    // ... You can check the source to find the other keys.
                                }}
                                onDateChange={(date) => { this.setState({ date: date }) }}
                            />
                        </View>
                        <View
                            style={{
                                width: '50%'
                            }}
                        >
                            <DatePicker
                                style={{ width: 170 }}
                                // date={this.state.date}
                                mode='time'
                                placeholder="Select time"
                                format="DD-MM-YYYY"
                                // minDate={this.state.date}
                                // maxDate="22-11-2020"
                                confirmBtnText="Confirm"
                                cancelBtnText="Cancel"
                                iconComponent={
                                    <View
                                        style={{
                                            position: 'absolute',
                                            left: 20,
                                            top: 10,
                                        }}
                                    >
                                        <Icon
                                            iconStyle={{
                                                paddingRight: 10,
                                                paddingBottom: 5
                                            }}
                                            type='antdesign'
                                            name='clockcircleo'
                                            color='#B53647'
                                        />
                                    </View>
                                }
                                customStyles={{
                                    dateInput: {
                                        marginLeft: 36,
                                        borderWidth: 0
                                    }
                                    // ... You can check the source to find the other keys.
                                }}
                                onDateChange={(date) => { this.setState({ date: date }) }}
                            />
                        </View>
                    </View>
                </View>
                <View
                    style={{
                        margin: 14,
                        // borderBottomColor: '#d3d3d3',
                        // borderBottomWidth: 0.5,
                    }}
                >
                    <Text
                        style={styles.heading}
                    >
                        Payment Method
                    </Text>
                    <View
                        style={{
                            flexDirection: 'row'
                        }}
                    >
                        <View
                            style={{
                                width: '50%'
                            }}
                        >
                            <View
                                style={{
                                    flexDirection: 'row',
                                    alignItems: 'center',
                                    margin: 14,
                                    borderBottomColor: '#d3d3d3',
                                    borderBottomWidth: 0.5,

                                }}
                            >
                                <TouchableOpacity
                                    style={styles.iconStyle}
                                >
                                    <Icon
                                        underlayColor='transparent'
                                        containerStyle={{
                                            borderWidth: 1,
                                            borderRadius: 100,
                                            borderColor: '#B53647'
                                        }}
                                        type='antdesign'
                                        name='check'
                                        color={
                                            paymentMethod == 'credit' ?
                                                '#B53647'
                                                :
                                                '#F9F7F7'
                                        }
                                        onPress={() => {
                                            this.setState({
                                                paymentMethod: "credit"
                                            })
                                            console.log(paymentMethod)
                                        }}
                                    />
                                </TouchableOpacity>
                                <Text>
                                    Credit Card
                                </Text>
                            </View>
                        </View>
                        <View
                            style={{
                                width: '50%'
                            }}
                        >
                            <View
                                style={{
                                    flexDirection: 'row',
                                    alignItems: 'center',
                                    margin: 14,
                                    borderBottomColor: '#d3d3d3',
                                    borderBottomWidth: 0.5,

                                }}
                            >
                                <TouchableOpacity
                                    style={styles.iconStyle}
                                >
                                    <Icon
                                        underlayColor='transparent'
                                        containerStyle={{
                                            borderWidth: 1,
                                            borderRadius: 100,
                                            borderColor: '#B53647'
                                        }}
                                        type='antdesign'
                                        name='check'
                                        color={
                                            paymentMethod == 'cod' ?
                                                '#B53647'
                                                :
                                                '#F9F7F7'
                                        }
                                        onPress={() => {
                                            this.setState({
                                                paymentMethod: "cod"
                                            })
                                            console.log(paymentMethod)
                                        }}
                                    />
                                </TouchableOpacity>
                                <Text>
                                    Cash On Delivery
                                </Text>
                            </View>
                        </View>
                    </View>
                    <View
                        style={styles.footer}
                    >
                        <Text
                            style={styles.footerHeading}
                        >Sub Total</Text>
                        <Text
                            style={styles.footerText}
                        >
                            450 AED
                        </Text>
                    </View>
                    <View
                        style={styles.footer}
                    >
                        <Text
                            style={styles.footerHeading}
                        >Signature wrapping</Text>
                        <Text
                            style={styles.footerText}
                        >
                            25 AED
                        </Text>
                    </View>
                    <View
                        style={styles.footer}
                    >
                        <Text
                            style={styles.footerHeading}
                        >Delivery</Text>
                        <Text
                            style={styles.footerText}
                        >
                            35 AED
                        </Text>
                    </View>
                    <View
                        style={styles.footer}
                    >
                        <Text
                            style={styles.footerHeading}
                        >Vat</Text>
                        <Text
                            style={styles.footerText}
                        >
                            24.45 AED
                        </Text>
                    </View>
                    <View
                        style={styles.footer}
                    >
                        <Text style={styles.footerHeading}>
                            Total
                        </Text>
                        <Text style={styles.footerText}>
                            509.25 AED
                        </Text>
                    </View>
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
                        // marginTop: 20
                    }}>
                        <Text
                            style={{
                                color: '#fff',
                                fontSize: 16,
                                fontWeight: 'bold',
                            }}>
                            CHECK OUT</Text>
                    </Button>
                </View>
            </ScrollView >
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
    iconStyle: {
        margin: 10,
        alignSelf: 'flex-start',
        backgroundColor: '#F9F7F7',
        borderRadius: 100,
    },
    input: {
        marginBottom: 5,
        padding: 0,
        // paddingLeft: 10,
        fontSize: 14,
    },
    iconContainer: {
        paddingRight: 10,
        paddingBottom: 5
        //   color:'#849F66'
    },
    heading: {
        color: '#2D2D2D',
        fontSize: 18,
        margin: 12,
    },
    footer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    footerHeading: {
        fontSize: 18,
        color: '#202020',
    },
    footerText: {
        fontSize: 16,
        color: '#AFAFAF'
    }
});
