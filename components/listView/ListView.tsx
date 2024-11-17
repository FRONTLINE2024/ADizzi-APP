import styled from 'styled-components';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import IconButton from '@mui/material/IconButton';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import * as React from 'react';
import Divider from '@mui/material/Divider';

function ListView() {
  return (
    <StyledList>
      {csData.map((cs) => (
        <React.Fragment key={cs.text}>
          <ListItem>
            <Image src={cs.img} alt={cs.text} />
            <StyledListItemText primary={cs.text} />
            <IconButton type="button">
              <MoreVertIcon />
            </IconButton>
          </ListItem>
          <StyledDivider />
        </React.Fragment>
      ))}
    </StyledList>
  );
}

const csData = [
  {
    text: '옷장',
    img: 'images/yongduMarketIcon.png',
  },
  {
    text: '옷장',
    img: 'images/appleWatch.png',
  },
  {
    text: '옷장',
    img: 'images/yongduMarketIcon.png',
  },
  {
    text: '옷장',
    img: 'images/yongduMarketIcon.png',
  },
  {
    text: '옷장',
    img: 'images/yongduMarketIcon.png',
  },
  {
    text: '옷장',
    img: 'images/yongduMarketIcon.png',
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

const Image = styled.img`
  width: 20%;
  height: 20%;
  border-radius: 50%;
  margin-right: 10px;
`;

export default ListView;
