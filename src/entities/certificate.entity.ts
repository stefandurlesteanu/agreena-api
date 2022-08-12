import {
  BaseEntity,
  Column,
  Entity,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { StatusEnum } from '../enums/status.enum';
import { User } from './user.entity';

@Entity('certificates')
export class Certificate extends BaseEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  country: string;

  @Column({
    type: 'enum',
    enum: StatusEnum,
    default: StatusEnum.AVAILABLE,
  })
  status: StatusEnum;

  @Column()
  owner: string;

  @ManyToOne(() => User, (user) => user.certificates)
  user: User;
}
