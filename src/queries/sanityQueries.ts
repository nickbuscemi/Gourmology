
export const GENERIC_ABOUT_QUERY = (sectionType: string) => `*[_type == "aboutSection" && sectionType == "${sectionType}"] {
  title,
  paragraphs,
  paragraph,
  buttonText,
  buttonLink,
  "imageSrc": imageSrc.asset->url,
  imageAlt
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


export const MENU_QUERY = (menuType: string) => {
  return `*[_type == "menu" && menuType == "${menuType}"]{
    title,
    images[]{
      asset->{
        _id,
        url
      }
    }
  }`;
};








  // Add other queries here as needed
  