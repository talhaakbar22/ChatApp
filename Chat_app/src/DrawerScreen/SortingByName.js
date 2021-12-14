import React, {useEffect, useState} from "react";
import { SafeAreaView,View,Text} from "react-native";

const SortByName=()=>{
    const [sorted,setSorted]=useState("");
    const currentUsers = [
        {firstName: "Bob", lastName: "Bobson",age:10},
        {firstName: "Bob", lastName: "Anderson",age:9},
        {firstName: "Bob", lastName: "Anderson",age:20},
        {firstName: "Bob1", lastName: "Anderson",age:19},
        {firstName: "Bob3", lastName: "Anderson1",age:30},
        {firstName: "Bob2", lastName: "Anderson2",age:5},
        {firstName: "Amy", lastName: "Jackson",age:18}
    ];
    
    return(
        <SafeAreaView style={{flex:1}}>
            <View>
                {
                    currentUsers.sort( (a,b)=>
                        a.firstName.localeCompare(b.firstName)).map((item,index)=>
                        (
                            <Text>{item.firstName}</Text>
                        ))
                }
                {currentUsers.sort((a,b)=>
                a.age-b.age).map((item,index)=>(<Text>{item.age}</Text>))
                }
            </View>
        </SafeAreaView>
    )
}
export default SortByName
