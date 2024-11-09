import * as React from 'react';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import styled from 'styled-components';
import { InputBase } from '@mui/material';

export default function SearchBar() {
  return (
    <WholeContainer>
      <SearchBarContainer>
        <IconButton type="button">
          <MenuIcon />
        </IconButton>
        <StyledInputBase placeholder={'검색어를 입력하세요'} />
        <IconButton type="button">
          <SearchIcon />
        </IconButton>
        <IconButton type="button">
          <AccountCircleIcon />
        </IconButton>
      </SearchBarContainer>
    </WholeContainer>
  );
}

const SearchBarContainer = styled.div`
  display: flex;
  width: 90%;
  border-radius: 50px;
  background-color: rgba(214, 214, 214, 0.5);
  margin: 20px;
  height: 20%;
`;

const StyledInputBase = styled(InputBase)`
  flex: 1;
`;

const WholeContainer = styled.div`
  justify-content: space-around;
  display: flex;
`;
