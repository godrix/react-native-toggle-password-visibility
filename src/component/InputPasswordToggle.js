import React, { useState, useRef } from 'react';
import { View, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import PropTypes from 'prop-types';


export default function InputPasswordToggle({ style, icon, iconColor, iconSize, ...rest }, ref) {
  const [visible, setVisible] = useState(true);
  const refContainer = useRef(ref);
  
  return (
    <View style={[style, styles.container]}>
      {icon && <Icon name={icon} size={iconSize} color={iconColor} />}
      <TextInput style={styles.input} secureTextEntry={visible} {...rest} ref={refContainer}/>
      <TouchableOpacity
        onPress={() => {
          setVisible(!visible);
        }}>
        <Icon
          name={visible ? 'visibility-off' : 'visibility'}
          size={iconSize}
          color={iconColor}
        />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container:{
    flexDirection:'row',
    alignItems:'center',
  }
})

PasswordInputText.propTypes = {
  icon: PropTypes.string,
  style: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
  iconColor: PropTypes.string,
  iconSize:PropTypes.number
};

PasswordInputText.defaultProps = {
  icon: null,
  style: {},
  iconColor: '#222',
  iconSize: 20
};

