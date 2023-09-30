import React, { ReactNode } from 'react';
import { Box, Drawer, List, ListItem, ListItemButton, ListItemIcon, ListItemText } from '@mui/material';
import { Checkroom } from '@mui/icons-material';

interface NavDrawerProps {
  open: boolean;
  onClose: () => void;
}

type labelAndIcon = {
  label: string;
  icon: ReactNode;
};

export const NavDrawer: React.FC<NavDrawerProps> = ({ open, onClose }: NavDrawerProps) => {
  const navDrawerItems: labelAndIcon[] = [
    {
      label: 'My Outfits',
      icon: <Checkroom />,
    },
  ];
  const navDrawerContents = () => (
    <Box sx={{ width: 250 }} role="presentation">
      <List>
        {navDrawerItems.map((item) => (
          <ListItem key={item.label} disablePadding>
            <ListItemButton>
              <ListItemIcon>{item.icon}</ListItemIcon>
              <ListItemText primary={item.label} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );
  return (
    <Drawer anchor="left" open={open} onClose={onClose}>
      {navDrawerContents()}
    </Drawer>
  );
};
