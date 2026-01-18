import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  BookOpen, 
  Diamond, 
  HeartHandshake, 
  Compass, 
  ShieldCheck, 
  Headphones,
  Trophy,
  Clock,
  BadgeCheck,
  ChevronRight,
  Phone,
  Mail,
  MapPin
} from 'lucide-react';
import Layout from '@/components/layout/Layout';
import heroMain from '@/assets/hero-main.jpg';
import travelExperience from '@/assets/travel-experience.jpg';
import loungeVip from '@/assets/lounge-vip.jpg';
import artigo1Img from '@/assets/artigo1.jpg';
import artigo2Img from '@/assets/artigo2.jpg';
import artigo3Img from '@/assets/artigo3.jpg';

const slideVariants = {
  initial: { opacity: 0, y: 40 },
  animate: { opacity: 1, y: 0 }
};

const containerVariants = {
  initial: { opacity: 0 },
  animate: {
    opacity: 1,
    transition: { staggerChildren: 0.12 }
  }
};

const Index = () => {
  const solutionsData = [
    {
      icon: BookOpen,
      name: 'Orientação Didática',
      info: 'Materiais explicativos detalhados sobre vantagens especiais, acúmulo de pontos e programas diferenciados. Apoio na interpretação de regras e condições de participação.'
    },
    {
      icon: Diamond,
      name: 'Curadoria Especializada',
      info: 'Seleção criteriosa de oportunidades premium, parcerias estratégicas e acessos privilegiados. Direcionamento sobre categorias e requisitos de adesão.'
    },
    {
      icon: HeartHandshake,
      name: 'Atendimento Dedicado',
      info: 'Suporte individualizado para esclarecer dúvidas sobre programas de recompensas, promoções e serviços diferenciados. Comunicação direta e profissional.'
    },
    {
      icon: Compass,
      name: 'Roteiros Exclusivos',
      info: 'Informações sobre acesso a eventos especiais, salas VIP em aeroportos, experiências gastronômicas e viagens personalizadas com benefícios únicos.'
    },
    {
      icon: ShieldCheck,
      name: 'Compromisso Ético',
      info: 'Atuação puramente consultiva e informativa. Nenhuma intermediação bancária, análise de perfil creditício ou comercialização de produtos financeiros.'
    },
    {
      icon: Headphones,
      name: 'Acompanhamento Contínuo',
      info: 'Assistência permanente com foco em educação sobre vantagens. Encaminhamento para canais oficiais quando processos formais são necessários.'
    }
  ];

  const metricsData = [
    { icon: Trophy, value: '750+', text: 'Programas Catalogados' },
    { icon: HeartHandshake, value: '1.500+', text: 'Acordos Mapeados' },
    { icon: ShieldCheck, value: '100%', text: 'Ética Garantida' },
    { icon: Clock, value: '24h', text: 'Conteúdo Online' }
  ];

  const compliancePoints = [
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
      {/* Dados Estruturados */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{
        __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "ProfessionalService",
          "name": "Benefícios Premix",
          "description": "Assessoria especializada em programas de vantagens, benefícios exclusivos e experiências diferenciadas.",
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

      {/* Banner Principal */}
      <section className="relative min-h-[92vh] flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat scale-105"
          style={{ backgroundImage: `url(${heroMain})` }}
        />
        <div className="absolute inset-0 gradient-hero-bg opacity-85" />
        
        <div className="container mx-auto px-4 relative z-10 text-center text-white">
          <motion.div
            initial="initial"
            animate="animate"
            variants={containerVariants}
            className="max-w-5xl mx-auto"
          >
            <motion.span 
              variants={slideVariants}
              className="inline-block px-6 py-2 bg-white/10 backdrop-blur-sm rounded-full text-sm font-medium mb-8 tracking-widest uppercase"
            >
              Seu guia para vantagens exclusivas
            </motion.span>
            
            <motion.h1 
              variants={slideVariants}
              transition={{ duration: 0.7 }}
              className="text-5xl md:text-6xl lg:text-7xl font-bold mb-8 leading-tight"
            >
              Descubra o Mundo dos{' '}
              <span className="text-shimmer">Benefícios Premium</span>
            </motion.h1>
            
            <motion.p 
              variants={slideVariants}
              transition={{ duration: 0.7, delay: 0.15 }}
              className="text-lg md:text-xl text-white/85 mb-10 max-w-3xl mx-auto leading-relaxed font-light"
            >
              Assessoria personalizada para você compreender e aproveitar programas de 
              recompensas, experiências diferenciadas e vantagens exclusivas. 
              Orientação clara, ética e completamente transparente.
            </motion.p>
            
            <motion.div
              variants={slideVariants}
              transition={{ duration: 0.7, delay: 0.25 }}
              className="flex flex-col sm:flex-row gap-5 justify-center"
            >
              <Link to="/contato" className="btn-accent text-lg">
                Solicitar Atendimento
                <ChevronRight className="w-5 h-5 ml-2" />
              </Link>
              <Link to="/sobre" className="btn-main bg-white/15 backdrop-blur-sm border-2 border-white/25 hover:bg-white/25">
                Conhecer Mais
              </Link>
            </motion.div>
          </motion.div>
        </div>

        {/* Indicador de rolagem */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2">
          <div className="w-7 h-12 border-2 border-white/40 rounded-full flex justify-center">
            <div className="w-2 h-3 bg-white/80 rounded-full mt-2.5 animate-bounce" />
          </div>
        </div>
      </section>

      {/* Seção de Soluções */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4">
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, margin: "-80px" }}
            variants={containerVariants}
          >
            <motion.h2 variants={slideVariants} className="heading-decorated">
              O Que Oferecemos
            </motion.h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mt-16">
              {solutionsData.map((item, idx) => (
                <motion.div
                  key={item.name}
                  variants={slideVariants}
                  transition={{ delay: idx * 0.08 }}
                  className="service-card p-10"
                >
                  <div className="w-16 h-16 rounded-2xl gradient-main flex items-center justify-center mb-8 shadow-md">
                    <item.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-primary mb-5">
                    {item.name}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {item.info}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Seção de Métricas */}
      <section className="py-24 gradient-main">
        <div className="container mx-auto px-4">
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={containerVariants}
            className="grid grid-cols-2 lg:grid-cols-4 gap-10"
          >
            {metricsData.map((item, idx) => (
              <motion.div
                key={item.text}
                variants={slideVariants}
                transition={{ delay: idx * 0.1 }}
                className="text-center text-white"
              >
                <div className="w-18 h-18 mx-auto mb-6 rounded-2xl bg-white/15 flex items-center justify-center backdrop-blur-sm p-4">
                  <item.icon className="w-10 h-10" />
                </div>
                <div className="text-5xl md:text-6xl font-bold mb-3">
                  {item.value}
                </div>
                <div className="text-white/75 font-medium">{item.text}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Seção Sobre */}
      <section className="py-24 bg-muted">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              <img 
                src={travelExperience} 
                alt="Viagens e Experiências" 
                className="rounded-3xl shadow-2xl w-full"
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              <h2 className="text-4xl md:text-5xl font-bold text-primary mb-8">
                Conhecimento que Transforma Oportunidades
              </h2>
              <p className="text-muted-foreground text-lg leading-relaxed mb-8">
                Nossa equipe é capacitada para orientar você sobre os diversos 
                programas de vantagens disponíveis no mercado. Fornecemos suporte 
                completo para que você entenda todas as possibilidades e benefícios.
              </p>
              <ul className="space-y-4 mb-10">
                {['Mapeamento de programas de recompensas', 'Assessoria individualizada', 'Conteúdo sempre atualizado', 'Suporte permanente'].map((texto) => (
                  <li key={texto} className="flex items-center gap-4">
                    <BadgeCheck className="w-6 h-6 text-primary flex-shrink-0" />
                    <span className="text-foreground font-medium">{texto}</span>
                  </li>
                ))}
              </ul>
              <Link to="/sobre" className="btn-main">
                Conhecer a Equipe
                <ChevronRight className="w-5 h-5 ml-2" />
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Seção Experiências */}
      <section className="py-24 bg-card">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="order-2 lg:order-1"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-primary mb-8">
                Acesso a Experiências Diferenciadas
              </h2>
              <p className="text-muted-foreground text-lg leading-relaxed mb-8">
                Saiba como aproveitar lounges exclusivos, eventos especiais 
                e muito mais. Nosso direcionamento auxilia você a entender 
                o caminho para vivenciar benefícios realmente diferenciados.
              </p>
              <Link to="/contato" className="btn-accent">
                Conversar com Especialista
                <ChevronRight className="w-5 h-5 ml-2" />
              </Link>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="order-1 lg:order-2"
            >
              <img 
                src={loungeVip} 
                alt="Lounge Exclusivo" 
                className="rounded-3xl shadow-2xl w-full"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Seção Compliance */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-5xl mx-auto"
          >
            <div className="notice-box">
              <div className="flex items-center gap-4 mb-8">
                <ShieldCheck className="w-10 h-10 text-primary" />
                <h2 className="text-3xl md:text-4xl font-bold text-primary">
                  Declaração de Conformidade
                </h2>
              </div>
              <p className="text-foreground font-semibold mb-6 text-lg">
                Sobre nossos serviços:
              </p>
              <ul className="space-y-4">
                {compliancePoints.map((ponto, idx) => (
                  <li key={idx} className="flex items-start gap-4">
                    <BadgeCheck className="w-6 h-6 text-primary mt-0.5 flex-shrink-0" />
                    <span className="text-muted-foreground">{ponto}</span>
                  </li>
                ))}
              </ul>
              <p className="mt-8 text-sm text-muted-foreground">
                <strong className="text-primary">Cadastro:</strong> 38291045 | 
                <strong className="text-primary ml-3">Conformidade:</strong> Operação privada sem relação com órgãos reguladores do sistema financeiro
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Seção de Artigos */}
      <section className="py-24 bg-muted">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="heading-decorated">Conteúdo Publicado</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mt-16">
              {/* Artigo 1 */}
              <a 
                href="/artigo1.php" 
                className="group block bg-card rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300"
              >
                <div className="aspect-video overflow-hidden">
                  <img 
                    src={artigo1Img} 
                    alt="Guia de Benefícios Premium" 
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <div className="p-8">
                  <h3 className="font-bold text-xl text-primary group-hover:text-primary/80 transition-colors mb-3">
                    Guia Completo de Vantagens Exclusivas
                  </h3>
                  <p className="text-muted-foreground text-sm mb-5">
                    Entenda como uma orientação adequada pode direcionar você pelo universo de benefícios diferenciados.
                  </p>
                  <span className="text-primary text-sm flex items-center gap-2 group-hover:gap-3 transition-all font-semibold">
                    Continuar lendo <ChevronRight className="w-4 h-4" />
                  </span>
                </div>
              </a>

              {/* Artigo 2 */}
              <a 
                href="/artigo2.php" 
                className="group block bg-card rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300"
              >
                <div className="aspect-video overflow-hidden">
                  <img 
                    src={artigo2Img} 
                    alt="Mapa de Experiências VIP" 
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <div className="p-8">
                  <h3 className="font-bold text-xl text-primary group-hover:text-primary/80 transition-colors mb-3">
                    Mapa de Experiências Diferenciadas
                  </h3>
                  <p className="text-muted-foreground text-sm mb-5">
                    Descubra como localizar e acessar os melhores benefícios que elevam sua qualidade de vida.
                  </p>
                  <span className="text-primary text-sm flex items-center gap-2 group-hover:gap-3 transition-all font-semibold">
                    Continuar lendo <ChevronRight className="w-4 h-4" />
                  </span>
                </div>
              </a>

              {/* Artigo 3 */}
              <a 
                href="/artigo3.php" 
                className="group block bg-card rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300"
              >
                <div className="aspect-video overflow-hidden">
                  <img 
                    src={artigo3Img} 
                    alt="Análise de Programas" 
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <div className="p-8">
                  <h3 className="font-bold text-xl text-primary group-hover:text-primary/80 transition-colors mb-3">
                    Análise de Programas de Recompensas
                  </h3>
                  <p className="text-muted-foreground text-sm mb-5">
                    Compreenda como especialistas avaliam e otimizam programas premium para melhores resultados.
                  </p>
                  <span className="text-primary text-sm flex items-center gap-2 group-hover:gap-3 transition-all font-semibold">
                    Continuar lendo <ChevronRight className="w-4 h-4" />
                  </span>
                </div>
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Seção Final de Contato */}
      <section className="py-24 gradient-main">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center text-white"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-8">
              Inicie sua <span className="text-shimmer">Jornada</span>
            </h2>
            <p className="text-white/80 text-lg max-w-2xl mx-auto mb-14">
              Estamos à disposição para auxiliar você a compreender o universo dos benefícios exclusivos.
            </p>
            
            <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8">
                <MapPin className="w-10 h-10 mx-auto mb-5" />
                <h3 className="font-bold text-lg mb-3">Localização</h3>
                <p className="text-white/70 text-sm leading-relaxed">
                  Av General Couto Magalhaes 485<br />
                  Quadra26 Lote 04<br />
                  VI Maua, GO - 74.323-240
                </p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8">
                <Phone className="w-10 h-10 mx-auto mb-5" />
                <h3 className="font-bold text-lg mb-3">Telefone</h3>
                <a href="tel:+5562915296613" className="text-white/70 text-sm hover:text-white transition-colors">
                  (62) 9152-9613
                </a>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8">
                <Mail className="w-10 h-10 mx-auto mb-5" />
                <h3 className="font-bold text-lg mb-3">Email</h3>
                <a href="mailto:contato@beneficiospremix.com" className="text-white/70 text-xs break-all hover:text-white transition-colors">
                  contato@beneficiospremix.com
                </a>
              </div>
            </div>

            <div className="mt-14">
              <Link to="/contato" className="btn-accent text-lg">
                Falar Agora
                <ChevronRight className="w-5 h-5 ml-2" />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default Index;