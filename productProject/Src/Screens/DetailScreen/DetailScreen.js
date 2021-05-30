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
import AppLoading from '../../Components/AppLoading/AppLoading'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

export default class DetailScreen extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            order: [],
            id: '',
            obj: null,
            name: '',
            quantityPerUnit: '',
            unitPrice: '',
            unitsInStock: '',

            //supplier
            companyName: '',
            contactName: '',
            contactTitle: '',

            street: '',
            city: '',
            region: '',
            postalCode: '',
            country: '',
            phone: '',
            


            //catorgry of product
            description: '',
            Name: '',



            //categories
            description: '',

            //order
            customerId: '',
            orderDate: '',
            requiredDate: '',
            shippedDate: '',
            shipName: '',
            street: '',
            city: '',
            country: '',
            productId: '',
            unitPrice: '',
            quantity: '',
            loading:false


        }
    }

    componentDidMount() {
        this.setState({ id: this.props.route.params.id, obj: this.props.route.params.obj })
        setTimeout(() => {
            if (this.state.obj === 1) {
                this.getProducts()
            }
            else if (this.state.obj === 2) {
                this.getCategories()
            }
            else {
                this.getOrder()
            }
        }, 50)
    }

    getProducts = () => {
        // this.setState({ loading: true })
        console.log('request send')
        let formdata = new FormData()
        fetch(' https://northwind.vercel.app/api/products/' + this.state.id, {
            method: 'GET',
            headers: {
                'Accept': 'application/json',
                'Key': 'c05bd74d95bc5f024625eea3be19540c'
            },

        })
            .then((response) => response.json())

            .then((responsejosn) => {

                // console.log("sss", responsejosn)
                this.setState({

                    // description:responsejosn.description,
                    name: responsejosn.name,
                    quantityPerUnit: responsejosn.quantityPerUnit,
                    unitPrice: responsejosn.unitPrice,
                    unitsInStock: responsejosn.unitsInStock,
                    companyName: responsejosn.supplier.companyName,
                    contactName: responsejosn.supplier.contactName,
                    contactTitle: responsejosn.supplier.contactTitle,

                    description: responsejosn.category.description,
                    Name: responsejosn.category.name,

                    street: responsejosn.supplier.address.street,
                    city: responsejosn.supplier.address.city,
                    region: responsejosn.supplier.address.region,
                    postalCode: responsejosn.supplier.address.postalCode,
                    country: responsejosn.supplier.address.country,
                    phone: responsejosn.supplier.address.phone,


                })
               
            })
    }

    // categoties


    getCategories = () => {
        this.setState({ loading: true })
        console.log('request send')
        let formdata = new FormData()
        fetch('https://northwind.vercel.app/api/categories/' + this.state.id, {
            method: 'GET',
            headers: {
                'Accept': 'application/json',
                'Key': 'c05bd74d95bc5f024625eea3be19540c'
            },

        })
            .then((response) => response.json())

            .then((responsejosn) => {

                // console.log("sss", responsejosn)
                this.setState({

                    name: responsejosn.name,
                    description: responsejosn.description
                })
                this.setState({ loading: false })
            })
    }


    //order

    getOrder = () => {
        this.setState({ loading: true })
        console.log('request send')
        let formdata = new FormData()
        fetch('https://northwind.vercel.app/api/orders/' + this.state.id, {
            method: 'GET',
            headers: {
                'Accept': 'application/json',
                'Key': 'c05bd74d95bc5f024625eea3be19540c'
            },

        })
            .then((response) => response.json())

            .then((responsejosn) => {

                console.log("sss", responsejosn)

                this.setState({
                    customerId: responsejosn.customerId,
                    orderDate: responsejosn.orderDate,
                    requiredDate: responsejosn.requiredDate,
                    shippedDate: responsejosn.shippedDate,
                    shipName: responsejosn.shipName,
                    street: responsejosn.shipAddress.street,
                    city: responsejosn.shipAddress.city,
                    country: responsejosn.shipAddress.country,


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
                    HomeName={'Detail Screen'}
                    marginTop={12}
                    fontSize={17}
                    onLeftIconPress={() => this.props.navigation.goBack()}
                    color={'#fff'}
                />
               
                <Text style={{ color: colors.ic_appcolor, paddingHorizontal: wp(3), fontSize: wp(5), marginTop: wp(5) }}>Detail of the Product </Text>

                {
                    this.state.obj === 1 ?

                    <ScrollView contentContainerStyle={{paddingBottom:wp(5)}}>

                        {
                        this.state.quantityPerUnit!=='' ?
                        <View style={{ marginTop: wp(5) }}>


                            <View style={{ paddingHorizontal: wp(5), marginTop: 5, flexDirection: 'row',  }}>

                                <Text style={{ fontSize: wp(5) }}>Name:</Text>
                                <Text style={{
                                    fontSize: 20,
                                    fontWeight: 'bold',
                                    paddingBottom: 5, marginLeft: wp(30)
                                }}>{this.state.name}</Text>
                            </View>

                            <View style={{ flexDirection: 'row', marginTop: 2, justifyContent: 'space-between', marginHorizontal: wp(5), }}>
                                <Text style={{ marginTop: 3, fontSize: 17 }}>QuantityPerUnit:</Text>
                                <Text style={{ fontSize: 18, color: '#000', fontWeight: 'bold', width: wp(45) }}>{this.state.quantityPerUnit}</Text>
                            </View>

                            <View style={{ flexDirection: 'row', marginTop: 2, justifyContent: 'space-between', marginHorizontal: wp(5), }}>
                                <Text style={{ marginTop: 3, fontSize: 17 }}>UnitPrice:</Text>
                                <Text style={{ fontSize: 18, color: '#000', fontWeight: 'bold', width: wp(45) }}>{this.state.unitPrice}</Text>
                            </View>

                            <View style={{ flexDirection: 'row', marginTop: 2, justifyContent: 'space-between', marginHorizontal: wp(5), }}>
                                <Text style={{ marginTop: 3, fontSize: 17 }}>Units In-Stock:</Text>
                                <Text style={{ fontSize: 18, color: '#000', fontWeight: 'bold', width: wp(45) }}>{this.state.unitsInStock}</Text>
                            </View>
                            <Text style={{ color: colors.ic_appcolor, paddingHorizontal: wp(3), fontSize: wp(5), marginTop: wp(5) }}>Detail of the Supplier </Text>

                            <View style={{ flexDirection: 'row', marginTop: 2, justifyContent: 'space-between', marginHorizontal: wp(5), }}>
                                <Text style={{ marginTop: 3, fontSize: 17 }}>Company Name:</Text>
                                <Text style={{ fontSize: 18, color: '#000', fontWeight: 'bold', width: wp(45) }}>{this.state.companyName}</Text>
                            </View>
                            <View style={{ flexDirection: 'row', marginTop: 2, justifyContent: 'space-between', marginHorizontal: wp(5), }}>
                                <Text style={{ marginTop: 3, fontSize: 17 }}>Contact Name:</Text>
                                <Text style={{ fontSize: 18, color: '#000', fontWeight: 'bold', width: wp(45) }}>{this.state.contactName}</Text>
                            </View>
                            <View style={{ flexDirection: 'row', marginTop: 2, justifyContent: 'space-between', marginHorizontal: wp(5), }}>
                                <Text style={{ marginTop: 3, fontSize: 17 }}>Contact Title:</Text>
                                <Text style={{ fontSize: 18, color: '#000', fontWeight: 'bold', width: wp(45) }}>{this.state.contactTitle}</Text>
                            </View>
                            <Text style={{ color: colors.ic_appcolor, paddingHorizontal: wp(3), fontSize: wp(5), marginTop: wp(5) }}>Detail of the Address </Text>

                            <View style={{ flexDirection: 'row', marginTop: 2, justifyContent: 'space-between', marginHorizontal: wp(5), }}>
                                <Text style={{ marginTop: 3, fontSize: 17 }}>Street:</Text>
                                <Text style={{ fontSize: 18, color: '#000', fontWeight: 'bold', width: wp(45) }}>{this.state.street}</Text>
                            </View>
                            <View style={{ flexDirection: 'row', marginTop: 2, justifyContent: 'space-between', marginHorizontal: wp(5), }}>
                                <Text style={{ marginTop: 3, fontSize: 17 }}>City:</Text>
                                <Text style={{ fontSize: 18, color: '#000', fontWeight: 'bold', width: wp(45) }}>{this.state.city}</Text>
                            </View>

                            <View style={{ flexDirection: 'row', marginTop: 2, justifyContent: 'space-between', marginHorizontal: wp(5), }}>
                                <Text style={{ marginTop: 3, fontSize: 17 }}>Region:</Text>
                                <Text style={{ fontSize: 18, color: '#000', fontWeight: 'bold', width: wp(45) }}>{this.state.region}</Text>
                            </View>
                            <View style={{ flexDirection: 'row', marginTop: 2, justifyContent: 'space-between', marginHorizontal: wp(5), }}>
                                <Text style={{ marginTop: 3, fontSize: 17 }}>Postal-Code:</Text>
                                <Text style={{ fontSize: 18, color: '#000', fontWeight: 'bold', width: wp(45) }}>{this.state.postalCode}</Text>
                            </View>
                            <View style={{ flexDirection: 'row', marginTop: 2, justifyContent: 'space-between', marginHorizontal: wp(5), }}>
                                <Text style={{ marginTop: 3, fontSize: 17 }}>Country:</Text>
                                <Text style={{ fontSize: 18, color: '#000', fontWeight: 'bold', width: wp(45) }}>{this.state.country}</Text>
                            </View>
                            <View style={{ flexDirection: 'row', marginTop: 2, justifyContent: 'space-between', marginHorizontal: wp(5), }}>
                                <Text style={{ marginTop: 3, fontSize: 17 }}>Phone:</Text>
                                <Text style={{ fontSize: 18, color: '#000', fontWeight: 'bold', width: wp(45) }}>{this.state.phone}</Text>
                            </View>
                            <View style={{ flexDirection: 'row', marginTop: 2, justifyContent: 'space-between', marginHorizontal: wp(5), }}>
                                <Text style={{ marginTop: 3, fontSize: 17 }}>City:</Text>
                                <Text style={{ fontSize: 18, color: '#000', fontWeight: 'bold', width: wp(45) }}>{this.state.city}</Text>
                            </View>
                            <Text style={{ color: colors.ic_appcolor, paddingHorizontal: wp(3), fontSize: wp(5), marginTop: wp(5) }}>Detail of the Category </Text>

                            <View style={{ flexDirection: 'row', marginTop: 2, justifyContent: 'space-between', marginHorizontal: wp(5), }}>
                                <Text style={{ marginTop: 3, fontSize: 17 }}>Description:</Text>
                                <Text style={{ fontSize: 18, color: '#000', fontWeight: 'bold', width: wp(45) }}>{this.state.description}</Text>
                            </View>
                            <View style={{ flexDirection: 'row', marginTop: 2, justifyContent: 'space-between', marginHorizontal: wp(5), }}>
                                <Text style={{ marginTop: 3, fontSize: 17 }}>Name:</Text>
                                <Text style={{ fontSize: 18, color: '#000', fontWeight: 'bold', width: wp(45) }}>{this.state.Name}</Text>
                            </View>

                        </View>

                        : 
                        <View>
                      <Text  style={{fontSize:wp(4),color:colors.ic_appcolor,marginTop:wp(5),paddingHorizontal:wp(3)}}>No detail Description Of this Product is available</Text>
                    </View>
                        
    }



                        </ScrollView>
                        : null
                }









                {

                    this.state.obj === 2 ?
                        <View style={{ marginTop: wp(5) }}>
                            <View style={{ paddingHorizontal: wp(5), marginTop: 5, flexDirection: 'row', }}>

                                <Text style={{ fontSize: wp(5) }}>Name:</Text>
                                <Text style={{
                                    fontSize: 20, textAlign: 'left',
                                    fontWeight: 'bold',
                                    paddingBottom: 5, marginLeft: wp(30)
                                }}>{this.state.name}</Text>
                            </View>

                            <View style={{ flexDirection: 'row', marginTop: 2, justifyContent: 'space-between', marginHorizontal: wp(5), }}>
                                <Text style={{ marginTop: 3, fontSize: 17 }}>Description:</Text>
                                <Text style={{ fontSize: 18, color: '#000', fontWeight: 'bold', width: wp(45) }}>{this.state.description}</Text>
                            </View>
                        </View>

                        : null

                }

                {
                    this.state.obj === 3 ?

                        <View style={{ marginTop: wp(5) }}>
                            <View style={{ paddingHorizontal: wp(5), marginTop: 5, flexDirection: 'row', }}>

                                <Text style={{ fontSize: wp(5) }}>Customer-Id:</Text>
                                <Text style={{
                                    fontSize: 20, textAlign: 'left',
                                    fontWeight: 'bold',
                                    paddingBottom: 5, marginLeft: wp(30)
                                }}>{this.state.customerId}</Text>
                            </View>

                            <View style={{ flexDirection: 'row', marginTop: 2, justifyContent: 'space-between', marginHorizontal: wp(5), }}>
                                <Text style={{ marginTop: 3, fontSize: 17 }}>OrderDate:</Text>
                                <Text style={{ fontSize: 18, color: '#000', fontWeight: 'bold', width: wp(31) }}>{this.state.orderDate}</Text>
                            </View>


                            <View style={{ flexDirection: 'row', marginTop: 2, justifyContent: 'space-between', marginHorizontal: wp(5), }}>
                                <Text style={{ marginTop: 3, fontSize: 17 }}>Required-Date:</Text>
                                <Text style={{ fontSize: 18, color: '#000', fontWeight: 'bold', width: wp(31) }}>{this.state.requiredDate}</Text>
                            </View>

                            <View style={{ flexDirection: 'row', marginTop: 2, justifyContent: 'space-between', marginHorizontal: wp(5), }}>
                                <Text style={{ marginTop: 3, fontSize: 17 }}>shipped-Date:</Text>
                                <Text style={{ fontSize: 18, color: '#000', fontWeight: 'bold', width: wp(31) }}>{this.state.shippedDate}</Text>
                            </View>

                            <View style={{ flexDirection: 'row', marginTop: 2, justifyContent: 'space-between', marginHorizontal: wp(5), }}>
                                <Text style={{ marginTop: 3, fontSize: 17 }}>Ship-Name:</Text>
                                <Text style={{ fontSize: 18, color: '#000', fontWeight: 'bold', width: wp(31) }}>{this.state.shipName}</Text>
                            </View>


                            <Text style={{ color: colors.ic_appcolor, paddingHorizontal: wp(3.3), fontSize: wp(5), marginTop: wp(5) }}>Ship Address </Text>


                            <View style={{ flexDirection: 'row', marginTop: 2, justifyContent: 'space-between', marginHorizontal: wp(5), }}>
                                <Text style={{ marginTop: 3, fontSize: 17 }}>street:</Text>
                                <Text style={{ fontSize: 18, color: '#000', fontWeight: 'bold', width: wp(31) }}>{this.state.street}</Text>
                            </View>

                            <View style={{ flexDirection: 'row', marginTop: 2, justifyContent: 'space-between', marginHorizontal: wp(5), }}>
                                <Text style={{ marginTop: 3, fontSize: 17 }}>City:</Text>
                                <Text style={{ fontSize: 18, color: '#000', fontWeight: 'bold', width: wp(31) }}>{this.state.city}</Text>
                            </View>

                            <View style={{ flexDirection: 'row', marginTop: 2, justifyContent: 'space-between', marginHorizontal: wp(5), }}>
                                <Text style={{ marginTop: 3, fontSize: 17 }}>Country:</Text>
                                <Text style={{ fontSize: 18, color: '#000', fontWeight: 'bold', width: wp(31) }}>{this.state.country}</Text>
                            </View>



                        </View>

                        : null
                }

            </View>


        )
    }
}