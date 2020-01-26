import React, { Component } from 'react';
import {
    View,
    ToastAndroid,
    Text,
    Image,
    StyleSheet,
} from 'react-native';
import {
    Input,
    Header,
    Icon
} from 'react-native-elements';

import Modal from 'react-native-modal';

import { TouchableOpacity } from 'react-native-gesture-handler';
import NumericInput from 'react-native-numeric-input';
import ColorPicker from '../components/Colorpicker';

export default class CartCard extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isModalVisible: false,
            handBouquetChecked: false,
            signatureBoxChecked: false,
        };
    }
    toggleModal = () => {
        this.setState({ isModalVisible: !this.state.isModalVisible });
    };
    render() {
        const { isModalVisible, handBouquetChecked, signatureBoxChecked } = this.state;
        return (
            <View 
                style={{
                    backgroundColor:'#F9F7F7'
                }}
            >
                <View
                    style={{
                        flexDirection: 'row',
                        marginVertical: 15,
                        marginHorizontal: 15,
                    }}
                >
                    <Image
                        source={require('../img/flower1.jpg')}
                        resizeMode='cover'
                        style={{
                            width: 100,
                            height: 100,
                            borderRadius: 12,
                            borderWidth: 1,
                            borderColor: '#B53647'
                        }}
                    />
                    <View
                        style={{
                            flex: 1,
                            flexDirection: "column",
                            justifyContent: "center",
                            marginLeft: 20
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
                                justifyContent: 'space-between',
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
                    </View>
                </View>
                <View
                    style={{
                        flexDirection: 'row',
                        justifyContent: 'space-around'
                    }}
                >
                    <View
                        style={{
                            flexDirection: 'row',
                            // marginHorizontal: 14
                        }}
                    >
                        {handBouquetChecked == false ?
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
                                        handBouquetChecked: true
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
                                        handBouquetChecked: false
                                    })
                                }}
                            />}
                        <TouchableOpacity
                            onPress={() => {

                            }}
                        >
                            <Text
                                style={{
                                    marginLeft: 8,
                                    color: '#8B8B8B',
                                    borderBottomWidth: 1,
                                    borderBottomColor: '#8B8B8B'
                                }}
                            > Add Hand Bouquet</Text>
                        </TouchableOpacity>
                    </View>
                    <View
                        style={{
                            flexDirection: 'row',
                            // marginHorizontal: 14
                        }}
                    >
                        {signatureBoxChecked == false ?
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
                                        signatureBoxChecked: true
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
                                        signatureBoxChecked: false
                                    })
                                }}
                            />}
                        <TouchableOpacity
                            onPress={() => {

                            }}
                        >
                            <Text
                                style={{
                                    marginLeft: 8,
                                    color: '#8B8B8B',
                                    borderBottomWidth: 1,
                                    borderBottomColor: '#8B8B8B'
                                }}
                            > Add Signature Box</Text>
                        </TouchableOpacity>
                    </View>
                </View>
                <Input
                    inputStyle={styles.input}

                    containerStyle={{
                        marginRight: 60,
                        marginBottom: 20,
                        marginTop: 20,
                        marginLeft: 0,
                    }}
                    inputContainerStyle={{
                        width: '98%',
                        borderBottomWidth: 0.5,
                        borderBottomColor: '#d3d3d3'
                    }}
                    placeholder='Add Note'

                />

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
const styles= StyleSheet.create({
    input: {
        padding: 0,
        paddingLeft: 10,
        fontSize: 14,
    },
});