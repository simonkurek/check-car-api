import { Injectable } from '@nestjs/common';
import { MailService } from './mail/mail.service';
import { MailToLinkPipe } from './pipes/mail-to-link.pipe';
import { EmailContent } from './mail/entities/email-content';
import { Link } from './mail/entities/link';

@Injectable()
export class InfrastructureService {
  constructor(
    private readonly mailService: MailService,
    private readonly mailToLinkPipe: MailToLinkPipe,
  ) {}

  public async plateToVin(plate: string) {
    // check if are account with free credits
    // if not, create new account
    console.log('Creating new account...');
    const newEmailAddressEntity = await this.mailService.getNewAddress();
    console.log('New account created:', newEmailAddressEntity);
    // create new "tablica rejestracyjna api" account

    // check if are messages with given mail (refresh rate 500ms)
    console.log('Checking messages...');
    const messages = await this.mailService.getMessages(newEmailAddressEntity);
    const activationLink = this.getLinkFromMessages(messages);
    if (activationLink === null) {
      throw new Error('Cannot find activation link in messages');
    }
  }

  private getLinkFromMessages(messages: EmailContent[]): string | null {
    const links: Link[] = [];
    messages.forEach((message) => {
      console.log('Message:', message);
      try {
        links.push(this.mailToLinkPipe.transform(message));
      } catch (error) {
        console.log('Cannot find link in message:', message);
      }
    });
    // in no message was activation link
    return links.length > 0 ? links[0] : null;
  }
}
