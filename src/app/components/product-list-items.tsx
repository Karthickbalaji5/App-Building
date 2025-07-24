import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import { Product } from '../../../assets/types/product';
const ProductListItem = ({product}:{product:Product}) => {
  return (
    <View>
      <Image source={{ uri: product.heroImage }} style={styles.itemimage} />
    </View>
  );
};

export default ProductListItem ;

const styles = StyleSheet.create({
    item:{
        width: '48%',
        backgroundColor: '#fff',
        marginVertical: 8,
        borderRadius: 10,
        overflow: 'hidden',
    },
    itemImageContainer: {
        width: '100%',
        height: 150,
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center',
    },
    itemimage:{
        width: '100%',
        height: '100%',
        resizeMode: 'cover',
    },
    ItemTitle: {
        fontSize: 16,   
        color: '#000',
        fontWeight: 'bold',
    },
    itemTextContainer: {
        padding: 10,
        alignItems:"flex-start",
        gap: 4,
    },
});
