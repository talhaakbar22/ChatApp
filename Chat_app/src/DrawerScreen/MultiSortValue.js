import React, {useEffect, useState} from "react";
import {SafeAreaView,View,Text} from "react-native";

const MultiSortValue = () => {
    var currentUsers = [
        {firstName: "Bob", lastName: "Bobson", age:10},
        {firstName: "Bob", lastName: "Anderson", age:5},
        {firstName: "Amy", lastName: "Jackson", age:20},
        {firstName: "wew", lastName: "ee", age:4},
        {firstName: "wew", lastName: "dd", age:5},
    ];

    const Sorted = currentUsers.sort(function(a, b) {
        var aFirstChar = a.firstName.charAt(0);
        var bFirstChar = b.firstName.charAt(0);
        if (aFirstChar > bFirstChar) {
            return 1;
        } else if (aFirstChar < bFirstChar) {
            return -1;
        } else {
            var aLastChar = a.lastName.charAt(0);
            var bLastChar = b.lastName.charAt(0);
            if (aLastChar > bLastChar) {
                return 1;
            } else if (aLastChar < bLastChar) {
                return -1;
            } else {
                var aage = a.age.charAt(0);
                var bage = b.age.charAt(0);
                if (aage > bage) {
                    return 1;
                } else if (bage < aage) {
                    return -1;
                } else {
                    return 0;
                }
            }
        }
    });

    alert(Sorted)
    return(
        <SafeAreaView style={{flex:1}}>
            <View>
                {Sorted.map((item,index)=>(
                    <View>
                        <Text>{item.firstName}</Text>
                        <Text>{item.lastName}</Text>
                        <Text>{item.age}</Text>
                    </View>
                ))}

            </View>
        </SafeAreaView>
    )
}
export default MultiSortValue;
