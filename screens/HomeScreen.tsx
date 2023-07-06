import React, { useEffect, useState, useCallback } from 'react';
import { StyleSheet, View, ScrollView, ActivityIndicator, RefreshControl } from 'react-native';
import Card from '../components/CurrencyCard';
import Currency from '../interfaces/Currency';


function Home() {
  const [currencyArr, SetCurrencyArr] = useState<Currency[]>([]);

  const [isLoading, SetLoading] = useState<boolean>(true);

  const fetchCurrencyData = (finallyCallback) => {
    fetch('https://finans.truncgil.com/v4/today.json')
      .then(res => res.json())
      .then(data => {
        var tempArr = { ...data };
        delete tempArr.Update_Date;
        const arr: Currency[] = Object.keys(tempArr).map(key => ({
          Key: key,
          ...tempArr[key],
        }));

        SetCurrencyArr(arr);
      })
      .catch(err => console.log(err))
      .finally(finallyCallback);
  }

  useEffect(() => {
    fetchCurrencyData(() => {
      SetLoading(false);
    })
  }, []);

  const [refreshing, setRefreshing] = useState(false);

  const onRefresh = useCallback(() => {
    setRefreshing(true);
    fetchCurrencyData(() => {
      setRefreshing(false)
    })
  }, []);

  return (
    <View>
      {
        isLoading ?
          <View style={styles.spinnerContainer}>
            <ActivityIndicator size="large" />
          </View> :
          <ScrollView style={styles.scrollContainer}
            refreshControl={
              <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
            }>
            <View style={styles.container}>
              {currencyArr.map(item => (
                <Card key={item.Key} currency={item} />
              ))}
            </View>
          </ScrollView>
      }
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
    alignItems: 'center',
    justifyContent: 'space-evenly',
    flexDirection: 'row',
    flexWrap: 'wrap',
    backgroundColor: '#fff',
  },
  scrollContainer: {
    width: '100%',
    height: '100%',
    backgroundColor: '#fff',
  },
  spinnerContainer: {
    height: "100%",
    width: "100%",
    justifyContent: 'center',
    alignItems: "center",
  }
});

export default Home;
