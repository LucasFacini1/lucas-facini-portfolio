import { motion } from 'framer-motion';
import { ChevronDown, Code, Zap, Rocket } from 'lucide-react';

const Hero = () => {
  const scrollToProjects = () => {
    const element = document.getElementById('projects');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative pt-20">
      {/* Background Grid */}
      <div className="absolute inset-0 grid-bg opacity-10" />
      
      {/* Floating Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute top-1/4 left-1/4 w-32 h-32 border border-neon-purple/20 rounded-full"
          animate={{ rotate: 360 }}
          transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
        />
        <motion.div
          className="absolute top-3/4 right-1/4 w-24 h-24 border border-neon-blue/20 rounded-full"
          animate={{ rotate: -360 }}
          transition={{ duration: 15, repeat: Infinity, ease: 'linear' }}
        />
        <motion.div
          className="absolute top-1/2 left-1/6 w-16 h-16 border border-neon-pink/20 rounded-full"
          animate={{ rotate: 360 }}
          transition={{ duration: 12, repeat: Infinity, ease: 'linear' }}
        />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="max-w-4xl mx-auto"
        >
          {/* Main Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-4xl sm:text-5xl lg:text-7xl font-orbitron font-bold mb-6"
          >
            <span className="neon-text">Construo experiências</span>
            <br />
            <span className="text-white">digitais únicas</span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-lg sm:text-xl lg:text-2xl text-white/80 mb-8 font-inter max-w-2xl mx-auto leading-relaxed"
          >
            Desenvolvedor Full-Stack especializado em criar soluções web modernas, 
            responsivas e de alta performance para impulsionar seu negócio.
          </motion.p>

          {/* Skills Tags */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="flex flex-wrap justify-center gap-3 mb-12"
          >
            {['React', 'TypeScript', 'Node.js', 'Python', 'MongoDB'].map((skill, index) => (
              <motion.span
                key={skill}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.8 + index * 0.1 }}
                className="px-4 py-2 bg-dark-800/50 border border-neon-purple/30 rounded-full text-sm font-inter font-medium text-neon-purple hover:border-neon-purple/60 hover:bg-neon-purple/10 transition-all duration-300"
              >
                {skill}
              </motion.span>
            ))}
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <motion.button
              whileHover={{ scale: 1.05, boxShadow: '0 0 30px rgba(139, 92, 246, 0.5)' }}
              whileTap={{ scale: 0.95 }}
              onClick={scrollToContact}
              className="btn-neon text-lg px-8 py-4"
            >
              <Rocket className="w-5 h-5 mr-2 inline" />
              Contrate-me
            </motion.button>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={scrollToProjects}
              className="flex items-center text-white/80 hover:text-neon-purple transition-colors duration-300 font-inter font-medium"
            >
              <Code className="w-5 h-5 mr-2" />
              Ver Projetos
            </motion.button>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.2 }}
            className="grid grid-cols-1 sm:grid-cols-3 gap-8 mt-16 max-w-2xl mx-auto"
          >
            {[
              { icon: Code, label: 'Projetos', value: '10+' },
              { icon: Zap, label: 'Tecnologias', value: '15+' },
              { icon: Rocket, label: 'Experiência', value: '2+ anos' },
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.2 + index * 0.1 }}
                className="text-center"
              >
                <stat.icon className="w-8 h-8 text-neon-purple mx-auto mb-2" />
                <div className="text-2xl font-orbitron font-bold text-white mb-1">
                  {stat.value}
                </div>
                <div className="text-sm text-white/60 font-inter">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <motion.button
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          onClick={scrollToProjects}
          className="text-white/60 hover:text-neon-purple transition-colors duration-300"
        >
          <ChevronDown className="w-6 h-6" />
        </motion.button>
      </motion.div>
    </section>
  );
};

export default Hero;
