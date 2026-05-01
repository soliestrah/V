// ============================================================
// CONFIGURATION — tout modifier ici, ne pas toucher au HTML
// ============================================================

const PAGE = {
  eyebrow: 'antichambreV · ce qui fait plaisir au ventre',
  title: 'recettes',
};

// Groupes de filtres
// { id: identifiant unique du groupe, label: affiché, filters: [{ value, label }] }
const FILTER_GROUPS = [
  {
    id: `1`,
    label: `type`,
    filters: [
      { value: `all`,       label: `tout` },
      { value: `sale`,      label: `salé` },
      { value: `sucre`,     label: `sucré` },
      { value: `boissons`,  label: `boissons` },
      { value: `conserves`, label: `conserves` },
    ]
  },
  {
    id: `2`,
    label: `temps`,
    filters: [
      { value: `all`,      label: `tout` },
      { value: `rapide`,   label: `rapide` },
      { value: `moyen`,    label: `moyen` },
      { value: `long`,     label: `long` },
      { value: `mealprep`, label: `meal prep` },
    ]
  },
  {
    id: `3`,
    label: `repas`,
    filters: [
      { value: `all`,             label: `tout` },
      { value: `petit-dejeuner`,  label: `petit déj` },
      { value: `apero`,           label: `apéro` },
      { value: `dejeuner`,        label: `déjeuner` },
      { value: `diner`,           label: `dîner` },
      { value: `gouter`,          label: `goûter` },
      { value: `dessert`,         label: `dessert` },
    ]
  },
];

