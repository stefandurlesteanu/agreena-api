import {
  Controller,
  Get,
  Param,
  Patch,
  Query,
  UseGuards,
} from '@nestjs/common';
import { CertificateService } from './certificate.service';
import { Certificate } from '../../entities/certificate.entity';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';

@Controller('certificates')
export class CertificateController {
  constructor(private certificateService: CertificateService) {}

  @UseGuards(JwtAuthGuard)
  @Get('')
  async getAvailable(): Promise<Certificate[]> {
    return await this.certificateService.getAvailable();
  }

  @UseGuards(JwtAuthGuard)
  @Patch('/:id/transfer')
  async transferCertificate(
    @Query('owner') owner: string,
    @Param('id') id: string,
  ): Promise<Certificate> {
    return this.certificateService.transferOwnership(id, owner);
  }
}
