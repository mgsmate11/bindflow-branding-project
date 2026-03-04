const BindflowLogo = ({ className = '', size = 'md' }: { className?: string; size?: 'sm' | 'md' | 'lg' }) => {
  const sizes = { sm: 32, md: 40, lg: 64 };
  const h = sizes[size];

  return (
    <div className={`flex items-center gap-2 ${className}`}>
      <svg width={h} height={h} viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
        {/* Book shape */}
        <path d="M50 30 L20 45 L20 75 L50 60 Z" fill="hsl(0 100% 25%)" opacity="0.9" />
        <path d="M50 30 L80 45 L80 75 L50 60 Z" fill="hsl(0 100% 20%)" opacity="0.9" />
        {/* Book pages */}
        <path d="M50 32 L25 45 L25 72 L50 58 Z" fill="hsl(0 100% 25%)" opacity="0.15" />
        <path d="M50 32 L75 45 L75 72 L50 58 Z" fill="hsl(0 100% 25%)" opacity="0.1" />
        {/* Circuit nodes from book */}
        <line x1="50" y1="30" x2="50" y2="12" stroke="hsl(188 90% 61%)" strokeWidth="2" />
        <line x1="50" y1="20" x2="35" y2="10" stroke="hsl(188 90% 61%)" strokeWidth="1.5" />
        <line x1="50" y1="20" x2="65" y2="10" stroke="hsl(188 90% 61%)" strokeWidth="1.5" />
        <line x1="50" y1="25" x2="30" y2="18" stroke="hsl(188 90% 61%)" strokeWidth="1" />
        <line x1="50" y1="25" x2="70" y2="18" stroke="hsl(188 90% 61%)" strokeWidth="1" />
        {/* Nodes */}
        <circle cx="50" cy="12" r="3" fill="hsl(188 90% 61%)" />
        <circle cx="35" cy="10" r="2.5" fill="hsl(188 90% 61%)" />
        <circle cx="65" cy="10" r="2.5" fill="hsl(188 90% 61%)" />
        <circle cx="30" cy="18" r="2" fill="hsl(188 90% 61%)" opacity="0.7" />
        <circle cx="70" cy="18" r="2" fill="hsl(188 90% 61%)" opacity="0.7" />
        {/* BF text on book spine */}
        <text x="50" y="52" textAnchor="middle" fill="hsl(43 38% 95%)" fontSize="10" fontWeight="bold" fontFamily="'Plus Jakarta Sans', sans-serif">BF</text>
      </svg>
      <span className="text-xl font-extrabold tracking-tight text-foreground">
        BIND<span className="text-primary">FLOW</span>
      </span>
    </div>
  );
};

export default BindflowLogo;
