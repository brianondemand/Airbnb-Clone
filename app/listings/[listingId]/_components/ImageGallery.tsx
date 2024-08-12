import React from 'react';
import Image from 'next/image';

// Define the ImageGalleryProps interface
interface ImageGalleryProps {
  title: string;
  image: string;
  id: string;
}

// ImageGallery Component
const ImageGallery: React.FC<ImageGalleryProps> = ({
  title,
  image,
  id,
}) => {
  // Create an array with 5 copies of the single image
  const images = Array(5).fill({ image });

  return (
    <div className="grid grid-cols-[3fr_2fr] gap-2 w-full h-full">
      {/* Left side: Single larger image with rounded left side */}
      <div className="relative w-full h-[600px] rounded-l-lg overflow-hidden col-span-1">
        <Image
          src={images[0].image}
          alt={title}
          layout="fill"
          objectFit="contain"
          loading="lazy"
          className="transition-transform duration-300 hover:scale-105"
        />
      </div>
      
      {/* Right side: Smaller images in grid */}
      <div className="grid grid-cols-2 gap-2 h-[600px] col-span-1">
        {images.slice(1).map((item, index) => {
          const borderRadius = index === 1 
            ? 'rounded-tr-lg' // Top-right corner of the last column
            : index === 3
            ? 'rounded-br-lg' // Bottom-right corner of the last column
            : ''; // No rounding for other images
            
          return (
            <div key={index} className={`relative w-full h-full overflow-hidden ${borderRadius}`}>
              <Image
                src={item.image}
                alt={title}
                layout="fill"
                objectFit="contain"
                loading="lazy"
                className="transition-transform duration-300 hover:scale-105"
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ImageGallery;
