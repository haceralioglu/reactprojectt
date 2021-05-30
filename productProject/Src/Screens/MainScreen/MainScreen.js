import React from 'react';
import {
    SafeAreaView,
    ScrollView,
    StatusBar,
    StyleSheet,
    Text, View
} from 'react-native';
import AppHeader from '../../Components/AppHeader/AppHeader'
import MyButton from '../../Components/Button/Button'
import colors from '../../Assets/colors/colors'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

export default class OTPScreen extends React.Component {

    render() {
        return (
            <View style={{ flex: 1 }}>

                <AppHeader
                    // backImage={images.ic_backBtn}
                    HomeName={'Main Screen'}
                    marginTop={12}
                    fontSize={17}
                    color={'#fff'}
                />


                <MyButton

                    backgroundColor={colors.ic_appcolor}
                    height={hp(6)}
                    width={wp(70)}
                    marginTop={hp(8)}
                    borderRadius={wp(1)}
                    fontSize={wp(4.5)}
                    color={'#fff'}
                    Text={"Product"}
                    onPress={()=>this.props.navigation.navigate("secondScreen",{id:1})}
                />
                <MyButton

                    backgroundColor={colors.ic_appcolor}
                    height={hp(6)}
                    width={wp(70)}
                    marginTop={hp(3)}
                    borderRadius={wp(1)}
                    fontSize={wp(4.5)}
                    color={'#fff'}
                    Text={"Categories"}
                    onPress={()=>this.props.navigation.navigate("secondScreen",{id:2})}
                />
                <MyButton

                    backgroundColor={colors.ic_appcolor}
                    height={hp(6)}
                    width={wp(70)}
                    marginTop={hp(3)}
                    borderRadius={wp(1)}
                    fontSize={wp(4.5)}
                    color={'#fff'}
                    Text={"Orders"}
                    onPress={()=>this.props.navigation.navigate("secondScreen",{id:3})}
                />
            </View>


        )
    }
}
