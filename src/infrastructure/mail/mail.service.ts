import { Injectable } from '@nestjs/common';
import { BaseMailStrategy } from './strategies/base-mail.strategy';
import { BaseMail } from './entities/base-mail.entity';
import { EmailContent } from './entities/email-content';

@Injectable()
export class MailService {
  constructor(private readonly mailStrategy: BaseMailStrategy) {}

  async getNewAddress(): Promise<BaseMail> {
    return await this.mailStrategy.getNewAddress();
  }

  async checkMessages(email: BaseMail): Promise<EmailContent[]> {
    return await this.mailStrategy.checkMessages(email);
  }

  async getMessages(email: BaseMail) {
    // @TODO set timeout to 15s
    await new Promise((resolve) => setTimeout(resolve, 15000));
    for (let i = 0; i < 10; i++) {
      const messages = await this.checkMessages(email);
      if (messages.length > 0) {
        return messages;
      }
      await new Promise((resolve) => setTimeout(resolve, 5000));
    }
  }
}
