import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Sparkles, Phone, MapPin } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Header = () => {
  const [menuVisible, setMenuVisible] = useState(false);
  const location = useLocation();

  const menuLinks = [
    { href: '/', text: 'Home' },
    { href: '/sobre', text: 'Quem Somos' },
    { href: '/contato', text: 'Fale Conosco' },
  ];

  const checkActive = (href: string) => location.pathname === href;

  return (
    <>
      {/* Barra Superior */}
      <div className="gradient-main text-white py-2.5 text-sm">
        <div className="container mx-auto px-4 flex justify-between items-center flex-wrap gap-2">
          <div className="flex items-center gap-8">
            <a href="tel:+5562915296613" className="flex items-center gap-2 hover:opacity-80 transition-opacity">
              <Phone className="w-4 h-4" />
              <span className="font-medium">(62) 9152-9613</span>
            </a>
            <span className="hidden md:flex items-center gap-2 opacity-90">
              <MapPin className="w-4 h-4" />
              <span>VI Maua, Goiás</span>
            </span>
          </div>
          <div className="text-xs opacity-75 font-light">
            Horário Comercial: Segunda à Sexta
          </div>
        </div>
      </div>

      {/* Cabeçalho Principal */}
      <header className="bg-card/95 backdrop-blur-md shadow-md sticky top-0 z-50 border-b border-border/50">
        <nav className="container mx-auto px-4 py-5">
          <div className="flex justify-between items-center">
            {/* Logotipo */}
            <Link to="/" className="flex items-center gap-4 group">
              <div className="w-14 h-14 rounded-2xl gradient-main flex items-center justify-center shadow-lg group-hover:shadow-xl transition-shadow">
                <Sparkles className="w-8 h-8 text-white" />
              </div>
              <div>
                <h1 className="text-2xl font-bold text-primary tracking-tight">Benefícios Premix</h1>
                <p className="text-xs text-muted-foreground font-medium tracking-widest uppercase">Programa de Vantagens</p>
              </div>
            </Link>

            {/* Menu Desktop */}
            <ul className="hidden md:flex items-center gap-10">
              {menuLinks.map((item) => (
                <li key={item.href}>
                  <Link
                    to={item.href}
                    className={`menu-item py-2 text-[15px] ${checkActive(item.href) ? 'text-primary font-semibold' : ''}`}
                  >
                    {item.text}
                  </Link>
                </li>
              ))}
              <li>
                <Link to="/contato" className="btn-main text-sm px-8 py-3">
                  Iniciar Atendimento
                </Link>
              </li>
            </ul>

            {/* Botão Menu Mobile */}
            <button
              className="md:hidden p-3 rounded-xl hover:bg-muted transition-colors"
              onClick={() => setMenuVisible(!menuVisible)}
              aria-label="Abrir menu"
            >
              {menuVisible ? <X className="w-6 h-6 text-primary" /> : <Menu className="w-6 h-6 text-primary" />}
            </button>
          </div>

          {/* Menu Mobile */}
          <AnimatePresence>
            {menuVisible && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                className="md:hidden overflow-hidden"
              >
                <ul className="flex flex-col gap-3 py-6 border-t mt-5">
                  {menuLinks.map((item) => (
                    <li key={item.href}>
                      <Link
                        to={item.href}
                        onClick={() => setMenuVisible(false)}
                        className={`block py-4 px-5 rounded-xl transition-colors font-medium ${
                          checkActive(item.href)
                            ? 'bg-primary text-primary-foreground'
                            : 'hover:bg-muted'
                        }`}
                      >
                        {item.text}
                      </Link>
                    </li>
                  ))}
                  <li className="pt-3">
                    <Link
                      to="/contato"
                      onClick={() => setMenuVisible(false)}
                      className="btn-main w-full text-center"
                    >
                      Iniciar Atendimento
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