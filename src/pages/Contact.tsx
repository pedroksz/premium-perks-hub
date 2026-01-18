import { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Phone, 
  Mail, 
  MapPin, 
  Clock, 
  Send,
  BadgeCheck 
} from 'lucide-react';
import Layout from '@/components/layout/Layout';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';

const Contact = () => {
  const { toast } = useToast();
  const [enviando, setEnviando] = useState(false);
  const [dados, setDados] = useState({
    nome: '',
    email: '',
    telefone: '',
    assunto: '',
    mensagem: ''
  });

  const processarEnvio = async (e: React.FormEvent) => {
    e.preventDefault();
    setEnviando(true);
    
    await new Promise(resolve => setTimeout(resolve, 1800));
    
    toast({
      title: "Mensagem recebida!",
      description: "Retornaremos em breve.",
    });
    
    setDados({ nome: '', email: '', telefone: '', assunto: '', mensagem: '' });
    setEnviando(false);
  };

  const dadosContato = [
    {
      icon: MapPin,
      label: 'Localização',
      valor: 'Av General Couto Magalhaes 485\nQuadra26 Lote 04 - VI Maua, GO\nCEP: 74.323-240'
    },
    {
      icon: Phone,
      label: 'Telefone',
      valor: '(62) 9152-9613',
      url: 'tel:+5562915296613'
    },
    {
      icon: Mail,
      label: 'Email',
      valor: 'contato@beneficiospremix.com',
      url: 'mailto:contato@beneficiospremix.com'
    },
    {
      icon: Clock,
      label: 'Expediente',
      valor: 'Segunda a Sexta: 09h às 18h'
    }
  ];

  return (
    <Layout>
      {/* Cabeçalho */}
      <section className="gradient-hero-bg py-24 text-white">
        <div className="container mx-auto px-4 text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-6xl font-bold mb-6"
          >
            Fale <span className="text-shimmer">Conosco</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15 }}
            className="text-xl text-white/80 max-w-3xl mx-auto font-light"
          >
            Estamos prontos para esclarecer suas dúvidas sobre programas de vantagens 
            e experiências diferenciadas.
          </motion.p>
        </div>
      </section>

      {/* Área Principal */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Formulário */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <div className="bg-card rounded-3xl shadow-xl p-10">
                <h2 className="text-3xl font-bold text-primary mb-8">
                  Envie sua Solicitação
                </h2>
                
                <form onSubmit={processarEnvio} className="space-y-7">
                  <div className="grid md:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-sm font-semibold text-foreground mb-3">
                        Seu Nome *
                      </label>
                      <Input
                        required
                        value={dados.nome}
                        onChange={(e) => setDados({ ...dados, nome: e.target.value })}
                        placeholder="Como podemos chamá-lo?"
                        className="w-full h-12 rounded-xl"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-foreground mb-3">
                        Seu Email *
                      </label>
                      <Input
                        required
                        type="email"
                        value={dados.email}
                        onChange={(e) => setDados({ ...dados, email: e.target.value })}
                        placeholder="email@exemplo.com"
                        className="w-full h-12 rounded-xl"
                      />
                    </div>
                  </div>
                  
                  <div className="grid md:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-sm font-semibold text-foreground mb-3">
                        Telefone
                      </label>
                      <Input
                        type="tel"
                        value={dados.telefone}
                        onChange={(e) => setDados({ ...dados, telefone: e.target.value })}
                        placeholder="(00) 00000-0000"
                        className="w-full h-12 rounded-xl"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-foreground mb-3">
                        Assunto *
                      </label>
                      <Input
                        required
                        value={dados.assunto}
                        onChange={(e) => setDados({ ...dados, assunto: e.target.value })}
                        placeholder="Do que se trata?"
                        className="w-full h-12 rounded-xl"
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-semibold text-foreground mb-3">
                      Sua Mensagem *
                    </label>
                    <Textarea
                      required
                      value={dados.mensagem}
                      onChange={(e) => setDados({ ...dados, mensagem: e.target.value })}
                      placeholder="Descreva como podemos ajudar..."
                      rows={6}
                      className="w-full resize-none rounded-xl"
                    />
                  </div>
                  
                  <Button 
                    type="submit" 
                    className="w-full btn-main h-14 text-base"
                    disabled={enviando}
                  >
                    {enviando ? (
                      'Processando...'
                    ) : (
                      <>
                        Enviar Solicitação
                        <Send className="w-5 h-5 ml-3" />
                      </>
                    )}
                  </Button>
                </form>
              </div>
            </motion.div>

            {/* Informações de Contato */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-7"
            >
              <h2 className="text-3xl font-bold text-primary mb-8">
                Canais de Atendimento
              </h2>
              
              {dadosContato.map((item) => (
                <div 
                  key={item.label}
                  className="bg-card rounded-2xl p-8 shadow-md flex items-start gap-5"
                >
                  <div className="w-14 h-14 rounded-2xl gradient-main flex items-center justify-center flex-shrink-0">
                    <item.icon className="w-7 h-7 text-white" />
                  </div>
                  <div>
                    <h3 className="font-bold text-foreground mb-2 text-lg">
                      {item.label}
                    </h3>
                    {item.url ? (
                      <a 
                        href={item.url} 
                        className="text-muted-foreground hover:text-primary transition-colors whitespace-pre-line"
                      >
                        {item.valor}
                      </a>
                    ) : (
                      <p className="text-muted-foreground whitespace-pre-line">
                        {item.valor}
                      </p>
                    )}
                  </div>
                </div>
              ))}

              {/* Aviso */}
              <div className="data-box mt-10">
                <h3 className="font-bold text-primary mb-3 flex items-center gap-3 text-lg">
                  <BadgeCheck className="w-6 h-6" />
                  Informação Relevante
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Somos uma empresa de assessoria educacional e informativa. 
                  Não operamos intermediação financeira ou comercialização de produtos bancários. 
                  Nosso escopo restringe-se à orientação sobre programas de vantagens.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Contact;