import  { createClient } from '@sanity/client'

const client = createClient({
  projectId: '1fgib5zu', // Replace with your project ID
  dataset: 'production', // Or your dataset name
  useCdn: true, // Use the CDN for fast responses
  apiVersion: '2021-10-21',
})

export default client
