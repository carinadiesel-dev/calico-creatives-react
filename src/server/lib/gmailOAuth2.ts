import {google} from 'googleapis'
import path from 'path'
import fs from 'fs'
import {Credentials} from 'google-auth-library/build/src/auth/credentials'

const { GOOGLE_CLIENT_SECRET, GOOGLE_CLIENT_ID, REDIRECT_URI } = process.env;

export const Token = {
  _token: {
    "access_token": "",
    "refresh_token": "",
    "scope": "",
    "token_type": "",
    "expiry_date": 0
  },
  get(): Credentials {
    return process.env.GOOGLE_TOKEN ? JSON.parse(process.env.GOOGLE_TOKEN):this._token;
  },
  set(token: Credentials) {
    process.env.GOOGLE_TOKEN = JSON.stringify(token);
  }
}

/**
 * This part is not working yet. The token should be stored some other way.
 * Containerized env are ephemeral. Storing a file like this probably needs
 * volumes mounted. Try DB instead.
 */
const tokenPath = path.join(__dirname, 'token.json');
// On startup check if there's a token written to disk
try {
  const data = fs.readFileSync(tokenPath);
  // Check what the buffer looks like
  console.log(data);
  // TODO: parse data and merge into _token
} catch (err: any) {
  // File doesn't exist. Do nothing.
}

export const getOAuth2Client = () => {
  if(!GOOGLE_CLIENT_SECRET) {
    throw new Error("GOOGLE_CLIENT_SECRET must be set in the environment");
  }
  if(!GOOGLE_CLIENT_ID) {
    throw new Error("GOOGLE_CLIENT_ID must be set in the environment");
  }
  if(!REDIRECT_URI) {
    throw new Error("REDIRECT_URI must be set in the environment");
  }

  return new google.auth.OAuth2(GOOGLE_CLIENT_ID, GOOGLE_CLIENT_SECRET, REDIRECT_URI);
}