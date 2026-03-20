import ReferencesSection from '@/components/ReferencesSection';
import useSEO from '@/hooks/useSEO';

const ReferencesPage = () => {
  useSEO({
    title: 'AI Megoldások & Automatizáció Magyarországon | Bindflow',
    description: 'Valós eredmények: 30% hatékonyságnövekedés, 15 óra megtakarítás hetente. Nézd meg hogyan segítette a Bindflow partnereit az AI bevezetésében.',
    canonical: 'https://bindflow.hu/references',
  });
  return <ReferencesSection />;
};
export default ReferencesPage;
