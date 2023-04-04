import { BaseMail } from './base-mail.entity';

export class TenMinuteMailEntity extends BaseMail {
  readonly email: string;
  readonly cookie?: string;

  constructor(email: string, cookie: string) {
    super();
    this.email = email;
    this.cookie = cookie;
  }

  getEmail() {
    return this.email;
  }

  getCookie() {
    return this.cookie;
  }
}
