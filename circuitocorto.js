let monitor = "monitor";
let mouse = "mouse"
let precioMonitor = 60;
let precioMouse = 10;

const producto = prompt("Indica si queres comprar un monitor o un mouse");

producto === mouse && alert(`tenes que pagar ${precioMouse}`);
producto === monitor && alert(`tenes que pagar ${precioMonitor}`);

(producto !== monitor && producto !== mouse) 
  && alert("No elegiste ningun producto")