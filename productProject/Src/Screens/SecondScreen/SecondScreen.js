import React from 'react';
import {
    SafeAreaView,
    ScrollView,
    StatusBar,
    StyleSheet,
    Text, View, FlatList, TouchableOpacity, Image
} from 'react-native';
import AppHeader from '../../Components/AppHeader/AppHeader'
import MyButton from '../../Components/Button/Button'
import colors from '../../Assets/colors/colors'
import images from '../../Assets/Images/images'
import Snackbar from 'react-native-snackbar';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import AppLoading from '../../Components/AppLoading/AppLoading'
export default class OTPScreen extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            id: '',
            products: [],
            suppliers: [],
            Categories: [],
            Order: [], loading: false
        }
    }





    componentDidMount() {
        this.setState({ id: this.props.route.params.id }, () => {
            console.log("=====>", this.state.id);
        });

        setTimeout(() => {
            if (this.state.id === 1) {

                this.getProducts();
            }
            else if (this.state.id === 2) {
                this.getCategories();
            }
            else {
                this.getOrder()
            }
        }, 10)
    }

    deleteItemById = id => {
        const filteredData = this.state.products.filter(item => item.id !== id);
        this.setState({ products: filteredData });
    }

    deleteCategotieById = id => {
        const filteredData = this.state.Categories.filter(item => item.id !== id);
        this.setState({ Categories: filteredData });
    }

    deleteOrderById = id => {
        const filteredData = this.state.Order.filter(item => item.id !== id);
        this.setState({ Order: filteredData });
    }





    getProducts = () => {
        this.setState({ loading: true })
        console.log('request send')
        let formdata = new FormData()
        fetch('https://northwind.vercel.app/api/products', {
            method: 'GET',
            headers: {
                'Accept': 'application/json',
                'Key': 'c05bd74d95bc5f024625eea3be19540c'
            },

        })
            .then((response) => response.json())

            .then((responsejosn) => {

                console.log("sss", responsejosn.supplier)
                this.setState({ products: responsejosn })
                this.setState({ loading: false })
                this.state.products.map((item) => {
                    console.log("response is,", item.supplier);
                    this.setState({ suppliers: item })
                })

            })
    }

    //categotries



    getCategories = () => {
        this.setState({ loading: true })
        console.log('request send')
        let formdata = new FormData()
        fetch('https://northwind.vercel.app/api/categories', {
            method: 'GET',
            headers: {
                'Accept': 'application/json',
                'Key': 'c05bd74d95bc5f024625eea3be19540c'
            },

        })
            .then((response) => response.json())

            .then((responsejosn) => {

                console.log("sss", responsejosn)
                this.setState({ Categories: responsejosn }, () => {
                    console.log("Categories-->", this.state.Categories)

                })
                this.setState({ loading: false })

            })
    }


    //get order

    getOrder = () => {
        this.setState({ loading: true })
        console.log('request send')
        let formdata = new FormData()
        fetch(' https://northwind.vercel.app/api/orders', {
            method: 'GET',
            headers: {
                'Accept': 'application/json',
                'Key': 'c05bd74d95bc5f024625eea3be19540c'
            },

        })
            .then((response) => response.json())

            .then((responsejosn) => {

                console.log("sss", responsejosn)
                this.setState({ Order: responsejosn }, () => {
                    console.log("getOrder-->", this.state.Order)

                })
                this.setState({ loading: false })


            })
    }





    render() {
        return (
            <View style={{ flex: 1 }}>
                {AppLoading.renderLoading(this.state.loading)}
                <AppHeader
                    backImage={images.ic_backBtn}
                    HomeName={'Second Screen'}
                    marginTop={12}
                    fontSize={17}
                    onLeftIconPress={() => this.props.navigation.goBack()}
                    color={'#fff'}
                />


                {
                    this.state.id === 1 ?

                        <FlatList
                            contentContainerStyle={{ justifyContent: 'space-between', width: '100%', alignSelf: 'stretch', paddingHorizontal: 10, marginTop: 0 }}
                            numColumns={1}
                            horizontal={false}
                            data={this.state.products}
                            renderItem={({ item }) =>



                                <TouchableOpacity
                                    style={{ marginTop: 10, width: '95%', paddingVertical: 10 }}
                                    onPress={() => this.props.navigation.navigate("DetailScreen", { id: item.id, obj: 1 })}
                                >


                                    <View style={{ paddingHorizontal: wp(3), marginTop: 5, flexDirection: 'row', justifyContent: 'space-between', }}>

                                        <Text style={{ fontSize: wp(5) }}>Quantity Per-Unit:</Text>
                                        <Text style={{
                                            fontSize: 20, textAlign: 'left',
                                            fontWeight: 'bold',
                                            paddingBottom: 5,
                                        }}>{item.quantityPerUnit}</Text>
                                    </View>

                                    <View style={{ flexDirection: 'row', marginTop: 2, justifyContent: 'space-between', marginHorizontal: wp(3), }}>
                                        <Text style={{ marginTop: 3, fontSize: 17 }}>Units In-Stock:</Text>
                                        <Text style={{ fontSize: 18, color: '#000', fontWeight: 'bold', paddingRight: wp(30) }}>{item.unitsInStock}</Text>
                                    </View>

                                    <View style={{ flexDirection: 'row', marginTop: 2, justifyContent: 'space-between', marginHorizontal: wp(3), }}>
                                        <Text style={{ marginTop: 3, fontSize: 17 }}>Name:</Text>
                                        <Text style={{ fontSize: 18, color: '#000', fontWeight: 'bold', width: wp(40) }}>{item.name}</Text>
                                    </View>


                                    <TouchableOpacity
                                        onPress={() => this.deleteItemById(item.id)}
                                    >
                                        <Image
                                            source={images.ic_deleteBtn} style={{ alignSelf: 'flex-end', height: hp(5), width: wp(5) }} resizeMode='contain'
                                        />

                                    </TouchableOpacity>






                                    <View style={{ marginTop: 10, marginLeft: 10, backgroundColor: 'grey', height: 1, width: '95%' }}></View>

                                </TouchableOpacity>


                            }

                        />
                        : null

                }


                {//categories
                }



                {
                    this.state.id === 2 ?

                        <FlatList
                            contentContainerStyle={{ justifyContent: 'space-between', width: '100%', alignSelf: 'stretch', paddingHorizontal: 10, marginTop: 0 }}
                            numColumns={1}
                            horizontal={false}
                            data={this.state.Categories}
                            renderItem={({ item }) =>

                                <TouchableOpacity
                                    style={{ marginTop: 10, width: '95%', paddingVertical: 10 }}
                                    onPress={() => this.props.navigation.navigate("DetailScreen", { id: item.id, obj: 2 })}
                                >


                                    <View style={{ paddingHorizontal: wp(5), marginTop: 5, flexDirection: 'row', }}>

                                        <Text style={{ fontSize: wp(5) }}>id:</Text>
                                        <Text style={{
                                            fontSize: 20, textAlign: 'left',
                                            fontWeight: 'bold',
                                            paddingBottom: 5, marginLeft: wp(30)
                                        }}>{item.id}</Text>
                                    </View>

                                    <View style={{ flexDirection: 'row', marginTop: 2, justifyContent: 'space-between', marginHorizontal: wp(5), }}>
                                        <Text style={{ marginTop: 3, fontSize: 17 }}>Name:</Text>
                                        <Text style={{ fontSize: 18, color: '#000', fontWeight: 'bold', width: wp(45) }}>{item.name}</Text>
                                    </View>

                                    <View style={{ flexDirection: 'row', marginTop: 2, justifyContent: 'space-between', marginHorizontal: wp(5), }}>
                                        <Text style={{ marginTop: 3, fontSize: 17 }}>Description:</Text>
                                        <Text style={{ fontSize: 18, color: '#000', fontWeight: 'bold', width: wp(45) }}>{item.description}</Text>
                                    </View>


                                    <TouchableOpacity
                                        onPress={() => this.deleteCategotieById(item.id)}
                                    >
                                        <Image
                                            source={images.ic_deleteBtn} style={{ alignSelf: 'flex-end', height: hp(5), width: wp(5) }} resizeMode='contain'
                                        />
                                    </TouchableOpacity>
                                    <View style={{ marginTop: 10, marginLeft: 10, backgroundColor: 'grey', height: 1, width: '95%' }}></View>

                                </TouchableOpacity>


                            }

                        />
                        : null

                }






                {

                    this.state.id === 3 ?

                        <FlatList
                            contentContainerStyle={{ justifyContent: 'space-between', width: '100%', alignSelf: 'stretch', paddingHorizontal: 10, marginTop: 0 }}
                            numColumns={1}
                            horizontal={false}
                            data={this.state.Order}
                            renderItem={({ item }) =>


                                <TouchableOpacity
                                    style={{ marginTop: 10, width: '95%', paddingVertical: 10 }}
                                    onPress={() => this.props.navigation.navigate("DetailScreen", { id: item.id, obj: 3 })}
                                >


                                    <View style={{ paddingHorizontal: wp(5), marginTop: 5, flexDirection: 'row', justifyContent: 'space-between', }}>


                                        <Text style={{ fontSize: wp(5) }}>id:</Text>
                                        <Text style={{
                                            fontSize: 20, paddingRight: wp(13),
                                            fontWeight: 'bold',
                                            paddingBottom: 5,
                                        }}>{item.customerId}</Text>
                                    </View>

                                    <View style={{ flexDirection: 'row', marginTop: 2, justifyContent: 'space-between', marginHorizontal: wp(5), }}>
                                        <Text style={{ marginTop: 3, fontSize: 17 }}>Order Date:</Text>
                                        <Text style={{ fontSize: 18, color: '#000', fontWeight: 'bold', width: wp(31) }}>{item.orderDate}</Text>
                                    </View>

                                    <View style={{ flexDirection: 'row', marginTop: 2, justifyContent: 'space-between', marginHorizontal: wp(5), }}>
                                        <Text style={{ marginTop: 3, fontSize: 17 }}>Required Date:</Text>
                                        <Text style={{ fontSize: 18, color: '#000', fontWeight: 'bold', width: wp(31) }}>{item.requiredDate}</Text>
                                    </View>
                                    <View style={{ flexDirection: 'row', marginTop: 2, justifyContent: 'space-between', marginHorizontal: wp(5), }}>
                                        <Text style={{ marginTop: 3, fontSize: 17 }}>Ship Name:</Text>
                                        <Text style={{ fontSize: 18, color: '#000', fontWeight: 'bold', width: wp(31) }}>{item.shipName}</Text>
                                    </View>
                                    <View style={{ flexDirection: 'row', marginTop: 2, justifyContent: 'space-between', marginHorizontal: wp(5), }}>
                                        <Text style={{ marginTop: 3, fontSize: 17 }}>Shipped Date:</Text>
                                        <Text style={{ fontSize: 18, color: '#000', fontWeight: 'bold', width: wp(31) }}>{item.shippedDate}</Text>
                                    </View>




                                    <TouchableOpacity
                                        onPress={() => this.deleteOrderById(item.id)}
                                    >

                                        <Image
                                            source={images.ic_deleteBtn} style={{ alignSelf: 'flex-end', height: hp(5), width: wp(5) }} resizeMode='contain'
                                        />

                                    </TouchableOpacity>




                                    <View style={{ marginTop: 10, marginLeft: 10, backgroundColor: 'grey', height: 1, width: '95%' }}></View>

                                </TouchableOpacity>


                            }

                        />
                        : null

                }



            </View>


        )
    }
}