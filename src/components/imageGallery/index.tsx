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
            <ImageList variant="masonry" cols={2} gap={8} className="flex flex-wrap w-full justify-around">
              {images[galleryImageKey as keyof RoomImages]?.map((item) => (
                <ImageListItem key={item.img} className="flex flex-col justify-center">
                  <img
                    srcSet={`${item.img}`}
                    src={`${item.img}`}
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
                  <ImageListItemBar position="below" title={item.title.replaceAll('_', ' ')} className="w-full text-center" />
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
