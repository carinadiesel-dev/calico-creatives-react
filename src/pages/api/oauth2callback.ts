import {NextApiHandler} from 'next'
import {getOAuth2Client, Token} from '@/server/lib/gmailOAuth2'

const handler: NextApiHandler = async (req, res) => {
  const { code, scope } = req.query;

  if(!code || typeof code !== "string") {
    throw new Error("Code is not set");
  }

  const oath2Client = getOAuth2Client();
  const { tokens } = await oath2Client.getToken(code);
  Token.set(tokens);
  console.log("Updated token", Token.get());

  res.redirect("/");
}

export default handler;