# 🌿 Preserve - Consultoria Ambiental

Landing page institucional desenvolvida com React e Material UI v5.

## 📋 Sobre o Projeto

Landing page elegante e profissional para a **Preserve - Consultoria Ambiental**, uma empresa de consultoria ambiental localizada em Gramado Xavier/RS.

### ✨ Características

- **Design Responsivo**: Adaptável a todos os tamanhos de tela
- **Material UI v5**: Componentes modernos e acessíveis
- **Tema Customizado**: Paleta de cores inspirada na natureza
- **Animações Suaves**: Transições e efeitos hover elegantes
- **SEO Friendly**: Estrutura otimizada para mecanismos de busca

## 🎨 Paleta de Cores

- **Primary (Verde Escuro)**: #2F5D50 - Confiança técnica
- **Secondary (Verde Médio)**: #5FA68B - Sustentabilidade
- **CTA**: #3E8E7E - Botões de destaque
- **Background**: #F5F3EE - Bege/off-white elegante
- **Text**: #333333

## 🏗️ Estrutura do Projeto

```
landing-page-preserve/
├── src/
│   ├── components/
│   │   ├── HeroSection.jsx          # Seção principal
│   │   ├── AboutSection.jsx         # Quem somos
│   │   ├── ServicesSection.jsx      # Serviços oferecidos
│   │   ├── DifferentialsSection.jsx # Diferenciais
│   │   ├── CTASection.jsx           # Call to Action
│   │   └── Footer.jsx               # Rodapé
│   ├── theme/
│   │   └── theme.js                 # Tema MUI customizado
│   ├── App.jsx                      # Componente principal
│   ├── LandingPage.jsx              # Organização das seções
│   └── main.jsx                     # Ponto de entrada
├── index.html
├── package.json
└── vite.config.js
```

## 🚀 Como Executar

### Pré-requisitos

- Node.js 16+ instalado
- npm ou yarn

### Instalação

1. Navegue até o diretório do projeto:
```bash
cd landing-page-preserve
```

2. Instale as dependências:
```bash
npm install
```

3. Inicie o servidor de desenvolvimento:
```bash
npm run dev
```

4. Acesse no navegador:
```
http://localhost:3000
```

### Build para Produção

```bash
npm run build
```

Os arquivos otimizados estarão na pasta `dist/`.

## 📦 Dependências Principais

- **React 18**: Biblioteca de interface
- **Material UI v5**: Framework de componentes
- **Vite**: Build tool rápido
- **Emotion**: CSS-in-JS para estilização

## 📱 Seções da Landing Page

1. **Hero Section**: Apresentação principal com CTA
2. **About Section**: História e propósito da empresa
3. **Services Section**: 6 serviços principais em cards
4. **Differentials Section**: 5 diferenciais competitivos
5. **CTA Section**: Chamada final para contato
6. **Footer**: Informações de contato e redes sociais

## 🎯 Personalizações Recomendadas

### Atualizar Links de Contato

No arquivo [src/components/HeroSection.jsx](src/components/HeroSection.jsx) e [src/components/CTASection.jsx](src/components/CTASection.jsx), atualize o número do WhatsApp:

```javascript
window.open('https://wa.me/5551999999999', '_blank');
```

### Substituir Imagens

As imagens usam placeholders do Unsplash. Substitua pelas imagens reais da empresa:

- [src/components/HeroSection.jsx](src/components/HeroSection.jsx#L60): Imagem principal
- [src/components/AboutSection.jsx](src/components/AboutSection.jsx#L38-L51): Fotos das consultoras
- [src/components/CTASection.jsx](src/components/CTASection.jsx#L22): Imagem de fundo

### Ajustar Informações de Contato

No [src/components/Footer.jsx](src/components/Footer.jsx):
- Email
- Telefone
- Instagram

## 🌐 Deploy

### Opções de Hospedagem

- **Vercel**: Recomendado para projetos React
- **Netlify**: Deploy automático via Git
- **GitHub Pages**: Gratuito e simples

### Deploy na Vercel

```bash
npm install -g vercel
vercel
```

## 📄 Licença

Este projeto é proprietário da **Preserve - Consultoria Ambiental**.

## 👥 Desenvolvedores

Landing page desenvolvida com React e Material UI v5.

---

**Preserve - Consultoria Ambiental**  
📍 Gramado Xavier/RS  
📧 contato@preserve.com.br  
📱 Instagram: @preserve_consultoria_amb
