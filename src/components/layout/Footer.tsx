import { Link } from 'react-router-dom';
import { Sparkles, Phone, Mail, MapPin, Clock } from 'lucide-react';

const Footer = () => {
  const anoAtual = new Date().getFullYear();

  return (
    <footer className="gradient-main text-white">
      <div className="container mx-auto px-4 py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-14">
          {/* Seção Institucional */}
          <div>
            <div className="flex items-center gap-4 mb-8">
              <div className="w-14 h-14 rounded-2xl bg-white/15 flex items-center justify-center backdrop-blur-sm">
                <Sparkles className="w-8 h-8 text-white" />
              </div>
              <div>
                <h3 className="text-2xl font-bold tracking-tight">Benefícios Premix</h3>
                <p className="text-sm text-white/60 tracking-widest uppercase">Programa de Vantagens</p>
              </div>
            </div>
            <p className="text-white/80 text-sm leading-relaxed">
              Assessoria completa em programas de recompensas, 
              benefícios diferenciados e experiências exclusivas para você.
            </p>
            <p className="mt-6 text-sm opacity-90">
              <strong>Cadastro:</strong> 38291045
            </p>
          </div>

          {/* Links Rápidos */}
          <div>
            <h4 className="text-lg font-bold mb-8 tracking-wide">Acesso Rápido</h4>
            <ul className="space-y-4">
              <li>
                <Link to="/" className="footer-item text-sm block">
                  Página Inicial
                </Link>
              </li>
              <li>
                <Link to="/sobre" className="footer-item text-sm block">
                  Quem Somos
                </Link>
              </li>
              <li>
                <Link to="/contato" className="footer-item text-sm block">
                  Fale Conosco
                </Link>
              </li>
            </ul>
          </div>

          {/* Links Jurídicos */}
          <div>
            <h4 className="text-lg font-bold mb-8 tracking-wide">Informações Legais</h4>
            <ul className="space-y-4">
              <li>
                <Link to="/politica-privacidade" className="footer-item text-sm block">
                  Privacidade e Dados
                </Link>
              </li>
              <li>
                <Link to="/termos-condicoes" className="footer-item text-sm block">
                  Termos de Uso
                </Link>
              </li>
              <li>
                <Link to="/politica-reembolso" className="footer-item text-sm block">
                  Cancelamento e Reembolso
                </Link>
              </li>
            </ul>
          </div>

          {/* Dados de Contato */}
          <div>
            <h4 className="text-lg font-bold mb-8 tracking-wide">Onde Estamos</h4>
            <ul className="space-y-5">
              <li className="flex items-start gap-4">
                <MapPin className="w-5 h-5 flex-shrink-0 mt-1 opacity-80" />
                <span className="text-sm text-white/80 leading-relaxed">
                  Av General Couto Magalhaes 485<br />
                  Quadra26 Lote 04<br />
                  VI Maua, GO - 74.323-240
                </span>
              </li>
              <li className="flex items-center gap-4">
                <Phone className="w-5 h-5 flex-shrink-0 opacity-80" />
                <a href="tel:+5562915296613" className="text-sm footer-item">
                  (62) 9152-9613
                </a>
              </li>
              <li className="flex items-center gap-4">
                <Mail className="w-5 h-5 flex-shrink-0 opacity-80" />
                <a href="mailto:contato@beneficiospremix.com" className="text-sm footer-item break-all">
                  contato@beneficiospremix.com
                </a>
              </li>
              <li className="flex items-center gap-4">
                <Clock className="w-5 h-5 flex-shrink-0 opacity-80" />
                <span className="text-sm text-white/80">Seg-Sex: 09h às 18h</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Rodapé Final */}
        <div className="border-t border-white/15 mt-16 pt-10">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <p className="text-sm text-white/60 text-center md:text-left">
              © {anoAtual} Benefícios Premix. Direitos reservados.
            </p>
            <p className="text-xs text-white/50 text-center md:text-right max-w-lg">
              Empresa de consultoria e orientação. Não operamos como instituição financeira. 
              Nenhum serviço de intermediação creditícia ou bancária.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;