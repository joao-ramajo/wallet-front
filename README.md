# Kado

> Gerenciamento de gastos pessoais simples e eficiente

[![React](https://img.shields.io/badge/React-18+-61DAFB?style=flat&logo=react&logoColor=black)](https://reactjs.org)
[![TypeScript](https://img.shields.io/badge/TypeScript-5+-3178C6?style=flat&logo=typescript&logoColor=white)](https://www.typescriptlang.org)
[![Vite](https://img.shields.io/badge/Vite-5+-646CFF?style=flat&logo=vite&logoColor=white)](https://vitejs.dev)
[![TailwindCSS](https://img.shields.io/badge/Tailwind-3+-38B2AC?style=flat&logo=tailwind-css&logoColor=white)](https://tailwindcss.com)

---

## 📖 Sobre o Projeto

**Kado** é uma aplicação web moderna para gerenciamento de gastos pessoais que te ajuda a ter controle total sobre suas finanças. Com uma interface limpa e intuitiva, você pode facilmente registrar entradas e saídas, visualizar estatísticas e entender para onde está indo seu dinheiro.

### 🎯 Problema Resolvido

Facilita o gerenciamento de entradas e saídas financeiras de forma simples e visual, permitindo que você:

- 📊 Visualize seus gastos de forma clara
- 💵 Acompanhe seu saldo esperado
- 📈 Entenda seus padrões de consumo
- 🎯 Tome decisões financeiras mais conscientes

---

## ✨ Principais Funcionalidades

| Funcionalidade | Descrição | Status |
|----------------|-----------|--------|
| 🔐 **Autenticação** | Sistema completo de login e registro | ✅ Pronto |
| 📝 **Registros** | Criação de entradas e saídas financeiras | ✅ Pronto |
| 📋 **Listagem em Cards** | Visualização organizada de transações | ✅ Pronto |
| 📊 **Estatísticas** | Gastos totais, entradas e saldo final esperado | ✅ Pronto |
| 📤 **Exportação** | Download de dados em planilha | 🚧 Em desenvolvimento |
| 🔍 **Filtros** | Busca e filtro de registros | 📅 Planejado |
| ✏️ **Edição** | Modificar registros existentes | 📅 Planejado |

---

## 🛠️ Tecnologias Utilizadas

### Core Stack

- **[React 18+](https://reactjs.org)** - Biblioteca para interfaces de usuário
- **[TypeScript](https://www.typescriptlang.org)** - JavaScript com tipagem estática
- **[Vite](https://vitejs.dev)** - Build tool ultra-rápido
- **[TailwindCSS](https://tailwindcss.com)** - Framework CSS utilitário

### Bibliotecas Principais

- **[TanStack Query](https://tanstack.com/query)** - Gerenciamento de estado assíncrono
- **[React Router](https://reactrouter.com)** - Roteamento de páginas
- **[React Hook Form](https://react-hook-form.com)** - Gerenciamento de formulários
- **[Zod](https://zod.dev)** - Validação de schemas TypeScript-first
- **[Material-UI](https://mui.com)** - Componentes React prontos

### Ferramentas de Desenvolvimento

- **[Biome](https://biomejs.dev)** - Linter e formatter moderno
- **[Vercel](https://vercel.com)** - Hospedagem e deploy

---

## 🚀 Como Começar

### Pré-requisitos

- [Node.js](https://nodejs.org) (versão 18 ou superior)
- [npm](https://www.npmjs.com) ou [yarn](https://yarnpkg.com)

### Instalação

1. **Clone o repositório**

```bash
git clone https://github.com/seu-usuario/kado.git
cd kado
```

1. **Instale as dependências**

```bash
npm install
```

1. **Configure as variáveis de ambiente**

Crie um arquivo `.env` na raiz do projeto:

```env
VITE_API_URL=<url_da_sua_api>
```

1. **Inicie o servidor de desenvolvimento**

```bash
npm run dev
```

1. **Acesse a aplicação**

```
http://localhost:5173
```

### Comandos Disponíveis

```bash
# Desenvolvimento
npm run dev              # Inicia servidor de desenvolvimento

# Qualidade de Código
npm run lint             # Verifica código com Biome
npm run lint:fix         # Corrige problemas automaticamente

# Build
npm run build            # Gera build de produção
npm run preview          # Preview do build de produção
```

---

## 💡 Como Usar

### Fluxo Típico de Uso

1. **Cadastre-se ou faça login** na aplicação
2. **Crie um novo registro** de entrada ou saída
   - Informe o valor
   - Adicione uma descrição
   - Selecione a categoria
3. **Visualize suas estatísticas**
   - Gastos totais
   - Entradas previstas
   - Saldo final esperado
4. **Acompanhe seus registros** na lista de cards

### Exemplo: Cadastrando um Gasto Diário

```
💸 Novo Registro
├─ Tipo: Saída
├─ Valor: R$ 45,00
├─ Descrição: Almoço
└─ Categoria: Alimentação

📊 Impacto no Saldo
├─ Saldo Anterior: R$ 1.500,00
├─ Após Registro: R$ 1.455,00
└─ Meta Mensal: R$ 2.000,00
```

---

## 🎨 Design

O projeto segue um **design flat** com componentes Material-UI, priorizando:

- 🎯 Clareza visual
- 📱 Responsividade
- ⚡ Performance
- 🧩 Consistência de interface

---

## 📈 Status do Projeto

**Status Atual**: ✅ MVP Funcional

### Funcionalidades Implementadas

- ✅ Sistema de autenticação (login/registro)
- ✅ CRUD de registros financeiros
- ✅ Dashboard com estatísticas básicas
- ✅ Listagem visual em cards
- ✅ Integração com API própria

### 🗺️ Roadmap

**Próximas Melhorias:**

**Design & UX**

- [ ] Redesign da interface para maior atratividade
- [ ] Tema dark mode
- [ ] Animações e micro-interações

**Funcionalidades**

- [ ] Sistema de filtros avançados
- [ ] Edição de registros existentes
- [ ] Categorização personalizada
- [ ] Gráficos interativos
- [ ] Relatórios mensais/anuais
- [ ] Metas e alertas de gastos

**Exportação de Dados**

- [ ] Finalizar exportação em planilha
- [ ] Múltiplos formatos (CSV, Excel, PDF)
- [ ] Agendamento de relatórios

---

## 🤝 Contribuições

No momento, o projeto **não está aceitando contribuições externas**, pois é um projeto de uso pessoal em desenvolvimento ativo.

### Reportar Bugs ou Sugestões

Encontrou um problema ou tem uma sugestão?

1. 📧 **Entre em contato** diretamente
2. 🐛 **Abra uma issue** no GitHub descrevendo:
   - O problema encontrado
   - Passos para reproduzir
   - Comportamento esperado
   - Screenshots (se aplicável)

---

## 🏗️ Estrutura do Projeto

```
kado/
├── src/
│   ├── features/           # Funcionalidades por domínio
│   │   ├── auth/          # Autenticação
│   │   ├── transactions/  # Gestão de transações
│   │   └── dashboard/     # Dashboard e estatísticas
│   ├── shared/            # Recursos compartilhados
│   │   ├── components/    # Componentes reutilizáveis
│   │   ├── hooks/         # Custom hooks
│   │   └── utils/         # Utilitários
│   ├── useCases/          # Lógica de negócio
│   │   ├── mutations/     # TanStack Query mutations
│   │   └── queries/       # TanStack Query queries
│   ├── App.tsx
│   └── main.tsx
├── public/
├── .env
├── vite.config.ts
├── tailwind.config.js
└── package.json
```

## 🔗 Links Úteis

- **Documentação React**: [https://react.dev](https://react.dev)
- **TanStack Query**: [https://tanstack.com/query](https://tanstack.com/query)
- **Material-UI**: [https://mui.com](https://mui.com)
- **Biome**: [https://biomejs.dev](https://biomejs.dev)

---
