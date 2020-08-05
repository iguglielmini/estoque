import React from 'react';
import clsx from 'clsx';
import { NavLink, useHistory } from 'react-router-dom';
import Drawer from '@material-ui/core/Drawer';
import AppBar from '@material-ui/core/AppBar';
import Avatar from '@material-ui/core/Avatar';
import Divider from '@material-ui/core/Divider';
import Toolbar from '@material-ui/core/Toolbar';
import ListItem from '@material-ui/core/ListItem';
import Typography from '@material-ui/core/Typography';
import CssBaseline from '@material-ui/core/CssBaseline';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import { makeStyles, useTheme } from '@material-ui/core/styles';
//icons
import MenuIcon from '@material-ui/icons/Menu';
import PersonIcon from '@material-ui/icons/Person';
import IconButton from '@material-ui/core/IconButton';
import DashboardIcon from '@material-ui/icons/Dashboard';
import PersonAddIcon from '@material-ui/icons/PersonAdd';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import MeetingRoomIcon from '@material-ui/icons/MeetingRoom';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import BusinessCenterIcon from '@material-ui/icons/BusinessCenter';
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';

//css
import './styles.css'
//img
import logoImg from '../../assets/logo.png'
import { List } from '@material-ui/core';
//api
import api from '../../services/api';


const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
    },
    appBar: {
        zIndex: theme.zIndex.drawer + 1,
        transition: theme.transitions.create(['width', 'margin'], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
    },
    appBarShift: {
        marginLeft: drawerWidth,
        width: `calc(100% - ${drawerWidth}px)`,
        transition: theme.transitions.create(['width', 'margin'], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.enteringScreen,
        }),
    },
    menuButton: {
        marginRight: 36,
    },
    hide: {
        display: 'none',
    },
    drawer: {
        width: drawerWidth,
        flexShrink: 0,
        whiteSpace: 'nowrap',
    },
    drawerOpen: {
        width: drawerWidth,
        transition: theme.transitions.create('width', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.enteringScreen,
        }),
    },
    drawerClose: {
        transition: theme.transitions.create('width', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
        overflowX: 'hidden',
        width: theme.spacing(7) + 1,
        [theme.breakpoints.up('sm')]: {
            width: theme.spacing(9) + 1,
        },
    },
    toolbar: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'flex-end',
        padding: theme.spacing(0, 1),
        // necessary for content to be below app bar
        ...theme.mixins.toolbar,
    },
    content: {
        flexGrow: 1,
        padding: theme.spacing(3),
    },
}));

export default function SideMenu() {
    const classes = useStyles();
    const theme = useTheme();
    const [open, setOpen] = React.useState(true);
    const history = useHistory();
    const handleDrawerOpen = () => {
        setOpen(!open);
    };

    function handleLogout(){
        localStorage.clear();
        history.push('/');
    }
    return (
        <div className={classes.root}>
            <CssBaseline />
            <AppBar
                position="fixed"
                className={clsx(classes.appBar, {
                    [classes.appBarShift]: open,
                })}
            >
                <Toolbar>
                    <IconButton
                        color="inherit"
                        aria-label="open drawer"
                        onClick={handleDrawerOpen}
                        edge="start"
                        className={clsx(classes.menuButton, {
                            [classes.hide]: open,
                        })}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Typography variant="h6" noWrap>
                        Área Administrativa
          </Typography>
                </Toolbar>
            </AppBar>
            <Drawer
                variant="permanent"
                anchor="left"
                open={open}
                className={clsx(classes.drawer, {
                    [classes.drawerOpen]: open,
                    [classes.drawerClose]: !open,
                })}
                classes={{
                    paper: clsx({
                        [classes.drawerOpen]: open,
                        [classes.drawerClose]: !open,
                    }),
                }}
            >
                <div className={classes.toolbar}>
                    <img src={logoImg} alt="D'Avó Administrativo" style={{ width: 140 }} />
                    <IconButton onClick={handleDrawerOpen}>
                        {
                        theme.direction === 'rtl' 
                        ? (<ChevronRightIcon /> )
                        : (<ChevronLeftIcon />)
                        }
                    </IconButton>
                </div>
                <Divider />
                <List className={classes.root}>
                    <ListItem alignItems="flex-start">
                        <ListItemAvatar>
                            <Avatar
                                src=""
                                alt="Usuário"
                            />
                        </ListItemAvatar>
                        <ListItemText
                            className="texto-usuario"
                            primary="Adm"
                            secondary={
                                <React.Fragment>
                                    <Typography
                                        variant="body2"
                                        component="span"
                                        color="textPrimary"
                                        className={classes.inline}
                                    >
                                        <strong className="perfil-user">Administrador</strong>
                                    </Typography>
                                </React.Fragment>
                            }
                        />
                    </ListItem>
                </List>
                <Divider />
                <nav className="dash-menu">
                    <NavLink
                        exact
                        to="/dashboard">
                        <ListItem button>
                            <ListItemIcon><DashboardIcon /></ListItemIcon>
                            <ListItemText>Painel de Controle</ListItemText>
                        </ListItem>
                    </NavLink>
                    <NavLink
                        exact
                        to="/usuarios">
                        <ListItem button>
                            <ListItemIcon><PersonIcon /></ListItemIcon>
                            <ListItemText>Usuários</ListItemText>
                        </ListItem>
                    </NavLink>
                    <NavLink
                        exact
                        to="/produtos">
                        <ListItem button>
                            <ListItemIcon><BusinessCenterIcon /></ListItemIcon>
                            <ListItemText>Produtos</ListItemText>
                        </ListItem>
                    </NavLink>

                    <NavLink
                        exact
                        to="/promocao">
                        <ListItem button>
                            <ListItemIcon><ShoppingCartIcon /></ListItemIcon>
                            <ListItemText>Promoções</ListItemText>
                        </ListItem>
                    </NavLink>
               
                    <NavLink
                        exact
                       to="/">
                        <ListItem button>
                            <ListItemIcon><MeetingRoomIcon /></ListItemIcon>
                            <ListItemText>Sair</ListItemText>
                        </ListItem>
                    </NavLink>
                </nav>
            </Drawer>
        </div>
    );
}
