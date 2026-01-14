import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from './ui/button';

const CookieBanner = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem('cookie-consent');
    if (!consent) {
      const timer = setTimeout(() => setIsVisible(true), 1500);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem('cookie-consent', 'accepted');
    setIsVisible(false);
  };

  const handleDecline = () => {
    localStorage.setItem('cookie-consent', 'declined');
    setIsVisible(false);
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          className="fixed bottom-0 left-0 right-0 z-50 p-4"
        >
          <div className="container mx-auto max-w-4xl">
            <div className="bg-card rounded-2xl shadow-2xl p-6 border border-border">
              <div className="flex flex-col md:flex-row gap-6 items-start md:items-center">
                <div className="flex-1">
                  <h3 className="text-lg font-serif font-semibold text-foreground mb-2">
                    Este site utiliza cookies
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    Utilizamos cookies para melhorar sua experiência de navegação, analisar o tráfego 
                    do site e personalizar conteúdo. Ao continuar navegando, você concorda com nossa{' '}
                    <Link to="/politica-privacidade" className="text-primary underline hover:text-primary/80">
                      Política de Privacidade
                    </Link>.
                  </p>
                </div>
                <div className="flex flex-wrap gap-3 w-full md:w-auto">
                  <Button
                    onClick={handleDecline}
                    variant="outline"
                    className="flex-1 md:flex-none"
                  >
                    Recusar
                  </Button>
                  <Button
                    onClick={handleAccept}
                    className="flex-1 md:flex-none bg-primary hover:bg-primary/90"
                  >
                    Aceitar Cookies
                  </Button>
                </div>
                <button
                  onClick={handleDecline}
                  className="absolute top-4 right-4 md:hidden p-1 hover:bg-muted rounded-full transition-colors"
                  aria-label="Fechar"
                >
                  <X className="w-5 h-5 text-muted-foreground" />
                </button>
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default CookieBanner;
