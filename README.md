# CineTrackReact — DSSMV (ProjectReact)

Aplicação móvel multiplataforma desenvolvida em **React Native** no âmbito da unidade curricular de **Desenvolvimento de Software e Sistemas Móveis (DSSMV)** — LETI, ISEP (2026/27).

## Equipa — Turma 2DA
* **André Pereira Moreira** — `1240567`
* **Afonso Martins Sobreiro** — `1241013`

## Estrutura do Projeto (Arquitetura MVC)
* `docs/` — Documentação do projeto, artefactos globais, casos de uso (US1–US11) e relatório final em LaTeX.
  * `docs/global-artifacts/` — Modelo de domínio, arquitetura e especificações globais.
  * `docs/Use Cases/` — Especificação de cada User Story (US1 a US11).
  * `docs/report_overleaf/` — Estrutura e ficheiros de suporte ao relatório final.
* `src/api/` — Clientes e serviços de comunicação com APIs externas (TMDB, Foursquare).
* `src/components/` — Componentes visuais reutilizáveis da interface gráfica.
* `src/constants/` — Definições de temas (Dark/Light mode) e configurações globais.
* `src/contexts/` — Gestão de estado global e contextos de sessão.
* `src/hooks/` — Custom hooks para sensores de hardware (Acelerómetro, GPS/Localização).
* `src/navigation/` — Configuração de navegação (Stack e Bottom Tabs).
* `src/screens/` — Ecrãs principais da aplicação.
* `src/types/` — Definições de tipos e interfaces de domínio em TypeScript.
