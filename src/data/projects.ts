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
    imageUrl: '/lucas-facini-portfolio/images/projects/bistro-elegance.png',
    featured: true,
    createdAt: new Date('2024-09-10'),
    updatedAt: new Date('2024-10-15'),
  },
  // Adicione novos projetos aqui conforme forem sendo criados
  // {
  //   id: 'novo-projeto',
  //   title: 'Novo Projeto',
  //   description: 'Descrição do projeto.',
  //   longDescription: 'Descrição detalhada do projeto.',
  //   technologies: ['React', 'TypeScript'],
  //   githubUrl: 'https://github.com/LucasFacini1/novo-projeto',
  //   liveUrl: 'https://lucasfacini1.github.io/novo-projeto/',
  //   imageUrl: '/api/placeholder/600/400',
  //   featured: true,
  //   createdAt: new Date('2024-01-01'),
  //   updatedAt: new Date('2024-01-01'),
  // },
];
