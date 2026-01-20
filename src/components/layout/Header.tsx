import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Gem, Phone } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Header = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();

  const navItems = [
    { path: '/', label: 'Home' },
    { path: '/sobre', label: 'Quem Somos' },
    { path: '/contato', label: 'Fale Conosco' },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <header className="bg-background/80 backdrop-blur-xl fixed w-full top-0 z-50 border-b border-border/30">
      <div className="container mx-auto px-4">
        {/* Top Bar */}
        <div className="flex items-center justify-between py-2 border-b border-border/20 text-sm">
          <a href="tel:+5519810200844" className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors">
            <Phone className="w-3.5 h-3.5" />
            <span>(19) 8102-0844</span>
          </a>
          <span className="text-muted-foreground/70 text-xs hidden sm:block">
            Sorocaba, SP • Atendimento Personalizado
          </span>
        </div>

        {/* Main Header */}
        <nav className="py-4">
          <div className="flex justify-between items-center">
            {/* Logo */}
            <Link to="/" className="flex items-center gap-3 group">
              <div className="w-11 h-11 rounded-2xl gradient-emerald flex items-center justify-center shadow-md group-hover:shadow-lg transition-all duration-300 group-hover:scale-105">
                <Gem className="w-6 h-6 text-white" />
              </div>
              <div className="flex flex-col">
                <span className="text-lg font-bold text-primary tracking-tight leading-tight">Exclusive</span>
                <span className="text-xs text-muted-foreground tracking-widest uppercase">Benefícios Mix</span>
              </div>
            </Link>

            {/* Desktop Nav */}
            <ul className="hidden lg:flex items-center gap-10">
              {navItems.map((item) => (
                <li key={item.path}>
                  <Link
                    to={item.path}
                    className={`nav-link-modern ${isActive(item.path) ? 'text-primary font-semibold active' : ''}`}
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>

            {/* CTA */}
            <div className="hidden lg:flex items-center gap-4">
              <Link to="/contato" className="btn-accent">
                Iniciar Consultoria
              </Link>
            </div>

            {/* Mobile Toggle */}
            <button
              className="lg:hidden p-2.5 rounded-xl hover:bg-muted transition-colors"
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label="Menu"
            >
              {mobileOpen ? <X className="w-6 h-6 text-primary" /> : <Menu className="w-6 h-6 text-primary" />}
            </button>
          </div>

          {/* Mobile Nav */}
          <AnimatePresence>
            {mobileOpen && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                className="lg:hidden overflow-hidden"
              >
                <ul className="flex flex-col gap-1 py-6 border-t border-border/30 mt-4">
                  {navItems.map((item) => (
                    <li key={item.path}>
                      <Link
                        to={item.path}
                        onClick={() => setMobileOpen(false)}
                        className={`block py-3.5 px-5 rounded-xl transition-all font-medium ${
                          isActive(item.path)
                            ? 'bg-primary text-primary-foreground'
                            : 'hover:bg-muted text-foreground'
                        }`}
                      >
                        {item.label}
                      </Link>
                    </li>
                  ))}
                  <li className="pt-3">
                    <Link
                      to="/contato"
                      onClick={() => setMobileOpen(false)}
                      className="btn-accent w-full text-center justify-center"
                    >
                      Iniciar Consultoria
                    </Link>
                  </li>
                </ul>
              </motion.div>
            )}
          </AnimatePresence>
        </nav>
      </div>
    </header>
  );
};

export default Header;
