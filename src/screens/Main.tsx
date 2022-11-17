import React, {FC} from 'react';
import {StyleSheet, Text, View} from 'react-native';

export const Main: FC = () => {
  return (
    <View style={styles.container}>
      <Text>Hello World</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
