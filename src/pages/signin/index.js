import React from 'react';
import {SafeAreaView, Text, TouchableOpacity} from 'react-native';
import styles from './styles';
import {Auth} from 'aws-amplify';

const SignIn = () => {
  const signIn = async (username, password) => {
    try {
      const user = await Auth.signIn(username, password);
      console.log(user);
    } catch (error) {
      console.log('error signing in', error);
    }
  };
  return (
    <SafeAreaView style={styles.container}>
      <TouchableOpacity
        onPress={() => {
          signIn('rushal@e-arth.in', 'Rnb@11795');
        }}>
        <Text>SUBMIT</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export {SignIn};
