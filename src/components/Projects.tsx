import { motion } from 'framer-motion';
import { ExternalLink, Github, Calendar, Star } from 'lucide-react';
import { projects } from '../data/projects';
import { format } from 'date-fns';
import ptBR from 'date-fns/locale/pt-BR';
import { useInView } from '../hooks/useInView';

const Projects = () => {
  const featuredProjects = projects.filter(project => project.featured);
  const otherProjects = projects.filter(project => !project.featured);
  const { ref, isInView } = useInView();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: 'easeOut'
      }
    }
  };

  const ProjectCard = ({ project, isFeatured = false }: { project: typeof projects[0], isFeatured?: boolean }) => (
    <motion.div
      variants={itemVariants}
      whileHover={{ y: -10, scale: 1.02 }}
      className={`card-neon group ${isFeatured ? 'lg:col-span-2' : ''}`}
    >
      {/* Project Image */}
      <div className="relative overflow-hidden rounded-lg mb-4 h-48 lg:h-56">
        {project.imageUrl ? (
          <img
            src={project.imageUrl}
            alt={project.title}
            className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
            loading="lazy"
          />
        ) : (
          <div className="w-full h-full bg-gradient-to-br from-neon-purple/20 to-neon-blue/20 flex items-center justify-center">
            <div className="text-center">
              <div className="w-16 h-16 bg-neon-purple/30 rounded-lg mx-auto mb-2 flex items-center justify-center">
                <ExternalLink className="w-8 h-8 text-neon-purple" />
              </div>
              <p className="text-white/60 text-sm">Preview em breve</p>
            </div>
          </div>
        )}
        
        {/* Overlay */}
        <div className="absolute inset-0 bg-dark-900/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center space-x-4">
          {project.githubUrl && (
            <motion.a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="p-3 bg-neon-purple/20 border border-neon-purple/50 rounded-full hover:bg-neon-purple/30 transition-colors duration-300"
            >
              <Github className="w-6 h-6 text-neon-purple" />
            </motion.a>
          )}
          {project.liveUrl && (
            <motion.a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="p-3 bg-neon-blue/20 border border-neon-blue/50 rounded-full hover:bg-neon-blue/30 transition-colors duration-300"
            >
              <ExternalLink className="w-6 h-6 text-neon-blue" />
            </motion.a>
          )}
        </div>

        {/* Featured Badge */}
        {isFeatured && (
          <div className="absolute top-4 right-4">
            <div className="flex items-center space-x-1 px-2 py-1 bg-neon-purple/20 border border-neon-purple/50 rounded-full">
              <Star className="w-3 h-3 text-neon-purple" />
              <span className="text-xs font-inter font-medium text-neon-purple">Destaque</span>
            </div>
          </div>
        )}
      </div>

      {/* Project Info */}
      <div className="space-y-3">
        <div className="flex items-start justify-between">
          <h3 className="text-xl font-orbitron font-bold text-white group-hover:text-neon-purple transition-colors duration-300">
            {project.title}
          </h3>
          <div className="flex items-center space-x-1 text-white/60 text-sm">
            <Calendar className="w-4 h-4" />
            <span>{format(project.updatedAt, 'MMM yyyy', { locale: ptBR })}</span>
          </div>
        </div>

        <p className="text-white/80 font-inter leading-relaxed">
          {project.description}
        </p>

        {/* Technologies */}
        <div className="flex flex-wrap gap-2">
          {project.technologies.map((tech) => (
            <span
              key={tech}
              className="px-2 py-1 bg-dark-700/50 border border-neon-purple/20 rounded text-xs font-inter text-neon-purple"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Actions */}
        <div className="flex space-x-3 pt-2">
          {project.githubUrl && (
            <motion.a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center space-x-2 px-4 py-2 bg-dark-700/50 border border-neon-purple/30 rounded-lg hover:border-neon-purple/60 hover:bg-neon-purple/10 transition-all duration-300 text-sm font-inter font-medium text-white"
            >
              <Github className="w-4 h-4" />
              <span>Código</span>
            </motion.a>
          )}
          {project.liveUrl && (
            <motion.a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center space-x-2 px-4 py-2 bg-neon-purple/20 border border-neon-purple/50 rounded-lg hover:bg-neon-purple/30 transition-all duration-300 text-sm font-inter font-medium text-neon-purple"
            >
              <ExternalLink className="w-4 h-4" />
              <span>Demo</span>
            </motion.a>
          )}
        </div>
      </div>
    </motion.div>
  );

  return (
    <section id="projects" className="py-20 lg:py-32" ref={ref}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-orbitron font-bold mb-6">
            <span className="neon-text">Projetos</span>
            <span className="text-white"> em Destaque</span>
          </h2>
          <p className="text-lg text-white/80 font-inter max-w-2xl mx-auto">
            Explore alguns dos meus projetos mais recentes e inovadores, 
            desenvolvidos com as mais modernas tecnologias web.
          </p>
        </motion.div>

        {/* Featured Projects */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="flex justify-center mb-16"
        >
          <div className="max-w-2xl w-full">
            {featuredProjects.map((project) => (
              <ProjectCard key={project.id} project={project} isFeatured={true} />
            ))}
          </div>
        </motion.div>

        {/* Other Projects - Hidden for now since we only have one project */}
        {otherProjects.length > 0 && (
          <>
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h3 className="text-2xl sm:text-3xl font-orbitron font-bold mb-4">
                <span className="text-white">Outros</span>
                <span className="neon-text"> Projetos</span>
              </h3>
            </motion.div>

            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
            >
              {otherProjects.map((project) => (
                <ProjectCard key={project.id} project={project} />
              ))}
            </motion.div>
          </>
        )}

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <motion.a
            href="https://github.com/LucasFacini1"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center space-x-2 btn-neon text-lg px-8 py-4"
          >
            <Github className="w-5 h-5" />
            <span>Ver Todos no GitHub</span>
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
