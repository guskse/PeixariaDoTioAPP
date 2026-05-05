# 🐟 PeixariaDoTioAPP

Aplicativo mobile desenvolvido com React Native utilizando Expo, com o objetivo de apresentar o cardápio de uma peixaria de forma simples, moderna e intuitiva.

---

## 📱 Sobre o projeto

O **PeixariaDoTioAPP** é um aplicativo mobile que simula a experiência de um cliente visualizando:

- 🍽️ Pratos disponíveis
- 🥤 Bebidas (sucos)
- 📖 Receitas
- 📍 Localização do restaurante
- ℹ️ Informações gerais

O foco do projeto é **interface, navegação e experiência do usuário**.

---

## 🚀 Funcionalidades

- 🏠 **Home**
  - Banner com imagem do restaurante
  - Descrição do estabelecimento
  - Destaques em grid
  - Lista de bebidas

- 🍽️ **Cardápio**
  - Listagem de pratos com nome e preço

- 📖 **Receitas**
  - Lista de receitas
  - Tela de detalhes

- 📍 **Localização**
  - Abertura do mapa via link

- ℹ️ **Sobre**
  - Informações do restaurante

---

## 🧱 Tecnologias utilizadas

- React Native
- Expo
- Expo Router
- StyleSheet (React Native)

---

## 📂 Estrutura do projeto

```
app/
 ├─ (tabs)/
 │   ├─ index.js        # Home
 │   ├─ menu.js         # Cardápio
 │   ├─ recipes/
 │   │    ├─ index.js
 │   │    └─ [id].js
 │   ├─ location.js
 │   └─ about.js

components/
 └─ ProductCard.js

data/
 ├─ products.js
 └─ recipes.js

theme/
 ├─ colors.js
 ├─ spacing.js
 └─ typography.js
```

---

## ▶️ Como rodar o projeto

### 1. Clone o repositório

```
git clone https://github.com/seu-usuario/PeixariaDoTioAPP.git
cd PeixariaDoTioAPP
```

---

### 2. Instale as dependências

```
npm install
```

---

### 3. Inicie o projeto

```
npx expo start
```

---

### 4. Execute no celular

- Instale o app **Expo Go**
- Escaneie o QR Code

---

## 🎨 Design

O app utiliza um tema simples e consistente:

- 🎨 Cores baseadas em tons de azul (tema marinho)
- 🧱 Layout em grid para produtos
- 🖼️ Imagens para melhor experiência visual

---

## 📌 Objetivo acadêmico

Este projeto foi desenvolvido como parte de uma disciplina voltada ao desenvolvimento mobile, com foco em:

- Estruturação de aplicações React Native
- Navegação com Expo Router
- Organização de componentes
- Boas práticas de UI

---

## 👨‍💻 Autor

Desenvolvido por **Gustavo Carvalho**

---

## 📄 Licença

Este projeto é apenas para fins acadêmicos.
