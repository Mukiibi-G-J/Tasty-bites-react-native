import React from 'react';
import {View, Text, Image} from 'react-native';
import Animated from 'react-native-reanimated';
import {COLORS, SIZES, dummyData, icons} from '../constants';
import {Header} from '../components';
import {setSelectedTab} from '../stores/tab/tabActions';
import {GlobaleContext} from '../stores/store';
import {TouchableOpacity} from 'react-native-gesture-handler';

// import {Header} from '../components/header';

const MainLayout = ({drawerAnimationStyle, navigation}) => {
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
      {/* header */}

      <Header
        containerStyle={{
          height: 50,
          paddingHorizontal: SIZES.padding,
          // marginTop: 40,
          marginTop: 20,

          alignItems: 'center',
        }}
        title={selectedTab.toUpperCase()}
        leftComponent={
          <TouchableOpacity
            style={{
              width: 40,
              height: 40,
              alignItems: 'center',
              justifyContent: 'center',
              borderWidth: 1,
              borderColor: COLORS.gray2,
              borderRadius: SIZES.radius,
            }}
            onPress={() => navigation.openDrawer()}>
            <Image source={icons.menu} />
          </TouchableOpacity>
        }
        rightComponent={
          <TouchableOpacity
            style={{
              alignItems: 'center',
              justifyContent: 'center',
              borderWidth: 1,
              borderColor: COLORS.gray2,
              borderRadius: SIZES.radius,
            }}>
            <Image
              source={dummyData.myProfile.profile_image}
              style={{
                width: 40,
                height: 40,
                borderRadius: SIZES.radius,
              }}
            />
          </TouchableOpacity>
        }
      />
      <View
        style={{
          alignItems: 'center',
          flex: 1,
        }}>
        <Text style={{color: '#000'}}>MainLayout</Text>
      </View>
    </Animated.View>
  );
};

export default MainLayout;
