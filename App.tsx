import 'react-native-gesture-handler';
import React from 'react';
import { Button, View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createDrawerNavigator } from '@react-navigation/drawer';

const Drawer = createDrawerNavigator();
function HomeScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Home Screen</Text>
      <Button
        title="Go to Details"
        onPress={() => navigation.navigate('Details', {
          itemId: 86,
          otherParam: 'anything you want here',
        })}
      />
    </View>
  );
}

function DetailsScreen({ route, navigation }) {
  //const { itemId, otherParam } = route.params;
  return (
    <Drawer.Navigator>
      
      <Drawer.Screen name="Home" component={HomeScreen} />
      <Drawer.Screen name="Details" component={DetailsScreen} />
    {/*<View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text style={{color: 'red'}}>Details Screen</Text>
      <Text style={{color: 'red'}}>itemId: {JSON.stringify(itemId)}</Text>
      <Text style={{color: 'red'}}>otherParam: {JSON.stringify(otherParam)}</Text>
      <Button
        title="Go to Home"
        onPress={() => navigation.navigate('Home')}
      />
  </View>*/}
    </Drawer.Navigator>
  );
}
const Stack = createNativeStackNavigator();

function App(): JSX.Element {

  return (
    <NavigationContainer>{    
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Details" component={DetailsScreen} />
      </Stack.Navigator>
    }</NavigationContainer>
  );
}

export default App;
