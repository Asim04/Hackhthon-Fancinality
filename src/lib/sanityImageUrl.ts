import imageUrlBuilder from '@sanity/image-url'
import { createClient } from 'next-sanity'

const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET,
  apiVersion: '2021-03-25',
  useCdn: true
})

const builder = imageUrlBuilder(client)

export function urlFor(source: { asset?: { _ref?: string } } | string) {
  // Handle different input types
  if (typeof source === 'string') {
    return builder.image(source).url()
  }
  
  // Handle Sanity image object
  const imageRef = typeof source === 'object' && source.asset?._ref 
    ? source.asset._ref 
    : '/placeholder.png'
  
  return builder.image(imageRef).url()
}
