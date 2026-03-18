import { MessageCircle } from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const FloatingContactButton = () => (
  <motion.div
    initial={{ scale: 0, opacity: 0 }}
    animate={{ scale: 1, opacity: 1 }}
    transition={{ delay: 1, type: 'spring', stiffness: 200 }}
    className="fixed bottom-6 right-6 z-50"
  >
    <Link
      to="/contact"
      className="w-14 h-14 rounded-full bg-accent text-accent-foreground shadow-lg flex items-center justify-center hover:scale-110 transition-transform"
      aria-label="Contact"
    >
      <MessageCircle className="w-6 h-6" />
    </Link>
  </motion.div>
);

export default FloatingContactButton;
