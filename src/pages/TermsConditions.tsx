import { motion } from 'framer-motion';
import { FileText, ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';
import Layout from '@/components/layout/Layout';

const TermsConditions = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="gradient-hero py-16 text-white">
        <div className="container mx-auto px-4 text-center">
          <FileText className="w-16 h-16 mx-auto mb-4 text-gold" />
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-serif font-bold mb-4"
          >
            Termos e Condições
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-lg text-white/80"
          >
            Leia atentamente antes de utilizar nossos serviços
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
              <p><strong>Registro:</strong> 24789156</p>
            </div>

            <div className="prose prose-lg max-w-none">
              <h2 className="text-2xl font-serif font-bold text-primary border-b-2 border-gold pb-2 mb-6">
                1. Aceitação dos Termos
              </h2>
              <p className="text-muted-foreground mb-6">
                Ao acessar e utilizar os serviços da Consultoria Elite, você concorda integralmente com 
                estes Termos e Condições. Se você não concordar com qualquer parte destes termos, 
                solicitamos que não utilize nossos serviços.
              </p>

              <h2 className="text-2xl font-serif font-bold text-primary border-b-2 border-gold pb-2 mb-6 mt-10">
                2. Natureza dos Serviços
              </h2>
              <div className="warning-box mb-6">
                <p className="font-semibold text-foreground mb-2">AVISO IMPORTANTE:</p>
                <p className="text-muted-foreground">
                  A Consultoria Elite oferece exclusivamente serviços de orientação consultiva, curadoria 
                  informativa e suporte educativo. NÃO somos instituição financeira, banco, emissor de 
                  cartões ou qualquer entidade regulada por órgãos financeiros.
                </p>
              </div>
              <ul className="list-disc pl-6 text-muted-foreground space-y-2 mb-6">
                <li>Não realizamos intermediação financeira de qualquer natureza</li>
                <li>Não oferecemos análise de crédito ou concessão de empréstimos</li>
                <li>Não emitimos cartões de crédito, débito ou qualquer produto bancário</li>
                <li>Não representamos bancos, bandeiras de cartões ou instituições financeiras</li>
                <li>Não garantimos aprovação de crédito ou liberação de produtos financeiros</li>
              </ul>

              <h2 className="text-2xl font-serif font-bold text-primary border-b-2 border-gold pb-2 mb-6 mt-10">
                3. Serviços Oferecidos
              </h2>
              <p className="text-muted-foreground mb-4">
                Nossa atuação é limitada a:
              </p>
              <ul className="list-disc pl-6 text-muted-foreground space-y-2 mb-6">
                <li>Orientação educativa sobre benefícios premium disponíveis no mercado</li>
                <li>Curadoria informativa sobre programas de vantagens e experiências exclusivas</li>
                <li>Suporte consultivo para compreensão de requisitos e critérios de elegibilidade</li>
                <li>Direcionamento aos canais oficiais dos emissores quando necessário</li>
              </ul>

              <h2 className="text-2xl font-serif font-bold text-primary border-b-2 border-gold pb-2 mb-6 mt-10">
                4. Responsabilidades do Usuário
              </h2>
              <p className="text-muted-foreground mb-4">
                Ao utilizar nossos serviços, você se compromete a:
              </p>
              <ul className="list-disc pl-6 text-muted-foreground space-y-2 mb-6">
                <li>Fornecer informações verdadeiras e atualizadas</li>
                <li>Utilizar os serviços apenas para fins lícitos</li>
                <li>Compreender que a decisão final sobre contratação de produtos é sua responsabilidade</li>
                <li>Respeitar a propriedade intelectual e direitos autorais</li>
              </ul>

              <h2 className="text-2xl font-serif font-bold text-primary border-b-2 border-gold pb-2 mb-6 mt-10">
                5. Limitação de Responsabilidade
              </h2>
              <p className="text-muted-foreground mb-6">
                A Consultoria Elite não se responsabiliza por decisões tomadas com base nas informações 
                fornecidas. Todas as contratações de produtos e serviços devem ser realizadas diretamente 
                com as instituições competentes, cabendo ao usuário verificar os requisitos específicos.
              </p>

              <h2 className="text-2xl font-serif font-bold text-primary border-b-2 border-gold pb-2 mb-6 mt-10">
                6. Propriedade Intelectual
              </h2>
              <p className="text-muted-foreground mb-6">
                Todo o conteúdo deste site, incluindo textos, imagens, logotipos e materiais educativos, 
                é de propriedade da Consultoria Elite e está protegido por leis de direitos autorais. 
                É proibida a reprodução sem autorização prévia.
              </p>

              <h2 className="text-2xl font-serif font-bold text-primary border-b-2 border-gold pb-2 mb-6 mt-10">
                7. Alterações nos Termos
              </h2>
              <p className="text-muted-foreground mb-6">
                Reservamos o direito de modificar estes termos a qualquer momento. As alterações serão 
                publicadas nesta página com a data de atualização. O uso continuado dos serviços após 
                as alterações constitui aceitação dos novos termos.
              </p>

              <h2 className="text-2xl font-serif font-bold text-primary border-b-2 border-gold pb-2 mb-6 mt-10">
                8. Lei Aplicável e Foro
              </h2>
              <p className="text-muted-foreground mb-6">
                Estes termos são regidos pelas leis da República Federativa do Brasil. Qualquer 
                controvérsia será dirimida no Foro da Comarca de São Paulo, SP.
              </p>

              <h2 className="text-2xl font-serif font-bold text-primary border-b-2 border-gold pb-2 mb-6 mt-10">
                9. Contato
              </h2>
              <p className="text-muted-foreground mb-6">
                Para dúvidas sobre estes termos, entre em contato:
              </p>
              <div className="info-box">
                <p><strong>Email:</strong> juridico@consultoriaelite.com.br</p>
                <p><strong>Telefone:</strong> +55 11 99999-9999</p>
                <p><strong>Endereço:</strong> Av. Paulista, 1000 - Bela Vista, São Paulo, SP - CEP: 01310-100</p>
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

export default TermsConditions;
