import { Link } from 'react-router-dom';
import { Shield, Phone, Mail, MapPin, Clock } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="gradient-navy text-white">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* About Section */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-lg bg-white/10 flex items-center justify-center">
                <Shield className="w-7 h-7 text-gold" />
              </div>
              <div>
                <h3 className="text-xl font-serif font-bold">Benefícios Premix</h3>
                <p className="text-sm text-white/60">Vantagens Premium</p>
              </div>
            </div>
            <p className="text-white/80 text-sm leading-relaxed">
              Serviço de consultoria especializada em benefícios premium, 
              experiências exclusivas e programas de recompensas diferenciados.
            </p>
            <p className="mt-4 text-sm text-gold">
              <strong>Registro:</strong> 38291045
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-serif font-semibold text-gold mb-6">Navegação</h4>
            <ul className="space-y-3">
              <li>
                <Link to="/" className="footer-link text-sm hover:pl-2 transition-all">
                  Início
                </Link>
              </li>
              <li>
                <Link to="/sobre" className="footer-link text-sm hover:pl-2 transition-all">
                  Sobre Nós
                </Link>
              </li>
              <li>
                <Link to="/contato" className="footer-link text-sm hover:pl-2 transition-all">
                  Contato
                </Link>
              </li>
            </ul>
          </div>

          {/* Legal Links */}
          <div>
            <h4 className="text-lg font-serif font-semibold text-gold mb-6">Legal</h4>
            <ul className="space-y-3">
              <li>
                <Link to="/politica-privacidade" className="footer-link text-sm hover:pl-2 transition-all">
                  Política de Privacidade
                </Link>
              </li>
              <li>
                <Link to="/termos-condicoes" className="footer-link text-sm hover:pl-2 transition-all">
                  Termos e Condições
                </Link>
              </li>
              <li>
                <Link to="/politica-reembolso" className="footer-link text-sm hover:pl-2 transition-all">
                  Política de Reembolso
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-serif font-semibold text-gold mb-6">Contato</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-gold flex-shrink-0 mt-0.5" />
                <span className="text-sm text-white/80">
                  Av General Couto Magalhaes 485<br />
                  Quadra26 Lote 04 - VI Maua, GO<br />
                  CEP: 74.323-240
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-gold flex-shrink-0" />
                <a href="tel:+5562915296613" className="text-sm footer-link">
                  (62) 9152-9613
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-gold flex-shrink-0" />
                <a href="mailto:contato@beneficiospremix.com" className="text-sm footer-link break-all">
                  contato@beneficiospremix.com
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Clock className="w-5 h-5 text-gold flex-shrink-0" />
                <span className="text-sm text-white/80">Seg-Sex: 9h às 18h</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Legal Notice */}
        <div className="border-t border-white/10 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-white/60 text-center md:text-left">
              © {currentYear} Benefícios Premix. Todos os direitos reservados.
            </p>
            <p className="text-xs text-white/50 text-center md:text-right max-w-xl">
              Serviço consultivo e informativo. Não somos instituição financeira. 
              Sem intermediação creditícia ou oferta de produtos bancários.
            </p>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;