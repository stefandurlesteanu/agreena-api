import { define } from 'typeorm-seeding';
import {
  randCountry,
  randEmail,
  randFullName,
  randPassword,
} from '@ngneat/falso';
import { Certificate } from '../../entities/certificate.entity';

define(Certificate, () => {
  const certificate = new Certificate();

  certificate.country = randCountry();

  return certificate;
});
