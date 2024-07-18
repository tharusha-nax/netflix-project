import { StyleSheet, Text, View } from "react-native";
import React from "react";
import StackNavigator from "./StackNavigator";
import { StatusBar } from "expo-status-bar";
import { StripeProvider } from "@stripe/stripe-react-native";

const index = () => {
  return (
    <>
      <StripeProvider publishableKey="pk_live_51PdxTCJ1HsGFfsBL6uc8t2uKE2abyWbDBVdT5Jdc2Q0fvdmaIH5sRNeKyGwPklpGcGlo9z0RRQtTtSZZGsAEcJNT00pCy9EkR6">
        <StackNavigator />
        <StatusBar hidden />
      </StripeProvider>
    </>
  );
};

export default index;

const styles = StyleSheet.create({});
