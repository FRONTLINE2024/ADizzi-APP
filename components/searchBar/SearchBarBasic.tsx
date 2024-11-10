import styled from 'styled-components';
import SearchIcon from '@mui/icons-material/Search';
import ImportExportOutlinedIcon from '@mui/icons-material/ImportExportOutlined';
import * as React from 'react';
import { InputBase } from '@mui/material';
import FAButton from '@/components/faButton';

function SearchBarBasic() {
  return (
    <>
      <SearchBarBasicContainer>
        <SearchIcon />
        <StyledInputBase placeholder={'검색'} />
      </SearchBarBasicContainer>
      <SortingContainer>
        최신등록순 / 오래된순
        <ImportExportOutlinedIcon />
      </SortingContainer>
      <FAButton />
    </>
  );
}

const SearchBarBasicContainer = styled.div`
  display: flex;
  width: 90%;
  border-radius: 50px;
  background-color: rgba(214, 214, 214, 0.5);
  align-items: center;
  margin: 0 5%;
`;

const StyledInputBase = styled(InputBase)`
  flex: 1;
`;

const SortingContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-right: 5%;
  margin-top: 5%;
`;

export default SearchBarBasic;
