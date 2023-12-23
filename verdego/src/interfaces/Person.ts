export interface IPerson {
    id?:        number | null; // el ? significa que es opcional
    name:       string;
    address:    string;
    phone:      number;
    createdAt:  Date | null;
    updatedAt:  Date | null;
}

export class Person implements IPerson {
    public id:         null;
    public name:       string;
    public address:    string;
    public phone:      number;
    public createdAt!: Date | null; // el ! significa que no puede ser null
    public updatedAt!: Date | null;

    // Sirve para crear un objeto de tipo Person con datos vacios
    constructor() {
        this.id         = null;
        this.name       = "";
        this.address    = "";
        this.phone      = 0;
        this.createdAt  = null;
        this.updatedAt  = null;
    }
}