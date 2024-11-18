import styled from 'styled-components';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import SearchIcon from '@mui/icons-material/Search';
import RestoreIcon from '@mui/icons-material/Restore';
import ClearIcon from '@mui/icons-material/Clear';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';

function SearchDetail() {
  return (
    <>
      <SearchContainer>
        <ArrowBackIcon />
        <SearchText>검색어</SearchText>
        <SearchIcon />
      </SearchContainer>
      <DeleteRecentContainer>
        <RecentText>최근 검색어</RecentText>
        <DeleteText>전체 삭제</DeleteText>
      </DeleteRecentContainer>
      <SearchList>
        {searchData.map((search) => (
          <ListItem key={search.text}>
            <RestoreIcon />
            <SearchListItemText primary={search.text} />
            <ClearIcon />
          </ListItem>
        ))}
      </SearchList>
    </>
  );
}

const searchData = [
  {
    text: '용용인형',
  },
  {
    text: '쉽게 배우는 파이썬',
  },
  {
    text: '미분적분학',
  },
  {
    text: 'lg 그램 2023',
  },
  {
    text: '태권도 도복',
  },
];

const SearchText = styled.div`
  margin-left: 10px;
  font-size: 16px;
  font-weight: bold;
  flex: 1;
`;

const SearchContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  height: 50px;
  padding: 0 10px;
  border-bottom: 1px solid #5dda6f;
  width: 100%;
`;

const DeleteRecentContainer = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 5% 5%;
  align-items: center;
`;

const RecentText = styled.div`
  font-size: 14px;
  font-weight: bold;
`;

const DeleteText = styled.div`
  font-size: 14px;
  font-weight: bold;
`;

const SearchList = styled.div`
  width: 100%;
`;

const SearchListItemText = styled(ListItemText)`
  color: black;
  margin-left: 5%;
`;

export default SearchDetail;
