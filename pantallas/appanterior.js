import 'react-native-gesture-handler';
import React from 'react';
import { Button, View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import Input from './pantallas/input';

const Drawer = createDrawerNavigator();
const Stack = createNativeStackNavigator();
function PantallaPrincipal({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Home Screen</Text>
      <Button
        title="VER LOS COMPONENTES"
        onPress={() => navigation.navigate('Componentes', {
          itemId: 86,
          otherParam: 'anything you want here',
        })}
      />
    </View>
  );
}

function PantallaComponentes({ route, navigation }) {
  //const { itemId, otherParam } = route.params;
  //<Text style={{color: 'red'}}>otherParam: {JSON.stringify(otherParam)}</Text>
  return (
    <Drawer.Navigator>
    <Drawer.Screen name="Input" component={Input} />
      <Drawer.Screen name="Tabla" component={PantallaTabla} />
      <Drawer.Screen name="Selector" component={PantallaSelector} />
      <Drawer.Screen name="Switch" component={PantallaSwitch} />
      <Drawer.Screen name="Alerta" component={PantallaAlerta} />
      <Drawer.Screen name="Etiqueta" component={PantallaEtiqueta} />
      <Drawer.Screen name="Boton" component={PantallaBoton} />
      <Drawer.Screen name="Icono" component={PantallaIcono} />
      <Drawer.Screen name="Imagen" component={PantallaImagen} />
      <Drawer.Screen name="Video" component={PantallaVideo} />
      <Drawer.Screen name="Radio" component={PantallaRadio} />
      <Drawer.Screen name="Tabs" component={PantallaTabs} />
      <Drawer.Screen name="Modal" component={PantallaModal} />
    </Drawer.Navigator>
  );
}

function PantallaInput({ navigation }) {
  return (
    <View>
      <Text style={{color: 'red'}}>
        input
      </Text>
    </View>
  );
}

function PantallaTabla({ navigation }) {
  return (
    <View>
      <Text style={{color: 'red'}}>
        tabla
      </Text>
    </View>
  );
}

function PantallaSelector({ navigation }) {
  return (
    <View>
      <Text style={{color: 'red'}}>
        selector
      </Text>
    </View>
  );
}

function PantallaSwitch({ navigation }) {
  return (
    <View>
      <Text style={{color: 'red'}}>
        switch
      </Text>
    </View>
  );
}

function PantallaAlerta({ navigation }) {
  return (
    <View>
      <Text style={{color: 'red'}}>
        alerta
      </Text>
    </View>
  );
}

function PantallaEtiqueta({ navigation }) {
  return (
    <View>
      <Text style={{color: 'red'}}>
        etiqueta
      </Text>
    </View>
  );
}

function PantallaBoton({ navigation }) {
  return (
    <View>
      <Text style={{color: 'red'}}>
        boton
      </Text>
    </View>
  );
}

function PantallaIcono({ navigation }) {
  return (
    <View>
      <Text style={{color: 'red'}}>
        icono
      </Text>
    </View>
  );
}

function PantallaImagen({ navigation }) {
  return (
    <View>
      <Text style={{color: 'red'}}>
        imagen
      </Text>
    </View>
  );
}

function PantallaVideo({ navigation }) {
  return (
    <View>
      <Text style={{color: 'red'}}>
        video
      </Text>
    </View>
  );
}

function PantallaRadio({ navigation }) {
  return (
    <View>
      <Text style={{color: 'red'}}>
        radio
      </Text>
    </View>
  );
}

function PantallaTabs({ navigation }) {
  return (
    <View>
      <Text style={{color: 'red'}}>
        tabs
      </Text>
    </View>
  );
}

function PantallaModal({ navigation }) {
  return (
    <View>
      <Text style={{color: 'red'}}>
        modal
      </Text>
    </View>
  );
}
function App(): JSX.Element {

  return (
    <NavigationContainer>{    
      <Stack.Navigator>
        <Stack.Screen name="Principal" component={PantallaPrincipal} />
        <Stack.Screen name="Componentes" component={PantallaComponentes} />
      </Stack.Navigator>
    }</NavigationContainer>
  );
}

export default App;
