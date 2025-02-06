import createImageUrlBuilder from '@sanity/image-url'
import { SanityImageSource } from "@sanity/image-url/lib/types/types";

import { dataset, projectId } from '../env'

// https://www.sanity.io/docs/image-url
const builder = createImageUrlBuilder({ projectId, dataset })

export const urlFor = (source: SanityImageSource): string => {
  return builder
    .image(source)
    .width(800)  // Limit width to 800px
    .quality(75) // Reduce image quality slightly
    .url() || '/placeholder.png'
}
