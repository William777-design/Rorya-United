import { client } from './sanityClient.js'

const translations = {
    en: {
        clubName: "Rorya United Football Club (RU FC)",
        navClubName: "Rorya United FC",
        langToggle: "Switch to Swahili",
        aboutTitle: "About Us",
        aboutText: "Rorya United FC is a football club established with the goal of developing and nurturing youth talents in Rorya District. This club has been a hub for sports development by providing opportunities for youth to showcase their abilities and participate in various local and regional competitions.",
        visionTitle: "Our Vision",
        visionText: "To be the best football club in Mara Region and one of the leading clubs in nurturing youth talents in the country, from district to regional to national level.",
        valuesTitle: "Our Values",
        values: ["Discipline", "Unity", "Respect", "Commitment", "Patriotism"],
        valuesDetails: [
            "Discipline keeps every player focused in training and on match day.",
            "Unity means working together on and off the pitch as one team.",
            "Respect builds trust between teammates, coaches, fans, and opponents.",
            "Commitment means showing up every day ready to grow and perform.",
            "Patriotism is pride in representing Rorya District through football."
        ],
        sloganTitle: "Our Slogan",
        sloganText: "We are United by Football",
        founderTitle: "Our Founder",
        founderText: "Peter Owino is the sports leader and youth development advocate in Rorya District. He is the owner of Rorya United FC, which he founded on 01/June/2024.",
        footerText: "Headquarters: Rorya District",
        heroSubtitle: "United by Football, Driven by Passion",
        learnMore: "Learn More",
        contactTitle: "Contact Us",
        contactText: "Get in touch with Rorya United FC. We'd love to hear from you!",
        contactSubmit: "Send",
        contactSuccessMessage: "Your message has been sent successfully! We will get back to you soon.",
        galleryTitle: "Gallery"
    },
    sw: {
        clubName: "Rorya United Football Club (RU FC)",
        navClubName: "Rorya United FC",
        langToggle: "Badili kwa Kiingereza",
        aboutTitle: "Kuhusu Sisi",
        aboutText: "Rorya United FC ni klabu ya mpira wa miguu iliyoanzishwa kwa lengo la kukuza na kuendeleza vipaji vya vijana katika Wilaya ya Rorya. Klabu hii imekuwa chachu ya maendeleo ya michezo kwa kutoa fursa kwa vijana kuonesha uwezo wao na kushiriki katika mashindano mbalimbali ya ndani na kikanda.",
        visionTitle: "Dira Yetu",
        visionText: "Kuwa klabu bora ya mpira wa miguu katika Mkoa wa Mara na moja ya klabu innazoongoza kwa kukuza vipaji vya vijana nchini Wilayani, Mkoni mpaka kitaifa.",
        valuesTitle: "Maadili Yetu",
        values: ["Nidhamu", "Umoja", "Heshima", "Kujituma", "Uzalendo"],
        valuesDetails: [
            "Nidhamu inaweka wachezaji wote wakilenga katika mafunzo na siku ya mechi.",
            "Umoja unamaanisha kufanya kazi pamoja uwanjani na nje ya uwanja kama timu moja.",
            "Heshima hujenga uaminifu kati ya wachezaji, makocha, mashabiki, na wapinzani.",
            "Kujituma kunamaanisha kuonekana kila siku tayari kukua na kutoa kiwango.",
            "Uzalendo ni fahari ya kuwakilisha Wilaya ya Rorya kupitia mpira wa miguu."
        ],
        sloganTitle: "Slogani Yetu",
        sloganText: "We are United by Football",
        founderTitle: "Mwanzilishi Wetu",
        founderText: "Peter Owino ni kiongozi wa michezo na mdau wa maendeleo ya vijana katika Wilaya ya Rorya. Yeye ndiye mmiliki wa Rorya United FC, aliyoianzisha 01/June/2024.",
        footerText: "Makao Makuu: Wilaya ya Rorya",
        heroSubtitle: "United by Football, Driven by Passion",
        learnMore: "Jifunze Zaidi",
        contactTitle: "Wasiliana Nasi",
        contactText: "Wasiliana na Rorya United FC. Tunapenda kusikia kutoka kwako!",
        contactSubmit: "Tuma",
        contactSuccessMessage: "Ujumbe umefanikiwa kutumwa! Tutakujibu hivi karibuni.",
        galleryTitle: "Picha"
    }
};

