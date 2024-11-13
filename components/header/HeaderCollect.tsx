import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import GridViewOutlinedIcon from '@mui/icons-material/GridViewOutlined';
import styled from 'styled-components';
type HeaderCollectProps = {
  label: string;
};
function HeaderCollect({ label }: HeaderCollectProps) {
  return (
    <HeaderCollectContainer>
      <ArrowBackIcon />
      <HeaderCollectTitle>{label}</HeaderCollectTitle>
      <GridViewOutlinedIcon />
    </HeaderCollectContainer>
  );
}

const HeaderCollectContainer = styled.div`
  display: flex;
  padding: 40px 20px;
  width: 100%;
  height: 100px;
  align-items: center;
  justify-content: space-between;
`;

const HeaderCollectTitle = styled.div`
  font-size: 22px;
  font-weight: bold;
`;

export default HeaderCollect;
