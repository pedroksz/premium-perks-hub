import { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Phone, 
  Mail, 
  MapPin, 
  Clock, 
  Send,
  ShieldCheck
} from 'lucide-react';
import Layout from '@/components/layout/Layout';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';

const Contact = () => {
  const { toast } = useToast();
  const [submitting, setSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    toast({
      title: "Mensagem recebida!",
      description: "Entraremos em contato em breve.",
    });
    
    setFormData({ name: '', email: '', phone: '', subject: '', message: '' });
    setSubmitting(false);
  };

  const contactInfo = [
    {
      icon: MapPin,
      title: 'Localização',
      content: 'Av General Couto Magalhaes, 485\nVila Mauá, Goiânia - GO\nCEP: 74.323-240'
    },
    {
      icon: Phone,
      title: 'Telefone',
      content: '(62) 9152-9613',
      href: 'tel:+5562915296613'
    },
    {
      icon: Mail,
      title: 'Email',
      content: 'contato@beneficiosamx.com',
      href: 'mailto:contato@beneficiosamx.com'
    },
    {
      icon: Clock,
      title: 'Atendimento',
      content: 'Segunda a Sexta: 09h às 18h'
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
            Contato
          </motion.span>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.05 }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6"
          >
            Fale <span className="text-accent-shine">Conosco</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-lg text-white/70 max-w-2xl mx-auto"
          >
            Estamos prontos para orientá-lo sobre programas de 
            benefícios e experiências exclusivas.
          </motion.p>
        </div>
      </section>

      {/* Content */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-5 gap-12">
            {/* Form */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="lg:col-span-3"
            >
              <div className="bg-card rounded-3xl shadow-lg p-8 md:p-10 border border-border/30">
                <h2 className="text-2xl md:text-3xl font-bold text-primary mb-2">
                  Envie sua Mensagem
                </h2>
                <p className="text-muted-foreground mb-8">
                  Preencha o formulário e retornaremos em breve
                </p>
                
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid md:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-sm font-semibold text-foreground mb-2.5">
                        Nome completo *
                      </label>
                      <Input
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="Seu nome"
                        className="w-full h-12 rounded-xl"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-foreground mb-2.5">
                        Email *
                      </label>
                      <Input
                        required
                        type="email"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="seu@email.com"
                        className="w-full h-12 rounded-xl"
                      />
                    </div>
                  </div>
                  
                  <div className="grid md:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-sm font-semibold text-foreground mb-2.5">
                        Telefone
                      </label>
                      <Input
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        placeholder="(00) 00000-0000"
                        className="w-full h-12 rounded-xl"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-foreground mb-2.5">
                        Assunto *
                      </label>
                      <Input
                        required
                        value={formData.subject}
                        onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                        placeholder="Sobre o que deseja falar?"
                        className="w-full h-12 rounded-xl"
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-semibold text-foreground mb-2.5">
                      Mensagem *
                    </label>
                    <Textarea
                      required
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Como podemos ajudá-lo?"
                      rows={5}
                      className="w-full resize-none rounded-xl"
                    />
                  </div>
                  
                  <Button 
                    type="submit" 
                    className="w-full btn-accent h-13 text-base rounded-xl"
                    disabled={submitting}
                  >
                    {submitting ? (
                      'Enviando...'
                    ) : (
                      <>
                        Enviar Mensagem
                        <Send className="w-4 h-4 ml-2" />
                      </>
                    )}
                  </Button>
                </form>
              </div>
            </motion.div>

            {/* Info */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="lg:col-span-2 space-y-5"
            >
              <h2 className="text-2xl font-bold text-primary mb-6">
                Informações
              </h2>
              
              {contactInfo.map((item) => (
                <div 
                  key={item.title}
                  className="bg-card rounded-2xl p-5 shadow-sm flex items-start gap-4 border border-border/30"
                >
                  <div className="w-12 h-12 rounded-xl gradient-emerald flex items-center justify-center flex-shrink-0">
                    <item.icon className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h3 className="font-bold text-foreground mb-1">
                      {item.title}
                    </h3>
                    {item.href ? (
                      <a 
                        href={item.href} 
                        className="text-muted-foreground hover:text-primary transition-colors whitespace-pre-line text-sm"
                      >
                        {item.content}
                      </a>
                    ) : (
                      <p className="text-muted-foreground whitespace-pre-line text-sm">
                        {item.content}
                      </p>
                    )}
                  </div>
                </div>
              ))}

              {/* Notice */}
              <div className="highlight-panel mt-6">
                <h3 className="font-bold text-primary mb-3 flex items-center gap-2">
                  <ShieldCheck className="w-5 h-5" />
                  Importante
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  A Benefícios Premix é uma empresa de consultoria informativa. 
                  Não realizamos intermediação financeira ou comercialização de produtos bancários. 
                  Nossa atuação é exclusivamente educacional e orientativa.
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