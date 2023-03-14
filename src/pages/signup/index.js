import React from 'react';
import {SafeAreaView, Text, TouchableOpacity} from 'react-native';
import styles from './styles';
import {Auth} from 'aws-amplify';

const SignUp = () => {
  const signUp = async (username, email, phone_number, name, password) => {
    const {user} = await Auth.signUp({
      username,
      password,
      attributes: {
        email,
        phone_number,
        name,
      },
      autoSignIn: {
        // optional - enables auto sign in after user is confirmed
        enabled: true,
      },
    });
    console.log(user);
  };
  return (
    <SafeAreaView style={styles.container}>
      <TouchableOpacity
        onPress={() => {
          signUp(
            'rushal@e-arth.in',
            'rushal@e-arth.in',
            '+919850235926',
            'Rushal Barkhade',
            'Rnb@11795',
          );
        }}>
        <Text>SUBMIT</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export {SignUp};
