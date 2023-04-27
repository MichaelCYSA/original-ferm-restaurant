import { authCookieName, maxAge } from '@/auth/auth';
import { useRouter } from 'next/router';
import { useCookies } from 'react-cookie';

export const useAuth = () => {
    
    const [cookies, setCookie, removeCookie] = useCookies([authCookieName]);
    const router = useRouter()

    const setAccess = (token: string) => {
        setCookie(authCookieName, token, {maxAge, path: "/" })
        router.push('/admin')
    }
    const logOut = () => {
        removeCookie(authCookieName, {path: '/'})
        router.push('/')
    }
    return { 
        token: cookies?.[authCookieName] || null,
        setAccess,
        logOut
    }
}