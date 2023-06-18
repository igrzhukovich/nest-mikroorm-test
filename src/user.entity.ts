import { Entity, PrimaryKey, Property } from '@mikro-orm/core';

@Entity()
export class User {
    @PrimaryKey()
    id!: number;

    @Property()
    email!: string;

    @Property()
    password!: string;

    @Property({ onUpdate: () => new Date() })
    updatedAt = new Date();

    @Property({ onCreate: () => new Date() })
    createdAt = new Date();

    constructor(email: string, password: string) {
        this.email = email;
        this.password = password;
    }
}
