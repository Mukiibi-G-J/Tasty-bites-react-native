import {View, Text, TouchableOpacity, Image, Animated} from 'react-native';
import React from 'react';
import {
  createDrawerNavigator,
  DrawerContentScrollView,
} from '@react-navigation/drawer';
import {MainLayout} from '../screens';
import {COLORS, FONTS, SIZES, constants, icons, dummyData} from '../constants';
import {GlobaleContext, SET_SELECTED_TAB} from '../stores/store';

const Drawer = createDrawerNavigator();

const CustomDrawerItem = ({label, icon, isFocused, onPress}) => {
  return (
    <TouchableOpacity
      style={{
        flexDirection: 'row',
        height: 40,
        marginBottom: SIZES.base,
        alignItems: 'center',
        borderRadius: SIZES.radius,
        paddingLeft: SIZES.radius,

        // backgroungColor
        backgroundColor: isFocused ? COLORS.transparentBlack1 : null,
      }}
      onPress={onPress}>
      <Image
        source={icon}
        style={{
          width: 20,
          height: 20,
          tintColor: COLORS.white,
        }}
      />
      <Text
        style={{
          marginLeft: 15,
          color: COLORS.white,
          ...FONTS.h3,
        }}>
        {label}
      </Text>
    </TouchableOpacity>
  );
};

const CustomDrawerContent = ({
  navigation,
  setSelectedTab,
  selectedTab,
  dispatch,
}) => {
  return (
    <DrawerContentScrollView
      scrollEnabled={true}
      contentContainerStyle={{flex: 1, backgroundColor: COLORS.primary}}>
      <View
        style={{
          flex: 1,
          paddingHorizontal: SIZES.radius,
        }}>
        {/* close */}
        <View
          style={{
            alignItems: 'flex-start',
            justifyContent: 'center',
          }}>
          <TouchableOpacity
            style={{
              alignItems: 'center',
              justifyContent: 'center',
            }}
            onPress={() => navigation.closeDrawer()}>
            <Image
              source={icons.cross}
              style={{
                height: 35,
                width: 35,
                tintColor: COLORS.white,
              }}
            />
          </TouchableOpacity>
        </View>
        {/* profile */}
        <TouchableOpacity
          style={{
            flexDirection: 'row',
            marginTop: SIZES.radius,
            alignItems: 'center',
          }}
          onPress={() => console.log('Profile')}>
          <Image
            source={dummyData.myProfile?.profile_image}
            style={{
              width: 50,
              height: 50,
              borderRadius: SIZES.radius,
            }}
          />
          <View style={{marginLeft: SIZES.radius}}>
            <Text style={{color: COLORS.white, ...FONTS.h3}}>
              {dummyData.myProfile?.name}
            </Text>
            <Text style={{color: COLORS.white, ...FONTS.body4}}>
              {dummyData.myProfile?.email}
            </Text>
            <Text style={{color: COLORS.white, ...FONTS.body4}}>
              View your profile
            </Text>
          </View>
        </TouchableOpacity>
        <View
          style={{
            flex: 1,
            marginTop: SIZES.padding,
          }}>
          <CustomDrawerItem
            label={constants.screens.home}
            icon={icons.home}
            isFocused={selectedTab == constants.screens.home}
            onPress={() => {
              setSelectedTab(constants.screens.home);
              navigation.navigate('MainLayout');
            }}
          />
          <CustomDrawerItem
            label={constants.screens.my_wallet}
            icon={icons.wallet}
            isFocused={selectedTab == constants.screens.my_wallet}
            onPress={() => {
              setSelectedTab(constants.screens.my_wallet);
              dispatch({
                type: SET_SELECTED_TAB,
                payload: constants.screens.my_wallet,
              });
              navigation.navigate('MainLayout');
            }}
          />
          <CustomDrawerItem
            label={constants.screens.favourite}
            icon={icons.favourite}
            isFocused={selectedTab == constants.screens.favourite}
            onPress={() => {
              setSelectedTab(constants.screens.favourite);
              navigation.navigate('MainLayout');
            }}
          />
          {/* // line divider */}
          <View
            style={{
              height: 1,
              marginLeft: SIZES.radius,
              marginRight: SIZES.radius,
              backgroundColor: COLORS.lightGray1,
            }}
          />
          <CustomDrawerItem
            label={constants.screens.track_order}
            icon={icons.location}
            isFocused={selectedTab == constants.screens.track_order}
            onPress={() => {
              setSelectedTab(constants.screens.track_order);
              navigation.navigate('MainLayout');
            }}
          />
          <CustomDrawerItem
            label={constants.screens.notification}
            icon={icons.notification}
            isFocused={selectedTab == constants.screens.notification}
            onPress={() => {
              setSelectedTab(constants.screens.notification);
              navigation.navigate('MainLayout');
            }}
          />
          <CustomDrawerItem
            label={constants.screens.coupons}
            icon={icons.coupon}
            isFocused={selectedTab == constants.screens.coupons}
            onPress={() => {
              setSelectedTab(constants.screens.coupons);
              navigation.navigate('MainLayout');
            }}
          />
          <CustomDrawerItem
            label={constants.screens.settings}
            icon={icons.setting}
            isFocused={selectedTab == constants.screens.settings}
            onPress={() => {
              setSelectedTab(constants.screens.settings);
              navigation.navigate('MainLayout');
            }}
          />
          <CustomDrawerItem
            label={constants.screens.invite_friends}
            icon={icons.profile}
            isFocused={selectedTab == constants.screens.invite_friends}
            onPress={() => {
              setSelectedTab(constants.screens.invite_friends);
              navigation.navigate('MainLayout');
            }}
          />
          <CustomDrawerItem
            label={constants.screens.help}
            icon={icons.help}
            isFocused={selectedTab == constants.screens.help}
            onPress={() => {
              setSelectedTab(constants.screens.help);
              navigation.navigate('MainLayout');
            }}
          />
        </View>
        <View
          style={{
            marginBottom: SIZES.padding,
            paddingHorizontal: SIZES.padding,
          }}>
          <CustomDrawerItem label="Logout" icon={icons.logout} />
        </View>
      </View>
    </DrawerContentScrollView>
  );
};

