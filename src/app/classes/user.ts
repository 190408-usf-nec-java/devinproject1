export class User {
    firstname: string;
    lastname: string;
	email: string;
    role: string;
    id: number;
    constructor(firstname: string, lastname: string, email: string, role: string, id: number) {
        this.firstname = firstname;
        this.email = email;
        this.lastname = lastname;
        this.role = role;
        this.id = id;
    }
}
