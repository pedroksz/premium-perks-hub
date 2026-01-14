import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Shield, Phone, MapPin } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { path: '/', label: 'Início' },
    { path: '/sobre', label: 'Sobre Nós' },
    { path: '/contato', label: 'Contato' },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <>
      {/* Top Bar */}
      <div className="gradient-navy text-white py-2 text-sm">
        <div className="container mx-auto px-4 flex justify-between items-center flex-wrap gap-2">
          <div className="flex items-center gap-6">
            <a href="tel:+5511999999999" className="flex items-center gap-2 hover:text-gold transition-colors">
              <Phone className="w-4 h-4 text-gold" />
              <span>+55 11 99999-9999</span>
            </a>
            <span className="hidden md:flex items-center gap-2">
              <MapPin className="w-4 h-4 text-gold" />
              <span>São Paulo, SP - Brasil</span>
            </span>
          </div>
          <div className="flex items-center gap-2 text-xs opacity-80">
            <span>Atendimento: Seg-Sex 9h-18h</span>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <header className="bg-card shadow-lg sticky top-0 z-50">
        <nav className="container mx-auto px-4 py-4">
          <div className="flex justify-between items-center">
            {/* Logo */}
            <Link to="/" className="flex items-center gap-3 group">
              <div className="w-12 h-12 rounded-lg gradient-navy flex items-center justify-center shadow-md group-hover:shadow-lg transition-shadow">
                <Shield className="w-7 h-7 text-gold" />
              </div>
              <div>
                <h1 className="text-xl font-serif font-bold text-primary">Orientação Premium Elite</h1>
                <p className="text-xs text-muted-foreground">Benefícios Premium</p>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <ul className="hidden md:flex items-center gap-8">
              {navLinks.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className={`nav-link py-2 ${isActive(link.path) ? 'text-primary font-semibold' : ''}`}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
              <li>
                <Link to="/contato" className="btn-gold text-sm px-6 py-2">
                  Fale Conosco
                </Link>
              </li>
            </ul>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden p-2 rounded-lg hover:bg-muted transition-colors"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Menu"
            >
              {isMenuOpen ? <X className="w-6 h-6 text-primary" /> : <Menu className="w-6 h-6 text-primary" />}
            </button>
          </div>

          {/* Mobile Navigation */}
          <AnimatePresence>
            {isMenuOpen && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                className="md:hidden overflow-hidden"
              >
                <ul className="flex flex-col gap-2 py-4 border-t mt-4">
                  {navLinks.map((link) => (
                    <li key={link.path}>
                      <Link
                        to={link.path}
                        onClick={() => setIsMenuOpen(false)}
                        className={`block py-3 px-4 rounded-lg transition-colors ${
                          isActive(link.path)
                            ? 'bg-primary text-primary-foreground'
                            : 'hover:bg-muted'
                        }`}
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                  <li className="pt-2">
                    <Link
                      to="/contato"
                      onClick={() => setIsMenuOpen(false)}
                      className="btn-gold w-full text-center"
                    >
                      Fale Conosco
                    </Link>
                  </li>
                </ul>
              </motion.div>
            )}
          </AnimatePresence>
        </nav>
      </header>
    </>
  );
};

export default Header;
