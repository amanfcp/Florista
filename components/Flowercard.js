import React, { Component } from 'react';
import {
    StyleSheet,
    View,
    Text,
    Image,
    ToastAndroid,
    Modal
} from 'react-native';
import {
    Icon,
} from 'react-native-elements';

import NumericInput from 'react-native-numeric-input';
import ColorPicker from '../components/Colorpicker';
// import Modal from 'react-native-modal';

import ColorPalette from 'react-native-color-palette';
import { TouchableOpacity } from 'react-native-gesture-handler';

export default class Flowercard extends Component {
    constructor(props) {
        super(props);
        this.state = {
            checked: false,
            isModalVisible: false,
        };
    }

    toggleModal = () => {
        this.setState({ isModalVisible: !this.state.isModalVisible });
    };

    render() {
        const { checked, isModalVisible } = this.state;

        return (
            <View
                style={{
                    backgroundColor: '#FFFFFF',
                    width: 180,
                    height: 370,
                    borderRadius: 20,
                    margin: 7
                }}
            >
                <Image
                    source={this.props.flowerImg}
                    style={styles.imgStyle}
                />
                <TouchableOpacity
                    style={styles.iconStyle}
                >
                    {checked == false ?
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
                                    checked: true
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
                                    checked: false
                                })
                            }}
                        />}
                </TouchableOpacity>
                <View
                    style={{
                        marginTop: 210,
                        marginHorizontal: 10,
                    }}
                >
                    <Text
                        style={{
                            fontWeight: 'bold',
                            fontSize: 18,
                            color: '#404040',
                            marginBottom: 4
                        }}
                    >{this.props.flowerName}</Text>
                    <Text
                        style={{
                            fontWeight: 'bold',
                            fontSize: 14,
                            color: '#8B8B8B',
                            marginBottom: 4
                        }}
                    >{this.props.flowerCost} AED</Text>
                    <View
                        style={{
                            flexDirection: 'row',
                            justifyContent: 'space-between',
                            marginBottom: 6
                        }}
                    >
                        <Text
                            style={{
                                fontSize: 14,
                                color: '#8B8B8B',
                                marginBottom: 4
                            }}
                        >Choose Color</Text>
                        <Icon
                            underlayColor='transparent'
                            containerStyle={[
                                styles.colorPaletteStyle,
                                { backgroundColor: this.props.flowerColor }

                            ]}
                            type='antdesign'
                            name='check'
                            color={this.props.flowerColor}

                            onPress={() => {
                                this.toggleModal();
                                // ToastAndroid.show(isModalVisible.toString(), ToastAndroid.SHORT);
                            }}
                        />

                        {/* <TouchableOpacity
                            style={[
                                styles.colorPaletteStyle,
                                { backgroundColor: this.props.flowerColor }
                            ]}
                            onPress={()=>{
                                ToastAndroid.show('Color Tapped', ToastAndroid.SHORT);
                                // this.toggleModal()
                            }}
                        >
                            <View
                                style={{
                                    width:'100%',
                                    height:'100%',

                                }}
                            ></View>
                        </TouchableOpacity> */}

                        {/* <ColorPalette/> */}
                    </View>
                    <View
                        style={{
                            flexDirection: 'row',
                            justifyContent: 'space-between'
                        }}
                    >
                        <Text
                            style={{
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
        )
    }
}

const styles = StyleSheet.create({
    imgStyle: {
        position: "absolute",
        width: '100%',
        height: '65%',
        borderTopRightRadius: 20,
        borderTopLeftRadius: 20,
    },
    iconStyle: {
        zIndex: 2,
        // position: 'absolute',
        // right: 10,
        // top: 10,
        marginRight: 10,
        marginTop: 10,
        alignSelf: 'flex-end',
        backgroundColor: '#fff',
        borderRadius: 100,
    },
    colorPaletteStyle: {
        // backgroundColor: this.state.flowerColor,
        borderRadius: 8,
        width: 40,
        height: 27,
    },
    modalStyle: {
        borderRadius: 8,
        alignSelf: 'center',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#ffffff',
        width: '90%',
        height: '50%'
    }
});