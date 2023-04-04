import { EmailContent } from '../mail/entities/email-content';
import { Link } from '../mail/entities/link';
import { MailToLinkPipe } from './mail-to-link.pipe';

// tablicarejestracyjnaapi.pl mail-to-activation-link pipe
export class TraMailToLinkPipe extends MailToLinkPipe {
  transform(mail: EmailContent): Link {
    try {
      const regexMatches = mail.bodyPlainText.match(
        /https:\/\/www\.tablicarejestracyjnaapi\.pl\/verify\.aspx\?u=[^&]+&h=[^\\]+/gi,
      );
      if (regexMatches[0].includes('\r')) {
        return regexMatches[0].split('\r')[0] as Link;
      } else {
        return regexMatches[0] as Link;
      }
    } catch (error) {
      throw new Error('Cannot find link in mail');
    }
  }
}
