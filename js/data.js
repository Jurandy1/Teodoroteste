// Catálogo, estado inicial e configuração de filtros por categoria
const APP_STATE = {
  activeProductId: null,
  selectedPdpVariantIdx: 0,
  pdpQuantity: 1,
  products: [
    {
      id: 1,
      title: "Rose Éternelle & Peônia Francesa",
      brandTag: "TEODORA • ALTA PERFUMARIA",
      volume: "Eau de Parfum • 100ml",
      category: "perfumes",
      family: "floral",
      intensity: "edp",
      occasion: "dia",
      sensation: "romantico",
      price: 349.00,
      oldPrice: 389.00,
      badge: "Mais Vendido",
      rating: 4.9,
      reviews: 142,
      image: "https://images.unsplash.com/photo-1592945403244-b3fbafd7f539?auto=format&fit=crop&w=1200&q=85",
      gallery: [
        "https://images.unsplash.com/photo-1592945403244-b3fbafd7f539?auto=format&fit=crop&w=1200&q=85",
        "https://images.unsplash.com/photo-1547887537-6158d64c35b3?auto=format&fit=crop&w=1200&q=85",
        "https://images.unsplash.com/photo-1588405748880-12d1d2a59f75?auto=format&fit=crop&w=1200&q=85",
        "https://images.unsplash.com/photo-1523293182086-7651a899d37f?auto=format&fit=crop&w=1200&q=85"
      ],
      notes: "Pétalas de Rosa Búlgara, Peônia Orvalhada e Almíscar Branco",
      pyramid: {
        top: "Mandarina Italiana, Orvalho e Pétalas de Rosa Damascena",
        heart: "Peônia Francesa Aveludada, Jasmim Sambac e Magnólia",
        base: "Almíscar Branco Limpo, Âmbar Dourado e Madeira de Cedro"
      },
      variants: [
        { size: "50ml", price: 249.00, label: "Frasco 50ml" },
        { size: "100ml", price: 349.00, label: "Frasco 100ml (Assinatura)" },
        { size: "Kit 100ml + Creme 200ml", price: 419.00, label: "Coffret Luxo" }
      ],
      description: "Fragrância icônica que une o frescor matinal das rosas à elegância aveludada da peônia. Elaborada com maceração botânica e álcool de cereais nobre, proporcionando fixação contínua de até 18 horas na pele.",
      ritual: "Borrife a 15cm nas áreas de maior pulsação térmica: pulsos, nuca e colo. Para um rastro ainda mais envolvente, aplique após o Creme Corporal Hidratação Intensa.",
      ingredients: "Alcohol Denat de Cereais Orgânico, Parfum (Fragrance), Aqua, Rosa Damascena Flower Oil, Paeonia Albiflora Flower Extract, Benzyl Salicylate, Linalool, Alpha-Isomethyl Ionone (100% Vegano e Cruelty-Free).",
      similarIds: [4, 11, 2, 5]
    },
    {
      id: 2,
      title: "Creme Corporal Hidratação Intensa",
      brandTag: "TEODORA • CUIDADOS NOBRES",
      volume: "Bisnaga Rosé Sublime • 200ml",
      category: "corpo",
      texture: "creme",
      bodyActive: "karite",
      sensation: "hidratacao",
      scent: "floral",
      price: 98.00,
      oldPrice: 119.00,
      badge: "Destaque Teodora",
      rating: 4.9,
      reviews: 218,
      image: "https://images.unsplash.com/photo-1556228720-195a672e8a03?auto=format&fit=crop&w=1200&q=85",
      gallery: [
        "https://images.unsplash.com/photo-1556228720-195a672e8a03?auto=format&fit=crop&w=1200&q=85",
        "https://images.unsplash.com/photo-1608248597359-59752b535d46?auto=format&fit=crop&w=1200&q=85",
        "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&w=1200&q=85",
        "https://images.unsplash.com/photo-1512290900672-1f557342674e?auto=format&fit=crop&w=1200&q=85"
      ],
      notes: "Manteiga de Karité Pura, Ácido Hialurônico e Óleo de Rosa Mosqueta",
      pyramid: {
        top: "Flor de Pêssego e Notas Leves de Orvalho",
        heart: "Pétalas Aveludadas e Rosa Mosqueta Chilena",
        base: "Manteiga de Karité Concentrada e Fava de Baunilha"
      },
      variants: [
        { size: "200ml", price: 98.00, label: "Bisnaga 200ml" },
        { size: "400ml", price: 159.00, label: "Eco-Refil 400ml" }
      ],
      description: "Absorção rápida com toque aveludado de pétala. Hidratação contínua por 24h sem residual oleoso, deixando a pele perfumada com nuances florais delicadas.",
      ritual: "Aplique massageando suavemente em movimentos circulares sobre a pele limpa e seca após o banho, concentrando em cotovelos e pernas.",
      ingredients: "Aqua, Butyrospermum Parkii Butter (Karité), Sodium Hyaluronate, Rosa Moschata Seed Oil, Glycerin Vegetal, Parfum, Tocopheryl Acetate.",
      similarIds: [6, 1, 5, 10]
    },
    {
      id: 3,
      title: "Sérum Iluminador Vitamina C & Rosa Mosqueta",
      brandTag: "TEODORA • BIODERMOCOSMÉTICA",
      volume: "Elixir Facial Uniformizador • 30ml",
      category: "skincare",
      skinType: "todas",
      skinActive: "vitamina-c",
      benefit: "glow",
      routineStep: "serum",
      sensation: "glow",
      price: 179.00,
      oldPrice: 199.00,
      badge: "Mais Vendido",
      rating: 4.9,
      reviews: 130,
      image: "https://images.unsplash.com/photo-1620916566398-39f1143ab7be?auto=format&fit=crop&w=1200&q=85",
      gallery: [
        "https://images.unsplash.com/photo-1620916566398-39f1143ab7be?auto=format&fit=crop&w=1200&q=85",
        "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?auto=format&fit=crop&w=1200&q=85",
        "https://images.unsplash.com/photo-1512496015851-a90fb38ba796?auto=format&fit=crop&w=1200&q=85",
        "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&w=1200&q=85"
      ],
      notes: "Vitamina C Estabilizada 15%, Niacinamida e Rosa Mosqueta Orgânica",
      pyramid: {
        top: "Gotas Cítricas de Laranja Doce",
        heart: "Niacinamida Pura e Extrato Botânico",
        base: "Óleo Puro de Rosa Mosqueta Chilena Prensada a Frio"
      },
      variants: [
        { size: "30ml", price: 179.00, label: "Frasco Conta-Gotas 30ml" },
        { size: "60ml", price: 289.00, label: "Edição Especial 60ml" }
      ],
      description: "Uniformiza o tom da pele, neutraliza radicais livres e desperta a luminosidade natural instantânea sem obstruir poros.",
      ritual: "Pela manhã, aplique 4 a 5 gotas sobre a face limpa antes do filtro solar diário.",
      ingredients: "Sodium Ascorbyl Phosphate 15%, Niacinamide 5%, Rosa Canina Fruit Oil, Hyaluronic Acid, Aqua.",
      similarIds: [8, 12, 9, 2]
    },
    {
      id: 4,
      title: "Santal & Cèdre Blanc Privée",
      brandTag: "TEODORA • COLEÇÃO PRIVÉE",
      volume: "Eau de Parfum • 100ml",
      category: "perfumes",
      family: "amadeirado",
      intensity: "edp",
      occasion: "noite",
      sensation: "marcante",
      price: 369.00,
      oldPrice: 410.00,
      badge: "Edição Especial",
      rating: 4.8,
      reviews: 62,
      image: "https://images.unsplash.com/photo-1523293182086-7651a899d37f?auto=format&fit=crop&w=1200&q=85",
      gallery: [
        "https://images.unsplash.com/photo-1523293182086-7651a899d37f?auto=format&fit=crop&w=1200&q=85",
        "https://images.unsplash.com/photo-1592945403244-b3fbafd7f539?auto=format&fit=crop&w=1200&q=85",
        "https://images.unsplash.com/photo-1547887537-6158d64c35b3?auto=format&fit=crop&w=1200&q=85",
        "https://images.unsplash.com/photo-1512290900672-1f557342674e?auto=format&fit=crop&w=1200&q=85"
      ],
      notes: "Sândalo Cremoso, Cedro Branco e Cardamomo Dourado",
      pyramid: {
        top: "Cardamomo da Guatemala e Folhas de Violeta",
        heart: "Íris Florentina e Papiro Nobre",
        base: "Sândalo de Mysore, Cedro do Atlas e Couro Macio"
      },
      variants: [
        { size: "50ml", price: 269.00, label: "Frasco 50ml" },
        { size: "100ml", price: 369.00, label: "Frasco 100ml Privée" }
      ],
      description: "Madeiras nobres lapidadas com notas balsâmicas e calor acolhedor. Rastro magnético, sofisticado e memorável.",
      ritual: "Perfeito para eventos noturnos, jantares e climas amenos. Borrife no colarinho e nuca.",
      ingredients: "Alcohol Denat, Santalum Album Wood Extract, Cedrus Atlantica Oil, Coumarin, Limonene.",
      similarIds: [11, 1, 5, 7]
    },
    {
      id: 5,
      title: "Coffret Privée — Caixa Laqueada com Fita",
      brandTag: "TEODORA • PRESENTE SUPREMO",
      volume: "1 Perfume 50ml + 1 Creme 200ml + Sabonete",
      category: "kits",
      giftPackaging: "caixa-luxo",
      giftOccasion: "amor",
      sensation: "romantico",
      price: 459.00,
      oldPrice: 520.00,
      badge: "Presente Perfeito",
      rating: 5.0,
      reviews: 84,
      image: "https://images.unsplash.com/photo-1512290900672-1f557342674e?auto=format&fit=crop&w=1200&q=85",
      gallery: [
        "https://images.unsplash.com/photo-1512290900672-1f557342674e?auto=format&fit=crop&w=1200&q=85",
        "https://images.unsplash.com/photo-1592945403244-b3fbafd7f539?auto=format&fit=crop&w=1200&q=85",
        "https://images.unsplash.com/photo-1556228720-195a672e8a03?auto=format&fit=crop&w=1200&q=85",
        "https://images.unsplash.com/photo-1608248597359-59752b535d46?auto=format&fit=crop&w=1200&q=85"
      ],
      notes: "Trio Harmonizado de Rosa e Peônia com Embalagem de Luxo",
      pyramid: {
        top: "Rosas Búlgaras e Flor de Pêssego",
        heart: "Peônia Francesa e Manteiga de Karité",
        base: "Almíscar Branco Sedoso e Baunilha"
      },
      variants: [
        { size: "Coffret Completo", price: 459.00, label: "Caixa Laqueada Completa" }
      ],
      description: "O presente supremo da Teodora. Acondicionado em caixa rígida rosé laqueada com berço aveludado, fita de cetim e cartão personalizado.",
      ritual: "Inicie o ritual com o sabonete cremoso no banho, hidrate com o creme aveludado e finalize borrifando o Eau de Parfum.",
      ingredients: "Composição harmônica dos itens Rose Éternelle com fórmula enriquecida de manteigas botânicas.",
      similarIds: [10, 1, 2, 4]
    },
    {
      id: 6,
      title: "Manteiga Nutritiva Flor de Algodão & Murumuru",
      brandTag: "TEODORA • CUIDADOS NOBRES",
      volume: "Pote Vidro Rosé • 250g",
      category: "corpo",
      texture: "manteiga",
      bodyActive: "murumuru",
      sensation: "hidratacao",
      scent: "algodao",
      price: 129.00,
      oldPrice: 145.00,
      badge: "Lançamento",
      rating: 4.8,
      reviews: 95,
      image: "https://images.unsplash.com/photo-1608248597359-59752b535d46?auto=format&fit=crop&w=1200&q=85",
      gallery: [
        "https://images.unsplash.com/photo-1608248597359-59752b535d46?auto=format&fit=crop&w=1200&q=85",
        "https://images.unsplash.com/photo-1556228720-195a672e8a03?auto=format&fit=crop&w=1200&q=85",
        "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&w=1200&q=85",
        "https://images.unsplash.com/photo-1592945403244-b3fbafd7f539?auto=format&fit=crop&w=1200&q=85"
      ],
      notes: "Karité Concentrado, Manteiga de Murumuru e Flor de Algodão",
      pyramid: {
        top: "Algodão Suave e Flores Brancas",
        heart: "Manteiga Pura de Murumuru Amazônico",
        base: "Karité Prensado e Almíscar Leve"
      },
      variants: [
        { size: "250g", price: 129.00, label: "Pote 250g" }
      ],
      description: "Tratamento de alta nutrição para peles ressecadas. Barreira protetora que restaura o manto hidrolipídico instantaneamente.",
      ritual: "Aplique massageando suavemente antes de dormir ou após o banho morno.",
      ingredients: "Astrocaryum Murumuru Butter, Butyrospermum Parkii Butter, Gossypium Herbaceum Extract.",
      similarIds: [2, 14, 5, 8]
    },
    {
      id: 7,
      title: "Óleo Reparador Sublime & Brilho Espelhado",
      brandTag: "TEODORA • CABELOS NOBRES",
      volume: "Elixir Capilar Multifuncional • 60ml",
      category: "cabelos",
      hairBenefit: "brilho",
      hairActive: "argan",
      hairType: "secos",
      sensation: "glow",
      price: 139.00,
      oldPrice: 160.00,
      badge: "Lançamento",
      rating: 4.9,
      reviews: 77,
      image: "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&w=1200&q=85",
      gallery: [
        "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&w=1200&q=85",
        "https://images.unsplash.com/photo-1523293182086-7651a899d37f?auto=format&fit=crop&w=1200&q=85",
        "https://images.unsplash.com/photo-1620916566398-39f1143ab7be?auto=format&fit=crop&w=1200&q=85",
        "https://images.unsplash.com/photo-1592945403244-b3fbafd7f539?auto=format&fit=crop&w=1200&q=85"
      ],
      notes: "Óleo de Argan Puro, Camélia Japonesa e Filtro Térmico",
      pyramid: {
        top: "Flor de Cerejeira e Notas Florais",
        heart: "Camélia Japonesa e Óleo de Argan",
        base: "Madeira Clara e Âmbar Suave"
      },
      variants: [
        { size: "60ml", price: 139.00, label: "Frasco 60ml" }
      ],
      description: "Sela as pontas, elimina o frizz e confere toque de seda aos fios sem pesar, com proteção térmica até 230°C.",
      ritual: "Espalhe 2 a 3 gotas nas palmas das mãos e distribua do comprimento às pontas nos fios secos ou úmidos.",
      ingredients: "Argania Spinosa Kernel Oil, Camellia Japonica Seed Oil, Cyclopentasiloxane, Parfum.",
      similarIds: [14, 3, 2, 8]
    },
    {
      id: 8,
      title: "Bruma Facial Revitalizante & Hidratante",
      brandTag: "TEODORA • CUIDADOS DIÁRIOS",
      volume: "Água Facial com Niacinamida • 120ml",
      category: "skincare",
      skinType: "sensivel",
      skinActive: "niacinamida",
      benefit: "calmante",
      routineStep: "bruma",
      sensation: "hidratacao",
      price: 89.00,
      oldPrice: null,
      badge: "Dia a Dia",
      rating: 4.8,
      reviews: 89,
      image: "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?auto=format&fit=crop&w=1200&q=85",
      gallery: [
        "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?auto=format&fit=crop&w=1200&q=85",
        "https://images.unsplash.com/photo-1620916566398-39f1143ab7be?auto=format&fit=crop&w=1200&q=85",
        "https://images.unsplash.com/photo-1512496015851-a90fb38ba796?auto=format&fit=crop&w=1200&q=85",
        "https://images.unsplash.com/photo-1592945403244-b3fbafd7f539?auto=format&fit=crop&w=1200&q=85"
      ],
      notes: "Extrato de Camomila, Niacinamida e Flor de Laranjeira",
      pyramid: {
        top: "Flor de Laranjeira e Bergamota Fresca",
        heart: "Camomila Romana e Niacinamida",
        base: "Minerais Puros e Água Pura Purificada"
      },
      variants: [
        { size: "120ml", price: 89.00, label: "Spray 120ml" }
      ],
      description: "Microgotas refrescantes que auxiliam na hidratação, acalmam a pele e preparam o rosto para a maquiagem ou rotina de cuidados.",
      ritual: "Borrife no rosto a qualquer hora do dia para reidratar ou antes e depois da maquiagem.",
      ingredients: "Aqua, Niacinamide, Chamomilla Recutita Extract, Citrus Aurantium Dulcis Flower Water.",
      similarIds: [3, 12, 9, 2]
    },
    {
      id: 9,
      title: "Lip Elixir Tint Velvet & Ácido Hialurônico",
      brandTag: "TEODORA • REALCE NATURAL",
      volume: "Bálsamo Labial Cor Rosé Seda • 8ml",
      category: "maquiagem",
      makeupArea: "labios",
      makeupFinish: "velvet",
      makeupBenefit: "hialuronico",
      sensation: "romantico",
      price: 79.00,
      oldPrice: 95.00,
      badge: "Mais Vendido",
      rating: 4.9,
      reviews: 164,
      image: "https://images.unsplash.com/photo-1512496015851-a90fb38ba796?auto=format&fit=crop&w=1200&q=85",
      gallery: [
        "https://images.unsplash.com/photo-1512496015851-a90fb38ba796?auto=format&fit=crop&w=1200&q=85",
        "https://images.unsplash.com/photo-1556228720-195a672e8a03?auto=format&fit=crop&w=1200&q=85",
        "https://images.unsplash.com/photo-1620916566398-39f1143ab7be?auto=format&fit=crop&w=1200&q=85",
        "https://images.unsplash.com/photo-1592945403244-b3fbafd7f539?auto=format&fit=crop&w=1200&q=85"
      ],
      notes: "Esqualano Vegetal, Ácido Hialurônico e Pigmentos Minerais",
      pyramid: {
        top: "Framboesa Selvagem e Baunilha Fava",
        heart: "Esqualano Botânico e Ácido Hialurônico",
        base: "Manteiga de Karité e Pigmento Rosé Translúcido"
      },
      variants: [
        { size: "8ml", price: 79.00, label: "Tubo Rosé 8ml" }
      ],
      description: "Realce natural dos lábios com hidratação nutritiva, ação preenchedora suave e acabamento acetinado elegante.",
      ritual: "Aplique diretamente nos lábios sempre que desejar cor suave e hidratação acetinada.",
      ingredients: "Plant-derived Squalane, Hyaluronic Spheres, Ricinus Communis Seed Oil, Mineral Pigments.",
      similarIds: [13, 3, 8, 1]
    },
    {
      id: 10,
      title: "Kit Essenciais Viagem Teodora",
      brandTag: "TEODORA • KITS & PRESENTES",
      volume: "Nécessaire Rosé + 3 Miniaturas de 30ml",
      category: "kits",
      giftPackaging: "necessaire",
      giftOccasion: "viagem",
      sensation: "hidratacao",
      price: 189.00,
      oldPrice: 220.00,
      badge: "Lançamento",
      rating: 4.9,
      reviews: 51,
      image: "https://images.unsplash.com/photo-1592945403244-b3fbafd7f539?auto=format&fit=crop&w=1200&q=85",
      gallery: [
        "https://images.unsplash.com/photo-1592945403244-b3fbafd7f539?auto=format&fit=crop&w=1200&q=85",
        "https://images.unsplash.com/photo-1512290900672-1f557342674e?auto=format&fit=crop&w=1200&q=85",
        "https://images.unsplash.com/photo-1556228720-195a672e8a03?auto=format&fit=crop&w=1200&q=85",
        "https://images.unsplash.com/photo-1523293182086-7651a899d37f?auto=format&fit=crop&w=1200&q=85"
      ],
      notes: "Fragrância de Bolsa, Loção Hidratante e Sabonete Cremoso",
      pyramid: {
        top: "Rosas Frescas e Bergamota",
        heart: "Peônia e Amêndoas Doces",
        base: "Almíscar e Madeiras Suaves"
      },
      variants: [
        { size: "Trio Viagem", price: 189.00, label: "Nécessaire + 3 Frascos 30ml" }
      ],
      description: "A sofisticação Teodora para levar na mala de bordo ou na bolsa do dia a dia, com nécessaire rosé texturizada.",
      ritual: "Itens no tamanho ideal para levar na cabine de avião ou em viagens de final de semana.",
      ingredients: "Fórmulas dermatologicamente testadas das linhas Rose Éternelle e Karité.",
      similarIds: [5, 1, 2, 6]
    },
    {
      id: 11,
      title: "Chypre Sublime & Jasmim Imperial",
      brandTag: "TEODORA • ALTA PERFUMARIA",
      volume: "Eau de Parfum • 100ml",
      category: "perfumes",
      family: "oriental",
      intensity: "edp",
      occasion: "festa",
      sensation: "marcante",
      price: 359.00,
      oldPrice: 395.00,
      badge: "Edição Especial",
      rating: 5.0,
      reviews: 48,
      image: "https://images.unsplash.com/photo-1547887537-6158d64c35b3?auto=format&fit=crop&w=1200&q=85",
      gallery: [
        "https://images.unsplash.com/photo-1547887537-6158d64c35b3?auto=format&fit=crop&w=1200&q=85",
        "https://images.unsplash.com/photo-1592945403244-b3fbafd7f539?auto=format&fit=crop&w=1200&q=85",
        "https://images.unsplash.com/photo-1523293182086-7651a899d37f?auto=format&fit=crop&w=1200&q=85"
      ],
      notes: "Jasmim da Noite, Patchouli Dourado e Fava Tonka",
      pyramid: {
        top: "Bergamota Nobre e Pera Francesa",
        heart: "Jasmim Imperial Grandiflorum e Flor de Íris",
        base: "Patchouli Macio, Baunilha Bourbon e Musgo de Carvalho"
      },
      variants: [
        { size: "50ml", price: 259.00, label: "Frasco 50ml" },
        { size: "100ml", price: 359.00, label: "Frasco 100ml" }
      ],
      description: "Fragrância envolvente com assinatura chypre moderna. Notas florais opulentas sobre base aveludada de patchouli e tonka.",
      ritual: "Aplique nas zonas de pulsação e deixe secar naturalmente sem friccionar a pele.",
      ingredients: "Alcohol Denat Orgânico, Jasminum Grandiflorum Extract, Pogostemon Cablin Oil, Parfum.",
      similarIds: [1, 4, 5, 2]
    },
    {
      id: 12,
      title: "Elixir Noturno Ácido Hialurônico Puro 2%",
      brandTag: "TEODORA • BIODERMOCOSMÉTICA",
      volume: "Concentrado Facial Pró-Idade • 30ml",
      category: "skincare",
      skinType: "madura",
      skinActive: "hialuronico",
      benefit: "firmeza",
      routineStep: "noturno",
      sensation: "hidratacao",
      price: 169.00,
      oldPrice: 189.00,
      badge: "Lançamento",
      rating: 4.9,
      reviews: 58,
      image: "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?auto=format&fit=crop&w=1200&q=85",
      gallery: [
        "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?auto=format&fit=crop&w=1200&q=85",
        "https://images.unsplash.com/photo-1620916566398-39f1143ab7be?auto=format&fit=crop&w=1200&q=85"
      ],
      notes: "Triplo Peso Molecular de Hialurônico e Peptídeos Nobres",
      pyramid: {
        top: "Água Termal Pura e Minerais",
        heart: "Ácido Hialurônico Reticulado e Biopeptídeos",
        base: "Esqualano Vegetal e Vitamina E"
      },
      variants: [
        { size: "30ml", price: 169.00, label: "Frasco 30ml" }
      ],
      description: "Tratamento intensivo noturno que preenche linhas finas e devolve o viço e a densidade da pele ao despertar.",
      ritual: "Aplique 3 gotas à noite no rosto e pescoço após a higienização com movimentos ascendentes.",
      ingredients: "Aqua, Multi-Molecular Hyaluronic Acid 2%, Palmitoyl Tripeptide-5, Squalane, Tocopherol.",
      similarIds: [3, 8, 2, 9]
    },
    {
      id: 13,
      title: "Iluminador Facial Seda Líquida Golden Glow",
      brandTag: "TEODORA • REALCE NATURAL",
      volume: "Glow Multifuncional em Gotas • 20ml",
      category: "maquiagem",
      makeupArea: "rosto",
      makeupFinish: "glow",
      makeupBenefit: "esqualano",
      sensation: "glow",
      price: 119.00,
      oldPrice: 135.00,
      badge: "Lançamento",
      rating: 4.8,
      reviews: 43,
      image: "https://images.unsplash.com/photo-1512496015851-a90fb38ba796?auto=format&fit=crop&w=1200&q=85",
      gallery: [
        "https://images.unsplash.com/photo-1512496015851-a90fb38ba796?auto=format&fit=crop&w=1200&q=85",
        "https://images.unsplash.com/photo-1620916566398-39f1143ab7be?auto=format&fit=crop&w=1200&q=85"
      ],
      notes: "Pérolas Champanhe Finíssimas e Óleo de Rosa Mosqueta",
      pyramid: {
        top: "Reflexos Dourados Translúcidos",
        heart: "Esqualano Vegetal Iluminador",
        base: "Toque Seco Sedoso e Acetinado"
      },
      variants: [
        { size: "20ml", price: 119.00, label: "Gotas Iluminadoras 20ml" }
      ],
      description: "Luminosidade orvalhada e elegante. Pode ser usado puro nos pontos altos do rosto ou misturado ao creme hidratante diário.",
      ritual: "Deposite 1 ou 2 gotas nas têmporas, arco do cupido e osso nasal com leves batidinhas dos dedos.",
      ingredients: "Mica Mineral, Plant Squalane, Rosa Canina Seed Oil, Silica, Parfum.",
      similarIds: [9, 3, 7, 8]
    },
    {
      id: 14,
      title: "Máscara de Nutrição Capilar Camélia & Karité",
      brandTag: "TEODORA • CABELOS NOBRES",
      volume: "Pote de Tratamento Profundo • 200g",
      category: "cabelos",
      hairBenefit: "nutricao",
      hairActive: "camelia",
      hairType: "danificados",
      sensation: "hidratacao",
      price: 125.00,
      oldPrice: 145.00,
      badge: "Destaque Teodora",
      rating: 4.9,
      reviews: 67,
      image: "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&w=1200&q=85",
      gallery: [
        "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&w=1200&q=85",
        "https://images.unsplash.com/photo-1608248597359-59752b535d46?auto=format&fit=crop&w=1200&q=85"
      ],
      notes: "Manteiga Botânica, Óleo de Camélia e Aminoácidos de Seda",
      pyramid: {
        top: "Flor de Cerejeira e Notas Verdes",
        heart: "Extrato Puro de Camélia Japonesa",
        base: "Karité Nutritivo e Madeira Aveludada"
      },
      variants: [
        { size: "200g", price: 125.00, label: "Pote 200g" }
      ],
      description: "Restauração profunda do córtex capilar. Recupera a elasticidade, devolve maciez instantânea e sela as cutículas.",
      ritual: "Após lavar, retire o excesso de água e enluve mecha por mecha. Deixe agir por 5 a 10 minutos e enxágue abundantemente.",
      ingredients: "Camellia Japonica Seed Oil, Butyrospermum Parkii Butter, Hydrolyzed Silk, Cetearyl Alcohol.",
      similarIds: [7, 6, 2, 10]
    }
  ],
  filters: {
    category: 'todos',
    maxPrice: 500,
    badge: '',
    search: '',
    sortBy: 'populares',
    // Dicionário dinâmico de sub-filtros específicos da categoria ativa:
    activeCategoryFilters: {}
  },
  cart: [],
  wishlist: [],
  shippingCost: 0,
  shippingOptionName: '',
  shippingInfo: null,
  couponCode: '',
  paymentMethod: 'pix'
};

