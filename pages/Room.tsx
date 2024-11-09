import SearchBar from '@/components/searchBar/SearchBar';
import CustomTabs from '@/components/tabs/CustomTabs';

import styled from 'styled-components';
import FAButton from '@/components/faButton/FAButton';

function Room() {
  return (
    <RoomContainer>
      <SearchBar />
      <CustomTabs />
      <FAButton />
    </RoomContainer>
  );
}

const RoomContainer = styled.div`
  display: flex;
  flex-direction: column;
`;
export default Room;
