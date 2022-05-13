import React from "react";
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  Image,
  SafeAreaView,
  TouchableOpacity,
} from "react-native";
import { range } from "lodash";

export default function HomeScreen() {
  const data = [
    {
      name: "스터디2",
      imageUrl:
        "https://ldb-phinf.pstatic.net/20210902_261/16305926963398FT3D_JPEG/XubITIYMHCA3PDmt2eXhx7cr.jpg?type=f804_408_60_sharpen",
      id: "1",
    },
    {
      name: "스프3",
      imageUrl:
        "http://www.outdoornews.co.kr/news/photo/201905/31058_85370_2048.jpg",
      id: "2",
    },
    {
      name: "프로젝트04",
      imageUrl: "https://t1.daumcdn.net/cfile/tistory/998AD7365D3E8BDF33",
      id: "3",
    },
    {
      name: "프로젝트02",
      imageUrl:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcShyyvNKnEtV3RVLNPj56ndXVK4Rfguk5FPRA&usqp=CAU",
      id: "4",
    },
  ];
  const data2 = [
    {
      title: "스프 제목 01",
      imageUrl:
        "https://newsroom-prd-data.s3.ap-northeast-2.amazonaws.com/wp-content/uploads/2017/08/4%EC%B0%A8%EC%82%B0%EC%97%85%ED%98%81%EB%AA%85_%EC%9D%BC%EC%9E%90%EB%A6%AC_%ED%94%84%EB%A1%9C%EC%A0%9D%ED%8A%B8%EA%B8%B0%EC%97%85_1.jpg",
      id: "1",
      desc: "참여하러 오세요",
      number: "3",
    },
    {
      title: "스프 제목 02",
      imageUrl:
        "http://www.outdoornews.co.kr/news/photo/201905/31058_85370_2048.jpg",
      id: "2",
      desc: "Welcome",
      number: "6",
    },
    {
      title: "스프 제목 03",
      imageUrl:
        "https://www.ciokorea.com/sites/default/files/image/imce/u132754/project_management-100536264-primary_idge.jpg",
      id: "3",
      desc: "모두모두 들어오세요",
      number: "10",
    },
    {
      title: "스프 제목 04",
      imageUrl:
        "https://www.ebssw.kr/images/egovframework/com/ebs/none_img4.png",
      id: "4",
      desc: "재미있는 프로젝트 입니다. 참여자 구합니다.",
      number: "4",
    },
  ];
  return (
    <ScrollView style={styles.container}>
      <View style={styles.bookmark}>
        <Text style={styles.title}>북마크한 내 스프</Text>
        <View style={styles.soup}>
          {range(0, 3).map((idx) => {
            if (data[idx] == null) {
              return (
                <TouchableOpacity key={idx} style={styles.contain}>
                  <View style={styles.img}>
                    <Image
                      source={require("../../assets/soup-bookmark.png")}
                      style={styles.image2}
                    />
                  </View>
                </TouchableOpacity>
              );
            }
            return (
              <View key={idx} style={styles.contain}>
                <View style={styles.img}>
                  <Image
                    source={require("../../assets/soup-book.png")}
                    style={styles.image}
                  />
                  <Image
                    source={{ uri: data[idx].imageUrl }}
                    style={styles.roundImage}
                  />
                </View>
                <Text style={styles.bookmarkName}>{data[idx].name}</Text>
              </View>
            );
          })}
        </View>
        <View style={styles.soup}>
          {range(3, 6).map((idx) => {
            if (data[idx] == null) {
              return (
                <TouchableOpacity key={idx} style={styles.contain}>
                  <View style={styles.img}>
                    <Image
                      key={idx}
                      source={require("../../assets/soup-bookmark.png")}
                      style={styles.image2}
                    />
                  </View>
                </TouchableOpacity>
              );
            }
            return (
              <View key={idx} style={styles.contain}>
                <View style={styles.img}>
                  <Image
                    source={require("../../assets/soup-book.png")}
                    style={styles.image}
                  />
                  <Image
                    source={{ uri: data[idx].imageUrl }}
                    style={styles.roundImage}
                  />
                </View>
                <Text style={styles.bookmarkName}>{data[idx].name}</Text>
              </View>
            );
          })}
        </View>
        <View style={styles.line}></View>
      </View>
      <SafeAreaView style={styles.container}>
        <Text style={styles.title}>인기스프</Text>
        <View style={styles.line2}></View>
        {range(0, 4).map((idx) => {
          return (
            <View key={idx}>
              <View style={styles.card}>
                <View style={styles.cardText}>
                  <Text style={styles.cardTitle}>{data2[idx].title}</Text>
                  <Text style={styles.cardDesc} numberOfLines={1}>
                    {data2[idx].desc}
                  </Text>
                  <Text style={styles.cardNumber}>
                    {data2[idx].number}명이 참여중
                  </Text>
                </View>
                <Image
                  style={styles.cardImage}
                  source={{ uri: data2[idx].imageUrl }}
                />
              </View>
            </View>
          );
        })}
      </SafeAreaView>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    flex: 1,
  },
  bookmark: {
    flex: 1,
  },
  image: {
    margin: 10,
    width: 110,
    height: 90,
  },
  image2: {
    margin: 10,
    width: 100,
    height: 100,
  },
  bookmarkName: {
    fontFamily: "Jua",
  },
  contain: {
    alignItems: "center",
    flex: 1,
  },
  img: {
    position: "relative",
    alignItems: "center",
    justifyContent: "center",
  },
  line: {
    height: 2,
    backgroundColor: "#F0DFC1",
    width: "80%",
    margin: 10,
    alignSelf: "center",
  },
  line2: {
    height: 2,
    backgroundColor: "#F0DFC1",
    width: "95%",
    marginTop: 10,
    alignSelf: "center",
  },
  roundImage: {
    width: 82,
    height: 82,
    borderRadius: 150,
    position: "absolute",
  },
  soup: {
    margin: 10,
    flexDirection: "row",
    alignSelf: "center",
  },
  title: {
    fontSize: 30,
    color: "#FF8642",
    marginTop: 40,
    marginLeft: 20,
    fontFamily: "Jua",
  },

  card: {
    flex: 1,
    flexDirection: "row",
    margin: 10,
    borderBottomWidth: 2,
    borderBottomColor: "#F0DFC1",
    paddingBottom: 10,
  },
  cardImage: {
    flex: 1,
    width: 40,
    height: 90,
    marginRight: 10,
  },
  cardText: {
    flex: 2,
    flexDirection: "column",
    marginLeft: 10,
  },
  cardTitle: {
    fontSize: 20,
    fontWeight: "700",
  },
  cardDesc: {
    fontSize: 15,
  },
  cardNumber: {
    fontSize: 10,
    color: "#A6A6A6",
    margin: 10,
    alignSelf: "flex-end",
  },
});