let currentLang = 'en';
let currentPageContent = null;

// Hamburger Menu Toggle
const hamburger = document.getElementById('hamburger');
const navMenu = document.getElementById('nav-menu');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');
});

// Close menu when a link is clicked
document.querySelectorAll('#nav-menu a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        hamburger.classList.remove('active');
        navMenu.classList.remove('active');
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        target.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    });
});

// Close menu when scrolling
window.addEventListener('scroll', () => {
    hamburger.classList.remove('active');
    navMenu.classList.remove('active');
});

// Intersection Observer for scroll animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, observerOptions);

// Observe all sections
document.querySelectorAll('.section').forEach(section => {
    observer.observe(section);
});

// Navbar background change on scroll
window.addEventListener('scroll', () => {
    const navbar = document.getElementById('navbar');
    if (window.scrollY > 100) {
        navbar.style.backgroundColor = 'rgba(0, 64, 128, 0.95)';
    } else {
        navbar.style.backgroundColor = 'rgba(0, 64, 128, 0.9)';
    }
});

// Active nav link while scrolling
const sectionLinks = document.querySelectorAll('#nav-menu a[href^="#"]');
const sections = document.querySelectorAll('section[id]');
function updateActiveNavLink() {
    const fromTop = window.scrollY + 140;
    sections.forEach(section => {
        const top = section.offsetTop;
        const height = section.offsetHeight;
        const link = document.querySelector(`#nav-menu a[href="#${section.id}"]`);
        if (link) {
            link.classList.toggle('active', top <= fromTop && top + height > fromTop);
        }
    });
}
window.addEventListener('scroll', updateActiveNavLink);
window.addEventListener('load', updateActiveNavLink);

// Values flip card builder + toggle behavior (accessible + touch-friendly)
function toggleValueItem(item, btn) {
    const isOpen = item.classList.toggle('open');
    btn.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
    btn.tabIndex = isOpen ? -1 : 0;
}

// Typing effect for hero subtitle (optional enhancement)
function typeWriter(element, text, speed = 50) {
    let i = 0;
    element.textContent = '';
    function type() {
        if (i < text.length) {
            element.textContent += text.charAt(i);
            i++;
            setTimeout(type, speed);
        }
    }
    type();
}

// Initialize typing effect on load
async function initializePage() {
    updateLanguage()

    try {
        const landingPage = await fetchLandingPageContent()
        if (landingPage) {
            currentPageContent = landingPage
            applyLandingPageContent(landingPage)
        }
    } catch (error) {
        console.warn('Sanity landing page fetch failed:', error)
    }

    const subtitle = document.getElementById('hero-subtitle')
    if (subtitle) {
        const subtitleText = subtitle.textContent || translations[currentLang].heroSubtitle
        typeWriter(subtitle, subtitleText, 30)
    }
}

window.addEventListener('load', initializePage)

function getRouteSlug() {
    const url = new URL(window.location.href)
    const querySlug = url.searchParams.get('slug')
    if (querySlug) return querySlug

    const pathname = url.pathname.replace(/\/$/, '')
    const pathSegment = pathname.split('/').pop()
    if (pathSegment && pathSegment !== 'index.html' && pathSegment !== '') {
        return pathSegment
    }

    return null
}

async function fetchLandingPageContent() {
    const slug = getRouteSlug()
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

    return client.fetch(query, slug ? { slug } : {})
}

