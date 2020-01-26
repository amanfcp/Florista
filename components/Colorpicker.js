import React, { Component } from 'react';
import {
    View,
    FlatList,
    Text,
    Modal,
    StyleSheet,
    ToastAndroid
} from 'react-native';
import { Button } from 'native-base';

export default class ColorPicker extends Component {
    constructor(props) {
        super(props);
        this.state = {
            colorArray: [
                '#EF4D95',
                '#FEA003',
                '#ECBD6D',
                '#FE03A2',
                '#E010FF',
                '#03FE7F',
                '#FF0000',
                '#9C7025',
                '#CF8B15',
                '#FE9D03',
                '#F6F4F4',
                '#FEA003',
                '#EF4D95',
                '#FEA003',
                '#EF4D95',
                '#FEA003',
            ],
            activeColor: 0,
            selectedColor: '#fff',
            isActive: false,
        };
    }
    saveColor = item => {
        this.setState({
            selectedColor: item
        })
    }
    


    render() {
        const { activeColor, isActive, colorArray } = this.state
        return (
            <View
                style={{
                    width: '100%',
                    height: '100%',
                    backgroundColor: '#00000099',
                    justifyContent: 'center'
                }}
            >

                <View
                    style={styles.modalStyle}
                >
                    <View
                        style={{
                            flex: 1,
                            padding: 12,
                            alignContent: 'center',
                            justifyContent: 'center',
                        }}
                    >
                        <Text
                            style={{
                                fontSize: 16,
                                textAlign: 'center',
                                margin: 10
                            }}
                        >
                            Choose Color
                </Text>
                        <FlatList
                            scrollEnabled={false}
                            data={colorArray}
                            renderItem={({ item, index }) => (
                                activeColor == index ?
                                    <Button
                                        style={{
                                            borderRadius: 8,
                                            width: 52,
                                            height: 39,
                                            backgroundColor: item,
                                            marginVertical: 10,
                                            marginHorizontal: 10,
                                            borderWidth: 1.5,
                                            borderColor: 'gray'
                                        }} />
                                    :
                                    <Button
                                        style={{
                                            borderRadius: 8,
                                            width: 50,
                                            height: 37,
                                            backgroundColor: item,
                                            marginVertical: 10,
                                            marginHorizontal: 10,
                                        }}
                                        onPress={() => {
                                            this.setState({
                                                activeColor: index
                                            })
                                            this.saveColor(item)
                                        }}
                                    />
                            )}
                            numColumns={4}
                            keyExtractor={(item, index) => index.toString()}
                        />
                        <Button
                            onPress={() =>
                                this.props.dismis()
                            }
                            style={{
                                borderRadius: 8,
                                backgroundColor: '#B53647',
                                elevation: 0,
                                height: 50,
                                justifyContent: "center",
                                alignItems: "center",
                                // width:'100%',
                                marginBottom: 20
                            }}>
                            <Text
                                style={{
                                    color: '#fff',
                                    fontSize: 15,
                                    fontWeight: 'bold',
                                }}>
                                SUBMIT</Text>
                        </Button>
                    </View>
                </View>
            </View>

        );
    }
}

const styles = StyleSheet.create({
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