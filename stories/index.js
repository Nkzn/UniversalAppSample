import React from 'react';
import { View } from 'react-native';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';

import { Button, Welcome } from '@storybook/react/demo';

import { PhonePortrait, PhoneLandscape, Tab7Portrait, Tab7Landscape, Tab9Portrait, Tab9Landscape, Tab10Portrait, Tab10Landscape } from './windows';

import TodoList from '../src/native/components/TodoList';
import TodoDetail from '../src/native/components/TodoDetail';
import TodoScreen from '../src/native/components/TodoScreen';

storiesOf('Todo', module)
  .add('TodoList', () => (
    <TodoList
      todos={[
        {id: 0, title: "hogehoge", description: "ほげほげ"},
        {id: 1, title: "fugafuga", description: "ふがふが"},
        {id: 2, title: "piyopiyo", description: "ぴよぴよ"}
      ]}
      onPressTodo={action(`clicked`)}
    />
  ))
  .add('TodoDetail', () => (
    <TodoDetail todo={{id: 0, title: "hogehoge", description: "ほげほげ"}} />
  ));

storiesOf('TodoLayout MultiScreen')
  .add('Phone Portrait (with id)', () => (
    <PhonePortrait>
      <TodoScreen
        todoId="1"
        left={<View style={{ flex: 1, backgroundColor: '#00F' }} />}
        right={<View style={{ flex: 1, backgroundColor: '#F00' }} />}/>
    </PhonePortrait>
  ))
  .add('Phone Portrait (all)', () => (
    <PhonePortrait>
      <TodoScreen
        todoId="all"
        left={<View style={{ flex: 1, backgroundColor: '#00F' }} />}
        right={<View style={{ flex: 1, backgroundColor: '#F00' }} />}/>
    </PhonePortrait>
  ))
  .add('Phone Landscape', () => (
    <PhoneLandscape>
      <TodoScreen
        navigation={{state: { params: { }}}}
        left={<View style={{ flex: 1, backgroundColor: '#00F' }} />}
        right={<View style={{ flex: 1, backgroundColor: '#F00' }} />}/>
    </PhoneLandscape>
  ))
  .add('Tab 7 inch Portrait', () => (
    <Tab7Portrait>
      <TodoScreen
        navigation={{state: { params: { }}}}
        left={<View style={{ flex: 1, backgroundColor: '#00F' }} />}
        right={<View style={{ flex: 1, backgroundColor: '#F00' }} />}/>
    </Tab7Portrait>
  ))
  .add('Tab 7 inch Landscape', () => (
    <Tab7Landscape>
      <TodoScreen
        navigation={{state: { params: { }}}}
        left={<View style={{ flex: 1, backgroundColor: '#00F' }} />}
        right={<View style={{ flex: 1, backgroundColor: '#F00' }} />}/>
    </Tab7Landscape>
  ))
  .add('Tab 9 inch Portrait', () => (
    <Tab9Portrait>
      <TodoScreen
        navigation={{state: { params: { }}}}
        left={<View style={{ flex: 1, backgroundColor: '#00F' }} />}
        right={<View style={{ flex: 1, backgroundColor: '#F00' }} />}/>
    </Tab9Portrait>
  ))
  .add('Tab 9 inch Landscape', () => (
    <Tab9Landscape>
      <TodoScreen
        navigation={{state: { params: { }}}}
        left={<View style={{ flex: 1, backgroundColor: '#00F' }} />}
        right={<View style={{ flex: 1, backgroundColor: '#F00' }} />}/>
    </Tab9Landscape>
  ))
  .add('Tab 10 inch Portrait', () => (
    <Tab10Portrait>
      <TodoScreen
        navigation={{state: { params: { }}}}
        left={<View style={{ flex: 1, backgroundColor: '#00F' }} />}
        right={<View style={{ flex: 1, backgroundColor: '#F00' }} />}/>
    </Tab10Portrait>
  ))
  .add('Tab 10 inch Landscape', () => (
    <Tab10Landscape>
      <TodoScreen
        navigation={{state: { params: { }}}}
        left={<View style={{ flex: 1, backgroundColor: '#00F' }} />}
        right={<View style={{ flex: 1, backgroundColor: '#F00' }} />}/>
    </Tab10Landscape>
  ));
