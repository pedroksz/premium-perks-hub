import { motion } from 'framer-motion';
import { RotateCcw, ArrowLeft, CheckCircle2, XCircle, AlertCircle } from 'lucide-react';
import { Link } from 'react-router-dom';
import Layout from '@/components/layout/Layout';

const RefundPolicy = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="gradient-hero py-16 text-white">
        <div className="container mx-auto px-4 text-center">
          <RotateCcw className="w-16 h-16 mx-auto mb-4 text-gold" />
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-serif font-bold mb-4"
          >
            Política de Reembolso
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-lg text-white/80"
          >
            Termos claros e transparentes sobre reembolsos e cancelamentos
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
                1. Natureza dos Serviços
              </h2>
              <p className="text-muted-foreground mb-6">
                A Consultoria Elite oferece serviços de orientação consultiva, curadoria informativa 
                e suporte educativo sobre benefícios premium. Nossos serviços são de natureza 
                informativa e não envolvem intermediação financeira.
              </p>

              <h2 className="text-2xl font-serif font-bold text-primary border-b-2 border-gold pb-2 mb-6 mt-10">
                2. Direito de Arrependimento
              </h2>
              <p className="text-muted-foreground mb-6">
                De acordo com o Código de Defesa do Consumidor (Lei nº 8.078/1990), o cliente tem 
                direito ao arrependimento no prazo de 7 (sete) dias corridos a partir da contratação 
                do serviço, quando realizada fora do estabelecimento comercial.
              </p>

              <div className="bg-green-50 border-l-4 border-green-500 p-6 rounded-lg mb-6">
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-6 h-6 text-green-600 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold text-green-800 mb-2">Quando o Reembolso é Aplicável</h3>
                    <ul className="text-green-700 space-y-1 text-sm">
                      <li>• Solicitação dentro do prazo de 7 dias</li>
                      <li>• Serviço não iniciado ou parcialmente executado</li>
                      <li>• Cancelamento por motivo justificado</li>
                    </ul>
                  </div>
                </div>
              </div>

              <h2 className="text-2xl font-serif font-bold text-primary border-b-2 border-gold pb-2 mb-6 mt-10">
                3. Procedimento de Solicitação
              </h2>
              <p className="text-muted-foreground mb-4">
                Para solicitar reembolso, siga os passos:
              </p>
              <ol className="list-decimal pl-6 text-muted-foreground space-y-3 mb-6">
                <li>Entre em contato através do email: reembolso@consultoriaelite.com.br</li>
                <li>Informe seus dados cadastrais e número do pedido</li>
                <li>Descreva o motivo da solicitação</li>
                <li>Aguarde a análise em até 5 dias úteis</li>
                <li>Caso aprovado, o reembolso será processado em até 10 dias úteis</li>
              </ol>

              <h2 className="text-2xl font-serif font-bold text-primary border-b-2 border-gold pb-2 mb-6 mt-10">
                4. Formas de Reembolso
              </h2>
              <p className="text-muted-foreground mb-4">
                O reembolso será realizado através do mesmo meio de pagamento utilizado na contratação:
              </p>
              <ul className="list-disc pl-6 text-muted-foreground space-y-2 mb-6">
                <li><strong>Cartão de Crédito:</strong> Estorno em até 2 faturas subsequentes</li>
                <li><strong>Boleto/PIX:</strong> Depósito em conta indicada pelo cliente</li>
                <li><strong>Transferência:</strong> Devolução na mesma conta de origem</li>
              </ul>

              <h2 className="text-2xl font-serif font-bold text-primary border-b-2 border-gold pb-2 mb-6 mt-10">
                5. Casos de Não Aplicabilidade
              </h2>
              <div className="bg-red-50 border-l-4 border-red-500 p-6 rounded-lg mb-6">
                <div className="flex items-start gap-3">
                  <XCircle className="w-6 h-6 text-red-600 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold text-red-800 mb-2">Quando o Reembolso NÃO é Aplicável</h3>
                    <ul className="text-red-700 space-y-1 text-sm">
                      <li>• Solicitação após o prazo de 7 dias</li>
                      <li>• Serviço totalmente executado e entregue</li>
                      <li>• Uso indevido ou violação dos termos de serviço</li>
                      <li>• Informações falsas fornecidas pelo cliente</li>
                    </ul>
                  </div>
                </div>
              </div>

              <h2 className="text-2xl font-serif font-bold text-primary border-b-2 border-gold pb-2 mb-6 mt-10">
                6. Cancelamento de Serviços
              </h2>
              <p className="text-muted-foreground mb-6">
                O cancelamento de serviços pode ser solicitado a qualquer momento. No caso de 
                cancelamento após o início da prestação, será cobrado proporcionalmente pelo 
                serviço já executado.
              </p>

              <h2 className="text-2xl font-serif font-bold text-primary border-b-2 border-gold pb-2 mb-6 mt-10">
                7. Importantes Considerações
              </h2>
              <div className="bg-amber-50 border-l-4 border-amber-500 p-6 rounded-lg mb-6">
                <div className="flex items-start gap-3">
                  <AlertCircle className="w-6 h-6 text-amber-600 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold text-amber-800 mb-2">Atenção</h3>
                    <p className="text-amber-700 text-sm">
                      Esta política de reembolso aplica-se exclusivamente aos serviços de consultoria 
                      oferecidos pela Consultoria Elite. Produtos ou serviços contratados diretamente 
                      com terceiros (instituições financeiras, emissores, etc.) estão sujeitos às 
                      políticas dessas respectivas empresas.
                    </p>
                  </div>
                </div>
              </div>

              <h2 className="text-2xl font-serif font-bold text-primary border-b-2 border-gold pb-2 mb-6 mt-10">
                8. Contato
              </h2>
              <p className="text-muted-foreground mb-6">
                Para solicitações de reembolso ou dúvidas sobre esta política:
              </p>
              <div className="info-box">
                <p><strong>Email:</strong> contato@orientacaopremiumelite.com.br</p>
                <p><strong>Telefone:</strong> +22602271506</p>
                <p><strong>Horário:</strong> Segunda a Sexta, 9h às 18h</p>
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

export default RefundPolicy;
