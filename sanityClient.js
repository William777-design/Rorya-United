import {createClient} from './rorya-united-page/node_modules/@sanity/client/dist/index.browser.js'

export const sanityConfig = {
  projectId: '77yk21r2',
  dataset: 'production',
  apiVersion: '2026-06-28',
  useCdn: false,
}

export const client = createClient(sanityConfig)

export async function getLandingPageContent(slug = null) {
  const query = slug
    ? `*[_type == "landingPage" && slug.current == $slug][0]{
        title: Roryaunited,
        heroTitle,
        heroSubtitle,
        heroImage{asset->{url}},
        intro,
        ctaText,
        ctaUrl,
        seoTitle,
        seoDescription,
        ourVision[]{..., children[]{text}},
        visionImage{asset->{url}},
        sections[]{sectionTitle, sectionText, sectionImage{asset->{url}}}
      }`
    : `*[_type == "landingPage"] | order(_createdAt desc)[0]{
        title: Roryaunited,
        heroTitle,
        heroSubtitle,
        heroImage{asset->{url}},
        intro,
        ctaText,
        ctaUrl,
        seoTitle,
        seoDescription,
        ourVision[]{..., children[]{text}},
        visionImage{asset->{url}},
        sections[]{sectionTitle, sectionText, sectionImage{asset->{url}}}
      }`

  return client.fetch(query, slug ? {slug} : {})
}
