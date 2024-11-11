import styled from 'styled-components';
import LInput from '@/components/input/LInput';
import LButton from '@/components/button/largeButton';
import Header from '@/components/header/Header';

function ChangePwd() {
  return (
    <BackgroundContainer>
      <Header label="비밀번호 재설정" />
      <GroupContainer>
        <LInput
          label="이메일"
          showIcon={false}
          showRequest={true}
          showCheck={false}
        ></LInput>
        <LInput
          label="인증번호"
          showIcon={false}
          showRequest={false}
          showCheck={true}
        ></LInput>
      </GroupContainer>
      <GroupContainer>
        <LInput
          label="새 비밀번호"
          showIcon={false}
          showRequest={false}
          showCheck={false}
        ></LInput>
        <LInput
          label="새 비밀번호 재입력"
          showIcon={false}
          showRequest={false}
          showCheck={false}
        ></LInput>
      </GroupContainer>
      <GroupContainer>
        <LButton label="로그인" />
      </GroupContainer>
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

export default ChangePwd;
