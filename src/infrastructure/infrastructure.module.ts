import { Module } from '@nestjs/common';
import { MailModule } from './mail/mail.module';
import { InfrastructureService } from './infrastructure.service';
import { MailToLinkPipe } from './pipes/mail-to-link.pipe';
import { TraMailToLinkPipe } from './pipes/tra-mail-to-link.pipe';

@Module({
  imports: [MailModule],
  providers: [
    InfrastructureService,
    { provide: MailToLinkPipe, useClass: TraMailToLinkPipe },
  ],
  exports: [InfrastructureService],
})
export class InfrastructureModule {}
