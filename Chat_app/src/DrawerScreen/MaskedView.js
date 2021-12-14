import React from "react";
import {SafeAreaView, Text, View} from "react-native";
import MaskedView from '@react-native-masked-view/masked-view';

const MaskedViewComponent =()=>{
    return(
        <SafeAreaView style={{flex:1}}>
            <MaskedView
                style={{ flex: 1, flexDirection: 'row', height: '100%' }}
                maskElement={
                    <View
                        style={{
                            // Transparent background because mask is based off alpha channel.
                            backgroundColor: 'transparent',
                            flex: 1,
                            justifyContent: 'center',
                            alignItems: 'center',
                        }}
                    >
                        <Text
                            style={{
                                fontSize: 30,
                                color: 'black',
                                fontWeight: 'bold',
                            }}
                        >
                            Bdxms Madhreiuhsk
                        </Text>
                    </View>
                }
            >
                {/* Shows behind the mask, you can put anything here, such as an image */}
                <View style={{ flex: 1, height: '100%', backgroundColor: '#ce0f2e' }} />
                <View style={{ flex: 1, height: '100%', backgroundColor: '#ad858c' }} />
                <View style={{ flex: 1, height: '100%', backgroundColor: '#93636c' }} />
                <View style={{ flex: 1, height: '100%', backgroundColor: '#e31f3c' }} />
                <View style={{ flex: 1, height: '100%', backgroundColor: '#d24c74' }} />
                <View style={{ flex: 1, height: '100%', backgroundColor: '#bb2085' }} />
            </MaskedView>
        </SafeAreaView>
    )
}
export default MaskedViewComponent;
