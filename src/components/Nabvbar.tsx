/* eslint-disable @typescript-eslint/no-unused-vars */
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
import { ScreenClasses } from '../types/ScreenClasses';
import useScreenClasses from '../utils/hooks/useScreenClasses';
import myProfile from '../assets/images/profile/my-profile.jpeg';
import { Link } from 'react-scroll';

const pages = ['ABOUT ME', 'MY RESUME', 'MY PROJECTS'];

const HomePageHeader: React.FC = () => {
  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(
    null,
  );
  const [anchorElUser, setAnchorElUser] = React.useState<null | HTMLElement>(
    null,
  );

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>): void => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = (): void => {
    setAnchorElNav(null);
  };
  return (
    <div className="bg-black">
      <AppBar position="static" color="transparent">
        <Container maxWidth="xl">
          <Toolbar disableGutters>
            <Typography
              variant="h6"
              noWrap
              component="a"
              href="/"
              sx={{
                mr: 2,
                display: { xs: 'none', md: 'flex' },
                fontFamily: 'monospace',
                fontWeight: 700,
                letterSpacing: '.05rem',
                color: 'white',
                textDecoration: 'none',
              }}
            >
              Hooman Shahidi
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
                <MenuIcon className="text-white" />
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
                    <Link
                      activeClass="active"
                      to={page}
                      spy={true}
                      smooth={true}
                      offset={50}
                      duration={500}
                    >
                      <Typography
                        textAlign="center"
                        onClick={handleCloseNavMenu}
                      >
                        {page}
                      </Typography>
                    </Link>
                  </MenuItem>
                ))}
              </Menu>
            </Box>
            <Typography
              variant="h5"
              noWrap
              component="a"
              href=""
              sx={{
                mr: 2,
                display: { xs: 'flex', md: 'none' },
                flexGrow: 1,
                fontFamily: 'monospace',
                fontWeight: 700,
                letterSpacing: '.05rem',
                color: 'white',
                textDecoration: 'none',
              }}
            >
              Hooman Shahidi
            </Typography>
            <Box
              className="justify-center gap-5 mr-24"
              sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}
            >
              {pages.map((page) => (
                <Link
                  key={page}
                  activeClass="active"
                  to={page}
                  spy={true}
                  smooth={true}
                  offset={50}
                  duration={500}
                >
                  <Button
                    key={page}
                    onClick={handleCloseNavMenu}
                    sx={{ my: 2, color: 'white', display: 'block' }}
                  >
                    {page}
                  </Button>{' '}
                </Link>
              ))}
            </Box>
            <Box sx={{ flexGrow: 0 }}>
              <img className="w-10 h-10 rounded-full" src={myProfile} alt="" />
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
    </div>
  );
};
export default HomePageHeader;
