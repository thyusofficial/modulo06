import React from 'react';
import PropTypes from 'prop-types';

import { WebView } from 'react-native-webview';

// import { Container } from './styles';

export default function WebViewRepo({ navigation }) {
  const repository = navigation.getParam('repository');
  return <WebView source={{ uri: repository.html_url }} style={{ flex: 1 }} />;
}

WebViewRepo.propTypes = {
  navigation: PropTypes.shape({
    getParam: PropTypes.func
  }).isRequired
};

WebViewRepo.navigationOptions = ({ navigation }) => ({
  title: navigation.getParam('repository').name,
});
