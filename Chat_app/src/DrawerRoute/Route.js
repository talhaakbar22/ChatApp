import React from "react";
import {Image, SafeAreaView, ScrollView, Text, TouchableOpacity, View} from "react-native";
import {createDrawerNavigator, DrawerContentScrollView, DrawerItemList} from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import Chat from "../DrawerScreen/Chat";
import CardStyle from "../DrawerScreen/CardStyle";
import SimpleLineIcons from "react-native-vector-icons/SimpleLineIcons";
import CurserStyle from "../DrawerScreen/CurserStyle";
import MaskedViewComponent from "../DrawerScreen/MaskedView";
import GoogleMapDirection from "../DrawerScreen/GoogleMapDirection";
import SortByName from "../DrawerScreen/SortingByName";
import MultiSortValue from "../DrawerScreen/MultiSortValue";
import Fixer from "../DrawerScreen/fixer";

const Drawer = createDrawerNavigator();

const Route =({navigation})=>{
    return(
        <NavigationContainer>
            <Drawer.Navigator initialRouteName="Chat" screenOptions={{headerStyle:{backgroundColor:"transparent"},headerRight: () => (
                    <TouchableOpacity style={{marginRight:20}} onPress={()=>alert("go to profile")}>
                        <Image source={require("../Assets/icon.png")} style={{height:20,width:20}}/>
                    </TouchableOpacity>
                )}} drawerContent={(props)=> {
                return(
                    <View style={{flex:1}}>
                        <DrawerContentScrollView {...props}>
                            <View style={{justifyContent:"space-between",alignItems:"center",padding:20,marginBottom:20,backgroundColor:"rgba(14,14,14,0.05)",borderBottomWidth:2,borderColor:"red"}}>
                                <Image source={require("../Assets/icon.png")} style={{width:60,height:60,borderRadius:30}}/>
                                <Text style={{fontSize:20,fontWeight:"bold",color:"red"}}>Admin</Text>
                                <Text style={{color:"red"}}>Admin123@gmail.com</Text>
                            </View>
                            <DrawerItemList {...props}/>
                        </DrawerContentScrollView>
                        <TouchableOpacity onPress={()=>{alert("logout Successfull")}} style={{position:"absolute",right:0,left:0,bottom:0,backgroundColor:"rgba(157,154,154,0.32)"}}>
                            <Text style={{backgroundColor:"rgb(162,160,160)",width:"100%",height:40,textAlign:"center",paddingTop:8}}><SimpleLineIcons name={"logout"} size={15} color={"black"}/> LogOut</Text>
                        </TouchableOpacity>
                    </View>
                )
            } }>
                <Drawer.Screen name="Chat" component={Chat} />
                <Drawer.Screen name="CurserStyle" component={CurserStyle} />
                <Drawer.Screen name="CardStyle" component={CardStyle} />
                <Drawer.Screen name="MaskedViewComponent" component={MaskedViewComponent} />
                <Drawer.Screen name="GoogleMapDirection" component={GoogleMapDirection} />
                <Drawer.Screen name="SortByName" component={SortByName} />
                <Drawer.Screen name="MultiSortValue" component={MultiSortValue} />
                <Drawer.Screen name="Fixer" component={Fixer} />

            </Drawer.Navigator>
        </NavigationContainer>
    )
}
export default Route;
