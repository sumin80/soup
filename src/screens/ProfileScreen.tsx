import { useNavigation } from "@react-navigation/native";
import React, { useEffect, useState } from "react";
import { View, Text, ScrollView, StyleSheet, Image } from "react-native";
import { TouchableOpacity } from "react-native";
import { useRecoilState } from "recoil";
import { userInfo } from "../api/auth/kakao/user";
import { getMe } from "../api/member/GetMe";
import { UpdateProfile } from "../api/member/UpdateProfile";
import {
  latestOpenAtom,
  participateOpenAtom,
  profileOpenAtom,
} from "../store/recoil/ProfileAlarm";
import {
  conferenceAllowAtom,
  followerAllowAtom,
  followerNewAllowAtom,
  noticeAllowAtom,
  pushAllowAtom,
  scrapAllowAtom,
} from "../store/recoil/PushAlarm";
import tokenSelector, { tokenAtom } from "../store/recoil/token";
import TokenRepository from "../store/repository/TokenRepository";

export function ProfileScreen() {
  const navigation = useNavigation();
  const [value, setValue] = useRecoilState(profileOpenAtom);
  const [value2, setValue2] = useRecoilState(participateOpenAtom);
  const [value3, setValue3] = useRecoilState(latestOpenAtom);
  const [value4, setValue4] = useRecoilState(pushAllowAtom);
  const [value5, setValue5] = useRecoilState(noticeAllowAtom);
  const [value6, setValue6] = useRecoilState(conferenceAllowAtom);
  const [value7, setValue7] = useRecoilState(followerAllowAtom);
  const [value8, setValue8] = useRecoilState(followerNewAllowAtom);
  const [value9, setValue9] = useRecoilState(scrapAllowAtom);

  const [token, setToken] = useRecoilState(tokenSelector);
  const [user, setUser] = useState<any>();
  useEffect(function () {
    getMe(token.accessToken).then(setUser);
  }, []);

  if (user == null) {
    return null;
  }

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>내 정보</Text>
      <View style={styles.textContainer2}>
        <View style={styles.boxSize}>
          <View style={styles.nameStyle}>
            <View style={styles.box}>
              <Text style={styles.profiletextStyle}>{user.name}</Text>
              <Text style={styles.bioText}>{user.sex}</Text>
              <Text style={styles.bioText}>{user.bio}</Text>
            </View>
            <View style={styles.imageBox}>
              <Image
                 source={user.profileImage}
                style={styles.profileImage}
              />
            </View>
          </View>
        </View>
      </View>
      <View style={styles.textContainer}>
        <TouchableOpacity onPress={() => navigation.navigate("ProfileUpdate")}>
          <View style={styles.nameStyle}>
            <Text style={styles.textStyle}>프로필 수정</Text>
            <Image
              style={styles.image}
              source={require("../../assets/go_icon.png")}
              resizeMode={"contain"}
            />
          </View>
        </TouchableOpacity>
      </View>
      <View style={styles.line}></View>
      <View style={styles.textContainer}>
        <TouchableOpacity>
          <View style={styles.nameStyle}>
            <Text style={styles.textStyle}>로그인 정보</Text>
            <Text style={styles.opentext2}>ID_{user.id.substr(0, 5)}...</Text>
            <Image
              style={styles.image}
              source={require("../../assets/go_icon.png")}
              resizeMode={"contain"}
            />
          </View>
        </TouchableOpacity>
      </View>
      <View style={styles.textContainer4}>
        <TouchableOpacity onPress={() => navigation.navigate("ProfileSetting")}>
          <View style={styles.nameStyle}>
            <Text style={styles.textStyle}>프로필 공개</Text>
            <Text style={styles.opentext2}>
              {value === "open" ? "공개" : "비공개"}
            </Text>
            <Image
              style={styles.image}
              source={require("../../assets/go_icon.png")}
              resizeMode={"contain"}
            />
          </View>
        </TouchableOpacity>
        <View style={styles.line2}></View>
        <TouchableOpacity
          onPress={() => navigation.navigate("ParticipateSetting")}
        >
          <View style={styles.nameStyle}>
            <Text style={styles.textStyle2}>ㄴ참여중인 스프 공개</Text>

            <Text style={styles.opentext}>
              {value2 === "open" ? "공개" : "비공개"}
            </Text>
            <Image
              style={styles.image}
              source={require("../../assets/go_icon.png")}
              resizeMode={"contain"}
            />
          </View>
        </TouchableOpacity>
        <View style={styles.line2}></View>
        <TouchableOpacity onPress={() => navigation.navigate("LatestSetting")}>
          <View style={styles.nameStyle}>
            <Text style={styles.textStyle2}>ㄴ최신 작성한 스프 공개</Text>
            <Text style={styles.opentext}>
              {value3 === "open" ? "공개" : "비공개"}
            </Text>
            <Image
              style={styles.image}
              source={require("../../assets/go_icon.png")}
              resizeMode={"contain"}
            />
          </View>
        </TouchableOpacity>
      </View>
      <View style={styles.textContainer3}>
        <TouchableOpacity onPress={() => navigation.navigate("PushSetting")}>
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <Text style={styles.textStyle}>푸시 알림</Text>
            <Text style={styles.opentext2}>
              {value4 === "open" ? "활성화" : "비활성화"}
            </Text>
            <Image
              style={styles.image}
              source={require("../../assets/go_icon.png")}
              resizeMode={"contain"}
            />
          </View>
        </TouchableOpacity>
        <View style={styles.line2}></View>
        <TouchableOpacity onPress={() => navigation.navigate("NoticeSetting")}>
          <View style={styles.nameStyle}>
            <Text style={styles.textStyle2}>ㄴ공지알림</Text>
            <Text style={styles.opentext}>
              {value5 === "open" ? "활성화" : "비활성화"}
            </Text>
            <Image
              style={styles.image}
              source={require("../../assets/go_icon.png")}
              resizeMode={"contain"}
            />
          </View>
        </TouchableOpacity>
        <View style={styles.line2}></View>
        <TouchableOpacity
          onPress={() => navigation.navigate("ConferenceSetting")}
        >
          <View style={styles.nameStyle}>
            <Text style={styles.textStyle2}>ㄴ화상 회의 링크 알림</Text>
            <Text style={styles.opentext}>
              {value6 === "open" ? "활성화" : "비활성화"}
            </Text>
            <Image
              style={styles.image}
              source={require("../../assets/go_icon.png")}
              resizeMode={"contain"}
            />
          </View>
        </TouchableOpacity>
        <View style={styles.line2}></View>
        <TouchableOpacity onPress={() => navigation.navigate("FollwerSetting")}>
          <View style={styles.nameStyle}>
            <Text style={styles.textStyle2}>ㄴ팔로워의 새 게시글 알림</Text>
            <Text style={styles.opentext}>
              {value7 === "open" ? "활성화" : "비활성화"}
            </Text>
            <Image
              style={styles.image}
              source={require("../../assets/go_icon.png")}
              resizeMode={"contain"}
            />
          </View>
        </TouchableOpacity>
        <View style={styles.line2}></View>
        <TouchableOpacity
          onPress={() => navigation.navigate("FollwerNewSetting")}
        >
          <View style={styles.nameStyle}>
            <Text style={styles.textStyle2}>ㄴ팔로워의 새 스프 참여 알림</Text>
            <Text style={styles.opentext}>
              {value8 === "open" ? "활성화" : "비활성화"}
            </Text>
            <Image
              style={styles.image}
              source={require("../../assets/go_icon.png")}
              resizeMode={"contain"}
            />
          </View>
        </TouchableOpacity>
        <View style={styles.line2}></View>
        <TouchableOpacity onPress={() => navigation.navigate("ScrapSetting")}>
          <View style={styles.nameStyle}>
            <Text style={styles.textStyle2}>
              ㄴ스크랩한 게시글의 새 댓글 알림
            </Text>
            <Text style={styles.opentext}>
              {value9 === "open" ? "활성화" : "비활성화"}
            </Text>
            <Image
              style={styles.image}
              source={require("../../assets/go_icon.png")}
              resizeMode={"contain"}
            />
          </View>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#F0DFC1",
  },
  title: {
    fontSize: 30,
    color: "#FF8642",
    marginTop: 50,
    marginLeft: 20,
    fontFamily: "Jua",
  },
  image: {
    flexDirection: "row",
    alignItems: "center",
    transform: [{ scale: 0.4 }],
  },
  box: {
    flex: 1,
    margin: 10,
  },
  boxSize: {
    height: 150,
    flexDirection: "row",
    alignItems: "center",
    marginLeft: 10,
  },
  nameStyle: {
    flexDirection: "row",
    alignItems: "center",
  },
  textContainer: {
    height: 50,
    borderColor: "#FF8642",
    borderWidth: 2,
    borderRadius: 10,
    margin: 10,
    backgroundColor: "#fff",
    width: "90%",
    alignSelf: "center",
  },
  textContainer2: {
    height: 220,
    borderColor: "#FF8642",
    borderWidth: 2,
    borderRadius: 10,
    margin: 10,
    backgroundColor: "#fff",
    width: "90%",
    alignSelf: "center",
  },
  textContainer3: {
    height: 330,
    borderColor: "#FF8642",
    borderWidth: 2,
    borderRadius: 10,
    margin: 10,
    backgroundColor: "#fff",
    width: "90%",
    alignSelf: "center",
  },
  textContainer4: {
    height: 160,
    borderColor: "#FF8642",
    borderWidth: 2,
    borderRadius: 10,
    margin: 10,
    backgroundColor: "#fff",
    width: "90%",
    alignSelf: "center",
  },
  imageBox: {
    height: 170,
    width: 130,
    borderWidth: 2,
    borderColor: "#FF8642",
    marginTop: 60,
    marginRight: 15,
    borderRadius: 10,
    backgroundColor: "#fff",
    overflow: "hidden",
  },
  profileImage: {
    width: "100%",
    height: "100%",
    resizeMode: "cover",
  },
  profiletextStyle: {
    fontFamily: "Jua",
    fontSize: 35,
    marginBottom: 10,
    marginLeft: 15,
  },
  bioText: {
    color: "#888888",
    fontSize: 15,
    marginLeft: 15,
    fontFamily: "Jua",
    padding: 3,
  },
  opentext: {
    fontSize: 15,
    color: "#888888",
    fontFamily: "Jua",
  },
  opentext2: {
    fontSize: 20,
    color: "#888888",
    fontFamily: "Jua",
  },
  textStyle: {
    textAlign: "left",
    fontSize: 20,
    fontFamily: "Jua",
    margin: 10,
    flex: 1,
  },
  textStyle2: {
    textAlign: "left",
    fontSize: 15,
    margin: 10,
    flex: 1,
    fontFamily: "Jua",
  },
  line: {
    height: 2,
    backgroundColor: "#FF8642",
    width: "85%",
    margin: 10,
    alignSelf: "center",
  },
  line2: {
    height: 1,
    backgroundColor: "#888888",
    width: "98%",
    margin: 5,
  },
});
