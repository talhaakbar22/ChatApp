import React, {useEffect, useState,useRef} from 'react';
import {Button, ScrollView, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import * as Animatable from 'react-native-animatable';
import Toast from "../Toast";
import {useToast} from "react-native-styled-toast";
const types = ['bounceIn', 'bounceInDown', 'bounceInUp', 'bounceInLeft', 'bounceInRight', 'fadeIn', 'fadeInDown', 'fadeInDownBig', 'fadeInUp', 'fadeInUpBig', 'fadeInLeft', 'fadeInLeftBig', 'fadeInRight', 'fadeInRightBig', 'lightSpeedIn', 'slideInDown', 'slideInUp', 'slideInLeft', 'slideInRight', 'zoomIn', 'zoomInDown', 'zoomInUp', 'zoomInLeft', 'zoomInRight']
const CardStyle=()=> {
    const { toast } = useToast()
    const [animation, setAnimation] = useState(false)
    useEffect(()=>{
        setAnimation({ visible: false, type:'bounceIn' })
        setTimeout(() => {
            setAnimation({ visible: true, type:"bounceInUp" })
        }, 250)
    },[])

    const prop = animation.visible ? { animation: animation.type } : {}
    return (
        <View style={{flex: 1, paddingHorizontal: 20}}>
            <ScrollView contentContainerStyle={{flexGrow:1}}>
            {/*{types.map((type => (*/}
                    <Animatable.View
                        style={{height: 50, marginVertical: 5, backgroundColor: 'red', alignItems: 'center', justifyContent: 'center'}}
                        {...prop}>
                        <Text style={{color: '#fff',fontSize: 17}}>{animation.type}</Text>
                    </Animatable.View>
            {/*)))}*/}
            </ScrollView>
            <TouchableOpacity onPress={()=>{
                toast({accentColor:"green", message: 'My First Toast!', color: 'black', iconColor: 'green', iconFamily: 'Entypo', iconName: 'info',
                    toastStyles: {bg: 'white', /*/ borderRadius: 16/*/ },
                    closeButtonStyles: { bg: 'darkgrey', /*/ px: 4, borderRadius: 16 /*/ },
                    closeIconColor: 'white',
                    hideAccent: false
                })
            }}>
            <Text>ddddd</Text>
            </TouchableOpacity>
        </View>
    )
}
export default CardStyle;
