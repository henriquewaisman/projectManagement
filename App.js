import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import styles from './src/screens/Style';
import CadastroEmpresa from './src/screens/CadastroEmpresa';
import TelaDeAnuncio from './src/screens/TelaDeAnuncio'; // Importe a nova tela

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login" screenOptions={{headerShown: false}}>
        <Stack.Screen
          name="Login"
          component={CadastroEmpresa}
          options={{
            title: 'Login',
            headerStyle: styles.container,
          }}
        />
        <Stack.Screen
          name="TelaDeAnuncio" // Certifique-se de que o nome corresponde ao que está sendo usado no navigation.navigate
          component={TelaDeAnuncio}
          options={{
            title: 'TelaDeAnuncio',
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
