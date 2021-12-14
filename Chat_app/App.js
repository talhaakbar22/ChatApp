import React from 'react';
import 'react-native-gesture-handler';
import {SafeAreaView} from 'react-native';
import Route from "./src/DrawerRoute/Route";
import { ToastProvider } from 'react-native-styled-toast'

const App = () => {
  return (
    <SafeAreaView style={{flex:1}}>
        <ToastProvider maxToasts={2} offset={16} position="CENTER">
      <Route/>
        </ToastProvider>
    </SafeAreaView>
  );
};
export default App;
