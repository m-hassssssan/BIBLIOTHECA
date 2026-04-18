// ─── Site ────────────────────────────────────────────────────────────────────

export interface SiteConfig {
  title: string;
  description: string;
  language: string;
}

export const siteConfig: SiteConfig = {
  title: "Bibliotheca | A Sanctuary of Words",
  description: "Discover timeless literary classics and profound quotes that have shaped human thought across centuries. A curated collection of wisdom from the world's greatest minds.",
  language: "en",
};

// ─── Navigation ──────────────────────────────────────────────────────────────

export interface MenuLink {
  label: string;
  href: string;
}

export interface SocialLink {
  icon: string;
  label: string;
  href: string;
}

export interface NavigationConfig {
  brandName: string;
  menuLinks: MenuLink[];
  socialLinks: SocialLink[];
  searchPlaceholder: string;
  cartEmptyText: string;
  cartCheckoutText: string;
  continueShoppingText: string;
  menuBackgroundImage: string;
}

export const navigationConfig: NavigationConfig = {
  brandName: "Bibliotheca",
  menuLinks: [
    { label: "Home", href: "#hero" },
    { label: "Collection", href: "#classics" },
    { label: "Quotes", href: "#wisdom" },
    { label: "Journey", href: "#journal" },
    { label: "Explore", href: "#philosophy" },
  ],
  socialLinks: [
    { icon: "Instagram", label: "Instagram", href: "#" },
    { icon: "Twitter", label: "Twitter", href: "#" },
    { icon: "Facebook", label: "Facebook", href: "#" },
  ],
  searchPlaceholder: "Search titles, authors, quotes...",
  cartEmptyText: "Your collection is empty",
  cartCheckoutText: "Save Collection",
  continueShoppingText: "Continue Exploring",
  menuBackgroundImage: "/images/menu-bg.jpg",
};

// ─── Hero ────────────────────────────────────────────────────────────────────

export interface HeroConfig {
  tagline: string;
  title: string;
  ctaPrimaryText: string;
  ctaPrimaryTarget: string;
  ctaSecondaryText: string;
  ctaSecondaryTarget: string;
  backgroundImage: string;
}

export const heroConfig: HeroConfig = {
  tagline: "A Sanctuary of Words",
  title: "Where Stories\nBecome\nTimeless",
  ctaPrimaryText: "Explore Classics",
  ctaPrimaryTarget: "#classics",
  ctaSecondaryText: "Discover Quotes",
  ctaSecondaryTarget: "#wisdom",
  backgroundImage: "/images/hero-library.jpg",
};

// ─── SubHero ─────────────────────────────────────────────────────────────────

export interface Stat {
  value: number;
  suffix: string;
  label: string;
}

export interface SubHeroConfig {
  tag: string;
  heading: string;
  bodyParagraphs: string[];
  linkText: string;
  linkTarget: string;
  image1: string;
  image2: string;
  stats: Stat[];
}

export const subHeroConfig: SubHeroConfig = {
  tag: "Our Philosophy",
  heading: "The Power of the Written Word",
  bodyParagraphs: [
    "In an age of fleeting digital moments, we believe in the enduring magic of books. Each page turned is a journey taken, each word absorbed a seed planted in the garden of the mind. Literature transcends time, connecting us across centuries to the thoughts, dreams, and wisdom of those who came before.",
    "Our collection celebrates the masterpieces that have shaped human consciousness—the novels that made us weep, the poetry that made us soar, and the philosophy that made us question. These are not merely books; they are portals to other worlds, mirrors of our own souls, and beacons of understanding in an often confusing world."
  ],
  linkText: "Begin Your Journey",
  linkTarget: "#philosophy",
  image1: "/images/books-detail.jpg",
  image2: "/images/reading-moment.jpg",
  stats: [
    { value: 500, suffix: "+", label: "Classic Titles" },
    { value: 2000, suffix: "+", label: "Curated Quotes" },
    { value: 300, suffix: "+", label: "Legendary Authors" },
    { value: 100, suffix: "%", label: "Timeless Wisdom" },
  ],
};

// ─── Video Section ───────────────────────────────────────────────────────────

export interface VideoSectionConfig {
  tag: string;
  heading: string;
  bodyParagraphs: string[];
  ctaText: string;
  ctaTarget: string;
  backgroundImage: string;
}

