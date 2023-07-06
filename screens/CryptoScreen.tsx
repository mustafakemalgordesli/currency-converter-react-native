import { useEffect } from 'react';
import {View, Text} from 'react-native';

function Crypto() {

    const parameters = new URLSearchParams({
        start: "1", // Başlangıç sırası
        limit: "10", // Çekilecek coin sayısı
        sort: "market_cap", // Piyasa değerine göre sırala
        sort_dir: "desc", // Azalan şekilde sırala
        convert: "USD", // Dönüştürme birimi (USD olarak)
      });

    useEffect(() => {
        fetch(`https://pro-api.coinmarketcap.com/v1/cryptocurrency/listings/latest?${parameters}`,
        {
            Accepts: "application/json",
            method: "GET",
            headers: {
              'X-CMC_PRO_API_KEY': '1f40d1b0-f85c-40ec-a228-a677c32f131c',
            },
          })
          .then(res => res.json())
          .then(data => console.log(data.data[0]))
          .catch(err => console.log(err))
    }, [])


    return (
        <View>
          <Text style={{color: 'black'}}>Crypto</Text>
        </View>
      );
}


export default Crypto;