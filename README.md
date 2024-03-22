# StrifeComponents
#THESE ARE SOME COMPONENTS DEVELOPED AND COLLECTED BY CARLOS STRIFE THE ONE AND ONLY, HE RESURECTED AT THE THIRD DAY, ORA ORA ORA ORAAAA!! (JOJO REFLECTION)
#A VER CAON PARA QUE ESTA MIERDA FUNCIONE EN CUALQUIER COMPU ESTO ES LO QUE NECESITAS
1 INSTALAR JAVA 11.0.18 o 17 PORQUE ESTA MIERDA NO PUEDE CON UNA MENOR Y LAS MAYORES TIENEN FALLAS CON EL GRADLE NO SE QUE
has una cuenta en oracle y descarga
https://www.oracle.com/java/technologies/javase/jdk17-archive-downloads.html -->  !!ESTE!! ---> Windows x64 Installer	151.99 MB	
https://download.oracle.com/java/17/archive/jdk-17_windows-x64_bin.exe (sha256)
!!SIEMPRE NO AHORA SOLO ACEPTA EL 17 PTM!!
-AGREGA LAS VARIABLES DE ENTORNO
CONFIGURA LA VARIABLE DE ENTORNO JAVA_HOME y Path
VARIABLES DE USUARIO
JAVA_HOME C:\Program Files\Java\jdk-17
Path Agregar %JAVA_HOME%\bin

2 INSTALAR NODE
https://nodejs.org/en/download/current  <-- AQUI
--SI NO JALA ESTA PORQUERIA POR UN TAL ERROR ENOE CREA UN DIRECTORIO QUE SE LLAME npm EN C:\Users\PROGRAMADOR\AppData\Roaming

2.1 INSTALA ANDROID STUDIO Y SU SDK CULERO
https://developer.android.com/studio?hl=es-419
-AGREGA LAS VARIABLES DE ENTORNO
VARIABLES DE USUARIO
ANDROID_HOME C:\Users\PROGRAMADOR\AppData\Local\Android\Sdk
-CAMBIA LA DE path y agragale el pedazo de sdktools
Path Agregar C:\Users\PROGRAMADOR\AppData\Local\Android\Sdk\platform-tools

3 INSTALA GIT EN LA COMPU Y CLONAR ESTA MIERDA
git clone https://github.com/CarlosStrife/StrifeComponents.git
-CORRER npm install para que funcione o npm install -g react-native-cli 

4 para instalar el navegador de pantallas empezamos aqui:
https://reactnavigation.org/docs/getting-started


5 cambia el archivo babel.config.js por esta mierda
module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    "react-native-reanimated/plugin",
  ],
};
y resetea esta mierda con 
npx react-native start --reset-cache

6 agrega mamadas de react native
react-native-elements añadir
7 agrega los iconos de vector icons
react-native-vector-icons/FontAwesome añadir