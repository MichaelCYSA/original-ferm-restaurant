import { NextApiRequest, NextApiResponse } from "next";
import { parseCookies } from "nookies";

export const authCookieName = "authToken";
export const maxAge = 14400;

export default function withAuth(
  handler = () => ({}),
  disableAccessIfAuth = false
) {
  return async ({ req }: { req: NextApiRequest; res: NextApiResponse }) => {
    const token = parseCookies({ req })[authCookieName] || null;

    if ((!disableAccessIfAuth && !token) || (token && disableAccessIfAuth)) {
      return {
        redirect: {
          permanent: false,
          destination: !disableAccessIfAuth ? "/" : "/admin",
        },
      };
    }

    const result = await handler();

    return {
      props: {
        token,
        ...result,
      },
    };
  };
}
