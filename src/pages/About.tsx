import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  Target, 
  Eye, 
  Heart, 
  Award, 
  Users, 
  TrendingUp,
  ArrowRight,
  Check,
  Building2,
  FileText,
  MapPin,
  Phone,
  Mail,
  Briefcase,
  Clock,
  CreditCard
} from 'lucide-react';
import Layout from '@/components/layout/Layout';
import teamCollaboration from '@/assets/team-collaboration.jpg';
import teamMeeting from '@/assets/team-meeting.jpg';

const About = () => {
  const coreValues = [
    {
      icon: Target,
      name: 'Missão',
      content: 'Oferecer assessoria personalizada em programas de benefícios, auxiliando nossos clientes com informações claras e orientação especializada.'
    },
    {
      icon: Eye,
      name: 'Visão',
      content: 'Ser reconhecida como empresa de referência em consultoria informativa sobre programas de vantagens e recompensas.'
    },
    {
      icon: Heart,
      name: 'Valores',
      content: 'Transparência nas informações, ética profissional, atendimento personalizado e compromisso com a satisfação do cliente.'
    }
  ];

  const companyInfo = [
    { icon: Building2, label: 'Razão Social', value: 'C S SILVA AUTO PECAS LTDA' },
    { icon: FileText, label: 'CNPJ', value: '47.951.436/0001-20' },
    { icon: Briefcase, label: 'Nome Fantasia', value: 'GLOBALPARTS EXPRESS' },
    { icon: MapPin, label: 'Endereço', value: 'Av. General Couto Magalhães, 485, Quadra 26 Lote 04, Vila Mauá, Goiânia-GO, CEP 74.323-240' },
    { icon: Phone, label: 'Telefone Comercial', value: '(62) 9152-9613' },
    { icon: Phone, label: 'Telefone Fixo', value: '(11) 1413-9784' },
    { icon: Mail, label: 'E-mail Institucional', value: 'contato@beneficiospremix.com' },
    { icon: Clock, label: 'Data de Abertura', value: '14/09/2022' },
  ];

  const howItWorks = [
    {
      step: '01',
      title: 'Contato Inicial',
      description: 'Entre em contato conosco por telefone, e-mail ou formulário. Nossa equipe agendará uma consulta para entender suas necessidades.'
    },
    {
      step: '02',
      title: 'Análise de Perfil',
      description: 'Realizamos uma análise detalhada do seu perfil para identificar os programas de benefícios mais adequados para você.'
    },
    {
      step: '03',
      title: 'Apresentação de Opções',
      description: 'Apresentamos as opções de programas disponíveis no mercado, explicando vantagens, condições e como cada um funciona.'
    },
    {
      step: '04',
      title: 'Orientação Especializada',
      description: 'Fornecemos orientação completa para que você tome a melhor decisão. A contratação é feita diretamente com as empresas responsáveis.'
    }
  ];

  return (
    <Layout>
      {/* Header */}
      <section className="gradient-hero-section py-24 pt-40 text-white">
        <div className="container mx-auto px-4 text-center">
          <motion.span 
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-block text-sm font-semibold uppercase tracking-widest mb-4 text-white/70"
          >
            Quem Somos
          </motion.span>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.05 }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6"
          >
            Benefícios <span className="text-accent-shine">Premix</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-lg text-white/70 max-w-2xl mx-auto"
          >
            Empresa privada de consultoria informativa especializada em 
            programas de benefícios e vantagens.
          </motion.p>
        </div>
      </section>

      {/* Company Info */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="section-heading">Dados da Empresa</h2>
            <div className="divider-elegant mt-6" />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto bg-card rounded-3xl p-8 md:p-12 shadow-lg border border-border"
          >
            <div className="grid md:grid-cols-2 gap-6">
              {companyInfo.map((info, i) => (
                <div key={i} className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl gradient-accent-warm flex items-center justify-center flex-shrink-0">
                    <info.icon className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <span className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">{info.label}</span>
                    <p className="text-foreground font-medium text-sm mt-1">{info.value}</p>
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-8 pt-8 border-t border-border">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl gradient-accent-warm flex items-center justify-center flex-shrink-0">
                  <Briefcase className="w-5 h-5 text-white" />
                </div>
                <div>
                  <span className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">Natureza do Negócio</span>
                  <p className="text-foreground font-medium text-sm mt-1">
                    Empresa privada de consultoria informativa. Atuamos exclusivamente com orientação e curadoria de programas de benefícios. 
                    Não realizamos intermediação financeira, análise de crédito ou venda de produtos.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* What We Offer */}
      <section className="py-24 bg-muted">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -35 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              <img 
                src={teamCollaboration} 
                alt="Equipe de Consultoria" 
                className="rounded-3xl shadow-xl w-full"
              />
              <img 
                src={teamMeeting} 
                alt="Reunião de Consultoria" 
                className="absolute -bottom-8 -right-8 w-48 rounded-2xl shadow-lg border-4 border-background hidden md:block"
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 35 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <span className="inline-block text-sm font-semibold text-accent uppercase tracking-widest mb-4">
                Nossos Serviços
              </span>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary mb-6 leading-tight">
                O Que Oferecemos
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-5">
                <strong>Assessoria profissional em programas de benefícios.</strong> Nossa equipe analisa 
                seu perfil e identifica as melhores opções de programas de vantagens disponíveis no mercado.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-5">
                <strong>Orientação especializada e imparcial.</strong> Fornecemos informações claras sobre 
                cada programa, explicando como funcionam, quais os requisitos e como você pode se beneficiar.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-6">
                <strong>Importante:</strong> Atuamos exclusivamente como consultores. Não somos representantes 
                de bancos ou instituições financeiras. A contratação de qualquer serviço é feita diretamente 
                com as empresas responsáveis pelos programas.
              </p>
              <ul className="space-y-3">
                {[
                  'Análise de perfil personalizada',
                  'Apresentação de opções disponíveis',
                  'Orientação sobre requisitos e condições',
                  'Suporte durante todo o processo'
                ].map((item) => (
                  <li key={item} className="flex items-center gap-3">
                    <div className="w-6 h-6 rounded-full gradient-accent-warm flex items-center justify-center flex-shrink-0">
                      <Check className="w-3.5 h-3.5 text-white" />
                    </div>
                    <span className="text-foreground text-sm font-medium">{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="section-heading">Como Funciona</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto mt-4">
              Processo simples e transparente para você receber nossa assessoria
            </p>
            <div className="divider-elegant mt-6" />
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {howItWorks.map((step, i) => (
              <motion.div
                key={step.step}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="text-center"
              >
                <div className="w-16 h-16 mx-auto mb-6 rounded-2xl gradient-accent-warm flex items-center justify-center">
                  <span className="text-2xl font-bold text-white">{step.step}</span>
                </div>
                <h3 className="text-xl font-bold text-primary mb-3">{step.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{step.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-24 bg-muted">
        <div className="container mx-auto px-4">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="section-heading">Nossos Fundamentos</h2>
            <div className="divider-elegant mt-6" />
          </motion.div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {coreValues.map((value, i) => (
              <motion.div
                key={value.name}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="card-feature text-center"
              >
                <div className="w-20 h-20 mx-auto mb-6 rounded-2xl gradient-accent-warm flex items-center justify-center">
                  <value.icon className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-primary mb-4">
                  {value.name}
                </h3>
                <p className="text-muted-foreground leading-relaxed text-sm">
                  {value.content}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Model */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto"
          >
            <div className="text-center mb-12">
              <h2 className="section-heading">Modelo de Contratação</h2>
              <div className="divider-elegant mt-6" />
            </div>
            
            <div className="bg-card rounded-3xl p-8 md:p-12 shadow-lg border border-border">
              <div className="flex items-start gap-4 mb-6">
                <div className="w-12 h-12 rounded-xl gradient-accent-warm flex items-center justify-center flex-shrink-0">
                  <CreditCard className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-primary mb-2">Como Funciona a Contratação</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Nossa assessoria é oferecida mediante análise do seu perfil. O orçamento é personalizado 
                    de acordo com a complexidade da orientação necessária e os programas de benefícios envolvidos.
                  </p>
                </div>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6 mt-8">
                <div className="bg-muted rounded-2xl p-6">
                  <h4 className="font-semibold text-primary mb-3">O que está incluso:</h4>
                  <ul className="space-y-2">
                    {[
                      'Análise completa do seu perfil',
                      'Mapeamento de programas compatíveis',
                      'Orientação detalhada sobre cada opção',
                      'Suporte durante o processo de decisão'
                    ].map((item) => (
                      <li key={item} className="flex items-center gap-2 text-sm text-muted-foreground">
                        <Check className="w-4 h-4 text-accent flex-shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="bg-muted rounded-2xl p-6">
                  <h4 className="font-semibold text-primary mb-3">O que NÃO fazemos:</h4>
                  <ul className="space-y-2">
                    {[
                      'Intermediação financeira',
                      'Análise de crédito',
                      'Venda de produtos ou cartões',
                      'Promessas de aprovação garantida'
                    ].map((item) => (
                      <li key={item} className="flex items-center gap-2 text-sm text-muted-foreground">
                        <span className="w-4 h-4 flex items-center justify-center text-red-500 flex-shrink-0">✕</span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Why Us */}
      <section className="py-24 gradient-emerald">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto text-center text-white"
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
              Por que Escolher Nossa Assessoria?
            </h2>
            <p className="text-white/70 leading-relaxed mb-12 max-w-2xl mx-auto">
              Profissionalismo e transparência em cada etapa do atendimento
            </p>
            
            <div className="grid md:grid-cols-3 gap-10">
              <div className="text-center">
                <div className="w-16 h-16 mx-auto mb-5 rounded-2xl bg-white/10 flex items-center justify-center">
                  <Award className="w-8 h-8" />
                </div>
                <h3 className="font-bold text-lg mb-2">Experiência</h3>
                <p className="text-white/60 text-sm">
                  Conhecimento amplo sobre programas de benefícios disponíveis no mercado
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 mx-auto mb-5 rounded-2xl bg-white/10 flex items-center justify-center">
                  <Users className="w-8 h-8" />
                </div>
                <h3 className="font-bold text-lg mb-2">Atendimento</h3>
                <p className="text-white/60 text-sm">
                  Assessoria personalizada adaptada às suas necessidades específicas
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 mx-auto mb-5 rounded-2xl bg-white/10 flex items-center justify-center">
                  <TrendingUp className="w-8 h-8" />
                </div>
                <h3 className="font-bold text-lg mb-2">Atualização</h3>
                <p className="text-white/60 text-sm">
                  Informações sempre atualizadas sobre novos programas e oportunidades
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-2xl mx-auto"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">
              Entre em Contato
            </h2>
            <p className="text-muted-foreground mb-10 leading-relaxed">
              Estamos prontos para ajudar você a entender as melhores opções de programas de benefícios.
            </p>
            <Link to="/contato" className="btn-accent">
              Solicitar Atendimento
              <ArrowRight className="w-4 h-4 ml-2" />
            </Link>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default About;