import { useState } from 'react';
import { motion } from 'framer-motion';
import { useForm } from 'react-hook-form';
import { Mail, MapPin, Github, Linkedin, Send, CheckCircle } from 'lucide-react';
import { ContactForm } from '../types';
import { useInView } from '../hooks/useInView';

const Contact = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [hasError, setHasError] = useState(false);
  const { ref, isInView } = useInView();

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<ContactForm>();

  const onSubmit = async (data: ContactForm) => {
    setIsSubmitting(true);
    setHasError(false);
    
    try {
      const response = await fetch('https://formspree.io/f/xyzdrrkv', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: data.name,
          email: data.email,
          message: data.message,
          _subject: 'Nova mensagem do portfólio - Lucas Facini',
        }),
      });

      if (response.ok) {
        setIsSubmitted(true);
        reset();
        setTimeout(() => setIsSubmitted(false), 5000);
      } else {
        throw new Error('Erro ao enviar mensagem');
      }
      
    } catch (error) {
      setHasError(true);
      setTimeout(() => setHasError(false), 5000);
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactInfo = [
    {
      icon: Mail,
      label: 'Email',
      value: 'lucasfacinidev@hotmail.com',
      href: 'mailto:lucasfacinidev@hotmail.com',
    },
    {
      icon: MapPin,
      label: 'Localização',
      value: 'Campinas - SP, Brasil',
      href: '#',
    },
  ];

  const socialLinks = [
    {
      icon: Github,
      label: 'GitHub',
      href: 'https://github.com/LucasFacini1',
      color: 'text-white hover:text-neon-purple',
    },
    {
      icon: Linkedin,
      label: 'LinkedIn',
      href: 'https://www.linkedin.com/in/lucas-facini-739056328/',
      color: 'text-white hover:text-neon-blue',
    },
  ];

  return (
    <section id="contact" className="py-20 lg:py-32" ref={ref}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-orbitron font-bold mb-6">
            <span className="neon-text">Vamos</span>
            <span className="text-white"> Conversar</span>
          </h2>
          <p className="text-lg text-white/80 font-inter max-w-2xl mx-auto">
            Pronto para transformar sua ideia em realidade? Entre em contato e vamos 
            discutir como posso ajudar seu projeto a decolar.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div className="card-neon">
              <h3 className="text-2xl font-orbitron font-bold text-white mb-6">
                Informações de Contato
              </h3>
              <div className="space-y-6">
                {contactInfo.map((info, index) => (
                  <motion.a
                    key={info.label}
                    href={info.href}
                    target={info.href.startsWith('http') ? '_blank' : undefined}
                    rel={info.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    viewport={{ once: true }}
                    whileHover={{ x: 10 }}
                    className="flex items-center space-x-4 p-4 rounded-lg hover:bg-dark-700/30 transition-colors duration-300 group"
                  >
                    <div className="w-12 h-12 bg-neon-purple/20 border border-neon-purple/30 rounded-lg flex items-center justify-center group-hover:border-neon-purple/60 transition-colors duration-300">
                      <info.icon className="w-6 h-6 text-neon-purple" />
                    </div>
                    <div>
                      <h4 className="font-inter font-semibold text-white">{info.label}</h4>
                      <p className="text-white/60">{info.value}</p>
                    </div>
                  </motion.a>
                ))}
              </div>
            </div>

            {/* Social Links */}
            <div className="card-neon">
              <h3 className="text-2xl font-orbitron font-bold text-white mb-6">
                Redes Sociais
              </h3>
              <div className="flex space-x-4">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ delay: index * 0.1 }}
                    viewport={{ once: true }}
                    whileHover={{ scale: 1.1, y: -5 }}
                    whileTap={{ scale: 0.9 }}
                    className={`w-12 h-12 bg-dark-700/50 border border-neon-purple/30 rounded-lg flex items-center justify-center transition-all duration-300 hover:border-neon-purple/60 hover:bg-neon-purple/10 ${social.color}`}
                  >
                    <social.icon className="w-6 h-6" />
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="card-neon"
          >
            <h3 className="text-2xl font-orbitron font-bold text-white mb-6">
              Envie uma Mensagem
            </h3>

            {isSubmitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                className="text-center py-8"
              >
                <CheckCircle className="w-16 h-16 text-green-400 mx-auto mb-4" />
                <h4 className="text-xl font-orbitron font-bold text-white mb-2">
                  Mensagem Enviada com Sucesso!
                </h4>
                <p className="text-white/80 font-inter mb-4">
                  Obrigado pelo contato! Recebi sua mensagem e retornarei em breve.
                </p>
                <p className="text-white/60 font-inter text-sm">
                  Você receberá uma cópia da mensagem no seu email.
                </p>
              </motion.div>
            ) : hasError ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                className="text-center py-8"
              >
                <div className="w-16 h-16 bg-red-500/20 border border-red-500/50 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <span className="text-red-400 text-2xl">!</span>
                </div>
                <h4 className="text-xl font-orbitron font-bold text-white mb-2">
                  Erro ao Enviar Mensagem
                </h4>
                <p className="text-white/80 font-inter mb-4">
                  Ocorreu um erro ao enviar sua mensagem. Tente novamente.
                </p>
                <button
                  onClick={() => setHasError(false)}
                  className="text-neon-purple hover:text-neon-purple/80 font-inter text-sm underline"
                >
                  Tentar Novamente
                </button>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                {/* Name Field */}
                <div>
                  <label htmlFor="name" className="block text-sm font-inter font-medium text-white mb-2">
                    Nome *
                  </label>
                  <input
                    {...register('name', { required: 'Nome é obrigatório' })}
                    type="text"
                    id="name"
                    className="w-full px-4 py-3 bg-dark-700/50 border border-neon-purple/30 rounded-lg text-white placeholder-white/40 focus:border-neon-purple/60 focus:outline-none focus:ring-2 focus:ring-neon-purple/20 transition-all duration-300"
                    placeholder="Seu nome completo"
                  />
                  {errors.name && (
                    <p className="mt-1 text-sm text-red-400">{errors.name.message}</p>
                  )}
                </div>

                {/* Email Field */}
                <div>
                  <label htmlFor="email" className="block text-sm font-inter font-medium text-white mb-2">
                    Email *
                  </label>
                  <input
                    {...register('email', {
                      required: 'Email é obrigatório',
                      pattern: {
                        value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                        message: 'Email inválido'
                      }
                    })}
                    type="email"
                    id="email"
                    className="w-full px-4 py-3 bg-dark-700/50 border border-neon-purple/30 rounded-lg text-white placeholder-white/40 focus:border-neon-purple/60 focus:outline-none focus:ring-2 focus:ring-neon-purple/20 transition-all duration-300"
                    placeholder="seu@email.com"
                  />
                  {errors.email && (
                    <p className="mt-1 text-sm text-red-400">{errors.email.message}</p>
                  )}
                </div>

                {/* Message Field */}
                <div>
                  <label htmlFor="message" className="block text-sm font-inter font-medium text-white mb-2">
                    Mensagem *
                  </label>
                  <textarea
                    {...register('message', { required: 'Mensagem é obrigatória' })}
                    id="message"
                    rows={5}
                    className="w-full px-4 py-3 bg-dark-700/50 border border-neon-purple/30 rounded-lg text-white placeholder-white/40 focus:border-neon-purple/60 focus:outline-none focus:ring-2 focus:ring-neon-purple/20 transition-all duration-300 resize-none"
                    placeholder="Conte-me sobre seu projeto..."
                  />
                  {errors.message && (
                    <p className="mt-1 text-sm text-red-400">{errors.message.message}</p>
                  )}
                </div>

                {/* Submit Button */}
                <motion.button
                  type="submit"
                  disabled={isSubmitting}
                  whileHover={{ scale: isSubmitting ? 1 : 1.05 }}
                  whileTap={{ scale: isSubmitting ? 1 : 0.95 }}
                  className="w-full btn-neon text-lg py-4 flex items-center justify-center space-x-2 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-5 h-5 border-2 border-neon-purple border-t-transparent rounded-full animate-spin" />
                      <span>Enviando...</span>
                    </>
                  ) : (
                    <>
                      <Send className="w-5 h-5" />
                      <span>Enviar Mensagem</span>
                    </>
                  )}
                </motion.button>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
