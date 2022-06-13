import sanityClient from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url';

export const client = sanityClient({
    projectId: '8tt2ixym',
    dataset: 'production',
    apiVersion: '1',
    useCdn: true,
    token: process.env.SANITY_PUBLIC_TOKEN
});

const builder = imageUrlBuilder(client);

export const urlFor = (source) => builder.image(source);