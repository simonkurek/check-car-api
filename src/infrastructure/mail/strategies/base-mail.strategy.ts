import { BaseMail } from '../entities/base-mail.entity';

export abstract class BaseMailStrategy {
  abstract getNewAddress(): Promise<BaseMail>;
  abstract checkMessages(email: BaseMail);
}
