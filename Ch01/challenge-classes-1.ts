/**
 * -----------------------------
 * Challenge 1: Classes
 * -----------------------------
 * 1. Create a User class.
 * 2. Add a firstName, lastName, and email property.
 * 3. Add a get to return fullName.
 * 4. Add a method to check if your email param matches the user's current email.
 */

export class User {
    firstName: string;
    lastName: string;
    email: string;

    get fullName(): string {
        const full = `${this.firstName} ${this.lastName}`
        return full
    }

    emailMatch(email: string): boolean {
        return this.email === email;
    }

}