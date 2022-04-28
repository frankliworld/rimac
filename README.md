# Getting Started with Create React App

Challenge Rimac Seguros -  Cotizador Seguro
Vehicular.


## Levantar proyecto
En el directorio del proyecto, puede ejecutar: 

`npm install` Instalar los modulos de la aplicacion.

`npm start` Ejecutar la aplicación en el modo de desarrollo.

Abra [http://localhost:3000](http://localhost:3000) para verlo en su navegador.

La página se volverá a cargar cuando realice cambios.\
También puede ver errores de pelusa en la consola

# Librerias usadas

-  [React Router](https://reactrouter.com) para crear la navegacion de la aplicacion.

-  [styled components](https://styled-components.com) para la creacion de componetes de mejor performace y reautilizables.

- [Ant Design](https://ant.design) uso de algunos componentes para el feedback al usuario.

### Version
```
"antd": "^4.20.1",
"react-router-dom": "^6.3.0",
"styled-components": "^5.3.5",
```

# Roadmap Proyecto

## Widgets / web components:

 * [x] Login
 * [x] Plan
 * [x] Welcome

 * [x] +20 Components created and used for application

## Requerimientos

### Login
* [x] Implementar validaciones en los campos
* [x] Todos los campos son obligatorios
* [x] Consumir la api en esta pantalla y obtener los datos de la persona que utilizará en las siguientes pantallas
* [x] La placa ingresada se debe reflejar en pantalla Arma tu Plan

### Plan
* [x] La suma asegurada debe estar entre el MIN y MAX valor y aumenta o disminuye cada $ 100.
* [x] Si la suma asegurada supera los $ 16000 entonces se eliminará la covertura “Choque y/o pasarte la luz roja” y se actualizará el monto. En sentido inverso cuando la suma asegurada es menor o igual a $16000.
* [x] Al “Quitar/Agregar” coverturas el monto aumentará o disminuirá como sigue:
  - Monto base: $20.00
  - Llanta robada= $15.00
  - Choque y/o pasartre la luz roja = $20.00
  - Atrolpello en vía Evitamiento = $50.00
* [x] El monto final elegido por el usuario, debe estar disponible para poder utilizarla en la página de Gracias.
* [x] La obtención de la marca, año y modelo queda a criterio del desarrollador.


# Code

### Creacrion de estilos usando styled-componets
![alt text](./src/assets/image/readme/styled.png)

### Rutas Privadas usando React Router
![alt text](./src/assets/image/readme/react-router.png)

### Estructura de un componente 
![alt text](./src/assets/image/readme/component.png)

### Consumo de API
![alt text](./src/assets/image/readme/api.png)

# Preview

### Login
![alt text](./src/assets/image/readme/login.png)

### Plan
![alt text](./src/assets/image/readme/home.png)

### Welcome
![alt text](./src/assets/image/readme/welcome.png)
