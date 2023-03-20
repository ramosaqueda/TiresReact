import * as React from 'react';
import Link from '@mui/material/Link';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box'; 
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

 

const drawerWidth = 240;
 const navigationItems = [
  { to: 'home', label: 'Inicio' },
  { to: 'about', label: 'Nosotros' },
  { to: 'tiendas', label: 'Nuestras Tiendas' },
  { to: 'contacto', label: 'Contacto' },
  { to: 'finder', label: 'Busca tu medida' },
]


function Header (props) {
 

  
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
      <Typography variant="h6" sx={{ my: 2 }}>
      {import.meta.env.VITE_SITE_NAME_MOBILE}
      </Typography>
      <Divider />
      <List>
        {navigationItems.map((item) => (
          <ListItem key={item.label}  disablePadding>  
           <Link  href={item.to}  >
              <ListItemButton sx={{ textAlign: 'center' }} component={item.to}>
                <ListItemText primary={item.label} />
              </ListItemButton>
          </Link>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  const container = window !== undefined ? () => window().document.body : undefined;


  return (
    <>
    <Box sx={{ display: 'flex' }}>
      <AppBar component="nav" color="primary">
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
              {import.meta.env.VITE_SITE_NAME}
          </Typography>
          <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
            {navigationItems.map((item) => (

              <Link  href={item.to}  >
                <Button variant="contained">
                  {item.label}
                </Button>
              </Link>
            ))}
        
        
            
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
    </Box>
    </>
  )
    
    
  
}

 

export default Header;