function portableTextToPlainText(blocks = []) {
    return (blocks || [])
        .filter(block => block && block._type === 'block' && Array.isArray(block.children))
        .map(block => block.children.map(child => child.text || '').join(''))
        .join('\n\n')
}

function setTextContent(elementId, value, fallback = '') {
    const element = document.getElementById(elementId)
    if (!element) return

    const text = value && String(value).trim() ? value : fallback
    element.textContent = text
}

function normalizeValues(values = [], fallbackValues = [], fallbackDetails = []) {
    const toValueItem = (value, detail = '') => {
        if (typeof value === 'string') {
            return { title: value, detail }
        }

        if (value && typeof value === 'object') {
            return {
                title: value.valueTitle || value.title || value.label || '',
                detail: value.valueDetail || value.detail || value.description || detail,
            }
        }

        return null
    }

    if (Array.isArray(values) && values.length > 0) {
        return values
            .map((value, index) => {
                const detail = typeof value === 'object' && value ? value.valueDetail || value.detail || value.description || '' : ''
                return toValueItem(value, detail || fallbackDetails[index] || '')
            })
            .filter((item) => item && item.title)
    }

    return (Array.isArray(fallbackValues) ? fallbackValues : [])
        .map((value, index) => toValueItem(value, fallbackDetails[index] || ''))
        .filter((item) => item && item.title)
}

function renderValues(values = [], fallbackValues = [], fallbackDetails = []) {
    const valuesList = document.getElementById('values-list')
    if (!valuesList) return

    const source = normalizeValues(values, fallbackValues, fallbackDetails)
    valuesList.innerHTML = ''

    source.forEach((value, i) => {
        const item = document.createElement('div')
        item.className = 'value-item'

        const cardInner = document.createElement('div')
        cardInner.className = 'card-inner'

        const cardFront = document.createElement('button')
        cardFront.className = 'card-face card-front'
        cardFront.type = 'button'
        cardFront.id = `value-toggle-${i}`
        cardFront.setAttribute('aria-expanded', 'false')
        cardFront.setAttribute('aria-controls', `value-content-${i}`)

        const title = document.createElement('span')
        title.className = 'card-title'
        title.textContent = value.title

        const hint = document.createElement('span')
        hint.className = 'card-hint'
        hint.textContent = currentLang === 'sw' ? 'Gonga ili kubadilisha' : 'Tap to flip'

        cardFront.appendChild(title)
        cardFront.appendChild(hint)

        const cardBack = document.createElement('div')
        cardBack.className = 'card-face card-back'
        cardBack.id = `value-content-${i}`
        cardBack.setAttribute('role', 'button')
        cardBack.setAttribute('aria-label', currentLang === 'sw' ? 'Bonyeza ili kurudi nyuma' : 'Tap to flip back')
        cardBack.tabIndex = 0

        const p = document.createElement('p')
        p.textContent = value.detail || ''
        cardBack.appendChild(p)

        cardFront.addEventListener('click', () => toggleValueItem(item, cardFront))
        cardFront.addEventListener('keydown', (e) => {
            if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault()
                cardFront.click()
            }
        })

        cardBack.addEventListener('click', () => toggleValueItem(item, cardFront))
        cardBack.addEventListener('keydown', (e) => {
            if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault()
                toggleValueItem(item, cardFront)
            }
        })

        cardInner.appendChild(cardFront)
        cardInner.appendChild(cardBack)
        item.appendChild(cardInner)
        valuesList.appendChild(item)
    })
}

function renderCmsSections(sections) {
    const container = document.getElementById('cms-sections-container')
    container.innerHTML = ''
    if (!Array.isArray(sections) || sections.length === 0) {
        container.innerHTML = '<p>No extra content is available for this page.</p>'
        return
    }

    sections.forEach((section) => {
        const sectionEl = document.createElement('div')
        sectionEl.className = 'cms-section'

        if (section.sectionTitle) {
            const heading = document.createElement('h2')
            heading.textContent = section.sectionTitle
            sectionEl.appendChild(heading)
        }

        if (section.sectionText) {
            const paragraph = document.createElement('p')
            paragraph.textContent = section.sectionText
            sectionEl.appendChild(paragraph)
        }

        if (section.sectionImage?.asset?.url) {
            const image = document.createElement('img')
            image.src = section.sectionImage.asset.url
            image.alt = section.sectionTitle || 'Section image'
            image.className = 'cms-section-image'
            sectionEl.appendChild(image)
        }

        container.appendChild(sectionEl)
    })
}

