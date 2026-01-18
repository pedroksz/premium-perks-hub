import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  GraduationCap, 
  Gem, 
  Handshake, 
  Star, 
  ShieldCheck, 
  Users,
  Award,
  Clock,
  CheckCircle2,
  ArrowRight,
  Phone,
  Mail,
  MapPin
} from 'lucide-react';
import Layout from '@/components/layout/Layout';
import heroBanner from '@/assets/hero-banner.jpg';
import benefitsConcept from '@/assets/benefits-concept.jpg';
import vipExperience from '@/assets/vip-experience.jpg';
import artigo1Img from '@/assets/artigo1.jpg';
import artigo2Img from '@/assets/artigo2.jpg';
import artigo3Img from '@/assets/artigo3.jpg';

const fadeUpVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const Index = () => {
  const services = [
    {
      icon: GraduationCap,
      title: 'Consultoria Educacional',
      description: 'Material informativo estruturado sobre vantagens exclusivas, programas de pontos e benefícios diferenciados. Suporte consultivo para entendimento de critérios e elegibilidade.'
    },
    {
      icon: Gem,
      title: 'Seleção de Benefícios',
      description: 'Conteúdo organizado sobre programas de recompensas, clubes de vantagens, acordos comerciais e experiências especiais. Direcionamento sobre categorias e formas de participação.'
    },
    {
      icon: Handshake,
      title: 'Assessoria Informativa',
      description: 'Atendimento dedicado para esclarecimentos sobre programas de descontos, vantagens especiais e serviços diferenciados. Comunicação objetiva e profissional.'
    },
    {
      icon: Star,
      title: 'Vivências Exclusivas',
      description: 'Orientações sobre acesso a eventos diferenciados, salas VIP, experiências gastronômicas, viagens especiais e programas de fidelização com vantagens únicas.'
    },
    {
      icon: ShieldCheck,
      title: 'Clareza Absoluta',
      description: 'Atuação exclusivamente privada, consultiva e informativa. Sem mediação financeira, análise creditícia ou comercialização de produtos bancários. Comunicação ética e transparente.'
    },
    {
      icon: Users,
      title: 'Suporte Estruturado',
      description: 'Atendimento informativo organizado com ênfase em educação e orientação. Encaminhamento aos canais oficiais das empresas quando necessário para processos formais.'
    }
  ];

  const stats = [
    { icon: Award, number: '600+', label: 'Programas Analisados' },
    { icon: Handshake, number: '1200+', label: 'Parcerias Catalogadas' },
    { icon: ShieldCheck, number: '100%', label: 'Clareza Total' },
    { icon: Clock, number: '24/7', label: 'Material Disponível' }
  ];

  const transparencyItems = [
    'Serviço exclusivamente privado, consultivo e de orientação',
    'Não representamos instituição financeira, banco, emissor de cartões ou operadora',
    'Não efetuamos mediação financeira, análise creditícia ou concessão de produtos bancários',
    'Não emitimos cartões, não comercializamos produtos financeiros e não representamos bandeiras ou instituições reguladas',
    'Atuação restrita à orientação educacional, seleção informativa e assessoria consultiva',
    'Não existem garantias de aprovação, promessas de liberação imediata ou vínculo com processos de crédito',
    'Clientes podem ser encaminhados aos canais oficiais das empresas para processos formais quando necessário',
    'Todas as decisões e contratações são realizadas diretamente entre cliente e instituições competentes'
  ];

  return (
    <Layout>
      {/* Schema.org Structured Data */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{
        __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "ProfessionalService",
          "name": "Benefícios Premix",
          "description": "Consultoria especializada em orientação de benefícios premium, programas de recompensas e experiências diferenciadas.",
          "url": "https://beneficiospremix.com/",
          "telephone": "(62) 9152-9613",
          "address": {
            "@type": "PostalAddress",
            "streetAddress": "Av General Couto Magalhaes 485 Quadra26 Lote 04",
            "addressLocality": "VI Maua",
            "addressRegion": "GO",
            "postalCode": "74.323-240",
            "addressCountry": "BR"
          },
          "priceRange": "$$",
          "openingHours": "Mo-Fr 09:00-18:00"
        })
      }} />

      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${heroBanner})` }}
        />
        <div className="absolute inset-0 gradient-hero opacity-90" />
        
        <div className="container mx-auto px-4 relative z-10 text-center text-white">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
            className="max-w-4xl mx-auto"
          >
            <motion.h1 
              variants={fadeUpVariants}
              transition={{ duration: 0.6 }}
              className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold mb-6 leading-tight"
            >
              Consultoria Especializada em{' '}
              <span className="text-gradient">Vantagens Premium</span>
            </motion.h1>
            
            <motion.p 
              variants={fadeUpVariants}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-lg md:text-xl text-white/90 mb-8 max-w-3xl mx-auto leading-relaxed"
            >
              Assessoria informativa especializada para compreender e navegar por programas de 
              benefícios exclusivos, experiências diferenciadas e vantagens premium. 
              Atendimento consultivo transparente e conteúdo educacional estruturado.
            </motion.p>
            
            <motion.div
              variants={fadeUpVariants}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              <Link to="/contato" className="btn-gold text-lg">
                Entre em Contato
                <ArrowRight className="w-5 h-5 ml-2 inline" />
              </Link>
              <Link to="/sobre" className="btn-primary bg-white/10 backdrop-blur-sm border-2 border-white/30 hover:bg-white/20">
                Saiba Mais
              </Link>
            </motion.div>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
            <div className="w-1.5 h-3 bg-gold rounded-full mt-2 animate-pulse" />
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
          >
            <motion.h2 variants={fadeUpVariants} className="section-title">
              Nossos Serviços de Consultoria
            </motion.h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
              {services.map((service, index) => (
                <motion.div
                  key={service.title}
                  variants={fadeUpVariants}
                  transition={{ delay: index * 0.1 }}
                  className="card-premium p-8 bg-card"
                >
                  <div className="w-16 h-16 rounded-xl gradient-navy flex items-center justify-center mb-6 shadow-lg">
                    <service.icon className="w-8 h-8 text-gold" />
                  </div>
                  <h3 className="text-xl font-serif font-semibold text-primary mb-4">
                    {service.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {service.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 gradient-navy">
        <div className="container mx-auto px-4">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="grid grid-cols-2 lg:grid-cols-4 gap-8"
          >
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                variants={fadeUpVariants}
                transition={{ delay: index * 0.1 }}
                className="text-center text-white"
              >
                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-white/10 flex items-center justify-center">
                  <stat.icon className="w-8 h-8 text-gold" />
                </div>
                <div className="text-4xl md:text-5xl font-bold text-gold mb-2 font-serif">
                  {stat.number}
                </div>
                <div className="text-white/80">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* About Preview */}
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
                src={benefitsConcept} 
                alt="Vantagens Premium" 
                className="rounded-2xl shadow-2xl w-full"
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-primary mb-6">
                Especialização em Vantagens Exclusivas
              </h2>
              <p className="text-muted-foreground text-lg leading-relaxed mb-6">
                Nossa equipe é especializada em curadoria e orientação sobre os mais diversos 
                programas de vantagens premium disponíveis no mercado. Oferecemos assessoria 
                consultiva completa para que você compreenda todas as oportunidades e benefícios.
              </p>
              <ul className="space-y-3 mb-8">
                {['Análise de programas de vantagens', 'Orientação personalizada', 'Informações atualizadas', 'Assessoria contínua'].map((item) => (
                  <li key={item} className="flex items-center gap-3">
                    <CheckCircle2 className="w-5 h-5 text-gold flex-shrink-0" />
                    <span className="text-foreground">{item}</span>
                  </li>
                ))}
              </ul>
              <Link to="/sobre" className="btn-primary">
                Conheça Nossa Equipe
                <ArrowRight className="w-5 h-5 ml-2 inline" />
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
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
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-primary mb-6">
                Vivências VIP ao Seu Alcance
              </h2>
              <p className="text-muted-foreground text-lg leading-relaxed mb-6">
                Descubra como acessar experiências exclusivas, lounges premium, eventos 
                especiais e muito mais. Nossa orientação ajuda você a entender o caminho 
                para aproveitar benefícios verdadeiramente diferenciados.
              </p>
              <Link to="/contato" className="btn-gold">
                Fale com um Consultor
                <ArrowRight className="w-5 h-5 ml-2 inline" />
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
                src={vipExperience} 
                alt="Vivências VIP" 
                className="rounded-2xl shadow-2xl w-full"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Transparency Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto"
          >
            <div className="highlight-box">
              <div className="flex items-center gap-3 mb-6">
                <ShieldCheck className="w-8 h-8 text-gold" />
                <h2 className="text-2xl md:text-3xl font-serif font-bold text-primary">
                  Aviso Legal e Transparência
                </h2>
              </div>
              <p className="text-foreground font-semibold mb-4">
                Natureza dos Serviços:
              </p>
              <ul className="space-y-3">
                {transparencyItems.map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                    <span className="text-muted-foreground">{item}</span>
                  </li>
                ))}
              </ul>
              <p className="mt-6 text-sm text-muted-foreground">
                <strong className="text-primary">Registro:</strong> 38291045 | 
                <strong className="text-primary ml-2">Transparência e conformidade:</strong> Operação privada sem vínculo com órgãos reguladores financeiros
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Published Articles Section */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="section-title">Artigos Publicados</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
              {/* Article 1 */}
              <a 
                href="/artigo1.php" 
                className="group block bg-card rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <div className="aspect-video overflow-hidden">
                  <img 
                    src={artigo1Img} 
                    alt="Explorando o Universo das Vantagens Premium" 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-6">
                  <h3 className="font-serif font-semibold text-lg text-primary group-hover:text-gold transition-colors mb-2">
                    Explorando o Universo das Vantagens Premium
                  </h3>
                  <p className="text-muted-foreground text-sm mb-4">
                    Descubra como uma orientação estratégica pode guiar você através do universo de benefícios exclusivos e programas diferenciados.
                  </p>
                  <span className="text-gold text-sm flex items-center gap-1 group-hover:gap-2 transition-all font-medium">
                    Ler mais <ArrowRight className="w-4 h-4" />
                  </span>
                </div>
              </a>

              {/* Article 2 */}
              <a 
                href="/artigo2.php" 
                className="group block bg-card rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <div className="aspect-video overflow-hidden">
                  <img 
                    src={artigo2Img} 
                    alt="Roteiro de Experiências VIP" 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-6">
                  <h3 className="font-serif font-semibold text-lg text-primary group-hover:text-gold transition-colors mb-2">
                    Roteiro de Experiências VIP
                  </h3>
                  <p className="text-muted-foreground text-sm mb-4">
                    Aprenda a identificar e acessar os melhores pontos de experiências exclusivas que elevam seu padrão de vida.
                  </p>
                  <span className="text-gold text-sm flex items-center gap-1 group-hover:gap-2 transition-all font-medium">
                    Ler mais <ArrowRight className="w-4 h-4" />
                  </span>
                </div>
              </a>

              {/* Article 3 */}
              <a 
                href="/artigo3.php" 
                className="group block bg-card rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <div className="aspect-video overflow-hidden">
                  <img 
                    src={artigo3Img} 
                    alt="Avaliação Estratégica de Programas de Benefícios" 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-6">
                  <h3 className="font-serif font-semibold text-lg text-primary group-hover:text-gold transition-colors mb-2">
                    Avaliação Estratégica de Programas de Benefícios
                  </h3>
                  <p className="text-muted-foreground text-sm mb-4">
                    Entenda como especialistas avaliam e maximizam o potencial dos programas premium para resultados extraordinários.
                  </p>
                  <span className="text-gold text-sm flex items-center gap-1 group-hover:gap-2 transition-all font-medium">
                    Ler mais <ArrowRight className="w-4 h-4" />
                  </span>
                </div>
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 gradient-navy">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center text-white"
          >
            <h2 className="text-3xl md:text-4xl font-serif font-bold mb-6">
              Entre em <span className="text-gold">Contato</span>
            </h2>
            <p className="text-white/80 text-lg max-w-2xl mx-auto mb-12">
              Estamos prontos para ajudá-lo a compreender melhor o universo das vantagens premium.
            </p>
            
            <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
                <MapPin className="w-8 h-8 text-gold mx-auto mb-4" />
                <h3 className="font-semibold mb-2">Endereço</h3>
                <p className="text-white/70 text-sm">
                  Av General Couto Magalhaes 485<br />
                  Quadra26 Lote 04<br />
                  VI Maua, GO - 74.323-240
                </p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
                <Phone className="w-8 h-8 text-gold mx-auto mb-4" />
                <h3 className="font-semibold mb-2">Telefone</h3>
                <a href="tel:+5562915296613" className="text-white/70 text-sm hover:text-gold transition-colors">
                  (62) 9152-9613
                </a>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
                <Mail className="w-8 h-8 text-gold mx-auto mb-4" />
                <h3 className="font-semibold mb-2">Email</h3>
                <a href="mailto:contato@beneficiospremix.com" className="text-white/70 text-xs break-all hover:text-gold transition-colors">
                  contato@beneficiospremix.com
                </a>
              </div>
            </div>

            <div className="mt-12">
              <Link to="/contato" className="btn-gold text-lg">
                Fale Conosco Agora
                <ArrowRight className="w-5 h-5 ml-2 inline" />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default Index;