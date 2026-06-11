import { useEffect, useRef, useState } from 'react';
import { useInView, useMotionValue, useReducedMotion, animate } from 'framer-motion';

interface CountUpProps {
  /** A cél-érték suffixszel együtt, pl. "30%", "15h", "95%". */
  value: string;
  /** Az animáció hossza másodpercben. */
  duration?: number;
}

/**
 * A számértéket 0-ról a célra pörgeti, amikor a komponens a nézetbe görög.
 * A vezető számot animálja, a maradék szöveget (%, h, …) prefixet/suffixet megtartja.
 * `prefers-reduced-motion` esetén azonnal a végértéket mutatja.
 */
const CountUp = ({ value, duration = 1.6 }: CountUpProps) => {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });
  const reduceMotion = useReducedMotion();

  const match = value.match(/^(\D*)(\d+(?:[.,]\d+)?)(.*)$/);
  const prefix = match ? match[1] : '';
  const target = match ? parseFloat(match[2].replace(',', '.')) : 0;
  const suffix = match ? match[3] : value;
  const decimals = match && match[2].includes('.') ? match[2].split('.')[1].length : 0;

  const motionValue = useMotionValue(0);
  const [display, setDisplay] = useState(0);

  useEffect(() => {
    if (!match) return;
    if (!inView || reduceMotion) {
      setDisplay(target);
      return;
    }
    const controls = animate(motionValue, target, {
      duration,
      ease: 'easeOut',
      onUpdate: (latest) => setDisplay(latest),
    });
    return controls.stop;
  }, [inView, reduceMotion, target, duration, motionValue, match]);

  // Ha nem értelmezhető szám, az eredeti szöveget adjuk vissza változatlanul.
  if (!match) return <span ref={ref}>{value}</span>;

  return (
    <span ref={ref}>
      {prefix}
      {display.toFixed(decimals)}
      {suffix}
    </span>
  );
};

export default CountUp;
