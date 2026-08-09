// Dados exibidos no portfolio.

export const portfolio = {
  profile: {
    name: 'Samuell Aguiar',
    role: 'Desenvolvedor Web Full Stack',
    location: 'Estudante de Sistemas de Informacao na UFOP',
    email: 'samuellcarlosaguiar@gmail.com',
    phone: '(31) 98208-9884',
    linkedinUrl: 'https://www.linkedin.com/in/samuell-aguiar',
    githubUrl: 'https://github.com/SamuellAguiar',
    initials: 'SA',
    photo: '/foto-samuell.jpg',
    summary: 'Desenvolvedor Web Full Stack com conhecimentos em front-end, back-end, bancos de dados, containers e ferramentas de desenvolvimento.',
    about: 'Sou estudante de Sistemas de Informacao na Universidade Federal de Ouro Preto (UFOP) e desenvolvedor web. Trabalho com tecnologias como React.js, Node.js, Java, Spring Boot, Docker, bancos de dados e desenvolvimento de interfaces responsivas. Tambem tenho vivencia com ERP, processos de negocio e metodologias ageis.',
  },

  experience: [
    { period: 'Mai/2026 — Atual', role: 'Estagiario em Sistemas de Informacao', company: 'Hiper Comercial Monlevade', description: 'Atuo com ERP, cadastro de produtos, pedidos de compra, tratamento de divergencias e relatorios gerenciais. Tambem participo do desenvolvimento de um sistema interno em Node.js e React.js para a gestao de compras do setor de padaria.' },
    { period: '2022 — 2023', role: 'Desenvolvedor Web Front-End', company: 'Visao Tecnologia e Sistemas', description: 'Desenvolvi e mantive interfaces web responsivas e acessiveis com HTML, CSS e JavaScript. Tambem criei sites em WordPress com Elementor, colaborei em sprints Scrum e ajudei a padronizar componentes reutilizaveis.' },
  ],

  education: [
    { period: '2022 — Atual', course: 'Bacharelado em Sistemas de Informacao', institution: 'Universidade Federal de Ouro Preto (UFOP) · Previsao de conclusao: 2026' },
    { period: '2024', course: 'Formacao complementar em desenvolvimento web', institution: 'Udemy, Ada e Rocketseat · Front-end, Git, banco de dados e algoritmos' },
  ],

  certifications: [
    { name: 'Estruturas de Dados e Algoritmos', institution: 'Udemy', period: 'Nov/2024', imageUrl: '/certificados/image.png' },
    { name: 'Formacao Front-end', institution: 'Udemy', period: 'Abr/2024', imageUrl: '/certificados/formacao-front-end.png' },
    { name: 'Git e Versionamento', institution: 'Ada', period: 'Mai/2024', imageUrl: '/certificados/git-e-versionamento.png' },
    { name: 'Banco de Dados', institution: 'Ada', period: 'Jun/2024', imageUrl: '/certificados/banco-de-dados.png' },
    { name: 'Curso Discover', institution: 'Rocketseat', period: 'Mar/2024', imageUrl: '/certificados/curso-discover.png' },
  ],

  skills: [
    { name: 'HTML', details: 'Utilizo HTML semantico para estruturar interfaces acessiveis e bem organizadas.', highlights: ['Semantica', 'Acessibilidade', 'Estrutura de paginas'] },
    { name: 'CSS', details: 'Uso CSS para criar layouts responsivos, interfaces consistentes e experiencias visuais agradaveis.', highlights: ['Responsividade', 'Layout', 'Design de interfaces'] },
    { name: 'JavaScript', details: 'Uso JavaScript para criar interfaces interativas e conectar recursos do front-end.', highlights: ['Interatividade', 'Logica de interface', 'Consumo de APIs'] },
    { name: 'React.js', details: 'Utilizo React.js para construir interfaces componentizadas e sistemas web dinamicos.', highlights: ['Componentes reutilizaveis', 'Interfaces responsivas', 'Gerenciamento de estado'] },
    { name: 'Node.js', details: 'Utilizo Node.js no desenvolvimento de funcionalidades e servicos para aplicacoes web.', highlights: ['Back-end', 'APIs', 'Integracao com front-end'] },
    { name: 'Java', details: 'Tenho conhecimentos em Java para desenvolvimento orientado a objetos e aplicacoes de back-end.', highlights: ['Orientacao a objetos', 'Logica de programacao', 'Back-end'] },
    { name: 'Spring Boot', details: 'Utilizo Spring Boot para criar aplicacoes Java e estruturar servicos de back-end.', highlights: ['APIs REST', 'Configuracao simplificada', 'Ecossistema Java'] },
    { name: 'PHP', details: 'Possuo conhecimentos em PHP para desenvolvimento web e manutencao de aplicacoes.', highlights: ['Desenvolvimento web', 'Logica de servidor', 'Integracao de paginas'] },
    { name: 'Python', details: 'Utilizo Python para estudos, automacoes e analise de dados.', highlights: ['Automacao', 'Analise de dados', 'Logica de programacao'] },
    { name: 'Jupyter', details: 'Uso Jupyter para explorar dados, documentar analises e executar experimentos em Python.', highlights: ['Notebooks', 'Exploracao de dados', 'Documentacao'] },
    { name: 'MySQL', details: 'Utilizo MySQL para modelar, consultar e organizar dados relacionais.', highlights: ['Banco de dados relacional', 'Consultas SQL', 'Modelagem de dados'] },
    { name: 'MongoDB', details: 'Possuo conhecimentos em MongoDB para trabalhar com bancos de dados nao relacionais.', highlights: ['Banco NoSQL', 'Documentos', 'Modelagem flexivel'] },
    { name: 'Docker', details: 'Utilizo Docker para criar ambientes consistentes e facilitar a execucao de aplicacoes.', highlights: ['Containers', 'Ambientes reproduziveis', 'Desenvolvimento local'] },
    { name: 'Git', details: 'Uso Git para versionar codigo, acompanhar mudancas e trabalhar de forma organizada.', highlights: ['Versionamento', 'Historico de mudancas', 'Colaboracao'] },
    { name: 'GitHub', details: 'Utilizo GitHub para hospedar repositorios, colaborar e compartilhar projetos.', highlights: ['Repositorios', 'Pull requests', 'Portfolio tecnico'] },
    { name: 'Visual Studio Code', details: 'Uso o Visual Studio Code como editor para desenvolvimento web e configuracao de projetos.', highlights: ['Editor de codigo', 'Extensoes', 'Produtividade'] },
    { name: 'IntelliJ IDEA', details: 'Utilizo o IntelliJ IDEA no desenvolvimento e estudo de projetos em Java.', highlights: ['Projetos Java', 'Ferramentas de IDE', 'Produtividade'] },
    { name: 'Windows & Debian', details: 'Tenho experiencia com Windows e Debian como ambientes de desenvolvimento.', highlights: ['Ambientes de desenvolvimento', 'Linha de comando', 'Configuracao local'] },
  ],

  projects: [
    { name: 'Landing Page - Kelly & Lais', description: 'Landing page profissional para divulgar o curso criado por duas dentistas.', details: 'Desenvolvi uma landing page profissional para Kelly e Lais, com foco na apresentacao e divulgacao do curso criado pelas duas dentistas.', highlights: ['Foco em conversao', 'Apresentacao profissional', 'Experiencia responsiva'], technologies: ['React', 'CSS', 'Vite'], githubUrl: 'https://github.com/SamuellAguiar/curso-resinas-kelly-lais', liveUrl: 'https://kellyelais.com/', image: '/projeto-kellyelais.png', accent: 'aqua' },
    { name: 'Sentinel', description: 'Plataforma web para registro anonimo de ocorrencias e monitoramento de areas de risco.', details: 'Desenvolvi o Sentinel, uma plataforma voltada a seguranca universitaria. A aplicacao permite o registro anonimo de ocorrencias e apoia o monitoramento de areas de risco pelo campus.', highlights: ['Registro anonimo de ocorrencias', 'Seguranca universitaria', 'Monitoramento de areas de risco'], technologies: ['Plataforma web', 'Seguranca', 'Gestao de ocorrencias'], githubUrl: 'https://github.com/SamuellAguiar/Trabalho_BD_II', liveUrl: 'https://trabalho-bd-ii.vercel.app/', image: '/projeto-sentinel.png', accent: 'navy' },
    { name: 'Minha Placa, Minha Vida', description: 'Landing page responsiva para conversao de clientes em assistencia tecnica especializada.', details: 'Desenvolvi uma landing page moderna e responsiva para uma assistencia tecnica especializada em micro-soldagem e manutencao de placas eletronicas.', highlights: ['Foco em conversao', 'Layout responsivo', 'Comunicacao clara de servicos'], technologies: ['Landing page', 'Responsivo', 'Conversao'], githubUrl: 'https://github.com/SamuellAguiar/Minha-Placa-Minha-Vida', liveUrl: 'https://minha-placa-minha-vida.vercel.app/', image: '/projeto-minha-placa.png', accent: 'coral' },
  ],
}
