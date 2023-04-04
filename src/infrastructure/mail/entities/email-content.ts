export class EmailContent {
  readonly read: boolean;
  readonly expanded: boolean;
  readonly forwarded: boolean;
  readonly repliedTo: boolean;
  readonly sentDate: string;
  readonly sentDateFormatted: string;
  readonly sender: string;
  readonly from: string;
  readonly subject: string;
  readonly bodyPlainText: string;
  readonly bodyHtmlContent: string;
  readonly contentType: string;
  readonly bodyPreview: string;
  readonly id: string;
  readonly recipient: string;
  readonly attachments: string[];

  constructor(
    read: boolean,
    expanded: boolean,
    forwarded: boolean,
    repliedTo: boolean,
    sentDate: string,
    sentDateFormatted: string,
    sender: string,
    from: string,
    subject: string,
    bodyPlainText: string,
    bodyHtmlContent: string,
    contentType: string,
    bodyPreview: string,
    id: string,
    recipient: string,
    attachments: string[],
  ) {
    this.read = read;
    this.expanded = expanded;
    this.forwarded = forwarded;
    this.repliedTo = repliedTo;
    this.sentDate = sentDate;
    this.sentDateFormatted = sentDateFormatted;
    this.sender = sender;
    this.from = from;
    this.subject = subject;
    this.bodyPlainText = bodyPlainText;
    this.bodyHtmlContent = bodyHtmlContent;
    this.contentType = contentType;
    this.bodyPreview = bodyPreview;
    this.id = id;
    this.recipient = recipient;
    this.attachments = attachments;
  }

  public static fromJson(json: any): EmailContent {
    return new EmailContent(
      json.read,
      json.expanded,
      json.forwarded,
      json.repliedTo,
      json.sentDate,
      json.sentDateFormatted,
      json.sender,
      json.from,
      json.subject,
      json.bodyPlainText,
      json.bodyHtmlContent,
      json.contentType,
      json.bodyPreview,
      json.id,
      json.recipient,
      json.attachments,
    );
  }
}
