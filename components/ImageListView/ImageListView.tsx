import * as React from 'react';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import styled from 'styled-components';

export default function ImageListView() {
  return (
    <ImageList cols={3}>
      {itemData.map((item) => (
        <ImageListItem key={item.img}>
          <ItemImage
            srcSet={`${item.img}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`} //과화질 이미지를 제공
            src={`${item.img}?w=164&h=164&fit=crop&auto=format`} // 기본 이미지 제공
            loading="lazy" // 이미지가 화면에 보이기 직전에 로드하여 성능 최적화
          />
        </ImageListItem>
      ))}
    </ImageList>
  );
}

const itemData = [
  {
    img: '/images/ADizziLogo.png',
  },
  {
    img: '/images/ADizziLogo.png',
  },
  {
    img: '/images/ADizziLogo.png',
  },
  {
    img: '/images/ADizziLogo.png',
  },
  {
    img: '/images/ADizziLogo.png',
  },
  {
    img: '/images/ADizziLogo.png',
  },
  {
    img: '/images/ADizziLogo.png',
  },
  {
    img: '/images/ADizziLogo.png',
  },
  {
    img: '/images/ADizziLogo.png',
  },
  {
    img: '/images/ADizziLogo.png',
  },
  {
    img: '/images/ADizziLogo.png',
  },
  {
    img: '/images/ADizziLogo.png',
  },
  {
    img: '/images/ADizziLogo.png',
  },
  {
    img: '/images/ADizziLogo.png',
  },
  {
    img: '/images/ADizziLogo.png',
  },
];

const ItemImage = styled.img`
  display: flex;
  height: 70%;
`;
