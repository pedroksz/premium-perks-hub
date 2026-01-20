import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  Sparkles, 
  Target, 
  Users2, 
  Compass, 
  ShieldCheck, 
  Headphones,
  TrendingUp,
  Clock,
  Award,
  ArrowRight,
  Phone,
  Mail,
  Check
} from 'lucide-react';
import Layout from '@/components/layout/Layout';
import loungePremium from '@/assets/lounge-premium.jpg';
import businessWork from '@/assets/business-work.jpg';
import loungeElegant from '@/assets/lounge-elegant.jpg';
import executiveTravel from '@/assets/executive-travel.jpg';
import travelExperience from '@/assets/travel-experience.jpg';
import loungeVip from '@/assets/lounge-vip.jpg';
import artigo1 from '@/assets/artigo1.jpg';
import artigo2 from '@/assets/artigo2.jpg';
import artigo3 from '@/assets/artigo3.jpg';

const fadeIn = {
  hidden: { opacity: 0, y: 25 },
  visible: { opacity: 1, y: 0 }
};

const stagger = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.08 }
  }
};

const Index = () => {
  const services = [
    {
      icon: Sparkles,
      title: 'Orientação Didática',
      description: 'Materiais explicativos detalhados sobre vantagens especiais, acúmulo de pontos e programas diferenciados. Apoio na interpretação de regras e condições de participação.'
    },
    {
      icon: Target,
      title: 'Curadoria Especializada',
      description: 'Seleção criteriosa de oportunidades premium, parcerias estratégicas e acessos privilegiados. Direcionamento sobre categorias e requisitos de adesão.'
    },
    {
      icon: Users2,
      title: 'Atendimento Dedicado',
      description: 'Suporte individualizado para esclarecer dúvidas sobre programas de recompensas, promoções e serviços diferenciados. Comunicação direta e profissional.'
    },
    {
      icon: Compass,
      title: 'Roteiros Exclusivos',
      description: 'Informações sobre acesso a eventos especiais, salas VIP em aeroportos, experiências gastronômicas e viagens personalizadas com benefícios únicos.'
    },
    {
      icon: ShieldCheck,
      title: 'Compromisso Ético',
      description: 'Atuação puramente consultiva e informativa. Nenhuma intermediação bancária, análise de perfil creditício ou comercialização de produtos financeiros.'
    },
    {
      icon: Headphones,
      title: 'Acompanhamento Contínuo',
      description: 'Assistência permanente com foco em educação sobre vantagens. Encaminhamento para canais oficiais quando processos formais são necessários.'
    }
  ];

  const stats = [
    { icon: TrendingUp, value: '750+', label: 'Programas Catalogados' },
    { icon: Users2, value: '1.500+', label: 'Acordos Mapeados' },
    { icon: Award, value: '100%', label: 'Ética Garantida' },
    { icon: Clock, value: '24h', label: 'Conteúdo Online' }
  ];

  const disclaimers = [
    'Atividade exclusivamente privada, consultiva e de orientação ao consumidor',
    'Não representamos bancos, emissores de cartões, financeiras ou qualquer instituição regulamentada',
    'Não efetuamos análises creditícias, concessão de crédito ou intermediação de produtos bancários',
    'Não emitimos, vendemos ou distribuímos cartões de crédito ou produtos financeiros',
    'Nosso papel limita-se à educação, curadoria de informações e assessoria consultiva',
    'Nenhuma garantia de aprovação, promessa de liberação ou vinculação com processos de crédito',
    'Quando necessário, direcionamos clientes aos canais oficiais das empresas parceiras',
    'Decisões de contratação são tomadas diretamente entre o cliente e as instituições responsáveis'
  ];

  return (
    <Layout>
      {/* Schema */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{
        __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "ProfessionalService",
          "name": "Benefícios Premix",
          "description": "Assessoria personalizada para você compreender e aproveitar programas de recompensas, experiências diferenciadas e vantagens exclusivas.",
          "url": "https://beneficiosamx.com/",
          "telephone": "(62) 9152-9613",
          "address": {
            "@type": "PostalAddress",
            "streetAddress": "Av General Couto Magalhaes, 485, Quadra 26 Lote 04",
            "addressLocality": "Goiania",
            "addressRegion": "GO",
            "postalCode": "74.323-240",
            "addressCountry": "BR"
          },
          "priceRange": "$$",
          "openingHours": "Mo-Fr 09:00-18:00"
        })
      }} />

      {/* Hero */}
      <section className="relative min-h-screen flex items-center pt-28 pb-16 overflow-hidden">
        <div className="absolute inset-0">
          <div 
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${executiveTravel})` }}
          />
          <div className="absolute inset-0 gradient-hero-section opacity-95" />
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial="hidden"
              animate="visible"
              variants={stagger}
              className="text-white"
            >
              <motion.div 
                variants={fadeIn}
                className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-sm font-medium mb-8"
              >
                <Sparkles className="w-4 h-4" />
                Seu guia para vantagens exclusivas
              </motion.div>
              
              <motion.h1 
                variants={fadeIn}
                className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-[1.1]"
              >
                Descubra o Mundo dos{' '}
                <span className="text-accent-shine">Benefícios Premium</span>
              </motion.h1>
              
              <motion.p 
                variants={fadeIn}
                className="text-lg text-white/75 mb-10 max-w-lg leading-relaxed"
              >
                Assessoria personalizada para você compreender e aproveitar programas de 
                recompensas, experiências diferenciadas e vantagens exclusivas. Orientação 
                clara, ética e completamente transparente.
              </motion.p>
              
              <motion.div
                variants={fadeIn}
                className="flex flex-col sm:flex-row gap-4"
              >
                <Link to="/contato" className="btn-accent">
                  Solicitar Atendimento
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Link>
                <Link to="/sobre" className="btn-primary bg-white/10 backdrop-blur-sm border border-white/20 hover:bg-white/20">
                  Conhecer Mais
                </Link>
              </motion.div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.95, x: 40 }}
              animate={{ opacity: 1, scale: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="hidden lg:block"
            >
              <div className="relative">
                <img 
                  src={loungePremium} 
                  alt="Experiência Premium" 
                  className="rounded-3xl shadow-2xl w-full"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            variants={stagger}
            className="text-center mb-16"
          >
            <motion.h2 variants={fadeIn} className="section-heading">
              O Que Oferecemos
            </motion.h2>
            <motion.div variants={fadeIn} className="divider-elegant mt-6 mb-6" />
          </motion.div>
          
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={stagger}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {services.map((service, i) => (
              <motion.div
                key={service.title}
                variants={fadeIn}
                transition={{ delay: i * 0.05 }}
                className="card-feature"
              >
                <div className="w-14 h-14 rounded-2xl gradient-accent-warm flex items-center justify-center mb-6 shadow-md">
                  <service.icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-xl font-bold text-primary mb-3">
                  {service.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {service.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-20 gradient-emerald">
        <div className="container mx-auto px-4">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={stagger}
            className="grid grid-cols-2 lg:grid-cols-4 gap-8"
          >
            {stats.map((stat, i) => (
              <motion.div
                key={stat.label}
                variants={fadeIn}
                transition={{ delay: i * 0.1 }}
                className="text-center text-white"
              >
                <div className="w-16 h-16 mx-auto mb-4 rounded-2xl bg-white/10 flex items-center justify-center backdrop-blur-sm">
                  <stat.icon className="w-7 h-7" />
                </div>
                <div className="text-3xl md:text-4xl font-bold mb-1">
                  {stat.value}
                </div>
                <div className="text-white/65 text-sm">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* About Preview */}
      <section className="py-24 bg-muted">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -35 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="relative"
            >
              <img 
                src={travelExperience} 
                alt="Viagens e Experiências" 
                className="rounded-3xl shadow-xl w-full"
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 35 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              <span className="inline-block text-sm font-semibold text-accent uppercase tracking-widest mb-4">
                Quem Somos
              </span>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary mb-6 leading-tight">
                Conhecimento que Transforma Oportunidades
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-8">
                Nossa equipe é capacitada para orientar você sobre os diversos programas de 
                vantagens disponíveis no mercado. Fornecemos suporte completo para que você 
                entenda todas as possibilidades e benefícios.
              </p>
              <ul className="space-y-4 mb-8">
                {['Mapeamento de programas de recompensas', 'Assessoria individualizada', 'Conteúdo sempre atualizado', 'Suporte permanente'].map((item) => (
                  <li key={item} className="flex items-center gap-3">
                    <div className="w-6 h-6 rounded-full gradient-accent-warm flex items-center justify-center flex-shrink-0">
                      <Check className="w-3.5 h-3.5 text-white" />
                    </div>
                    <span className="text-foreground text-sm font-medium">{item}</span>
                  </li>
                ))}
              </ul>
              <Link to="/sobre" className="btn-primary">
                Conhecer a Equipe
                <ArrowRight className="w-4 h-4 ml-2" />
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Experiences */}
      <section className="py-24 bg-card">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -35 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              <span className="inline-block text-sm font-semibold text-accent uppercase tracking-widest mb-4">
                Experiências
              </span>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary mb-6 leading-tight">
                Acesso a Experiências Diferenciadas
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-8">
                Saiba como aproveitar lounges exclusivos, eventos especiais e muito mais. 
                Nosso direcionamento auxilia você a entender o caminho para vivenciar 
                benefícios realmente diferenciados.
              </p>
              <Link to="/contato" className="btn-accent">
                Conversar com Especialista
                <ArrowRight className="w-4 h-4 ml-2" />
              </Link>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 35 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              <img 
                src={loungeVip} 
                alt="Lounge Exclusivo" 
                className="rounded-3xl shadow-xl w-full"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Disclaimer */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto"
          >
            <div className="info-panel">
              <div className="flex items-center gap-4 mb-8">
                <div className="w-14 h-14 rounded-2xl gradient-emerald flex items-center justify-center">
                  <ShieldCheck className="w-7 h-7 text-white" />
                </div>
                <div>
                  <h2 className="text-2xl md:text-3xl font-bold text-primary">
                    Declaração de Conformidade
                  </h2>
                  <p className="text-muted-foreground text-sm">Sobre nossos serviços</p>
                </div>
              </div>
              <div className="space-y-3">
                {disclaimers.map((item, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                    <span className="text-foreground text-sm">{item}</span>
                  </div>
                ))}
              </div>
              <div className="mt-8 pt-6 border-t border-border/50 flex flex-wrap gap-6 text-sm">
                <span className="text-muted-foreground">
                  <strong className="text-primary">Cadastro:</strong> 38291045
                </span>
                <span className="text-muted-foreground">
                  <strong className="text-primary">Conformidade:</strong> Operação privada sem relação com órgãos reguladores do sistema financeiro
                </span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Articles */}
      <section className="py-24 bg-muted">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="section-heading">Conteúdo Publicado</h2>
            <div className="divider-elegant mt-6 mb-6" />
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Article 1 */}
            <motion.a 
              href="/conteudo1.php"
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0 }}
              className="card-elegant group"
            >
              <div className="aspect-[4/3] overflow-hidden">
                <img 
                  src={artigo1} 
                  alt="Guia de Benefícios Premium" 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-6">
                <h3 className="font-bold text-lg text-primary mt-2 mb-3 group-hover:text-primary/80 transition-colors">
                  Guia Completo de Vantagens Exclusivas
                </h3>
                <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
                  Entenda como uma orientação adequada pode direcionar você pelo universo de benefícios diferenciados.
                </p>
                <span className="text-primary text-sm flex items-center gap-2 font-semibold group-hover:gap-3 transition-all">
                  Continuar lendo <ArrowRight className="w-4 h-4" />
                </span>
              </div>
            </motion.a>

            {/* Article 2 */}
            <motion.a 
              href="/conteudo2.php"
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="card-elegant group"
            >
              <div className="aspect-[4/3] overflow-hidden">
                <img 
                  src={artigo2} 
                  alt="Mapa de Experiências VIP" 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-6">
                <h3 className="font-bold text-lg text-primary mt-2 mb-3 group-hover:text-primary/80 transition-colors">
                  Mapa de Experiências Diferenciadas
                </h3>
                <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
                  Descubra como localizar e acessar os melhores benefícios que elevam sua qualidade de vida.
                </p>
                <span className="text-primary text-sm flex items-center gap-2 font-semibold group-hover:gap-3 transition-all">
                  Continuar lendo <ArrowRight className="w-4 h-4" />
                </span>
              </div>
            </motion.a>

            {/* Article 3 */}
            <motion.a 
              href="/conteudo3.php"
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="card-elegant group"
            >
              <div className="aspect-[4/3] overflow-hidden">
                <img 
                  src={artigo3} 
                  alt="Análise de Programas" 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-6">
                <h3 className="font-bold text-lg text-primary mt-2 mb-3 group-hover:text-primary/80 transition-colors">
                  Análise de Programas de Recompensas
                </h3>
                <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
                  Compreenda como especialistas avaliam e otimizam programas premium para melhores resultados.
                </p>
                <span className="text-primary text-sm flex items-center gap-2 font-semibold group-hover:gap-3 transition-all">
                  Continuar lendo <ArrowRight className="w-4 h-4" />
                </span>
              </div>
            </motion.a>
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="py-24 gradient-emerald">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-2xl mx-auto text-white"
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
              Pronto para Começar?
            </h2>
            <p className="text-white/75 text-lg mb-10 leading-relaxed">
              Entre em contato e descubra como nossa assessoria pode transformar 
              a forma como você aproveita benefícios exclusivos.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-10">
              <Link to="/contato" className="btn-accent">
                Solicitar Atendimento
                <ArrowRight className="w-4 h-4 ml-2" />
              </Link>
            </div>
            <div className="flex flex-wrap justify-center gap-6 text-white/60 text-sm">
              <a href="tel:+5562915296613" className="flex items-center gap-2 hover:text-white transition-colors">
                <Phone className="w-4 h-4" />
                (62) 9152-9613
              </a>
              <a href="mailto:contato@beneficiosamx.com" className="flex items-center gap-2 hover:text-white transition-colors">
                <Mail className="w-4 h-4" />
                Email
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default Index;