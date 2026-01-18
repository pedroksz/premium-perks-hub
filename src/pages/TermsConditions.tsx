import { motion } from 'framer-motion';
import { FileText, ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';
import Layout from '@/components/layout/Layout';

const TermsConditions = () => {
  return (
    <Layout>
      {/* Cabeçalho */}
      <section className="gradient-hero-bg py-20 text-white">
        <div className="container mx-auto px-4 text-center">
          <FileText className="w-18 h-18 mx-auto mb-5 opacity-90" />
          <motion.h1 
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-6xl font-bold mb-5"
          >
            Termos de Utilização
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.12 }}
            className="text-xl text-white/80 font-light"
          >
            Condições para uso dos nossos serviços
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
                1. Concordância com os Termos
              </h2>
              <p className="text-muted-foreground mb-8">
                Ao utilizar os serviços da Benefícios Premix, você manifesta concordância integral 
                com estes Termos de Utilização. Caso discorde de qualquer cláusula, 
                solicitamos que não prossiga com o uso dos serviços.
              </p>

              <h2 className="text-3xl font-bold text-primary border-b-2 border-primary/30 pb-3 mb-8 mt-12">
                2. Caracterização dos Serviços
              </h2>
              <div className="alert-box mb-8">
                <p className="font-bold text-foreground mb-3">ATENÇÃO:</p>
                <p className="text-muted-foreground">
                  A Benefícios Premix presta exclusivamente assessoria consultiva, curadoria 
                  informativa e orientação educacional. NÃO somos banco, financeira, emissora de 
                  cartões ou entidade sujeita a regulação de órgãos financeiros.
                </p>
              </div>
              <ul className="list-disc pl-8 text-muted-foreground space-y-3 mb-8">
                <li>Não realizamos intermediação financeira de nenhuma natureza</li>
                <li>Não efetuamos análises de crédito ou concessão de financiamentos</li>
                <li>Não emitimos cartões de crédito, débito ou produtos bancários</li>
                <li>Não representamos instituições financeiras ou bandeiras de cartões</li>
                <li>Não garantimos aprovações de crédito ou liberação de produtos</li>
              </ul>

              <h2 className="text-3xl font-bold text-primary border-b-2 border-primary/30 pb-3 mb-8 mt-12">
                3. Escopo da Prestação
              </h2>
              <p className="text-muted-foreground mb-5">
                Nossa atuação compreende:
              </p>
              <ul className="list-disc pl-8 text-muted-foreground space-y-3 mb-8">
                <li>Orientação educacional sobre programas de vantagens do mercado</li>
                <li>Curadoria de informações sobre benefícios e experiências exclusivas</li>
                <li>Assessoria consultiva para entendimento de requisitos e critérios</li>
                <li>Direcionamento para canais oficiais de empresas quando pertinente</li>
              </ul>

              <h2 className="text-3xl font-bold text-primary border-b-2 border-primary/30 pb-3 mb-8 mt-12">
                4. Obrigações do Usuário
              </h2>
              <p className="text-muted-foreground mb-5">
                Ao utilizar nossos serviços, você se compromete a:
              </p>
              <ul className="list-disc pl-8 text-muted-foreground space-y-3 mb-8">
                <li>Fornecer dados verdadeiros e atualizados</li>
                <li>Utilizar os serviços exclusivamente para fins lícitos</li>
                <li>Reconhecer que decisões de contratação são de sua responsabilidade</li>
                <li>Respeitar direitos autorais e propriedade intelectual</li>
              </ul>

              <h2 className="text-3xl font-bold text-primary border-b-2 border-primary/30 pb-3 mb-8 mt-12">
                5. Limitações de Responsabilidade
              </h2>
              <p className="text-muted-foreground mb-8">
                A Benefícios Premix não responde por decisões tomadas com base nas orientações 
                fornecidas. Contratações de produtos devem ser realizadas diretamente 
                junto às instituições competentes, cabendo ao usuário verificar requisitos específicos.
              </p>

              <h2 className="text-3xl font-bold text-primary border-b-2 border-primary/30 pb-3 mb-8 mt-12">
                6. Direitos Autorais
              </h2>
              <p className="text-muted-foreground mb-8">
                Todo conteúdo deste site, incluindo textos, imagens, logotipos e materiais didáticos, 
                pertence à Benefícios Premix e está protegido por legislação de direitos autorais. 
                Reprodução sem autorização prévia é vedada.
              </p>

              <h2 className="text-3xl font-bold text-primary border-b-2 border-primary/30 pb-3 mb-8 mt-12">
                7. Atualizações dos Termos
              </h2>
              <p className="text-muted-foreground mb-8">
                Reservamo-nos o direito de alterar estes termos a qualquer momento. Modificações 
                serão publicadas nesta página com data de atualização. O uso continuado após 
                alterações implica aceitação das novas condições.
              </p>

              <h2 className="text-3xl font-bold text-primary border-b-2 border-primary/30 pb-3 mb-8 mt-12">
                8. Legislação e Foro
              </h2>
              <p className="text-muted-foreground mb-8">
                Estes termos regem-se pelas leis brasileiras. Eventuais 
                controvérsias serão dirimidas no Foro da Comarca de Goiânia, GO.
              </p>

              <h2 className="text-3xl font-bold text-primary border-b-2 border-primary/30 pb-3 mb-8 mt-12">
                9. Canal de Contato
              </h2>
              <p className="text-muted-foreground mb-8">
                Para questionamentos sobre estes termos:
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

export default TermsConditions;