export const videoSectionConfig: VideoSectionConfig = {
  tag: "The Reading Life",
  heading: "Words That Transform",
  bodyParagraphs: [
    "To read is to embark on an infinite journey of discovery. Within the pages of a book, we find not only stories but the very essence of what it means to be human. The greatest authors have poured their souls onto paper, leaving behind legacies that continue to inspire, challenge, and comfort generations of readers.",
    "Whether you seek the profound insights of Dostoevsky, the poetic beauty of Woolf, or the timeless wisdom of Austen, our collection offers a gateway to the literary treasures that have defined human civilization. Each book is an invitation to see the world through new eyes."
  ],
  ctaText: "Explore the Collection",
  ctaTarget: "#classics",
  backgroundImage: "/images/hands-reading.jpg",
};

// ─── Products (Classic Books) ─────────────────────────────────────────────────

export interface Product {
  id: number;
  name: string;
  price: number;
  category: string;
  image: string;
}

export interface ProductsConfig {
  tag: string;
  heading: string;
  description: string;
  viewAllText: string;
  addToCartText: string;
  addedToCartText: string;
  categories: string[];
  products: Product[];
}

export const productsConfig: ProductsConfig = {
  tag: "Timeless Classics",
  heading: "Literary Masterpieces",
  description: "Discover the books that have shaped literature and influenced generations. From profound philosophical works to captivating narratives, these classics remain as relevant today as when they were first written.",
  viewAllText: "View All Classics",
  addToCartText: "Add to Collection",
  addedToCartText: "Added to Collection",
  categories: ["All", "19th Century", "20th Century", "Philosophy", "Romance", "Gothic"],
  products: [
    { id: 1, name: "Pride and Prejudice", price: 18, category: "Romance", image: "/images/solitary-book.jpg" },
    { id: 2, name: "The Great Gatsby", price: 16, category: "20th Century", image: "/images/books-rose.jpg" },
    { id: 3, name: "Jane Eyre", price: 19, category: "Gothic", image: "/images/books-detail.jpg" },
    { id: 4, name: "Moby-Dick", price: 22, category: "19th Century", image: "/images/reading-moment.jpg" },
    { id: 5, name: "Crime and Punishment", price: 20, category: "Philosophy", image: "/images/writing-desk.jpg" },
    { id: 6, name: "Wuthering Heights", price: 17, category: "Gothic", image: "/images/books-collection.jpg" },
  ],
};

// ─── Features ────────────────────────────────────────────────────────────────

export interface Feature {
  icon: "Truck" | "ShieldCheck" | "Leaf" | "Heart";
  title: string;
  description: string;
}

export interface FeaturesConfig {
  features: Feature[];
}

export const featuresConfig: FeaturesConfig = {
  features: [
    {
      icon: "Heart",
      title: "Curated with Care",
      description: "Each title in our collection is thoughtfully selected for its literary significance and enduring impact on readers."
    },
    {
      icon: "ShieldCheck",
      title: "Timeless Quality",
      description: "We feature only the most profound works that have stood the test of time, offering wisdom that transcends generations."
    },
    {
      icon: "Leaf",
      title: "Literary Heritage",
      description: "Preserve and celebrate the rich tapestry of human storytelling that has shaped our cultural consciousness."
    },
    {
      icon: "Truck",
      title: "Endless Discovery",
      description: "From classic novels to profound quotes, embark on a journey of continuous learning and inspiration."
    },
  ],
};

// ─── Blog (Reading Journey) ───────────────────────────────────────────────────

export interface BlogPost {
  id: number;
  title: string;
  date: string;
  image: string;
  excerpt: string;
}

export interface BlogConfig {
  tag: string;
  heading: string;
  viewAllText: string;
  readMoreText: string;
  posts: BlogPost[];
}

export const blogConfig: BlogConfig = {
  tag: "The Reader's Journal",
  heading: "Journeys Through Literature",
  viewAllText: "View All Articles",
  readMoreText: "Read More",
  posts: [
    {
      id: 1,
      title: "The Art of Slow Reading in a Fast World",
      date: "March 28, 2026",
      image: "/images/reading-nook.jpg",
      excerpt: "In our age of instant gratification, the deliberate pace of reading a classic novel offers a rare and precious gift: the opportunity to truly immerse oneself in another world."
    },
    {
      id: 2,
      title: "Why Classics Still Matter Today",
      date: "March 15, 2026",
      image: "/images/bookstore.jpg",
      excerpt: "The themes explored by Dickens, Austen, and Tolstoy—love, ambition, morality, and the human condition—remain as relevant in our modern world as they were centuries ago."
    },
    {
      id: 3,
      title: "Finding Solace in the Pages of a Book",
      date: "February 28, 2026",
      image: "/images/library-tall.jpg",
      excerpt: "There is a unique comfort in returning to beloved stories. Like old friends, they welcome us back with familiar words that continue to offer new insights with each reading."
    },
  ],
};

