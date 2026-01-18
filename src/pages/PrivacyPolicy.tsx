import { motion } from 'framer-motion';
import { Shield, ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';
import Layout from '@/components/layout/Layout';

const PrivacyPolicy = () => {
  return (
    <Layout>
      {/* Cabeçalho */}
      <section className="gradient-hero-bg py-20 text-white">
        <div className="container mx-auto px-4 text-center">
          <Shield className="w-18 h-18 mx-auto mb-5 opacity-90" />
          <motion.h1 
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-6xl font-bold mb-5"
          >
            Privacidade e Proteção de Dados
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.12 }}
            className="text-xl text-white/80 font-light"
          >
            Compromisso total com a segurança das suas informações
          </motion.p>
        </div>
      </section>

      {/* Conteúdo */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto bg-card rounded-3xl shadow-xl p-10 md:p-14 -mt-10 relative">
            <Link 
              to="/" 
              className="inline-flex items-center gap-3 text-primary hover:text-primary/80 transition-colors mb-10 font-medium"
            >
              <ArrowLeft className="w-5 h-5" />
              Retornar ao Início
            </Link>

            <div className="notice-box mb-10">
              <p><strong>Vigência:</strong> 01 de Janeiro de 2025</p>
              <p><strong>Revisão:</strong> 18/01/2026</p>
              <p><strong>Cadastro:</strong> 38291045</p>
            </div>

            <div className="prose prose-lg max-w-none">
              <h2 className="text-3xl font-bold text-primary border-b-2 border-primary/30 pb-3 mb-8">
                1. Apresentação e Escopo
              </h2>
              <p className="text-muted-foreground mb-8">
                A Benefícios Premix é uma organização privada que disponibiliza serviços de assessoria consultiva, 
                curadoria de informações e orientação educacional sobre programas de vantagens, benefícios 
                e experiências diferenciadas.
              </p>
              <p className="text-muted-foreground mb-8">
                <strong className="text-primary">Esclarecimento:</strong> Não operamos como banco, financeira, 
                emissora de cartões ou qualquer entidade sujeita à regulação do Banco Central, CVM ou órgãos 
                similares. Não intermediamos operações financeiras, crédito ou produtos bancários.
              </p>

              <h2 className="text-3xl font-bold text-primary border-b-2 border-primary/30 pb-3 mb-8 mt-12">
                2. Informações Coletadas
              </h2>
              <p className="text-muted-foreground mb-5">
                Para prestar nossa assessoria, coletamos:
              </p>
              <ul className="list-disc pl-8 text-muted-foreground space-y-3 mb-8">
                <li>Nome completo para identificação e comunicação personalizada</li>
                <li>Email para envio de conteúdo educativo e atualizações</li>
                <li>Telefone para suporte consultivo quando solicitado</li>
                <li>Dados de navegação e cookies para otimização da experiência</li>
              </ul>

              <h2 className="text-3xl font-bold text-primary border-b-2 border-primary/30 pb-3 mb-8 mt-12">
                3. Destinação das Informações
              </h2>
              <p className="text-muted-foreground mb-5">
                Suas informações são utilizadas exclusivamente para:
              </p>
              <ul className="list-disc pl-8 text-muted-foreground space-y-3 mb-8">
                <li>Prestar assessoria sobre programas de vantagens</li>
                <li>Disponibilizar materiais educativos e informativos</li>
                <li>Responder solicitações e esclarecer dúvidas</li>
                <li>Aprimorar nossos serviços de curadoria</li>
                <li>Cumprir exigências legais aplicáveis</li>
              </ul>

              <h2 className="text-3xl font-bold text-primary border-b-2 border-primary/30 pb-3 mb-8 mt-12">
                4. Segurança das Informações
              </h2>
              <p className="text-muted-foreground mb-8">
                Adotamos medidas técnicas e organizacionais para salvaguardar seus dados contra 
                acessos indevidos, modificações, divulgações ou destruições não autorizadas. 
                Utilizamos protocolos de criptografia SSL/TLS em todas as transmissões.
              </p>

              <h2 className="text-3xl font-bold text-primary border-b-2 border-primary/30 pb-3 mb-8 mt-12">
                5. Direitos do Titular
              </h2>
              <p className="text-muted-foreground mb-5">
                Conforme a Lei Geral de Proteção de Dados, você pode:
              </p>
              <ul className="list-disc pl-8 text-muted-foreground space-y-3 mb-8">
                <li>Consultar seus dados pessoais armazenados</li>
                <li>Solicitar correções de informações incorretas</li>
                <li>Requerer a eliminação dos seus dados</li>
                <li>Revogar consentimentos previamente fornecidos</li>
                <li>Solicitar portabilidade para outro fornecedor</li>
              </ul>

              <h2 className="text-3xl font-bold text-primary border-b-2 border-primary/30 pb-3 mb-8 mt-12">
                6. Tecnologias de Rastreamento
              </h2>
              <p className="text-muted-foreground mb-8">
                Empregamos cookies para melhorar sua navegação, analisar métricas de acesso 
                e customizar conteúdos. Seu navegador pode ser configurado para bloquear cookies, 
                porém isso pode impactar algumas funcionalidades.
              </p>

              <h2 className="text-3xl font-bold text-primary border-b-2 border-primary/30 pb-3 mb-8 mt-12">
                7. Canal de Comunicação
              </h2>
              <p className="text-muted-foreground mb-8">
                Para exercer seus direitos ou obter esclarecimentos sobre esta política:
              </p>
              <div className="data-box">
                <p><strong>Email:</strong> contato@beneficiospremix.com</p>
                <p><strong>Telefone:</strong> (62) 9152-9613</p>
                <p><strong>Endereço:</strong> Av General Couto Magalhaes 485, Quadra26 Lote 04 - VI Maua, GO - 74.323-240</p>
              </div>
            </div>

            <div className="mt-10 pt-10 border-t text-center text-sm text-muted-foreground">
              <p>Documento revisado em 18 de Janeiro de 2026</p>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default PrivacyPolicy;