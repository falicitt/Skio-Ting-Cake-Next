export const API_URL =
  process.env.NEXT_PUBLIC_API_URL || 'https://skye-lu-cake.herokuapp.com'

/**
 * Given an image return the Url
 * Works for local and deployed strapis
 * @param {any} image
 */

export const fromImageToUrl = (image) => {
  if (!image) {
    return '/vercel.svg'
  }

  if (image.url.indexOf('/') === 0) {
    return `${API_URL}${image.formats.medium.url}`
  }

  return image.url
}
