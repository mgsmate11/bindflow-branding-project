import logoImg from '@/assets/bindflow-logo-full.png';

const BindflowLogo = ({ className = '', size = 'md' }: { className?: string; size?: 'sm' | 'md' | 'lg' }) => {
  const sizes = { sm: 56, md: 72, lg: 100 };
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
