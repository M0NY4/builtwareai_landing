import { motion } from 'framer-motion';
import { useTheme } from '../context/ThemeContext';
import Button from '../components/ui/Button';
import SEO from '../components/ui/SEO';

const NotFound = () => {
  const { theme } = useTheme();

  return (
    <div className="min-h-screen flex items-center justify-center px-4 text-center">
      <SEO 
        title="404 - Page Not Found" 
        description="The page you are looking for does not exist. Return to BuiltwareAI home to explore our software solutions."
        url="https://builtwareai.com/404"
      />
      
      <div className="max-w-md">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-9xl font-black text-gold/20 mb-4">404</h1>
        </motion.div>
        
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-3xl font-bold mb-4"
        >
          Lost in the Digital Space?
        </motion.h2>
        
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className={`text-lg mb-8 ${theme === 'dark' ? 'text-dark-text-secondary' : 'text-light-text-secondary'}`}
        >
          The page you're looking for has either moved or doesn't exist. Let's get you back on track.
        </motion.p>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <Button href="/" variant="primary">
            Back to Home
          </Button>
        </motion.div>
      </div>
    </div>
  );
};

export default NotFound;
