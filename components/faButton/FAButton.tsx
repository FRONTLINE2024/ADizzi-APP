import * as React from 'react';

import AddIcon from '@mui/icons-material/Add';
import styled from 'styled-components';
import IconButton from '@mui/material/IconButton';

export default function FAButton() {
  return (
    <WholeContainer>
      <FABContainer>
        <IconButton type="button">
          <AddIcon style={{ color: 'white', fontSize: '30px' }} />
        </IconButton>
      </FABContainer>
    </WholeContainer>
  );
}

const FABContainer = styled.div`
  background-color: #5dda6f;
  border-radius: 50px;
  display: flex;
  justify-content: center;
`;

const WholeContainer = styled.div`
  margin-left: 65%;
  width: 30%;
  position: fixed;
  bottom: 10%;
`;
