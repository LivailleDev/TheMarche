import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import { styled } from 'nativewind';
import Logo from '../Logo/logo.svg'
import { Svg } from 'react-native-svg';

const ViewStyled = styled(View);
const TextStyled = styled(Text);
const TextInputStyled = styled(TextInput);
const TouchableOpacityStyled = styled(TouchableOpacity);

export default function Login({ navigation }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const handleLogin = () => {
    //
    navigation.navigate('Home');
  };

  return (
    <ViewStyled >
      <Svg className={'bg-green-400'} width="150" height="100">
      <image href={Logo} width="100" height="100 "/>
      </Svg>
      <TextStyled className={''}> Email</TextStyled>
      <TextInputStyled id= "txtEmail" className=''
        style={{ height: 40, width: '80%', borderWidth: 1, marginBottom: 16, padding:10}}
        placeholder="email@example.com"
        onChangeText={text => setEmail(text)}
        value={email}
      />
      <TextStyled className={''}>Password</TextStyled>
      <TextInputStyled id= "txtPassword" 
        style={{ height: 40, width: '80%', borderWidth: 1, marginBottom: 16, padding:10 }}
        placeholder="********"
        onChangeText={text => setPassword(text)}
        value={password}
        secureTextEntry
      />
      <TouchableOpacityStyled
        style={{ backgroundColor: '#A3AF8D', padding: 8, borderRadius: 4 }}
        onPress={handleLogin}
      >
        <Text style={{ color: 'white' }}>Login</Text>
      </TouchableOpacityStyled>
    </ViewStyled>
  );
};

