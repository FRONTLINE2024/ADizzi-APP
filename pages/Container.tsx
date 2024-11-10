import styled from 'styled-components';
import HeaderCollect from '@/components/header/HeaderCollect';
import SearchBarBasic from '@/components/searchBar/SearchBarBasic';

function Container() {
  return (
    <BackgroundContainer>
      <HeaderCollect label="금쪽이의 방" />
      <SearchBarBasic />
    </BackgroundContainer>
  );
}

const BackgroundContainer = styled.div`
  background-color: white;
`;

export default Container;
