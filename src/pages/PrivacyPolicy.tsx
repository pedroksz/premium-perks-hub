import { motion } from 'framer-motion';
import { Shield, ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';
import Layout from '@/components/layout/Layout';

const PrivacyPolicy = () => {
  return (
    <Layout>
      <section className="gradient-hero-section py-16 text-white">
        <div className="container mx-auto px-4 text-center">
          <Shield className="w-16 h-16 mx-auto mb-4 opacity-90" />
          <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-4xl md:text-5xl font-bold mb-4">
            Política de Privacidade
          </motion.h1>
        </div>
      </section>
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto bg-card rounded-2xl shadow-xl p-8 md:p-12 -mt-8 relative">
            <Link to="/" className="inline-flex items-center gap-2 text-primary hover:text-primary/80 transition-colors mb-8 font-medium text-sm">
              <ArrowLeft className="w-4 h-4" /> Voltar ao Início
            </Link>
            <div className="info-box mb-8">
              <p><strong>Vigência:</strong> 01 de Janeiro de 2025</p>
              <p><strong>Registro:</strong> 47829156</p>
            </div>
            <div className="prose prose-lg max-w-none">
              <h2 className="text-2xl font-bold text-primary border-b-2 border-primary/30 pb-2 mb-6">1. Sobre a Empresa</h2>
              <p className="text-muted-foreground mb-6">A Benefícios AMX é uma organização privada que oferece assessoria consultiva e orientação educacional sobre programas de vantagens e benefícios. Não operamos como instituição financeira.</p>
              <h2 className="text-2xl font-bold text-primary border-b-2 border-primary/30 pb-2 mb-6 mt-10">2. Dados Coletados</h2>
              <ul className="list-disc pl-6 text-muted-foreground space-y-2 mb-6">
                <li>Nome e email para comunicação</li>
                <li>Telefone para suporte</li>
                <li>Dados de navegação para melhorar a experiência</li>
              </ul>
              <h2 className="text-2xl font-bold text-primary border-b-2 border-primary/30 pb-2 mb-6 mt-10">3. Contato</h2>
              <div className="highlight-box">
                <p><strong>Email:</strong> contato@beneficiosamx.com</p>
                <p><strong>Telefone:</strong> (19) 8102-0844</p>
                <p><strong>Endereço:</strong> Av Prfa Izoraida Marques Peres, 401 Quiosq Esp 37 QM0T - Sorocaba, SP - 18.047-900</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default PrivacyPolicy;
