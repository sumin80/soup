import React, { useCallback } from 'react';
import { Image, StyleSheet, Text, View, TouchableOpacity, SafeAreaView } from 'react-native';
import { StackNavigationOptions } from '@react-navigation/stack';
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import KakaoLogin from './login';
import axios from "axios";
import { getHostUrl, post } from '../server';


const navigation = useNavigation()

const kakao = ({navigation}: any) => {
  return (
    <view style={styles.container}>
      <Text style={styles.title}>Soup</Text>
      <TouchableOpacity onPress={() => navigation.navigate("Kakaologin")}>
          <Image style={styles.image} source={require('../assets/certi_kakao_login.png')} resizeMode={'contain'} />
      </TouchableOpacity>)
    </view>
  )}

const styles = StyleSheet.create({
    container: {
      flex : 1,
      backgroundColor: '#F0DFC1',
    },
    image: {
      width: '70%',
      alignItems: 'center',
      justifyContent: 'center',
      alignSelf:"center",
      marginTop: '80%'
  },

   
    title: {
      fontWeight: '600',
      fontSize: 48,
      color: '#FF8642'
    },
});

export default kakao;