<h1>JBS Zapatillas</h1>

<h3> Enlace directo a la página:</h3>
https://jbszapatillas.netlify.app/
<h3> Enlace a video para ver la navegabilidad de la página: </h3>
(https://drive.google.com/file/d/1bfKUZQPPModUwWxow5BzfOhRwacQ98kR/view)

<h2>Descripción General</h2>
<p><b>JBS Zapatillas </b> es un proyecto pensado para un e-commerce, más especificamente un comercio dedicado a la venta de zapatillas. Este proyecto está realizado utilizando <b>React Js</b>.</p>
<p>La navegabilidad de la página se divide en:</p>
<ol>
    <li><b>"/":</b> Contenido principal de la página, la página de inicio que muestra la navbar, el video de presentación, el catálogo de productos y el footer.</li>
  <br>
    <li><b>"/nosotros":</b> Renderiza el apartado de "Nosotros", donde se ubica la información de la empresa y los valores de la misma.</li>
  <br>
    <li><b>"/cart":</b> Por esta ruta se accede al carrito de compras. Si está vacio invita al cliente a explorar los productos y en caso de contener productos, permite la interacción con los mismos, ya sea eliminandolos individualmente, eliminarlos en conjunto o confirmar la compra. </li>
  <br>
    <li><b>"/checkout":</b> Como bien indica su nombre el checkout se renderiza solo al momento de confirmar el deseo de concretar la compra. No puede accederse a él si el carrito de compras se encuentra vacio, en caso de intentarlo lo redirigirá automáticamente a la página de inicio.</li> 
  <br>
    <li><b>"/productos/:categoryId"</b> Esta ruta indica que los productos se filtran por categoría. Hay 3 de ellas:</li>
  <br>
    <ul>  
      <li><b>"/productos/hombre":</b> Muestra solo los productos coincidentes con la categoría "Hombre".</li>
      <li><b>"/productos/mujer":</b> Muestra solo los productos coincidentes con la categoría "Mujer".</li>
      <li><b>"/productos/niños":</b> Muestra solo los productos coincidentes con la categoría "Niños".</li>   
    </ul>
  <br>
    <li><b>"/detail/:itemId":</b> Esta ruta lleva al detalle de cada producto. En la misma se encuentra una card de producto + un accordion con información como: Descripción, Destacado, Origen y Colores. Cada producto contiene la información especifica a su modelo.</li>
  <br>  
    <li><b>"*":</b> Esta ruta es la ruta resignada para el Error 404. Si se indica en la navegación una ruta incorrecta o una ruta que no está definida, se le redireccionará a esta página que le facilitará la vuelta al inicio. Mismo llegará a esta ruta si por error tipea un código de producto inexistente.</li>
</ol>

<b>(Responsive Design).</b>  
<h2>Lenguajes utilizados:</h2>
<ul>
    <li>JavaScript (React Js)</li>
    <li>SCSS</li>
    <li>HTML</li>
</ul>
<p>Nota: Uso de framework <b>Bootstrap</b> en su versión v5.0 y <b>Firebase.</b></p>
<p> - Requiere ser linkeado con biblioteca JavaScript. </p>
<p> - Requiere instalación de NodeJs. </p>

<h2> Inicialización del proyecto</h2>
<ol>
  <li>Clonar el repositorio: Abre la terminal y ejecuta git clone url_del_repositorio</li>
<br>
  <li>Navega al directorio del proyecto: Ejecuta el comando cd nombre_del_directorio</li>
 <br>
    <li>Instala las dependencias: npm install</li>
  <br>
    <li>Inicializar la aplicación: npm start</li>
</ol>
<p>Nota: Estos pasos asumen que ya tienes instalado Node.js y npm en tu computadora. Si no es así, deberás instalarlos antes de seguir los pasos.</p>

<h2>Distintos componentes</h2>
<p> El proyecto está compuesto por distintos de los cuales solo nombraré algunos:</p>
<ul>
<li>AccordionDetail: Es el accordion utilizado para brindar los detalles especificos de cada producto.</li>
<li>Banner: Dentro del mismo se realiza la presentación principal de la página y también hace llamado a los productos.</li>
<li>Cart: Es aquel componente donde se encuentran las tarjetas de los productos. </li>
<li>CartWidget: Se encuentra el carro de compras y el contador respectivo que indica cuantos productos se encuentran dentro del carrito. Si el carrito no tiene productos, el componente permanecerá oculto y aparecerá con una transición cuando se agreguen los mismos.</p>
<li>Checkout: Se accede a él solo cuando se confirma la compra, dentro del mismo se encuentra el formulario de compra.</li>
<li>Counter: Dentro de este componente está realizado como bien indica su nombre el counter, que permite decidir cuantos productos quieren ser agregados al carrito. Estos se encuentran condicionados por su la cantidad de stock disponible.</li>  
<li>Spinner: Dentro de este componente está realizado el spinner que se muestra tanto en el inicio como en resto de vistas de la página, a excepción de /nosotros.</li>
  <br>
<p> Además de todos los mencionados hay muchos más componentes tales como Errror404, Footer, ItemDetail, ItemDetailContainer, ItemListContainer, NavBar, Nosotros, Products, ProductsList y VideoBanner, cada uno cumple una función distinta pero escencial para el funcionamiento óptimo de la aplicación.</p>  
</ul> 
<h2> Vista previa de la página</h2>

[![Site-oficial-de-JBS-Zapatillas-Mozilla-Firefox-17-7-2023-02-18-52.png](https://i.postimg.cc/8cZC9zXn/Site-oficial-de-JBS-Zapatillas-Mozilla-Firefox-17-7-2023-02-18-52.png)](https://postimg.cc/64GwGtXd)


[![Site-oficial-de-JBS-Zapatillas-Mozilla-Firefox-17-7-2023-02-20-32.png](https://i.postimg.cc/jSTfqF44/Site-oficial-de-JBS-Zapatillas-Mozilla-Firefox-17-7-2023-02-20-32.png)](https://postimg.cc/F7PzDGqY)


[![Site-oficial-de-JBS-Zapatillas-Mozilla-Firefox-17-7-2023-02-22-01.png](https://i.postimg.cc/NGr26cNx/Site-oficial-de-JBS-Zapatillas-Mozilla-Firefox-17-7-2023-02-22-01.png)](https://postimg.cc/JtMh89Cy)

[![Site-oficial-de-JBS-Zapatillas-Mozilla-Firefox-17-7-2023-02-21-09.png](https://i.postimg.cc/zvWL8CLQ/Site-oficial-de-JBS-Zapatillas-Mozilla-Firefox-17-7-2023-02-21-09.png)](https://postimg.cc/wRqxksQ5)

[![Site-oficial-de-JBS-Zapatillas-Mozilla-Firefox-17-7-2023-02-22-29.png](https://i.postimg.cc/wv1yb89g/Site-oficial-de-JBS-Zapatillas-Mozilla-Firefox-17-7-2023-02-22-29.png)](https://postimg.cc/47Txm0KS)

[![Site-oficial-de-JBS-Zapatillas-Mozilla-Firefox-17-7-2023-02-22-51.png](https://i.postimg.cc/HsX5ggXL/Site-oficial-de-JBS-Zapatillas-Mozilla-Firefox-17-7-2023-02-22-51.png)](https://postimg.cc/Vds5q27y)

[![Site-oficial-de-JBS-Zapatillas-Mozilla-Firefox-17-7-2023-02-23-13.png](https://i.postimg.cc/3J549cVQ/Site-oficial-de-JBS-Zapatillas-Mozilla-Firefox-17-7-2023-02-23-13.png)](https://postimg.cc/6TcppYBM)

[![Site-oficial-de-JBS-Zapatillas-Mozilla-Firefox-17-7-2023-02-23-41.png](https://i.postimg.cc/28QqtxNb/Site-oficial-de-JBS-Zapatillas-Mozilla-Firefox-17-7-2023-02-23-41.png)](https://postimg.cc/rKpF0xmM)

<p>
  ©2023<b>BESSE</b>
</p>  
