import logoImg from '@/assets/bindflow-logo-clean.png';

const BindflowLogo = ({ className = '', size = 'md' }: { className?: string; size?: 'sm' | 'md' | 'lg' }) => {
  const sizes = { sm: 48, md: 64, lg: 140 };
  const h = sizes[size];
  const w = h; // square aspect ratio

  return (
    <div
      className={`${className}`}
      style={{
        height: h,
        width: w,
        backgroundImage: `url(${logoImg})`,
        backgroundSize: 'contain',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        backgroundColor: 'transparent',
      }}
      role="img"
      aria-label="Bindflow logo"
    >
      <img
        src={logoImg}
        alt="Bindflow logo"
        style={{ height: h, width: w }}
        className="object-contain opacity-0"
      />
    </div>
  );
};

export default BindflowLogo;
