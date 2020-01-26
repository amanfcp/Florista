import React, { Component } from 'react';
import {
    StyleSheet,
    View,
    Image,
    Text,
    TouchableOpacity,
    SafeAreaView,
    ImageBackground,
} from 'react-native';
import {
    Drawer,
} from 'native-base';
import {
    Header,
    Icon
} from 'react-native-elements';

import Carousel, { Pagination } from 'react-native-snap-carousel';


class MyCarousel extends Component {
    constructor(props) {
        super(props);
        this.state = {
            imgArray: [
                {
                    image: require('../img/flower1.jpg'),
                    title: "CUSTOM",
                    desc: "ARRANGEMENTS"
                },
                {
                    image: require('../img/flower2.jpg'),
                    title: "READY",
                    desc: "ARRANGEMENTS"
                },
            ],
            activeSlide: 0
        }
    }
    _renderItem({ item, index }) {
        return (
            <View
                style={{ flex: 1 }}>
                <ImageBackground
                    style={{
                        height: 530,
                        width: 300,
                        borderRadius: 40,
                    }}
                    source={item.image}
                    imageStyle={{ borderRadius: 40 }}
                >
                    <View style={styles.imgDesc}>
                        <Text style={styles.imgDescText}>{item.title}</Text>
                        <Text style={[
                            styles.imgDescText,
                            {
                                fontWeight: 'normal',
                                fontSize: 22,
                                color: '#757379'
                            }
                        ]}>{item.desc}</Text>
                    </View>
                </ImageBackground>

            </View>
        )
    }

    render() {
        const { imgArray, activeSlide } = this.state
        return (
            <View style={styles.carouselContainer}>
                <Carousel
                    data={this.state.imgArray}
                    sliderWidth={600}
                    itemWidth={300}
                    // itemHeight={200}
                    renderItem={this._renderItem}
                    onSnapToItem={(index) => this.setState({ activeSlide: index })}
                // loop={true}
                />
                <Pagination
                    dotsLength={imgArray.length}
                    activeDotIndex={activeSlide}
                    dotColor='#B53647'
                    inactiveDotColor='#d3d3d3'
                    containerStyle={{
                        height: 80
                    }}
                    dotStyle={{
                        margin: 0,
                        padding: 0,
                        width: 5,
                        height: 40,
                        backgroundColor: '#000'
                    }}
                    inactiveDotStyle={{
                        height: 40,
                    }}
                    inactiveDotOpacity={0.4}
                    inactiveDotScale={0.6}


                />


            </View>
        );
    }
}


export default class Home extends Component {
    constructor(props) {
        super(props);

    }
    render() {
        return (
            <View style={styles.container}>
                <Header backgroundColor='#EDE7E9'>
                    <TouchableOpacity >
                        <View style={styles.menu}>
                            <Icon
                                name='menu' color='#fff' />
                        </View>
                    </TouchableOpacity>
                </Header>
                <MyCarousel />
                {/* <Pagination
                    activeDotIndex={0}
                    dotsLength={2}
                /> */}
            </View>
        );
    }
}
const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: '100%',
        backgroundColor: '#EDE7E9'
    },
    menu: {
        borderTopRightRadius: 30,
        borderBottomRightRadius: 30,
        alignSelf: 'flex-start',
        alignItems: "center",
        justifyContent: "center",
        marginLeft: -10,
        // marginTop: 30,
        width: 60,
        height: 45,
        backgroundColor: '#B53647'
    },
    carouselContainer: {
        borderRadius: 40,
        marginTop: 50,
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    imgDesc: {
        flex: 1,
        justifyContent: 'flex-end',
        marginBottom: 20,
        marginLeft: 20,
    },
    imgDescText: {
        fontFamily: 'normal',
        fontSize: 40,
        letterSpacing: -1,
        color: '#36363B',
        // textTransform: 'uppercase',
    }
});

// const styles = StyleSheet.create({
//     container: {
//       flex: 1,
//     //   backgroundColor:'#131420',
//     //   alignItems: 'center',
//     //   justifyContent: 'center',
//     },
//   });