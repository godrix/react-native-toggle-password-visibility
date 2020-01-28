# React Native Toggle Password Visibility Expo

This is a custom component for React Native, a simple Toggle Password InputText, compatible with both ios, android and expo.

[![example](https://i.imgur.com/cw2GDfC.gif)](https://i.imgur.com/cw2GDfC.gif)

for expo use [react-native-toggle-password-visibility-expo](https://github.com/godrix/react-native-toggle-password-visibility-expo)

# Installation.
Install the package with YARN.

```sh
yarn add react-native-toggle-password-visibility-expo --save
```
Or with NPM

```sh
npm install react-native-toggle-password-visibility-expo --save
```

# How to use.

Very simple to use just add this component in your file.

```js
// import packages
import React, {useState} from 'react';
import { View } from 'react-native';
import InputPasswordToggle from 'react-native-toggle-password-visibility-expo';

export default function App() {
  const [password, setPassword] = useState('');
  return (
    <InputPasswordToggle 
      value={password}
      onChangeText={setPassword}/>
  );
}
```