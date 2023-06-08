import React from 'react';
import {View, Text, BackHandler} from 'react-native';
import Animated from 'react-native-reanimated';
import {SIZES} from '../constants';
import {Header} from '../components';
import {setSelectedTab} from '../stores/tab/tabActions';
import {GlobaleContext} from '../stores/store';

// import {Header} from '../components/header';

const MainLayout = ({drawerAnimationStyle}) => {
  const {state} = React.useContext(GlobaleContext);
  const {tab} = state;
  const selectedTab = tab.selectedTab;
  return (
    <Animated.View
      // <View
      style={{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'white',
        ...drawerAnimationStyle,
      }}>
      <Text style={{color: '#000'}}>MainLayout</Text>
      {/* header */}
      <Header
        containerStyle={{
          height: 50,
          paddingHorizontal: SIZES.padding,
          marginTop: 40,
          alignItems: 'center',
        }}
        title={selectedTab.toUpperCase()}
      />
    </Animated.View>
  );
};

export default MainLayout;
