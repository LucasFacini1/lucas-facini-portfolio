import { motion } from 'framer-motion';
import { Code2, GraduationCap, MapPin, Coffee, Heart } from 'lucide-react';
import { skills } from '../data/skills';
import { useInView } from '../hooks/useInView';

const About = () => {
  const frontendSkills = skills.filter(skill => skill.category === 'frontend');
  const backendSkills = skills.filter(skill => skill.category === 'backend');
  const toolsSkills = skills.filter(skill => skill.category === 'tools' || skill.category === 'design');
  const { ref, isInView } = useInView();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: 'easeOut'
      }
    }
  };

  const SkillBar = ({ skill }: { skill: typeof skills[0] }) => (
    <motion.div
      variants={itemVariants}
      className="space-y-2"
    >
      <div className="flex justify-between items-center">
        <span className="font-inter font-medium text-white">{skill.name}</span>
        <span className="text-sm text-white/60">{skill.level}/5</span>
      </div>
      <div className="w-full bg-dark-700 rounded-full h-2">
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: `${(skill.level / 5) * 100}%` }}
          transition={{ duration: 1, delay: 0.2 }}
          viewport={{ once: true }}
          className="h-2 bg-gradient-to-r from-neon-purple to-neon-blue rounded-full"
        />
      </div>
    </motion.div>
  );

  return (
    <section id="about" className="py-20 lg:py-32" ref={ref}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-orbitron font-bold mb-6">
            <span className="text-white">Sobre</span>
            <span className="neon-text"> Mim</span>
          </h2>
          <p className="text-lg text-white/80 font-inter max-w-2xl mx-auto">
            Conheça um pouco mais sobre minha jornada como desenvolvedor e 
            as tecnologias que domino para criar soluções incríveis.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Left Column - About Text */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            {/* Profile Card */}
            <div className="card-neon">
              <div className="flex items-center space-x-4 mb-6">
                <div className="w-16 h-16 bg-gradient-to-br from-neon-purple to-neon-blue rounded-full flex items-center justify-center">
                  <Code2 className="w-8 h-8 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-orbitron font-bold text-white">Lucas Facini</h3>
                  <p className="text-neon-purple font-inter">Desenvolvedor Full-Stack</p>
                </div>
              </div>

              <div className="space-y-4 text-white/80 font-inter leading-relaxed">
                <p>
                  Sou um desenvolvedor apaixonado por tecnologia e inovação, especializado em 
                  criar soluções web modernas e escaláveis. Com experiência em desenvolvimento 
                  full-stack, foco em entregar produtos de alta qualidade que agregam valor real 
                  aos negócios.
                </p>
                <p>
                  Atualmente estou cursando Engenharia de Software na PUC Campinas e trabalho 
                  como freelancer, ajudando empresas a transformar suas ideias em realidade 
                  digital através de aplicações web responsivas e performáticas.
                </p>
                <p>
                  Minha paixão está em resolver problemas complexos através de código limpo, 
                  arquiteturas bem estruturadas e as mais modernas tecnologias do mercado.
                </p>
              </div>
            </div>

            {/* Info Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                { icon: GraduationCap, label: 'Educação', value: 'PUC Campinas' },
                { icon: MapPin, label: 'Localização', value: 'Campinas - SP' },
                { icon: Coffee, label: 'Especialidade', value: 'Full-Stack' },
                { icon: Heart, label: 'Paixão', value: 'Inovação' },
              ].map((info, index) => (
                <motion.div
                  key={info.label}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="card-neon text-center"
                >
                  <info.icon className="w-8 h-8 text-neon-purple mx-auto mb-2" />
                  <h4 className="font-inter font-semibold text-white mb-1">{info.label}</h4>
                  <p className="text-white/60 text-sm">{info.value}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right Column - Skills */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            {/* Frontend Skills */}
            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="card-neon"
            >
              <h3 className="text-xl font-orbitron font-bold text-white mb-6 flex items-center">
                <div className="w-2 h-2 bg-neon-purple rounded-full mr-3" />
                Frontend
              </h3>
              <div className="space-y-4">
                {frontendSkills.map((skill) => (
                  <SkillBar key={skill.name} skill={skill} />
                ))}
              </div>
            </motion.div>

            {/* Backend Skills */}
            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="card-neon"
            >
              <h3 className="text-xl font-orbitron font-bold text-white mb-6 flex items-center">
                <div className="w-2 h-2 bg-neon-blue rounded-full mr-3" />
                Backend
              </h3>
              <div className="space-y-4">
                {backendSkills.map((skill) => (
                  <SkillBar key={skill.name} skill={skill} />
                ))}
              </div>
            </motion.div>

            {/* Tools & Design */}
            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="card-neon"
            >
              <h3 className="text-xl font-orbitron font-bold text-white mb-6 flex items-center">
                <div className="w-2 h-2 bg-neon-pink rounded-full mr-3" />
                Ferramentas & Design
              </h3>
              <div className="space-y-4">
                {toolsSkills.map((skill) => (
                  <SkillBar key={skill.name} skill={skill} />
                ))}
              </div>
            </motion.div>
          </motion.div>
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <div className="card-neon max-w-2xl mx-auto">
            <h3 className="text-2xl font-orbitron font-bold text-white mb-4">
              Pronto para trabalhar juntos?
            </h3>
            <p className="text-white/80 font-inter mb-6">
              Vamos criar algo incrível! Entre em contato e vamos discutir como posso 
              ajudar a transformar sua ideia em realidade.
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => {
                const element = document.getElementById('contact');
                if (element) {
                  element.scrollIntoView({ behavior: 'smooth' });
                }
              }}
              className="btn-neon text-lg px-8 py-4"
            >
              Vamos Conversar
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
