import React from 'react';
import { FlatList, StyleSheet, Text, View } from 'react-native';
import { PRODUCTS } from '../../../assets/products';
import { ProductListItem } from '../../components/product-list-items';
import { ListHeader } from '../../components/list-header';
const Home = () => {
  return (
    <View>
      <FlatList
        data={PRODUCTS}
        renderItem={({ item }) => 
          <ProductListItem product={item } />
        
        }
        keyExtractor={(item: { id: number; title: string }) => item.id.toString()}
        numColumns={2}
        ListHeaderComponent={<ListHeader />}
        contentContainerStyle={styles.flatListContent }
        columnWrapperStyle={styles.FlatListcolum}
         style={{ paddingHorizontal: 10,paddingVertical: 5 }}
      />
    </View>
  );
};

export default Home;

 const styles = StyleSheet.create({
  flatListContent: {
    paddingBottom: 20,
  },
  FlatListcolum:{
    justifyContent: 'space-between',
  }
 });
