import styled from 'styled-components';

type SInputFieldProps = {
  label: string;
};

function SInput({ label }: SInputFieldProps) {
  return (
    <SInputContainer>
      <LabelText>{label}</LabelText>
    </SInputContainer>
  );
}

const SInputContainer = styled.div`
  width: 80%;
  height: 46px;
  border-radius: 10px;
  background-color: #ffffff;
  display: flex;
  align-items: center;
  margin: 20px;
`;

const LabelText = styled.div`
  margin-left: 15px;
`;

export default SInput;
