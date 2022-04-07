# final-project-backend-coder

### Configuración de pm2, nginx y certbot de let's encrypt (SSL).

La configuración se llevó a cabo en un droplet de Digital Ocean. Se levantan dos aplicaciones de backend con pm2 (una en el puerto 8080, cuyo objetivo es manejar todo lo relacionado a los datos de los clientes, consultas de productos, etc. Y otra en el puerto 8081, cuyo objetivo es servir de dashboard para el administrador de la web).

Se utiliza nginx que actua como proxy para redireccionar al puerto que interesa. Cuando se trate de location / redirigira al 8080 y si se trata de location /dashboard redirigira al 8081.

También se agrega dominio y SSL, utilizando el certbot de python para obtener el mismod e Let's Encrypt.

pm2:
![image](https://github.com/AgustinCarbajal1997/final-project-backend-coder/blob/main/gifs-readme/Captura%20de%20pantalla%20(140).png)

Nginx:
![image](https://github.com/AgustinCarbajal1997/final-project-backend-coder/blob/main/gifs-readme/Captura%20de%20pantalla%20(141).png)

SSL:
![image](https://github.com/AgustinCarbajal1997/final-project-backend-coder/blob/main/gifs-readme/Captura%20de%20pantalla%20(142).png)

### Sistema de filtros para productos:

Se cuenta con un sistema de filtros por marcas y precios. Además se agregó paginación para posibilitar al cliente recibir la data de manera acotada y mejorando la performance a la carga de la web. 

![image](https://github.com/AgustinCarbajal1997/final-project-backend-coder/blob/main/gifs-readme/filtros.gif)

### Sistema de búsqueda de productos:

Las búsquedas pueden realizarse por categorías de productos o bien a través de una barra de búsqueda la cúal recibe la información introducida por el usuario y es tratada en el backend con expresiones regulares para filtrar de la mejor manera la data requirida. 

![image](https://github.com/AgustinCarbajal1997/final-project-backend-coder/blob/main/gifs-readme/busqueda.gif)

### Sistema de login y signup. Posibilidad de guardar favoritos.

Las sesiones se manejan con JWT que se guardan en cookies y que se conservan en el estado global de la app a través de redux. El usuario logeado cuenta con, entre otras ventajas, guardar en favoritos los productos en los cuales se interesa.

![image](https://github.com/AgustinCarbajal1997/final-project-backend-coder/blob/main/gifs-readme/login.gif)


### Sistema de comparación de productos. 

El almacenamiento de los ids a comparar se maneja con redux. A la hora de comparar se efectua una consulta al backend, el cual devuelve una respuesta lista para mostrarlas en un cuadro.

![image](https://github.com/AgustinCarbajal1997/final-project-backend-coder/blob/main/gifs-readme/comparison.gif)

### Sistema de carrito e integración con Check Out Pro Mercado Pago.

![image](https://github.com/AgustinCarbajal1997/final-project-backend-coder/blob/main/gifs-readme/compra.gif)
