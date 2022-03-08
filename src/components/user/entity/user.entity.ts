import { BeforeInsert, Column, Entity, ObjectIdColumn } from 'typeorm';
import { hashSync, genSaltSync } from 'bcrypt';

@Entity({ name: 'users' })
export class User {
  @ObjectIdColumn()
  id: number;

  @Column({
    type: 'string',
    unique: true,
  })
  email: string;

  @Column({
    type: 'string',
  })
  password: string;

  @Column({
    type: 'date',
    default: Date.now()
  })
  createdAt: Date;

  @Column({
    type: 'date',
    default: Date.now()
  })
  updatedAt: string;

  @Column({
    type: 'string',
  })
  userId: string;

  @BeforeInsert()
  async hashPassword() {
    this.password = await hashSync(this.password, genSaltSync(10));
  }
}
