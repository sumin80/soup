import React, { useCallback, useEffect, useState } from 'react';
import {BackHandler, SafeAreaView,Image,Platform,ScrollView,
  StatusBar,StyleSheet,Text,View, TextInput} from 'react-native';
import { StackNavigationOptions } from '@react-navigation/stack';
import { useSetRecoilState } from 'recoil';
import CustomButton from '../../component/CustomButton';
import {
  NavigationProp,
  RouteProp,
  useFocusEffect,
  useNavigation,
  useRoute,
} from '@react-navigation/native';
import { UnAuthorizationStackParamList } from '../../stack/UnAuthorizationStackNavigator';
import { UnAuthorizationNavigations } from '../../constant/navigation';
import signUpApi from '../../api/auth/signup';
import { Token } from '../../store/repository/TokenRepository';
import tokenSelector from '../../store/recoil/token';

export const SignUpScreenOptions: StackNavigationOptions = {
  gestureEnabled: false,
};

type routeProp = RouteProp<
  UnAuthorizationStackParamList,
  UnAuthorizationNavigations.SignUp
>;

type navigationProp = NavigationProp<
  UnAuthorizationStackParamList,
  UnAuthorizationNavigations.SignUp
>;

const SignUpScreen: React.VFC = () => {
  const {
    params: {name, clientId, sex, profileImageUrl },
  } = useRoute<routeProp>();
  const navigation = useNavigation<navigationProp>();
  const setToken = useSetRecoilState<Token>(tokenSelector);

  const [name, setName] = useState<string>('');
  const [clientId, setId] = useState<string>();
  const [image, setImage] = useState<string>();
  const [sex, setsex] = useState<string>();
  const [buttonStatus, setButtonStatus] = useState<boolean>(false);

  useFocusEffect(
    useCallback(() => {
      const hardwareBackPress = () => {
        navigation.navigate(UnAuthorizationNavigations.Home);
        return true;
      };

      BackHandler.addEventListener('hardwareBackPress', hardwareBackPress);
      return () => {
        BackHandler.removeEventListener('hardwareBackPress', hardwareBackPress);
      };
    }, [])
  );

  useEffect(() => {
    setButtonStatus(!!name && !!clientId && !!sex && !!image && !!Type);
  }, [name, clientId, sex, image]);

  const handleSignUp = useCallback(async () => {
    try {
      const { token } = await signUpApi({
        name,
        clientId,
        Type,
        sex,
        profileImageUrl,
      });

      setToken(token);
    } catch (err) {
      console.group(`[SignUp Error]`);
      console.log(err);
      console.groupEnd();
    }
  }, [name, clientId, sex, Type, profileImageUrl]);

  return (
    <SafeAreaView>
      <View style={styles.container}>
        <ScrollView style={styles.scrollContainer}>
          <View style={styles.titleContainer}>
            <Text style={styles.title}>회원가입</Text>
          </View>
          <TextInput
            title={'이름'}
            value={name}
            setValue={setName}
            style={styles.textInputContainer}
            props={{ returnKeyType: 'next' }}
          />
          <TextInput
            title={'clientId'}
            value={clientId}
            setValue={setId}
            style={styles.textInputContainer}
            editable={!clientId}
          />
          <TextInput
            title={'성별'}
            value={sex}
            setValue={setName}
            style={styles.textInputContainer}
            props={{ returnKeyType: 'next' }}
          />
          <Image style={styles.image} source={{ uri: image, height: 180 }} />
        </ScrollView>
        <CustomButton
          text={'가입하기'}
          onPress={handleSignUp}
          buttonStyle={styles.signUpButtonContainer}
          textStyle={styles.signUpButtonText}
          hideOnKeyboard={true}
          disabled={!buttonStatus}
        />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 12,
    alignItems: 'center',
  },
  scrollContainer: {
    width: '100%',
  },
  titleContainer: {
    marginVertical: 30,
  },
  title: {
    fontWeight: '400',
    fontSize: 36,
    lineHeight: 42,
  },
  textInputContainer: {
    marginBottom: 28,
  },
  image: {
    borderRadius: 12,
    marginTop: 24,
  },
  signUpButtonContainer: {
    position: 'absolute',
    bottom: Platform.select({
      android: StatusBar.currentHeight,
      ios: 0,
    }),
  },
  signUpButtonText: {
    color:'yellow',
  },
});

export default SignUpScreen;