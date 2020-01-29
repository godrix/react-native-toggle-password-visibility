# React Native Toggle Password Visibility

This is a custom component for React Native, a simple Toggle Password InputText, compatible with both ios, android and expo.

[![example](https://i.imgur.com/cw2GDfC.gif)](https://i.imgur.com/cw2GDfC.gif)

for expo use [react-native-toggle-password-visibility-expo](https://github.com/godrix/react-native-toggle-password-visibility-expo)

# Installation.
Install the package with YARN.

```sh
yarn add react-native-toggle-password-visibility --save
```
Or with NPM

```sh
npm install react-native-toggle-password-visibility --save
```

# How to use.

Very simple to use just add this component in your file.

```js
// import packages
import React, {useState} from 'react';
import { View } from 'react-native';
import InputPasswordToggle from 'react-native-toggle-password-visibility';

export default function App() {
  const [password, setPassword] = useState('');
  return (
    <InputPasswordToggle 
      value={password}
      onChangeText={setPassword}/>
  );
}
```
## Props

 name          | description                | type     | default
:--------------|:-------------------------- | --------:|:------------------
 icon          | Icon before input          |   Number | none
 iconSize      | Eye icon size              |   Number | 20
 iconColor     | Eye icon color             |   String | #222222
 inputStyle    | Style Input                |   object | null

```js
// Icon before input
    <InputPasswordToggle 
      icon="lock"
      value={password}
      onChangeText={setPassword}/>
  );
}
```