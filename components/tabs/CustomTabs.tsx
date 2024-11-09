import * as React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabPanel from '@mui/lab/TabPanel';
import { useState } from 'react';
import styled from 'styled-components';
import ImageListView from '@/components/ImageListView/ImageListView';
import CustomDivider from '@/components/divider/CustomDivider';

export default function CustomTabs() {
  const [value, setValue] = useState('1');
  const handleChange = (event: unknown, newValue: string) => {
    setValue(newValue);
  };

  return (
    <TabContext value={value}>
      <StyledTabs value={value} onChange={handleChange}>
        <StyledTab label="Room" value="1" />
        <StyledTab label="Item" value="2" />
      </StyledTabs>
      <TabPanel value="1">
        <CustomDivider />
      </TabPanel>
      <TabPanel value="2">
        <ImageListView />
      </TabPanel>
    </TabContext>
  );
}

const StyledTabs = styled(Tabs)`
  font-weight: bold;
  & .MuiTabs-indicator {
    background-color: #5dda6f;
  }
`;

const StyledTab = styled(Tab)`
  flex: 1;
  font-weight: bold;
  color: gray;
  text-transform: none;
  &.Mui-selected {
    color: #5dda6f;
  }
`;
