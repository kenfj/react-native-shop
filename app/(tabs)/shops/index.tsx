import { ShopCard } from 'components/cards/ShopCard';
import { Container, P } from 'components/tamagui/styled';
import { Link } from 'expo-router';
import { findAll } from 'lib/api';
import { Shop } from 'models/Shop';
import { useEffect, useState } from 'react';
import { FlatList, StyleSheet } from 'react-native';
import MapView, { Marker } from 'react-native-maps';
import { Theme } from 'tamagui';

const initialRegion = {
  latitude: 35.681236,
  longitude: 139.767125,
  latitudeDelta: 0.02, //小さくなるほどズーム
  longitudeDelta: 0.02,
};

const markerCoordinate = {
  latitude: 35.681236,
  longitude: 139.767125,
};

const marker = (
  <Marker
    coordinate={markerCoordinate}
    title="東京駅"
    description="JRの駅です。"
    onPress={() => alert('click')}
  />
);

// Map not working in web
// https://github.com/react-native-maps/react-native-maps/discussions/4741

const ShopsPage = () => {
  const [shops, setShops] = useState<Shop[]>([]);

  useEffect(() => {
    (async () => {
      const shops = await findAll<Shop>('shops');
      setShops(shops);
    })();
  }, []);

  return (
    <Theme name="light">
      <Container>
        <MapView style={styles.map} initialRegion={initialRegion}>
          {marker}
        </MapView>

        <FlatList
          data={shops}
          renderItem={({ item }) => (
            <Link href={`/shops/${item.id}`} style={{ height: 100 }}>
              <ShopCard shop={item} />
            </Link>
          )}
          keyExtractor={(item) => `${item.id}`}
          style={{ width: '100%', display: 'flex' }}
          initialNumToRender={5}
          ListEmptyComponent={<P>データが見つかりません。</P>}
        />
      </Container>
    </Theme>
  );
};

export default ShopsPage;

const styles = StyleSheet.create({
  map: {
    width: '100%',
    height: '50%',
    marginBottom: 15,
  },
});
