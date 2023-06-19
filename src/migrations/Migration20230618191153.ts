import { Migration } from '@mikro-orm/migrations';

export class Migration20230618191153 extends Migration {

  async up(): Promise<void> {
    this.addSql('create table "user" ("id" serial primary key, "email" varchar(255) not null, "password" varchar(255) not null, "updated_at" varchar(255) not null, "created_at" varchar(255) not null);');
  }

}
