import styled from 'styled-components';
import LButton from '@/components/button/largeButton/LButton';
import Header from '@/components/header/Header';
import LInput from '@/components/input/LInput';

function SignUp() {
  return (
    <BackgroundContainer>
      <Header label="회원가입" />
      <GroupContainer>
        <LInput
          label="아이디"
          showCheck={false}
          showRequest={false}
          showIcon={false}
        />
      </GroupContainer>
      <GroupContainer>
        <LInput
          label="비밀번호"
          showCheck={false}
          showRequest={false}
          showIcon={true}
        />
        <LInput
          label="비밀번호 재입력"
          showCheck={false}
          showRequest={false}
          showIcon={true}
        />
      </GroupContainer>
      <GroupContainer>
        <LInput
          label="이메일"
          showCheck={false}
          showRequest={true}
          showIcon={false}
        />
        <LInput
          label="인증번호"
          showCheck={true}
          showRequest={false}
          showIcon={false}
        />
      </GroupContainer>
      <ButtonContainer>
        <LButton label="회원가입" />
      </ButtonContainer>
    </BackgroundContainer>
  );
}

const BackgroundContainer = styled.div`
  height: 100vh;
  background-color: #f0f0f0;
`;

const GroupContainer = styled.div`
  margin-bottom: 40px;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 20px;
`;

export default SignUp;
