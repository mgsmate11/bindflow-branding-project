import logoImg from '@/assets/bindflow-logo-clean.png';

const BindflowLogo = ({ className = '', size = 'md' }: { className?: string; size?: 'sm' | 'md' | 'lg' }) => {
  const sizes = { sm: 48, md: 64, lg: 140 };
  const h = sizes[size];

  return (
    <div className={`flex items-center ${className}`}>
      <img
        src={logoImg}
        alt="Bindflow logo"
        style={{ height: h, filter: 'brightness(1.08) contrast(1.1)' }}
        className="object-contain mix-blend-multiply"
      />
    </div>
  );
};

export default BindflowLogo;
