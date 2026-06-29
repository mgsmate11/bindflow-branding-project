import BlogListSection from '@/components/BlogListSection';
import Seo from '@/components/Seo';

const BlogPage = () => (
  <>
    <Seo
      title="Blog & Tudásbázis — AI, automatizáció, chatbot | Bindflow"
      description="Gyakorlati útmutatók az AI-ról, automatizációról és chatbotokról magyar vállalkozásoknak. Érthetően, hype nélkül, a Bindflow csapatától."
      canonical="https://bindflow.hu/blog"
    />
    <BlogListSection />
  </>
);

export default BlogPage;
