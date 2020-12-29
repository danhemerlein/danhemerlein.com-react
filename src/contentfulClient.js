import * as contentful from 'contentful';
import keys from './config';

const client = contentful.createClient({
  space: keys.spaceId,
  accessToken: keys.accessToken
})

export default client;
