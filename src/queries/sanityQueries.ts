export const GENERIC_ABOUT_QUERY = (sectionType: string) => `*[_type == "aboutSection" && sectionType == "${sectionType}"] {
  title,
  paragraphs,
  paragraph,
  buttonText,
  buttonLink,
  "imageSrc": imageSrc.asset->url,
  imageAlt
}`;


export const ABOUT3_QUERY = `*[_type == "about3Page"] {
    title, 
    paragraphs, 
    buttonText, 
    buttonLink, 
    "imageSrc": imageSrc.asset->url, 
    imageAlt
}`;
  
export const ABOUT_QUERY = `*[_type == "aboutPage"] {
    title, 
    paragraphs, 
    buttonText, 
    buttonLink, 
    "imageSrc": imageSrc.asset->url, 
    imageAlt
}`;

export const ABOUT2_QUERY = `*[_type == "about2Page"] {
    title, 
    paragraphs
}`;

export const ABOUT4_QUERY = `*[_type == "about4Page"] {
    title, 
    paragraph,
    buttonText,
    buttonLink
}`;

export const SERVICE_PAGE_QUERY = (serviceName: string) => `*[_type == "servicePage" && title == "${serviceName}"] {
    title,
    content1 {
      title,
      description,
      "imageUrl": imageUrl.asset->url,
      imageAlt,
      buttonLabel
    },
    content2 {
      title,
      description,
      "imageUrl": imageUrl.asset->url,
      imageAlt,
      buttonLabel
    }
}`;


export const MENU_QUERY = (menuTitle: string) => `*[_type == "menu" && title == "${menuTitle}"]{
  title,
  images[]{
    asset->{
      _id,
      url
    }
  }
}`;





  // Add other queries here as needed
  