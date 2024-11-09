import styled from 'styled-components';
import SInput from '@/components/input/SInput/SInput';
import SButton from '@/components/button/smallButton/SButton';

function SignIn() {
  return (
    <LoginContainer>
      <LogoImage src="/images/ADizziLogo.png" />
      <SInput label="이메일" />
      <SInput label="비밀번호" />
      <SButton label="로그인" />
      <LinkLabel>회원가입 / 비밀번호 찾기</LinkLabel>
    </LoginContainer>
  );
}

const LoginContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100vh;
  justify-content: center;
  background-color: #f0f0f0;
`;

const LogoImage = styled.img`
  width: 150px;
  height: 150px;
  border-radius: 50%;
`;

const LinkLabel = styled.div`
  color: #595959;
  font-size: 18px;
`;

export default SignIn;
