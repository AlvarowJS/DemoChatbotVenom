# DemoChatbotVenom
Esta es una demo que iremos escalando para el chatbot usando venom 

Por lo pronto se esta realizando una mini orm para poder consultar los datos que se tiene con el chatbot que se desarrollara posteriormente

Para levantar el proyecto lo primero que haremos es intalar las siguientes dependencias con 
 npm init -y
 npm i mysql
 npm install typescript

Luego crearemos el archivo tsconfig.json con el comando npx tsc --init
en el archivo tsconfig.json quitamos el comentario y editamos el outdir y rootdir

  "outDir": "./dist/",    
  "rootDir": "./src/",
  
Y cambiamos la version del target al ES2015

Creamos las carpeta "dist" y "src" dentro de la carpeta raiz
y agregamos en el archivo package.json dentro de scripts:
  
  "start": "npx tsc -p ./tsconfig.json & node ./dist/index.js "
  
Finalmente dentro del src se copiara todo lo que se subio al repositorio
y compilamos con:
  npm run start
