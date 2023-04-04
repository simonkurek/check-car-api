import { Injectable } from '@nestjs/common';
import { MailService } from './mail/mail.service';

@Injectable()
export class InfrastructureService {
  constructor(private readonly mailService: MailService) {}

  public async plateToVin(plate: string) {
    // check if are account with free credits
    // if not, create new account
    console.log('Creating new account...');
    const newEmailAddressEntity = await this.mailService.getNewAddress();
    console.log('New account created:', newEmailAddressEntity);
    // check if are messages with given mail (refresh rate 500ms)
    console.log('Checking messages...');
    const messages = await this.mailService.getMessages(newEmailAddressEntity);
    console.log('Messages:', messages);
  }
}
