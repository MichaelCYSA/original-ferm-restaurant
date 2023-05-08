import { Translated } from '@/lang/languageContext';
import DeleteIcon from '@mui/icons-material/Delete';
import { Box, Button, IconButton, Typography, useTheme } from '@mui/material';
import { useState } from 'react';

import FullScreenModalWrapper from '../fullScreenModalWrapper/fullScreenModalWrapper';


const DeleteModal = ({ deleteFn, isLoading }: { deleteFn: () => void, isLoading?: boolean }) => {
    const [open, setOpen] = useState(false)

    const toggleDelete = () => setOpen(prev => !prev)
    const theme = useTheme()

    const handleDelete = () => {
        deleteFn()
        toggleDelete()
    }

    return (
        <>
            <IconButton
                disabled={Boolean(isLoading)}
                onClick={toggleDelete}
                sx={{ background: theme.palette.customColor.main }}
            >
                <DeleteIcon sx={{ color: "red" }} />
            </IconButton>
            <FullScreenModalWrapper open={open} handleClose={toggleDelete} disableFullScreen>
                <Box width={'275px'} p={'16px 8px'} display={'flex'} flexDirection={'column'} gap={3}>
                    <Typography variant='h3'>
                        {Translated('are_you_sure_you_want_to_delete')}
                    </Typography>
                    <Box display={'flex'} gap={3}>
                        <Button onClick={handleDelete} variant="contained" sx={{ background: 'red' }}>{Translated('yes')}</Button>
                        <Button onClick={toggleDelete} variant="contained">{Translated('no')}</Button>
                    </Box>
                </Box>
            </FullScreenModalWrapper>
        </>
    )
}

export default DeleteModal