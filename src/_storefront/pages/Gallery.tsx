import Hero3 from "@/components/shared/Hero3"
import Album from "@/components/ui/photo-album"

const StorefrontGallery = () => {
  return (
    <div className="lg:px-40">
        <Hero3 
            h1="Gallery" 
            p="A collection of our best dishes and events." 
             />
        <Album />
    </div>
  )
}

export default StorefrontGallery