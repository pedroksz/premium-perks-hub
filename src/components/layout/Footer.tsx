import { Link } from 'react-router-dom';
import { Gem, Phone, Mail, MapPin, Clock, ArrowUpRight } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="gradient-emerald text-white">
      {/* Main Footer */}
      <div className="container mx-auto px-4 py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12">
          {/* Brand */}
          <div className="lg:col-span-4">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-2xl bg-white/10 flex items-center justify-center backdrop-blur-sm">
                <Gem className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="text-xl font-bold tracking-tight">Exclusive</h3>
                <p className="text-xs text-white/50 tracking-widest uppercase">Benefícios Mix</p>
              </div>
            </div>
            <p className="text-white/70 text-sm leading-relaxed mb-6 max-w-xs">
              Curadoria especializada em experiências premium e programas de 
              vantagens diferenciadas para clientes selecionados.
            </p>
            <p className="text-sm text-white/50">
              Registro: <span className="text-white/70">73492816</span>
            </p>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-2">
            <h4 className="text-sm font-bold mb-6 tracking-wider uppercase text-white/90">Menu</h4>
            <ul className="space-y-3">
              {[
                { to: '/', label: 'Home' },
                { to: '/sobre', label: 'Quem Somos' },
                { to: '/contato', label: 'Fale Conosco' },
              ].map((link) => (
                <li key={link.to}>
                  <Link to={link.to} className="footer-link-modern flex items-center gap-1.5 group">
                    {link.label}
                    <ArrowUpRight className="w-3.5 h-3.5 opacity-0 -translate-y-0.5 translate-x-0.5 group-hover:opacity-100 group-hover:translate-y-0 group-hover:translate-x-0 transition-all" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div className="lg:col-span-2">
            <h4 className="text-sm font-bold mb-6 tracking-wider uppercase text-white/90">Legal</h4>
            <ul className="space-y-3">
              {[
                { to: '/politica-privacidade', label: 'Privacidade' },
                { to: '/termos-condicoes', label: 'Termos' },
                { to: '/politica-reembolso', label: 'Reembolso' },
              ].map((link) => (
                <li key={link.to}>
                  <Link to={link.to} className="footer-link-modern flex items-center gap-1.5 group">
                    {link.label}
                    <ArrowUpRight className="w-3.5 h-3.5 opacity-0 -translate-y-0.5 translate-x-0.5 group-hover:opacity-100 group-hover:translate-y-0 group-hover:translate-x-0 transition-all" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="lg:col-span-4">
            <h4 className="text-sm font-bold mb-6 tracking-wider uppercase text-white/90">Contato</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="w-4 h-4 flex-shrink-0 mt-1 text-white/50" />
                <span className="text-sm text-white/70 leading-relaxed">
                  R Cabreuva 210<br />
                  Sorocaba, SP - 18.085-340
                </span>
              </li>
              <li>
                <a href="tel:+5519810200844" className="flex items-center gap-3 footer-link-modern">
                  <Phone className="w-4 h-4 text-white/50" />
                  (19) 8102-0844
                </a>
              </li>
              <li>
                <a href="mailto:contato@exclusivebeneficiosmix.com" className="flex items-center gap-3 footer-link-modern break-all">
                  <Mail className="w-4 h-4 flex-shrink-0 text-white/50" />
                  contato@exclusivebeneficiosmix.com
                </a>
              </li>
              <li className="flex items-center gap-3 text-white/60 text-sm">
                <Clock className="w-4 h-4 text-white/50" />
                Segunda a Sexta: 09h - 18h
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-white/50 text-center md:text-left">
              © {currentYear} Exclusive Benefícios Mix. Todos os direitos reservados.
            </p>
            <p className="text-xs text-white/40 text-center md:text-right max-w-sm">
              Empresa de curadoria e orientação. Não atuamos como instituição financeira.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
