import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  Target, 
  Eye, 
  Heart, 
  Trophy, 
  Users, 
  TrendingUp,
  ChevronRight 
} from 'lucide-react';
import Layout from '@/components/layout/Layout';
import teamBusiness from '@/assets/team-business.jpg';

const About = () => {
  const pilares = [
    {
      icon: Target,
      titulo: 'Propósito',
      texto: 'Guiar e instruir nossos clientes sobre programas de vantagens, oferecendo orientações claras para escolhas conscientes e informadas.'
    },
    {
      icon: Eye,
      titulo: 'Perspectiva',
      texto: 'Consolidar-se como referência em consultoria educacional sobre benefícios, sendo reconhecidos pela transparência e excelência.'
    },
    {
      icon: Heart,
      titulo: 'Princípios',
      texto: 'Integridade, comprometimento total com o cliente, educação continuada e respeito irrestrito às normas regulatórias vigentes.'
    }
  ];

  return (
    <Layout>
      {/* Seção de Abertura */}
      <section className="gradient-hero-bg py-24 text-white">
        <div className="container mx-auto px-4 text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-6xl font-bold mb-6"
          >
            Conheça a <span className="text-shimmer">Benefícios Premix</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15 }}
            className="text-xl text-white/80 max-w-3xl mx-auto font-light"
          >
            Saiba mais sobre nosso time de especialistas focados em direcionar você 
            para as melhores vantagens e experiências disponíveis.
          </motion.p>
        </div>
      </section>

      {/* Apresentação Institucional */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <img 
                src={teamBusiness} 
                alt="Equipe Benefícios Premix" 
                className="rounded-3xl shadow-2xl w-full"
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl md:text-5xl font-bold text-primary mb-8">
                Nossa História
              </h2>
              <p className="text-muted-foreground text-lg leading-relaxed mb-6">
                A Benefícios Premix nasceu com o objetivo de democratizar o acesso à 
                informação sobre programas de vantagens e benefícios exclusivos. 
                Nossa atuação é puramente educacional e informativa.
              </p>
              <p className="text-muted-foreground text-lg leading-relaxed mb-6">
                Não operamos como instituição financeira nem realizamos qualquer tipo 
                de intermediação bancária. Nosso foco é auxiliar clientes a 
                compreenderem melhor as oportunidades do mercado de benefícios.
              </p>
              <p className="text-muted-foreground text-lg leading-relaxed">
                Com profissionais experientes e metodologia estruturada, oferecemos 
                assessoria personalizada para que você tome decisões embasadas sobre 
                programas de recompensas e experiências diferenciadas.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Pilares Institucionais */}
      <section className="py-24 bg-muted">
        <div className="container mx-auto px-4">
          <motion.h2 
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="heading-decorated"
          >
            Nossos Pilares
          </motion.h2>
          
          <div className="grid md:grid-cols-3 gap-10 mt-16">
            {pilares.map((pilar, idx) => (
              <motion.div
                key={pilar.titulo}
                initial={{ opacity: 0, y: 35 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.12 }}
                className="bg-card rounded-2xl p-10 text-center shadow-md hover:shadow-xl transition-shadow"
              >
                <div className="w-24 h-24 mx-auto mb-8 rounded-2xl gradient-silver flex items-center justify-center">
                  <pilar.icon className="w-12 h-12 text-primary" />
                </div>
                <h3 className="text-3xl font-bold text-primary mb-5">
                  {pilar.titulo}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {pilar.texto}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Diferenciais */}
      <section className="py-24 gradient-main">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-5xl mx-auto text-center text-white"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-8">
              Por que a Benefícios Premix?
            </h2>
            <p className="text-white/80 text-lg leading-relaxed mb-14">
              Proporcionamos uma abordagem honesta e educacional, concentrada em 
              ajudá-lo a identificar e aproveitar os melhores programas de vantagens.
            </p>
            
            <div className="grid md:grid-cols-3 gap-10">
              <div className="text-center">
                <Trophy className="w-14 h-14 mx-auto mb-5" />
                <h3 className="font-bold text-xl mb-3">Especialização</h3>
                <p className="text-white/70 text-sm">
                  Anos de vivência em curadoria de benefícios e programas premium
                </p>
              </div>
              <div className="text-center">
                <Users className="w-14 h-14 mx-auto mb-5" />
                <h3 className="font-bold text-xl mb-3">Proximidade</h3>
                <p className="text-white/70 text-sm">
                  Atendimento humanizado e adaptado às suas necessidades
                </p>
              </div>
              <div className="text-center">
                <TrendingUp className="w-14 h-14 mx-auto mb-5" />
                <h3 className="font-bold text-xl mb-3">Atualidade</h3>
                <p className="text-white/70 text-sm">
                  Conteúdo constantemente revisado e alinhado ao mercado
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Chamada Final */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-primary mb-8">
              Preparado para Explorar suas Vantagens?
            </h2>
            <p className="text-muted-foreground text-lg max-w-3xl mx-auto mb-10">
              Conecte-se conosco e descubra como podemos orientá-lo 
              no universo dos benefícios exclusivos.
            </p>
            <Link to="/contato" className="btn-main text-lg">
              Conversar com a Equipe
              <ChevronRight className="w-5 h-5 ml-2" />
            </Link>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default About;