import { define } from 'typeorm-seeding';
import { User } from '../../entities/user.entity';
import { randEmail, randFullName, randPassword } from '@ngneat/falso';

define(User, () => {
  const user = new User();

  user.email = randEmail();
  user.password = randPassword();
  user.name = randFullName();

  return user;
});
