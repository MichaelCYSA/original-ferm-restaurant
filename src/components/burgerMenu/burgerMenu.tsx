import { headerLinks } from '@/constants/links';
import { Typography } from '@mui/material';

import style from './burger.module.css';

const BurgerMenu = () => {
    return (
        <div className={style.menuToggle}>
            <input type="checkbox" />
            <span></span>
            <span></span>
            <span></span>
            <ul className={style.menu}>
                {
                    headerLinks.map(link => (
                        <a href={link.link} key={link.name}>
                            <Typography
                                variant='h2'
                                sx={{
                                    color: 'white',
                                    fontSize: '40px',
                                    '&:hover': { color: '#9FCD57' }
                                }}>{
                                    link.name
                                }
                            </Typography>
                        </a>
                    ))
                }
            </ul>
        </div>
    );
}

export default BurgerMenu