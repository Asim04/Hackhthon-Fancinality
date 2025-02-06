import Image from "next/image";

interface ImageGalleryProps {
  images: string[];
}

const ImageGallery = ({ images }: ImageGalleryProps) => {
  return (
    <div className="flex flex-col md:flex-row gap-4">
      <div className="flex-1">
        <Image
          src={images[0]}
          alt="Main Product Image"
          width={600}
          height={400}
          className="rounded-lg object-cover"
        />
      </div>
      <div className="flex flex-col gap-2 flex-1">
        {images.slice(1).map((img, idx) => (
          <Image
            key={idx}
            src={img}
            alt={`Gallery Image ${idx + 1}`}
            width={200}
            height={150}
            className="rounded-lg object-cover"
          />
        ))}
      </div>
    </div>
  );
};

export default ImageGallery;