const CustomDrawer = () => {
  const [progress, setProgress] = React.useState(new Animated.Value(0));
  const [selectedTab, setSelectedTab] = React.useState(constants.screens.home);
  const {dispatch} = React.useContext(GlobaleContext);

  // const scale = Animated?.interpolate({
  //   inputRange: [0, 1],
  //   outputRange: [1, 0.8],
  // });

  // const borderRadius = Animated?.interpolate(progress, {
  //   inputRange: [0, 1],
  //   outputRange: [0, 16],
  // });
  // const animatedStyle = {borderRadius, transform: [{scale}]};

  return (
    <View
      style={{
        flex: 1,

        backgroundColor: COLORS.primary,
      }}>
      <Drawer.Navigator
        style={{backgroundColor: 'red'}}
        drawerType="slide"
        overlayColor="transparent"
        drawerStyle={{
          flex: 1,
          width: '65%',
          paddingRight: 20,
          backgroundColor: 'transparent',
        }}
        screenOptions={{
          activeTintColor: COLORS.primary,
        }}
        sceneContainerStyle={{
          backgroundColor: 'transparent',
        }}
        drawerContent={props => {
          setTimeout(() => {
            setProgress(props.progress);
          }, 0);
          return (
            <CustomDrawerContent
              selectedTab={selectedTab}
              setSelectedTab={setSelectedTab}
              navigation={props.navigation}
              dispatch={dispatch}
            />
          );
        }}>
        <Drawer.Screen name="MainLayout">
          {props => (
            <MainLayout
              {...props}
              // drawerAnimationStyle={animatedStyle}
            />
          )}
        </Drawer.Screen>
      </Drawer.Navigator>
    </View>
  );
};

// function mapStateToProps(state) {
//   return {
//     selectedTab: state.tabReducer.selectedTab,
//   };
// }

// function mapDispatchToProps(dispatch) {
//   return {
//     setSelectedTab: selectedTab => {
//       dispatch(setSelectedTab(selectedTab));
//     },
//   };
// }
export default CustomDrawer;
