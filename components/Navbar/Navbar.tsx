import React, { FC, useState } from 'react';
import { AppBar, Drawer, Grid, IconButton, Tab, Tabs, Toolbar, useMediaQuery, useTheme } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import Image from 'next/image';
import logo from '../../public/logo.png' 
import { Box } from '@mui/system';
import NavbarDrawer from './NavbarDrawer';

interface Section {
  label: string;
  href: string;
}

interface Props {
  sections: Section[];
}

const Navbar: FC<Props> = (props) => {
  const {sections} = props
  const theme = useTheme()
  const deviceIsMobile = useMediaQuery(theme.breakpoints.down('sm'))
  const [selectedTabIndex, setSelectedTabIndex] = useState(0)
  const [mobileNavbarOpened, setMobileNavbarOpened] = useState(false)

  return (
    <Box marginBottom={10}>
      <AppBar position='fixed'>
        <Toolbar>
          <Grid container justifyContent='space-between'>
            <Grid item>
              <Image
                src={logo}
                height={50}
                width={50}
                alt="Logo Dulcinea"
              />
            </Grid>
            {deviceIsMobile 
              ? 
                <>
                  <NavbarDrawer closeCallback={() => setMobileNavbarOpened(false)} opened={mobileNavbarOpened} sections={sections}/>
                  <Grid item>
                    <IconButton
                      size="large"
                      edge="start"
                      color="inherit"
                      aria-label="menu"
                      sx={{ mr: 2 }}
                      onClick={() => setMobileNavbarOpened(!mobileNavbarOpened)}
                    >
                      <MenuIcon />
                    </IconButton>
                  </Grid>
                </>
              :
                <Grid item>
                  <Tabs 
                    value={selectedTabIndex}
                    onChange={(e, newTabIndex) => setSelectedTabIndex(newTabIndex)}
                    textColor='inherit' 
                    indicatorColor='secondary'
                  >
                    {sections.map((section, index) => (
                      <Tab href={section.href} key={index} label={section.label}/>
                    ))}
                  </Tabs>
                </Grid>
            }
          </Grid>
        </Toolbar>
      </AppBar>
    </Box>
  )
}

export default Navbar;