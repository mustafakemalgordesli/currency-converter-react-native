import React from 'react';
import {View, Text, StyleSheet, Dimensions, Pressable} from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';
import Currency from '../interfaces/Currency';
import MIcon from 'react-native-vector-icons/MaterialIcons';
import {useState} from 'react';

type Props = {
  currency: Currency;
};

function CurrencyCard({currency}: Props): Jsx.Element {
  const screenWidth = Dimensions.get('window').width;
  const componentWidth = screenWidth * 0.4;
  const marginVertical = screenWidth * 0.015;

  const change = Number(currency.Change);
  const bgColor =
    change === 0 ? '#ffc107' : change >= 0 ? '#28a745' : '#dc3545';

  const icon =
    change === 0 ? 'minuscircleo' : change >= 0 ? 'upcircleo' : 'downcircleo';

  const [isFavorite, SetIsFavorite] = useState(false);

  return (
    <View
      style={[
        styles.box,
        {
          width: componentWidth,
          height: componentWidth,
          marginVertical: marginVertical,
          backgroundColor: bgColor,
        },
      ]}>
      <View style={styles.upper}>
        <Text style={styles.headerText}>{currency.Key}</Text>
        <View style={styles.iconContainer}>
          <Icon name={icon} size={30} color="#E8FFEF" />
        </View>
      </View>
      <View style={styles.lower}>
        <View style={styles.lowerLeft}>
          {currency.name != null ? (
            <Text style={styles.nameText}>{currency.name}</Text>
          ) : null}
          <Text style={styles.sellingText}>{currency.Selling}</Text>
          <Text style={styles.changeText}>
            %{currency.Change?.replace('.', ',')}
          </Text>
        </View>
        <View style={styles.lowerIcon}>
          <Pressable
            onPress={() => {
              SetIsFavorite(s => !s);
            }}>
            <View>
              <MIcon
                name={isFavorite ? 'favorite' : 'favorite-border'}
                size={30}
                color="#E8FFEF"
              />
            </View>
          </Pressable>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  box: {
    borderColor: 'black',
    borderWidth: 1,
    borderRadius: 10,
  },
  upper: {
    flex: 1,
    borderRadius: 10,
    marginHorizontal: 10,
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'center',
  },
  lower: {
    flex: 3,
    paddingHorizontal: 10,
    borderTopColor: 'gray',
    borderTopWidth: 1,
    borderRadius: 10,
    borderTopStartRadius: 0,
    borderTopEndRadius: 0,
    flexDirection: 'row',
    alignItems: 'flex-start',
  },
  lowerLeft: {
    flex: 3,
    height: '100%',
    justifyContent: 'space-evenly',
  },
  lowerIcon: {
    flex: 1,
    height: '100%',
    flexDirection: 'row',
    alignItems: 'flex-end',
    justifyContent: 'center',
    paddingBottom: 10,
  },
  headerText: {
    fontSize: 20,
    marginRight: 'auto',
    color: '#E8FFEF',
  },
  iconContainer: {
    // flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
  },
  sellingText: {
    fontSize: 16,
    color: '#E8FFEF',
  },
  changeText: {
    color: '#E8FFEF',
  },
  nameText: {
    color: '#E8FFEF',
  },
});

export default CurrencyCard;
