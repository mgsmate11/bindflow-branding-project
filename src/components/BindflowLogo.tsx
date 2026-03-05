import logoImg from '@/assets/bindflow-logo-full.png';

const BindflowLogo = ({ className = '', size = 'md' }: { className?: string; size?: 'sm' | 'md' | 'lg' }) => {
  const sizes = { sm: 40, md: 52, lg: 80 };
  const h = sizes[size];

  return (
    <div className={`flex items-center ${className}`}>
      <img
        src={logoImg}
        alt="Bindflow logo"
        style={{ height: h }}
        className="object-contain mix-blend-multiply"
      />
    </div>
  );
};

export default BindflowLogo;
