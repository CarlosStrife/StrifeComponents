en este proyecto se necesitan los siguientes componentes forzosamente

npm i react-native-vector-icons iconos de vectoricons 
(para iphone hay que agregar los fonts manualmente) 
(para android hay que agregar esta linea en android/app/build.gradle hasta arriba)
apply from: file("../../node_modules/react-native-vector-icons/fonts.gradle")
import Icon from 'react-native-vector-icons/FontAwesome5';



npm i react-native-date-picker
//este es solo un calendario
//se supone y funciona en los dos ios y android
import DatePicker from 'react-native-date-picker'


npm install react-native-linear-gradient 
//esto se usa para estilizarlo nada mas
import LinearGradient from 'react-native-linear-gradient';


tambien recomendable usar este comando
cd android
.\gradlew clean
cd ..
npx react-native run-android


para instalar el navegador de pantallas de este proyecto empezamos aqui:

 npm install @react-navigation/native@6.1.18
 npm install react-native-screens@3.20.0
 npm install react-native-safe-area-context@4.5.0
 npm install react-native-gesture-handler@2.9.0
 npm install react-native-reanimated@2.14.4
 npm install @react-navigation/drawer@6.7.2


cambia el archivo babel.config.js por 
module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    "react-native-reanimated/plugin",
  ],
};
y resetea con 
npx react-native start --reset-cache