const CARDS = [
  // ── SALÉ ──────────────────────────────────────────────────
  {
    id: 1,
    title: `Wraps`,
    desc: `Galette · steak haché · oignons · poivrons · tomates cerises · galette de pomme de terre · cornichons aigre-doux`,
    content: `Tartiner la galette de fromage à tartiner, mayo, ketchup et sauce épicée. Disposer les tomates cerises coupées et les cornichons. Saupoudrer de sésame. Dans une poêle, faire revenir oignons, poivrons et steak haché en morceaux. Ajouter les épices et la sauce soja en cours de cuisson. Rassembler le tout sur la galette, rouler et déguster.`,
    tags: [`sale`, `rapide`, `dejeuner`, `diner`],
    status: `Repas complet · rapide`,
    links: []
  },
  {
    id: 2,
    title: `Sandwich`,
    desc: `Pain de mie · fromage à tartiner · fromage en tranche · mayo, ketchup, sauce épicée · protéine (jambon, poulet, dinde)`,
    content: `Tranche 1 : fromage à tartiner. Tranche 2 : sauces + fromage en tranche + cornichons + protéine pliée. Refermer et déguster.`,
    tags: [`sale`, `rapide`, `dejeuner`, `apero`],
    status: `Classique maison · rapide`,
    links: []
  },
  {
    id: 3,
    title: `Burger`,
    desc: `Buns briochés · protéine · galette de pomme de terre · bacon · oignons · cornichons · fromage à tartiner · cheddar · sauces`,
    content: `Toaster les buns. Tartiner un côté de fromage à tartiner, l'autre de sauces. Disposer fromage en tranche + cornichons. Ajouter les ingrédients chauds.`,
    tags: [`sale`, `rapide`, `dejeuner`, `diner`],
    status: `Complet · montage soigné`,
    links: []
  },
  {
    id: 4,
    title: `Chili`,
    desc: `Riz · haricots rouges · maïs · poivrons · carottes · oignon · protéine · sauce tomate · épices`,
    content: `Cuire le riz (7 min). Cuire les haricots (30 min). Faire revenir oignon + protéine + poivrons + épices. Mélanger avec haricots + sauce tomate. Mijoter. Ajouter le maïs. Servir avec le riz.`,
    tags: [`sale`, `long`, `dejeuner`, `diner`],
    status: `Mijoté · pour 2–3 personnes`,
    links: []
  },
  {
    id: 5,
    title: `Couscous`,
    desc: `Semoule · boîte de légumes à couscous · protéine (steak haché ou hauts de cuisse)`,
    content: `Cuire la semoule à l'eau chaude avec du beurre. Cuire les légumes en casserole. Cuire la protéine à part. Assembler une fois tout cuit.`,
    tags: [`sale`, `rapide`, `dejeuner`, `diner`],
    status: `Simple et rapide`,
    links: []
  },
  {
    id: 6,
    title: `Pâtes à la bolognaise`,
    desc: `Pâtes · oignon · protéine · sauce tomate · épices`,
    content: `Cuire les pâtes (7 min). Faire revenir oignon + protéine + poivrons + épices. Ajouter sauce tomate, mijoter. Incorporer les pâtes et mélanger.`,
    tags: [`sale`, `rapide`, `dejeuner`, `diner`],
    status: `Le classique du quotidien`,
    links: []
  },
  {
    id: 7,
    title: `Lentilles saucisses`,
    desc: `Lentilles · saucisses à cuire · oignon · carottes`,
    content: `Cuire les lentilles (et carottes). Cuire les saucisses. Faire revenir l'oignon. Tout ajouter aux lentilles et laisser mijoter.`,
    tags: [`sale`, `long`, `dejeuner`, `diner`],
    status: `Mijoté réconfortant`,
    links: []
  },
  {
    id: 8,
    title: `Hauts de cuisses miel-moutarde`,
    desc: `4 hauts de cuisses · moutarde · miel · huile d'olive · sel, poivre · herbes de Provence`,
    content: `Mélanger miel + moutarde + huile. Saler, poivrer les hauts de cuisses, badigeonner de sauce. Enfourner 200°C, 30 min en arrosant à mi-cuisson.`,
    tags: [`sale`, `long`, `dejeuner`, `diner`],
    status: `Four 200°C · 30 min`,
    links: []
  },
  {
    id: 9,
    title: `Haricots verts au beurre de cacahuète`,
    desc: `Haricots verts · blancs de poulet · riz · beurre de cacahuète · sauce soja · miel · ail`,
    content: `Mélanger beurre de cacahuète + sauce soja + miel + ail + eau chaude. Verser dans la poêle avec le poulet, ajouter les haricots, chauffer 2 min.`,
    tags: [`sale`, `rapide`, `dejeuner`, `diner`],
    status: `Saveurs asiatiques · 20 min`,
    links: []
  },
  {
    id: 10,
    title: `Nouilles japonaises aux champignons`,
    desc: `Nouilles japonaises · œuf · champignons · bouillon de poulet`,
    content: `Faire revenir les champignons. Cuire les nouilles dans le bouillon. Faire l'œuf mollet à part. Assembler dans un bol.`,
    tags: [`sale`, `rapide`, `dejeuner`, `diner`],
    status: `Bouillon réconfortant`,
    links: []
  },
  {
    id: 11,
    title: `Nouilles instantanées à l'œuf`,
    desc: `1 sachet nouilles instantanées · 1 œuf · 400 ml eau`,
    content: `Bouillir l'eau, ajouter nouilles + épices. Après 2 min, casser l'œuf (poché entier ou en filet battu). Cuire encore 1–2 min. Servir chaud.`,
    tags: [`sale`, `rapide`, `dejeuner`, `diner`],
    status: `Rapide · 5 min`,
    links: []
  },
  {
    id: 12,
    title: `Mac & Cheese revisité`,
    desc: `Restes de pâtes · crème fraîche · gruyère · cheddar · fromage à tartiner · lardons · oignon rouge · oignons frits`,
    content: `À feu doux : crème + gruyère + cheddar + fromage à tartiner. Saler, poivrer. Ajouter lardons + oignons dorés. Incorporer les pâtes. Option gratin : grill 5–7 min.`,
    tags: [`sale`, `rapide`, `diner`],
    status: `Anti-gaspi · avec des restes de pâtes`,
    links: []
  },
  {
    id: 13,
    title: `Hachis Parmentier`,
    desc: `500 g pommes de terre · 300 g viande hachée · oignon · lait · fromage râpé · muscade`,
    content: `Cuire et écraser les pommes de terre en purée. Faire revenir oignon + viande. Plat : viande au fond → purée → fromage râpé. Gratiner 15 min à 200°C.`,
    tags: [`sale`, `long`, `dejeuner`, `diner`],
    status: `Four 200°C · gratiner 15 min`,
    links: []
  },
  {
    id: 14,
    title: `Floraline au jambon`,
    desc: `Floraline · lait · jambon · sel, poivre · fromage râpé`,
    content: `Chauffer le lait. Verser la Floraline en pluie en mélangeant. Cuire 2–3 min à feu doux jusqu'à épaississement. Ajouter le jambon, assaisonner.`,
    tags: [`sale`, `rapide`, `dejeuner`, `diner`],
    status: `Réconfortant · 10 min`,
    links: []
  },
  {
    id: 15,
    title: `La soupe`,
    desc: `Carottes · pommes de terre · navet · poireau · oignon · bouillon`,
    content: `Faire revenir l'oignon, ajouter les légumes coupés, couvrir de 1 L eau + cube de bouillon. Porter à ébullition, mijoter 25 min. Mixer (ou non).`,
    tags: [`sale`, `long`, `dejeuner`, `diner`],
    status: `Légumes de saison · 30 min`,
    links: []
  },
  {
    id: 16,
    title: `La salade`,
    desc: `Salade découpée · tomate · oignon · feta · sauce crudité + sauce relevée · options variées`,
    content: `Juste tout mélanger ! Options : avocat, croutons, pâtes, cornichons, carotte, radis, poivron, lardons, poulet, thon…`,
    tags: [`sale`, `rapide`, `dejeuner`, `diner`, `apero`],
    status: `Base modulable à l'infini`,
    links: []
  },
  {
    id: 17,
    title: `Brunch`,
    desc: `Œufs · bacon · saucisse · galette de pomme de terre · yaourt + chia · pain de mie`,
    content: `Faire les œufs brouillés. Faire cuire le bacon. Tout mettre ensemble dans une belle assiette.`,
    tags: [`sale`, `rapide`, `petit-dejeuner`],
    status: `Week-end · tout en un`,
    links: []
  },
  {
    id: 18,
    title: `Pistou maison`,
    desc: `1 grosse poignée basilic frais · 1 gousse d'ail · huile d'olive · sel`,
    content: `Mixer ou piler au mortier basilic + ail + sel. Incorporer l'huile progressivement. Conserver au frigo recouvert d'un filet d'huile. Se congèle très bien en cubes.`,
    tags: [`sale`, `rapide`, `mealprep`, `dejeuner`, `diner`],
    status: `Basilic du balcon — soupe, pâtes, tartines`,
    links: []
  },
  {
    id: 19,
    title: `Gremolata persil & citron`,
    desc: `Persil frisé · zeste de citron bio · ail · sel`,
    content: `Hacher finement persil + ail. Mélanger avec le zeste de citron + sel. Parsemer au dernier moment sur le plat chaud. Idéale sur un osso-buco, des carottes rôties ou un simple riz vapeur.`,
    tags: [`sale`, `rapide`, `mealprep`, `dejeuner`, `diner`],
    status: `Condiment vif — poisson, légumes, risotto`,
    links: []
  },
  {
    id: 20,
    title: `Huile infusée thym & romarin`,
    desc: `6 brins thym frais · 2 brins romarin · 250 ml huile d'olive`,
    content: `Laver et sécher parfaitement les herbes. Placer dans une bouteille propre. Verser l'huile. Infuser 2 semaines à l'abri de la lumière. Les herbes doivent être parfaitement sèches.`,
    tags: [`sale`, `long`, `mealprep`],
    status: `Condiment de base — infusion 2 semaines`,
    links: []
  },
  {
    id: 21,
    title: `Beurre composé aux herbes`,
    desc: `125 g beurre mou · verveine · menthe · thym · sel, poivre`,
    content: `Ciseler finement les herbes. Mélanger au beurre mou. Rouler dans du film alimentaire en boudin. Réfrigérer 2h. Couper en rondelles. Se congèle très bien.`,
    tags: [`sale`, `long`, `mealprep`, `apero`],
    status: `Sur un poisson, une viande grillée, à tartiner`,
    links: []
  },
  {
    id: 22,
    title: `Taboulé à la menthe & persil`,
    desc: `200 g semoule fine · menthe verte fraîche · persil frisé · 3 tomates · citron · huile d'olive`,
    content: `Verser de l'eau bouillante sur la semoule, couvrir 5 min, égrainer. Couper les tomates, ciseler les herbes. Assaisonner avec citron et huile. Ajouter les herbes au dernier moment.`,
    tags: [`sale`, `rapide`, `dejeuner`, `apero`],
    status: `Pour 4 personnes · 20 min`,
    links: []
  },
  {
    id: 23,
    title: `Noix activées & torréfiées`,
    desc: `Amandes · noix · cajou · noisettes · macadamia · tournesol · eau salée`,
    content: `Trempage : couvrir d'eau froide + sel (amandes 12h, noix 8h, cajou 4–6h). Rincer, sécher. Torréfier au four à basse température selon la variété. Conservation en bocal hermétique.`,
    tags: [`sale`, `long`, `mealprep`, `apero`, `gouter`],
    status: `Snack sain — meilleure digestion`,
    links: []
  },
  {
    id: 24,
    title: `Flageolets aux lardons`,
    desc: `Flageolets · lardons · oignon · herbes de Provence · moutarde`,
    content: `Cuire les flageolets (boîte : égoutter et rincer / secs : tremper une nuit puis cuire 1h30). Faire revenir les lardons à sec. Ajouter l'oignon émincé. Ajouter les flageolets, mijoter 5–10 min. Une cuillerée de moutarde à l'ancienne en fin de cuisson change tout.`,
    tags: [`sale`, `rapide`, `dejeuner`, `diner`],
    status: `Simple et nourrissant · 35 min`,
    links: []
  },
  {
    id: 25,
    title: `Pâte pour petit pain`,
    desc: `250 g farine · eau chaude · huile d'olive · levure chimique · sel · épices au choix`,
    content: `Mélanger tous les ingrédients énergiquement. Laisser reposer 30 min à 1h. Étaler et cuire à la poêle (effet wrap) ou à l'air fryer. Pré-cuire à l'air fryer pour une cuisson uniforme.`,
    tags: [`sale`, `long`, `petit-dejeuner`, `apero`],
    status: `Classique maison · repos 1h minimum`,
    links: []
  },
  {
    id: 26,
    title: `Pommes de terre sautées`,
    desc: `Pommes de terre · huile · beurre · ail · persil · thym`,
    content: `Couper en dés, rincer, sécher. Précuire 5 min à l'eau (optionnel). Faire sauter à feu vif sans bouger 4–5 min. Ajouter beurre + ail, continuer 8–10 min en remuant jusqu'à dorure. Saler, parsemer de persil.`,
    tags: [`sale`, `moyen`, `dejeuner`, `diner`],
    status: `Dorées et croustillantes à la poêle`,
    links: []
  },
  {
    id: 27,
    title: `Pommes de terre rôties`,
    desc: `Pommes de terre · huile d'olive · paprika fumé · ail en poudre · herbes de Provence`,
    content: `Couper en quartiers, sécher. Enrober d'huile et d'épices. Air fryer 200°C : 15 min, secouer, puis 8–10 min jusqu'à dorure. Servir immédiatement.`,
    tags: [`sale`, `moyen`, `dejeuner`, `diner`, `apero`],
    status: `Croustillantes à l'air fryer`,
    links: []
  },
  {
    id: 28,
    title: `Purée maison`,
    desc: `Pommes de terre farineuses · lait entier · beurre · noix de muscade`,
    content: `Cuire les pommes de terre 20 min à l'eau salée. Égoutter. Écraser au presse-purée avec le beurre. Ajouter le lait chaud petit à petit jusqu'à consistance souhaitée. Assaisonner.`,
    tags: [`sale`, `moyen`, `dejeuner`, `diner`],
    status: `Onctueuse et réconfortante`,
    links: []
  },
  {
    id: 29,
    title: `Frites maison`,
    desc: `Pommes de terre · huile · sel · paprika · ail en poudre`,
    content: `Couper en bâtonnets, tremper 30 min dans l'eau froide, bien sécher. Enrober d'huile. Air fryer 180°C pendant 15 min, secouer. Monter à 200°C pour 5–8 min. Saler à la sortie.`,
    tags: [`sale`, `long`, `dejeuner`, `diner`],
    status: `Légères et croustillantes à l'air fryer`,
    links: []
  },
  {
    id: 30,
    title: `Pommes de terre lyonnaises`,
    desc: `Pommes de terre · oignons · beurre · huile · persil · lardons`,
    content: `Précuire les pommes de terre entières 20 min, laisser refroidir, couper en rondelles. Faire dorer les oignons 10 min. Faire revenir les rondelles 3–4 min de chaque côté. Mélanger, assaisonner, parsemer de persil.`,
    tags: [`sale`, `long`, `dejeuner`, `diner`],
    status: `Le classique aux oignons dorés`,
    links: []
  },
  {
    id: 31,
    title: `Robe des champs`,
    desc: `Grosses pommes de terre · huile d'olive · gros sel · crème fraîche · ciboulette`,
    content: `Piquer les pommes de terre, badigeonner d'huile, frotter de gros sel. Air fryer 200°C pendant 35–40 min. Inciser en croix, garnir de crème fraîche et ciboulette.`,
    tags: [`sale`, `long`, `dejeuner`, `diner`],
    status: `Un repas complet à l'air fryer`,
    links: []
  },

  // ── SUCRÉ ─────────────────────────────────────────────────
  {
    id: 32,
    title: `Bouchée du diable`,
    desc: `Pain de mie · pâte à tartiner au chocolat · beurre de cacahuète`,
    content: `Tartiner une tranche de pâte à tartiner. L'autre de beurre de cacahuète. Assembler les deux. Déguster.`,
    tags: [`sucre`, `rapide`, `petit-dejeuner`, `gouter`],
    status: `2 ingrédients · 1 minute`,
    links: []
  },
  {
    id: 33,
    title: `Tiramisu`,
    desc: `3 œufs · biscuits cuillère · 250 g mascarpone · sucre · café · cacao en poudre`,
    content: `Fouetter jaunes + sucre jusqu'à blanchissement. Ajouter mascarpone. Monter les blancs en neige, incorporer délicatement. Tremper les biscuits dans le café. Alterner couches biscuits/crème. Cacao sur le dessus. 4h au frigo minimum.`,
    tags: [`sucre`, `long`, `dessert`],
    status: `Pour 4–6 personnes · repos 4h minimum`,
    links: []
  },
  {
    id: 34,
    title: `Mugcake au chocolat`,
    desc: `Farine · sucre · cacao non sucré · œuf · lait · huile neutre · pépites`,
    content: `Mélanger farine + sucre + cacao dans un mug. Ajouter l'œuf, battre. Ajouter lait + huile. Micro-ondes 1 min à 1 min 30. Laisser tiédir 1 min.`,
    tags: [`sucre`, `rapide`, `gouter`, `dessert`],
    status: `1 mug · 1 min 30 au micro-ondes`,
    links: []
  },
  {
    id: 35,
    title: `Cookies`,
    desc: `100 g beurre mou · 100 g sucre · 1 œuf · 150 g farine · levure · 100 g pépites de chocolat`,
    content: `Mélanger beurre + sucre. Ajouter l'œuf. Verser farine + levure. Incorporer pépites. Former des boules sur plaque. Cuire 10 min à 180°C. Laisser refroidir 5 min. Ils paraissent encore mous à la sortie du four — c'est normal.`,
    tags: [`sucre`, `rapide`, `gouter`, `dessert`],
    status: `Four 180°C · 10 min · ~15 cookies`,
    links: []
  },
  {
    id: 36,
    title: `Fraises gariguette & verveine`,
    desc: `500 g fraises gariguette · verveine fraîche · sucre ou miel · jus de citron`,
    content: `Couper les fraises en deux. Ciseler la verveine très finement. Mélanger avec sucre et citron. Macérer 15 min avant de servir. Servir avec une boule de glace vanille ou du yaourt grec.`,
    tags: [`sucre`, `rapide`, `dessert`, `gouter`],
    status: `Dessert minute · 10 min`,
    links: []
  },
  {
    id: 37,
    title: `Panna cotta à la lavande`,
    desc: `500 ml crème liquide · sucre · tiges lavande fraîche · gélatine ou agar-agar`,
    content: `Infuser la lavande dans la crème chaude 10 min. Filtrer. Ajouter sucre + gélatine ramollie. Verser en ramequins. Réfrigérer 4h minimum. Doser la lavande avec parcimonie.`,
    tags: [`sucre`, `long`, `dessert`],
    status: `Pour 4 · veille au frigo`,
    links: []
  },
  {
    id: 38,
    title: `Crumble framboises & menthe`,
    desc: `300 g framboises · menthe · farine · beurre froid · cassonade · poudre d'amande`,
    content: `Framboises + menthe ciselée dans un plat. Sabler farine + beurre froid + cassonade + amande du bout des doigts. Répartir sur les fruits. Cuire 25 min à 180°C.`,
    tags: [`sucre`, `long`, `dessert`],
    status: `Pour 4 · 35 min · four 180°C`,
    links: []
  },

  // ── CONSERVES ─────────────────────────────────────────────
  {
    id: 39,
    title: `Sirop de verveine`,
    desc: `Verveine fraîche · 300 g sucre · 300 ml eau · jus de citron`,
    content: `Porter eau + sucre à ébullition. Retirer du feu, ajouter la verveine. Couvrir, infuser 20 min. Filtrer, ajouter le citron. Mettre en bouteille stérilisée. Le citron est conservateur naturel et fixe la couleur verte.`,
    tags: [`conserves`, `rapide`, `mealprep`],
    status: `Boissons, desserts, cocktails — conserve 3 mois`,
    links: []
  },
  {
    id: 40,
    title: `Sel aromatisé maison`,
    desc: `200 g gros sel · thym · romarin · lavande · zeste citron`,
    content: `Effeuiller les herbes, sécher 1h à 50°C. Mixer grossièrement avec le sel. Étaler, sécher 24h à l'air. Mettre en bocal. Parfait sur légumes grillés, poisson ou beurre.`,
    tags: [`conserves`, `long`, `mealprep`],
    status: `Condiment — conserve 6 mois`,
    links: []
  },
  {
    id: 41,
    title: `Confiture fraises & menthe`,
    desc: `500 g fraises gariguette · 350 g sucre à confiture · citron · menthe fraîche`,
    content: `Macérer fraises + sucre + citron 1h. Cuire 20 min en remuant. Ajouter la menthe les 2 dernières min. Pots stérilisés, retourner jusqu'au refroidissement. Test de prise : une goutte sur assiette froide doit gélifier.`,
    tags: [`conserves`, `long`, `mealprep`],
    status: `2 pots · conserve 1 an`,
    links: []
  },

  // ── BOISSONS ──────────────────────────────────────────────
  {
    id: 42,
    title: `Eau infusée menthe & concombre`,
    desc: `8 feuilles menthe ananas · ½ concombre · 1 litre eau froide · glaçons`,
    content: `Placer tous les ingrédients dans une carafe. Infuser 4h minimum au réfrigérateur. Servir bien frais.`,
    tags: [`boissons`, `long`, `mealprep`, `dejeuner`, `diner`, `apero`],
    status: `Rafraîchissant · à préparer la veille`,
    links: []
  },
  {
    id: 43,
    title: `Limonade verveine & fraises`,
    desc: `200 g fraises · verveine · citrons · miel · 750 ml eau gazeuse`,
    content: `Mixer fraises + verveine + citron + miel. Filtrer si désiré. Verres avec glace, compléter d'eau gazeuse. Décorer d'une feuille de verveine.`,
    tags: [`boissons`, `rapide`, `apero`, `gouter`],
    status: `Pour 4 personnes · 15 min`,
    links: []
  },
  {
    id: 44,
    title: `Mocktail lavande & citron`,
    desc: `Sirop de lavande (ou verveine) · jus de citron · eau gazeuse · glaçons · lavande`,
    content: `Sirop + citron dans un verre sur glace. Compléter d'eau gazeuse. Remuer doucement. Décorer d'une tige de lavande.`,
    tags: [`boissons`, `rapide`, `apero`, `diner`],
    status: `Élégant · sans alcool`,
    links: []
  },
];


