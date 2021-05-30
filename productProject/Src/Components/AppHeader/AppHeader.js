import React from 'react';
import {
    SafeAreaView,
    ScrollView,
    Platform,
    StyleSheet,
    Text,
    View, Image, TouchableOpacity
} from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import colors from '../../Assets/colors/colors'


export default class AppHeader extends React.Component {
    render() {
        let marginTop = this.props.marginTop
        let fontSize = this.props.fontSize
        let color = this.props.color
        return (
            <View style={styles.container}>
                <View style={styles.nextView}>
                    <TouchableOpacity
                        onPress={this.props.onLeftIconPress}>
                        <Image
                            source={this.props.backImage} style={styles.imageView} />
                    </TouchableOpacity>
                    <Text style={{ marginTop: marginTop, fontSize: fontSize, color: color }}>{this.props.HomeName}</Text>
                    <View style={{ flexDirection: 'row', paddingHorizontal: wp(1) }}>
                        <TouchableOpacity onPress={this.props.onEditProfileClick}>
                            <Image source={this.props.homeImage} style={styles.imageView} />
                        </TouchableOpacity>

                        <TouchableOpacity
                            onPress={this.props.MenuBtn}
                        >
                            <Image source={this.props.menuImage} style={styles.menuView} />
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        height: hp(5),
    },
    nextView: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: wp(2),

        backgroundColor: colors.ic_appcolor,
        height: hp(6)
    },
    imageView: {
        marginTop: wp(2.6),
        height: hp(3.4),
        width: wp(7),
        tintColor: '#fff',
        // marginLeft:wp(2)
    },
    menuView: {
        marginTop: wp(2.6),
        height: hp(3.4),
        width: wp(7),
        tintColor: '#fff',
        marginLeft: wp(2)
    }


})