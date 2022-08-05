import React from 'react';

import { View, Text, StyleSheet, Image } from 'react-native';

export function Item({ item: { nome, imagem }}){
  return (
    <View style={styles.itemList}>
      <Image source={imagem} style={styles.descriptionItemList} />
      <Text style={styles.titleList}>{nome}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  itemList: {
    flexDirection: "row",
    borderBottomWidth: 1, 
    borderBottomColor: "#ECECEC",
    paddingVertical: 16,
    marginHorizontal: 16,
    alignItems: "center",
  },
  imageList: {
    width: 46,
    height: 46
  },
  descriptionItemList: {
    fontSize: 16,
    lineHeight: 26,
    marginLeft: 11,
    color: "#464646",
  }
});