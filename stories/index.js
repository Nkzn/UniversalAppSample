import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';

import { Button, Welcome } from '@storybook/react/demo';
import TodoList from '../src/native/components/TodoList';
import TodoDetail from '../src/native/components/TodoDetail';
import TodoScreen from '../src/native/containers/TodoScreen';

// import "./playground";

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
  ))
  .add('TodoScreen', () => (
    <TodoScreen />
  ));
