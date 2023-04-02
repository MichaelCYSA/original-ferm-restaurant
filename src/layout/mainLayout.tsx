import Box from '@mui/material/Box';

import Footer from './footer';
import Header from './header';

const MainLayout = ({ children }: { children: JSX.Element }) => {
    return (
        <Box maxWidth={'1126px'} minWidth={'475px'} width={1} m={'0 auto'} pl={3} pr={3}>
            <Box width={1}>
                <Header />
                <main style={{ minHeight: '600px' }}>{children}</main>
                <Footer />
            </Box>
        </Box>
    )
}

export default MainLayout