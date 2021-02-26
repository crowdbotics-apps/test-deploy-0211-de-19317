import React, { useState, useEffect } from 'react';
import { View, Button, Text } from 'react-native';
import { connect } from 'react-redux';
import { styles, Color } from './styles';
import { apiAuthUserRequest, apiLogoutRequest } from '../auth/actions';
// import { usePrevious } from './constants.js';

const UserDemo = props => {
  const { api, user, get_user, logout, token } = props;
  // const prevProps = usePrevious({ api }, { api: {} });

  useEffect(() => {
    if (!token) props.navigation.navigate('LoginSignup')
    if (!api.isLoading && !user) {
      get_user(token);
    }
  }, [api]);

  return (
    <View style={styles.container}>
      <Text style={{ ...styles.text, fontSize: 20, color: Color.malibu, marginTop: 30 }}>
        Hello, {user.username}!
      </Text>
      <Text style={styles.text}>First Name: {user.first_name}</Text>
      <Text style={styles.text}>Last Name: {user.last_name}</Text>
      <Text style={styles.text}>Email: {user.email}</Text>
      <Button onPress={() => logout(token)} title="Logout" color={Color.malibu} />
    </View>
  );
};

function mapStateToProps(state) {
  return {
    api: state.socialLogin.api,
    user: state.socialLogin.user,
    token: state.socialLogin.token,
  };
}

const mapDispatchToProps = dispatch => {
  return {
    get_user: token => dispatch(apiAuthUserRequest({ token })),
    logout: token => dispatch(apiLogoutRequest({ token })),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(UserDemo);
