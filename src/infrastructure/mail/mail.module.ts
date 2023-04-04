import { Module } from '@nestjs/common';
import { MailService } from './mail.service';
import { TenMinuteMailStrategy } from './strategies/10minutemail.strategy';
import { BaseMailStrategy } from './strategies/base-mail.strategy';

@Module({
  providers: [
    MailService,
    { provide: BaseMailStrategy, useClass: TenMinuteMailStrategy },
  ],
  exports: [MailService],
})
export class MailModule {}
