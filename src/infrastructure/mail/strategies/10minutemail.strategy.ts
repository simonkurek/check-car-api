import { Injectable } from '@nestjs/common';
import { BaseMailStrategy } from './base-mail.strategy';
import { TenMinuteMailEntity } from '../entities/10minutemail.entity';

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
  async checkMessages(email: TenMinuteMailEntity) {
    // include cookies in request
    console.log('email.getCookie():', email.getCookie());
    const response = await fetch('https://10minutemail.com/messages/', {
      headers: {
        cookie: email.getCookie(),
      },
    });
    const messages = await response.json();
    return messages;
  }
}
