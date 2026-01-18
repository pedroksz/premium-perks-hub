import { motion } from 'framer-motion';
import { RotateCcw, ArrowLeft, CheckCircle2, XCircle, AlertTriangle } from 'lucide-react';
import { Link } from 'react-router-dom';
import Layout from '@/components/layout/Layout';

const RefundPolicy = () => {
  return (
    <Layout>
      {/* Cabeçalho */}
      <section className="gradient-hero-bg py-20 text-white">
        <div className="container mx-auto px-4 text-center">
          <RotateCcw className="w-18 h-18 mx-auto mb-5 opacity-90" />
          <motion.h1 
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-6xl font-bold mb-5"
          >
            Cancelamento e Reembolso
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.12 }}
            className="text-xl text-white/80 font-light"
          >
            Regras claras sobre devoluções e cancelamentos
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
                1. Caracterização dos Serviços
              </h2>
              <p className="text-muted-foreground mb-8">
                A Benefícios Premix disponibiliza assessoria consultiva, curadoria informativa 
                e orientação educacional sobre programas de vantagens. Nossos serviços têm 
                natureza informativa, sem envolvimento em operações financeiras.
              </p>

              <h2 className="text-3xl font-bold text-primary border-b-2 border-primary/30 pb-3 mb-8 mt-12">
                2. Garantia de Arrependimento
              </h2>
              <p className="text-muted-foreground mb-8">
                Em conformidade com o Código de Defesa do Consumidor (Lei 8.078/90), o cliente 
                possui direito de desistência no prazo de 7 dias corridos após a contratação, 
                quando realizada remotamente.
              </p>

              <div className="bg-green-50 border-l-4 border-green-500 p-8 rounded-2xl mb-8">
                <div className="flex items-start gap-4">
                  <CheckCircle2 className="w-7 h-7 text-green-600 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-bold text-green-800 mb-3 text-lg">Situações que Admitem Reembolso</h3>
                    <ul className="text-green-700 space-y-2 text-sm">
                      <li>• Pedido realizado dentro do prazo de 7 dias</li>
                      <li>• Serviço não iniciado ou parcialmente prestado</li>
                      <li>• Cancelamento com justificativa procedente</li>
                    </ul>
                  </div>
                </div>
              </div>

              <h2 className="text-3xl font-bold text-primary border-b-2 border-primary/30 pb-3 mb-8 mt-12">
                3. Como Solicitar
              </h2>
              <p className="text-muted-foreground mb-5">
                Para requerer reembolso:
              </p>
              <ol className="list-decimal pl-8 text-muted-foreground space-y-4 mb-8">
                <li>Encaminhe solicitação para: reembolso@beneficiospremix.com</li>
                <li>Indique seus dados cadastrais e identificação do pedido</li>
                <li>Explique o motivo do pedido</li>
                <li>Aguarde análise em até 5 dias úteis</li>
                <li>Em caso de aprovação, processamento em até 10 dias úteis</li>
              </ol>

              <h2 className="text-3xl font-bold text-primary border-b-2 border-primary/30 pb-3 mb-8 mt-12">
                4. Modalidades de Devolução
              </h2>
              <p className="text-muted-foreground mb-5">
                O reembolso ocorre pelo mesmo meio utilizado no pagamento:
              </p>
              <ul className="list-disc pl-8 text-muted-foreground space-y-3 mb-8">
                <li><strong>Cartão de Crédito:</strong> Estorno em até 2 faturas seguintes</li>
                <li><strong>Boleto/PIX:</strong> Depósito em conta informada pelo cliente</li>
                <li><strong>Transferência:</strong> Devolução para conta de origem</li>
              </ul>

              <h2 className="text-3xl font-bold text-primary border-b-2 border-primary/30 pb-3 mb-8 mt-12">
                5. Situações que Não Admitem Reembolso
              </h2>
              <div className="bg-red-50 border-l-4 border-red-500 p-8 rounded-2xl mb-8">
                <div className="flex items-start gap-4">
                  <XCircle className="w-7 h-7 text-red-600 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-bold text-red-800 mb-3 text-lg">Reembolso Não Aplicável</h3>
                    <ul className="text-red-700 space-y-2 text-sm">
                      <li>• Pedido após o prazo de 7 dias</li>
                      <li>• Serviço integralmente prestado</li>
                      <li>• Uso indevido ou violação dos termos</li>
                      <li>• Informações inverídicas fornecidas</li>
                    </ul>
                  </div>
                </div>
              </div>

              <h2 className="text-3xl font-bold text-primary border-b-2 border-primary/30 pb-3 mb-8 mt-12">
                6. Cancelamento de Serviços
              </h2>
              <p className="text-muted-foreground mb-8">
                O cancelamento pode ser requerido a qualquer tempo. Havendo início da prestação, 
                será cobrado proporcionalmente pelo serviço já executado.
              </p>

              <h2 className="text-3xl font-bold text-primary border-b-2 border-primary/30 pb-3 mb-8 mt-12">
                7. Observações Relevantes
              </h2>
              <div className="bg-amber-50 border-l-4 border-amber-500 p-8 rounded-2xl mb-8">
                <div className="flex items-start gap-4">
                  <AlertTriangle className="w-7 h-7 text-amber-600 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-bold text-amber-800 mb-3 text-lg">Atenção</h3>
                    <p className="text-amber-700 text-sm leading-relaxed">
                      Esta política abrange exclusivamente os serviços de assessoria da 
                      Benefícios Premix. Produtos contratados diretamente com terceiros 
                      (bancos, emissores, etc.) estão sujeitos às políticas dessas empresas.
                    </p>
                  </div>
                </div>
              </div>

              <h2 className="text-3xl font-bold text-primary border-b-2 border-primary/30 pb-3 mb-8 mt-12">
                8. Canal de Contato
              </h2>
              <p className="text-muted-foreground mb-8">
                Para pedidos de reembolso ou esclarecimentos:
              </p>
              <div className="data-box">
                <p><strong>Email:</strong> contato@beneficiospremix.com</p>
                <p><strong>Telefone:</strong> (62) 9152-9613</p>
                <p><strong>Expediente:</strong> Segunda a Sexta, 09h às 18h</p>
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

export default RefundPolicy;