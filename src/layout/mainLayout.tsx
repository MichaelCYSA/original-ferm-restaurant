import Box from '@mui/material/Box';

import Footer from './footer';
import Header from './header';

const MainLayout = ({ children }: { children: JSX.Element }) => {
    return (
        <Box maxWidth={'1126px'} width={1} m={'0 auto'}>
            <Box width={1}>
                <Header />
                <main style={{ minHeight: '600px' }}>{children}</main>
                <Footer />
            </Box>
        </Box>
    )
}

export default MainLayout