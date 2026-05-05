export const featured = [
  {
    id: 1,
    name: "Tambaqui Assado",
    description:
      "Tambaqui da região assado na brasa, servido com baião de dois, farofa crocante e vinagrete.",
    price: "R$ 80,00",
    image: require("../assets/images/tambaqui-assado.jpeg"),
  },
  {
    id: 2,
    name: "Pirarucu Frito",
    description:
      "Lombo de pirarucu frito na hora, acompanhado de baião de dois caseiro, farofa e salada.",
    price: "R$ 40,00",
    image: require("../assets/images/pirarucu-frito.png"),
  },
  {
    id: 3,
    name: "Sardinha",
    description:
      "Porção de sardinhas fritas e crocantes. Acompanha guarnição completa de baião, farofa e vinagrete.",
    price: "R$ 15,00",
    image: require("../assets/images/sardinha.jpg"),
  },
  {
    id: 4,
    name: "Escabeche Caldo",
    description:
      "Peixe cozido ao molho de tomate, pimentões e leite de coco. Acompanha baião de dois e guarnições.",
    price: "R$ 90,00",
    image: require("../assets/images/escabeche.jpg"),
  },
];

export const drinks = [
  {
    id: 5,
    name: "Suco de Cupuaçu",
    description:
      "Suco natural da fruta, refrescante e cremoso. Jarra de 1 litro.",
    price: "R$ 10,00",
    image: require("../assets/images/suco-de-cupuacu.jpg"),
  },
  {
    id: 6,
    name: "Suco de Açaí",
    description:
      "Açaí regional batido e gelado, puro sabor da Amazônia. Jarra de 1 litro.",
    price: "R$ 12,00",
    image: require("../assets/images/suco-de-acai.jpeg"),
  },
];

export const desserts = [
  {
    id: 7,
    name: "Pudim",
    description:
      "Clássico pudim de leite condensado com calda de caramelo artesanal.",
    price: "R$ 8,00",
    image: require("../assets/images/pudim-de-leite-condensado.jpeg"),
  },
  {
    id: 8,
    name: "Sorvete de Morango",
    description: "Duas bolas de sorvete de morango cremoso.",
    price: "R$ 3,00",
    image: require("../assets/images/sorvete-de-morango.jpeg"),
  },
];

export const menu = [...featured, ...drinks, ...desserts];
