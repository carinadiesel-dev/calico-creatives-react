import {NextApiHandler} from 'next'
import {getOAuth2Client} from '@/server/lib/gmailOAuth2'

const handler: NextApiHandler = (req, res) => {
  const oAuth2Client = getOAuth2Client();
  const GMAIL_SCOPES = ['https://www.googleapis.com/auth/gmail.send'];

  const url = oAuth2Client.generateAuthUrl({
    access_type: 'offline',
    prompt: 'consent',
    scope: GMAIL_SCOPES,
  });

  res.redirect(url);
}

export default handler;