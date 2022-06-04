import {useNavigation } from "@react-navigation/native";
import React, { useEffect, useState } from "react";
import { ScrollView, Text, StyleSheet, TouchableOpacity, Image, View, TextInput } from "react-native";
import * as ImagePicker from 'expo-image-picker'
import { useRecoilState } from "recoil";
import { UpdateProfile } from "../../api/member/UpdateProfile";
import tokenSelector from "../../store/recoil/token";
import { getMe } from "../../api/member/GetMe";

export default function ProfileUpdateScreen() {
  const navigation = useNavigation()
  const [token, setToken] = useRecoilState(tokenSelector)
  const [profileImage, setProfileImage] = useState("")
  const [bio, setBio] = useState("")
  
  useEffect(() => {
    getMe(token.accessToken).then(res => {
      setProfileImage(res.profileImage)
      setBio(res.bio)
    });
  }, []);

 const updateProfile =  () => {
   UpdateProfile(profileImage, bio, token.accessToken)
   .then(() => { navigation.goBack()})
 }

 const pickerImage = async () => {
   const result = await ImagePicker.launchImageLibraryAsync({
     mediaTypes: ImagePicker.MediaTypeOptions.All,
     allowsEditing: true,
     aspect:[4,3],
     quality: 1
    })

    if(!result.cancelled){
      setProfileImage(result.uri)
    }
 }

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>프로필 이미지</Text>
      <View style={styles.textContainer}>
        <View style={styles.nameStyle}>
          <View style={styles.box}>
            <Text style={styles.bioText}>추천 해상도는 640 x 480</Text>
            <Text style={styles.bioText}>최대 용량: 10MB</Text>
            <Text></Text>
            <Text style={styles.bioText}>해상도와 용량이 과도한 이미지일 경우 업로드가 되지 않을 수 있습니다</Text>
          <TouchableOpacity style={styles.Button2} onPress={pickerImage}>
           <Text style={styles.ButtonText}>이미지 변경</Text>
          </TouchableOpacity>
          </View>
            <View style={styles.imageBox}>
              <Image source={{ uri: profileImage }} style={styles.profileImage} />
            </View>
          </View>
        </View>
      <View style={styles.line}></View>
      <Text style={styles.title}>소개글</Text>
        <TextInput 
          style={styles.textInput}
          value={bio}
          placeholder="자기소개를 적습니다. 간단하게 자기소개나 관심있는 카테고리 등등을 적을 수 있는 공간입니다. "
          multiline
          maxLength={100}
          numberOfLines={4}
          onChangeText={setBio}
        />
         <TouchableOpacity style={styles.Button} onPress={updateProfile}>
           <Text style={styles.ButtonText}>저장</Text>
          </TouchableOpacity>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#F0DFC1",
    flex: 1,
  },
  title: {
    fontSize: 30,
    color: "#FF8642",
    marginLeft: 20,
    marginTop: 10,
    fontFamily: "Jua",
  },
  boxSize: {
    height: 150,
    flexDirection: "row",
    alignItems: "center",
    marginLeft: 10,
    backgroundColor:"red"
  },
  textInput:{
    height:150, 
    margin:20, 
    borderWidth:2, 
    padding:20,
    borderRadius:10,
    borderColor: "#FF8642",
    fontFamily:"Jua",
    backgroundColor:"#fff"
  },
  imageBox: {
    height: 170,
    width: 130,
    borderWidth: 2,
    borderColor: "#FF8642",
    marginRight: 15,
    borderRadius: 10,
    backgroundColor: "#fff",
    overflow: "hidden",
  },
  box: {
    flex: 1,
    margin: 10,
    flexDirection:"column"
  },
  profileImage: {
    width: "100%",
    height: "100%",
    resizeMode: "cover",
  },
  bioText: {
    color: "#888888",
    fontSize: 15,
    marginLeft: 10,
    marginTop:10,
    fontFamily: "Jua",
  },
  textContainer: {
    height: 200,
    borderColor: "#FF8642",
    borderWidth: 2,
    borderRadius: 10,
    margin: 10,
    backgroundColor: "#fff",
    width: "90%",
    alignSelf: "center",
  },
  line: {
    height: 2,
    backgroundColor: "#FF8642",
    width: "85%",
    margin: 10,
    alignSelf: "center",
  },
  Button: {
    width:70,
    height:30,
    backgroundColor:"#fff",
    borderRadius:10,
    borderWidth:1,
    borderColor:"#FF8642",
    alignItems:"center",
    alignSelf:"center",
    padding:5, 
  },
  Button2: {
    width:80,
    height:30,
    borderRadius:10,
    borderWidth:1,
    borderColor: "#FF8642",
    padding:5,
    backgroundColor:"#fff",
    marginLeft: 95,
    marginTop:10
  },
  ButtonText: {
    color:"#FF8642",
    fontSize:15,
    textAlign:"center",
    fontFamily:"Jua",
  },
  nameStyle: {
    flexDirection: "row",
    alignItems: "center",
  },
});
