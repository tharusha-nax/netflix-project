import { StyleSheet, Text, View } from "react-native";
import React from "react";
import StackNavigator from "./StackNavigator";
import { StatusBar } from "expo-status-bar";

const index = () => {
  return (
    <>
      <StackNavigator />
      <StatusBar hidden />
    </>
  );
};

export default index;

const styles = StyleSheet.create({});
