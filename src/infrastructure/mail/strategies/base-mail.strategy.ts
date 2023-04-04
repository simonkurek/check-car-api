import { BaseMail } from '../entities/base-mail.entity';
import { EmailContent } from '../entities/email-content';

export abstract class BaseMailStrategy {
  abstract getNewAddress(): Promise<BaseMail>;
  abstract checkMessages(email: BaseMail): Promise<EmailContent[]>;
}
