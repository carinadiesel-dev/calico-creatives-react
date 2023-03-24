import { google } from 'googleapis'
import {getOAuth2Client, Token} from '@/server/lib/gmailOAuth2'
import MailComposer from 'nodemailer/lib/mail-composer'
import Mail from 'nodemailer/lib/mailer'

const getGmailService = () => {
  const oAuth2Client = getOAuth2Client();
  oAuth2Client.setCredentials(Token.get());
  return google.gmail({ version: 'v1', auth: oAuth2Client });
};

const encodeMessage = (message: Buffer) => {
  return Buffer.from(message).toString('base64').replace(/\+/g, '-').replace(/\//g, '_').replace(/=+$/, '');
};

const createMail = async (options: Mail.Options) => {
  const mailComposer = new MailComposer(options);
  const message = await mailComposer.compile().build();
  return encodeMessage(message);
};

const sendMail = async (options: Mail.Options) => {
  const gmail = getGmailService();
  const rawMessage = await createMail(options);

  const { data: { id } = {} } = await gmail.users.messages.send({
    userId: 'me',
    requestBody: {
      raw: rawMessage
    }
  });

  return id;
};

export default sendMail;