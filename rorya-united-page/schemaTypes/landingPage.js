import {defineType, defineField} from 'sanity'

export default defineType({
  name: 'landingPage',
  title: 'Landing Page',
  type: 'document',
  fields: [
    defineField({
      name: 'clubName',
      title: 'Club Name',
      type: 'string',
      description: 'Main name displayed on the site hero and page title.',
      validation: (Rule) => Rule.required().min(3),
    }),
    defineField({
      name: 'navTitle',
      title: 'Navigation Title',
      type: 'string',
      description: 'Shorter name shown in the navbar.',
    }),
    defineField({
      name: 'Roryaunited',
      title: 'Legacy Club Name',
      type: 'string',
      description: 'Legacy field kept for older content imports.',
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'clubName',
        maxLength: 96,
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'heroTitle',
      title: 'Hero Heading',
      type: 'string',
      description: 'Main heading shown in the hero section.',
    }),
    defineField({
      name: 'heroSubtitle',
      title: 'Hero Subtitle',
      type: 'text',
    }),
    defineField({
      name: 'heroImage',
      title: 'Hero Image',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: 'ctaText',
      title: 'Call To Action Text',
      type: 'string',
    }),
    defineField({
      name: 'ctaUrl',
      title: 'Call To Action URL',
      type: 'url',
    }),
    defineField({
      name: 'aboutTitle',
      title: 'About Title',
      type: 'string',
    }),
    defineField({
      name: 'aboutText',
      title: 'About Text',
      type: 'text',
    }),
    defineField({
      name: 'aboutImage',
      title: 'About Image',
      type: 'image',
      options: {hotspot: true},
    }),
    defineField({
      name: 'visionTitle',
      title: 'Vision Title',
      type: 'string',
    }),
    defineField({
      name: 'visionText',
      title: 'Vision Text',
      type: 'text',
    }),
    defineField({
      name: 'ourVision',
      title: 'Vision Rich Text',
      type: 'array',
      of: [{type: 'block'}],
    }),
    defineField({
      name: 'visionImage',
      title: 'Vision Image',
      type: 'image',
      options: {hotspot: true},
    }),
    defineField({
      name: 'valuesTitle',
      title: 'Values Title',
      type: 'string',
    }),
    defineField({
      name: 'values',
      title: 'Values',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            defineField({
              name: 'valueTitle',
              title: 'Value Title',
              type: 'string',
            }),
            defineField({
              name: 'valueDetail',
              title: 'Value Detail',
              type: 'text',
            }),
          ],
        },
      ],
    }),
    defineField({
      name: 'sloganTitle',
      title: 'Slogan Title',
      type: 'string',
    }),
    defineField({
      name: 'sloganText',
      title: 'Slogan Text',
      type: 'text',
    }),
    defineField({
      name: 'founderTitle',
      title: 'Founder Title',
      type: 'string',
    }),
    defineField({
      name: 'founderText',
      title: 'Founder Text',
      type: 'text',
    }),
    defineField({
      name: 'galleryTitle',
      title: 'Gallery Title',
      type: 'string',
    }),
    defineField({
      name: 'contactTitle',
      title: 'Contact Title',
      type: 'string',
    }),
    defineField({
      name: 'contactText',
      title: 'Contact Text',
      type: 'text',
    }),
    defineField({
      name: 'footerText',
      title: 'Footer Text',
      type: 'text',
    }),
    defineField({
      name: 'sections',
      title: 'Extra Page Sections',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            defineField({
              name: 'sectionTitle',
              title: 'Section Title',
              type: 'string',
            }),
            defineField({
              name: 'sectionText',
              title: 'Section Text',
              type: 'text',
            }),
            defineField({
              name: 'sectionImage',
              title: 'Section Image',
              type: 'image',
              options: {
                hotspot: true,
              },
            }),
          ],
        },
      ],
    }),
    defineField({
      name: 'seoTitle',
      title: 'SEO Title',
      type: 'string',
    }),
    defineField({
      name: 'seoDescription',
      title: 'SEO Description',
      type: 'text',
    }),
  ],
  preview: {
    select: {
      title: 'clubName',
      subtitle: 'slug.current',
    },
  },
})
