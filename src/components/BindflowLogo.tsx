import { useEffect, useRef, useState } from 'react';
import logoImg from '@/assets/bindflow-logo-clean.png';

const BindflowLogo = ({ className = '', size = 'md' }: { className?: string; size?: 'sm' | 'md' | 'lg' }) => {
  const sizes = { sm: 48, md: 80, lg: 350 };
  const h = sizes[size];
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [dataUrl, setDataUrl] = useState<string>('');

  useEffect(() => {
    const img = new Image();
    img.crossOrigin = 'anonymous';
    img.onload = () => {
      const canvas = canvasRef.current;
      if (!canvas) return;
      canvas.width = img.width;
      canvas.height = img.height;
      const ctx = canvas.getContext('2d');
      if (!ctx) return;
      ctx.drawImage(img, 0, 0);
      const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
      const data = imageData.data;

      for (let i = 0; i < data.length; i += 4) {
        const r = data[i];
        const g = data[i + 1];
        const b = data[i + 2];
        if (r > 230 && g > 230 && b > 230) {
          const whiteness = Math.min(r, g, b);
          const alpha = whiteness > 245 ? 0 : Math.round((245 - whiteness) * (255 / 15));
          data[i + 3] = alpha;
        }
      }

      ctx.putImageData(imageData, 0, 0);
      setDataUrl(canvas.toDataURL('image/png'));
    };
    img.src = logoImg;
  }, []);

  return (
    <div className={`flex items-center ${className}`}>
      <canvas ref={canvasRef} className="hidden" />
      {dataUrl ? (
        <img
          src={dataUrl}
          alt="Bindflow logo"
          style={{ height: h }}
          className="object-contain"
        />
      ) : (
        <img
          src={logoImg}
          alt="Bindflow logo"
          style={{ height: h }}
          className="object-contain mix-blend-multiply"
        />
      )}
    </div>
  );
};

export default BindflowLogo;
