import { Injectable } from '@nestjs/common';
import { Certificate } from '../../entities/certificate.entity';
import { StatusEnum } from '../../enums/status.enum';

@Injectable()
export class CertificateService {
  async getAvailable(): Promise<Certificate[]> {
    return Certificate.find({ where: { status: StatusEnum.AVAILABLE } });
  }

  async transferOwnership(id: string, newOwner: string): Promise<Certificate> {
    const certificate = await Certificate.findOne({ where: { id } });
    certificate.owner = newOwner;
    certificate.status =
      certificate.status === StatusEnum.AVAILABLE
        ? StatusEnum.OWNED
        : StatusEnum.TRANSFERRED;
    return await certificate.save();
  }
}
