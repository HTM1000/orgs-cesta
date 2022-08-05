import React from 'react';
import { 
  Image, 
  Dimensions, 
  StyleSheet, 
  View, 
  Text, 
  FlatList,  
} from 'react-native';

const width = Dimensions.get('screen').width;

import Topo from '../../../assets/topo.png';
import { Details } from './components/Details';
import { Item } from './components/Item';

export function Cesta({topo, details, itens}){
  return (
    <View>
        <FlatList 
          data={itens.lista}
          keyExtractor={({nome}) => nome}
          renderItem={Item}
          ListHeaderComponent={() => {
            return (
              <>
                <Image source={Topo} style={styles.top}/>
                <Text style={styles.title}>{topo.title}</Text>

                <View style={styles.cesta}>
                  <Details {...details} />
                  <Text style={styles.titleList}>{itens.title}</Text>
                </View>
              </>
            );
          }}
        />
    </View>
  );
}

const styles = StyleSheet.create({
  top: {
    width: "100%",
    height: 578 / 768 * width
  },
  title: {
    width: "100%",
    position: "absolute",
    textAlign: "center",
    fontWeight: "bold",
    fontSize: 16,
    lineHeight: 26,
    color: "#FFF",
    padding: 16,
  },
  cesta: {
    paddingVertical: 8,
    paddingHorizontal: 16,
  },
  titleList: {
    color: "#464646",
    fontFamily: "bold",
    marginTop: 32,
    marginBottom: 8,
    fontSize: 20,
    lineHeight: 32
  },
})