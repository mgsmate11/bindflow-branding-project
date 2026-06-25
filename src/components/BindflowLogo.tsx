import logoImg from '@/assets/bindflow-logo.png';

const SIZES = { sm: 36, md: 48, lg: 150 } as const;

// Átlátszó hátterű, előre kulcsolt logó — mindkét témában (világos/sötét) beleolvad
// a háttérbe, nincs szükség futásidejű háttér-eltávolításra.
const BindflowLogo = ({
  className = '',
  size = 'md',
}: {
  className?: string;
  size?: keyof typeof SIZES;
}) => (
  <img
    src={logoImg}
    alt="Bindflow"
    style={{ height: SIZES[size] }}
    // Sötét módban a mély bordó túl alacsony kontrasztú a sötét háttéren — egy
    // brightness/saturate emelés a világosabb, márkahű piros felé tolja, így jól látszik.
    className={`w-auto object-contain dark:brightness-[1.75] dark:saturate-[1.15] ${className}`}
    decoding="async"
  />
);

export default BindflowLogo;
