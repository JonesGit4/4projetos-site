export interface BlogFaq {
  q: string;
  a: string;
}

export interface BlogPost {
  slug: string;
  title: string;
  description: string;
  keyword: string;
  date: string;
  lastUpdated: string;
  readTime: string;
  category: "regularizacao" | "engenharia";
  quickAnswer: string;
  content: string;
  faqs: BlogFaq[];
}

export const blogPosts: BlogPost[] = [
  {
    slug: "como-regularizar-imovel-florianopolis",
    title: "Como Regularizar Seu Imóvel em Florianópolis: Guia Completo",
    description:
      "Guia completo com o passo a passo para regularizar seu imóvel em Florianópolis. Entenda os documentos, custos, prazos e como evitar multas.",
    keyword: "regularização de imóveis Florianópolis",
    date: "2026-05-01",
    lastUpdated: "2026-05-02",
    readTime: "8 min",
    category: "regularizacao",
    quickAnswer: "Para regularizar um imóvel em Florianópolis, contrate um engenheiro civil, faça o levantamento cadastral, elabore os projetos técnicos, protocole na Secretaria de Urbanismo e, após aprovação, obtenha o Habite-se e averbe no cartório. O processo leva de 3 a 12 meses.",
    content: `
## Por que regularizar seu imóvel?

Um imóvel irregular não pode ser vendido com segurança, financiado ou usado como garantia. Segundo dados do Cadastro Territorial Multifinalitário da Prefeitura Municipal de Florianópolis (PMF, 2024), **estima-se que cerca de 40% das edificações da cidade possuem algum tipo de pendência documental** — seja falta de Habite-se, construções não averbadas ou lotes não regularizados.

A regularização pode **valorizar seu imóvel em até 40%**, segundo pesquisa do SECOVI-SC (Sindicato da Habitação de Santa Catarina, 2023), além de garantir segurança jurídica para você e sua família.

## O que caracteriza um imóvel irregular?

- Construção sem alvará ou sem Habite-se
- Ampliação ou reforma não averbada na matrícula
- Imóvel em área de posse sem registro formal
- Divergência entre a área construída e a registrada
- Lote em condomínio irregular sem matrícula individual

## Base legal

A regularização de imóveis em Florianópolis é regida por diversas legislações:
- **Lei Complementar nº 482/2014** — Plano Diretor de Florianópolis
- **Lei Federal nº 13.465/2017** — REURB (Regularização Fundiária Urbana)
- **Lei Complementar nº 060/2000** — Código de Obras de Florianópolis
- **Decreto Municipal nº 23.898/2023** — Programa Floripa Regular

## Passo a passo da regularização

### 1. Diagnóstico técnico
O primeiro passo é contratar um engenheiro civil para analisar a documentação existente (matrícula, IPTU, plantas) e verificar a situação real do imóvel junto à prefeitura.

### 2. Levantamento cadastral
É feito um levantamento das medidas reais da construção e do terreno. Esse levantamento gera as plantas técnicas necessárias para o processo.

### 3. Elaboração dos projetos
Dependendo do caso, são necessários: projeto arquitetônico, projeto estrutural, laudo de estabilidade e outros documentos técnicos.

### 4. Protocolo na prefeitura
Os projetos e documentos são protocolados junto à Secretaria de Urbanismo de Florianópolis para análise e aprovação.

### 5. Emissão do Habite-se
Com a aprovação, a prefeitura emite o Habite-se — o documento que atesta que a construção está conforme a legislação.

### 6. Averbação no cartório
O Habite-se é levado ao Cartório de Registro de Imóveis para averbar a construção na matrícula, finalizando a regularização.

## Quanto custa regularizar?

Os custos variam conforme a complexidade, mas incluem:
- **Honorários de engenharia**: projeto e acompanhamento
- **Taxas da prefeitura**: análise e aprovação
- **Emolumentos do cartório**: averbação e registro
- **INSS da obra**: recolhimento obrigatório na Receita Federal

Em média, para imóveis residenciais em Florianópolis, o investimento varia de R$ 7.000 a R$ 40.000 dependendo do porte e das pendências (dados de 2026).

## Prazos estimados

| Tipo de regularização | Prazo estimado |
|---|---|
| Habite-se simples | 3 a 6 meses |
| Habite-se + averbação | 4 a 8 meses |
| REURB | 6 a 12 meses |
| Estremação | 4 a 10 meses |

## Programas especiais em Florianópolis

### Floripa Regular
Programa municipal que facilita a regularização de edificações construídas até determinada data, com taxas reduzidas e processos simplificados. Instituído pelo **Decreto Municipal nº 23.898/2023**.

### REURB — Meu Bairro Regular
A Regularização Fundiária Urbana, prevista na **Lei Federal nº 13.465/2017**, permite regularizar imóveis em áreas de posse, transformando posse em propriedade registrada. Florianópolis opera o programa Meu Bairro Regular para atender moradores em áreas consolidadas.

## Conclusão

Regularizar seu imóvel é um investimento que protege seu patrimônio e valoriza seu bem. Se você tem um imóvel irregular em Florianópolis, o primeiro passo é buscar um diagnóstico técnico profissional.

**A 4Projetos oferece consultoria gratuita** para avaliar a situação do seu imóvel. Entre em contato pelo WhatsApp e agende uma conversa.
    `,
    faqs: [
      {
        q: "Quanto tempo leva para regularizar um imóvel em Florianópolis?",
        a: "O prazo varia de 3 a 12 meses conforme o tipo de regularização. Um Habite-se simples leva de 3 a 6 meses. Processos que envolvem REURB ou estremação podem levar de 6 a 12 meses.",
      },
      {
        q: "Preciso de um engenheiro para regularizar meu imóvel?",
        a: "Sim. A legislação exige que os projetos técnicos sejam elaborados e assinados por um engenheiro civil ou arquiteto devidamente registrado no CREA ou CAU.",
      },
      {
        q: "Posso regularizar um imóvel construído há muitos anos?",
        a: "Sim. Não há limite de tempo para a regularização. Programas como o Floripa Regular e a REURB foram criados justamente para regularizar construções antigas.",
      },
      {
        q: "A regularização elimina multas da prefeitura?",
        a: "Depende. Programas especiais como o Floripa Regular podem oferecer isenção ou redução de multas. Fora desses programas, as multas por construção sem alvará devem ser quitadas durante o processo.",
      },
    ],
  },
  {
    slug: "habite-se-o-que-e-para-que-serve",
    title: "Habite-se: O Que É, Para Que Serve e Como Conseguir",
    description:
      "Entenda o que é o Habite-se, para que serve, quem precisa e o passo a passo para obter o documento em Florianópolis.",
    keyword: "o que é habite-se",
    date: "2026-05-01",
    lastUpdated: "2026-05-02",
    readTime: "6 min",
    category: "regularizacao",
    quickAnswer: "O Habite-se (Alvará de Ocupação) é o documento emitido pela prefeitura que comprova que uma construção atende às normas técnicas e urbanísticas. É obrigatório para vender, financiar ou averbar o imóvel. Em Florianópolis, o prazo de emissão é de 60 a 120 dias após protocolo.",
    content: `
## O que é o Habite-se?

O Habite-se (ou Alvará de Ocupação) é o documento emitido pela prefeitura que atesta que uma edificação foi construída conforme as normas técnicas, urbanísticas e de segurança vigentes. Sem ele, a construção é considerada irregular perante a lei, conforme estabelecido pela **Lei Complementar nº 060/2000** (Código de Obras de Florianópolis).

Segundo dados da Secretaria de Urbanismo de Florianópolis, **mais de 30% das solicitações de Habite-se em 2024 referiam-se a edificações já construídas** — ou seja, regularizações posteriores.

## Para que serve?

O Habite-se é necessário para:
- **Vender o imóvel** com escritura pública
- **Financiar** o imóvel por bancos (exigência da **Lei nº 4.591/1964**)
- **Averbar** a construção na matrícula
- **Obter ligação definitiva** de água e energia em alguns casos
- **Comprovar regularidade** perante a prefeitura

## Quem precisa do Habite-se?

Todo imóvel construído precisa de Habite-se. Na prática, muitas construções em Florianópolis foram erguidas sem esse documento — especialmente casas mais antigas, ampliações e construções em áreas de crescimento rápido.

De acordo com o IBGE (Censo 2022), **Florianópolis possui cerca de 213 mil domicílios**, e uma parcela significativa ainda carece de regularização documental completa.

## Passo a passo para obter o Habite-se em Florianópolis

### 1. Contrate um engenheiro civil
O profissional fará o levantamento da edificação e verificará se atende às exigências do Plano Diretor (LC 482/2014) e do Código de Obras de Florianópolis.

### 2. Elabore o projeto arquitetônico
O projeto deve representar fielmente a edificação existente, incluindo plantas baixas, cortes, fachadas e situação no terreno.

### 3. Reúna a documentação
- Matrícula atualizada do terreno
- ART/RRT do responsável técnico
- Projeto arquitetônico completo
- Comprovante de quitação do IPTU
- Laudo de estabilidade estrutural (quando exigido)

### 4. Protocole na prefeitura
O projeto e os documentos são protocolados na Secretaria de Urbanismo para análise técnica.

### 5. Vistoria
A prefeitura realiza vistoria no local para verificar se a construção está conforme o projeto aprovado.

### 6. Emissão do Habite-se
Com a aprovação, o Habite-se é emitido. O prazo médio em Florianópolis é de **60 a 120 dias** após protocolo.

## Quanto custa o Habite-se?

| Componente | Valor estimado |
|---|---|
| Honorários do engenheiro | R$ 3.000 – R$ 15.000 |
| Taxa de análise da prefeitura | R$ 200 – R$ 1.500 |
| INSS sobre a obra | R$ 3.000 – R$ 20.000 |
| Adequações na construção | Variável |

## E se meu imóvel nunca teve Habite-se?

É possível regularizar edificações existentes. O processo é semelhante, com a diferença de que o projeto retrata a construção "como está" (as-built). O programa **Floripa Regular** (Decreto Municipal nº 23.898/2023) facilita esse processo com taxas reduzidas e análise simplificada.

## Conclusão

O Habite-se é essencial para a segurança jurídica do seu imóvel. Se sua construção ainda não possui esse documento, regularize o quanto antes — quanto mais tempo passa, mais complexo e custoso pode se tornar.

**Precisa de Habite-se em Florianópolis?** A 4Projetos cuida de todo o processo. Fale conosco.
    `,
    faqs: [
      {
        q: "Qual a diferença entre Habite-se e alvará de construção?",
        a: "O alvará de construção é a autorização para construir, emitido antes da obra. O Habite-se é o certificado de que a construção finalizada atende às normas, emitido após a obra concluída.",
      },
      {
        q: "É possível morar sem Habite-se?",
        a: "Na prática, muitas pessoas moram em imóveis sem Habite-se. Porém, o imóvel é considerado irregular e não pode ser vendido com escritura, financiado ou averbado na matrícula.",
      },
      {
        q: "O Habite-se tem prazo de validade?",
        a: "Não. O Habite-se não expira. Uma vez emitido, vale permanentemente. Porém, se houver ampliações ou reformas significativas após a emissão, um novo processo pode ser necessário.",
      },
      {
        q: "Quanto tempo leva para obter o Habite-se em Florianópolis?",
        a: "O prazo médio é de 60 a 120 dias após o protocolo na Secretaria de Urbanismo. Casos mais complexos, com exigências adicionais, podem levar mais tempo.",
      },
    ],
  },
  {
    slug: "imovel-irregular-pode-ser-vendido",
    title: "Imóvel Irregular Pode Ser Vendido? Entenda os Riscos",
    description:
      "Descubra se é possível vender um imóvel irregular, quais os riscos envolvidos e como regularizar para garantir uma venda segura.",
    keyword: "imóvel irregular pode ser vendido",
    date: "2026-05-01",
    lastUpdated: "2026-05-02",
    readTime: "5 min",
    category: "regularizacao",
    quickAnswer: "Sim, é possível transferir um imóvel irregular por contrato particular (\"contrato de gaveta\"), mas sem escritura pública, registro cartorial ou segurança jurídica. O comprador não pode financiar e corre risco de perder o bem. A regularização valoriza o imóvel em até 40%.",
    content: `
## A resposta curta

Tecnicamente, é possível transferir um imóvel irregular por meio de contrato de compra e venda (o popular "contrato de gaveta"). Porém, essa transação não garante segurança jurídica para nenhuma das partes e pode trazer sérios problemas.

Segundo o **Colégio Notarial do Brasil — Seção SC**, mais de **25% dos imóveis transacionados informalmente no estado** enfrentam algum tipo de litígio posterior. A **Lei nº 6.015/1973** (Lei dos Registros Públicos) estabelece que só é dono quem registra.

## Os riscos de vender (ou comprar) um imóvel irregular

### Para o vendedor
- **Desvalorização**: imóveis irregulares valem significativamente menos no mercado — segundo o SECOVI-SC, a diferença pode chegar a **30-40%** em relação a imóveis regularizados
- **Dificuldade de venda**: a maioria dos compradores exige documentação regular
- **Impossibilidade de financiamento**: bancos não financiam imóveis irregulares
- **Responsabilidade futura**: problemas na construção podem recair sobre o vendedor

### Para o comprador
- **Sem escritura pública**: o contrato particular não garante a propriedade plena
- **Risco de perda**: em disputas judiciais, quem não tem registro pode perder o imóvel (Art. 1.245 do **Código Civil — Lei nº 10.406/2002**)
- **Impossibilidade de financiar**: não é possível usar FGTS ou crédito imobiliário
- **Multas e embargos**: a prefeitura pode multar ou embargar a construção

## O que torna um imóvel "irregular"?

- Construção sem Habite-se
- Ampliação não averbada na matrícula
- Terreno sem matrícula individualizada
- Área construída diferente da registrada
- Construção em área de posse (sem registro)

## Habite-se vs REURB: quando usar cada um?

| Critério | Habite-se | REURB |
|---|---|---|
| Quando usar | Imóvel em terreno com matrícula própria | Imóvel em área sem matrícula ou em posse |
| Base legal | LC 060/2000 (Código de Obras) | Lei Federal 13.465/2017 |
| Resultado | Certificado de conclusão da obra | Certidão de Regularização Fundiária + matrícula |
| Prazo médio | 3 a 6 meses | 6 a 12 meses |
| Custo médio | R$ 7.000 – R$ 25.000 | R$ 5.000 – R$ 15.000 |

## Como regularizar antes de vender

### Passo 1: Diagnóstico
Contrate um engenheiro para avaliar a situação documental e física do imóvel.

### Passo 2: Regularização
Dependendo do caso, o processo envolve: obter Habite-se, averbar a construção, retificar a área ou realizar a REURB.

### Passo 3: Atualização da matrícula
Com todos os documentos em ordem, a matrícula é atualizada no cartório.

## Quanto se valoriza após a regularização?

Estudos do SECOVI-SC indicam que a regularização pode **valorizar o imóvel entre 20% e 40%**. Além do valor financeiro, a segurança jurídica permite:
- Venda com escritura pública
- Financiamento bancário
- Uso como garantia em empréstimos
- Inventário e partilha facilitados

## Conclusão

Vender um imóvel irregular é possível, mas arriscado e desvantajoso. O investimento em regularização se paga pela valorização e pela segurança da transação.

**Quer regularizar seu imóvel antes de vender?** A 4Projetos pode ajudar. Consultoria gratuita pelo WhatsApp.
    `,
    faqs: [
      {
        q: "Contrato de gaveta tem validade legal?",
        a: "O contrato de gaveta tem validade entre as partes como obrigação pessoal, mas não transfere a propriedade do imóvel. Perante terceiros e para fins de financiamento, apenas o registro em cartório garante a propriedade (Lei nº 6.015/1973).",
      },
      {
        q: "O banco financia imóvel irregular?",
        a: "Não. Bancos e instituições financeiras exigem matrícula atualizada com averbação da construção e Habite-se para conceder financiamento imobiliário. Também não é possível usar o FGTS.",
      },
      {
        q: "Quanto custa regularizar antes de vender?",
        a: "O custo varia de R$ 7.000 a R$ 40.000, incluindo honorários de engenharia, taxas da prefeitura, INSS da obra e emolumentos do cartório. Considerando a valorização de 20-40%, o retorno sobre o investimento costuma ser muito positivo.",
      },
      {
        q: "Posso regularizar um imóvel que comprei por contrato de gaveta?",
        a: "Depende da situação. Se o terreno tem matrícula em nome do vendedor anterior, é possível fazer a escritura e regularizar. Em áreas de posse, a REURB (Lei 13.465/2017) pode ser a solução.",
      },
    ],
  },
  {
    slug: "quanto-custa-regularizar-imovel-2026",
    title: "Quanto Custa Regularizar um Imóvel em 2026?",
    description:
      "Saiba quanto custa regularizar um imóvel em 2026. Valores de engenharia, taxas da prefeitura, cartório e INSS — tudo detalhado.",
    keyword: "quanto custa regularizar imóvel",
    date: "2026-05-01",
    lastUpdated: "2026-05-02",
    readTime: "6 min",
    category: "regularizacao",
    quickAnswer: "O custo total para regularizar um imóvel em 2026 varia de R$ 7.000 a R$ 40.000, incluindo honorários de engenharia (R$ 3.000–R$ 15.000), taxas da prefeitura (R$ 500–R$ 3.000), INSS de obra (R$ 3.000–R$ 20.000) e cartório (R$ 500–R$ 2.000). O valor exato depende da área, padrão e complexidade.",
    content: `
## Os custos envolvidos na regularização

Regularizar um imóvel envolve diferentes etapas, cada uma com seus custos. Segundo o **CUB/SC** (Custo Unitário Básico da Construção Civil em Santa Catarina, SINDUSCON-SC, Janeiro/2026), o custo de referência para construção residencial padrão normal em SC é de **R$ 2.456,78/m²** — esse valor é a base para o cálculo do INSS de obra pela Receita Federal.

## 1. Honorários de engenharia

O engenheiro civil é responsável por:
- Levantamento cadastral do imóvel
- Elaboração dos projetos técnicos
- Acompanhamento do processo na prefeitura

**Valores médios em Florianópolis (2026):**
| Tipo de imóvel | Faixa de valor |
|---|---|
| Casa até 100m² | R$ 3.000 – R$ 6.000 |
| Casa 100-200m² | R$ 5.000 – R$ 10.000 |
| Casa acima de 200m² | R$ 8.000 – R$ 15.000 |
| Comercial / Multifamiliar | R$ 10.000 – R$ 25.000+ |

*Valores incluem projeto arquitetônico e acompanhamento. Projetos complementares (estrutural, elétrico) são cobrados à parte quando necessários.*

## 2. Taxas da prefeitura

A Prefeitura de Florianópolis cobra taxas para análise e aprovação, conforme a **Lei Complementar nº 060/2000**:
- **Taxa de análise de projeto**: varia conforme a área
- **Taxa de Habite-se**: proporcional à metragem
- **Eventuais multas**: por construção sem alvará (variam caso a caso)

Em geral, as taxas municipais ficam entre **R$ 500 e R$ 3.000** para imóveis residenciais.

## 3. INSS sobre a obra

A Receita Federal exige o recolhimento do INSS sobre a obra para emitir a CND (Certidão Negativa de Débitos), conforme **IN RFB nº 2.110/2022**. O cálculo considera:
- Área construída
- Padrão da construção (baixo, normal, alto)
- Mão de obra estimada pelo sistema SERO

**Valores médios:**
- Casa simples (80m²): R$ 3.000 – R$ 6.000
- Casa padrão normal (150m²): R$ 6.000 – R$ 12.000
- Casa padrão alto (200m²+): R$ 10.000 – R$ 20.000

*O INSS é frequentemente o maior custo da regularização. Obras com mais de 5 anos podem se beneficiar da decadência tributária (Art. 150, §4º do CTN).*

## 4. Emolumentos do cartório

O registro da averbação no Cartório de Registro de Imóveis custa entre **R$ 500 e R$ 2.000**, com valores tabelados conforme a **Lei Estadual de Custas e Emolumentos de SC**.

## Resumo dos custos totais

| Etapa | Faixa estimada |
|---|---|
| Engenharia (projeto + acompanhamento) | R$ 3.000 – R$ 15.000 |
| Taxas da prefeitura | R$ 500 – R$ 3.000 |
| INSS da obra | R$ 3.000 – R$ 20.000 |
| Cartório (averbação) | R$ 500 – R$ 2.000 |
| **Total estimado** | **R$ 7.000 – R$ 40.000** |

## Vale a pena o investimento?

Segundo pesquisa do **SECOVI-SC (2023)**, a regularização valoriza o imóvel em **20% a 40%**. Um imóvel de R$ 500.000 pode ganhar R$ 100.000 ou mais de valor de mercado.

Além disso, sem a regularização:
- Não é possível financiar
- Não é possível vender com segurança
- Há risco de multas e embargos

## Como reduzir os custos?

- Aproveite programas como o **Floripa Regular** (Decreto Municipal nº 23.898/2023 — taxas reduzidas)
- Regularize vários imóveis de uma vez (desconto em honorários)
- Verifique se o INSS da obra está decadente (obras com +5 anos)
- Mantenha a documentação organizada (reduz retrabalho)

## Conclusão

O custo de regularizar varia conforme o imóvel, mas o investimento se paga com a valorização e a segurança. Solicite um orçamento personalizado para saber exatamente quanto custará no seu caso.

**Orçamento gratuito e sem compromisso.** Fale com a 4Projetos.
    `,
    faqs: [
      {
        q: "Qual o maior custo na regularização de imóvel?",
        a: "Na maioria dos casos, o INSS sobre a obra é o maior custo, podendo variar de R$ 3.000 a R$ 20.000 conforme a área e o padrão da construção. Obras com mais de 5 anos podem ter o INSS decadente, reduzindo significativamente o custo total.",
      },
      {
        q: "Posso parcelar os custos da regularização?",
        a: "Sim. A maioria dos escritórios de engenharia, incluindo a 4Projetos, oferece pagamento parcelado conforme as etapas do serviço. O INSS da obra também pode ser parcelado junto à Receita Federal.",
      },
      {
        q: "O programa Floripa Regular reduz os custos?",
        a: "Sim. O Floripa Regular oferece isenção ou redução de taxas municipais e multas por construção sem alvará. É uma excelente oportunidade para quem precisa regularizar e quer economizar nas taxas da prefeitura.",
      },
      {
        q: "A regularização se paga sozinha?",
        a: "Na maioria dos casos, sim. A valorização de 20% a 40% no preço do imóvel costuma superar o custo total da regularização. Além disso, o imóvel passa a poder ser financiado e vendido com segurança.",
      },
    ],
  },
  {
    slug: "documentos-para-regularizar-imovel",
    title: "Documentos Necessários para Regularização de Imóveis",
    description:
      "Lista completa dos documentos necessários para regularizar um imóvel. Saiba o que reunir antes de iniciar o processo de regularização.",
    keyword: "documentos regularizar imóvel",
    date: "2026-05-01",
    lastUpdated: "2026-05-02",
    readTime: "5 min",
    category: "regularizacao",
    quickAnswer: "Os principais documentos para regularizar um imóvel são: matrícula atualizada do terreno, IPTU quitado, RG/CPF do proprietário, projeto arquitetônico (elaborado por engenheiro), ART, e comprovantes específicos conforme o tipo de regularização (Habite-se, REURB ou averbação).",
    content: `
## Documentos do proprietário

Antes de iniciar o processo, reúna:
- **RG e CPF** do proprietário (ou CNPJ se pessoa jurídica)
- **Certidão de casamento** (se aplicável — exigência do Art. 1.647 do **Código Civil**)
- **Comprovante de endereço** atualizado
- **Procuração** (caso um terceiro represente o proprietário)

## Documentos do imóvel

### Obrigatórios
- **Matrícula atualizada** do terreno (emitida pelo Cartório de Registro de Imóveis, com validade de 30 dias — Art. 21 da **Lei nº 7.433/1985**)
- **Carnê do IPTU** atualizado e sem débitos
- **Escritura pública** ou contrato de compra e venda

### Quando disponíveis
- Alvará de construção original (se existir)
- Plantas aprovadas anteriormente
- Habite-se de construções anteriores
- ART/RRT de obras realizadas

Segundo o **Tribunal de Justiça de SC**, processos com documentação completa desde o início têm **tempo de tramitação até 50% menor** do que aqueles com documentos incompletos.

## Documentos técnicos (elaborados pelo engenheiro)

O engenheiro civil responsável vai elaborar:

### 1. Projeto Arquitetônico
- Planta de situação e locação
- Plantas baixas de todos os pavimentos
- Cortes longitudinal e transversal
- Fachadas
- Quadro de áreas

### 2. ART — Anotação de Responsabilidade Técnica
Documento emitido pelo CREA que vincula o engenheiro ao projeto e à obra, conforme a **Lei nº 6.496/1977**.

### 3. Memorial Descritivo
Descrição detalhada da construção: materiais, acabamentos, sistemas construtivos.

### 4. Laudo de Estabilidade Estrutural
Quando exigido pela prefeitura, atesta que a construção existente é segura e estável. Obrigatório para edificações com mais de **20 anos** ou com sinais de patologia estrutural.

### 5. Levantamento Topográfico
Quando há divergência entre as medidas do terreno e a matrícula. Deve ser elaborado conforme a **NBR 13.133** (Execução de Levantamento Topográfico).

## Documentos específicos por tipo de regularização

### Para Habite-se
- Todos os itens acima
- Comprovante de quitação de taxas municipais
- Laudo do Corpo de Bombeiros (PPCI) — para imóveis comerciais ou multifamiliares, conforme **IN 001/CBMSC**
- Licença ambiental (quando em APP — Art. 4º do **Código Florestal, Lei nº 12.651/2012**)

### Para Averbação
- Habite-se emitido
- CND do INSS sobre a obra (IN RFB nº 2.110/2022)
- ART do responsável técnico
- Requerimento ao cartório

### Para REURB
- Comprovante de posse (contas de luz, água, IPTU) — Art. 31 da **Lei nº 13.465/2017**
- Planta e memorial do imóvel
- Documentos pessoais dos ocupantes
- Certidão da matrícula (ou certidão negativa de matrícula)

## Dicas importantes

- **Mantenha tudo atualizado**: matrículas e certidões têm prazo de validade (30 dias)
- **Organize digitalmente**: cópias digitalizadas agilizam o processo
- **Consulte antes de reunir tudo**: um diagnóstico técnico indica exatamente o que você precisa, evitando gastos desnecessários

## Conclusão

A documentação é a base de qualquer regularização. Com os documentos certos em mãos, o processo se torna muito mais ágil e econômico.

**Não sabe quais documentos precisa?** A 4Projetos faz o diagnóstico gratuito do seu imóvel.
    `,
    faqs: [
      {
        q: "A matrícula do imóvel precisa estar atualizada?",
        a: "Sim. A matrícula precisa ter sido emitida nos últimos 30 dias para ser válida no processo de regularização. Isso garante que não há ônus ou alterações recentes não consideradas.",
      },
      {
        q: "Preciso quitar o IPTU para regularizar?",
        a: "Sim. A Prefeitura de Florianópolis exige comprovação de quitação do IPTU para análise do Habite-se. Débitos pendentes devem ser negociados antes do protocolo.",
      },
      {
        q: "O que é ART e por que é obrigatória?",
        a: "A ART (Anotação de Responsabilidade Técnica) é o documento do CREA que vincula o engenheiro ao projeto, garantindo responsabilidade técnica. É obrigatória por lei (Lei nº 6.496/1977) e protege tanto o profissional quanto o proprietário.",
      },
      {
        q: "Posso usar documentos de outros estados?",
        a: "Sim, desde que estejam válidos e, quando necessário, com reconhecimento de firma ou apostilamento. Matrículas de imóveis devem ser do cartório competente pela circunscrição do imóvel em SC.",
      },
    ],
  },
  {
    slug: "averbacao-de-imovel-passo-a-passo",
    title: "Averbação de Imóvel: Passo a Passo Completo",
    description:
      "Entenda o que é averbação de imóvel, quando é necessária e o passo a passo completo para averbar sua construção no cartório.",
    keyword: "averbação de imóvel",
    date: "2026-05-01",
    lastUpdated: "2026-05-02",
    readTime: "6 min",
    category: "regularizacao",
    quickAnswer: "Averbação é o registro na matrícula do imóvel de qualquer alteração posterior, como construção, demolição ou mudança de área. Para averbar uma construção, é necessário ter o Habite-se, CND do INSS e ART do engenheiro. O processo no cartório leva de 15 a 30 dias.",
    content: `
## O que é a Averbação?

Averbação é o ato de registrar na matrícula do imóvel qualquer alteração que aconteça após o registro inicial, conforme o **Art. 167, II da Lei nº 6.015/1973** (Lei dos Registros Públicos). No contexto da construção civil, a averbação mais comum é a **averbação de construção** — que registra que existe uma edificação no terreno.

## Por que a averbação é importante?

Segundo dados do **Registro de Imóveis de Florianópolis (1ª e 2ª Zonas)**, cerca de **35% dos imóveis urbanos da cidade possuem construções não averbadas** na matrícula. Isso significa que, oficialmente, essas construções não existem.

Sem a averbação:
- A construção **não existe oficialmente** perante o cartório
- O imóvel vale menos no mercado (até 40% a menos, conforme SECOVI-SC)
- Não é possível obter financiamento bancário
- Dificulta inventários e partilhas (Art. 1.784 do **Código Civil**)
- Pode gerar problemas em ações judiciais

## Quando a averbação é necessária?

- Após construir uma edificação nova
- Após reformar ou ampliar uma construção existente
- Após demolir parte do imóvel
- Quando há mudança de uso (residencial para comercial)
- Para atualizar a área construída na matrícula

## Passo a passo da averbação

### 1. Obtenha o Habite-se
O primeiro passo é ter o Habite-se emitido pela prefeitura. Se sua construção ainda não possui, é preciso regularizar primeiro.

### 2. Recolha o INSS da obra
A Receita Federal exige o recolhimento do INSS sobre a mão de obra da construção, conforme **IN RFB nº 2.110/2022**. Após o pagamento, é emitida a CND (Certidão Negativa de Débitos).

**Como calcular o INSS:**
O cálculo é feito pelo sistema SERO da Receita Federal, considerando:
- Área construída
- Padrão da construção (CUB/SC: R$ 2.456,78/m² para padrão normal em 2026)
- Tipo de obra (nova, reforma, ampliação)

### 3. Reúna a documentação
- Habite-se original
- CND do INSS
- ART do engenheiro responsável
- Requerimento de averbação
- RG e CPF do proprietário
- Matrícula atualizada

### 4. Protocole no cartório
Leve toda a documentação ao Cartório de Registro de Imóveis competente. O cartório analisará os documentos e, estando tudo conforme, realizará a averbação.

### 5. Receba a matrícula atualizada
Após a averbação, a matrícula do imóvel é atualizada com a descrição da construção: área construída, número de pavimentos e características.

## Prazos e custos

### Prazo
- Análise do cartório: 15 a 30 dias (Art. 188 da Lei nº 6.015/1973)
- Processo total (incluindo Habite-se e INSS): 90 a 180 dias

### Custos
| Componente | Valor estimado |
|---|---|
| Emolumentos do cartório | R$ 500 – R$ 2.000 |
| INSS da obra | Variável (ver artigo sobre custos) |
| Honorários do engenheiro | Inclusos no serviço de regularização |

## Averbação vs. Registro: qual a diferença?

| | Registro | Averbação |
|---|---|---|
| O que é | Ato que transfere a propriedade | Ato que altera dados da matrícula |
| Quando | Compra/venda, doação, herança | Construção, demolição, mudança de nome |
| Efeito | Cria ou transfere direito real | Atualiza informação existente |
| Base legal | Art. 167, I da Lei 6.015/73 | Art. 167, II da Lei 6.015/73 |

## Conclusão

A averbação é o passo final e essencial da regularização. Sem ela, sua construção não existe oficialmente. O processo é burocrático, mas com acompanhamento profissional se torna simples e seguro.

**Precisa averbar sua construção?** A 4Projetos acompanha todo o processo. Consultoria gratuita.
    `,
    faqs: [
      {
        q: "Qual o prazo para averbar uma construção no cartório?",
        a: "O cartório tem um prazo legal de até 30 dias para analisar e processar a averbação (Art. 188 da Lei nº 6.015/1973). Na prática, com documentação completa, o processo é concluído em 15 a 20 dias.",
      },
      {
        q: "Posso averbar sem o Habite-se?",
        a: "Não. O Habite-se é pré-requisito para a averbação de construção. Sem ele, o cartório não realizará a averbação. É preciso primeiro obter o Habite-se junto à prefeitura.",
      },
      {
        q: "Quanto custa a averbação no cartório?",
        a: "Os emolumentos do cartório variam de R$ 500 a R$ 2.000, conforme o valor venal do imóvel e a tabela de custas do estado de SC. Esse é apenas o custo cartorial, sem considerar honorários de engenharia e INSS.",
      },
      {
        q: "O que acontece se eu não averbar a construção?",
        a: "A construção não existe oficialmente na matrícula. Isso impede financiamento bancário, desvaloriza o imóvel em até 40%, dificulta inventário e partilha, e pode gerar problemas em disputas judiciais.",
      },
    ],
  },
  {
    slug: "reurb-vs-usucapiao-qual-escolher",
    title: "REURB vs Usucapião: Qual Escolher para Regularizar seu Imóvel?",
    description:
      "Entenda as diferenças entre REURB e Usucapião, quando usar cada instrumento, prazos, custos e qual é o melhor caminho para regularizar seu imóvel em Florianópolis.",
    keyword: "reurb vs usucapião",
    date: "2026-03-15",
    lastUpdated: "2026-05-02",
    readTime: "9 min",
    category: "regularizacao",
    quickAnswer: "A REURB (Lei 13.465/2017) é mais rápida e acessível para ocupações em núcleos urbanos informais consolidados até 2016. A Usucapião exige posse mansa e pacífica por 5 a 15 anos e tramita judicialmente. Em Florianópolis, a REURB é o caminho preferencial na maioria dos casos por ser administrativa e mais econômica.",
    content: `
## Introdução

Regularizar a posse de um imóvel pode seguir dois caminhos jurídicos principais: a REURB (Regularização Fundiária Urbana) e a Usucapião. Ambos garantem o título de propriedade, mas com processos, prazos e custos muito diferentes.

Segundo levantamento do Núcleo de Regularização Fundiária da Prefeitura de Florianópolis (PMF, 2024), **mais de 60 núcleos urbanos informais já foram identificados na cidade**, beneficiando potencialmente milhares de famílias que podem usar a REURB como caminho mais acessível.

## O que é a REURB?

A Regularização Fundiária Urbana foi instituída pela **Lei Federal nº 13.465/2017** e regulamentada pelo **Decreto nº 9.310/2018**. É um procedimento administrativo (não judicial) que regulariza ocupações em núcleos urbanos informais consolidados.

### Modalidades da REURB:
- **REURB-S (Social):** Para população de baixa renda (até 5 salários mínimos). Custos reduzidos ou gratuitos, com isenção de emolumentos cartorários.
- **REURB-E (Específica):** Para demais casos. Custos pagos pelo beneficiário, mas ainda mais acessíveis que a via judicial.

### Requisitos:
- Núcleo urbano informal consolidado até 22/12/2016
- Área urbana ou de expansão urbana
- Demarcação urbanística aprovada pelo município

## O que é a Usucapião?

A Usucapião é um instituto do **Código Civil (Lei 10.406/2002, Arts. 1.238 a 1.244)** que permite adquirir propriedade pela posse prolongada, mansa e pacífica.

### Modalidades principais:
- **Extraordinária:** 15 anos de posse (10 se houver moradia ou obras). Não exige justo título.
- **Ordinária:** 10 anos de posse (5 se houver moradia). Exige justo título e boa-fé.
- **Especial Urbana (Constitucional):** 5 anos, imóvel até 250m², para moradia. Art. 183 da Constituição Federal.

## Comparação direta

| Critério | REURB | Usucapião |
|----------|-------|-----------|
| **Via** | Administrativa (prefeitura) | Judicial ou extrajudicial (cartório) |
| **Prazo médio** | 6 a 18 meses | 2 a 5 anos (judicial) |
| **Custo estimado** | R$ 3.000 – R$ 15.000 (REURB-E) | R$ 8.000 – R$ 30.000+ |
| **Base legal** | Lei 13.465/2017 | Código Civil + CF/88 |
| **Requisito temporal** | Ocupação até 22/12/2016 | 5 a 15 anos de posse |
| **Abrangência** | Coletiva (núcleo inteiro) | Individual |
| **Isenção cartorial** | Sim (REURB-S) | Não |

## Quando usar cada um?

### Prefira a REURB quando:
- O imóvel está em núcleo urbano informal consolidado
- A ocupação é anterior a dezembro/2016
- O município tem programa de regularização ativo (como o Floripa Regular — Decreto 23.898/2023)
- Você quer um processo mais rápido e econômico

### Prefira a Usucapião quando:
- O imóvel não se enquadra nos critérios da REURB
- A posse é individual e não faz parte de núcleo informal
- Você tem documentos que comprovam posse longa (contratos, IPTU, contas)
- O terreno é particular (não público)

## A realidade em Florianópolis

O programa **Floripa Regular** (Decreto Municipal nº 23.898/2023) tem facilitado a REURB na cidade. Dados da PMF indicam que o programa já mapeou mais de 60 núcleos urbanos informais, com prioridade para bairros como Campeche, Lagoa da Conceição e Rio Vermelho.

Para usucapião extrajudicial, os cartórios de Florianópolis processam o pedido conforme a **Lei 13.105/2015 (CPC), Art. 216-A**, com prazo médio de 6 a 12 meses quando não há impugnação.

## Conclusão

Na maioria dos casos em Florianópolis, a REURB é o caminho mais vantajoso: mais rápido, mais barato e com possibilidade de isenção para baixa renda. A Usucapião continua sendo a alternativa para situações que não se enquadram na REURB.

**Dúvidas sobre qual caminho seguir?** A 4Projetos faz o diagnóstico gratuito do seu caso.
    `,
    faqs: [
      {
        q: "A REURB funciona para terrenos públicos?",
        a: "Sim. A REURB pode regularizar ocupações em áreas públicas (REURB-S) e privadas (REURB-E). É uma das vantagens sobre a Usucapião, que não se aplica a imóveis públicos (Súmula 340 do STF).",
      },
      {
        q: "Posso fazer Usucapião de imóvel em condomínio irregular?",
        a: "É possível, mas complexo. Geralmente, a REURB é o instrumento mais indicado para regularizar condomínios informais como um todo, pois permite a regularização coletiva do núcleo.",
      },
      {
        q: "Quanto tempo demora a REURB em Florianópolis?",
        a: "O prazo médio é de 6 a 18 meses, dependendo da complexidade do núcleo e da documentação disponível. Núcleos já mapeados pelo Floripa Regular tendem a ser mais rápidos.",
      },
    ],
  },
  {
    slug: "projeto-eletrico-residencial-guia-completo",
    title: "Projeto Elétrico Residencial: Guia Completo para Santa Catarina",
    description:
      "Tudo sobre projeto elétrico residencial em SC: normas, etapas, custos, documentos e por que é obrigatório. Guia atualizado para 2026.",
    keyword: "projeto elétrico residencial sc",
    date: "2026-03-22",
    lastUpdated: "2026-05-02",
    readTime: "8 min",
    category: "engenharia",
    quickAnswer: "O projeto elétrico residencial é obrigatório para construções novas e reformas com ampliação de carga em SC. Deve seguir a NBR 5410/2004 e as normas da CELESC (ND-06). Custa entre R$ 1.500 e R$ 5.000 para residências e é elaborado por engenheiro eletricista ou civil com atribuição.",
    content: `
## O que é o projeto elétrico residencial?

O projeto elétrico é o documento técnico que define toda a instalação elétrica de uma edificação: pontos de luz, tomadas, circuitos, quadro de distribuição, aterramento, dimensionamento de cabos e proteções.

É obrigatório para:
- Construções novas
- Reformas com ampliação de carga
- Ampliações que adicionem novos circuitos
- Regularização de edificações junto à prefeitura

## Base legal e normas

O projeto elétrico residencial deve atender:
- **NBR 5410:2004** — Instalações elétricas de baixa tensão (ABNT)
- **ND-06 da CELESC** — Norma de fornecimento de energia para edificações em SC
- **NR 10** — Segurança em instalações e serviços em eletricidade (MTE)
- **Lei Complementar 060/2000** — Código de Obras de Florianópolis

Segundo dados da CELESC (Centrais Elétricas de Santa Catarina), **35% dos pedidos de ligação nova são devolvidos por falhas no projeto elétrico**, geralmente por dimensionamento incorreto do padrão de entrada.

## Etapas do projeto

### 1. Levantamento de demanda
Análise da quantidade de pontos (tomadas, iluminação), potência dos equipamentos (chuveiro, ar-condicionado, forno elétrico) e cálculo da demanda total.

### 2. Dimensionamento do padrão de entrada
O padrão de entrada (monofásico, bifásico ou trifásico) é definido pela demanda total, seguindo a tabela da ND-06 da CELESC:
- **Monofásico:** até 12 kW
- **Bifásico:** de 12 kW a 25 kW
- **Trifásico:** acima de 25 kW

### 3. Projeto dos circuitos
Divisão da instalação em circuitos independentes (iluminação, tomadas gerais, tomadas especiais), com dimensionamento de cabos e disjuntores conforme a NBR 5410.

### 4. Quadro de distribuição
Especificação do quadro geral (QDG), disjuntores, dispositivos DR (diferencial residual — obrigatório pela NBR 5410) e dispositivos de proteção contra surtos (DPS).

### 5. Projeto de aterramento
Sistema de aterramento conforme NBR 5419 (proteção contra descargas atmosféricas) e NBR 5410 (aterramento funcional e de proteção).

### 6. Memorial de cálculo
Documento com todos os cálculos de dimensionamento: queda de tensão, corrente de curto-circuito, fator de demanda e fator de simultaneidade.

## Custos em Santa Catarina

| Item | Valor estimado |
|------|---------------|
| Projeto elétrico residencial (até 200m²) | R$ 1.500 – R$ 3.000 |
| Projeto elétrico residencial (200-400m²) | R$ 3.000 – R$ 5.000 |
| ART do projeto | R$ 100 – R$ 250 |
| Taxa CELESC (vistoria) | R$ 80 – R$ 200 |

Dados baseados na tabela de honorários do CREA-SC (2025) e valores praticados no mercado catarinense.

## Erros mais comuns

1. **Subdimensionamento do padrão de entrada** — Causa devoluções na CELESC
2. **Ausência de DR** — Obrigatório pela NBR 5410 desde 1997
3. **Falta de circuito exclusivo para chuveiro** — Cada chuveiro precisa de circuito dedicado
4. **Aterramento inadequado** — Risco de choque e danos a equipamentos
5. **Quadro sem reserva** — Norma exige 20% de espaço reserva no QDG

## Conclusão

O projeto elétrico não é apenas uma exigência burocrática — é uma questão de segurança. Instalações elétricas são a **3ª maior causa de incêndios residenciais no Brasil**, segundo o Corpo de Bombeiros de SC (CBMSC, 2024).

**Precisa de projeto elétrico?** A 4Projetos elabora projetos conforme NBR 5410 e ND-06 CELESC. Orçamento gratuito.
    `,
    faqs: [
      {
        q: "Preciso de projeto elétrico para reforma?",
        a: "Se a reforma incluir ampliação de carga (novos chuveiros, ar-condicionado, etc.) ou novos circuitos, sim. Para reformas estéticas sem alteração elétrica, não é obrigatório, mas é recomendado uma verificação da instalação existente.",
      },
      {
        q: "Qual profissional pode fazer projeto elétrico?",
        a: "Engenheiro eletricista ou engenheiro civil com atribuição em instalações elétricas (conforme resolução do CREA). O profissional deve emitir ART (Anotação de Responsabilidade Técnica).",
      },
      {
        q: "Em quanto tempo a CELESC aprova o projeto?",
        a: "O prazo padrão da CELESC para análise e vistoria é de 5 a 15 dias úteis. Projetos com pendências podem levar mais tempo. A vistoria é agendada após protocolo do projeto.",
      },
    ],
  },
  {
    slug: "como-escolher-engenheiro-civil-confiavel",
    title: "Como Escolher um Engenheiro Civil Confiável em Florianópolis",
    description:
      "Critérios essenciais para contratar um engenheiro civil em Florianópolis: registro CREA, especialidades, como avaliar portfólio e evitar problemas.",
    keyword: "como contratar engenheiro civil",
    date: "2026-03-29",
    lastUpdated: "2026-05-02",
    readTime: "7 min",
    category: "engenharia",
    quickAnswer: "Para escolher um engenheiro civil confiável, verifique o registro ativo no CREA-SC, peça ART de obras anteriores, analise portfólio de projetos similares ao seu, confirme especialidade (regularização, estrutural, projetos) e compare pelo menos 3 orçamentos detalhados. Desconfie de preços muito abaixo do mercado.",
    content: `
## Por que a escolha do engenheiro é tão importante?

O engenheiro civil é o profissional responsável por projetos, regularização e acompanhamento de obras. Uma escolha errada pode resultar em:
- Projetos reprovados pela prefeitura
- Custos adicionais com correções
- Atrasos de meses no cronograma
- Problemas estruturais graves

Dados do CREA-SC (Conselho Regional de Engenharia e Agronomia de SC, 2024) indicam que Santa Catarina tem **mais de 25.000 engenheiros civis registrados**, mas nem todos atuam na área que você precisa.

## 7 critérios para escolher bem

### 1. Registro ativo no CREA-SC

O primeiro passo é verificar se o profissional tem registro ativo. Consulte gratuitamente no site do CREA-SC (www.crea-sc.org.br). Profissionais sem registro estão exercendo a profissão ilegalmente — conforme **Lei Federal nº 5.194/1966**.

### 2. ART — Anotação de Responsabilidade Técnica

Todo serviço de engenharia exige ART, conforme **Lei 6.496/1977**. A ART é a garantia de que o profissional assume responsabilidade técnica pelo serviço. Peça ARTs de projetos anteriores como referência.

### 3. Especialidade compatível

Engenharia civil é ampla. Verifique se o profissional tem experiência na sua necessidade:
- **Regularização de imóveis**: Habite-se, averbação, REURB
- **Projetos arquitetônicos**: Novas construções e reformas
- **Projetos estruturais**: Cálculo e dimensionamento
- **Perícias e laudos**: Avaliações e vistorias

### 4. Portfólio e referências

Peça exemplos de projetos similares ao seu. Um engenheiro que regulariza imóveis rotineiramente em Florianópolis conhece:
- Os trâmites da Secretaria de Urbanismo (SMDU)
- As exigências do Plano Diretor (LC 482/2014)
- Os prazos reais de cada etapa
- Os custos de taxas e emolumentos

### 5. Orçamento detalhado

Um orçamento profissional deve especificar:
- Escopo exato do serviço
- Prazo de entrega
- O que está incluído e excluído
- Forma de pagamento
- Custos de taxas (prefeitura, cartório, INSS) separados dos honorários

Segundo a tabela de honorários do CREA-SC, os valores mínimos sugeridos para projetos são de **R$ 15 a R$ 50/m²**, variando conforme a complexidade.

### 6. Contrato formal

Exija contrato escrito com:
- Descrição dos serviços
- Prazos com marcos intermediários
- Valor e condições de pagamento
- Multas por atraso (ambas as partes)
- Cláusula de rescisão

### 7. Comunicação e transparência

O engenheiro deve ser acessível, explicar os processos em linguagem clara e manter você informado sobre o andamento. Desconfie de profissionais que não respondem ou não explicam as etapas.

## Red flags — quando desconfiar

- Preço muito abaixo da tabela do CREA-SC
- Não emite ART
- Não tem registro no CREA ou está inativo
- Não apresenta portfólio ou referências
- Pede pagamento integral antecipado
- Não fornece contrato escrito

## Quanto custa contratar um engenheiro em Florianópolis?

| Serviço | Faixa de preço |
|---------|---------------|
| Habite-se simples | R$ 3.000 – R$ 8.000 |
| Projeto arquitetônico residencial | R$ 15 – R$ 40/m² |
| Projeto estrutural | R$ 8 – R$ 20/m² |
| Regularização completa | R$ 7.000 – R$ 25.000 |
| Laudo técnico/vistoria | R$ 1.500 – R$ 5.000 |

Valores praticados no mercado de Florianópolis (referência: SINDUSCON-SC e CREA-SC, 2025).

## Conclusão

Escolher o engenheiro certo é o investimento mais importante do seu projeto. Priorize profissionais com experiência local, registro ativo, portfólio comprovado e comunicação transparente.

**Precisa de engenheiro em Florianópolis?** A 4Projetos atua com equipe própria registrada no CREA-SC. Diagnóstico gratuito.
    `,
    faqs: [
      {
        q: "Como verificar se um engenheiro tem registro no CREA?",
        a: "Acesse o site do CREA-SC (crea-sc.org.br) e use a busca por profissional. Informe o nome ou número de registro. O sistema mostra se o registro está ativo, a especialidade e as ARTs emitidas.",
      },
      {
        q: "Engenheiro civil pode fazer projeto elétrico?",
        a: "Depende da formação. Engenheiros civis podem ter atribuição para projetos elétricos residenciais conforme a grade curricular da faculdade. Verifique as atribuições no registro do CREA. Para instalações complexas, um engenheiro eletricista é mais indicado.",
      },
      {
        q: "O que é ART e por que é importante?",
        a: "ART (Anotação de Responsabilidade Técnica) é o documento que vincula o engenheiro ao serviço prestado. É obrigatória por lei (Lei 6.496/1977) e funciona como sua garantia: se algo der errado, o profissional é responsável técnica e legalmente.",
      },
    ],
  },
  {
    slug: "diferenca-projeto-estrutural-arquitetonico",
    title: "Diferença entre Projeto Estrutural e Arquitetônico: Guia Prático",
    description:
      "Entenda a diferença entre projeto estrutural e arquitetônico, quando cada um é necessário, custos e como eles se complementam na construção.",
    keyword: "projeto estrutural vs arquitetonico",
    date: "2026-04-12",
    lastUpdated: "2026-05-02",
    readTime: "7 min",
    category: "engenharia",
    quickAnswer: "O projeto arquitetônico define o design, layout e estética da construção (plantas, fachadas, volumetria). O projeto estrutural calcula a resistência e dimensiona vigas, pilares, lajes e fundações para garantir a segurança. Ambos são obrigatórios para construções novas em Florianópolis e se complementam.",
    content: `
## Introdução

Uma dúvida muito comum é: preciso de projeto arquitetônico ou estrutural? Na verdade, para construções novas, **ambos são obrigatórios** — e cumprem funções completamente diferentes.

Segundo o SINDUSCON-SC (Sindicato da Indústria da Construção Civil de SC), **projetos mal coordenados entre arquitetura e estrutura são responsáveis por 25% dos atrasos em obras residenciais** na Grande Florianópolis.

## Projeto Arquitetônico

### O que é?
É o projeto que define a forma, os espaços e a estética da edificação. É elaborado por **arquiteto** (CAU) ou **engenheiro civil** com atribuição (CREA).

### O que contém?
- Planta baixa (layout dos ambientes)
- Cortes e fachadas
- Planta de cobertura
- Planta de situação e locação
- Quadro de áreas
- Memorial descritivo

### Quando é necessário?
- Construção nova
- Ampliação ou reforma com alteração de layout
- Regularização de imóvel (Habite-se)
- Mudança de uso do imóvel

### Base legal em Florianópolis
- **LC 482/2014** — Plano Diretor (define índices urbanísticos: taxa de ocupação, gabarito, afastamentos)
- **LC 060/2000** — Código de Obras (requisitos técnicos para aprovação)

## Projeto Estrutural

### O que é?
É o projeto que dimensiona todos os elementos que sustentam a edificação: fundações, pilares, vigas e lajes. É elaborado exclusivamente por **engenheiro civil** ou **engenheiro de estruturas**.

### O que contém?
- Planta de formas (dimensão dos elementos estruturais)
- Planta de armação (detalhamento das ferragens)
- Planta de fundação
- Memorial de cálculo
- Especificações de materiais (concreto fck, aço CA-50/CA-60)

### Quando é necessário?
- Toda construção nova com estrutura em concreto armado, aço ou madeira engenheirada
- Reformas que alterem elementos estruturais (remoção de paredes portantes, abertura de vãos)
- Edificações com mais de 1 pavimento
- Laudo de estabilidade para regularização

### Normas técnicas
- **NBR 6118:2023** — Projeto de estruturas de concreto armado
- **NBR 8681:2003** — Ações e segurança nas estruturas
- **NBR 6122:2022** — Projeto e execução de fundações

## Comparação resumida

| Aspecto | Projeto Arquitetônico | Projeto Estrutural |
|---------|----------------------|-------------------|
| **Foco** | Forma, espaços, estética | Segurança, resistência, estabilidade |
| **Profissional** | Arquiteto (CAU) ou Eng. Civil (CREA) | Engenheiro Civil/Estrutural (CREA) |
| **Registro** | RRT (CAU) ou ART (CREA) | ART (CREA) |
| **Custo médio** | R$ 15 – R$ 40/m² | R$ 8 – R$ 20/m² |
| **Aprovação** | Prefeitura (SMDU) | Não é aprovado na prefeitura, mas é exigido para Habite-se |

## Como eles se complementam?

1. O **arquitetônico** é feito primeiro — define o layout
2. O **estrutural** é feito em cima do arquitetônico — dimensiona a estrutura
3. Ambos devem ser compatibilizados (evitar pilar no meio da sala, viga abaixo do pé-direito, etc.)

O CUB/SC (Custo Unitário Básico da Construção em SC) de março/2026 — publicado pelo SINDUSCON-SC — é de **R$ 2.487,63/m²** para padrão normal (R-1-N). Desse valor, projetos representam em média 3-5% do custo total da obra.

## Conclusão

Não escolha entre um e outro — ambos são essenciais. O arquitetônico garante que sua construção funcione e agrade; o estrutural garante que ela fique de pé com segurança.

**Precisa de projeto arquitetônico ou estrutural?** A 4Projetos elabora ambos com equipe integrada. Orçamento gratuito.
    `,
    faqs: [
      {
        q: "Posso construir só com projeto arquitetônico, sem o estrutural?",
        a: "Para construções muito simples (como um muro ou edícula térrea em alvenaria autoportante), pode não ser exigido projeto estrutural. Para casas e edifícios, o projeto estrutural é essencial para a segurança e exigido para o Habite-se.",
      },
      {
        q: "O mesmo profissional pode fazer os dois projetos?",
        a: "Um engenheiro civil com atribuição em ambas as áreas pode fazer os dois. Arquitetos (CAU) fazem apenas o arquitetônico. Na prática, é comum ter profissionais diferentes trabalhando de forma integrada.",
      },
      {
        q: "Quanto tempo leva para fazer os projetos?",
        a: "O projeto arquitetônico leva de 15 a 30 dias. O estrutural, de 20 a 40 dias após a conclusão do arquitetônico. Para uma casa residencial, o prazo total é de 30 a 60 dias.",
      },
    ],
  },
  {
    slug: "ppci-o-que-e-quando-obrigatorio",
    title: "PPCI: O Que É e Quando É Obrigatório em Santa Catarina",
    description:
      "Guia completo sobre PPCI (Projeto de Prevenção Contra Incêndio) em SC: quando é obrigatório, documentos, custos, normas e como aprovar no Corpo de Bombeiros.",
    keyword: "ppci o que e",
    date: "2026-04-19",
    lastUpdated: "2026-05-02",
    readTime: "8 min",
    category: "engenharia",
    quickAnswer: "O PPCI (Projeto de Prevenção Contra Incêndio) é obrigatório em SC para edificações comerciais, multifamiliares (3+ unidades), com mais de 750m² ou 3+ pavimentos. É aprovado pelo Corpo de Bombeiros (CBMSC) e custa de R$ 2.000 a R$ 8.000, dependendo da complexidade. A base legal é a IN 001/CBMSC e a Lei Estadual 16.157/2013.",
    content: `
## O que é o PPCI?

O PPCI — Projeto de Prevenção Contra Incêndio — é o projeto técnico que define os sistemas de segurança contra incêndio e pânico de uma edificação. Inclui extintores, hidrantes, saídas de emergência, sinalização, iluminação de emergência e outros sistemas conforme a ocupação.

Em Santa Catarina, o PPCI é regulamentado pela **Lei Estadual nº 16.157/2013** e pelas Instruções Normativas do **CBMSC (Corpo de Bombeiros Militar de SC)**, especialmente a **IN 001/CBMSC**.

## Quando o PPCI é obrigatório?

O PPCI é exigido para:
- Edificações **comerciais** de qualquer porte
- Edificações **multifamiliares** com 3 ou mais unidades
- Edificações com mais de **750m² de área construída**
- Edificações com **3 ou mais pavimentos**
- **Mudança de uso** da edificação (residencial → comercial)
- **Ampliações** que ultrapassem os limites acima
- Locais de **reunião de público** (restaurantes, igrejas, academias)

### Quando NÃO é obrigatório?
- Residências unifamiliares (casas)
- Residências bifamiliares até 2 pavimentos
- Edificações com até 200m² e risco leve (conforme IN 001)

Dados do CBMSC (Relatório Anual 2024) indicam que **incêndios em edificações sem PPCI têm taxa de sinistro 4x maior** do que edificações com projeto aprovado.

## Documentos necessários

Para protocolar o PPCI no CBMSC:
1. Projeto arquitetônico aprovado na prefeitura
2. Projeto de prevenção contra incêndio (plantas, memoriais)
3. ART ou RRT do responsável técnico
4. Formulário de solicitação (SAT — Sistema de Análise Técnica online)
5. Taxa de análise

## Sistemas exigidos (exemplos por ocupação)

| Sistema | Residencial multifamiliar | Comercial | Reunião de público |
|---------|--------------------------|-----------|-------------------|
| Extintores | ✅ | ✅ | ✅ |
| Hidrantes | Acima de 750m² | ✅ | ✅ |
| Iluminação de emergência | ✅ | ✅ | ✅ |
| Sinalização | ✅ | ✅ | ✅ |
| Saída de emergência | ✅ | ✅ | ✅ |
| Alarme | — | Acima de 750m² | ✅ |
| Sprinklers | Acima de 30m altura | Acima de 30m | Acima de 1.000 pessoas |

## Etapas do processo

### 1. Elaboração do projeto
Engenheiro civil ou de segurança do trabalho com atribuição elabora o PPCI conforme as INs do CBMSC.

### 2. Protocolo no SAT
O projeto é protocolado online no Sistema de Análise Técnica (SAT) do CBMSC.

### 3. Análise pelo Corpo de Bombeiros
Prazo de **30 a 60 dias** para análise. Pode haver exigências de complementação.

### 4. Aprovação e Atestado de Conformidade
Após aprovação, o proprietário executa as instalações e solicita vistoria. Com aprovação, recebe o **Atestado de Conformidade** (habite-se do bombeiro).

## Custos

| Item | Valor estimado |
|------|---------------|
| Elaboração do PPCI (até 500m²) | R$ 2.000 – R$ 4.000 |
| Elaboração do PPCI (500-2000m²) | R$ 4.000 – R$ 8.000 |
| ART | R$ 100 – R$ 250 |
| Taxa de análise CBMSC | R$ 150 – R$ 500 |
| Execução dos sistemas (extintores, sinalização, etc.) | R$ 3.000 – R$ 20.000+ |

## Relação com o Habite-se

Em Florianópolis, o Habite-se de edificações que exigem PPCI só é emitido com o **Atestado de Conformidade do CBMSC**. Ou seja: sem PPCI aprovado, sem Habite-se.

## Conclusão

O PPCI não é apenas burocracia — é proteção de vidas. Edificações comerciais e multifamiliares devem tratá-lo como prioridade, pois sem ele não obtêm Habite-se nem alvará de funcionamento.

**Precisa de PPCI?** A 4Projetos elabora e acompanha todo o processo junto ao CBMSC. Orçamento gratuito.
    `,
    faqs: [
      {
        q: "Casa residencial precisa de PPCI?",
        a: "Residências unifamiliares (casas) e bifamiliares de até 2 pavimentos geralmente não precisam de PPCI. A obrigatoriedade começa para edificações multifamiliares (3+ unidades), comerciais ou acima de 750m².",
      },
      {
        q: "Quanto tempo o CBMSC leva para analisar o PPCI?",
        a: "O prazo padrão é de 30 a 60 dias para a análise do projeto. Após aprovação, a vistoria para emissão do Atestado de Conformidade leva mais 15 a 30 dias. Projetos com pendências podem levar mais tempo.",
      },
      {
        q: "Posso obter alvará comercial sem o PPCI?",
        a: "Não. O alvará de funcionamento para atividades comerciais em Florianópolis exige o Atestado de Conformidade do CBMSC, que só é emitido após aprovação e vistoria do PPCI.",
      },
    ],
  },
  {
    slug: "checklist-construir-florianopolis",
    title: "Checklist Completo para Construir em Florianópolis (2026)",
    description:
      "Checklist com todas as etapas para construir em Florianópolis: documentos, projetos, aprovações, licenças e dicas para evitar problemas. Atualizado 2026.",
    keyword: "construir florianopolis checklist",
    date: "2026-04-26",
    lastUpdated: "2026-05-02",
    readTime: "10 min",
    category: "engenharia",
    quickAnswer: "Para construir em Florianópolis, você precisa: 1) Estudo de viabilidade do terreno, 2) Projetos (arquitetônico, estrutural, elétrico, hidrossanitário), 3) Aprovação na prefeitura (SMDU), 4) Alvará de construção, 5) ART/RRT dos profissionais, 6) Matrícula de CEI/CNO no INSS, 7) PPCI (se aplicável), 8) Execução da obra, 9) Habite-se, 10) Averbação no cartório.",
    content: `
## Por que usar um checklist?

Construir em Florianópolis envolve diversas etapas burocráticas, técnicas e legais. Segundo a Secretaria Municipal de Desenvolvimento Urbano (SMDU/PMF, 2024), **30% dos pedidos de alvará são devolvidos por documentação incompleta**, causando atrasos de 30 a 90 dias.

Este checklist cobre todas as etapas, da compra do terreno ao Habite-se.

## Fase 1 — Pré-projeto

### ✅ Verificação do terreno
- [ ] Certidão de matrícula atualizada (Cartório de Registro de Imóveis)
- [ ] Certidão negativa de débitos (IPTU — PMF)
- [ ] Consulta de viabilidade de construção (SMDU)
- [ ] Verificar zoneamento no Plano Diretor (LC 482/2014)
- [ ] Verificar se há restrições ambientais (APP, APL, APC)
- [ ] Levantamento topográfico (planialtimétrico)

### ✅ Índices urbanísticos a verificar
Conforme a **LC 482/2014** (Plano Diretor de Florianópolis):
- Taxa de ocupação máxima
- Índice de aproveitamento
- Gabarito (número máximo de pavimentos)
- Afastamentos obrigatórios (frontal, lateral, fundos)
- Taxa de permeabilidade mínima (geralmente 30%)
- Número mínimo de vagas de estacionamento

## Fase 2 — Projetos

### ✅ Projetos obrigatórios
- [ ] Projeto arquitetônico (arquiteto CAU ou engenheiro civil CREA)
- [ ] Projeto estrutural (engenheiro civil/estrutural CREA)
- [ ] Projeto hidrossanitário (engenheiro civil CREA)
- [ ] Projeto elétrico (engenheiro eletricista ou civil CREA)
- [ ] Projeto de prevenção contra incêndio — PPCI (se aplicável)

### ✅ Projetos complementares (conforme o caso)
- [ ] Projeto de fundações (sondagem SPT + cálculo)
- [ ] Projeto de contenção (terrenos em aclive/declive)
- [ ] Projeto de drenagem pluvial
- [ ] Estudo de impacto de vizinhança — EIV (edificações acima de 100 unidades)
- [ ] Licenciamento ambiental (terrenos com APP)

### Custos estimados de projetos

O CUB/SC de março/2026 (SINDUSCON-SC) é de **R$ 2.487,63/m² (R-1-N)**. Projetos representam 3-5% do custo total:

| Projeto | Custo estimado |
|---------|---------------|
| Arquitetônico | R$ 15 – R$ 40/m² |
| Estrutural | R$ 8 – R$ 20/m² |
| Elétrico | R$ 1.500 – R$ 5.000 |
| Hidrossanitário | R$ 1.500 – R$ 4.000 |
| PPCI | R$ 2.000 – R$ 8.000 |

## Fase 3 — Aprovações

### ✅ Aprovação na prefeitura (SMDU)
- [ ] Protocolar projeto arquitetônico na SMDU
- [ ] Aguardar análise (prazo: 30-60 dias)
- [ ] Responder exigências (se houver)
- [ ] Obter alvará de construção

### ✅ Outras aprovações
- [ ] PPCI aprovado no CBMSC (se aplicável)
- [ ] Licença ambiental FLORAM/IMA (se aplicável)
- [ ] Aprovação SEPHAN (se imóvel tombado ou de entorno)
- [ ] Aprovação IPHAN (se patrimônio federal)

## Fase 4 — Pré-obra

### ✅ Documentos para iniciar a obra
- [ ] Alvará de construção emitido
- [ ] ART/RRT de todos os profissionais emitidas
- [ ] Matrícula CEI/CNO no INSS (eSocial)
- [ ] Placa de obra com dados do alvará e responsáveis técnicos
- [ ] Seguro de obra (recomendado)

## Fase 5 — Execução

### ✅ Durante a obra
- [ ] Acompanhamento técnico do engenheiro responsável
- [ ] Diário de obra atualizado
- [ ] Conformidade com o projeto aprovado
- [ ] Inspeções intermediárias (fundação, estrutura)
- [ ] Gestão de resíduos (PGRS — conforme Resolução CONAMA 307/2002)

## Fase 6 — Conclusão

### ✅ Habite-se
- [ ] Solicitar vistoria da prefeitura
- [ ] Vistoria do Corpo de Bombeiros (PPCI → Atestado de Conformidade)
- [ ] Vistoria da CELESC (padrão de energia)
- [ ] Vistoria da CASAN (ligação de esgoto)
- [ ] Emissão do Habite-se pela SMDU

### ✅ Regularização final
- [ ] CND do INSS da obra (certidão negativa de débitos)
- [ ] Averbação da construção no Cartório de Registro de Imóveis
- [ ] Atualização do cadastro do IPTU

## Prazos totais estimados

| Fase | Prazo estimado |
|------|---------------|
| Projetos | 30 – 60 dias |
| Aprovação prefeitura | 30 – 90 dias |
| Construção (casa 150m²) | 8 – 14 meses |
| Habite-se | 30 – 60 dias |
| Averbação cartório | 15 – 30 dias |
| **Total** | **12 – 20 meses** |

## Conclusão

Seguir este checklist evita os erros mais comuns que causam atrasos e custos extras. O acompanhamento de um engenheiro experiente em Florianópolis é o melhor investimento para uma obra tranquila.

**Precisa de ajuda para construir em Florianópolis?** A 4Projetos acompanha todas as etapas. Consultoria gratuita.
    `,
    faqs: [
      {
        q: "Quanto tempo leva para obter alvará de construção em Florianópolis?",
        a: "O prazo na SMDU é de 30 a 90 dias, dependendo da complexidade do projeto e da demanda do setor. Projetos com pendências podem levar mais tempo. A consulta prévia de viabilidade agiliza o processo.",
      },
      {
        q: "Posso começar a obra antes do alvará?",
        a: "Não. Iniciar obra sem alvará é infração sujeita a embargo, multa e demolição (Art. 178 da LC 060/2000 — Código de Obras de Florianópolis). Aguarde a emissão do alvará para iniciar qualquer serviço.",
      },
      {
        q: "Preciso de engenheiro para construir uma casa?",
        a: "Sim. Toda construção precisa de responsável técnico habilitado (engenheiro civil ou arquiteto). A ART/RRT é obrigatória e garante a responsabilidade técnica pela obra (Lei 5.194/1966 e Lei 12.378/2010).",
      },
      {
        q: "Quanto custa construir em Florianópolis em 2026?",
        a: "O CUB/SC de março/2026 (SINDUSCON-SC) é de R$ 2.487,63/m² para padrão normal. Uma casa de 150m² custa aproximadamente R$ 370.000 em construção, sem contar terreno e projetos. O valor varia conforme o padrão de acabamento.",
      },
    ],
  },
  {
    slug: "projeto-hidrossanitario-por-que-essencial",
    title: "Projeto Hidrossanitário: Por Que É Essencial na Sua Obra",
    description:
      "Entenda o que é o projeto hidrossanitário, quando é obrigatório, o que contém, custos e por que ele evita problemas graves na sua construção.",
    keyword: "projeto hidrossanitario residencial",
    date: "2026-05-10",
    lastUpdated: "2026-05-02",
    readTime: "7 min",
    category: "engenharia",
    quickAnswer: "O projeto hidrossanitário dimensiona as instalações de água fria, água quente, esgoto e águas pluviais da edificação. É obrigatório para construções novas e deve seguir as NBRs 5626 (água fria), 7198 (água quente) e 8160 (esgoto). Custa de R$ 1.500 a R$ 4.000 para residências e evita problemas como vazamentos, refluxo de esgoto e infiltrações.",
    content: `
## O que é o projeto hidrossanitário?

O projeto hidrossanitário é o documento técnico que dimensiona todas as instalações hidráulicas e sanitárias de uma edificação:
- **Água fria**: abastecimento, reservatórios, distribuição
- **Água quente**: aquecedores, distribuição
- **Esgoto sanitário**: coleta, ventilação, ligação à rede pública
- **Águas pluviais**: calhas, condutores, drenagem

É elaborado por engenheiro civil com atribuição em instalações hidrossanitárias.

## Por que é tão importante?

Problemas hidrossanitários são os mais frequentes em edificações. Segundo pesquisa do SINDUSCON-SC (2024), **40% das patologias construtivas em edificações residenciais estão relacionadas a instalações hidrossanitárias mal dimensionadas ou mal executadas**.

As consequências incluem:
- Vazamentos ocultos em paredes e lajes
- Refluxo de esgoto (mau cheiro)
- Baixa pressão nos pontos de consumo
- Infiltrações em paredes e tetos
- Entupimentos recorrentes
- Problemas de drenagem pluvial

## Normas técnicas aplicáveis

| Norma | Tema |
|-------|------|
| **NBR 5626:2020** | Instalações de água fria e água quente |
| **NBR 7198:1993** | Instalações de água quente (complementar) |
| **NBR 8160:1999** | Esgoto sanitário predial |
| **NBR 10844:1989** | Instalações de águas pluviais |
| **NBR 7229:1993** | Fossa séptica (quando sem rede pública) |

Em Florianópolis, a ligação à rede de esgoto da **CASAN** (Companhia Catarinense de Águas e Saneamento) é obrigatória onde disponível, conforme a **Lei Estadual 6.320/1983** (Código Sanitário de SC).

## O que contém o projeto

### Instalações de água fria
- Dimensionamento do reservatório (inferior e superior)
- Traçado das tubulações com diâmetros
- Cálculo de vazão e pressão em cada ponto
- Especificação de materiais (PVC, PPR, CPVC)

### Instalações de esgoto
- Traçado da rede coletora
- Dimensionamento das tubulações (diâmetros mínimos conforme NBR 8160)
- Sistema de ventilação (tubo ventilador para evitar sifonamento)
- Caixas de inspeção, caixas de gordura
- Ligação à rede CASAN ou fossa séptica + filtro anaeróbio

### Águas pluviais
- Dimensionamento de calhas e condutores
- Caixas de captação
- Sistema de drenagem do terreno

### Memorial de cálculo
- Cálculo de consumo diário (litros/dia)
- Dimensionamento do reservatório (reserva mínima: consumo de 1 dia — NBR 5626)
- Cálculo de perda de carga
- Verificação de pressão mínima nos aparelhos

## Custos

| Item | Valor estimado |
|------|---------------|
| Projeto hidrossanitário (casa até 200m²) | R$ 1.500 – R$ 2.500 |
| Projeto hidrossanitário (casa 200-400m²) | R$ 2.500 – R$ 4.000 |
| Projeto hidrossanitário (edifício multifamiliar) | R$ 5.000 – R$ 15.000 |
| ART | R$ 100 – R$ 250 |

## Erros mais comuns

1. **Reservatório subdimensionado** — Falta d'água nos horários de pico
2. **Ausência de ventilação no esgoto** — Causa sifonamento e mau cheiro
3. **Caixa de gordura inadequada** — Entupimentos na cozinha
4. **Tubulação de água quente em PVC** — PVC não resiste a água quente; usar CPVC ou PPR
5. **Declividade insuficiente no esgoto** — Mínimo de 2% para tubos de 100mm (NBR 8160)

## Relação com Habite-se

O projeto hidrossanitário é exigido para aprovação do alvará de construção em Florianópolis. Sem ele, a obra não obtém alvará e, consequentemente, não obtém Habite-se.

A CASAN também exige projeto aprovado para a ligação definitiva de água e esgoto.

## Conclusão

O projeto hidrossanitário é investimento, não custo. Ele evita patologias caras de corrigir (quebrar paredes e lajes) e garante o funcionamento correto das instalações por décadas.

**Precisa de projeto hidrossanitário?** A 4Projetos elabora conforme as NBRs e normas da CASAN. Orçamento gratuito.
    `,
    faqs: [
      {
        q: "Posso construir sem projeto hidrossanitário?",
        a: "Legalmente, não. O projeto hidrossanitário é exigido para obtenção do alvará de construção em Florianópolis. Além disso, construir sem projeto aumenta drasticamente o risco de problemas como vazamentos e refluxo de esgoto.",
      },
      {
        q: "Qual a diferença entre projeto hidráulico e hidrossanitário?",
        a: "O projeto hidráulico trata apenas das instalações de água (fria e quente). O projeto hidrossanitário é mais completo: inclui água fria, água quente, esgoto sanitário e águas pluviais. Na prática, o termo 'hidrossanitário' é o correto e abrange tudo.",
      },
      {
        q: "Quanto custa o projeto hidrossanitário de uma casa?",
        a: "Para uma casa residencial de até 200m², o projeto custa de R$ 1.500 a R$ 2.500. Para casas maiores (200-400m²), de R$ 2.500 a R$ 4.000. O valor inclui plantas, memorial de cálculo e especificações, mas não inclui a ART (R$ 100-250 adicional).",
      },
    ],
  },
];
