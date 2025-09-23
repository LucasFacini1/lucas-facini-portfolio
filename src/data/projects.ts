import { Project } from '../types';

export const projects: Project[] = [
  {
    id: 'bistro-elegance',
    title: 'Bistro Elegance',
    description: 'Website elegante para restaurante com sistema de reservas e cardápio digital.',
    longDescription: 'Plataforma completa para restaurante incluindo sistema de reservas online, cardápio interativo, galeria de fotos e integração com redes sociais. Design responsivo e otimizado para conversão.',
    technologies: ['TypeScript', 'React', 'Tailwind CSS', 'Node.js', 'MongoDB'],
    githubUrl: 'https://github.com/LucasFacini1/bistro-elegance',
    liveUrl: 'https://lucasfacini1.github.io/bistro-elegance/',
    imageUrl: '/images/projects/bistro-elegance.png',
    featured: true,
    createdAt: new Date('2024-09-10'),
    updatedAt: new Date('2024-10-15'),
  },
  {
    id: 'clinica-odontologica',
    title: 'Clínica Odontológica',
    description: 'Website moderno para clínica odontológica com design responsivo e animações fluidas.',
    longDescription: 'Plataforma web completa para clínica odontológica com design moderno, seções informativas sobre serviços, equipe médica e sistema de contato. Interface intuitiva e otimizada para conversão de pacientes.',
    technologies: ['React 18', 'TypeScript', 'Tailwind CSS', 'Framer Motion', 'Lucide React'],
    githubUrl: 'https://github.com/LucasFacini1/clinica-odontologica',
    liveUrl: 'https://lucasfacini1.github.io/clinica-odontologica/',
    imageUrl: '/images/projects/clinica-odontologica.png',
    featured: true,
    createdAt: new Date('2024-11-01'),
    updatedAt: new Date('2024-12-15'),
  },
];
