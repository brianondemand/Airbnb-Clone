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
    <>
      {/* Left side: Single larger image with rounded left side */}
      <div style={{
        position: 'relative',
        width: '100%',
        height: '100%', // Adjust height to fit parent container
        borderRadius: '16px 0 0 16px', // Rounded left side only
        overflow: 'hidden', // Ensure the image fits within the rounded borders
        gridColumn: '1 / 2', // Ensure it spans the left column
      }}>
        <Image
          src={images[0].image}
          alt={title}
          layout="fill"
          objectFit="cover"
          loading="lazy"
        />
      </div>
      
      {/* Right side: Smaller images in grid */}
      <div style={{
        display: 'grid',
        gridTemplateColumns: '1fr 1fr', // Two smaller columns
        gap: '6px', // Reduce gap to fit images
        alignContent: 'start',
        gridColumn: '2 / 3', // Ensure it spans the right column
        width: '100%', // Adjust width to fit parent container
        height: '100%', // Adjust height to fit parent container
      }}>
        {images.slice(1).map((item, index) => {
          const borderRadius = index === 1 
            ? '0 16px 0 0' // Top-right corner of the last column
            : index === 3
            ? '0 0 16px 0' // Bottom-right corner of the last column
            : '0'; // No rounding for other images

          return (
            <div key={index} style={{
              position: 'relative',
              width: '100%',
              height: '100%', // Adjust height to fit parent container
              borderRadius: borderRadius, // Apply rounded borders conditionally
              overflow: 'hidden', // Ensure the image fits within the rounded borders
            }}>
              <Image
                src={item.image}
                alt={title}
                layout="fill"
                objectFit="cover"
                loading="lazy"
              />
            </div>
          );
        })}
      </div>
    </>
  );
};

export default ImageGallery;
