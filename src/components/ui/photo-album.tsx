import PhotoAlbum from "react-photo-album";
import { cloudFlareImages } from "@/data/cloudFlareImagesConfig";

const photos = [
    { src: cloudFlareImages.fish, width: 800, height: 600 },
    { src: cloudFlareImages.paella, width: 800, height: 1400 },
    { src: cloudFlareImages.lamb, width: 1400, height: 900 },
    { src: cloudFlareImages.paella, width: 800, height: 1200 },
    { src: cloudFlareImages.lamb, width: 1500, height: 1900 },
    { src: cloudFlareImages.caciopepe, width: 800, height: 600 },
    { src: cloudFlareImages.paella, width: 800, height: 1400 },
    { src: cloudFlareImages.table1, width: 1400, height: 900 },
    { src: cloudFlareImages.fish, width: 800, height: 1200 },
    { src: cloudFlareImages.lobsterroll, width: 1500, height: 1900 },
    { src: cloudFlareImages.lobsterroll, width: 800, height: 600 },
    // Add more images as needed
  ];

export default function Album() {
  return <PhotoAlbum layout="masonry" photos={photos} />;
}