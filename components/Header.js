import {View, Text} from 'react-native';
import React from 'react';
import {FONTS} from '../constants';

const Header = ({containerStyle, title, leftComponent, rightComponent}) => {
  console.log(title);
  return (
    <View
      style={{
        flexDirection: 'row',
        ...containerStyle,
      }}>
      {/* left */}
      {leftComponent}
      {/* title */}
      <View
        style={{
          flex: 1,
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        <Text
          style={{
            fontSize: 18,
            ...FONTS.h3,
            fontWeight: 'bold',
            color: '#000',
          }}>
          {title}
        </Text>
      </View>
      {/* right */}
      {rightComponent}
    </View>
  );
};

export default Header;
