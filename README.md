<<<<<<< HEAD

# Projeto Rádio Nostalgia

## Descrição
Este projeto visa recriar a experiência de ouvir rádio online, permitindo que os usuários busquem, adicionem, editem e ouçam suas estações de rádio favoritas. A aplicação se conecta a uma API de rádio para fornecer acesso a várias estações e oferece funcionalidades de personalização para o usuário.

## Tecnologias Usadas
- **Linguagem**: TypeScript
- **Framework**: Next.js
- **CSS Framework**: Tailwind CSS
- **Component Library**: Material UI (MUI)
- **Ícones**: lucide-react icons
- **API**: Rádio Browser API

## Funcionalidades
1. **Adicionar rádio à lista**: O usuário pode adicionar uma estação à sua lista de rádios favoritas.
2. **Visualizar lista de rádios**: O usuário pode ver as rádios que adicionou à sua lista.
3. **Remover rádio da lista**: O usuário pode remover uma rádio da sua lista.
4. **Editar rádio**: O usuário pode editar informações sobre a rádio selecionada.
5. **Ouvir a rádio**: O usuário pode iniciar e parar a reprodução de uma rádio.
6. **Pesquisar rádios**: O usuário pode buscar rádios por nome, país ou idioma.

## Casos de Uso
- Como usuário, posso adicionar uma rádio à minha lista.
- Como usuário, posso ver minha lista de rádios adicionadas.
- Como usuário, posso remover uma rádio da minha lista.
- Como usuário, posso editar informações da rádio escolhida.
- Como usuário, posso ouvir a rádio selecionada ao clicar no play.
- Como usuário, posso parar de ouvir a rádio selecionada ao clicar no stop.
- Como usuário, posso pesquisar a rádio que tenho interesse.

## Requisitos de Implementação
- **Paginação**: Exibir 10 rádios por vez, com a possibilidade de filtrar por nome, país ou idioma.
- **Persistência de Dados**: As rádios salvas pelo usuário devem ser mantidas entre as sessões.
- **Base do Wireframe**: A estilização deve seguir o wireframe, mas pode ser adaptada conforme necessário.

## Processo de Desenvolvimento

Ao iniciar o desafio, meu objetivo foi utilizar as tecnologias mais atuais do mercado, nas quais já tenho experiência, por isso optei pelas ferramentas mencionadas anteriormente. No início do desenvolvimento, enfrentei um pequeno problema relacionado ao git: duas branches "master" foram criadas com históricos separados, mas isso não teve um impacto significativo no progresso do projeto.

Durante a implementação, foquei em criar um código bem estruturado, com o uso de interfaces e uma abordagem de componentização que garantisse clareza e facilidade de manutenção. Meu principal objetivo foi construir uma solução escalável e de fácil compreensão. Embora o desenvolvimento tenha sido bastante fluido, tomei algumas decisões importantes durante o processo, como remover elementos desnecessários da aplicação e implementar melhorias na experiência do usuário (UX). Por exemplo, adicionei funcionalidades como feedbacks de carregamento (loading) e mensagens de erro para uma navegação mais amigável, além de integrar as funcionalidades de play e pause de forma consistente em toda a aplicação.

Um dos maiores desafios enfrentados foi a indisponibilidade temporária da API da rádio, que ficou fora do ar por um tempo considerável. Isso me impediu de testar funcionalidades como a paginação e me causou um atraso de cerca de um dia no prazo que eu tinha estabelecido para concluir o desafio. No entanto, consegui resolver as questões rapidamente após a normalização da API.


## API

Para obter os dados, utilizaremos a API do Radio Browser:

- https://de1.api.radio-browser.info/json/stations/search?limit=10

Exemplo da resposta:

```json
[
    {
    "changeuuid": "f6a6d140-c065-4e3b-9bda-3fb752148ae7",
    "stationuuid": "a25700ef-e952-4b73-8b4e-b92d938cb020",
    "serveruuid": "46ce76c5-203b-43e3-b709-5748219f9fcd",
    "name": "\tNewstalk ZB Auckland",
    "url": "https://ais-nzme.streamguys1.com/nz_002_aac",
    "url_resolved": "https://ais-nzme.streamguys1.com/nz_002_aac",
    "homepage": "https://www.newstalkzb.co.nz/",
    "favicon": "https://www.newstalkzb.co.nz/content/news/images/interface/icons/newstalkzb/apple-touch-icon.png",
    "tags": "",
    "country": "New Zealand",
    "countrycode": "NZ",
    "iso_3166_2": null,
    "state": "BOP",
    "language": "",
    "languagecodes": "",
    "votes": 41,
    "lastchangetime": "2022-05-11 08:42:03",
    "lastchangetime_iso8601": "2022-05-11T08:42:03Z",
    "codec": "AAC+",
    "bitrate": 65,
    "hls": 0,
    "lastcheckok": 1,
    "lastchecktime": "2022-08-01 16:52:00",
    "lastchecktime_iso8601": "2022-08-01T16:52:00Z",
    "lastcheckoktime": "2022-08-01 16:52:00",
    "lastcheckoktime_iso8601": "2022-08-01T16:52:00Z",
    "lastlocalchecktime": "2022-08-01 12:24:26",
    "lastlocalchecktime_iso8601": "2022-08-01T12:24:26Z",
    "clicktimestamp": "2022-08-02 08:26:09",
    "clicktimestamp_iso8601": "2022-08-02T08:26:09Z",
    "clickcount": 51,
    "clicktrend": 2,
    "ssl_error": 0,
    "geo_lat": null,
    "geo_long": null,
    "has_extended_info": false
  },
]
```

>  This is a challenge by [Coodesh](https://coodesh.com/)


## Como Rodar o Projeto
### 1. Clone o repositório
```bash
git clone https://github.com/PedroNogueir4/radio-browser.git
```

### 2. Execute o servidor:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

A aplicação estará disponível em http://localhost:3000.

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
>>>>>>> 4ffc45834142ee4dcd3448f3e221b86c26b1a0ba
