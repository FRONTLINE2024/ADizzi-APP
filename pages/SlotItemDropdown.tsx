import HeaderCollect from '@/components/header/HeaderCollect';
import LargeButton from '@/components/button/largeButton';
import styled from 'styled-components';
import MultiDropdown from '@/components/MultiDropdown/MultiDropdown';

function SlotItemDropdown() {
  return (
    <BackgroundContainer>
      <HeaderCollect label="옷장" />
      <MultiDropdown />
      <ButtonContainer>
        <LargeButton label="확인" />
      </ButtonContainer>
    </BackgroundContainer>
  );
}

const BackgroundContainer = styled.div`
  background-color: white;
  display: flex;
  flex-direction: column;
  height: 100vh;
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: space-around;
    margin-top: 20%;
`;

export default SlotItemDropdown;
