import * as React from "react";
import { View, StyleSheet } from "react-native";
import { RadioButton } from "react-native-paper";
interface Props {
  value: string;
  onChange: (value: string) => void;
  label: string;
  label2: string;
}

export function Radio(prop: Props) {
  return (
    <View style={styles.container}>
      <View style={styles.mainbox}>
        <View style={styles.textContainer}>
          <RadioButton.Group
            onValueChange={(value) => prop.onChange(value)}
            value={prop.value}
          >
            <RadioButton.Item label={prop.label} value="open" color="#FF8642" labelStyle={{fontFamily:'Jua', color:"#FF8642"}}/>
            <View style={styles.line2}></View>
            <RadioButton.Item label={prop.label2} value="close" color="#FF8642" labelStyle={{fontFamily:'Jua', color:"#FF8642"}}/>
          </RadioButton.Group>
        </View> 
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor:"#F0DFC1",
  },
  mainbox: {
    textAlign: "center",
    justifyContent: "space-between",
    margin:10
  },
  textContainer: {
    height: 110,
    borderColor: "#FF8642",
    borderWidth: 2,
    borderRadius: 10,
    backgroundColor: "#fff",
    width: "80%",
    alignSelf: "center",
  },
  line2: {
    height: 2,
    backgroundColor: "#FF8642",
    width: "100%",
  },
});