// ─── FAQ ─────────────────────────────────────────────────────────────────────

export interface FaqItem {
  id: number;
  question: string;
  answer: string;
}

export interface FaqConfig {
  tag: string;
  heading: string;
  ctaText: string;
  ctaTarget: string;
  faqs: FaqItem[];
}

export const faqConfig: FaqConfig = {
  tag: "Common Questions",
  heading: "Frequently Asked",
  ctaText: "Explore the Collection",
  ctaTarget: "#classics",
  faqs: [
    {
      id: 1,
      question: "What makes a book a 'classic'?",
      answer: "A classic is a work that possesses enduring quality, literary excellence, and universal themes that resonate across generations. These books have stood the test of time, continuing to influence readers and writers long after their initial publication. They offer insights into the human condition that remain relevant regardless of era."
    },
    {
      id: 2,
      question: "Which classic should I read first?",
      answer: "For newcomers to classic literature, we often recommend starting with 'Pride and Prejudice' by Jane Austen for its wit and accessibility, 'The Great Gatsby' by F. Scott Fitzgerald for its beautiful prose, or 'Animal Farm' by George Orwell for its concise yet powerful storytelling. The best choice depends on your personal interests and reading preferences."
    },
    {
      id: 3,
      question: "Why should I read classic literature?",
      answer: "Classic literature offers profound insights into human nature, society, and the world around us. These works have shaped our cultural consciousness and continue to influence modern storytelling. Reading classics expands your vocabulary, enhances critical thinking, and provides a deeper understanding of historical and cultural contexts that have shaped our present."
    },
    {
      id: 4,
      question: "How do I appreciate older writing styles?",
      answer: "Approach classic literature with patience and an open mind. Remember that these works were written in different times with different conventions. Take time to appreciate the language, note the historical context, and allow yourself to be immersed in the author's world. Many readers find that once they adjust to the style, the beauty of classic prose becomes deeply rewarding."
    },
    {
      id: 5,
      question: "Are classics still relevant in the modern age?",
      answer: "Absolutely. The themes explored in classic literature—love, loss, ambition, morality, identity, and the search for meaning—are universal and timeless. While the settings and language may differ, the fundamental human experiences these books portray remain as relevant today as ever. In fact, classics often provide valuable perspective on our contemporary world."
    },
  ],
};

// ─── About (Wisdom Collection - Quotes) ───────────────────────────────────────

export interface AboutSection {
  tag: string;
  heading: string;
  paragraphs: string[];
  quote: string;
  attribution: string;
  image: string;
  backgroundColor: string;
  textColor: string;
}

export interface AboutConfig {
  sections: AboutSection[];
}

export const aboutConfig: AboutConfig = {
  sections: [
    {
      tag: "Words of Wisdom",
      heading: "The Alchemist",
      paragraphs: [],
      quote: "The secret of life, though, is to fall seven times and to get up eight times.",
      attribution: "— Paulo Coelho",
      image: "/images/books-collection.jpg",
      backgroundColor: "#2c2420",
      textColor: "#f5f0e8",
    },
    {
      tag: "Timeless Insight",
      heading: "Pride and Prejudice",
      paragraphs: [],
      quote: "The person, be it gentleman or lady, who has not pleasure in a good novel, must be intolerably stupid.",
      attribution: "— Jane Austen",
      image: "/images/reading-moment.jpg",
      backgroundColor: "#3d2b1f",
      textColor: "#f5f0e8",
    },
    {
      tag: "Literary Wisdom",
      heading: "Little Women",
      paragraphs: [],
      quote: "I am not afraid of storms, for I am learning how to sail my ship.",
      attribution: "— Louisa May Alcott",
      image: "/images/books-rose.jpg",
      backgroundColor: "#1a1a2e",
      textColor: "#f5f0e8",
    },
    {
      tag: "Profound Truth",
      heading: "Harry Potter",
      paragraphs: [],
      quote: "Happiness can be found even in the darkest of times, if one only remembers to turn on the light.",
      attribution: "— J.K. Rowling",
      image: "/images/reading-nook.jpg",
      backgroundColor: "#2d1b0e",
      textColor: "#f5f0e8",
    },
  ],
};

