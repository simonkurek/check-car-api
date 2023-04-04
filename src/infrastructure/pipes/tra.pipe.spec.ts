import { EmailContent } from '../mail/entities/email-content';
import { TraMailToLinkPipe } from './tra-mail-to-link.pipe';

const emailContent =
  'Drogi użytkowniku,\r\n' +
  '\r\n' +
  'Dziękujemy za zainteresowanie naszym API do rejestracji samochodów.\r\n' +
  'Czy możesz kliknąć poniższy link, aby zweryfikować swój adres e-mail:\r\n' +
  '\r\n' +
  'https://www.tablicarejestracyjnaapi.pl/verify.aspx?u=testefgwjosndklcm&h=gOrjoMrE2y3mR%2fO3TgKJMyIyenM%3d\r\n' +
  '\r\n' +
  'Po zweryfikowaniu adresu e-mail, otrzymasz 10 darmowych kredytów do przetestowania API.\r\n' +
  'Jeśli jeszcze tego nie zrobiłeś, to możesz pobrać naszą dokumentację tutaj:\r\n' +
  '\r\n' +
  'https://www.TablicaRejestracyjnaAPI.pl/data/doc.aspx\r\n' +
  '\r\n' +
  'Dziękuję.\r\n';

const emailContent2 =
  'Drogi użytkowniku,\r\n' +
  '\r\n' +
  'Dziękujemy za zainteresowanie naszym API do rejestracji samochodów.\r\n' +
  'Czy możesz kliknąć poniższy link, aby zweryfikować swój adres e-mail:\r\n' +
  '\r\n' +
  'https://www.tablicarejestracyjnaapi.pl/verify.aspx?u=dzcoczuzfrfhwlqsqu@tcwlm.com&h=IIBqE4UXM9j1SS4y7IXXE%2f%2bzEBI%3d\r\n' +
  '\r\n' +
  'Po zweryfikowaniu adresu e-mail, otrzymasz 10 darmowych kredytów do przetestowania API.\r\n' +
  'Jeśli jeszcze tego nie zrobiłeś, to możesz pobrać naszą dokumentację tutaj:\r\n' +
  '\r\n' +
  'https://www.TablicaRejestracyjnaAPI.pl/data/doc.aspx\r\n' +
  '\r\n' +
  'Dziękuję.\r\n';

const testEmailContent = new EmailContent(
  null,
  null,
  null,
  null,
  null,
  null,
  null,
  null,
  null,
  emailContent,
  emailContent,
  null,
  null,
  null,
  null,
  null,
);

describe('Tra mail-to-link pipe', () => {
  it('should extract activation link from email content', () => {
    expect(new TraMailToLinkPipe().transform(testEmailContent)).toBe(
      'https://www.tablicarejestracyjnaapi.pl/verify.aspx?u=testefgwjosndklcm&h=gOrjoMrE2y3mR%2fO3TgKJMyIyenM%3d' as string,
    );
  });
});
