import { NextApiRequest, NextApiResponse } from 'next';
import { parseCookies } from 'nookies';

export const authCookieName = 'authToken'
export const maxAge = 14400
  
export default function withAuth(handler = () => ({})) {
    return async ({req, res}: {req: NextApiRequest, res: NextApiResponse}) => {
      const token = parseCookies({req})[authCookieName]

      if (!token) {
        res.writeHead(302, { Location: '/' });
        res.end();
      }

      const result = await handler()
      
      return { 
         props: {
            token,
            ...result
         }
      }
      
    };
}