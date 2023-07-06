import React from 'react';
import {View, Text, StyleSheet, Dimensions} from 'react-native';

function EmptyCard(): Jsx.Element {
  const screenWidth = Dimensions.get('window').width;
  const componentWidth = screenWidth * 0.45;
  const marginVertical = screenWidth * 0.01;
  return (
    <View
      style={[
        styles.box,
        {
          width: componentWidth,
          height: componentWidth,
          marginVertical: marginVertical,
        },
      ]}>
      <View style={styles.inner} />
    </View>
  );
}

const styles = StyleSheet.create({
  box: {
    padding: 5,
  },
  inner: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default EmptyCard;
