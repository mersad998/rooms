/* eslint-disable @next/next/no-img-element */
import { useState, type FC } from 'react';
import { ImageList, ImageListItem, ImageListItemBar } from '@mui/material';

import type { ImageGalleryProps, RoomImages } from './types';
import { DetailCardContainer } from '../detailCardContainer';
import ImageDialog from './imageDialog';

interface SelectedImage {
  name: string;
  imageUrl: string;
}

const ImageGallery: FC<ImageGalleryProps> = (props) => {
  const { images } = props;

  const [selectedImage, setSelectedImage] = useState<SelectedImage | null>(null);

  const onClose = (): void => {
    setSelectedImage(null);
  };

  const onImageClick = (img: SelectedImage): void => {
    setSelectedImage(img);
  };

  return (
    <>
      {!!selectedImage && (
        <ImageDialog imageUrl={selectedImage.imageUrl} name={selectedImage.name} onClose={onClose} key={selectedImage.imageUrl} />
      )}

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
                    onClick={() =>
                      onImageClick({
                        name: item.title,
                        imageUrl: item.img,
                      })
                    }
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
