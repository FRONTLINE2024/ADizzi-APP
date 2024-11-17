import styled from 'styled-components';
import HeaderCollect from '@/components/header/HeaderCollect';
import SearchBarBasic from '@/components/searchBar/SearchBarBasic';
import ListView from '@/components/listView/ListView';

function Container() {
  return (
    <BackgroundContainer>
      <HeaderCollect label="금쪽이의 방" />
      <SearchBarBasic />
      <ListView />
    </BackgroundContainer>
  );
}

const BackgroundContainer = styled.div`
  background-color: white;
`;

export default Container;
