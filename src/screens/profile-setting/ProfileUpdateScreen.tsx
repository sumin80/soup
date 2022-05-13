import { useNavigation } from "@react-navigation/native";
import axios from "axios";
import React, { useState } from "react";
import { SafeAreaView, Text, StyleSheet, Button, Alert, Image, View, TextInput } from "react-native";
import * as ImagePicker from 'expo-image-picker'
import { useRecoilState } from "recoil";
import { UpdateProfile } from "../../api/member/UpdateProfile";
import requester from "../../config/axios";
import tokenSelector from "../../store/recoil/token";

export default function ProfileUpdateScreen() {
  const navigation = useNavigation()
  const [token, setToken] = useRecoilState(tokenSelector)
  const [profileImage, setProfileImage] = useState("")
  const [bio, setBio] = useState("")

  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    console.log("+++++++++++++++++++", result);

    if (!result.cancelled) {
      setProfileImage(result.uri);
    }
  };

 const updateProfile =  () => {
   UpdateProfile(profileImage, bio, token.accessToken)
   .then(data => Alert.alert("updated profile"))
 }

  return (
    <SafeAreaView style={styles.container}>
      
      <View>
        <Button title="Pick an image from camera roll" onPress={pickImage} />
        {/* {profileImage && <Image source={{ uri: profileImage }} style={{ width: 200, height: 200 }} />} */}
        <TextInput 
          style={{height:40, margin:12, borderWidth:1, padding:10}}
          value={bio}
          placeholder={"소개글을 적으세요"}
          onChangeText={(e)=> setBio(e)}
        />
        <Button onPress={updateProfile} title={"update"}/>
      </View>
      
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    flex: 1,
  },
  title: {
    fontSize: 30,
    color: "#FF8642",
    marginLeft: 20,
    fontFamily: "Jua",
  },
});
