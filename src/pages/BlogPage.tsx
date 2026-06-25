import BlogListSection from '@/components/BlogListSection';
import useSEO from '@/hooks/useSEO';

const BlogPage = () => {
  useSEO({
    title: 'Blog & Tudásbázis — AI, automatizáció, chatbot | Bindflow',
    description:
      'Gyakorlati útmutatók az AI-ról, automatizációról és chatbotokról magyar vállalkozásoknak. Érthetően, hype nélkül, a Bindflow csapatától.',
    canonical: 'https://bindflow.hu/blog',
  });
  return <BlogListSection />;
};

export default BlogPage;
