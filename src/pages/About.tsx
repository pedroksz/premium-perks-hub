import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  Target, 
  Eye, 
  Heart, 
  Award, 
  Users, 
  TrendingUp,
  ArrowRight 
} from 'lucide-react';
import Layout from '@/components/layout/Layout';
import professionalWork from '@/assets/professional-work.jpg';

const About = () => {
  const coreValues = [
    {
      icon: Target,
      name: 'Missão',
      content: 'Orientar e educar nossos clientes sobre programas de vantagens, fornecendo informações claras para decisões conscientes e bem fundamentadas.'
    },
    {
      icon: Eye,
      name: 'Visão',
      content: 'Ser referência em consultoria educacional sobre benefícios, reconhecidos pela transparência, ética e excelência no atendimento.'
    },
    {
      icon: Heart,
      name: 'Valores',
      content: 'Honestidade, dedicação total ao cliente, aprendizado contínuo e respeito irrestrito às normas regulatórias vigentes.'
    }
  ];

  return (
    <Layout>
      {/* Header */}
      <section className="gradient-hero-section py-20 text-white">
        <div className="container mx-auto px-4 text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-bold mb-5"
          >
            Sobre a <span className="text-gold-shine">Benefícios AMX</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-lg text-white/75 max-w-2xl mx-auto font-light"
          >
            Conheça nossa equipe de profissionais dedicados a orientá-lo 
            sobre as melhores oportunidades em programas de vantagens.
          </motion.p>
        </div>
      </section>

      {/* About */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <img 
                src={professionalWork} 
                alt="Profissional Benefícios AMX" 
                className="rounded-2xl shadow-2xl w-full"
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">
                Nossa Trajetória
              </h2>
              <p className="text-muted-foreground text-base leading-relaxed mb-5">
                A Benefícios AMX foi criada para democratizar o acesso à 
                informação sobre programas de vantagens e benefícios. 
                Nossa atuação é puramente educacional e consultiva.
              </p>
              <p className="text-muted-foreground text-base leading-relaxed mb-5">
                Não operamos como instituição financeira e não realizamos 
                intermediação bancária de qualquer natureza. Nosso objetivo é 
                auxiliar você a compreender as oportunidades disponíveis.
              </p>
              <p className="text-muted-foreground text-base leading-relaxed">
                Com profissionais experientes e metodologia estruturada, oferecemos 
                assessoria personalizada para que você tome decisões embasadas 
                sobre programas de recompensas e experiências exclusivas.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="section-title"
          >
            Nossos Fundamentos
          </motion.h2>
          
          <div className="grid md:grid-cols-3 gap-8 mt-12">
            {coreValues.map((value, i) => (
              <motion.div
                key={value.name}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-card rounded-xl p-8 text-center shadow-md hover:shadow-xl transition-shadow"
              >
                <div className="w-20 h-20 mx-auto mb-6 rounded-xl gradient-gold-accent flex items-center justify-center">
                  <value.icon className="w-10 h-10 text-primary" />
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
      <section className="py-20 gradient-navy">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto text-center text-white"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Por que Escolher a Benefícios AMX?
            </h2>
            <p className="text-white/75 text-base leading-relaxed mb-10">
              Oferecemos uma abordagem honesta e educacional, focada em 
              ajudá-lo a identificar e aproveitar os melhores programas de vantagens.
            </p>
            
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <Award className="w-12 h-12 mx-auto mb-4" />
                <h3 className="font-bold text-lg mb-2">Experiência</h3>
                <p className="text-white/65 text-sm">
                  Anos de atuação em curadoria de benefícios e programas de vantagens
                </p>
              </div>
              <div className="text-center">
                <Users className="w-12 h-12 mx-auto mb-4" />
                <h3 className="font-bold text-lg mb-2">Atendimento</h3>
                <p className="text-white/65 text-sm">
                  Suporte humanizado e adaptado às suas necessidades específicas
                </p>
              </div>
              <div className="text-center">
                <TrendingUp className="w-12 h-12 mx-auto mb-4" />
                <h3 className="font-bold text-lg mb-2">Atualização</h3>
                <p className="text-white/65 text-sm">
                  Conteúdo constantemente revisado e alinhado às novidades do mercado
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">
              Pronto para Começar?
            </h2>
            <p className="text-muted-foreground text-base max-w-2xl mx-auto mb-8">
              Entre em contato e descubra como podemos orientá-lo 
              no universo dos benefícios exclusivos.
            </p>
            <Link to="/contato" className="btn-gold text-base">
              Falar com a Equipe
              <ArrowRight className="w-5 h-5 ml-2" />
            </Link>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default About;
