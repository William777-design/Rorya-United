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
        sloganTitle: "Our Slogan",
        sloganText: "We are United by Football",
        founderTitle: "Our Founder",
        founderText: "Peter Owino is the sports leader and youth development advocate in Rorya District. He is the owner of Rorya United FC, which he founded on 01/June/2024.",
        footerText: "Headquarters: Rorya District",
        heroSubtitle: "United by Football, Driven by Passion",
        learnMore: "Learn More",
        contactTitle: "Contact Us",
        contactText: "Get in touch with Rorya United FC. We'd love to hear from you!"
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
        sloganTitle: "Slogani Yetu",
        sloganText: "We are United by Football",
        founderTitle: "Mwanzilishi Wetu",
        founderText: "Peter Owino ni kiongozi wa michezo na mdau wa maendeleo ya vijana katika Wilaya ya Rorya. Yeye ndiye mmiliki wa Rorya United FC, aliyoianzisha 01/June/2024.",
        footerText: "Makao Makuu: Wilaya ya Rorya",
        heroSubtitle: "United by Football, Driven by Passion",
        learnMore: "Jifunze Zaidi",
        contactTitle: "Wasiliana Nasi",
        contactText: "Wasiliana na Rorya United FC. Tunapenda kusikia kutoka kwako!"
    }
};

let currentLang = 'en';

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

// Interactive values list
document.querySelectorAll('#values-list li').forEach((li, index) => {
    li.addEventListener('click', () => {
        li.style.transform = 'scale(1.1)';
        setTimeout(() => {
            li.style.transform = 'scale(1)';
        }, 200);
    });
});

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
window.addEventListener('load', () => {
    const subtitle = document.getElementById('hero-subtitle');
    typeWriter(subtitle, subtitle.textContent, 30);
});

function updateLanguage() {
    const lang = translations[currentLang];

    document.getElementById('club-name').textContent = lang.clubName;
    document.getElementById('nav-club-name').textContent = lang.navClubName;
    document.getElementById('lang-toggle').textContent = lang.langToggle;
    document.getElementById('hero-subtitle').textContent = lang.heroSubtitle;
    document.querySelector('.cta-button').textContent = lang.learnMore;
    document.getElementById('about-title').textContent = lang.aboutTitle;
    document.getElementById('about-text').textContent = lang.aboutText;
    document.getElementById('vision-title').textContent = lang.visionTitle;
    document.getElementById('vision-text').textContent = lang.visionText;
    document.getElementById('values-title').textContent = lang.valuesTitle;
    const valuesList = document.getElementById('values-list');
    valuesList.innerHTML = '';
    lang.values.forEach(value => {
        const li = document.createElement('li');
        li.textContent = value;
        li.addEventListener('click', () => {
            li.style.transform = 'scale(1.1)';
            setTimeout(() => {
                li.style.transform = 'scale(1)';
            }, 200);
        });
        valuesList.appendChild(li);
    });
    document.getElementById('slogan-title').textContent = lang.sloganTitle;
    document.getElementById('slogan-text').textContent = lang.sloganText;
    document.getElementById('founder-title').textContent = lang.founderTitle;
    document.getElementById('founder-text').textContent = lang.founderText;
    document.getElementById('footer-text').textContent = lang.footerText;
}

document.getElementById('lang-toggle').addEventListener('click', () => {
    currentLang = currentLang === 'en' ? 'sw' : 'en';
    updateLanguage();
});

// Scroll to top button
const scrollToTopBtn = document.getElementById('scroll-to-top');

window.addEventListener('scroll', () => {
    if (window.pageYOffset > 300) {
        scrollToTopBtn.classList.add('show');
    } else {
        scrollToTopBtn.classList.remove('show');
    }
});

scrollToTopBtn.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});