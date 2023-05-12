import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import 'react-native-gesture-handler';
import Navigation from './src/config/navigation';
import { Provider as PaperProvider } from 'react-native-paper';
import Test from "./src/screen/Test"
export default function App() {
  return (
    <PaperProvider>
        <Navigation />
      {/* <Test /> */}
    </PaperProvider>
  )
}

const styles = StyleSheet.create({})