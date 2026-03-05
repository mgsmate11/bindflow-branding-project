const BindflowLogo = ({ className = '', size = 'md' }: { className?: string; size?: 'sm' | 'md' | 'lg' }) => {
  const sizes = { sm: 38, md: 48, lg: 72 };
  const h = sizes[size];

  return (
    <div className={`flex items-center gap-2 ${className}`}>
      <svg width={h} height={h * 0.95} viewBox="0 0 140 133" fill="none" xmlns="http://www.w3.org/2000/svg">
        {/* === OPEN BOOK === */}

        {/* Left cover - main shape (wing-like, angled down-left) */}
        <path d="M70 72 L70 100 L8 88 L8 56 Z" fill="hsl(345 80% 28%)" />
        {/* Left cover darker edge */}
        <path d="M70 72 L8 56 L6 53 L68 69 Z" fill="hsl(345 80% 22%)" />
        {/* Left page layers */}
        <path d="M68 69 L6 53 L4 50 L66 66 Z" fill="hsl(345 70% 32%)" opacity="0.7" />
        <path d="M66 66 L4 50 L2 47 L64 63 Z" fill="hsl(345 60% 36%)" opacity="0.5" />
        <path d="M64 63 L2 47 L0 44 L62 60 Z" fill="hsl(345 50% 40%)" opacity="0.35" />

        {/* Right cover - main shape (wing-like, angled down-right) */}
        <path d="M70 72 L70 100 L132 88 L132 56 Z" fill="hsl(345 80% 24%)" />
        {/* Right cover darker edge */}
        <path d="M70 72 L132 56 L134 53 L72 69 Z" fill="hsl(345 80% 20%)" />
        {/* Right page layers */}
        <path d="M72 69 L134 53 L136 50 L74 66 Z" fill="hsl(345 70% 30%)" opacity="0.7" />
        <path d="M74 66 L136 50 L138 47 L76 63 Z" fill="hsl(345 60% 34%)" opacity="0.5" />
        <path d="M76 63 L138 47 L140 44 L78 60 Z" fill="hsl(345 50% 38%)" opacity="0.35" />

        {/* Book spine - trapezoidal shape at bottom center */}
        <path d="M58 72 L70 78 L82 72 L82 100 L70 106 L58 100 Z" fill="hsl(345 80% 20%)" />
        {/* Spine highlight */}
        <path d="M60 74 L70 79 L80 74 L80 98 L70 104 L60 98 Z" fill="hsl(345 80% 25%)" opacity="0.5" />

        {/* BF text on spine */}
        <text x="70" y="93" textAnchor="middle" fill="hsl(43 38% 92%)" fontSize="13" fontWeight="bold" fontFamily="'Plus Jakarta Sans', sans-serif" letterSpacing="1">BF</text>

        {/* === CIRCUIT TRACES (from book spine upward) === */}

        {/* Main center vertical line */}
        <line x1="70" y1="72" x2="70" y2="20" stroke="hsl(197 85% 65%)" strokeWidth="2.5" />

        {/* Left inner branch */}
        <path d="M70 52 L70 48 L52 30" stroke="hsl(197 85% 65%)" strokeWidth="2.2" fill="none" strokeLinejoin="round" />
        {/* Left outer branch */}
        <path d="M70 60 L70 56 L40 38" stroke="hsl(197 85% 65%)" strokeWidth="1.8" fill="none" strokeLinejoin="round" />

        {/* Right inner branch */}
        <path d="M70 52 L70 48 L88 30" stroke="hsl(197 85% 65%)" strokeWidth="2.2" fill="none" strokeLinejoin="round" />
        {/* Right outer branch */}
        <path d="M70 60 L70 56 L100 38" stroke="hsl(197 85% 65%)" strokeWidth="1.8" fill="none" strokeLinejoin="round" />

        {/* === CIRCUIT NODES (hollow circles with border) === */}
        {/* Top center - largest */}
        <circle cx="70" cy="20" r="5" fill="hsl(197 85% 65%)" opacity="0.25" />
        <circle cx="70" cy="20" r="5" stroke="hsl(197 85% 65%)" strokeWidth="2" fill="none" />
        <circle cx="70" cy="20" r="2" fill="hsl(197 85% 65%)" />

        {/* Left inner */}
        <circle cx="52" cy="30" r="4.5" fill="hsl(197 85% 65%)" opacity="0.2" />
        <circle cx="52" cy="30" r="4.5" stroke="hsl(197 85% 65%)" strokeWidth="1.8" fill="none" />
        <circle cx="52" cy="30" r="1.8" fill="hsl(197 85% 65%)" />

        {/* Right inner */}
        <circle cx="88" cy="30" r="4.5" fill="hsl(197 85% 65%)" opacity="0.2" />
        <circle cx="88" cy="30" r="4.5" stroke="hsl(197 85% 65%)" strokeWidth="1.8" fill="none" />
        <circle cx="88" cy="30" r="1.8" fill="hsl(197 85% 65%)" />

        {/* Left outer */}
        <circle cx="40" cy="38" r="3.8" fill="hsl(197 85% 65%)" opacity="0.15" />
        <circle cx="40" cy="38" r="3.8" stroke="hsl(197 85% 65%)" strokeWidth="1.5" fill="none" />
        <circle cx="40" cy="38" r="1.5" fill="hsl(197 85% 65%)" />

        {/* Right outer */}
        <circle cx="100" cy="38" r="3.8" fill="hsl(197 85% 65%)" opacity="0.15" />
        <circle cx="100" cy="38" r="3.8" stroke="hsl(197 85% 65%)" strokeWidth="1.5" fill="none" />
        <circle cx="100" cy="38" r="1.5" fill="hsl(197 85% 65%)" />
      </svg>
      <span className="text-xl font-extrabold tracking-tight text-foreground">
        BIND<span className="text-primary">FLOW</span>
      </span>
    </div>
  );
};

export default BindflowLogo;
