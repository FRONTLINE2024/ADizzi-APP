import styled from 'styled-components';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

type HeaderProps = {
  label: string;
};

function Header({ label }: HeaderProps) {
  return (
    <HeaderContainer>
      <ArrowBackIcon />
      <HeaderTitle>{label}</HeaderTitle>
    </HeaderContainer>
  );
}

const HeaderContainer = styled.div`
  display: flex;
  padding: 40px 20px;
  width: 100%;
  height: 100px;
`;

const HeaderTitle = styled.div`
  font-size: 22px;
  font-weight: bold;
`;

export default Header;