function applyLandingPageContent(page) {
    if (!page) return

    const lang = translations[currentLang]

    document.title = page.seoTitle || page.clubName || document.title

    setTextContent('team-name', page.heroTitle || page.clubName, lang.clubName)
    setTextContent('nav-club-name', page.navTitle || page.clubName, lang.navClubName)
    setTextContent('hero-subtitle', page.heroSubtitle, lang.heroSubtitle)

    const ctaButton = document.querySelector('.cta-button')
    if (ctaButton) {
        ctaButton.href = page.ctaUrl || '#about'
        if (page.ctaText) {
            ctaButton.textContent = page.ctaText
        }
    }

    setTextContent('about-title', page.aboutTitle, lang.aboutTitle)
    setTextContent('about-text', page.aboutText, lang.aboutText)
    setTextContent('vision-title', page.visionTitle, lang.visionTitle)

    const visionText = page.visionText || portableTextToPlainText(page.ourVision)
    setTextContent('vision-text', visionText, lang.visionText)

    setTextContent('values-title', page.valuesTitle, lang.valuesTitle)
    renderValues(page.values, lang.values, lang.valuesDetails)

    setTextContent('slogan-title', page.sloganTitle, lang.sloganTitle)
    setTextContent('slogan-text', page.sloganText, lang.sloganText)
    setTextContent('founder-title', page.founderTitle, lang.founderTitle)
    setTextContent('founder-text', page.founderText, lang.founderText)
    setTextContent('gallery-title', page.galleryTitle, lang.galleryTitle)
    setTextContent('contact-title', page.contactTitle, lang.contactTitle)
    setTextContent('contact-text', page.contactText, lang.contactText)
    setTextContent('footer-text', page.footerText, lang.footerText)

    const aboutImage = document.querySelector('.club-image')
    if (aboutImage && page.aboutImage?.asset?.url) {
        aboutImage.src = page.aboutImage.asset.url
        aboutImage.alt = page.aboutTitle || lang.aboutTitle
    }

    if (page.heroImage?.asset?.url) {
        const hero = document.getElementById('hero')
        if (hero) {
            hero.style.backgroundImage = `url(${page.heroImage.asset.url})`
        }
    }

    if (page.visionImage?.asset?.url) {
        const visionSection = document.getElementById('vision')
        if (visionSection) {
            let visionImageEl = visionSection.querySelector('.cms-vision-image')
            if (!visionImageEl) {
                visionImageEl = document.createElement('img')
                visionImageEl.className = 'cms-vision-image'
                visionSection.appendChild(visionImageEl)
            }
            visionImageEl.src = page.visionImage.asset.url
            visionImageEl.alt = page.visionTitle || lang.visionTitle
        }
    }

    if (Array.isArray(page.sections) && page.sections.length > 0) {
        renderCmsSections(page.sections)
    }
}

