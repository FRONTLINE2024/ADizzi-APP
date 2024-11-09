import styled from 'styled-components';
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import { useState } from 'react';
type LInputProps = {
  label: string;
  showIcon: boolean;
  showRequest: boolean;
  showCheck: boolean;
};

function LInput({ label, showRequest, showCheck, showIcon }: LInputProps) {
  const [isVisible, setIsVisible] = useState(true);
  const toggleVisibility = () => {
    setIsVisible(!isVisible);
  };
  return (
    <LInputContainer>
      <LabelText>{label}</LabelText>
      {showRequest && (
        <AuthContainer>
          {' '}
          <AuthText>인증요청 </AuthText>{' '}
        </AuthContainer>
      )}
      {showCheck && (
        <AuthContainer>
          {' '}
          <AuthText>인증확인 </AuthText>{' '}
        </AuthContainer>
      )}
      {showIcon && (
        <EyeIcon onClick={toggleVisibility}>
          {isVisible ? <VisibilityIcon /> : <VisibilityOffIcon />}{' '}
        </EyeIcon>
      )}
    </LInputContainer>
  );
}

const LInputContainer = styled.div`
  width: 90%;
  height: 50px;
  border-radius: 10px;
  border: 1px solid #d5d5d5;
  background-color: #ffffff;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
`;

const AuthContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #d6d6d6;
  border-radius: 50px;
  width: 100px;
  height: 30px;
  margin-right: 15px;
`;

const EyeIcon = styled.div`
  margin-right: 15px;
`;
const LabelText = styled.div`
  margin-left: 15px;
  font-size: 20px;
  color: #595959;
`;
const AuthText = styled.div`
  font-weight: bold;
  font-size: 18px;
  color: #595959;
`;

export default LInput;
