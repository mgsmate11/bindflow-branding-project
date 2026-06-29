import { useParams, Navigate } from 'react-router-dom';
import ArticleDetailSection from '@/components/ArticleDetailSection';
import Seo from '@/components/Seo';
import { getArticleBySlug } from '@/data/articles';
import { useLang } from '@/contexts/LangContext';

const ArticlePage = () => {
  const { slug } = useParams<{ slug: string }>();
  const { t } = useLang();
  const article = getArticleBySlug(slug);

  if (!article) {
    return <Navigate to="/blog" replace />;
  }

  return (
    <>
      <Seo
        title={`${t(article.title.hu, article.title.en)} | Bindflow`}
        description={t(article.excerpt.hu, article.excerpt.en)}
        canonical={`https://bindflow.hu/blog/${article.slug}`}
      />
      <ArticleDetailSection article={article} />
    </>
  );
};

export default ArticlePage;
