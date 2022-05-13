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
  //const [vaule, setValue] = useRecoilState(OpenRadioAtom);
  //const [value, setValue] = React.useState(false);

  console.log(prop.value);
  return (
    <View style={styles.container}>
      <View style={styles.mainbox}>
        <View style={styles.textContainer}>
          <RadioButton.Group
            onValueChange={(value) => prop.onChange(value)}
            value={prop.value}
          >
            <RadioButton.Item label={prop.label} value="open" color="black" />
            <View style={styles.line2}></View>
            <RadioButton.Item label={prop.label2} value="close" color="black" />
          </RadioButton.Group>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {},
  mainbox: {
    textAlign: "center",
    justifyContent: "space-between",
    margin: 50,
  },
  textContainer: {
    height: 120,
    borderColor: "#888888",
    borderWidth: 2,
    borderRadius: 10,
    margin: 10,
    backgroundColor: "#fff",
    width: "90%",
    alignSelf: "center",
  },
  line2: {
    height: 1,
    backgroundColor: "#888888",
    width: "95%",
    margin: 5,
  },
});
export default Radio;
