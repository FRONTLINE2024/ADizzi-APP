import * as React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Divider from '@mui/material/Divider';
import styled from 'styled-components';
import IconButton from '@mui/material/IconButton';
import MoreVertIcon from '@mui/icons-material/MoreVert';

export default function CustomDivider() {
  return (
    <StyledList>
      {roomData.map((room) => (
        <>
          <ListItem key={room.text}>
            <StyledListItemText primary={room.text} />
            <IconButton type="button">
              <MoreVertIcon />
            </IconButton>
          </ListItem>
          <StyledDivider />
        </>
      ))}
    </StyledList>
  );
}

const roomData = [
  {
    text: '거실',
  },
  {
    text: '부엌',
  },
  {
    text: '방1',
  },
  {
    text: '방2',
  },
  {
    text: '방3',
  },
];

const StyledList = styled(List)`
  width: 100%;
`;

const StyledListItemText = styled(ListItemText)`
  color: black;
`;

const StyledDivider = styled(Divider)`
  color: #d6d6d6;
  border-bottom-width: 2px;
`;
