import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity()
export class Ropa {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column()
  name!: string;

  @Column("text")
  description!: string;

  @Column("decimal")
  price!: number;
}