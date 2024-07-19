/* eslint-disable @next/next/no-img-element */
import { type FC } from 'react';
import { ImageList, ImageListItem, ImageListItemBar } from '@mui/material';

import type { ImageGalleryProps, RoomImages } from './types';
import { DetailCardContainer } from '../detailCardContainer';

const ImageGallery: FC<ImageGalleryProps> = (props) => {
  const { images } = props;

  return (
    <>
      {Object.keys(images).map((galleryImageKey) => {
        return (
          <DetailCardContainer title={galleryImageKey} key={galleryImageKey}>
            <ImageList
              variant="masonry"
              cols={2}
              gap={8}
              style={{ display: 'flex', flexWrap: 'wrap', width: '100%', justifyContent: 'space-around' }}
            >
              {images[galleryImageKey as keyof RoomImages]?.map((item) => (
                <ImageListItem
                  key={item.img}
                  style={{
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                  }}
                >
                  <img
                    srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
                    src={`${item.img}?w=248&fit=crop&auto=format`}
                    alt={item.title}
                    loading="lazy"
                    style={{ width: 100, height: 100, objectFit: 'contain' }}
                  />
                  <ImageListItemBar
                    position="below"
                    title={item.title.replaceAll('_', ' ')}
                    style={{ width: '100%', textAlign: 'center' }}
                  />
                </ImageListItem>
              ))}
            </ImageList>
          </DetailCardContainer>
        );
      })}
    </>
  );
};

export default ImageGallery;
