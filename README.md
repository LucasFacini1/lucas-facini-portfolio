# 🚀 Lucas Facini - Portfólio Pessoal

Um portfólio moderno e futurista desenvolvido com React 18 + TypeScript, apresentando um design neon pixelado que destaca projetos e habilidades como desenvolvedor full-stack freelancer.

## ✨ Características

- **Design Neon Pixelado**: Interface futurista com efeitos de brilho e animações
- **Totalmente Responsivo**: Otimizado para desktop, tablet e mobile
- **Animações Fluidas**: Implementadas com Framer Motion
- **Performance Otimizada**: Construído com Vite e React 18
- **TypeScript**: Tipagem estática para maior confiabilidade
- **Formulário de Contato**: Validação com React Hook Form
- **Gerenciamento de Estado**: Zustand para controle de estado global

## 🛠️ Tecnologias Utilizadas

### Frontend
- **React 18** - Biblioteca principal
- **TypeScript** - Tipagem estática
- **Tailwind CSS** - Framework de estilos
- **Framer Motion** - Animações fluidas
- **Lucide React** - Ícones modernos

### Estado e Formulários
- **Zustand** - Gerenciamento de estado
- **React Hook Form** - Formulários com validação

### Utilitários
- **Date-fns** - Manipulação de datas
- **Google Fonts** - Tipografia (Orbitron, Press Start 2P, Inter)

## 🚀 Como Executar

### Pré-requisitos
- Node.js 18+ instalado
- npm ou yarn

### Instalação

1. **Clone o repositório**
   ```bash
   git clone https://github.com/LucasFacini1/lucas-facini-portfolio.git
   cd lucas-facini-portfolio
   ```

2. **Instale as dependências**
   ```bash
   npm install
   ```

3. **Execute o projeto em modo de desenvolvimento**
   ```bash
   npm run dev
   ```

4. **Acesse no navegador**
   ```
   http://localhost:5173
   ```

### Scripts Disponíveis

- `npm run dev` - Inicia o servidor de desenvolvimento
- `npm run build` - Gera build de produção
- `npm run preview` - Visualiza o build de produção
- `npm run lint` - Executa o linter

## 📁 Estrutura do Projeto

```
src/
├── components/          # Componentes React
│   ├── Header.tsx      # Cabeçalho com navegação
│   ├── Hero.tsx        # Seção principal
│   ├── Projects.tsx    # Portfólio de projetos
│   ├── About.tsx       # Sobre mim e habilidades
│   ├── Contact.tsx     # Formulário de contato
│   └── Footer.tsx      # Rodapé
├── data/               # Dados estáticos
│   ├── projects.ts     # Lista de projetos
│   └── skills.ts       # Habilidades técnicas
├── store/              # Gerenciamento de estado
│   └── useAppStore.ts  # Store do Zustand
├── types/              # Definições TypeScript
│   └── index.ts        # Interfaces e tipos
├── utils/              # Utilitários
├── App.tsx             # Componente principal
├── main.tsx            # Ponto de entrada
└── index.css           # Estilos globais
```

## 🎨 Design System

### Cores
- **Neon Purple**: `#8B5CF6` - Cor principal
- **Neon Blue**: `#06B6D4` - Cor secundária
- **Neon Pink**: `#EC4899` - Cor de destaque
- **Neon Cyan**: `#00FFFF` - Cor de acento

### Tipografia
- **Orbitron**: Títulos e elementos destacados
- **Press Start 2P**: Elementos pixelados
- **Inter**: Texto corrido e interface

### Efeitos
- **Glow**: Brilho neon em elementos interativos
- **Scanline**: Efeito retro de linhas de varredura
- **Grid Pattern**: Fundo em grade neon
- **Glass Effect**: Efeito de vidro fosco

## 📱 Seções

### 1. Header
- Navegação fixa com logo animado
- Menu responsivo para mobile
- Indicador de seção ativa

### 2. Hero
- Apresentação principal com animações
- Call-to-action destacado
- Estatísticas de projetos e tecnologias

### 3. Projetos
- Grid responsivo de projetos
- Cards com hover effects
- Links para GitHub e demos
- Filtro por projetos em destaque

### 4. Sobre
- Informações pessoais e profissionais
- Habilidades técnicas com barras de progresso
- Cards informativos
- Call-to-action para contato

### 5. Contato
- Formulário com validação
- Informações de contato
- Links para redes sociais
- Feedback visual de envio

## 🔧 Personalização

### Adicionando Novos Projetos
Edite o arquivo `src/data/projects.ts`:

```typescript
{
  id: 'novo-projeto',
  title: 'Nome do Projeto',
  description: 'Descrição breve',
  longDescription: 'Descrição detalhada',
  technologies: ['React', 'TypeScript'],
  githubUrl: 'https://github.com/usuario/repo',
  liveUrl: 'https://demo.com',
  imageUrl: '/path/to/image.jpg',
  featured: true,
  createdAt: new Date('2024-01-01'),
  updatedAt: new Date('2024-01-01'),
}
```

### Modificando Habilidades
Edite o arquivo `src/data/skills.ts`:

```typescript
{
  name: 'Nova Tecnologia',
  level: 4, // 1-5
  category: 'frontend' | 'backend' | 'tools' | 'design',
}
```

## 🚀 Deploy

### GitHub Pages
1. Configure o `vite.config.ts` com o base correto
2. Execute `npm run build`
3. Faça push da pasta `dist` para a branch `gh-pages`

### Vercel
1. Conecte o repositório ao Vercel
2. Configure as variáveis de ambiente se necessário
3. Deploy automático a cada push

### Netlify
1. Conecte o repositório ao Netlify
2. Configure o build command: `npm run build`
3. Configure o publish directory: `dist`

## 📞 Contato

- **Email**: lucasfacinidev@hotmail.com
- **LinkedIn**: [Lucas Facini](https://www.linkedin.com/in/lucas-facini-739056328/)
- **GitHub**: [LucasFacini1](https://github.com/LucasFacini1)

## 📄 Licença

Este projeto está sob a licença MIT. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.

---

**Desenvolvido com ❤️ por Lucas Facini**
