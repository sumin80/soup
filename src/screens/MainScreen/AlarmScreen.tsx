import React from 'react';
import { View, Text, SafeAreaView } from 'react-native';

export default function AlarmScreen() {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={{ flex: 1, padding: 16 }}>
        <View
          style={{
            flex: 1,
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <Text
            style={{
              fontSize: 25,
              textAlign: 'center',
              marginBottom: 16,
            }}>
            Alarm Screen
          </Text>
        </View>
      </View>
    </SafeAreaView>
  );
};

