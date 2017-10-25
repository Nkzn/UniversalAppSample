import React from 'react';

import { storiesOf } from '@storybook/react';

import { View, Text, StyleSheet, Button } from "react-native";

const styles = StyleSheet.create({
  });

storiesOf('Playground', module)
  .add('Buttons', () => (
    <View>
      <Button color="#f00" title="red button" />
      <Button disabled title="disabled button" />
    </View>
  ));