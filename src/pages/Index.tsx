import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  Lightbulb, 
  Crown, 
  Users, 
  Map, 
  Lock, 
  MessageCircle,
  Star,
  Timer,
  Shield,
  ArrowRight,
  Phone,
  Mail,
  MapPin
} from 'lucide-react';
import Layout from '@/components/layout/Layout';
import heroBusiness from '@/assets/hero-business.jpg';
import teamUnity from '@/assets/team-unity.jpg';
import loungeBar from '@/assets/lounge-bar.jpg';
import artigo1Img from '@/assets/artigo1.jpg';
import artigo2Img from '@/assets/artigo2.jpg';
import artigo3Img from '@/assets/artigo3.jpg';

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 }
  }
};

const Index = () => {
  const servicesInfo = [
    {
      icon: Lightbulb,
      title: 'Consultoria Educativa',
      description: 'Explicações detalhadas sobre programas de vantagens, sistemas de pontos e bonificações disponíveis. Orientação clara sobre regras e critérios.'
    },
    {
      icon: Crown,
      title: 'Seleção de Oportunidades',
      description: 'Identificação criteriosa das melhores opções de benefícios, parcerias comerciais e acessos diferenciados para seu perfil.'
    },
    {
      icon: Users,
      title: 'Suporte Personalizado',
      description: 'Acompanhamento individual para esclarecer questões sobre recompensas, ofertas especiais e programas de fidelidade.'
    },
    {
      icon: Map,
      title: 'Acesso a Experiências',
      description: 'Informações sobre eventos exclusivos, espaços VIP, gastronomia diferenciada e viagens com benefícios especiais.'
    },
    {
      icon: Lock,
      title: 'Transparência Total',
      description: 'Atuação estritamente informativa. Nenhuma intermediação financeira, análise de crédito ou venda de produtos bancários.'
    },
    {
      icon: MessageCircle,
      title: 'Suporte Permanente',
      description: 'Assistência contínua com foco em educação sobre vantagens. Direcionamento para canais oficiais quando necessário.'
    }
  ];

  const statsInfo = [
    { icon: Star, number: '620+', label: 'Programas Analisados' },
    { icon: Users, number: '1.200+', label: 'Parcerias Ativas' },
    { icon: Shield, number: '100%', label: 'Conformidade' },
    { icon: Timer, number: '24h', label: 'Acesso Digital' }
  ];

  const disclaimerItems = [
    'Atividade exclusivamente consultiva e de orientação educacional',
    'Não representamos instituições financeiras, bancos ou emissores de cartões',
    'Não realizamos análise de crédito, concessão de financiamento ou intermediação bancária',
    'Não comercializamos produtos financeiros ou cartões de qualquer natureza',
    'Nosso papel limita-se à informação, curadoria e assessoria consultiva',
    'Nenhuma promessa de aprovação ou garantia de liberação de crédito',
    'Direcionamos clientes aos canais oficiais das empresas quando necessário',
    'Contratações são feitas diretamente entre cliente e instituições responsáveis'
  ];

  return (
    <Layout>
      {/* Schema */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{
        __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "ProfessionalService",
          "name": "Benefícios AMX",
          "description": "Assessoria especializada em programas de vantagens, benefícios exclusivos e maximização de recompensas.",
          "url": "https://beneficiosamx.com/",
          "telephone": "(19) 8102-0844",
          "address": {
            "@type": "PostalAddress",
            "streetAddress": "Av Prfa Izoraida Marques Peres, 401 Quiosq Esp 37 QM0T",
            "addressLocality": "Sorocaba",
            "addressRegion": "SP",
            "postalCode": "18.047-900",
            "addressCountry": "BR"
          },
          "priceRange": "$$",
          "openingHours": "Mo-Fr 09:00-18:00"
        })
      }} />

      {/* Hero */}
      <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${heroBusiness})` }}
        />
        <div className="absolute inset-0 gradient-hero-section opacity-90" />
        
        <div className="container mx-auto px-4 relative z-10 text-center text-white">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
            className="max-w-4xl mx-auto"
          >
            <motion.span 
              variants={fadeUp}
              className="inline-block px-5 py-2 bg-white/10 backdrop-blur-sm rounded-full text-sm font-medium mb-6 tracking-wider uppercase"
            >
              Assessoria em Programas de Vantagens
            </motion.span>
            
            <motion.h1 
              variants={fadeUp}
              transition={{ duration: 0.6 }}
              className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight"
            >
              Maximize Seus{' '}
              <span className="text-gold-shine">Benefícios</span>
            </motion.h1>
            
            <motion.p 
              variants={fadeUp}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-lg md:text-xl text-white/80 mb-8 max-w-2xl mx-auto leading-relaxed font-light"
            >
              Orientação profissional para você entender e aproveitar programas de 
              recompensas, oportunidades exclusivas e vantagens diferenciadas. 
              Assessoria transparente e ética.
            </motion.p>
            
            <motion.div
              variants={fadeUp}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              <Link to="/contato" className="btn-gold text-base">
                Solicitar Orientação
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
              <Link to="/sobre" className="btn-primary bg-white/15 backdrop-blur-sm border border-white/25 hover:bg-white/25">
                Saiba Mais
              </Link>
            </motion.div>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2">
          <div className="w-6 h-10 border-2 border-white/35 rounded-full flex justify-center">
            <div className="w-1.5 h-2.5 bg-white/70 rounded-full mt-2 animate-bounce" />
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
            variants={staggerContainer}
          >
            <motion.h2 variants={fadeUp} className="section-title">
              Nossos Serviços
            </motion.h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
              {servicesInfo.map((service, i) => (
                <motion.div
                  key={service.title}
                  variants={fadeUp}
                  transition={{ delay: i * 0.06 }}
                  className="card-service p-8"
                >
                  <div className="w-14 h-14 rounded-lg gradient-gold-accent flex items-center justify-center mb-6 shadow-md">
                    <service.icon className="w-7 h-7 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold text-primary mb-4">
                    {service.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed text-sm">
                    {service.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-20 gradient-navy">
        <div className="container mx-auto px-4">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="grid grid-cols-2 lg:grid-cols-4 gap-8"
          >
            {statsInfo.map((stat, i) => (
              <motion.div
                key={stat.label}
                variants={fadeUp}
                transition={{ delay: i * 0.08 }}
                className="text-center text-white"
              >
                <div className="w-16 h-16 mx-auto mb-4 rounded-lg bg-white/10 flex items-center justify-center backdrop-blur-sm">
                  <stat.icon className="w-8 h-8" />
                </div>
                <div className="text-4xl md:text-5xl font-bold mb-2">
                  {stat.number}
                </div>
                <div className="text-white/70 font-medium text-sm">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <img 
                src={teamUnity} 
                alt="Equipe Unida" 
                className="rounded-2xl shadow-2xl w-full"
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">
                Expertise que Gera Resultados
              </h2>
              <p className="text-muted-foreground text-base leading-relaxed mb-6">
                Nossa equipe é especializada em identificar e explicar os 
                programas de vantagens disponíveis no mercado. Oferecemos 
                assessoria completa para que você compreenda todas as opções.
              </p>
              <ul className="space-y-3 mb-8">
                {['Análise de programas de recompensas', 'Orientação personalizada', 'Informações sempre atualizadas', 'Acompanhamento contínuo'].map((item) => (
                  <li key={item} className="flex items-center gap-3">
                    <Shield className="w-5 h-5 text-primary flex-shrink-0" />
                    <span className="text-foreground font-medium text-sm">{item}</span>
                  </li>
                ))}
              </ul>
              <Link to="/sobre" className="btn-primary">
                Conhecer a Equipe
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Experiences */}
      <section className="py-20 bg-card">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="order-2 lg:order-1"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">
                Experiências Diferenciadas
              </h2>
              <p className="text-muted-foreground text-base leading-relaxed mb-6">
                Descubra como acessar lounges exclusivos, eventos especiais 
                e muito mais. Nossa orientação ajuda você a entender 
                como aproveitar benefícios verdadeiramente diferenciados.
              </p>
              <Link to="/contato" className="btn-gold">
                Falar com Especialista
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="order-1 lg:order-2"
            >
              <img 
                src={loungeBar} 
                alt="Espaço Exclusivo" 
                className="rounded-2xl shadow-2xl w-full"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Disclaimer */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto"
          >
            <div className="info-box">
              <div className="flex items-center gap-3 mb-6">
                <Lock className="w-8 h-8 text-primary" />
                <h2 className="text-2xl md:text-3xl font-bold text-primary">
                  Aviso de Transparência
                </h2>
              </div>
              <p className="text-foreground font-semibold mb-4 text-base">
                Sobre nossa atuação:
              </p>
              <ul className="space-y-3">
                {disclaimerItems.map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <Shield className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                    <span className="text-muted-foreground text-sm">{item}</span>
                  </li>
                ))}
              </ul>
              <p className="mt-6 text-xs text-muted-foreground">
                <strong className="text-primary">Registro:</strong> 47829156 | 
                <strong className="text-primary ml-2">Natureza:</strong> Empresa privada de assessoria consultiva
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Articles */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="section-title">Artigos e Conteúdos</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
              {/* Artigo 1 */}
              <a 
                href="/artigo1.php" 
                className="group block bg-card rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300"
              >
                <div className="aspect-video overflow-hidden">
                  <img 
                    src={artigo1Img} 
                    alt="Guia de Benefícios" 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-400"
                  />
                </div>
                <div className="p-6">
                  <h3 className="font-bold text-lg text-primary group-hover:text-primary/80 transition-colors mb-2">
                    Entendendo Programas de Vantagens
                  </h3>
                  <p className="text-muted-foreground text-sm mb-4">
                    Saiba como uma orientação adequada pode guiá-lo pelo universo de benefícios exclusivos.
                  </p>
                  <span className="text-primary text-sm flex items-center gap-2 group-hover:gap-3 transition-all font-semibold">
                    Ler mais <ArrowRight className="w-4 h-4" />
                  </span>
                </div>
              </a>

              {/* Artigo 2 */}
              <a 
                href="/artigo2.php" 
                className="group block bg-card rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300"
              >
                <div className="aspect-video overflow-hidden">
                  <img 
                    src={artigo2Img} 
                    alt="Experiências VIP" 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-400"
                  />
                </div>
                <div className="p-6">
                  <h3 className="font-bold text-lg text-primary group-hover:text-primary/80 transition-colors mb-2">
                    Experiências Exclusivas Disponíveis
                  </h3>
                  <p className="text-muted-foreground text-sm mb-4">
                    Conheça as melhores oportunidades para elevar sua qualidade de vida com benefícios reais.
                  </p>
                  <span className="text-primary text-sm flex items-center gap-2 group-hover:gap-3 transition-all font-semibold">
                    Ler mais <ArrowRight className="w-4 h-4" />
                  </span>
                </div>
              </a>

              {/* Artigo 3 */}
              <a 
                href="/artigo3.php" 
                className="group block bg-card rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300"
              >
                <div className="aspect-video overflow-hidden">
                  <img 
                    src={artigo3Img} 
                    alt="Planejamento de Benefícios" 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-400"
                  />
                </div>
                <div className="p-6">
                  <h3 className="font-bold text-lg text-primary group-hover:text-primary/80 transition-colors mb-2">
                    Planejamento Estratégico de Vantagens
                  </h3>
                  <p className="text-muted-foreground text-sm mb-4">
                    Aprenda a organizar e maximizar o uso dos programas de recompensas disponíveis.
                  </p>
                  <span className="text-primary text-sm flex items-center gap-2 group-hover:gap-3 transition-all font-semibold">
                    Ler mais <ArrowRight className="w-4 h-4" />
                  </span>
                </div>
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 gradient-navy">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto text-white"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Pronto para Maximizar Seus Benefícios?
            </h2>
            <p className="text-white/80 text-base mb-8 leading-relaxed">
              Entre em contato e descubra como nossa orientação pode ajudá-lo 
              a aproveitar as melhores oportunidades do mercado.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link to="/contato" className="btn-gold">
                Agendar Consulta
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
              <div className="flex items-center gap-6 text-white/70 text-sm">
                <a href="tel:+5519810200844" className="flex items-center gap-2 hover:text-white transition-colors">
                  <Phone className="w-4 h-4" />
                  (19) 8102-0844
                </a>
                <a href="mailto:contato@beneficiosamx.com" className="flex items-center gap-2 hover:text-white transition-colors">
                  <Mail className="w-4 h-4" />
                  Email
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
