import React from 'react';
import {
    SafeAreaView,
    TextInput,
    TouchableOpacity,
    StyleSheet,
    Text,
    View, Image, Touchable
} from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
// import color from '../../Assets/colors/colors'
export default class AppHeader extends React.Component {
    render() {
        let marginTop = this.props.marginTop
        let borderRadius = this.props.borderRadius
        let color = this.props.color
        let backgroundColor=this.props.backgroundColor
        let height=this.props.height
        let width=this.props.width
        let fontSize=this.props.fontSize
        return (
        <View style={{alignSelf:'center'}}>
                <TouchableOpacity
                style={[styles.btnView],{backgroundColor:backgroundColor,
                    height:height,width:width,marginTop:marginTop,borderRadius:borderRadius
                
                }}
                onPress={this.props.onPress}
               >
                   <Text style={[styles.btnText],{color:color,fontSize:fontSize,textAlign:'center',marginTop:wp(3),}}>{this.props.Text}</Text>
                   </TouchableOpacity>

        </View>
        )}}

        const styles = StyleSheet.create({
            container: {
                height: hp(5),
            },
            btnView: {
                alignSelf:'center', 
                      
            },
            btnText:{
                marginTop:5,textAlign:'center',
            }
        
        })