import * as React from 'react';
import {Button, View, Text} from 'react-native';
import LogoTitle from '../components/LogoTitle';

export default class HomeScreen extends React.Component {
  static navigationOptions = {
    headerTitle: () => <LogoTitle />,
    headerRight: () => (
      <Button
        onPress={() => alert('This is a button!')}
        title="Info"
        color="black"
      />
    ),
  };

  render() {
    return (
      <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
        <Text>Home Screen</Text>
        <Button
          title="Go to Details"
          onPress={() => {
            this.props.navigation.navigate('Details', {
              itemId: 86,
              otherParam: 'First Details',
            });
          }}
        />
      </View>
    );
  }
}
