import React, {useEffect, useState} from "react";
import {SafeAreaView, ScrollView, Text, TextInput, View} from "react-native";
import io from "socket.io-client";

const Chat =()=>{

    const [text,setText]=useState("");
    const [socket,setSocket]=useState("");
    const [chatMessages,setChatMessages]=useState([]);

    useEffect(()=>{
        let _socket=io("http://192.168.18.30:3000")
        // _socket.on("chat message",msg =>{
        // setChatMessages([...chatMessages,msg])
        // })
        setSocket(_socket)
    },[]);

    const submitChatMSg=()=>{
        socket.emit("chat message",text)
        socket.on("chat message",msg =>{
            setChatMessages([...chatMessages,msg])
        })
        setText("")
    }
    return(
        <SafeAreaView style={{flex:1}}>
            <View style={{backgroundColor:"rgba(93,87,87,0.23)",flex:1}}>
            <ScrollView style={{flexGrow:1}}>
                {chatMessages.map((chatMessage,index)=><Text style={{backgroundColor:"rgba(255,255,255,0.73)",padding:4,borderRadius:8}} key={index}>{chatMessage}</Text>)}
            </ScrollView>
            <TextInput
                placeholder={"text"}
                autoCorrect={false}
                value={text}
                onSubmitEditing={()=>submitChatMSg({text})}
                style={{borderWidth:2,borderColor:"black",height:40}}
                onChangeText={text => setText(text)}/>
            </View>
        </SafeAreaView>
    )
}
export default Chat;
