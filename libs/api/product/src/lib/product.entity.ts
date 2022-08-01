import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('product_tb')
export class ProductEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ name: 'name' })
  name: string;

  @Column({ name: 'description' })
  description: string;
}
