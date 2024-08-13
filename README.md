en este proyecto se necesitan los siguientes componentes forzosamente

npm i react-native-vector-icons iconos de vectoricons 
(para iphone hay que agregar los fonts manualmente) 
(para android hay que agregar esta linea en android/app/build.gradle hasta arriba)
apply from: file("../../node_modules/react-native-vector-icons/fonts.gradle")
import Icon from 'react-native-vector-icons/FontAwesome5';



npm i react-native-date-picker
este es solo un calendario
se supone y funciona en los dos ios y android
import DatePicker from 'react-native-date-picker'