import { Certificate } from '../entities/certificate.entity';
import { User } from '../entities/user.entity';
import { TypeOrmModuleOptions } from '@nestjs/typeorm';

export const typeOrmConfig: TypeOrmModuleOptions = {
  type: 'postgres',
  host: 'localhost',
  port: 7893,
  username: 'postgres',
  password: '1234',
  database: 'agreena',
  autoLoadEntities: true,
  synchronize: true,
  entities: [Certificate, User],
  migrations: [__dirname + '/../database/migrations/*{.ts,.js}'],
  // cli: {
  //   migrationsDir: __dirname + '/../database/migrations',
  // },
};
