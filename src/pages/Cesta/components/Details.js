import React from 'react';

import { Text, View, Image, TouchableOpacity, StyleSheet } from 'react-native';

export function Details({name, farmIcon, farmName, description, price, button}){
  return (
    <>
      <Text style={styles.name}>{name}</Text>
      <View style={styles.farmView}>
        <Image source={farmIcon} style={styles.farmIcon} />
        <Text style={styles.farmName}>{farmName}</Text>
      </View>
      <Text style={styles.description}>{description}</Text>
      <Text style={styles.price}>{price}</Text>
      
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}> {button} </Text>
      </TouchableOpacity>
    </>
  );
} 

const styles = StyleSheet.create({
  name: {
    fontSize: 26,
    lineHeight: 42,
    color: "#464646",
    fontFamily: "bold"
  },
  farmView: {
    flexDirection: "row",
    paddingVertical: 12
  },
  farmIcon: {
    width: 32,
    height: 32,
    marginRight: 12,
  },
  farmName: {
    fontSize: 16,
    lineHeight: 26,
    fontFamily: "regular"
  },
  description: {
    color: "#A3A3A3",
    fontSize: 16,
    lineHeight: 26,
  },
  price: {
    color: "#2A9F85",
    fontWeight: "bold",
    fontSize: 26,
    lineHeight: 42,
    marginTop: 8
  },
  button: {
    marginTop: 16,
    backgroundColor: "#2A9F85",
    paddingVertical: 16,
    borderRadius: 6
  },
  buttonText: {
    textAlign: "center",
    color: "#FFF",
    fontSize: 16,
    lineHeight: 26,
    fontFamily: "bold"
  }
})