export type Product = {
  id: string;
  name: string;
  image: string;
  category: string;
};

export const products: Product[] = [
  { id: 'j1', name: 'Earing 3D', image: 'https://res.cloudinary.com/dd9tagtiw/image/upload/v1765866307/3d_earing_mg68e0.png', category: 'jewelry' },
  { id: 'j2', name: 'Ring 3D', image: 'https://res.cloudinary.com/dd9tagtiw/image/upload/v1765866307/3d_ring_mu1bhf.png', category: 'jewelry' },
  { id: 'j3', name: 'Necklace 3D', image: 'https://res.cloudinary.com/dd9tagtiw/image/upload/v1765866308/3d_necklace_irsud9.png', category: 'jewelry' },
  { id: 'j4', name: 'Bangle 2D', image: 'https://res.cloudinary.com/dd9tagtiw/image/upload/v1765627023/bangles_qefa8l.webp', category: 'jewelry' },
  { id: 'j5', name: 'Ring 2D', image: 'https://res.cloudinary.com/dd9tagtiw/image/upload/v1765627021/2d-ring_kjcztf.png', category: 'jewelry' },
  { id: 'j6', name: 'Necklace 2D', image: 'https://res.cloudinary.com/dd9tagtiw/image/upload/v1765627021/2d-necklace_gme1iy.png', category: 'jewelry' },
  { id: 'f1', name: 'T-Shirt 3D', image: 'https://res.cloudinary.com/dd9tagtiw/image/upload/v1765625660/Customizable_t-shirt_design_with_KR_Customizer_ecommerce_product_customizer_bihi2m.png', category: 'fashion' },
  { id: 'f2', name: 'Shirt 3D', image: 'https://res.cloudinary.com/dd9tagtiw/image/upload/v1765625660/Gingham_shirt_product_customization_using_KR_Customizer_2D_3D_apparel_customizer_tyov8k.png', category: 'fashion' },
  { id: 'f3', name: 'Sport Jersey 2D', image: 'https://res.cloudinary.com/dd9tagtiw/image/upload/v1765625663/Fashion_apparel_customization_preview_with_KR_Customizer_software_gswjmg.png', category: 'fashion' },
  { id: 'w1', name: 'M416 3D', image: 'https://res.cloudinary.com/driwhaog/image/upload/v1790798398/ChatGPT_Image_Oct_1_2026_01_29_47_AM.png', category: 'weapons' },
  { id: 'w2', name: 'M416 3D', image: 'https://res.cloudinary.com/driwhaog/image/upload/v1790798497/ChatGPT_Image_Oct_1_2026_01_31_23_AM.png', category: 'weapons' },
  { id: 'w3', name: 'M416 3D', image: 'https://res.cloudinary.com/driwhaog/image/upload/v1790798586/ChatGPT_Image_Oct_1_2026_01_32_29_AM.png', category: 'weapons' },
  { id: 'p1', name: 'Phone Case', image: 'https://res.cloudinary.com/driwhaog/image/upload/v1790798261/ChatGPT_Image_Oct_1_2026_01_27_21_AM.png', category: 'pod' }, 
  { id: 'p2', name: 'Tote Bag', image: 'https://res.cloudinary.com/driwhaog/image/upload/f_auto,q_auto/ChatGPT_Image_Oct_1_2026_01_15_18_AM', category: 'pod' }, 
  { id: 'p3', name: 'Bottle', image: 'https://res.cloudinary.com/driwhaog/image/upload/v1790798144/ChatGPT_Image_Oct_1_2026_01_24_44_AM.png', category: 'pod' },
  { id: 'p4', name: 'Hat', image: 'https://res.cloudinary.com/dqjbzgksw/image/upload/v1758102497/Hat_mi4g0e.png', category: 'pod' },
  { id: 'p5', name: 'Pillow', image: 'https://res.cloudinary.com/dqjbzgksw/image/upload/v1758102497/pillow_vqrnet.png', category: 'pod' },
  { id: 'p6', name: 'Pillow', image: 'https://res.cloudinary.com/dqjbzgksw/image/upload/v1758102498/Laptop_Sleeve_uk0kne.png', category: 'pod' },
  { id: 'a1', name: 'Bike 3D', image: 'https://res.cloudinary.com/driwhaog/image/upload/v1790798836/ChatGPT_Image_Oct_1_2026_01_37_03_AM.png', category: 'automotive' },
  { id: 'a2', name: 'Car 3D', image: 'https://cdn11.bigcommerce.com/s-vl5e5n6g4x/images/stencil/1280w/products/114/391/2025-chevrolet-silverado-1500-custom__13802.1757576252.png?c=1', category: 'automotive' },
  { id: 'a3', name: 'Truck 3D', image: 'https://res.cloudinary.com/driwhaog/image/upload/v1790798779/ChatGPT_Image_Oct_1_2026_01_36_10_AM.png', category: 'automotive' },
];
