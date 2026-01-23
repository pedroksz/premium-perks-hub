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
import teamPhoto from '@/assets/team-photo.jpg';

const About = () => {
  const values = [
    {
      icon: Target,
      title: 'Missão',
      description: 'Orientar e educar nossos clientes sobre benefícios premium, proporcionando informações claras e transparentes para decisões conscientes.'
    },
    {
      icon: Eye,
      title: 'Visão',
      description: 'Ser referência em consultoria educativa sobre programas de benefícios, reconhecidos pela transparência e qualidade do atendimento.'
    },
    {
      icon: Heart,
      title: 'Valores',
      description: 'Transparência, ética, comprometimento com o cliente, educação financeira e respeito às normas regulatórias.'
    }
  ];

  const team = [
    {
      name: 'Marina Santos',
      role: 'Diretora de Consultoria',
      description: 'Especialista em programas de benefícios premium com mais de 10 anos de experiência no mercado.'
    },
    {
      name: 'Ricardo Oliveira',
      role: 'Gerente de Atendimento',
      description: 'Profissional dedicado à excelência no atendimento e satisfação dos clientes.'
    },
    {
      name: 'Ana Paula Costa',
      role: 'Consultora Sênior',
      description: 'Expert em curadoria de experiências exclusivas e programas de fidelidade.'
    }
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="gradient-hero py-20 text-white">
        <div className="container mx-auto px-4 text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-serif font-bold mb-4"
          >
            Sobre a <span className="text-gradient">Orientação Premium Elite</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-lg text-white/80 max-w-2xl mx-auto"
          >
            Conheça nossa equipe de especialistas dedicados a orientar você sobre 
            benefícios premium e experiências exclusivas.
          </motion.p>
        </div>
      </section>

      {/* About Intro */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <img 
                src={teamPhoto} 
                alt="Equipe Orientação Premium Elite" 
                className="rounded-2xl shadow-2xl w-full"
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-primary mb-6">
                Quem Somos
              </h2>
                <p className="text-muted-foreground text-lg leading-relaxed mb-4">
                A Orientação Premium Elite é uma empresa especializada em orientação consultiva 
                sobre benefícios premium, programas de vantagens e experiências exclusivas. 
                Nossa atuação é estritamente educativa e informativa.
              </p>
              <p className="text-muted-foreground text-lg leading-relaxed mb-4">
                Não somos uma instituição financeira e não realizamos intermediação de 
                produtos bancários. Nossa missão é ajudar nossos clientes a compreenderem 
                melhor o universo dos benefícios premium disponíveis no mercado.
              </p>
              <p className="text-muted-foreground text-lg leading-relaxed mb-6">
                Com anos de experiência e uma equipe qualificada, oferecemos suporte 
                personalizado para que você possa tomar decisões informadas sobre 
                programas de benefícios e experiências exclusivas.
              </p>
              <div className="bg-muted rounded-lg p-4 text-sm text-muted-foreground space-y-1">
                <p><strong className="text-primary">CNPJ:</strong> 57.176.088/0001-14</p>
                <p><strong className="text-primary">Razão Social:</strong> C S SILVA AUTO PECAS LTDA</p>
                <p><strong className="text-primary">Nome Fantasia:</strong> GLOBALPARTS EXPRESS</p>
                <p><strong className="text-primary">Registro:</strong> 24179342</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Mission, Vision, Values */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="section-title"
          >
            Nossos Pilares
          </motion.h2>
          
          <div className="grid md:grid-cols-3 gap-8 mt-12">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-card rounded-xl p-8 text-center shadow-lg hover:shadow-xl transition-shadow"
              >
                <div className="w-20 h-20 mx-auto mb-6 rounded-full gradient-gold flex items-center justify-center">
                  <value.icon className="w-10 h-10 text-primary" />
                </div>
                <h3 className="text-2xl font-serif font-semibold text-primary mb-4">
                  {value.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {value.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 gradient-navy">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto text-center text-white"
          >
            <h2 className="text-3xl md:text-4xl font-serif font-bold mb-6 text-gold">
              Por que Escolher a Orientação Premium Elite?
            </h2>
            <p className="text-white/80 text-lg leading-relaxed mb-12">
              Oferecemos uma abordagem transparente e educativa, focada em ajudar você 
              a entender e aproveitar os melhores benefícios premium disponíveis.
            </p>
            
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <Award className="w-12 h-12 text-gold mx-auto mb-4" />
                <h3 className="font-semibold text-lg mb-2">Expertise</h3>
                <p className="text-white/70 text-sm">
                  Anos de experiência em curadoria de benefícios premium
                </p>
              </div>
              <div className="text-center">
                <Users className="w-12 h-12 text-gold mx-auto mb-4" />
                <h3 className="font-semibold text-lg mb-2">Atendimento</h3>
                <p className="text-white/70 text-sm">
                  Suporte personalizado e humanizado
                </p>
              </div>
              <div className="text-center">
                <TrendingUp className="w-12 h-12 text-gold mx-auto mb-4" />
                <h3 className="font-semibold text-lg mb-2">Atualização</h3>
                <p className="text-white/70 text-sm">
                  Informações sempre atualizadas sobre o mercado
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
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-primary mb-6">
              Pronto para Conhecer seus Benefícios?
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto mb-8">
              Entre em contato conosco e descubra como podemos ajudá-lo a 
              compreender o universo dos benefícios premium.
            </p>
            <Link to="/contato" className="btn-gold text-lg">
              Fale com Nossa Equipe
              <ArrowRight className="w-5 h-5 ml-2 inline" />
            </Link>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default About;
