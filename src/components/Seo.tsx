import { Head } from 'vite-react-ssg';

interface SeoProps {
  title: string;
  description: string;
  canonical?: string;
  ogTitle?: string;
  ogDescription?: string;
}

// Oldal-szintű meta a <head>-be. A vite-react-ssg ezt build időben a generált
// statikus HTML-be írja (react-helmet-async alatt), így az AI-k és a crawlerek
// oldalanként a helyes címet/leírást látják. Az index.html általános meta-i a
// fallback alapot adják; ezek felülírják azokat az adott oldalon.
const Seo = ({ title, description, canonical, ogTitle, ogDescription }: SeoProps) => (
  <Head>
    <title>{title}</title>
    <meta name="description" content={description} />
    {canonical && <link rel="canonical" href={canonical} />}
    <meta property="og:title" content={ogTitle || title} />
    <meta property="og:description" content={ogDescription || description} />
    {canonical && <meta property="og:url" content={canonical} />}
    <meta name="twitter:title" content={ogTitle || title} />
    <meta name="twitter:description" content={ogDescription || description} />
  </Head>
);

export default Seo;
