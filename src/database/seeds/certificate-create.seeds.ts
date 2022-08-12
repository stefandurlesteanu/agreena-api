import { Factory, Seeder } from 'typeorm-seeding';
import { Connection } from 'typeorm';
import { Certificate } from '../../entities/certificate.entity';

export class CertificateCreateSeeds implements Seeder {
  public async run(factory: Factory, connection: Connection): Promise<void> {
    await factory(Certificate)().createMany(100);
  }
}
