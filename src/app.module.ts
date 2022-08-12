import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { typeormConfig } from './config/ormconfig';
import { User } from './entities/user.entity';
import { Certificate } from './entities/certificate.entity';
import { ConfigModule } from '@nestjs/config';
import { UserModule } from './modules/user/user.module';
import { CertificateModule } from './modules/certificate/certificate.module';
import { AuthModule } from './modules/auth/auth.module';

@Module({
  imports: [
    TypeOrmModule.forRoot(typeormConfig),
    TypeOrmModule.forFeature([User, Certificate]),
    ConfigModule.forRoot(),
    UserModule,
    CertificateModule,
    AuthModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
