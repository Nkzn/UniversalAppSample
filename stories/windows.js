import React from "react";
import { View } from "react-native";
import { Pane, Screen } from "../src/native/utils";

const ANDROID_STATUS_BAR_HEIGHT = 24;
const ANDROID_NAVIGATION_BAR_HEIGHT = 48;

const android = {
  phonePortrait: new Screen(360, 640),
  phoneLandscape: new Screen(640, 360),
  tab7Portrait: new Screen(600, 960),
  tab7Landscape: new Screen(960, 600),
  tab9Portrait: new Screen(768, 1024),
  tab9Landscape: new Screen(1024, 768),
  tab10Portrait: new Screen(800, 1280),
  tab10Landscape: new Screen(1280, 800),
};

export function PhonePortrait(props) {
  return createElement(props, android.phonePortrait);
}

export function PhoneLandscape(props) {
  return createElement(props, android.phoneLandscape);
}

export function Tab7Portrait(props) {
  return createElement(props, android.tab7Portrait);
}

export function Tab7Landscape(props) {
  return createElement(props, android.tab7Landscape);
}

export function Tab9Portrait(props) {
  return createElement(props, android.tab9Portrait);
}

export function Tab9Landscape(props) {
  return createElement(props, android.tab9Landscape);
}

export function Tab10Portrait(props) {
  return createElement(props, android.tab10Portrait);
}

export function Tab10Landscape(props) {
  return createElement(props, android.tab10Landscape);
}

function createElement(props, screen) {
  const pane = new Pane(screen);
  return (
    <View style={{ ...paddingScreen(screen) }}>
      {React.cloneElement(props.children, { paneMode: pane.getPaneMode() })}
    </View>
  );
}

function paddingScreen(screen) {
  return {
    width: screen.width,
    height: screen.height - ANDROID_STATUS_BAR_HEIGHT - ANDROID_NAVIGATION_BAR_HEIGHT
  };
}