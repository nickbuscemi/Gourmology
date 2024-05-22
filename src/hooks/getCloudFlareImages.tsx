const accountHash = import.meta.env.VITE_CLOUDFLARE_ACCOUNT_HASH


if (!accountHash) {
  throw new Error('Missing Cloudflare account hash.');
}

/**
 * Constructs a Cloudflare image URL.
 * @param {string} imageId - The ID of the image.
 * @param {string} variant - The variant name (default is 'public').
 * @returns {string} - The constructed Cloudflare image URL.
 */
export const getCloudflareImageUrl = (imageId: string, variant: string = 'public'): string => {
  if (!imageId) {
    console.error('Missing image ID.');
    return '';
  }
  return `https://imagedelivery.net/${accountHash}/${imageId}/${variant}`;
};
