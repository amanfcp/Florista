import {
    Header,
    Icon
} from 'react-native-elements';

import React, { Component } from 'react';
import {
    StyleSheet,
    View,
    Image,
    ToastAndroid,
    Text,
    Modal
} from 'react-native';
import { Button } from 'native-base';
import NumericInput from 'react-native-numeric-input';
import ColorPicker from '../components/Colorpicker';



export default class CustomArrangementDetails extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isModalVisible: false,
        };
    }
    toggleModal = () => {
        this.setState({ isModalVisible: !this.state.isModalVisible });
    };
    render() {
        const { isModalVisible } = this.state;

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
                        }}>Fresh Rose Stick</Text>
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
                <Image
                    source={require('../img/flower1.jpg')}
                    resizeMode='cover'
                    style={{
                        width: '100%',
                        height: 300
                    }}
                />
                <View
                    style={{
                        marginVertical: 15,
                        marginHorizontal: 15,
                    }}
                >
                    <View
                        style={{
                            flexDirection: 'row',
                            justifyContent: 'space-between'
                        }}
                    >
                        <Text
                            style={{
                                fontWeight: 'bold',
                                fontSize: 18,
                                color: '#404040',
                                marginBottom: 4
                            }}
                        >Fresh Rose Stick</Text>
                        <View
                            style={{
                                flex:1,
                                flexDirection:"row",
                                justifyContent:'flex-end'
                            }}
                        >
                            <Text
                                style={{
                                    marginRight:14,
                                    fontWeight: 'bold',
                                    fontSize: 15,
                                    color: '#B53647'
                                }}
                            >
                                QTY</Text>
                            <NumericInput
                                minValue={0}
                                maxValue={50}
                                totalHeight={30}
                                totalWidth={90}
                                borderColor='#B53647'
                                iconStyle={{
                                    fontSize: 16,
                                    color: '#fff',
                                }}
                                inputStyle={{
                                    borderColor: '#B53647',
                                    borderWidth: 1,
                                    color: '#B53647',
                                    fontSize: 16
                                }}
                                containerStyle={{
                                    borderRadius: 8
                                    // borderColor:'#B53647'
                                }}
                                leftButtonBackgroundColor='#B53647'
                                rightButtonBackgroundColor='#B53647'
                                rounded editable={false}
                            />
                        </View>
                    </View>

                    <Text
                        style={{
                            fontWeight: 'bold',
                            fontSize: 14,
                            color: '#8B8B8B',
                            marginBottom: 4
                        }}
                    >10 AED</Text>
                    <View
                        style={{
                            flexDirection: 'row',
                            justifyContent: 'flex-start',
                            marginBottom: 6,
                        }}
                    >
                        <Text
                            style={{
                                fontSize: 14,
                                color: '#8B8B8B',
                                marginBottom: 4,
                                marginRight: 14
                            }}
                        >Choose Color</Text>
                        <Icon
                            underlayColor='transparent'
                            containerStyle={{
                                backgroundColor: '#EF4D95',
                                borderRadius: 8,
                                width: 40,
                                height: 27,
                            }}
                            type='antdesign'
                            name='check'
                            color='#EF4D95'

                            onPress={() => {
                                ToastAndroid.show('Color Tapped', ToastAndroid.SHORT);
                                this.toggleModal()
                            }}
                        />
                    </View>
                    <Text
                        style={{
                            fontWeight: 'bold',
                            fontSize: 18,
                            color: '#404040',
                            marginBottom: 4
                        }}
                    >Description</Text>
                    <Text
                        style={{
                            fontSize: 14,
                            color: '#8B8B8B',
                            marginBottom: 4
                        }}
                    >Lorem ipsum dolor sit amet
                                            Lorem ipsum dolor sit amet
                                            Lorem ipsum dolor sit amet
                                            Lorem ipsum dolor sit amet
                                            Lorem ipsum dolor sit amet
                                            Lorem ipsum dolor sit amet
                                            Lorem ipsum dolor sit amet
                                            Lorem ipsum dolor sit amet
                                            Lorem ipsum dolor sit amet
                                            Lorem ipsum dolor sit amet
                    </Text>
                    <Button style={{
                        borderRadius: 8,
                        backgroundColor: '#B53647',
                        elevation: 0,
                        width: 100,
                        height: 50,
                        justifyContent: "center",
                        alignItems: "center",
                        width: '98%',
                        marginTop: 20
                    }}>
                        <Text
                            style={{
                                color: '#fff',
                                fontSize: 16,
                                fontWeight: 'bold',
                            }}>
                            ADD TO CART</Text>
                    </Button>
                </View>
                <Modal
                    visible={isModalVisible}
                    transparent={true}
                    presentationStyle='overFullScreen'
                    // style={styles.modalStyle}
                    animationType='slide'
                    onRequestClose={
                        () => {
                            this.setState({
                                isModalVisible: false
                            })
                        }
                    }
                >
                    <ColorPicker dismis={() => {
                        this.setState({
                            isModalVisible: false
                        })
                    }} />
                </Modal>
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
});