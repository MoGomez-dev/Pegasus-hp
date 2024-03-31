import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import { useNavigate } from 'react-router-dom';
import { RxHamburgerMenu } from 'react-icons/rx';
import styled from 'styled-components'


export default function TemporaryDrawer() {
  const [ openDrawer, setOpenDrawer ] = React.useState(false);
  const navigate = useNavigate();
  const urls = ["/", "/member/", "/scorebook/", "/schedule/", 'https://github.com/MoGomez-dev/Pegasus-hp'];

  const handleNavigate = (index) => {
    navigate(urls[index]);
    setOpenDrawer(false);
  }

  const list = () => (
    <Box
      sx={{ width: 250 }}
      role="presentation"
      onClick={() => setOpenDrawer(false)}
    >
      <List>
        {['Top', '選手一覧', 'スコアブック', 'スケジュール', 'GitHub'].map((text, index) => (
          <ListItem key={text} disablePadding>
            <ListItemButton onClick={() => handleNavigate(index)}>
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <HamburgerMenu>
        <Button onClick={() => setOpenDrawer(true)}><RxHamburgerMenu size="1.5rem" /></Button>
        <Drawer
          anchor="right"
          open={openDrawer}
          onClose={() => setOpenDrawer(false)}
        >
        {list("left")}
        </Drawer>
    </HamburgerMenu>
  );
}


const HamburgerMenu = styled.button`
    display:none;
    background-color: transparent;
    border: none;

    button {
        color: white;
    }

    @media screen and (max-width: 800px) {
        display: block;
    }
`