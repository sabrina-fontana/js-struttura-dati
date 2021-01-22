const fieldCodes = [
  'W', 'U', 'B', 'R', 'G'
]

const cardTypes = [
  'terre',
  'creature',
  'incantesimi',
  'artefatti',
  'instantanei',
  'stregonerie'
]

const cardColors = [
  'W', 'U', 'B', 'R', 'G'
]


// Abbiamo creato un oggetto di oggetti, come riferimento
// di una edizione. Se ad esempio scrivo editions['SP']
// allora otterrò tutto un oggetto che descrive
// con più dettagli l'edizione.
// come oggetto di oggetti, può essere navigato solo con il for-in
const editions = {

  'BL': {
      edition: 'Boolean',
      rarity: 'blue'
  },

  'SP': {
      edition: 'Special',
      rarity: 'red'
  }

}


const cards = [
  // GRIZZLY BEARS CARD
  {
    cardName: 'Grizzly Bears',
    cost: {
      genericCostNumber: 1,
      costFields: [ // colors array con riferimento a fieldCodes
        fieldCodes[0],  // 'W',  - un suo riferimento
        fieldCodes[2]   // 'B'
      ],
    },
    picture: 'images/grizzlybears.png',
    cardType: cardTypes[1],
    cardObject: 'Bear',
    editionType: editions['BL'],
    description: 'Lorem ipsum',
    story: 'Naltro Lorem Ipsum',
    authorString: '',
    score: {
      power: 2,  // filtrarlo per power
      toughness: 2
    },
    cardColor: cardColors[4],
  },

    // SVILUPPATORE GUERRIERO CARD
  {
    cardName: 'Sviluppatore guerriero',
    cost: {
      genericCostNumber: 3,
      costFields: [
        fieldCodes[2],
        fieldCodes[3]
      ],
    },
    picture: 'images/sviluppatoreguerriero.png',
    cardType: cardTypes[1],
    cardObject: 'Developer',
    editionType: editions['BL'],
    description: 'Lo sviluppatore guerriero spezza i byte in bit!',
    story: 'Lo sviluppatore guerriero è una forma di essere umano evoluto.',
    authorString: '',
    score: {
      power: 5,
      toughness: 3
    },
    cardColor: cardColors[1],
  },

  // PHYREXIAN OBLITERATOR CARD
  {
    cardName: 'Phyrexian Obliterator',
    cost: {
      genericCostNumber: 1,
      costFields: [
        fieldCodes[0],
        fieldCodes[2]
      ],
    },
    picture: 'images/phyrexianobliterator.png',
    cardType: cardTypes[4],
    cardObject: 'Horror',
    editionType: editions['GG'],
    description: '',
    story: '',
    authorString: '',
    score: {
      power: 5,
      toughness: 5
    },
    cardColor: cardColors[1],
  },

  // WORST FEARS CARD
  {
    cardName: 'Worst Fears',
    cost: {
      genericCostNumber: 7,
      costFields: [
        fieldCodes[2]
      ],
    },
    picture: 'images/worstfears.png',
    cardType: cardTypes[5],
    cardObject: '',
    editionType: editions['GG'],
    description: '',
    story: '',
    authorString: '',
    score: {
      power: 2,
      toughness: 0
    },
    cardColor: cardColors[1],
  },

  // JACE BELEREN CARD
  {
    cardName: 'Jace Beleren',
    cost: {
      genericCostNumber: 1,
      costFields: [
        fieldCodes[0],
        fieldCodes[2]
      ],
    },
    picture: 'images/jacebeleren.png',
    cardType: cardTypes[0],
    cardObject: 'Jace',
    editionType: editions['GG'],
    description: '',
    story: '',
    authorString: '',
    score: {
      power: 3,
      toughness: 3
    },
    cardColor: cardColors[2],
  },

  // LIVING FAILURES CARD
  {
    cardName: 'Living Failures',
    cost: {
      genericCostNumber: 1,
      costFields: [
        fieldCodes[0],
        fieldCodes[2]
      ],
    },
    picture: 'images/livingfailures.png',
    cardType: cardTypes[1],
    cardObject: 'Mutant Spellshaper',
    editionType: editions['SP'],
    description: '',
    story: '',
    authorString: '',
    score: {
      power: 1,
      toughness: 1
    },
    cardColor: cardColors[0],
  }

];

const cardsList = document.getElementById('cards');
cards.forEach((element) => {
  cardsList.innerHTML +=
  `<div>${element.cardName}</div>`
});

const powerValues = [];
const typeValues = [];

cards.forEach((element) => {
  if (!powerValues.includes(element.score.power)) {
    powerValues.push(element.score.power);
    powerValues.sort();
  };
  if (!typeValues.includes(element.cardType)) {
    typeValues.push(element.cardType);
  }
});

const valuePowerOption = document.getElementById('power-select');
const valueTypeOption = document.getElementById('type-select');

// aggiungo una option per ogni valore di power
powerValues.forEach((element) => {
  valuePowerOption.innerHTML +=
  `<option value="${element}">${element}</option>`
});

// aggiungo una option per ogni valore di type
typeValues.forEach((element) => {
  valueTypeOption.innerHTML +=
  `<option value="${element}">${element}</option>`
});

const selectPower = $('#power-select');
const selectType = $('#type-select');

// al change della selectPower
selectPower.change(function() {
  cardsList.innerHTML = '';
// PARSEINT SUL VALORE!!!!!!!!!!!!!
  let powerSelected = $(this).val();
  let filteredByPower;
  if (powerSelected === 'all') {
    filteredByPower = cards;
  } else {
    powerSelected = parseInt(powerSelected);
    filteredByPower = cards.filter((element) => {
    return element.score.power === powerSelected
  });
  }

  filteredByPower.forEach((element) => {
    cardsList.innerHTML +=
    `<div>${element.cardName}</div>`;
  });
});

// al change della selectType
selectType.change(function() {
  cardsList.innerHTML = '';
// PARSEINT SUL VALORE!!!!!!!!!!!!!
  let typeSelected = $(this).val();
  let filteredByType;
  if (typeSelected === 'all') {
    filteredByType = cards;
  } else {
    filteredByType = cards.filter((element) => {
    return element.cardType === typeSelected
  });
  }

  filteredByType.forEach((element) => {
    cardsList.innerHTML +=
    `<div>${element.cardName}</div>`;
  });
});
