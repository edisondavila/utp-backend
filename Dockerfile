# Imagen base con Node.js
FROM node:16

# Directorio de trabajo dentro del contenedor
WORKDIR /app

# Copiar los archivos del proyecto al contenedor
COPY . .

# Instalar las dependencias
RUN npm install

# Copiar los archivos de construcción al contenedor
COPY build /app/build

# Puerto en el que se ejecuta tu aplicación Express
EXPOSE 3000

# Comando para ejecutar la aplicación
CMD ["npm", "start"]
