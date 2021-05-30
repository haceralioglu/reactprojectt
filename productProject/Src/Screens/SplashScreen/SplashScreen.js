import React, { Component } from 'react';
import {
    Button,
    Text,
    View, Image, TouchableOpacity, Modal, StyleSheet, ImageBackground, StatusBar
} from 'react-native';
import images from '../../Assets/Images/images'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';


export default class SplashScreen extends Component {
    constructor(props) {
        super(props)
        this.state = {
            data: {
            token: ''
        }
    }
    }

    componentDidMount = async () => {
            setTimeout(() => {
                this.props.navigation.navigate('mainScreen');
        }, 4000);
    }


    render() {
        return (
            <ImageBackground style={styles.mainCotainer} source={images.ic_product}>
                <StatusBar barStyle="dark-content" hidden={false} backgroundColor={'#fff'} translucent={false} />
            </ImageBackground>
        )
    }
}

const styles = StyleSheet.create({
    mainCotainer: {
        // flex: 1,
        justifyContent: 'center',
        height:'70%',
        width: '97%',
        resizeMode: 'contain',
        top:wp(40)

    },
    images: {
        height: '55%',
        width: '40%',
        resizeMode: 'contain'
    }
});