import { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Phone, 
  Mail, 
  MapPin, 
  Clock, 
  Send,
  Shield 
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
      title: "Mensagem enviada!",
      description: "Retornaremos em breve.",
    });
    
    setFormData({ name: '', email: '', phone: '', subject: '', message: '' });
    setSubmitting(false);
  };

  const contactInfo = [
    {
      icon: MapPin,
      title: 'Endereço',
      content: 'Av Prfa Izoraida Marques Peres, 401\nQuiosq Esp 37 QM0T - Sorocaba, SP\nCEP: 18.047-900'
    },
    {
      icon: Phone,
      title: 'Telefone',
      content: '(19) 8102-0844',
      href: 'tel:+5519810200844'
    },
    {
      icon: Mail,
      title: 'Email',
      content: 'contato@beneficiosamx.com',
      href: 'mailto:contato@beneficiosamx.com'
    },
    {
      icon: Clock,
      title: 'Horário',
      content: 'Segunda a Sexta: 09h às 18h'
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
            Entre em <span className="text-gold-shine">Contato</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-lg text-white/75 max-w-2xl mx-auto font-light"
          >
            Estamos disponíveis para esclarecer suas dúvidas sobre 
            programas de vantagens e experiências exclusivas.
          </motion.p>
        </div>
      </section>

      {/* Content */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Form */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <div className="bg-card rounded-2xl shadow-xl p-8">
                <h2 className="text-2xl font-bold text-primary mb-6">
                  Envie sua Mensagem
                </h2>
                
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-semibold text-foreground mb-2">
                        Nome *
                      </label>
                      <Input
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="Seu nome completo"
                        className="w-full h-11 rounded-lg"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-foreground mb-2">
                        Email *
                      </label>
                      <Input
                        required
                        type="email"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="seu@email.com"
                        className="w-full h-11 rounded-lg"
                      />
                    </div>
                  </div>
                  
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-semibold text-foreground mb-2">
                        Telefone
                      </label>
                      <Input
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        placeholder="(00) 00000-0000"
                        className="w-full h-11 rounded-lg"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-foreground mb-2">
                        Assunto *
                      </label>
                      <Input
                        required
                        value={formData.subject}
                        onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                        placeholder="Qual o assunto?"
                        className="w-full h-11 rounded-lg"
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-semibold text-foreground mb-2">
                      Mensagem *
                    </label>
                    <Textarea
                      required
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Como podemos ajudá-lo?"
                      rows={5}
                      className="w-full resize-none rounded-lg"
                    />
                  </div>
                  
                  <Button 
                    type="submit" 
                    className="w-full btn-gold h-12 text-base"
                    disabled={submitting}
                  >
                    {submitting ? (
                      'Enviando...'
                    ) : (
                      <>
                        Enviar Mensagem
                        <Send className="w-5 h-5 ml-2" />
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
              className="space-y-5"
            >
              <h2 className="text-2xl font-bold text-primary mb-6">
                Informações de Contato
              </h2>
              
              {contactInfo.map((item) => (
                <div 
                  key={item.title}
                  className="bg-card rounded-xl p-6 shadow-md flex items-start gap-4"
                >
                  <div className="w-12 h-12 rounded-lg gradient-navy flex items-center justify-center flex-shrink-0">
                    <item.icon className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-bold text-foreground mb-1 text-base">
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
              <div className="highlight-box mt-8">
                <h3 className="font-bold text-primary mb-2 flex items-center gap-2 text-base">
                  <Shield className="w-5 h-5" />
                  Aviso Importante
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Somos uma empresa de assessoria educacional e consultiva. 
                  Não realizamos intermediação financeira ou comercialização de produtos bancários. 
                  Nossa atuação limita-se à orientação sobre programas de vantagens.
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
