import styled from 'styled-components';
type ButtonProps = {
  label: string;
};

function SButton({ label }: ButtonProps) {
  return (
    <SmallButtonContainer>
      <LabelText>{label}</LabelText>
    </SmallButtonContainer>
  );
}

const SmallButtonContainer = styled.div`
  display: flex;
  background-color: #5dda6f;
  width: 60%;
  height: 43px;
  border-radius: 10px;
  align-content: center;
  align-items: center;
  justify-content: space-around;
  flex-wrap: wrap;
  margin: 20px;
`;
const LabelText = styled.div`
  font-weight: bold;
  color: white;
`;

export default SButton;
