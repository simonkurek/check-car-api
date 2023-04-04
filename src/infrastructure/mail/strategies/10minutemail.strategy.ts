import { Injectable } from '@nestjs/common';
import { BaseMailStrategy } from './base-mail.strategy';
import { TenMinuteMailEntity } from '../entities/10minutemail.entity';
import { EmailContent } from '../entities/email-content';

@Injectable()
export class TenMinuteMailStrategy extends BaseMailStrategy {
  async getNewAddress() {
    const emailAddressResponse = await fetch(
      'https://10minutemail.com/session/address',
    );
    // get cookies from response
    const cookies = emailAddressResponse.headers.get('set-cookie');
    const newEmailAddress = await emailAddressResponse.json();
    return new TenMinuteMailEntity(newEmailAddress, cookies);
  }
  async checkMessages(email: TenMinuteMailEntity): Promise<EmailContent[]> {
    // include cookies in request
    const response = await fetch('https://10minutemail.com/messages/', {
      headers: {
        cookie: email.getCookie(),
      },
    });
    const messages = (await response.json()) as EmailContent[];
    // const messages: EmailContent[] = [];
    // messagesData.forEach((message: any) => {
    //   messages.push(EmailContent.fromJson(message));
    // });
    return messages;
  }
}
