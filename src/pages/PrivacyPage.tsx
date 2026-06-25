import PrivacySection from '@/components/PrivacySection';
import useSEO from '@/hooks/useSEO';

const PrivacyPage = () => {
  useSEO({
    title: 'Adatkezelési tájékoztató | Bindflow',
    description:
      'A Bindflow adatkezelési tájékoztatója: milyen adatokat kezelünk a kapcsolati űrlapon, milyen célból, és milyen jogai vannak Önnek a GDPR szerint.',
    canonical: 'https://bindflow.hu/adatvedelem',
  });
  return <PrivacySection />;
};

export default PrivacyPage;
