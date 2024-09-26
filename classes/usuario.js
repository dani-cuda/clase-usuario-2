class Usuario {

    #pin;

    constructor(nombre, edad, mail) {
        this.nombre = nombre;
        this.edad = edad;
        this.mail = mail;
        this.#pin = 1234;

        this.getPin = () => {
            return this.#pin;
        };

        this.setPin = function(nuevoPin) {
            this.#pin = nuevoPin;
        };
    }

    static crear(nombre, edad, mail) {
        return new Usuario(nombre, edad, mail);
    }

    cambiarPin(pinActual, pinNuevo) {
        
        if (this.getPin() === pinActual) {
            this.setPin(pinNuevo);
            return true;
        } else {
            return false;
        }
    }
}

export default Usuario;