import {View, Text} from 'react-native';
import React from 'react';
import {FONTS} from '../constants';

const Header = ({containerStyle, title}) => {
  console.log(title);
  return (
    <View
      style={{
        flexDirection: 'row',
        ...containerStyle,
      }}>
      {/* left */}
      <Text style={{marginLeft: 10, fontSize: 18, color: 'black'}}>
        {title}
      </Text>
      {/* title */}
      <View
        style={{
          flex: 1,
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        <Text style={{fontSize: 18, ...FONTS.h3}}>{title}</Text>
      </View>
    </View>
  );
};

export default Header;
