import { Box } from '@mui/material';

const MainContainer = ({ children }: { children: JSX.Element }) => {
    return (
        <Box
            sx={{
                width: 1,
                maxWidth: '1126px'
            }}
        >{children}</Box>
    )
}

export default MainContainer