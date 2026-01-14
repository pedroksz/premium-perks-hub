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
                <h3 className="text-xl font-serif font-bold">Orientação Premium Elite</h3>
                <p className="text-sm text-white/60">Benefícios Premium</p>
              </div>
            </div>
            <p className="text-white/80 text-sm leading-relaxed">
              Serviço privado de orientação consultiva sobre benefícios premium, 
              experiências exclusivas e programas de vantagens.
            </p>
            <p className="mt-4 text-sm text-gold">
              <strong>Registro:</strong> 24789156
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
                  Av. Paulista, 1000 - Bela Vista<br />
                  São Paulo, SP - CEP: 01310-100
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-gold flex-shrink-0" />
                <a href="tel:+5511999999999" className="text-sm footer-link">
                  +55 11 99999-9999
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-gold flex-shrink-0" />
                <a href="mailto:contato@orientacaopremiumelite.com.br" className="text-sm footer-link">
                  contato@orientacaopremiumelite.com.br
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
              © {currentYear} Orientação Premium Elite. Todos os direitos reservados.
            </p>
            <p className="text-xs text-white/50 text-center md:text-right max-w-xl">
              Serviço privado e consultivo. Não somos instituição financeira. 
              Sem intermediação creditícia ou oferta de produtos bancários.
            </p>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
