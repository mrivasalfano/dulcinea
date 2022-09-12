import { Drawer, List, ListItemButton, ListItemText } from '@mui/material';
import React, { FC } from 'react'

interface Section {
    label: string;
    href: string;
  }
  
  interface Props {
    sections: Section[];
    opened: boolean;
    closeCallback: Function;
  }

const NavbarDrawer: FC<Props> = (props) => {
  const {sections, opened, closeCallback} = props

  return (
    <Drawer
        open={opened}
        onClose={() => closeCallback()}
    >
        <List>
            {sections.map((section, index) => (
                <ListItemButton onClick={() => closeCallback()} href={section.href} key={index}>
                    <ListItemText>{section.label}</ListItemText>
                </ListItemButton>
            ))}
        </List>
    </Drawer>
  )
}

export default NavbarDrawer