function updateLanguage() {
    const lang = translations[currentLang]

    const teamName = document.getElementById('team-name')
    if (teamName) teamName.textContent = lang.clubName
    const navClubName = document.getElementById('nav-club-name')
    if (navClubName) navClubName.textContent = lang.navClubName
    const langToggle = document.getElementById('lang-toggle')
    if (langToggle) langToggle.textContent = lang.langToggle
    const heroSubtitle = document.getElementById('hero-subtitle')
    if (heroSubtitle) heroSubtitle.textContent = lang.heroSubtitle
    const ctaButton = document.querySelector('.cta-button')
    if (ctaButton) ctaButton.textContent = lang.learnMore
    const aboutTitle = document.getElementById('about-title')
    if (aboutTitle) aboutTitle.textContent = lang.aboutTitle
    const aboutText = document.getElementById('about-text')
    if (aboutText) aboutText.textContent = lang.aboutText
    const visionTitle = document.getElementById('vision-title')
    if (visionTitle) visionTitle.textContent = lang.visionTitle
    const visionText = document.getElementById('vision-text')
    if (visionText) visionText.textContent = lang.visionText
    const valuesTitle = document.getElementById('values-title')
    if (valuesTitle) valuesTitle.textContent = lang.valuesTitle
    renderValues([], lang.values, lang.valuesDetails)
    const sloganTitle = document.getElementById('slogan-title')
    if (sloganTitle) sloganTitle.textContent = lang.sloganTitle
    const sloganText = document.getElementById('slogan-text')
    if (sloganText) sloganText.textContent = lang.sloganText
    const founderTitle = document.getElementById('founder-title')
    if (founderTitle) founderTitle.textContent = lang.founderTitle
    const founderText = document.getElementById('founder-text')
    if (founderText) founderText.textContent = lang.founderText
    const galleryTitle = document.getElementById('gallery-title')
    if (galleryTitle) galleryTitle.textContent = lang.galleryTitle
    const contactTitle = document.getElementById('contact-title')
    if (contactTitle) contactTitle.textContent = lang.contactTitle
    const contactText = document.getElementById('contact-text')
    if (contactText) contactText.textContent = lang.contactText
    const footerText = document.getElementById('footer-text')
    if (footerText) footerText.textContent = lang.footerText
}

document.getElementById('lang-toggle').addEventListener('click', () => {
    currentLang = currentLang === 'en' ? 'sw' : 'en';
    updateLanguage();
});

const scrollTopButton = document.getElementById('scroll-to-top');
const carouselItems = Array.from(document.querySelectorAll('.carousel-item'));
const carouselDotsContainer = document.querySelector('.carousel-dots');
const carouselPrev = document.querySelector('.carousel-prev');
const carouselNext = document.querySelector('.carousel-next');
const lightbox = document.getElementById('lightbox');
const lightboxImage = document.querySelector('.lightbox-image');
const lightboxPrev = document.querySelector('.lightbox-prev');
const lightboxNext = document.querySelector('.lightbox-next');
const lightboxClose = document.querySelector('.lightbox-close');
let carouselIndex = 0;
let lightboxIndex = 0;

function handleScrollButton() {
    if (!scrollTopButton) return;
    const show = window.scrollY > 400;
    scrollTopButton.classList.toggle('show', show);
}

function setActiveSlide(index) {
    if (!carouselItems.length) return;
    carouselIndex = (index + carouselItems.length) % carouselItems.length;
    carouselItems.forEach((item, idx) => item.classList.toggle('active', idx === carouselIndex));
    updateCarouselDots();
}

function updateCarouselDots() {
    if (!carouselDotsContainer) return;
    carouselDotsContainer.querySelectorAll('button').forEach((dot, idx) => {
        dot.classList.toggle('active', idx === carouselIndex);
    });
}

function buildCarouselDots() {
    if (!carouselDotsContainer || !carouselItems.length) return;
    carouselDotsContainer.innerHTML = '';
    carouselItems.forEach((_, idx) => {
        const dot = document.createElement('button');
        dot.type = 'button';
        dot.setAttribute('aria-label', `View slide ${idx + 1}`);
        dot.className = idx === carouselIndex ? 'active' : '';
        dot.addEventListener('click', () => setActiveSlide(idx));
        carouselDotsContainer.appendChild(dot);
    });
}