const CATEGORY_FILTER_CONFIGS = {
  todos: {
    eyebrow: "Catálogo",
    title: "Todos os produtos",
    groups: [
      {
        id: "universos",
        name: "Categorias",
        type: "shortcuts",
        options: [
          { value: "perfumes", label: "Perfumes", icon: "fa-solid fa-wine-bottle" },
          { value: "skincare", label: "Skincare", icon: "fa-solid fa-droplet" },
          { value: "maquiagem", label: "Maquiagem", icon: "fa-solid fa-wand-magic-sparkles" },
          { value: "cabelos", label: "Cabelos", icon: "fa-solid fa-feather-pointed" },
          { value: "corpo", label: "Corpo & Banho", icon: "fa-solid fa-spa" },
          { value: "kits", label: "Kits", icon: "fa-solid fa-gift" }
        ]
      },
      {
        id: "sensation",
        name: "Sensação",
        type: "checkbox",
        options: [
          { value: "romantico", label: "Romântico" },
          { value: "marcante", label: "Marcante" },
          { value: "glow", label: "Luminosidade" },
          { value: "hidratacao", label: "Hidratação" }
        ]
      },
      {
        id: "occasion",
        name: "Ocasião",
        type: "pills",
        options: [
          { value: "dia", label: "Dia a dia" },
          { value: "noite", label: "Noite" },
          { value: "festa", label: "Eventos" }
        ]
      }
    ]
  },
  perfumes: {
    eyebrow: "Perfumes",
    title: "Filtrar",
    groups: [
      {
        id: "family",
        name: "Família olfativa",
        type: "checkbox",
        options: [
          { value: "floral", label: "Floral" },
          { value: "amadeirado", label: "Amadeirado" },
          { value: "oriental", label: "Oriental" }
        ]
      },
      {
        id: "intensity",
        name: "Concentração",
        type: "checkbox",
        options: [
          { value: "edp", label: "Eau de Parfum" },
          { value: "edt", label: "Brumas & colônias" }
        ]
      },
      {
        id: "occasion",
        name: "Ocasião",
        type: "pills",
        options: [
          { value: "dia", label: "Dia a dia" },
          { value: "noite", label: "Noite" },
          { value: "festa", label: "Eventos" }
        ]
      }
    ]
  },
  skincare: {
    eyebrow: "Skincare",
    title: "Filtrar",
    groups: [
      {
        id: "skinType",
        name: "Tipo de pele",
        type: "checkbox",
        options: [
          { value: "todas", label: "Todos os tipos" },
          { value: "sensivel", label: "Sensível & seca" },
          { value: "madura", label: "Madura" }
        ]
      },
      {
        id: "skinActive",
        name: "Ativo principal",
        type: "checkbox",
        options: [
          { value: "vitamina-c", label: "Vitamina C" },
          { value: "hialuronico", label: "Ácido hialurônico" },
          { value: "niacinamida", label: "Niacinamida" }
        ]
      },
      {
        id: "benefit",
        name: "Benefício",
        type: "checkbox",
        options: [
          { value: "glow", label: "Glow & tom uniforme" },
          { value: "firmeza", label: "Firmeza" },
          { value: "calmante", label: "Calmante" }
        ]
      },
      {
        id: "routineStep",
        name: "Etapa",
        type: "pills",
        options: [
          { value: "serum", label: "Sérum" },
          { value: "noturno", label: "Noturno" },
          { value: "bruma", label: "Bruma" }
        ]
      }
    ]
  },
  maquiagem: {
    eyebrow: "Maquiagem",
    title: "Filtrar",
    groups: [
      {
        id: "makeupArea",
        name: "Área",
        type: "checkbox",
        options: [
          { value: "labios", label: "Lábios" },
          { value: "rosto", label: "Rosto" }
        ]
      },
      {
        id: "makeupFinish",
        name: "Acabamento",
        type: "pills",
        options: [
          { value: "velvet", label: "Velvet" },
          { value: "glow", label: "Glow" }
        ]
      },
      {
        id: "makeupBenefit",
        name: "Ativo",
        type: "checkbox",
        options: [
          { value: "hialuronico", label: "Ácido hialurônico" },
          { value: "esqualano", label: "Esqualano" }
        ]
      }
    ]
  },
  cabelos: {
    eyebrow: "Cabelos",
    title: "Filtrar",
    groups: [
      {
        id: "hairBenefit",
        name: "Benefício",
        type: "checkbox",
        options: [
          { value: "brilho", label: "Brilho" },
          { value: "nutricao", label: "Nutrição" }
        ]
      },
      {
        id: "hairActive",
        name: "Ativo",
        type: "checkbox",
        options: [
          { value: "argan", label: "Óleo de argan" },
          { value: "camelia", label: "Camélia" }
        ]
      },
      {
        id: "hairType",
        name: "Necessidade",
        type: "pills",
        options: [
          { value: "secos", label: "Pontas secas" },
          { value: "danificados", label: "Fios danificados" }
        ]
      }
    ]
  },
  corpo: {
    eyebrow: "Corpo & Banho",
    title: "Filtrar",
    groups: [
      {
        id: "texture",
        name: "Textura",
        type: "checkbox",
        options: [
          { value: "creme", label: "Creme" },
          { value: "manteiga", label: "Manteiga" }
        ]
      },
      {
        id: "bodyActive",
        name: "Ativo",
        type: "checkbox",
        options: [
          { value: "karite", label: "Karité" },
          { value: "murumuru", label: "Murumuru" }
        ]
      },
      {
        id: "scent",
        name: "Aroma",
        type: "pills",
        options: [
          { value: "floral", label: "Floral" },
          { value: "algodao", label: "Flor de algodão" }
        ]
      }
    ]
  },
  kits: {
    eyebrow: "Kits",
    title: "Filtrar",
    groups: [
      {
        id: "giftPackaging",
        name: "Embalagem",
        type: "checkbox",
        options: [
          { value: "caixa-luxo", label: "Caixa laqueada" },
          { value: "necessaire", label: "Nécessaire" }
        ]
      },
      {
        id: "giftOccasion",
        name: "Ocasião",
        type: "pills",
        options: [
          { value: "amor", label: "Presente" },
          { value: "viagem", label: "Viagem" }
        ]
      }
    ]
  }
};
