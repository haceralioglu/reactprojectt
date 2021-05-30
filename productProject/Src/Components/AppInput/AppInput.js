import React from 'react';
import {
    SafeAreaView,
    TextInput,
    Platform,
    StyleSheet,
    Text,
    View, Image
} from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import colors from '../../Assets/colors/colors'
export default class AppHeader extends React.Component {
    render() {
        let marginTop = this.props.marginTop
        let borderRadius = this.props.borderRadius
        let color = this.props.color
        let width=this.props.width
        let height=this.props.height
        
        return (
            <View style={[styles.inputView,{marginTop:marginTop,borderRadius:borderRadius,width:width,height:height,}]}>
                <Image source={this.props.backImage} style={{height:hp(4),width:wp(7),marginTop:4,resizeMode:'contain',marginLeft:wp(2)}} />
             <TextInput numberOfLines={this.props.numberOfLines} style={[styles.textView,{
                
                }]}
                placeholder={this.props.placeholder}
                placeholderTextColor={this.props.placeholderTextColor}
                value={this.props.value}
                onChangeText={this.props.onChangeText}
                secureTextEntry={this.props.secureTextEntry}
                keyboardType={this.props.keyboardType}
                textAlignVertical={this.props.textAlignVertical}
                >

                </TextInput>

            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        height: hp(5),

    },
    textView: {
        alignSelf:'center',
        width:wp(50),
        color:'#000'
        // backgroundColor:'blue'
       
    },
    imageView: {
        marginTop: wp(2.6),
        height: hp(3.4),
        width: wp(7),
        tintColor: '#fff'
    },
    inputView:{
        flexDirection:'row',
        backgroundColor:'#DDD',
        marginLeft:wp(5)  ,
       
    }


})