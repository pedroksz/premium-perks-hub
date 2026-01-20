import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Award, Phone, MapPin } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Header = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();

  const navItems = [
    { path: '/', label: 'Início' },
    { path: '/sobre', label: 'Sobre Nós' },
    { path: '/contato', label: 'Contato' },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <>
      {/* Barra de Informações */}
      <div className="gradient-navy text-white py-2 text-sm">
        <div className="container mx-auto px-4 flex justify-between items-center flex-wrap gap-2">
          <div className="flex items-center gap-6">
            <a href="tel:+5519810200844" className="flex items-center gap-2 hover:opacity-75 transition-opacity">
              <Phone className="w-4 h-4" />
              <span className="font-medium">(19) 8102-0844</span>
            </a>
            <span className="hidden md:flex items-center gap-2 opacity-85">
              <MapPin className="w-4 h-4" />
              <span>Sorocaba, São Paulo</span>
            </span>
          </div>
          <div className="text-xs opacity-70 font-light">
            Atendimento: Seg à Sex
          </div>
        </div>
      </div>

      {/* Header Principal */}
      <header className="bg-card/95 backdrop-blur-lg shadow-lg sticky top-0 z-50 border-b border-border/40">
        <nav className="container mx-auto px-4 py-4">
          <div className="flex justify-between items-center">
            {/* Logo */}
            <Link to="/" className="flex items-center gap-3 group">
              <div className="w-12 h-12 rounded-xl gradient-navy flex items-center justify-center shadow-md group-hover:shadow-lg transition-shadow">
                <Award className="w-7 h-7 text-white" />
              </div>
              <div>
                <h1 className="text-xl font-bold text-primary tracking-tight">Benefícios AMX</h1>
                <p className="text-[10px] text-muted-foreground font-medium tracking-widest uppercase">Assessoria em Vantagens</p>
              </div>
            </Link>

            {/* Desktop Nav */}
            <ul className="hidden md:flex items-center gap-8">
              {navItems.map((item) => (
                <li key={item.path}>
                  <Link
                    to={item.path}
                    className={`nav-link py-2 text-sm ${isActive(item.path) ? 'text-primary font-semibold' : ''}`}
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
              <li>
                <Link to="/contato" className="btn-gold text-sm px-6 py-2.5">
                  Agendar Consulta
                </Link>
              </li>
            </ul>

            {/* Mobile Toggle */}
            <button
              className="md:hidden p-2.5 rounded-lg hover:bg-muted transition-colors"
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
                className="md:hidden overflow-hidden"
              >
                <ul className="flex flex-col gap-2 py-5 border-t mt-4">
                  {navItems.map((item) => (
                    <li key={item.path}>
                      <Link
                        to={item.path}
                        onClick={() => setMobileOpen(false)}
                        className={`block py-3 px-4 rounded-lg transition-colors font-medium ${
                          isActive(item.path)
                            ? 'bg-primary text-primary-foreground'
                            : 'hover:bg-muted'
                        }`}
                      >
                        {item.label}
                      </Link>
                    </li>
                  ))}
                  <li className="pt-2">
                    <Link
                      to="/contato"
                      onClick={() => setMobileOpen(false)}
                      className="btn-gold w-full text-center"
                    >
                      Agendar Consulta
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
