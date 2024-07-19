export interface galleryImageObject {
  img: string;
  title: string;
}

export interface RoomImages {
  [roomName: string]: galleryImageObject[];
}

export interface ImageGalleryProps {
  images: RoomImages;
}
