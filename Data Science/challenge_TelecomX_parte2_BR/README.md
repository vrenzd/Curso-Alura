# Análise de Churn para a TelecomX: Insights e Resultados

## Introdução

Este projeto utilizou aprendizado de máquina para analisar e prever o *churn* de clientes da empresa TelecomX. O objetivo principal foi não apenas construir um modelo preditivo, mas também extrair insights valiosos que a empresa pode usar para reter clientes e melhorar suas estratégias.

---

## Principais Insights da Análise

A análise exploratória e a modelagem revelaram pontos-chave sobre o comportamento dos clientes:

* **Desequilíbrio da Base de Dados:** O conjunto de dados original apresentava um grande desequilíbrio, com a maioria dos clientes (cerca de 74%) permanecendo ativos e uma minoria (aproximadamente 26%) cancelando seus serviços. Este foi um ponto crítico que precisou ser tratado para que o modelo pudesse prever o *churn* de forma eficaz.

* **Impacto das Características do Cliente:** O estudo exploratório sugeriu que certas características do cliente, como ser **cliente sênior** (SeniorCitizen), ter um **contrato mensal** e não possuir dependentes, podem estar associadas a uma maior probabilidade de *churn*.

* **A Importância da Técnica SMOTE:** O modelo de `RandomForestClassifier` teve um desempenho significativamente melhor na identificação de clientes em risco após a aplicação da técnica de superamostragem **SMOTE** para balancear as classes. Isso demonstra a importância de lidar com dados desequilibrados para obter resultados mais confiáveis.

---

## Resultados e Conclusões do Modelo

O modelo final de `RandomForestClassifier` treinado com dados balanceados por SMOTE se mostrou o mais eficaz. Os resultados da avaliação indicam que o modelo é capaz de:

* **Identificar a maioria dos clientes que irão sair:** O modelo alcançou um bom `recall`, o que significa que ele consegue identificar com sucesso uma grande parte dos clientes que realmente iriam cancelar seus serviços.
* **Minimizar Falsos Positivos:** A `precision` do modelo também foi alta, indicando que, quando o modelo prevê que um cliente irá sair, a chance de essa previsão estar correta é alta.

Em resumo, o modelo oferece uma ferramenta poderosa para a TelecomX, permitindo-lhe prever o *churn* com confiança e tomar ações preventivas para reter clientes valiosos antes que eles saiam.

---

## Tecnologias Utilizadas

* Python
* Bibliotecas: `numpy`, `pandas`, `seaborn`, `matplotlib`, `scikit-learn`, `imblearn`
