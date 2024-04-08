/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, { useEffect, useState } from 'react';
import type {PropsWithChildren} from 'react';
import {
  ActivityIndicator,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import { setupPlayer,addTrack } from '../MusicPlayService';
import MusicPlayer from './screens/MusicPlayer';


function App(): React.JSX.Element {

  const [isPlayerStarted,setIsPlayerStarted]=useState(false)
  
  const setup=async()=>{
    const isSetUp=await setupPlayer()
    if (isSetUp){
      await addTrack()
      setIsPlayerStarted(isSetUp)
    }
    return isSetUp
  }

  useEffect(()=>{
    setup()
  },[])


   if (!isPlayerStarted){
    return(
      <SafeAreaView>
          <ActivityIndicator />
      </SafeAreaView>
    )
   } 
   
   return (
    <View style={styles.container}>
      <StatusBar barStyle={"light-content"} />
      <MusicPlayer />
    </View>
  );
}

const styles = StyleSheet.create({
  container:{
    flex: 1
  }
});

export default App;
