import React from 'react';
import Image from 'next/image';

// Define the ImageGalleryProps interface
interface ImageGalleryProps {
  title: string;
  image: string;
  id: string;
  itemData?: { image: string }[]; // Optional
}

// ImageGallery Component
const ImageGallery: React.FC<ImageGalleryProps> = ({
  title,
  image,
  id,
  itemData = [], // Default to empty array
}) => {
  // Create an array with 5 copies of the single image
  const images = Array(5).fill({ image });

  return (
    <div style={{
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      minHeight: '100vh',
      margin: '0 auto',
      padding: '16px',
      backgroundColor: '#f0f0f0',
    }}>
      <div style={{
        display: 'grid',
        gridTemplateColumns: '3fr 2fr', // Increase the width of the left side
        gap: '10px',
        maxWidth: '1200px', // Container max-width
        width: '100%',
      }}>
        {/* Left side: Single larger image with rounded left side */}
        <div style={{
          gridColumn: '1 / 2',
          position: 'relative',
          width: '100%',
          height: '600px', // Maintain a reasonable height
          borderRadius: '16px 0 0 16px', // Rounded left side only
          overflow: 'hidden', // Ensure the image fits within the rounded borders
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
          gridColumn: '2 / 3',
          display: 'grid',
          gridTemplateColumns: '1fr 1fr', // Two smaller columns
          gap: '6px', // Reduce gap to fit images
          alignContent: 'start',
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
                height: '300px', // Maintain a balanced height for right-side images
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
      </div>
    </div>
  );
};

export default ImageGallery;
