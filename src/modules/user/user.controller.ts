import { Body, Controller, Get, Param, Post, UseGuards } from '@nestjs/common';
import { UserService } from './user.service';
import { SETTINGS } from '../../utils/user.utils';
import { UserSignupReqDto } from '../../dto/user-signup-req.dto';
import { User } from '../../entities/user.entity';
import { Certificate } from '../../entities/certificate.entity';
import { LocalAuthGuard } from '../auth/local-auth.guard';
import { AuthService } from '../auth/auth.service';
import { UserLoginDto } from '../../dto/user-login.dto';
import { ReqUser } from '../../decorators/user.decorator';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';

@Controller('user')
export class UserController {
  constructor(
    private userService: UserService,
    private authService: AuthService,
  ) {}

  @UseGuards(LocalAuthGuard)
  @Post('login')
  async login(@ReqUser() user: UserLoginDto): Promise<any> {
    return this.authService.login(user);
  }

  @Post('signup')
  async createUser(
    @Body(SETTINGS.VALIDATION_PIPE)
    newUser: UserSignupReqDto,
  ): Promise<User> {
    return await this.userService.createUser(newUser);
  }

  @UseGuards(JwtAuthGuard)
  @Get('/:id/certificates')
  async getCertificates(@Param('id') id: string): Promise<Certificate[]> {
    return await this.userService.getUserCertificates(id);
  }
}
