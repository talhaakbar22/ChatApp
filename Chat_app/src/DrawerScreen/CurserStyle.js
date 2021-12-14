import React from "react";
import {Animated, PanResponder, SafeAreaView, Text, View} from "react-native";

const CurserStyle=()=>{
    const position=new Animated.ValueXY();
    const panResponder = PanResponder.create({
        onMoveShouldSetPanResponderCapture:() => true,
        onPanResponderGrant:()=>{
            position.setOffset({
                x:position.x._value,
                y:position.y._value
            });
            position.setValue({ x: 0, y: 0})
        },
        onPanResponderMove:Animated.event([
            null,
            {dx:position.x,dy:position.y}
        ]),
        onPanResponderRelease:()=>{
            position.flattenOffset();
        },
    });
    return(
        <SafeAreaView style={{flex:1}}>
            <View>
                <Animated.View
                    style={[position.getLayout(),{backgroundColor:"blue",height:50,width:50,borderRadius:25}]}
                    {...panResponder.panHandlers}
                />
            </View>
        </SafeAreaView>
    )
}
export default CurserStyle;
