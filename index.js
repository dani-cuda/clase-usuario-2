import Usuario from './classes/usuario.js';

let usuario1 = Usuario.crear("Daniel Cuda", 40, "daniel.cuda.17@gmail.com");

console.log(usuario1.nombre);
console.log(usuario1.edad);
console.log(usuario1.mail);
console.log(usuario1.getPin());

usuario1.cambiarPin(1234, 3456);

console.log(usuario1.nombre);
console.log(usuario1.edad);
console.log(usuario1.mail);
console.log(usuario1.getPin());