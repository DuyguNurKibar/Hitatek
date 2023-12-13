import React, { useContext, useState } from "react";
import { useWindowDimensions } from "react-native";
import { TabView, SceneMap } from "react-native-tab-view";
import { NewsContext } from "../API/Context";
import DiscoverScreen from "../Screens/DiscoverScreen";
import NewsScreen from "../Screens/NewsScreen";
import TopNavigation from "./TopNavigation";

export default function Tabs() {
  const layout = useWindowDimensions();

  const { index, setIndex } = useContext(NewsContext);

  const [routes] = useState([
    { key: "first", title: "Keşfet" },
    { key: "second", title: "Haberler" },
  ]);

  const renderScene = SceneMap({
    first: DiscoverScreen,
    second: NewsScreen,
  });

  return (
    <TabView
      navigationState={{ index, routes }}
      renderScene={renderScene}
      onIndexChange={setIndex}
      initialLayout={{ width: layout.width }}
      renderTabBar={() => <TopNavigation index={index} setIndex={setIndex} />}
    />
  );
}
