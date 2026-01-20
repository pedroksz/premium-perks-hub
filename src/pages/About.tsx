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
  Check
} from 'lucide-react';
import Layout from '@/components/layout/Layout';
import teamCollaboration from '@/assets/team-collaboration.jpg';
import teamMeeting from '@/assets/team-meeting.jpg';

const About = () => {
  const coreValues = [
    {
      icon: Target,
      name: 'Missão',
      content: 'Proporcionar orientação especializada em programas de benefícios, capacitando nossos clientes com conhecimento para escolhas inteligentes.'
    },
    {
      icon: Eye,
      name: 'Visão',
      content: 'Consolidar-nos como referência em curadoria de experiências premium, reconhecidos pela excelência e integridade.'
    },
    {
      icon: Heart,
      name: 'Valores',
      content: 'Transparência absoluta, compromisso com resultados, atualização constante e respeito às normas do setor.'
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
            Exclusive <span className="text-accent-shine">Benefícios Mix</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-lg text-white/70 max-w-2xl mx-auto"
          >
            Conheça a equipe dedicada a transformar a maneira como você 
            aproveita programas de vantagens e experiências exclusivas.
          </motion.p>
        </div>
      </section>

      {/* About */}
      <section className="py-24 bg-background">
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
                alt="Equipe Exclusive Benefícios Mix" 
                className="rounded-3xl shadow-xl w-full"
              />
              <img 
                src={teamMeeting} 
                alt="Reunião de Equipe" 
                className="absolute -bottom-8 -right-8 w-48 rounded-2xl shadow-lg border-4 border-background hidden md:block"
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 35 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <span className="inline-block text-sm font-semibold text-accent uppercase tracking-widest mb-4">
                Nossa História
              </span>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary mb-6 leading-tight">
                Experiência em Curadoria de Benefícios
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-5">
                A Exclusive Benefícios Mix nasceu da percepção de que muitas pessoas 
                desconhecem as oportunidades disponíveis em programas de vantagens. 
                Nossa missão é democratizar esse conhecimento.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-5">
                Atuamos exclusivamente como consultores e orientadores. Não realizamos 
                operações financeiras, intermediação bancária ou venda de produtos. 
                Nosso foco é educação e curadoria.
              </p>
              <ul className="space-y-3">
                {['Análise imparcial de programas', 'Orientação personalizada', 'Atualização constante', 'Transparência total'].map((item) => (
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
              Por que Escolher a Exclusive?
            </h2>
            <p className="text-white/70 leading-relaxed mb-12 max-w-2xl mx-auto">
              Nossa abordagem combina conhecimento especializado com atendimento 
              personalizado para entregar a melhor experiência em curadoria.
            </p>
            
            <div className="grid md:grid-cols-3 gap-10">
              <div className="text-center">
                <div className="w-16 h-16 mx-auto mb-5 rounded-2xl bg-white/10 flex items-center justify-center">
                  <Award className="w-8 h-8" />
                </div>
                <h3 className="font-bold text-lg mb-2">Expertise</h3>
                <p className="text-white/60 text-sm">
                  Conhecimento aprofundado em programas de benefícios e vantagens
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 mx-auto mb-5 rounded-2xl bg-white/10 flex items-center justify-center">
                  <Users className="w-8 h-8" />
                </div>
                <h3 className="font-bold text-lg mb-2">Personalização</h3>
                <p className="text-white/60 text-sm">
                  Atendimento adaptado às suas necessidades e objetivos específicos
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 mx-auto mb-5 rounded-2xl bg-white/10 flex items-center justify-center">
                  <TrendingUp className="w-8 h-8" />
                </div>
                <h3 className="font-bold text-lg mb-2">Atualização</h3>
                <p className="text-white/60 text-sm">
                  Informações sempre atualizadas sobre novas oportunidades
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
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-2xl mx-auto"
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary mb-6">
              Vamos Conversar?
            </h2>
            <p className="text-muted-foreground max-w-xl mx-auto mb-8">
              Entre em contato e descubra como nossa curadoria pode transformar 
              sua experiência com programas de benefícios.
            </p>
            <Link to="/contato" className="btn-accent">
              Iniciar Consultoria
              <ArrowRight className="w-4 h-4 ml-2" />
            </Link>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default About;
