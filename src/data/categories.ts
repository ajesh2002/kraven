import blobRestaurants from '../assets/blob-restaurants.svg'
import blobGroceries from '../assets/blob-groceries.svg'
import blobRideShare from '../assets/blob-ride-share.svg'
import blobIce from '../assets/blob-ice.svg'
import blobDonate from '../assets/blob-donate.svg'
import blobBeverages from '../assets/blob-beverages.svg'
import blobFlowers from '../assets/blob-flowers.svg'
import blobRetail from '../assets/blob-retail.svg'
import blobGiftcard from '../assets/blob-giftcard.svg'
import blobFamilyIsland from '../assets/blob-family-island.svg'
import blobLoyalty from '../assets/blob-loyalty.svg'
import sprite from '../assets/sprite.webp'
import ice from '../assets/ice.webp'
import retail from '../assets/retail.webp'
import giftcard from '../assets/giftcard.webp'
import familyIsland from '../assets/family-island.webp'

// Positions come from the Figma frame, in design pixels relative to the card.
// Cards render at any height; art scales with the card height (see ArtLayer).
export type Crop = { left: number; top: number; width: number; height: number }

export type Layer = {
  src: string
  x: number
  y: number
  w: number
  h: number
  crop?: Crop
}

export type Category = {
  id: string
  title: string
  description: string
  background: string
  layers: Layer[]
}

// Most product photos live in one sprite sheet; each card shows a cropped region of it.
const spriteCrop = (left: number, top: number): Crop => ({ left, top, width: 395.82, height: 538.91 })

export const CARD_DESIGN_WIDTH = 168
export const CARD_DESIGN_HEIGHT = 80

const blob = (src: string, x: number, y = -10, w = 112.782) => ({ src, x, y, w, h: 109.053 })

export const categories: Category[] = [
  {
    id: 'restaurants',
    title: 'Restaurants',
    description: 'Fresh meals delivered',
    background: '#fff6ef',
    layers: [
      blob(blobRestaurants, 73),
      { src: sprite, x: 104, y: 10, w: 77.052, h: 68.998, crop: spriteCrop(-88.85, -24.51) },
    ],
  },
  {
    id: 'beverages',
    title: 'Beverages',
    description: 'Drinks on demand',
    background: '#fcf7ee',
    layers: [
      blob(blobRestaurants, 73, -9.5),
      blob(blobBeverages, 73, -9.5),
      { src: sprite, x: 107, y: 13.5, w: 70.966, h: 63.548, crop: spriteCrop(-279.67, -10.88) },
    ],
  },
  {
    id: 'groceries',
    title: 'Groceries',
    description: 'Kitchen essentials daily',
    background: '#fff2f5',
    layers: [
      blob(blobGroceries, 77, -29, 137.89),
      { src: sprite, x: 108, y: 10, w: 85, h: 76.115, crop: spriteCrop(-88.85, -125.65) },
    ],
  },
  {
    id: 'flowers',
    title: 'Flowers',
    description: 'Fresh blooms delivered',
    background: '#eef8fa',
    layers: [
      blob(blobFlowers, 58.82, -9.5, 126.958),
      { src: sprite, x: 98.04, y: 7.5, w: 80.963, h: 72.5, crop: spriteCrop(-278.65, -122.24) },
    ],
  },
  {
    id: 'ride-share',
    title: 'Ride Share',
    description: 'Ride a car in minutes',
    background: '#fff3f3',
    layers: [
      blob(blobRideShare, 73.6, -10, 112.181),
      { src: sprite, x: 102.7, y: -2, w: 95.3, h: 85.338, crop: spriteCrop(-88.85, -219.97) },
    ],
  },
  {
    id: 'retail',
    title: 'Retail',
    description: 'Everyday essentials',
    background: '#faf1fa',
    layers: [blob(blobRetail, 73, -9.5), { src: retail, x: 9, y: -12, w: 169.5, h: 113 }],
  },
  {
    id: 'ice',
    title: 'Ice',
    description: 'Keep it cool always',
    background: '#edf8ff',
    layers: [blob(blobIce, 20.45, -10, 165.337), { src: ice, x: 58, y: 6, w: 127.5, h: 85 }],
  },
  {
    id: 'giftcard',
    title: 'Giftcard',
    description: 'Send a gift, anytime',
    background: '#faf8f0',
    layers: [blob(blobGiftcard, 73, -9.5), { src: giftcard, x: 75, y: -4, w: 118, h: 78.667 }],
  },
  {
    id: 'donate',
    title: 'Donate Now',
    description: 'Support a cause',
    background: '#fff3f2',
    layers: [
      blob(blobDonate, 73),
      { src: sprite, x: 88, y: 4, w: 91.572, h: 82, crop: spriteCrop(-88.85, -391.56) },
    ],
  },
  {
    id: 'family-island',
    title: 'Family Island Delivery',
    description: 'Special delivery across islands',
    background: '#f1f6ff',
    layers: [blob(blobFamilyIsland, 73, -9.5), { src: familyIsland, x: 73, y: -5, w: 157.5, h: 105 }],
  },
]

export const LOYALTY_DESIGN_WIDTH = 345
export const LOYALTY_DESIGN_HEIGHT = 84

export const loyalty = {
  title: 'Loyalty Points',
  description: 'Earn points, get exclusive rewards.',
  background: '#ece8ff',
  layers: [
    { src: blobLoyalty, x: 221, y: -8.98, w: 135, h: 109.036 },
    {
      src: sprite,
      x: 173,
      y: 8,
      w: 161,
      h: 86,
      crop: { left: -172.99, top: -583.9, width: 291.66, height: 667.95 },
    },
  ] satisfies Layer[],
}
