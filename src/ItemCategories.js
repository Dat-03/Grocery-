import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import React from 'react';

const ItemCategories = props => {
  const {data} = props;
  const {id, name, imagef, imaget} = data;

  return (
    <TouchableOpacity style={styleItemCategories.container}>
      <Image style={styleItemCategories.imagef} source={{uri: imagef}} />
      <Image style={styleItemCategories.imaget} source={{uri: imaget}} />
      <Text style={styleItemCategories.text}>{name}</Text>
    </TouchableOpacity>
  );
};

export default ItemCategories;

const styleItemCategories = StyleSheet.create({
  container: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    width: 115,
    height: 180,
    marginStart: 10,
  },

  imagef: {
    width: 100,
    height: 100,
  },

  imaget: {
    width: 70,
    height: 70,
    marginTop: -80,
  },

  text: {
    marginTop: 30,
    fontStyle: 'normal',
    fontWeight: '400',
    fontSize: 15,
    height: 18,
    lineHeight: 18,
    color: '#6D3805',
  },
});
