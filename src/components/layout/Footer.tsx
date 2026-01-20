import { Link } from 'react-router-dom';
import { Award, Phone, Mail, MapPin, Clock } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="gradient-navy text-white">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Institucional */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center backdrop-blur-sm">
                <Award className="w-7 h-7 text-white" />
              </div>
              <div>
                <h3 className="text-xl font-bold tracking-tight">Benefícios AMX</h3>
                <p className="text-xs text-white/50 tracking-widest uppercase">Assessoria em Vantagens</p>
              </div>
            </div>
            <p className="text-white/75 text-sm leading-relaxed">
              Orientação profissional em programas de recompensas, 
              benefícios diferenciados e oportunidades exclusivas.
            </p>
            <p className="mt-5 text-sm opacity-85">
              <strong>Registro:</strong> 52738491
            </p>
          </div>

          {/* Navegação */}
          <div>
            <h4 className="text-base font-bold mb-6 tracking-wide">Navegação</h4>
            <ul className="space-y-3">
              <li>
                <Link to="/" className="footer-link text-sm block">
                  Página Inicial
                </Link>
              </li>
              <li>
                <Link to="/sobre" className="footer-link text-sm block">
                  Sobre Nós
                </Link>
              </li>
              <li>
                <Link to="/contato" className="footer-link text-sm block">
                  Contato
                </Link>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="text-base font-bold mb-6 tracking-wide">Documentos</h4>
            <ul className="space-y-3">
              <li>
                <Link to="/politica-privacidade" className="footer-link text-sm block">
                  Política de Privacidade
                </Link>
              </li>
              <li>
                <Link to="/termos-condicoes" className="footer-link text-sm block">
                  Termos e Condições
                </Link>
              </li>
              <li>
                <Link to="/politica-reembolso" className="footer-link text-sm block">
                  Política de Reembolso
                </Link>
              </li>
            </ul>
          </div>

          {/* Contato */}
          <div>
            <h4 className="text-base font-bold mb-6 tracking-wide">Localização</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 flex-shrink-0 mt-0.5 opacity-75" />
                <span className="text-sm text-white/75 leading-relaxed">
                  Av Prfa Izoraida Marques Peres, 401<br />
                  Quiosq Esp 37 QM0T<br />
                  Sorocaba, SP - 18.047-900
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 flex-shrink-0 opacity-75" />
                <a href="tel:+5519810200844" className="text-sm footer-link">
                  (19) 8102-0844
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 flex-shrink-0 opacity-75" />
                <a href="mailto:contato@beneficiosamx.com" className="text-sm footer-link break-all">
                  contato@beneficiosamx.com
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Clock className="w-5 h-5 flex-shrink-0 opacity-75" />
                <span className="text-sm text-white/75">Seg-Sex: 09h às 18h</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-white/15 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-white/55 text-center md:text-left">
              © {currentYear} Benefícios AMX. Todos os direitos reservados.
            </p>
            <p className="text-xs text-white/45 text-center md:text-right max-w-md">
              Empresa de assessoria e orientação. Não atuamos como instituição financeira 
              nem realizamos intermediação bancária.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