function showLightbox(index) {
    if (!lightbox || !lightboxImage) return;
    lightboxIndex = (index + carouselItems.length) % carouselItems.length;
    const targetImage = carouselItems[lightboxIndex].querySelector('img');
    if (!targetImage) return;
    lightboxImage.src = targetImage.src;
    lightboxImage.alt = targetImage.alt || 'Gallery preview';
    lightbox.classList.add('open');
    lightbox.setAttribute('aria-hidden', 'false');
    lightboxClose?.focus();
}

function closeLightbox() {
    if (!lightbox) return;
    lightbox.classList.remove('open');
    lightbox.setAttribute('aria-hidden', 'true');
}

function showNextLightboxImage() {
    showLightbox(lightboxIndex + 1);
}

function showPrevLightboxImage() {
    showLightbox(lightboxIndex - 1);
}

function initializeCarousel() {
    if (!carouselItems.length) return;
    buildCarouselDots();
    carouselItems.forEach((item, idx) => {
        const image = item.querySelector('img');
        if (image) {
            image.setAttribute('loading', 'lazy');
            image.style.cursor = 'pointer';
            image.addEventListener('click', () => showLightbox(idx));
        }
    });
    setActiveSlide(0);
}

window.addEventListener('scroll', handleScrollButton);
scrollTopButton?.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
});
carouselPrev?.addEventListener('click', () => setActiveSlide(carouselIndex - 1));
carouselNext?.addEventListener('click', () => setActiveSlide(carouselIndex + 1));
lightboxClose?.addEventListener('click', closeLightbox);
lightboxPrev?.addEventListener('click', showPrevLightboxImage);
lightboxNext?.addEventListener('click', showNextLightboxImage);

window.addEventListener('keydown', (event) => {
    if (!lightbox || !lightbox.classList.contains('open')) return;
    if (event.key === 'Escape') {
        closeLightbox();
    }
    if (event.key === 'ArrowRight') {
        showNextLightboxImage();
    }
    if (event.key === 'ArrowLeft') {
        showPrevLightboxImage();
    }
});

document.addEventListener('click', (event) => {
    if (!lightbox || !lightbox.classList.contains('open')) return;
    if (event.target === lightbox) {
        closeLightbox();
    }
});

updateLanguage();
initializeCarousel();

// About section video handling: respect reduced motion, data-saver, and provide tap-to-play fallback
(function handleAboutVideo(){
    const aboutVideo = document.getElementById('about-video');
    if (!aboutVideo) return;

    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const saveData = navigator.connection && navigator.connection.saveData;
    const fallbackContainer = document.getElementById('video-fallback-container');

    if (prefersReduced || saveData) {
        aboutVideo.pause();
        aboutVideo.classList.add('video-hidden');
        if (fallbackContainer) {
            const btn = document.createElement('button');
            btn.type = 'button';
            btn.className = 'video-fallback-btn';
            btn.textContent = saveData ? 'Data saver on — Tap to play background' : 'Enable background video';
            btn.addEventListener('click', () => {
                aboutVideo.classList.remove('video-hidden');
                aboutVideo.play().then(() => btn.remove()).catch(() => {});
            });
            fallbackContainer.appendChild(btn);
        }
        return;
    }

    aboutVideo.muted = true;
    aboutVideo.setAttribute('playsinline', '');
    aboutVideo.playsInline = true;

    const playPromise = aboutVideo.play();
    if (playPromise !== undefined) {
        playPromise.catch(() => {
            if (fallbackContainer) {
                const btn = document.createElement('button');
                btn.type = 'button';
                btn.className = 'video-fallback-btn';
                btn.textContent = 'Tap to enable background';
                btn.addEventListener('click', () => {
                    aboutVideo.play().then(() => btn.remove()).catch(() => {});
                });
                fallbackContainer.appendChild(btn);
            }
        });
    }

    const vidObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                aboutVideo.play().catch(() => {});
            } else {
                aboutVideo.pause();
            }
        });
    }, { threshold: 0.25 });

    const aboutSection = document.getElementById('about');
    if (aboutSection) vidObserver.observe(aboutSection);
})();


