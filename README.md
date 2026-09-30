# ACR Medical Center

Site institucional responsivo para a ACR Medical Center, desenvolvido com Vite, React, TypeScript e Tailwind CSS. A página é mobile-first, não usa biblioteca de componentes ou ícones e encaminha o contato para o WhatsApp sem backend.

## Rodar localmente

Requer Node.js 18 ou superior.

```bash
npm install
npm run dev
```

## Build e publicação na Vercel

```bash
npm run build
```

Importe o repositório na Vercel. O preset Vite usa `npm run build` e `dist` como diretório de saída. O arquivo `vercel.json` reescreve URLs de especialidades para a aplicação. Antes da publicação, substitua `SEU-DOMINIO-AQUI` em `public/sitemap.xml` e `public/robots.txt` pelo domínio real da clínica e cadastre o sitemap no Search Console.

## Conteúdo editável

Edite os dados institucionais e as listas de especialidades, exames, convênios, perguntas frequentes, profissionais e galeria em [`src/data.ts`](src/data.ts). O corpo clínico começa vazio intencionalmente: inclua nome, especialidade, CRM e foto somente após confirmação.

## Pendências para confirmar com a clínica

- Horário de funcionamento.
- Perfil oficial do Instagram.
- E-mail `adm.acrmedicalcenter@gmail.com`.
- Disponibilidade das 13 especialidades listadas.
- Lista atual de convênios, rede atendida e cobertura para cada serviço.
- Nome e CRM do responsável técnico.
- Profissionais, respectivas especialidades, CRM e fotos autorizadas.
- Fotos reais da recepção, consultórios e estrutura.
- Domínio público para substituir no sitemap e robots.
- Revisão do texto informativo e do aviso de privacidade com os responsáveis da clínica.

Os horários, a equipe, o Instagram, os registros pendentes e as imagens ainda não confirmadas estão sinalizados como placeholders na página. As fotos provisórias são ilustrações CSS, sem alegação de retratar o espaço real.
