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
        clubName: coalesce(clubName, Roryaunited),
        navTitle: coalesce(navTitle, clubName, Roryaunited),
        heroTitle,
        heroSubtitle,
        heroImage{asset->{url}},
        ctaText,
        ctaUrl,
        aboutTitle,
        aboutText,
        aboutImage{asset->{url}},
        visionTitle,
        visionText,
        ourVision[]{..., children[]{text}},
        visionImage{asset->{url}},
        valuesTitle,
        values[]{valueTitle, valueDetail},
        sloganTitle,
        sloganText,
        founderTitle,
        founderText,
        galleryTitle,
        contactTitle,
        contactText,
        footerText,
        sections[]{sectionTitle, sectionText, sectionImage{asset->{url}}},
        seoTitle,
        seoDescription
      }`
    : `*[_type == "landingPage"] | order(_createdAt desc)[0]{
        clubName: coalesce(clubName, Roryaunited),
        navTitle: coalesce(navTitle, clubName, Roryaunited),
        heroTitle,
        heroSubtitle,
        heroImage{asset->{url}},
        ctaText,
        ctaUrl,
        aboutTitle,
        aboutText,
        aboutImage{asset->{url}},
        visionTitle,
        visionText,
        ourVision[]{..., children[]{text}},
        visionImage{asset->{url}},
        valuesTitle,
        values[]{valueTitle, valueDetail},
        sloganTitle,
        sloganText,
        founderTitle,
        founderText,
        galleryTitle,
        contactTitle,
        contactText,
        footerText,
        sections[]{sectionTitle, sectionText, sectionImage{asset->{url}}},
        seoTitle,
        seoDescription
      }`

  return client.fetch(query, slug ? {slug} : {})
}
