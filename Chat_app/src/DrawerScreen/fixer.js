import React from "react";
import {SafeAreaView,View,Text,TextInput,StyleSheet} from "react-native";

const Fixer =()=>{
    return(
        <SafeAreaView style={{flex:1}}>
           <View style={{flexDirection:"row",flex:1,justifyContent:"center"}}>
               <Text style={{flex:1,textAlign:"center",backgroundColor:"blue",color:"white",height:40,paddingTop:10}}>Name</Text>
               <TextInput
                   style={{backgroundColor:"red",flex:1,height:40}}
                   placeholder={"hello"}
               />
           </View>
        </SafeAreaView>
    )
}
export default Fixer;
