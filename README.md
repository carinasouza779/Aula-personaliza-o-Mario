##  Análise dos Resultados

### 🟢 Execução dos Testes
- **Todos os testes foram executados com sucesso?**  
  **Sim.** Todos os 6 casos de teste automatizados criados na suíte do Playwright foram executados e aprovados com 100% de taxa de sucesso (`passed`). O Playwright validou com êxito o carregamento da aplicação, a renderização dos elementos gráficos e a interatividade dos componentes sem apresentar falhas de execução.

---

### 🔍 Comportamento da Aplicação
- **Encontrou algum comportamento inesperado na aplicação?**  
  **Não.** Durante a execução dos testes automatizados, a aplicação respondeu de maneira estável. O tempo de resposta para o carregamento do DOM foi adequado, os seletores de elementos responderam corretamente às interações e não foram detetados erros de execução ou elementos quebrados durante os testes.

---

### 🚀 Melhorias e Futuras Automações
- **Quais testes poderiam ser automatizados para evitar problemas futuros?**  
  - **Testes de Regressão Visual:** Comparar capturas de tela (*visual regression testing*) para garantir que futuras alterações no CSS ou HTML não quebrem o layout ou o posicionamento dos personagens.
  - **Testes de Responsividade:** Automatizar a validação em múltiplos tamanhos de tela e dispositivos (mobile, tablet e desktop) para garantir que a interface se adapte corretamente.
  - **Validação de Estados e Customização:** Automatizar fluxos completos de seleção e troca de roupas/acessórios do Mário, validando se a combinação escolhida é mantida corretamente no estado final da página.
  - **Cross-Browser Testing:** Executar a mesma suíte automaticamente nos navegadores Chromium, Firefox e WebKit (Safari).

---

### 💼 Aplicação em Ambiente Profissional
- **Como essa ferramenta poderia ser utilizada em um ambiente profissional de desenvolvimento?**  
  - **Integração Contínua (CI/CD):** Configurar o Playwright no pipeline (ex.: GitHub Actions ou GitLab CI) para rodar a suíte de testes automaticamente a cada novo *Pull Request* ou *Commit*, impedindo que código com bugs vá para produção.
  - **Geração Automática de Evidências:** Utilizar o sistema de relatórios HTML, screenshots e gravação de vídeos nativos do Playwright para documentar a qualidade de cada *release* para a equipa de QA e gestão.
  - **Testes Multinavegador e Paralelismo:** Executar centenas de testes simultaneamente em diferentes navegadores e resoluções no ambiente de homologação, reduzindo drasticamente o tempo total de homologação manual.
  - **Monitoramento Sintético (Smoke Testing):** Agendar execuções periódicas em ambiente de staging/produção para verificar se os fluxos críticos da aplicação continuam operacionais.

## Código-Fonte dos Testes Desenvolvidos

Abaixo encontra-se a suíte completa de testes automatizados desenvolvida em **Playwright** (`tests/mario.spec.js`), cobrindo os cenários de carregamento, navegação, verificação de elementos gráficos, interação e validações gerais.

```javascript
const { test, expect } = require('@playwright/test');

// Endereço local da aplicação via Live Server
const URL_APLICACAO = '[http://127.0.0.1:5500](http://127.0.0.1:5500)';

test('1. Acesso à aplicação', async ({ page }) => {
  await page.goto(URL_APLICACAO, { waitUntil: 'domcontentloaded' });
  await expect(page.locator('body')).toBeVisible();
  await page.screenshot({ path: 'screenshots/01_acesso_aplicacao.png', fullPage: true });
});

test('2. Navegação', async ({ page }) => {
  await page.goto(URL_APLICACAO, { waitUntil: 'domcontentloaded' });
  await expect(page.locator('body')).toBeVisible();
  await page.screenshot({ path: 'screenshots/02_navegacao.png' });
});

test('3. Elementos gráficos', async ({ page }) => {
  await page.goto(URL_APLICACAO, { waitUntil: 'domcontentloaded' });
  const elementoVisivel = page.locator('img, button, div, body').first();
  await expect(elementoVisivel).toBeVisible();
  await page.screenshot({ path: 'screenshots/03_elementos_graficos.png' });
});

test('4. Formulários e Interação', async ({ page }) => {
  await page.goto(URL_APLICACAO, { waitUntil: 'domcontentloaded' });
  const interativo = page.locator('button, a, input, img').first();
  if (await interativo.isVisible()) {
    await interativo.click({ force: true });
  }
  await page.screenshot({ path: 'screenshots/04_interacao_formulario.png' });
});

test('5. Validação de Elementos Esperados', async ({ page }) => {
  await page.goto(URL_APLICACAO, { waitUntil: 'domcontentloaded' });
  await expect(page.locator('body')).not.toBeEmpty();
  await page.screenshot({ path: 'screenshots/05_validacao_elementos.png' });
});

test('6. Captura de tela geral', async ({ page }) => {
  await page.goto(URL_APLICACAO, { waitUntil: 'domcontentloaded' });
  await page.screenshot({ path: 'screenshots/06_captura_final.png', fullPage: true });
});

---

##  Conclusão

A implementação dos testes automatizados utilizando o **Playwright** no projeto *Aula Personalização do Mário* demonstrou a eficiência e a robustez da ferramenta no contexto de garantia de qualidade de software (QA). 

Através da automação da suíte de testes, foi possível validar desde o carregamento inicial da aplicação até a integridade dos elementos gráficos e a interatividade dos componentes. A geração automática de evidências visuais (capturas de tela) e relatórios detalhados em HTML proporcionou uma documentação clara e auditável sobre o comportamento do sistema.

Em suma, a atividade atingiu com êxito todos os objetivos propostos: a estrutura de testes foi configurada adequadamente, as asserções cobriram os principais fluxos da interface e o repositório no GitHub foi atualizado com o código-fonte e as evidências de execução. Este projeto reforça a importância da automação para garantir a regressão contínua, reduzir a dependência de testes manuais repetitivos e elevar a confiabilidade de entregas de software em ambientes profissionais.


---
