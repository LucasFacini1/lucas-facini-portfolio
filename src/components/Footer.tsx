import { motion } from 'framer-motion';
import { Code2, Github, Linkedin, Mail } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      icon: Github,
      href: 'https://github.com/LucasFacini1',
      label: 'GitHub',
    },
    {
      icon: Linkedin,
      href: 'https://www.linkedin.com/in/lucas-facini-739056328/',
      label: 'LinkedIn',
    },
    {
      icon: Mail,
      href: 'mailto:lucas.facini@email.com',
      label: 'Email',
    },
  ];

  const quickLinks = [
    { label: 'Início', href: '#home' },
    { label: 'Projetos', href: '#projects' },
    { label: 'Sobre', href: '#about' },
    { label: 'Contato', href: '#contact' },
  ];

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-dark-800/50 border-t border-neon-purple/20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="lg:col-span-2"
          >
            <div className="flex items-center space-x-2 mb-4">
              <Code2 className="w-8 h-8 text-neon-purple" />
              <span className="font-orbitron font-bold text-xl neon-text">
                Lucas Facini
              </span>
            </div>
            <p className="text-white/80 font-inter leading-relaxed mb-6 max-w-md">
              Desenvolvedor Full-Stack apaixonado por criar experiências digitais 
              únicas e soluções web inovadoras que impulsionam negócios.
            </p>
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
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.9 }}
                  className="w-10 h-10 bg-dark-700/50 border border-neon-purple/30 rounded-lg flex items-center justify-center hover:border-neon-purple/60 hover:bg-neon-purple/10 transition-all duration-300 group"
                >
                  <social.icon className="w-5 h-5 text-white/80 group-hover:text-neon-purple transition-colors duration-300" />
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <h3 className="font-orbitron font-bold text-white mb-4">Links Rápidos</h3>
            <ul className="space-y-2">
              {quickLinks.map((link, index) => (
                <motion.li
                  key={link.label}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.1 + index * 0.05 }}
                  viewport={{ once: true }}
                >
                  <button
                    onClick={() => scrollToSection(link.href.replace('#', ''))}
                    className="text-white/80 hover:text-neon-purple transition-colors duration-300 font-inter"
                  >
                    {link.label}
                  </button>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h3 className="font-orbitron font-bold text-white mb-4">Contato</h3>
            <div className="space-y-2 text-white/80 font-inter">
              <p>Campinas - SP, Brasil</p>
              <p>lucasfacinidev@hotmail.com</p>
            </div>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="border-t border-neon-purple/20 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center"
        >
          <p className="text-white/60 font-inter text-sm mb-4 md:mb-0">
            © {currentYear} Lucas Facini. Todos os direitos reservados.
          </p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
