import styled from 'styled-components';

type ButtonProps = {
  label: string;
};

function LButton({ label }: ButtonProps) {
  return (
    <LargeButtonContainer>
      <LabelText>{label}</LabelText>
    </LargeButtonContainer>
  );
}

const LargeButtonContainer = styled.div`
  background-color: #5dda6f;
  width: 90%;
  height: 50px;
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const LabelText = styled.div`
  font-weight: bold;
  color: white;
`;

export default LButton;
