import { FontAwesome } from "@expo/vector-icons";
import { Tabs } from "expo-router";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { StyleSheet } from "react-native";
import { ColorProperties } from "react-native-reanimated/lib/typescript/Colors";

function TabBarIcon(props:{ 
  name:React.ComponentProps<typeof FontAwesome>["name"];
  Color:string;

}) {
  return (
    <FontAwesome
      name={props.name}
      size={24}
      color={props.Color}
      style={{ marginBottom: -3 }}
    />
  );
}




const TabsLayout = () => {
  return (
    <SafeAreaView edges={["top"]} style={styles.safeArea}>
    <Tabs 
      screenOptions={{
        tabBarActiveTintColor: "#673ab7",
        tabBarInactiveTintColor: "grey",
        tabBarLabelStyle: {
          fontSize: 12,
        },
        tabBarStyle: {
          borderTopLeftRadius: 20,
          borderTopRightRadius: 20,
          paddingTop: 10,
          backgroundColor: "#fff",
          
        },
        headerShown: false,

      }}>
      <Tabs.Screen
        name="index"
        options={{
          tabBarIcon: (props) => (
            <TabBarIcon {...props} name="shopping-cart" Color={props.color} />
          ),
        }}
      />
      <Tabs.Screen name="orders" options={{
        tabBarIcon: (props) => (
          <TabBarIcon {...props} name="book" Color={props.color} />
        ),
      }} />
    </Tabs> 
    </SafeAreaView>
  );
};

export default TabsLayout;

const styles = StyleSheet.create({
  safeArea:{
    flex: 1,
    
  }
});