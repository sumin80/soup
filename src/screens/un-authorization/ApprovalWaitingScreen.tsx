import React, { useCallback, useMemo, useState } from 'react';
import {RefreshControl,Text,View} from 'react-native';
import { StackNavigationOptions } from '@react-navigation/stack';

import meApi from '../../api/user/me';
import { useSetRecoilState } from 'recoil';
import User from '../../api/domain/user';
import meSelector from '../../store/recoil/me';

export const ApprovalWaitingScreenOptions: StackNavigationOptions = {};

const ApprovalWaitingScreen: React.VFC = () => {
  const setMe = useSetRecoilState<User>(meSelector);

  const { data, mutate } = meApi();

  const [refreshing, setRefreshing] = useState<boolean>(false);

  const onRefresh = useCallback(async () => {
    setRefreshing(true);
    setMe(await mutate());
    setRefreshing(false);
  }, [mutate]);

  const refreshControl = useMemo(
    () => <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />,
    [refreshing, onRefresh]
  );

  return (
      <View>
          <Text>로딩중</Text>
      </View>
  )};

  export default ApprovalWaitingScreen;