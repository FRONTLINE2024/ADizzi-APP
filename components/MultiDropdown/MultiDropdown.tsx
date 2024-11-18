import styled from 'styled-components';

function MultiDropdown() {
  return (
    <MultiDropdownContainer>
      <DropdownRowContainer>
        <DropdownContainer>
          <DropdownText>의류</DropdownText>
        </DropdownContainer>
        <DropdownContainer>
          <DropdownText>의류</DropdownText>
        </DropdownContainer>
      </DropdownRowContainer>
      <DropdownRowContainer>
        <DropdownContainer>
          <DropdownText>의류</DropdownText>
        </DropdownContainer>
        <DropdownContainer>
          <DropdownText>의류</DropdownText>
        </DropdownContainer>
      </DropdownRowContainer>
      <DropdownRowContainer>
        <DropdownContainer>
          <DropdownText>의류</DropdownText>
        </DropdownContainer>
        <DropdownContainer>
          <DropdownText>의류</DropdownText>
        </DropdownContainer>
      </DropdownRowContainer>
      <DropdownRowContainer>
        <DropdownContainer>
          <DropdownText>의류</DropdownText>
        </DropdownContainer>
        <DropdownContainer>
          <DropdownText>의류</DropdownText>
        </DropdownContainer>
      </DropdownRowContainer>
      <DropdownRowContainer>
        <DropdownContainer>
          <DropdownText>의류</DropdownText>
        </DropdownContainer>
        <DropdownContainer>
          <DropdownText>의류</DropdownText>
        </DropdownContainer>
      </DropdownRowContainer>
      <DropdownRowContainer>
        <DropdownContainer>
          <DropdownText>의류</DropdownText>
        </DropdownContainer>
        <DropdownContainer>
          <DropdownText>의류</DropdownText>
        </DropdownContainer>
      </DropdownRowContainer>
      <DropdownRowContainer>
        <DropdownContainer>
          <DropdownText>의류</DropdownText>
        </DropdownContainer>
        <DropdownContainer>
          <DropdownText>의류</DropdownText>
        </DropdownContainer>
      </DropdownRowContainer>
      <DropdownRowContainer>
        <DropdownContainer>
          <DropdownText>의류</DropdownText>
        </DropdownContainer>
        <DropdownContainer>
          <DropdownText>의류</DropdownText>
        </DropdownContainer>
      </DropdownRowContainer>
    </MultiDropdownContainer>
  );
}

const MultiDropdownContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const DropdownContainer = styled.div`
  display: flex;
  width: 50%;
  border: 2px solid #d5d5d5;
  border-radius: 6px;
  margin: 2% 2%;
`;

const DropdownRowContainer = styled.div`
  display: flex;
`;

const DropdownText = styled.div`
  font-size: 20px;
  margin-left: 6%;
`;
export default MultiDropdown;
