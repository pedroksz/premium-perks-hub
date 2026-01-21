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
  Check,
  Building2,
  FileText,
  MapPin
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
      title: 'Análise de Cartões Amex',
      description: 'Análises detalhadas e independentes sobre os diferentes cartões American Express disponíveis no mercado brasileiro.'
    },
    {
      icon: Target,
      title: 'Guia de Benefícios',
      description: 'Guias completos sobre benefícios exclusivos dos cartões American Express, incluindo programas de recompensas e vantagens.'
    },
    {
      icon: Compass,
      title: 'Programas de Viagem',
      description: 'Informações sobre programas de viagem, milhas, acesso a salas VIP e outros benefícios relacionados a viagens.'
    },
    {
      icon: Award,
      title: 'Ofertas e Promoções',
      description: 'Cobertura editorial sobre ofertas, promoções e campanhas especiais dos cartões American Express.'
    },
    {
      icon: Headphones,
      title: 'Tutoriais e Dicas',
      description: 'Tutoriais práticos e dicas para maximizar o uso dos benefícios dos cartões American Express.'
    },
    {
      icon: TrendingUp,
      title: 'Notícias e Atualizações',
      description: 'Cobertura jornalística sobre novidades, mudanças e atualizações relacionadas aos cartões American Express.'
    }
  ];

  const stats = [
    { icon: Users2, value: '847+', label: 'Clientes Cadastrados' },
    { icon: TrendingUp, value: '50+', label: 'Guias Publicados' },
    { icon: Award, value: '100%', label: 'Conteúdo Independente' },
    { icon: Clock, value: '24h', label: 'Acesso Online' }
  ];

  const myths = [
    {
      title: '"São aceitos em poucos lugares"',
      description: 'Muitas pessoas acreditam que cartões American Express têm baixa aceitação, mas a rede de estabelecimentos credenciados cresceu significativamente nos últimos anos.'
    },
    {
      title: '"Só para pessoas muito ricas"',
      description: 'Embora alguns cartões sejam premium, a American Express oferece opções para diferentes perfis de renda e necessidades.'
    },
    {
      title: '"Anuidade muito cara"',
      description: 'Os benefícios oferecidos muitas vezes compensam o custo da anuidade, especialmente para quem utiliza ativamente as vantagens do cartão.'
    },
    {
      title: '"Difícil de conseguir aprovação"',
      description: 'Embora alguns cartões tenham critérios rigorosos, há opções com diferentes níveis de exigência para aprovação.'
    },
    {
      title: '"Benefícios são complicados"',
      description: 'Com informação adequada, é possível entender e aproveitar todos os benefícios oferecidos pelos cartões American Express.'
    }
  ];

  const disclaimers = [
    'Atuamos exclusivamente como portal informativo independente, com conteúdo editorial sobre cartões American Express',
    'Oferecemos apenas conteúdo informativo e editorial. Não somos afiliados, associados ou representantes da American Express',
    'Não realizamos intermediação financeira, emissão de cartões ou qualquer tipo de operação bancária',
    'Todo conteúdo é produzido de forma independente com finalidade exclusivamente informativa e educacional',
    'Não efetuamos análises creditícias, concessão de crédito ou venda de produtos financeiros',
    'Nenhuma garantia de aprovação, promessa de liberação ou vinculação com processos de crédito',
    'Direcionamos leitores aos canais oficiais quando processos formais são necessários',
    'Decisões de contratação são tomadas diretamente entre o leitor e as instituições responsáveis'
  ];

  return (
    <Layout>
      {/* Schema */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{
        __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "ProfessionalService",
          "name": "Benefícios Premix",
          "description": "Portal informativo independente com conteúdo editorial sobre cartões American Express, análises detalhadas e guias completos sobre benefícios exclusivos.",
          "url": "https://beneficiospremix.com/",
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
                Portal Informativo Independente
              </motion.div>
              
              <motion.h1 
                variants={fadeIn}
                className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-[1.1]"
              >
                Portal Informativo sobre{' '}
                <span className="text-accent-shine">Cartões American Express</span>
              </motion.h1>
              
              <motion.p 
                variants={fadeIn}
                className="text-lg text-white/75 mb-10 max-w-lg leading-relaxed"
              >
                Conteúdo editorial independente com informações, análises e guias completos 
                sobre cartões American Express e seus benefícios exclusivos.
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
              Conteúdo Editorial
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
                Nossos Diferenciais
              </span>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary mb-6 leading-tight">
                Conteúdo Independente e Educacional
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-8">
                Produzimos conteúdo editorial independente, sem vínculos com a American Express 
                ou instituições financeiras. Focamos em educar nossos leitores com informações 
                claras e acessíveis sobre o universo dos cartões Amex.
              </p>
              <ul className="space-y-4 mb-8">
                {['Conteúdo independente e imparcial', 'Análises detalhadas e completas', 'Foco educacional', 'Informações atualizadas'].map((item) => (
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
                Benefícios Amex
              </span>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary mb-6 leading-tight">
                Programa Membership Rewards
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-8">
                Entenda como funciona o programa de pontos da American Express. Saiba como 
                aproveitar lounges exclusivos, transferir pontos para milhas aéreas e 
                maximizar seus benefícios.
              </p>
              <Link to="/contato" className="btn-accent">
                Saiba Mais
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

      {/* Company Info */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="section-heading">Dados da Empresa</h2>
            <div className="divider-elegant mt-6" />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto bg-card rounded-3xl p-8 md:p-12 shadow-lg border border-border"
          >
            <div className="grid md:grid-cols-2 gap-6">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl gradient-accent-warm flex items-center justify-center flex-shrink-0">
                  <Building2 className="w-5 h-5 text-white" />
                </div>
                <div>
                  <span className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">Razão Social</span>
                  <p className="text-foreground font-medium text-sm mt-1">IMPERIO DA TOYOTA LTDA</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl gradient-accent-warm flex items-center justify-center flex-shrink-0">
                  <FileText className="w-5 h-5 text-white" />
                </div>
                <div>
                  <span className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">CNPJ</span>
                  <p className="text-foreground font-medium text-sm mt-1">47.951.436/0001-20</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl gradient-accent-warm flex items-center justify-center flex-shrink-0">
                  <Sparkles className="w-5 h-5 text-white" />
                </div>
                <div>
                  <span className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">Nome Fantasia</span>
                  <p className="text-foreground font-medium text-sm mt-1">Benefícios Premix</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl gradient-accent-warm flex items-center justify-center flex-shrink-0">
                  <Clock className="w-5 h-5 text-white" />
                </div>
                <div>
                  <span className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">Data de Abertura</span>
                  <p className="text-foreground font-medium text-sm mt-1">14/09/2022</p>
                </div>
              </div>
              <div className="flex items-start gap-4 md:col-span-2">
                <div className="w-10 h-10 rounded-xl gradient-accent-warm flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-5 h-5 text-white" />
                </div>
                <div>
                  <span className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">Endereço</span>
                  <p className="text-foreground font-medium text-sm mt-1">Av. General Couto Magalhães, 485, Quadra 26 Lote 04, Vila Mauá, Goiânia-GO, CEP 74.323-240</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl gradient-accent-warm flex items-center justify-center flex-shrink-0">
                  <Phone className="w-5 h-5 text-white" />
                </div>
                <div>
                  <span className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">Telefone Comercial</span>
                  <p className="text-foreground font-medium text-sm mt-1">(62) 9152-9613</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl gradient-accent-warm flex items-center justify-center flex-shrink-0">
                  <Phone className="w-5 h-5 text-white" />
                </div>
                <div>
                  <span className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">Telefone Fixo</span>
                  <p className="text-foreground font-medium text-sm mt-1">(11) 1413-9784</p>
                </div>
              </div>
              <div className="flex items-start gap-4 md:col-span-2">
                <div className="w-10 h-10 rounded-xl gradient-accent-warm flex items-center justify-center flex-shrink-0">
                  <Mail className="w-5 h-5 text-white" />
                </div>
                <div>
                  <span className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">E-mail Institucional</span>
                  <p className="text-foreground font-medium text-sm mt-1">contato@beneficiospremix.com</p>
                </div>
              </div>
            </div>
            <div className="mt-8 pt-8 border-t border-border">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl gradient-accent-warm flex items-center justify-center flex-shrink-0">
                  <Target className="w-5 h-5 text-white" />
                </div>
                <div>
                  <span className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">Natureza do Negócio</span>
                  <p className="text-foreground font-medium text-sm mt-1">
                    Portal informativo independente sobre cartões American Express. Atuamos exclusivamente com conteúdo editorial e educacional. 
                    Não somos afiliados à American Express e não realizamos intermediação financeira ou emissão de cartões.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Myths Section */}
      <section className="py-24 bg-card">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="section-heading">Mitos Comuns sobre Cartões Amex</h2>
            <div className="divider-elegant mt-6" />
          </motion.div>

          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={stagger}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto"
          >
            {myths.map((myth, i) => (
              <motion.div
                key={myth.title}
                variants={fadeIn}
                transition={{ delay: i * 0.05 }}
                className="card-feature"
              >
                <h3 className="text-lg font-bold text-primary mb-3">
                  {myth.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {myth.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Disclaimer */}
      <section className="py-24 bg-muted">
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
                  <strong className="text-primary">CNPJ:</strong> 47.951.436/0001-20
                </span>
                <span className="text-muted-foreground">
                  <strong className="text-primary">Cadastro:</strong> 72849163
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
            <h2 className="section-heading">Artigos e Dicas</h2>
            <div className="divider-elegant mt-6 mb-6" />
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Article 1 */}
            <motion.a 
              href="/post1.php"
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0 }}
              className="card-elegant group"
            >
              <div className="aspect-[4/3] overflow-hidden">
                <img 
                  src={artigo1} 
                  alt="Guia Completo dos Cartões Amex" 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-6">
                <h3 className="font-bold text-lg text-primary mt-2 mb-3 group-hover:text-primary/80 transition-colors">
                  Guia Completo dos Cartões Amex
                </h3>
                <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
                  Conheça todos os cartões American Express disponíveis no Brasil e suas características...
                </p>
                <span className="text-primary text-sm flex items-center gap-2 font-semibold group-hover:gap-3 transition-all">
                  Leia mais <ArrowRight className="w-4 h-4" />
                </span>
              </div>
            </motion.a>

            {/* Article 2 */}
            <motion.a 
              href="/post2.php"
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="card-elegant group"
            >
              <div className="aspect-[4/3] overflow-hidden">
                <img 
                  src={artigo2} 
                  alt="Programa Membership Rewards" 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-6">
                <h3 className="font-bold text-lg text-primary mt-2 mb-3 group-hover:text-primary/80 transition-colors">
                  Programa Membership Rewards
                </h3>
                <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
                  Entenda como funciona o programa de pontos da American Express...
                </p>
                <span className="text-primary text-sm flex items-center gap-2 font-semibold group-hover:gap-3 transition-all">
                  Leia mais <ArrowRight className="w-4 h-4" />
                </span>
              </div>
            </motion.a>

            {/* Article 3 */}
            <motion.a 
              href="/post3.php"
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="card-elegant group"
            >
              <div className="aspect-[4/3] overflow-hidden">
                <img 
                  src={artigo3} 
                  alt="Benefícios Exclusivos Amex" 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-6">
                <h3 className="font-bold text-lg text-primary mt-2 mb-3 group-hover:text-primary/80 transition-colors">
                  Benefícios Exclusivos Amex
                </h3>
                <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
                  Descubra todos os benefícios exclusivos dos cartões American Express...
                </p>
                <span className="text-primary text-sm flex items-center gap-2 font-semibold group-hover:gap-3 transition-all">
                  Leia mais <ArrowRight className="w-4 h-4" />
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
              Fique por Dentro
            </h2>
            <p className="text-white/75 text-lg mb-10 leading-relaxed">
              Receba conteúdo exclusivo sobre cartões American Express e benefícios 
              diretamente no seu e-mail.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-10">
              <Link to="/contato" className="btn-accent">
                Inscrever-se
                <ArrowRight className="w-4 h-4 ml-2" />
              </Link>
            </div>
            <div className="flex flex-wrap justify-center gap-6 text-white/60 text-sm">
              <a href="tel:+5562915296613" className="flex items-center gap-2 hover:text-white transition-colors">
                <Phone className="w-4 h-4" />
                (62) 9152-9613
              </a>
              <a href="mailto:contato@beneficiospremix.com" className="flex items-center gap-2 hover:text-white transition-colors">
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