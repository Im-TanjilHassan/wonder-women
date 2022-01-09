import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import logo from '../../../images/logo/logo1.png'
import { Link } from 'react-router-dom';
import '../navigation/navigation.css'
import useAuth from '../../../hooks/useAuth';
import { CircularProgress } from '@mui/material';

const pages = ['Services', 'Products', 'About Us'];

const Navigation = () => {
    const [anchorElNav, setAnchorElNav] = React.useState(null);
    const [anchorElUser, setAnchorElUser] = React.useState(null);

    const { user, logout, loading } = useAuth()

    const handleOpenNavMenu = (event) => {
        setAnchorElNav(event.currentTarget);
    };
    const handleOpenUserMenu = (event) => {
        setAnchorElUser(event.currentTarget);
    };

    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };

    const handleCloseUserMenu = () => {
        setAnchorElUser(null);
    };

    return (
        <AppBar sx={{ position: "static", backgroundColor: '#e63e70' }}>
            <Container maxWidth="xl">
                <Toolbar disableGutters>
                    <Typography
                        component="div"
                        sx={{ mr: 2, display: { xs: 'none', md: 'flex' } }}
                    >
                        <img style={{ width: '100px', padding: '8px' }} src={logo} alt="website logo" />
                    </Typography>

                    <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
                        <IconButton
                            size="large"
                            aria-label="account of current user"
                            aria-controls="menu-appbar"
                            aria-haspopup="true"
                            onClick={handleOpenNavMenu}
                            color="inherit"
                        >
                            <MenuIcon />
                        </IconButton>
                        <Menu
                            id="menu-appbar"
                            anchorEl={anchorElNav}
                            anchorOrigin={{
                                vertical: 'bottom',
                                horizontal: 'left',
                            }}
                            keepMounted
                            transformOrigin={{
                                vertical: 'top',
                                horizontal: 'left',
                            }}
                            open={Boolean(anchorElNav)}
                            onClose={handleCloseNavMenu}
                            sx={{
                                display: { xs: 'block', md: 'none' },
                            }}
                        >
                            {pages.map((page) => (
                                <MenuItem key={page} onClick={handleCloseNavMenu}>
                                    <Typography className='mobMenu'>{page}</Typography>
                                </MenuItem>
                            ))}
                        </Menu>
                    </Box>
                    <Typography
                        component="div"
                        sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}
                    >
                        <img className='logo' src={logo} alt="" />
                    </Typography>
                    <Box sx={{ flexGrow: 1, marginLeft: '25%', display: { xs: 'none', md: 'flex' } }}>
                        <Link to='/home' className='menuLink'>
                            <Button className='menuBtn' variant="text">Home</Button>
                        </Link>
                        <Link to='/service' className='menuLink'>
                            <Button className='menuBtn' variant="text">Services</Button>
                        </Link>
                        <Link to='/product' className='menuLink'>
                            <Button className='menuBtn' variant="text">Products</Button>
                        </Link>
                        <Link to='/about' className='menuLink'>
                            <Button className='menuBtn' variant="text">About Us</Button>
                        </Link>
                    </Box>

                    <Box sx={{ flexGrow: 0 }}>
                        {user?.email ?
                            <Tooltip title="Open settings">
                                <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                                    <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
                                </IconButton>
                            </Tooltip>
                            :
                            <Box sx={{ float: 'right' }}>
                                <Link to='/login' className='menuLink'>
                                    <Button className='menuBtn' variant="text">Log-In</Button>
                                </Link>
                                <Link to='/register' className='menuLink'>
                                    <Button className='menuBtn' variant="text">Register</Button>
                                </Link>
                                <Typography>{user.email}</Typography>
                            </Box>
                        }
                        <Menu
                            sx={{ mt: '45px' }}
                            id="menu-appbar"
                            anchorEl={anchorElUser}
                            anchorOrigin={{
                                vertical: 'top',
                                horizontal: 'right',
                            }}
                            keepMounted
                            transformOrigin={{
                                vertical: 'top',
                                horizontal: 'right',
                            }}
                            open={Boolean(anchorElUser)}
                            onClose={handleCloseUserMenu}
                        >
                            {loading ?
                                <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column' }}>
                                    <CircularProgress className='spinner' />
                                    <Typography variant='p'>Wait a sec...</Typography>
                                </Box>
                                :
                                <Box className='deskMenu' onClick={handleCloseUserMenu}>
                                    <Link to='/profile' className='user-menuLink'>
                                        <Typography className='user-menu'>Profile</Typography>
                                    </Link>
                                    <Link to='/dashboard' className='user-menuLink'>
                                        <Typography className='user-menu'>Dashboard</Typography>
                                    </Link>
                                    <Typography className='user-menu' onClick={logout}>Log-out</Typography>
                                </Box>}
                        </Menu>
                    </Box>
                </Toolbar >
            </Container >
        </AppBar >
    );
};
export default Navigation;