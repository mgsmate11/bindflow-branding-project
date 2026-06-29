import PrivacySection from '@/components/PrivacySection';
import Seo from '@/components/Seo';

const PrivacyPage = () => (
  <>
    <Seo
      title="Adatkezelési tájékoztató | Bindflow"
      description="A Bindflow adatkezelési tájékoztatója: milyen adatokat kezelünk a kapcsolati űrlapon, milyen célból, és milyen jogai vannak Önnek a GDPR szerint."
      canonical="https://bindflow.hu/adatvedelem"
    />
    <PrivacySection />
  </>
);

export default PrivacyPage;