// ─── Contact ─────────────────────────────────────────────────────────────────

export interface FormFields {
  nameLabel: string;
  namePlaceholder: string;
  emailLabel: string;
  emailPlaceholder: string;
  messageLabel: string;
  messagePlaceholder: string;
}

export interface ContactConfig {
  heading: string;
  description: string;
  locationLabel: string;
  location: string;
  emailLabel: string;
  email: string;
  phoneLabel: string;
  phone: string;
  formFields: FormFields;
  submitText: string;
  submittingText: string;
  submittedText: string;
  successMessage: string;
  backgroundImage: string;
}

export const contactConfig: ContactConfig = {
  heading: "Share Your Literary Journey",
  description: "We would love to hear about your favorite classics, the quotes that inspire you, and the books that have changed your life. Connect with fellow readers and share your story.",
  locationLabel: "Location",
  location: "The Literary Quarter, London",
  emailLabel: "Email",
  email: "hello@bibliotheca.literary",
  phoneLabel: "Phone",
  phone: "+44 20 7946 0958",
  formFields: {
    nameLabel: "Your Name",
    namePlaceholder: "Enter your name",
    emailLabel: "Your Email",
    emailPlaceholder: "Enter your email",
    messageLabel: "Your Message",
    messagePlaceholder: "Share your favorite book or quote...",
  },
  submitText: "Send Message",
  submittingText: "Sending...",
  submittedText: "Sent",
  successMessage: "Thank you for sharing your literary journey with us. We'll be in touch soon.",
  backgroundImage: "/images/writing-desk.jpg",
};

// ─── Footer ──────────────────────────────────────────────────────────────────

export interface FooterLink {
  label: string;
  href: string;
}

export interface FooterLinkGroup {
  title: string;
  links: FooterLink[];
}

export interface FooterSocialLink {
  icon: string;
  label: string;
  href: string;
}

export interface FooterConfig {
  brandName: string;
  brandDescription: string;
  newsletterHeading: string;
  newsletterDescription: string;
  newsletterPlaceholder: string;
  newsletterButtonText: string;
  newsletterSuccessText: string;
  linkGroups: FooterLinkGroup[];
  legalLinks: FooterLink[];
  copyrightText: string;
  socialLinks: FooterSocialLink[];
}

export const footerConfig: FooterConfig = {
  brandName: "Bibliotheca",
  brandDescription: "A curated sanctuary of timeless literature and profound wisdom. Discover the books and quotes that have shaped human thought across centuries.",
  newsletterHeading: "Join Our Literary Circle",
  newsletterDescription: "Receive weekly curated quotes, reading recommendations, and literary insights delivered to your inbox.",
  newsletterPlaceholder: "Enter your email",
  newsletterButtonText: "Subscribe",
  newsletterSuccessText: "Welcome to our literary circle!",
  linkGroups: [
    {
      title: "Explore",
      links: [
        { label: "Timeless Classics", href: "#classics" },
        { label: "Literary Quotes", href: "#wisdom" },
        { label: "Reading Journal", href: "#journal" },
        { label: "Philosophy", href: "#philosophy" },
      ],
    },
    {
      title: "Collections",
      links: [
        { label: "19th Century", href: "#" },
        { label: "20th Century", href: "#" },
        { label: "Philosophy", href: "#" },
        { label: "Romance", href: "#" },
      ],
    },
    {
      title: "Resources",
      links: [
        { label: "Reading Guides", href: "#" },
        { label: "Author Biographies", href: "#" },
        { label: "Literary Terms", href: "#" },
        { label: "Book Clubs", href: "#" },
      ],
    },
  ],
  legalLinks: [
    { label: "Privacy Policy", href: "#" },
    { label: "Terms of Service", href: "#" },
  ],
  copyrightText: "© 2026 Bibliotheca. Celebrating literature across centuries.",
  socialLinks: [
    { icon: "Instagram", label: "Instagram", href: "#" },
    { icon: "Twitter", label: "Twitter", href: "#" },
    { icon: "Facebook", label: "Facebook", href: "#" },
  ],
};
