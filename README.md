# Rosa de Saron Odontologia — Site institucional

Site institucional moderno e responsivo desenvolvido em **React + TypeScript + Vite + Tailwind CSS**, com foco em geração de leads via WhatsApp.

## Como rodar o projeto

```bash
npm install
npm run dev       # ambiente de desenvolvimento (http://localhost:5173)
npm run build     # gera a versão de produção em /dist
npm run preview   # serve a build de produção localmente
```

## Onde editar as informações da clínica

Praticamente todo o conteúdo dinâmico do site (nome, slogan, unidades, WhatsApps, tratamentos, links do Instagram, mensagens pré-preenchidas) está centralizado em:

```
src/data/company.ts
```

Edite esse arquivo para atualizar dados sem precisar mexer nos componentes.

### O que ainda precisa ser adicionado pela clínica

Os seguintes pontos foram deixados **propositalmente como estrutura pronta**, sem inventar informações:

- **Endereços e links do Google Maps** de cada unidade — campos `address` e `mapsLink` em `src/data/company.ts` (seção `units`). Enquanto vazios, os cards exibem "Endereço em breve" / "Localização em breve".
- **Mapa incorporado** — defina `mapsEmbedUrl` em `src/sections/Location.tsx` com a URL de embed do Google Maps.
- **Depoimentos de pacientes** — adicione objetos `{ name, treatment, quote }` no array `testimonials` em `src/sections/Testimonials.tsx`. Enquanto vazio, o site mostra o estado "em breve".
- **Fotos reais de antes/depois** — preencha `beforeImage`/`afterImage` (URLs) nos casos de `src/sections/BeforeAfterSection.tsx`.
- **Imagens reais da clínica** — atualmente o site usa composições gráficas ilustrativas (`PlaceholderArt`) em vez de fotos de banco de imagens genéricas. Basta trocar por `<img>` com as fotos oficiais quando disponíveis (hero, seção de implantes, facetas, tratamentos).
- **Logotipo oficial** — `src/components/Logo.tsx` usa uma marca provisória baseada no nome da clínica. Substitua pelo arquivo de logo oficial (SVG/PNG) assim que disponível.
- **Tratamentos adicionais** (ortodontia, clareamento, harmonização etc.) — já aparecem como cards "Em breve"; basta marcar `confirmed: true` e completar a descrição em `src/data/company.ts` quando a clínica confirmar o serviço.
- **História, missão, visão e valores** — espaço reservado na seção "Sobre" (`src/sections/About.tsx`).

## Estrutura do projeto

```
src/
├── components/   # componentes reutilizáveis (Header, Footer, botões, cards...)
├── sections/     # seções da landing page (Hero, Tratamentos, Unidades...)
├── data/         # company.ts — configuração central editável
├── hooks/        # hooks de scroll e animação de entrada
├── utils/        # helpers (montagem de links do WhatsApp)
└── index.css     # tokens de design (cores, tipografia, sombras)
```

## Próximos passos sugeridos (evolução futura)

A arquitetura já está preparada para, no futuro, receber:

- painel administrativo para gerenciar tratamentos, unidades e depoimentos;
- blog;
- integração com CRM e formulário conectado a uma API (o `ContactForm` já isola a lógica de envio em `handleSubmit`, pronto para ser trocado por uma chamada HTTP);
- analytics.
