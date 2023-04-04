import { EmailContent } from '../mail/entities/email-content';
import { Link } from '../mail/entities/link';

export abstract class MailToLinkPipe {
  abstract transform(mail: EmailContent): Link;
}
