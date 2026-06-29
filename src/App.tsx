import type { RouteRecord } from "vite-react-ssg";
import Layout from "./components/Layout";
import Index from "./pages/Index";
import ServicesPage from "./pages/ServicesPage";
import ReferencesPage from "./pages/ReferencesPage";
import ContactPage from "./pages/ContactPage";
import BlogPage from "./pages/BlogPage";
import ArticlePage from "./pages/ArticlePage";
import PrivacyPage from "./pages/PrivacyPage";
import NotFound from "./pages/NotFound";
import { articles } from "./data/articles";

// Útvonalak a vite-react-ssg számára (react-router data routes). Build időben
// minden útvonal saját, tartalommal teli HTML-lé renderelődik (lásd main.tsx).
export const routes: RouteRecord[] = [
  {
    path: "/",
    element: <Layout />,
    entry: "src/components/Layout.tsx",
    children: [
      { index: true, element: <Index /> },
      { path: "services", element: <ServicesPage /> },
      { path: "references", element: <ReferencesPage /> },
      { path: "blog", element: <BlogPage /> },
      {
        path: "blog/:slug",
        element: <ArticlePage />,
        // Melyik cikk-útvonalak generálódjanak statikusan (az összes cikk).
        getStaticPaths: () => articles.map((a) => `blog/${a.slug}`),
      },
      { path: "contact", element: <ContactPage /> },
      { path: "adatvedelem", element: <PrivacyPage /> },
    ],
  },
  { path: "*", element: <NotFound /> },
];
