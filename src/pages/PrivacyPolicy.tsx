import { motion } from 'framer-motion';
import { Shield, ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';
import Layout from '@/components/layout/Layout';

const PrivacyPolicy = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="gradient-hero py-16 text-white">
        <div className="container mx-auto px-4 text-center">
          <Shield className="w-16 h-16 mx-auto mb-4 text-gold" />
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-serif font-bold mb-4"
          >
            Política de Privacidade
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-lg text-white/80"
          >
            Transparência total sobre como tratamos suas informações
          </motion.p>
        </div>
      </section>

      {/* Content */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto bg-card rounded-2xl shadow-xl p-8 md:p-12 -mt-8 relative">
            <Link 
              to="/" 
              className="inline-flex items-center gap-2 text-primary hover:text-primary/80 transition-colors mb-8"
            >
              <ArrowLeft className="w-4 h-4" />
              Voltar ao Início
            </Link>

            <div className="highlight-box mb-8">
              <p><strong>Data de Vigência:</strong> 01 de Janeiro de 2025</p>
              <p><strong>Última Atualização:</strong> 13/01/2026</p>
              <p><strong>Registro:</strong> 24179342</p>
            </div>

            <div className="prose prose-lg max-w-none">
              <h2 className="text-2xl font-serif font-bold text-primary border-b-2 border-gold pb-2 mb-6">
                1. Introdução e Natureza dos Serviços
              </h2>
              <p className="text-muted-foreground mb-6">
                A Consultoria Elite é uma empresa privada que oferece serviços de orientação consultiva, 
                curadoria informativa e suporte educativo sobre benefícios premium, programas de vantagens 
                e experiências exclusivas.
              </p>
              <p className="text-muted-foreground mb-6">
                <strong className="text-primary">Importante:</strong> Não somos instituição financeira, banco, 
                emissor de cartões, operadora financeira ou qualquer entidade regulada pelo Banco Central do Brasil, 
                CVM ou outros órgãos reguladores financeiros. Não realizamos intermediação financeira, análise de 
                crédito, concessão de empréstimos, emissão de cartões ou qualquer atividade bancária.
              </p>

              <h2 className="text-2xl font-serif font-bold text-primary border-b-2 border-gold pb-2 mb-6 mt-10">
                2. Dados Coletados
              </h2>
              <p className="text-muted-foreground mb-4">
                Coletamos as seguintes informações para prestar nossos serviços de orientação consultiva:
              </p>
              <ul className="list-disc pl-6 text-muted-foreground space-y-2 mb-6">
                <li>Nome completo para identificação e atendimento personalizado</li>
                <li>Endereço de e-mail para comunicações e envio de informações educativas</li>
                <li>Número de telefone para contato e suporte consultivo</li>
                <li>Dados de navegação e cookies para melhorar a experiência no site</li>
              </ul>

              <h2 className="text-2xl font-serif font-bold text-primary border-b-2 border-gold pb-2 mb-6 mt-10">
                3. Uso das Informações
              </h2>
              <p className="text-muted-foreground mb-4">
                Utilizamos suas informações exclusivamente para:
              </p>
              <ul className="list-disc pl-6 text-muted-foreground space-y-2 mb-6">
                <li>Fornecer orientação consultiva sobre benefícios premium</li>
                <li>Enviar conteúdo educativo e informativo sobre programas de vantagens</li>
                <li>Responder a solicitações e dúvidas</li>
                <li>Melhorar nossos serviços de curadoria informativa</li>
                <li>Cumprir obrigações legais aplicáveis</li>
              </ul>

              <h2 className="text-2xl font-serif font-bold text-primary border-b-2 border-gold pb-2 mb-6 mt-10">
                4. Proteção de Dados
              </h2>
              <p className="text-muted-foreground mb-6">
                Implementamos medidas técnicas e organizacionais para proteger seus dados pessoais contra 
                acesso não autorizado, alteração, divulgação ou destruição. Utilizamos criptografia SSL/TLS 
                para proteger a transmissão de dados.
              </p>

              <h2 className="text-2xl font-serif font-bold text-primary border-b-2 border-gold pb-2 mb-6 mt-10">
                5. Seus Direitos
              </h2>
              <p className="text-muted-foreground mb-4">
                De acordo com a Lei Geral de Proteção de Dados (LGPD), você tem direito a:
              </p>
              <ul className="list-disc pl-6 text-muted-foreground space-y-2 mb-6">
                <li>Acessar seus dados pessoais</li>
                <li>Corrigir dados incompletos, inexatos ou desatualizados</li>
                <li>Solicitar a exclusão de seus dados</li>
                <li>Revogar o consentimento a qualquer momento</li>
                <li>Solicitar a portabilidade dos dados</li>
              </ul>

              <h2 className="text-2xl font-serif font-bold text-primary border-b-2 border-gold pb-2 mb-6 mt-10">
                6. Cookies
              </h2>
              <p className="text-muted-foreground mb-6">
                Utilizamos cookies para melhorar sua experiência de navegação, analisar o tráfego do site 
                e personalizar conteúdo. Você pode configurar seu navegador para recusar cookies, mas isso 
                pode afetar algumas funcionalidades do site.
              </p>

              <h2 className="text-2xl font-serif font-bold text-primary border-b-2 border-gold pb-2 mb-6 mt-10">
                7. Contato
              </h2>
              <p className="text-muted-foreground mb-6">
                Para exercer seus direitos ou esclarecer dúvidas sobre esta política, entre em contato:
              </p>
              <div className="info-box">
                <p><strong>Email:</strong> contato@beneficioselitedigital.com</p>
                <p><strong>Telefone:</strong> +22602271506</p>
                <p><strong>Endereço:</strong> Rua Batista Leite, 11 - Sousa, PB - CEP: 58804-230</p>
              </div>
            </div>

            <div className="mt-8 pt-8 border-t text-center text-sm text-muted-foreground">
              <p>Última atualização: 13 de Janeiro de 2026</p>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default PrivacyPolicy;
