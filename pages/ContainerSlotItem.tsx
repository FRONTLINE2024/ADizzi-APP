import HeaderCollect from '@/components/header/HeaderCollect';
import CameraAltOutlinedIcon from '@mui/icons-material/CameraAltOutlined';
import styled from 'styled-components';
import LargeButton from '@/components/button/largeButton';

function ContainerSlotItem() {
  return (
    <BackgroundContainer>
      <HeaderCollect label="옷장" />
      <CameraContainer>
        <CameraAltOutlinedIcon />
      </CameraContainer>
      <CabinetText> 이름</CabinetText>
      <CabinetContainer />
      <CabinetText> 카테고리</CabinetText>
      <CabinetContainer />
      <CabinetText> 메모</CabinetText>
      <MemoContainer />
      <ButtonContainer>
        <LargeButton label="저장" />
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

const CameraContainer = styled.div`
  width: 90%;
  height: 40%;
  background-color: rgba(214, 214, 214, 0.5);
  display: flex;
  margin: 5% 5%;
  align-items: center;
  justify-content: center;
`;

const CabinetContainer = styled.div`
  width: 90%;
  height: 5%;
  border: 2px solid #d5d5d5;
  border-radius: 15px;
  margin: 0 5%;
`;

const MemoContainer = styled.div`
  width: 90%;
  height: 20%;
  border: 2px solid #d5d5d5;
  border-radius: 15px;
  margin: 0 5%;
`;
const CabinetText = styled.div`
  font-size: 18px;
  font-weight: bold;
  margin: 2% 5%;
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 40%;
`;

export default ContainerSlotItem;
