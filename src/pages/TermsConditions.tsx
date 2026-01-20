import { motion } from 'framer-motion';
import { FileText, ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';
import Layout from '@/components/layout/Layout';

const TermsConditions = () => {
  return (
    <Layout>
      <section className="gradient-hero-section py-20 pt-36 text-white">
        <div className="container mx-auto px-4 text-center">
          <FileText className="w-14 h-14 mx-auto mb-4 opacity-80" />
          <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-4xl md:text-5xl font-bold">
            Termos e Condições
          </motion.h1>
        </div>
      </section>
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto bg-card rounded-3xl shadow-lg p-8 md:p-12 -mt-8 relative border border-border/30">
            <Link to="/" className="inline-flex items-center gap-2 text-primary hover:text-primary/80 transition-colors mb-8 font-medium text-sm">
              <ArrowLeft className="w-4 h-4" /> Voltar ao Início
            </Link>
            <div className="info-panel mb-8">
              <p><strong>Vigência:</strong> 01 de Janeiro de 2025</p>
              <p><strong>Registro:</strong> 73492816</p>
            </div>
            <div className="prose prose-lg max-w-none">
              <h2 className="text-2xl font-bold text-primary border-b-2 border-primary/20 pb-2 mb-6">1. Natureza dos Serviços</h2>
              <div className="bg-destructive/10 border border-destructive/20 rounded-2xl p-5 mb-6">
                <p className="font-bold text-foreground mb-2">ATENÇÃO:</p>
                <p className="text-muted-foreground text-sm">A Exclusive Benefícios Mix presta exclusivamente curadoria consultiva. NÃO somos banco, financeira ou entidade regulada.</p>
              </div>
              <h2 className="text-2xl font-bold text-primary border-b-2 border-primary/20 pb-2 mb-6 mt-10">2. Contato</h2>
              <div className="highlight-panel">
                <p><strong>Email:</strong> contato@exclusivebeneficiosmix.com</p>
                <p><strong>Telefone:</strong> (19) 8102-0844</p>
                <p><strong>Endereço:</strong> R Cabreuva 210 - Sorocaba, SP - 18.085-340</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default TermsConditions;