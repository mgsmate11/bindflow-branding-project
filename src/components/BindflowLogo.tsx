const BindflowLogo = ({ className = '', size = 'md' }: { className?: string; size?: 'sm' | 'md' | 'lg' }) => {
  const sizes = { sm: 36, md: 44, lg: 72 };
  const h = sizes[size];

  return (
    <div className={`flex items-center gap-2 ${className}`}>
      <svg width={h} height={h} viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg">
        {/* Open book - left page */}
        <path d="M60 58 L60 82 L18 72 L18 48 Z" fill="hsl(0 100% 22%)" />
        <path d="M60 58 L60 82 L18 72 L18 48 Z" fill="hsl(0 100% 25%)" opacity="0.9" />
        {/* Left page highlight */}
        <path d="M60 58 L60 82 L22 73 L22 50 Z" fill="hsl(0 100% 28%)" opacity="0.4" />
        {/* Left page edges (stacked pages effect) */}
        <path d="M18 48 L16 46 L56 56 L60 58 Z" fill="hsl(0 100% 18%)" opacity="0.6" />
        <path d="M16 46 L14 44 L54 54 L56 56 Z" fill="hsl(0 100% 15%)" opacity="0.4" />
        <path d="M14 44 L12 42 L52 52 L54 54 Z" fill="hsl(0 100% 12%)" opacity="0.3" />
        
        {/* Open book - right page */}
        <path d="M60 58 L60 82 L102 72 L102 48 Z" fill="hsl(0 100% 20%)" />
        <path d="M60 58 L60 82 L102 72 L102 48 Z" fill="hsl(0 100% 22%)" opacity="0.9" />
        {/* Right page highlight */}
        <path d="M60 58 L60 82 L98 73 L98 50 Z" fill="hsl(0 100% 25%)" opacity="0.3" />
        {/* Right page edges (stacked pages effect) */}
        <path d="M102 48 L104 46 L64 56 L60 58 Z" fill="hsl(0 100% 18%)" opacity="0.6" />
        <path d="M104 46 L106 44 L66 54 L64 56 Z" fill="hsl(0 100% 15%)" opacity="0.4" />
        <path d="M106 44 L108 42 L68 52 L66 54 Z" fill="hsl(0 100% 12%)" opacity="0.3" />
        
        {/* Book spine */}
        <path d="M54 58 L60 62 L66 58 L66 82 L60 86 L54 82 Z" fill="hsl(0 100% 18%)" />
        
        {/* BF text on spine */}
        <text x="60" y="75" textAnchor="middle" fill="hsl(43 38% 95%)" fontSize="9" fontWeight="bold" fontFamily="'Plus Jakarta Sans', sans-serif">BF</text>
        
        {/* Circuit traces from book center going up */}
        {/* Main center line */}
        <line x1="60" y1="58" x2="60" y2="18" stroke="hsl(188 90% 61%)" strokeWidth="2.5" />
        
        {/* Left branch 1 */}
        <line x1="60" y1="40" x2="42" y2="22" stroke="hsl(188 90% 61%)" strokeWidth="2" />
        {/* Left branch 2 */}
        <line x1="60" y1="46" x2="34" y2="30" stroke="hsl(188 90% 61%)" strokeWidth="1.5" />
        
        {/* Right branch 1 */}
        <line x1="60" y1="40" x2="78" y2="22" stroke="hsl(188 90% 61%)" strokeWidth="2" />
        {/* Right branch 2 */}
        <line x1="60" y1="46" x2="86" y2="30" stroke="hsl(188 90% 61%)" strokeWidth="1.5" />
        
        {/* Circuit nodes */}
        <circle cx="60" cy="18" r="4" fill="hsl(188 90% 61%)" />
        <circle cx="60" cy="18" r="2" fill="hsl(188 70% 80%)" />
        
        <circle cx="42" cy="22" r="3.5" fill="hsl(188 90% 61%)" />
        <circle cx="42" cy="22" r="1.5" fill="hsl(188 70% 80%)" />
        
        <circle cx="78" cy="22" r="3.5" fill="hsl(188 90% 61%)" />
        <circle cx="78" cy="22" r="1.5" fill="hsl(188 70% 80%)" />
        
        <circle cx="34" cy="30" r="3" fill="hsl(188 90% 61%)" />
        <circle cx="34" cy="30" r="1.2" fill="hsl(188 70% 80%)" />
        
        <circle cx="86" cy="30" r="3" fill="hsl(188 90% 61%)" />
        <circle cx="86" cy="30" r="1.2" fill="hsl(188 70% 80%)" />
      </svg>
      <span className="text-xl font-extrabold tracking-tight text-foreground">
        BIND<span className="text-primary">FLOW</span>
      </span>
    </div>
  );
};

export default BindflowLogo;
