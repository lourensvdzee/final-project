export const handlePrevImage = (
  images: string[],
  imageIndex: number,
  setImageIndex: React.Dispatch<React.SetStateAction<number>>
) => {
  setImageIndex((prevIndex) =>
    prevIndex === 0 ? images.length - 1 : prevIndex - 1
  );
};

export const handleNextImage = (
  images: string[],
  imageIndex: number,
  setImageIndex: React.Dispatch<React.SetStateAction<number>>
) => {
  setImageIndex((prevIndex) =>
    prevIndex === images.length - 1 ? 0 : prevIndex + 1
  );
};

export const handleImageError = (
  index: number,
  imageIndex: number,
  setImageIndex: React.Dispatch<React.SetStateAction<number>>,
  setImages: React.Dispatch<React.SetStateAction<string[]>>
) => {
  setImages((prevImages) => prevImages.filter((_, i) => i !== index));
  if (index === imageIndex) {
    setImageIndex(0);
  }
};
