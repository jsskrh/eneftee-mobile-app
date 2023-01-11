import React from "react";
import {
  FlatList,
  Image,
  SafeAreaView,
  StatusBar,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import {
  CircleButton,
  DetailsBid,
  DetailsDesc,
  FocusedStatusBar,
  RectButton,
  SubInfo,
} from "../components";
import { COLORS, FONTS, SHADOWS, SIZES, assets } from "../constants";

const DetailsHeader = ({ data, navigation }) => (
  <View style={{ width: "100%", height: 373 }}>
    <Image
      source={data.image}
      resizeMode="cover"
      style={{ width: "100%", height: "100%" }}
    />

    {/* <CircleButton
      imgUrl={assets.left}
      handlePress={() => navigation.goBack()}
      top={StatusBar.currentHeight + 10},
        left={ 15},
    /> */}
    {/* <CircleButton
      imgUrl={assets.heart}
      top={StatusBar.currentHeight + 10},
        right={ 15},
    /> */}

    <TouchableOpacity
      style={{
        width: 40,
        height: 40,
        backgroundColor: COLORS.white,
        position: "absolute",
        borderRadius: SIZES.extraLarge,
        alignItems: "center",
        justifyContent: "center",
        top: StatusBar.currentHeight + 10,
        left: 15,
        ...SHADOWS.light,
      }}
      onPress={() => navigation.goBack()}
    >
      <Image
        source={assets.left}
        resizeMethod="contain"
        style={{ width: 24, height: 24 }}
      />
    </TouchableOpacity>

    <TouchableOpacity
      style={{
        width: 40,
        height: 40,
        backgroundColor: COLORS.white,
        position: "absolute",
        borderRadius: SIZES.extraLarge,
        alignItems: "center",
        justifyContent: "center",
        top: StatusBar.currentHeight + 10,
        right: 15,
        ...SHADOWS.light,
      }}
    >
      <Image
        source={assets.heart}
        resizeMethod="contain"
        style={{ width: 24, height: 24 }}
      />
    </TouchableOpacity>
  </View>
);

const Details = ({ route, navigation }) => {
  const { data } = route.params;

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <FocusedStatusBar
        barStyle="dark-content"
        backgroundColor="transparent"
        translucent={true}
      />

      <View
        style={{
          width: "100%",
          position: "absolute",
          bottom: 0,
          paddingVertical: SIZES.font,
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: "rgba(255,255,255,0.5)",
          zIndex: 1,
        }}
      >
        <RectButton minWidth={170} fontSize={SIZES.large} {...SHADOWS.large} />
      </View>

      <FlatList
        data={data.bids}
        renderItem={({ item }) => <DetailsBid bid={item} />}
        keyExtractor={(item) => item.id}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: SIZES.extraLarge * 3 }}
        ListHeaderComponent={() => (
          <React.Fragment>
            <DetailsHeader data={data} navigation={navigation} />
            <SubInfo />
            <View style={{ padding: SIZES.font }}>
              <DetailsDesc data={data} />
              {data.bids.length > 0 && (
                <Text
                  style={{
                    fontSize: SIZES.font,
                    fontFamily: FONTS.semiBold,
                    color: COLORS.primary,
                  }}
                >
                  Current Bids
                </Text>
              )}
            </View>
          </React.Fragment>
        )}
      />
    </SafeAreaView>
  );
};

export default Details;
