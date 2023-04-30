import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import '../Navbar/Navbar.css'
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { AuthContext } from '../../Context/AuthProvider';
import PersonIcon from '@mui/icons-material/Person';
import { toast } from 'react-hot-toast';


const drawerWidth = 240;

export default function Navbar(props) {

    const { user, logoutUser } = useContext(AuthContext);
    console.log(user);


    const handleLogout = () => {
        logoutUser()
            .then(() => {
                toast.success('user logout successfully')
            })
            .catch(err => {
                console.log(err)
            })
    }


    const { window } = props;
    const [mobileOpen, setMobileOpen] = React.useState(false);

    const handleDrawerToggle = () => {
        setMobileOpen((prevState) => !prevState);
    };

    const drawer = (
        <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
            <Typography variant="h6" sx={{ my: 2 }}>
                <Link to='/'>
                    TravelAir
                </Link>
            </Typography>
            <Divider />
            <List >
                <Link to='/home' style={{ paddingRight: '25px', textTransform: 'uppercase' }} >Home</Link>
                <Link to='/about' style={{ paddingRight: '25px', textTransform: 'uppercase' }} >About</Link>
                <Link to='/services' style={{ paddingRight: '25px', textTransform: 'uppercase' }} >Service</Link>
                <Link to='/products' style={{ paddingRight: '25px', textTransform: 'uppercase' }} >Products</Link>
                <Link to='/contact' style={{ paddingRight: '25px', textTransform: 'uppercase' }} >Contact</Link>
                <Link to='/register' style={{ paddingRight: '25px', textTransform: 'uppercase' }} >Register</Link>
            </List>
        </Box>
    );

    const container = window !== undefined ? () => window().document.body : undefined;

    return (
        <Box sx={{ display: 'flex' }}>
            <CssBaseline />
            <AppBar component="nav" sx={
                {
                    bgcolor: 'primary',
                    color: 'white'
                }
            }>
                <Toolbar>
                    <IconButton
                        color="inherit"
                        aria-label="open drawer"
                        edge="start"
                        onClick={handleDrawerToggle}
                        sx={{ mr: 2, display: { sm: 'none' } }}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Typography
                        variant="h6"
                        component="div"
                        sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}
                    >
                        <Link to='/'>
                            TravelAir
                        </Link>
                    </Typography>
                    <Box sx={{ display: { xs: 'none', sm: 'block', } }}>

                        <Link to='/' style={{ paddingRight: '25px', textTransform: 'uppercase', fontSize: '15px' }} >Home</Link>
                        <Link to='/about' style={{ paddingRight: '25px', textTransform: 'uppercase', fontSize: '15px' }} >About</Link>
                        <Link to='/services' style={{ paddingRight: '25px', textTransform: 'uppercase', fontSize: '15px' }} >Service</Link>
                        <Link to='/products' style={{ paddingRight: '25px', textTransform: 'uppercase', fontSize: '15px' }} >Products</Link>
                        <Link to='/contact' style={{ paddingRight: '25px', textTransform: 'uppercase', fontSize: '15px' }} >Contact</Link>


                        <>
                            {
                                user?.uid ?

                                    <Link onClick={handleLogout} style={{ paddingRight: '25px', textTransform: 'uppercase', fontSize: '15px' }} >Logout</Link>
                                    :
                                    <Link to='/register' style={{ paddingRight: '25px', textTransform: 'uppercase', fontSize: '15px' }} >Register</Link>
                            }
                        </>


                    </Box>
                    <Box>

                        {
                            user?.uid ? <img title={user?.displayName} src={user?.photoURL} className='w-[40px] h-[40px] rounded-full cursor-pointer' alt="" />
                                :
                                <PersonIcon></PersonIcon>
                        }

                    </Box>
                </Toolbar>
            </AppBar>
            <Box component="nav">
                <Drawer
                    container={container}
                    variant="temporary"
                    open={mobileOpen}
                    onClose={handleDrawerToggle}
                    ModalProps={{
                        keepMounted: true, // Better open performance on mobile.
                    }}
                    sx={{
                        display: { xs: 'block', sm: 'none' },
                        '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
                    }}
                >
                    {drawer}
                </Drawer>
            </Box>
            <Box component="main" sx={{ p: 3 }}>
                <Toolbar />
            </Box>
        </Box>
    );
}