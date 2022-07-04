import * as React from 'react';
import { View, Text, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';


function HomeScreen({navigation}) {
  return (
    <View>
      <Text>Home Screen</Text>
      <Button 
      title="Go to About us"
      onPress={() => navigation.navigate('About us')} 
      />
      <Button
        title="Go to Contacts"
        onPress={() => navigation.navigate('Contacts')}
      />
    </View>
  );
}

function AboutUs({}) {
  return (
    <View>
      <Text>About us</Text>
    </View>
  );
}

function Contacts() {
  return (
    <View>
      <Text>Contacts</Text>
    </View>
  );
}

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Home'>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="About us" component={AboutUs} />
        <Stack.Screen name="Contacts" component={Contacts} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;