// ============================================================
// RENDU — ne pas modifier en dessous sauf si tu sais ce que tu fais
// ============================================================

document.addEventListener('DOMContentLoaded', () => {

  // -- En-tête --
  document.querySelector('.page-header__eyebrow').textContent = PAGE.eyebrow;
  document.querySelector('.page-header__title').textContent   = PAGE.title;

  // -- Filtres --
  const filtersEl = document.querySelector('.filters');
  filtersEl.innerHTML = FILTER_GROUPS.map(group => `
    <div class="filter-group">
      <span class="filter-group__label">${group.label}</span>
      <div class="filter-group__tags">
        ${group.filters.map((f, i) => `
          <button
            class="filter-tag${i === 0 ? ' active' : ''}"
            data-filter="${f.value}"
            data-group="${group.id}"
          >${f.label}</button>
        `).join('')}
      </div>
    </div>
  `).join('');

  // -- Grille --
  const grid = document.getElementById('grid');
  grid.innerHTML = CARDS.map(card => `
    <article class="card" data-id="${card.id}" data-tags="${card.tags.join(' ')}">
      <h3 class="card__title">${card.title}</h3>
      <p class="card__desc">${card.desc}</p>
      <div class="card__meta">
        <div class="card__tags">
          ${card.tags.map(t => `<span class="card__tag">${t}</span>`).join('')}
        </div>
        <span class="card__status">— ${card.status}</span>
      </div>
    </article>
  `).join('');

  // -- Filtres logique --
  const activeFilters = {};
  FILTER_GROUPS.forEach(g => activeFilters[g.id] = 'all');

  const counter = document.querySelector('.js-count');
  const empty   = document.getElementById('empty');

  function applyFilters() {
    let visible = 0;
    document.querySelectorAll('.card').forEach(card => {
      const tags = card.dataset.tags ? card.dataset.tags.split(' ') : [];
      const passes = Object.entries(activeFilters).every(([, filter]) => {
        return filter === 'all' || tags.includes(filter);
      });
      card.classList.toggle('hidden', !passes);
      if (passes) visible++;
    });
    counter.textContent = visible;
    empty.classList.toggle('visible', visible === 0);
  }

  document.querySelector('.filters').addEventListener('click', e => {
    const btn = e.target.closest('.filter-tag');
    if (!btn) return;
    const group = btn.dataset.group;
    document.querySelectorAll(`.filter-tag[data-group="${group}"]`).forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    activeFilters[group] = btn.dataset.filter;
    applyFilters();
  });

  applyFilters();

  // -- Panel droit --
  const panel      = document.getElementById('panel');
  const panelInner = document.getElementById('panel-inner');
  const overlay    = document.getElementById('panel-overlay');

  function openPanel(id) {
    const card = CARDS.find(c => c.id === id);
    if (!card) return;

    panelInner.innerHTML = `
      <button class="panel__close" id="panel-close" aria-label="Fermer">✕</button>

      <div class="panel__eyebrow">
        ${card.tags.map(t => `<span class="panel__tag">${t}</span>`).join('')}
        <span class="panel__status">— ${card.status}</span>
      </div>

      <h2 class="panel__title">${card.title}</h2>

      <p class="panel__desc">${card.desc}</p>

      <div class="panel__divider"></div>

      <div class="panel__content">${card.content}</div>

      ${card.links.length ? `
        <div class="panel__links">
          <p class="panel__links-label">ressources</p>
          <ul class="panel__links-list">
            ${card.links.map(l => `
              <li><a href="${l.url}" target="_blank" rel="noopener">${l.label} ↗</a></li>
            `).join('')}
          </ul>
        </div>
      ` : ''}
    `;

    panel.classList.add('open');
    overlay.classList.add('visible');
    document.body.classList.add('panel-open');

    document.getElementById('panel-close').addEventListener('click', closePanel);
  }

  function closePanel() {
    panel.classList.remove('open');
    overlay.classList.remove('visible');
    document.body.classList.remove('panel-open');
  }

  grid.addEventListener('click', e => {
    const title = e.target.closest('.card__title');
    if (!title) return;
    const card  = title.closest('.card');
    openPanel(Number(card.dataset.id));
  });

  overlay.addEventListener('click', closePanel);

  document.addEventListener('keydown', e => {
    if (e.key === 'Escape') closePanel();
  });

});
