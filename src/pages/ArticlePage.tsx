import { useParams, Navigate } from 'react-router-dom';
import ArticleDetailSection from '@/components/ArticleDetailSection';
import useSEO from '@/hooks/useSEO';
import { getArticleBySlug } from '@/data/articles';
import { useLang } from '@/contexts/LangContext';

const ArticlePage = () => {
  const { slug } = useParams<{ slug: string }>();
  const { t } = useLang();
  const article = getArticleBySlug(slug);

  // SEO hook must run unconditionally (Rules of Hooks); fall back gracefully.
  useSEO({
    title: article
      ? `${t(article.title.hu, article.title.en)} | Bindflow`
      : 'Cikk nem található | Bindflow',
    description: article
      ? t(article.excerpt.hu, article.excerpt.en)
      : 'A keresett cikk nem található.',
    canonical: article ? `https://bindflow.hu/blog/${article.slug}` : 'https://bindflow.hu/blog',
  });

  if (!article) {
    return <Navigate to="/blog" replace />;
  }

  return <ArticleDetailSection article={article} />;
};

export default ArticlePage;
