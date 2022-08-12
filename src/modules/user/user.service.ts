import { Injectable } from '@nestjs/common';
import { UserSignupReqDto } from '../../dto/user-signup-req.dto';
import { User } from '../../entities/user.entity';
import { Certificate } from '../../entities/certificate.entity';

@Injectable()
export class UserService {
  async createUser(newUser: UserSignupReqDto): Promise<User> {
    const user = new User();
    user.email = newUser.email;
    user.name = newUser.name;
    user.password = newUser.password;

    return await user.save();
  }

  async getUserByEmail(email: string): Promise<User | undefined> {
    return User.findOne({ where: { email } });
  }

  async getUserById(id: string): Promise<User | undefined> {
    return User.findOne({ where: { id } });
  }

  async getUserCertificates(id: string): Promise<Certificate[]> {
    const user = await User.findOne({
      where: { id },
      relations: { certificates: true },
    });
    return user.certificates;
  }
}
