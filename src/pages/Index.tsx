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
import teamMeeting from '@/assets/team-meeting.jpg';
import teamCollaboration from '@/assets/team-collaboration.jpg';

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
      title: 'Curadoria de Benefícios',
      description: 'Seleção criteriosa das melhores oportunidades de vantagens e recompensas disponíveis no mercado atual.'
    },
    {
      icon: Target,
      title: 'Análise Personalizada',
      description: 'Avaliação completa do seu perfil para identificar os programas mais adequados às suas necessidades.'
    },
    {
      icon: Users2,
      title: 'Atendimento Exclusivo',
      description: 'Suporte individual com consultores dedicados que entendem suas preferências e objetivos.'
    },
    {
      icon: Compass,
      title: 'Orientação Estratégica',
      description: 'Direcionamento sobre como maximizar experiências em viagens, gastronomia e entretenimento.'
    },
    {
      icon: ShieldCheck,
      title: 'Ética e Transparência',
      description: 'Compromisso absoluto com informações claras. Sem intermediação financeira ou vendas.'
    },
    {
      icon: Headphones,
      title: 'Suporte Contínuo',
      description: 'Acompanhamento permanente para atualização sobre novas oportunidades e programas.'
    }
  ];

  const stats = [
    { icon: TrendingUp, value: '480+', label: 'Programas Mapeados' },
    { icon: Users2, value: '850+', label: 'Parcerias Ativas' },
    { icon: Award, value: '100%', label: 'Transparência' },
    { icon: Clock, value: 'Real-time', label: 'Atualizações' }
  ];

  const disclaimers = [
    'Atuação exclusivamente consultiva e educacional',
    'Não representamos bancos ou instituições financeiras',
    'Não realizamos análise de crédito ou intermediação bancária',
    'Não comercializamos produtos financeiros ou cartões',
    'Orientação e curadoria sem promessas de aprovação',
    'Contratações feitas diretamente com empresas responsáveis'
  ];

  return (
    <Layout>
      {/* Schema */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{
        __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "ProfessionalService",
          "name": "Exclusive Benefícios Mix",
          "description": "Curadoria especializada em experiências premium e programas de vantagens exclusivas.",
          "url": "https://exclusivebeneficiosmix.com/",
          "telephone": "(19) 8102-0844",
          "address": {
            "@type": "PostalAddress",
            "streetAddress": "R Cabreuva 210",
            "addressLocality": "Sorocaba",
            "addressRegion": "SP",
            "postalCode": "18.085-340",
            "addressCountry": "BR"
          },
          "priceRange": "$$",
          "openingHours": "Mo-Fr 09:00-18:00"
        })
      }} />

      {/* Hero - Layout Assimétrico */}
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
                Experiências Premium
              </motion.div>
              
              <motion.h1 
                variants={fadeIn}
                className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-[1.1]"
              >
                Descubra um Novo<br />
                Padrão de{' '}
                <span className="text-accent-shine">Vantagens</span>
              </motion.h1>
              
              <motion.p 
                variants={fadeIn}
                className="text-lg text-white/75 mb-10 max-w-lg leading-relaxed"
              >
                Curadoria especializada para você acessar os melhores programas 
                de benefícios, experiências diferenciadas e oportunidades exclusivas.
              </motion.p>
              
              <motion.div
                variants={fadeIn}
                className="flex flex-col sm:flex-row gap-4"
              >
                <Link to="/contato" className="btn-accent">
                  Agendar Consultoria
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
                <div className="absolute -bottom-6 -left-6 bg-white/95 backdrop-blur-sm rounded-2xl p-5 shadow-xl">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-xl gradient-accent-warm flex items-center justify-center">
                      <Award className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">Registro Ativo</p>
                      <p className="font-bold text-primary">73492816</p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services - Grid Moderno */}
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
            <motion.p variants={fadeIn} className="section-subheading">
              Serviços de curadoria desenvolvidos para quem busca excelência em benefícios
            </motion.p>
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

      {/* Stats - Horizontal com Fundo */}
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

      {/* About Preview - Imagem à Direita */}
      <section className="py-24 bg-muted">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -35 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              <span className="inline-block text-sm font-semibold text-accent uppercase tracking-widest mb-4">
                Quem Somos
              </span>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary mb-6 leading-tight">
                Especialistas em Curadoria de Benefícios
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-8">
                Nossa equipe combina conhecimento profundo do mercado de vantagens com 
                atendimento humanizado. Identificamos as melhores oportunidades para 
                cada perfil, sempre com total transparência e ética profissional.
              </p>
              <ul className="space-y-4 mb-8">
                {['Análise detalhada de programas', 'Orientação sem conflito de interesses', 'Atualização constante de oportunidades', 'Acompanhamento personalizado'].map((item) => (
                  <li key={item} className="flex items-center gap-3">
                    <div className="w-6 h-6 rounded-full gradient-accent-warm flex items-center justify-center flex-shrink-0">
                      <Check className="w-3.5 h-3.5 text-white" />
                    </div>
                    <span className="text-foreground text-sm font-medium">{item}</span>
                  </li>
                ))}
              </ul>
              <Link to="/sobre" className="btn-primary">
                Saiba Mais
                <ArrowRight className="w-4 h-4 ml-2" />
              </Link>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 35 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="relative"
            >
              <img 
                src={teamMeeting} 
                alt="Equipe Especializada" 
                className="rounded-3xl shadow-xl w-full"
              />
              <img 
                src={businessWork} 
                alt="Trabalho Profissional" 
                className="absolute -bottom-8 -left-8 w-48 rounded-2xl shadow-lg border-4 border-background hidden md:block"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Experiences - Layout Invertido */}
      <section className="py-24 bg-card">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -35 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="order-2 lg:order-1"
            >
              <img 
                src={loungeElegant} 
                alt="Lounge Elegante" 
                className="rounded-3xl shadow-xl w-full"
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 35 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="order-1 lg:order-2"
            >
              <span className="inline-block text-sm font-semibold text-accent uppercase tracking-widest mb-4">
                Experiências
              </span>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary mb-6 leading-tight">
                Acesso a Ambientes Exclusivos
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-8">
                Orientamos você sobre como aproveitar lounges VIP, eventos premium 
                e experiências diferenciadas que fazem parte dos melhores programas 
                de benefícios disponíveis.
              </p>
              <Link to="/contato" className="btn-accent">
                Explorar Possibilidades
                <ArrowRight className="w-4 h-4 ml-2" />
              </Link>
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
                    Aviso Importante
                  </h2>
                  <p className="text-muted-foreground text-sm">Transparência em nossa atuação</p>
                </div>
              </div>
              <div className="grid sm:grid-cols-2 gap-4">
                {disclaimers.map((item, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                    <span className="text-foreground text-sm">{item}</span>
                  </div>
                ))}
              </div>
              <div className="mt-8 pt-6 border-t border-border/50 flex flex-wrap gap-6 text-sm">
                <span className="text-muted-foreground">
                  <strong className="text-primary">Registro:</strong> 73492816
                </span>
                <span className="text-muted-foreground">
                  <strong className="text-primary">Natureza:</strong> Empresa privada de curadoria consultiva
                </span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Articles - Cards Modernos */}
      <section className="py-24 bg-muted">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="section-heading">Conteúdos Exclusivos</h2>
            <div className="divider-elegant mt-6 mb-6" />
            <p className="section-subheading">
              Artigos e guias para você entender melhor o universo dos benefícios
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Article 1 */}
            <motion.a 
              href="/artigo1.php"
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0 }}
              className="card-elegant group"
            >
              <div className="aspect-[4/3] overflow-hidden">
                <img 
                  src={loungePremium} 
                  alt="Guia de Lounges" 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-6">
                <span className="text-xs font-semibold text-accent uppercase tracking-wider">Guia</span>
                <h3 className="font-bold text-lg text-primary mt-2 mb-3 group-hover:text-primary/80 transition-colors">
                  Desvendando o Acesso a Lounges Premium
                </h3>
                <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
                  Entenda como funcionam os programas que dão acesso a espaços VIP em aeroportos.
                </p>
                <span className="text-primary text-sm flex items-center gap-2 font-semibold group-hover:gap-3 transition-all">
                  Continuar lendo <ArrowRight className="w-4 h-4" />
                </span>
              </div>
            </motion.a>

            {/* Article 2 */}
            <motion.a 
              href="/artigo2.php"
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="card-elegant group"
            >
              <div className="aspect-[4/3] overflow-hidden">
                <img 
                  src={loungeElegant} 
                  alt="Experiências Exclusivas" 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-6">
                <span className="text-xs font-semibold text-accent uppercase tracking-wider">Experiências</span>
                <h3 className="font-bold text-lg text-primary mt-2 mb-3 group-hover:text-primary/80 transition-colors">
                  Experiências que Transformam Viagens
                </h3>
                <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
                  Descubra como elevar suas experiências de viagem com benefícios diferenciados.
                </p>
                <span className="text-primary text-sm flex items-center gap-2 font-semibold group-hover:gap-3 transition-all">
                  Continuar lendo <ArrowRight className="w-4 h-4" />
                </span>
              </div>
            </motion.a>

            {/* Article 3 */}
            <motion.a 
              href="/artigo3.php"
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="card-elegant group"
            >
              <div className="aspect-[4/3] overflow-hidden">
                <img 
                  src={businessWork} 
                  alt="Organização de Benefícios" 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-6">
                <span className="text-xs font-semibold text-accent uppercase tracking-wider">Estratégia</span>
                <h3 className="font-bold text-lg text-primary mt-2 mb-3 group-hover:text-primary/80 transition-colors">
                  Organizando Seus Programas de Vantagens
                </h3>
                <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
                  Dicas práticas para gerenciar e maximizar seus benefícios de forma inteligente.
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
              Entre em contato e descubra como nossa curadoria pode transformar 
              a forma como você aproveita benefícios exclusivos.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-10">
              <Link to="/contato" className="btn-accent">
                Iniciar Consultoria
                <ArrowRight className="w-4 h-4 ml-2" />
              </Link>
            </div>
            <div className="flex flex-wrap justify-center gap-6 text-white/60 text-sm">
              <a href="tel:+5519810200844" className="flex items-center gap-2 hover:text-white transition-colors">
                <Phone className="w-4 h-4" />
                (19) 8102-0844
              </a>
              <a href="mailto:contato@exclusivebeneficiosmix.com" className="flex items-center gap-2 hover:text-white transition-colors">
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
