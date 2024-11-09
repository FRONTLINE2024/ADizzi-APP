import styled from 'styled-components';
import Header from '@/components/header/Header';
import LockResetOutlinedIcon from '@mui/icons-material/LockResetOutlined';
import LoginOutlinedIcon from '@mui/icons-material/LoginOutlined';
import PersonRemoveOutlinedIcon from '@mui/icons-material/PersonRemoveOutlined';

function MyInfo() {
  return (
    <BackgroundContainer>
      <Header label="마이페이지" />
      <HeaderLine />
      <MyInfoContainer>
        <MyInfoImage src="/images/crayonShinchan.PNG" />
        <SemiText> 아이디 </SemiText>
      </MyInfoContainer>
      <BodyLine />
      <SemiText> 계정 </SemiText>
      <MyInfoContainer>
        <LockResetOutlinedIcon />
        <MediumText> 비밀번호 변경 </MediumText>
      </MyInfoContainer>
      <BodyLine />
      <SemiText> 기타 </SemiText>
      <MyInfoContainer>
        <LoginOutlinedIcon />
        <MediumText> 로그아웃 </MediumText>
      </MyInfoContainer>
      <MyInfoContainer>
        <PersonRemoveOutlinedIcon />
        <MediumText> 회원탈퇴</MediumText>
      </MyInfoContainer>
    </BackgroundContainer>
  );
}

const BackgroundContainer = styled.div`
  background-color: white;
`;

const HeaderLine = styled.div`
  border-bottom: 1px gray solid;
`;

const MyInfoContainer = styled.div`
  display: flex;
  margin: 5% 5%;
  align-items: center;
`;

const MyInfoImage = styled.img`
  border-radius: 50%;
  width: 20%;
  height: 20%;
`;

const SemiText = styled.div`
  font-size: 20px;
  font-weight: bold;
  margin-left: 5%;
`;

const BodyLine = styled.div`
  border-bottom: 2px #eaeaea solid;
  margin: 5% 5%;
  width: 90%;
`;

const MediumText = styled.div`
  font-size: 16px;
  font-weight: normal;
  margin-left: 5%;
`;

export default MyInfo;
