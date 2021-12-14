import React, {useEffect} from "react";
import {TouchableOpacity,Text,SafeAreaView,View} from "react-native";
import { useToast,ToastContext } from 'react-native-styled-toast'

const Toast=()=>{
    const { toast } = useToast()
    useEffect(()=>{
        toast({
            duration:0,
            accentColor:"green",
            position:"BOTTOM",
            message: 'My First Toast!',
            toastStyles: {
                bg: 'white',
                // borderRadius: 16
            },
            color: 'black',
            iconColor: 'green',
            iconFamily: 'Entypo',
            iconName: 'info',
            closeButtonStyles: {
                // px: 4,
                bg: 'darkgrey',
                // borderRadius: 16
            },
            closeIconColor: 'white',
            hideAccent: false
        })
    },[])
    return(
        <SafeAreaView style={{flex:1}}>
            <View>

            </View>
        </SafeAreaView>
    )
}
export default Toast
