import { Module } from '@nestjs/common';
import { MailModule } from './mail/mail.module';
import { InfrastructureService } from './infrastructure.service';

@Module({
  imports: [MailModule],
  providers: [InfrastructureService],
  exports: [InfrastructureService],
})
export class InfrastructureModule {}
