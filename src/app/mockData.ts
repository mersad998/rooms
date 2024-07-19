import { ApartmentInformation } from './apartments/apartmentTypes';

export const mockApartments: ApartmentInformation[] = [
  {
    id: 1,
    name: 'apartment one',
    createdAt: 1721381563441,
    deposit: 1200,
    rent: 250,
    description: 'This is a nice apartment',
    location: 'Austria - vienna - Fleischmarkt 24 ',
    rate: 4,
    roomNumber: 2,
    size: 65,
    rooms: [
      {
        id: 1,
        apartmentId: 1,
        createdAt: 1721381563441,
        equipment: 'master/bed/air conditioner/tv',
        name: 'bedroom',
        imageUrl: 'https://www.friends-in-flats.com/assets/img/bg-building-1.jpg',
        size: 12,
      },
      {
        id: 1,
        apartmentId: 1,
        createdAt: 1721381563441,
        equipment: 'desk/chair',
        name: 'working room',
        imageUrl: 'https://www.friends-in-flats.com/assets/img/bg-building-1.jpg',
        size: 12,
      },
    ],
  },
  {
    id: 2,
    name: 'apartment two',
    createdAt: 1721381593441,
    deposit: 0,
    rent: 1000,
    description: 'This is a perfect apartment',
    location: 'Austria - vienna - Theresianumgasse 21a',
    rate: 3,
    roomNumber: 1,
    size: 50,
    rooms: [
      {
        id: 1,
        apartmentId: 1,
        createdAt: 1721381593441,
        equipment: 'master/bed/air conditioner/tv/desk/chair',
        name: 'versatile room',
        imageUrl: 'https://www.friends-in-flats.com/assets/img/bg-building-1.jpg',
        size: 18,
      },
    ],
  },
];
