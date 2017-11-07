const whTypes = {
  A009: {
    destination: 'C13',
    maxMass: 500000000,
    maxSingleMass: 20000000,
    maxHours: 16,
    regeneration: 0
  },
  A239: {
    destination: 'LS',
    maxMass: 2000000000,
    maxSingleMass: 300000000,
    maxHours: 24,
    regeneration: 0
  },
  A641: {
    destination: 'HS',
    maxMass: 2000000000,
    maxSingleMass: 1000000000,
    maxHours: 16,
    regeneration: 0
  },
  A982: {
    destination: 'C6',
    maxMass: 3000000000,
    maxSingleMass: 300000000,
    maxHours: 24,
    regeneration: 0
  },
  B041: {
    destination: 'C6',
    maxMass: 5000000000,
    maxSingleMass: 300000000,
    maxHours: 48,
    regeneration: 500000000
  },
  B274: {
    destination: 'HS',
    maxMass: 2000000000,
    maxSingleMass: 300000000,
    maxHours: 24,
    regeneration: 0
  },
  B449: {
    destination: 'HS',
    maxMass: 2000000000,
    maxSingleMass: 1000000000,
    maxHours: 16,
    regeneration: 0
  },
  B520: {
    destination: 'HS',
    maxMass: 5000000000,
    maxSingleMass: 300000000,
    maxHours: 24,
    regeneration: 500000000
  },
  B735: {
    destination: 'Barbican',
    maxMass: 750000000,
    maxSingleMass: 300000000,
    maxHours: 16,
    regeneration: 0
  },
  C008: {
    destination: 'C5',
    maxMass: 1000000000,
    maxSingleMass: 5000000,
    maxHours: 16,
    regeneration: 500000000
  },
  C125: {
    destination: 'C2',
    maxMass: 1000000000,
    maxSingleMass: 20000000,
    maxHours: 16,
    regeneration: 0
  },
  C140: {
    destination: 'LS',
    maxMass: 3000000000,
    maxSingleMass: 1350000000,
    maxHours: 24,
    regeneration: 0
  },
  C247: {
    destination: 'C3',
    maxMass: 2000000000,
    maxSingleMass: 300000000,
    maxHours: 16,
    regeneration: 0
  },
  C248: {
    destination: 'NS',
    maxMass: 5000000000,
    maxSingleMass: 1800000000,
    maxHours: 24,
    regeneration: 500000000
  },
  C391: {
    destination: 'LS',
    maxMass: 5000000000,
    maxSingleMass: 1800000000,
    maxHours: 24,
    regeneration: 500000000
  },
  C414: {
    destination: 'Conflux',
    maxMass: 750000000,
    maxSingleMass: 300000000,
    maxHours: 16,
    regeneration: 0
  },
  D364: {
    destination: 'C2',
    maxMass: 1000000000,
    maxSingleMass: 300000000,
    maxHours: 16,
    regeneration: 0
  },
  D382: {
    destination: 'C2',
    maxMass: 2000000000,
    maxSingleMass: 300000000,
    maxHours: 16,
    regeneration: 0
  },
  D792: {
    destination: 'HS',
    maxMass: 3000000000,
    maxSingleMass: 1000000000,
    maxHours: 24,
    regeneration: 0
  },
  D845: {
    destination: 'HS',
    maxMass: 5000000000,
    maxSingleMass: 300000000,
    maxHours: 24,
    regeneration: 500000000
  },
  E004: {
    destination: 'C1',
    maxMass: 1000000000,
    maxSingleMass: 5000000,
    maxHours: 16,
    regeneration: 500000000
  },
  E175: {
    destination: 'C4',
    maxMass: 2000000000,
    maxSingleMass: 300000000,
    maxHours: 16,
    regeneration: 0
  },
  E545: {
    destination: 'NS',
    maxMass: 2000000000,
    maxSingleMass: 300000000,
    maxHours: 24,
    regeneration: 0
  },
  E587: {
    destination: 'NS',
    maxMass: 3000000000,
    maxSingleMass: 1000000000,
    maxHours: 16,
    regeneration: 0
  },
  F135: {
    destination: 'Thera',
    maxMass: 750000000,
    maxSingleMass: 300000000,
    maxHours: 16,
    regeneration: 0
  },
  F355: {
    destination: 'Thera',
    maxMass: 100000000,
    maxSingleMass: 20000000,
    maxHours: 16,
    regeneration: 0
  },
  G008: {
    destination: 'C6',
    maxMass: 1000000000,
    maxSingleMass: 5000000,
    maxHours: 16,
    regeneration: 500000000
  },
  G024: {
    destination: 'C2',
    maxMass: 2000000000,
    maxSingleMass: 300000000,
    maxHours: 16,
    regeneration: 0
  },
  H121: {
    destination: 'C1',
    maxMass: 500000000,
    maxSingleMass: 20000000,
    maxHours: 16,
    regeneration: 0
  },
  H296: {
    destination: 'C5',
    maxMass: 3000000000,
    maxSingleMass: 1350000000,
    maxHours: 24,
    regeneration: 0
  },
  H900: {
    destination: 'C5',
    maxMass: 3000000000,
    maxSingleMass: 300000000,
    maxHours: 24,
    regeneration: 0
  },
  I182: {
    destination: 'C2',
    maxMass: 2000000000,
    maxSingleMass: 300000000,
    maxHours: 16,
    regeneration: 0
  },
  J244: {
    destination: 'LS',
    maxMass: 1000000000,
    maxSingleMass: 20000000,
    maxHours: 24,
    regeneration: 0
  },
  K329: {
    destination: 'NS',
    maxMass: 5000000000,
    maxSingleMass: 1800000000,
    maxHours: 24,
    regeneration: 500000000
  },
  K346: {
    destination: 'NS',
    maxMass: 3000000000,
    maxSingleMass: 300000000,
    maxHours: 24,
    regeneration: 0
  },
  L005: {
    destination: 'C2',
    maxMass: 1000000000,
    maxSingleMass: 5000000,
    maxHours: 16,
    regeneration: 500000000
  },
  L031: {
    destination: 'Thera',
    maxMass: 3000000000,
    maxSingleMass: 1000000000,
    maxHours: 16,
    regeneration: 0
  },
  L477: {
    destination: 'C3',
    maxMass: 2000000000,
    maxSingleMass: 300000000,
    maxHours: 16,
    regeneration: 0
  },
  L614: {
    destination: 'C5',
    maxMass: 1000000000,
    maxSingleMass: 20000000,
    maxHours: 24,
    regeneration: 0
  },
  M001: {
    destination: 'C4',
    maxMass: 1000000000,
    maxSingleMass: 5000000,
    maxHours: 16,
    regeneration: 500000000
  },
  M164: {
    destination: 'Thera',
    maxMass: 2000000000,
    maxSingleMass: 300000000,
    maxHours: 16,
    regeneration: 0
  },
  M267: {
    destination: 'C3',
    maxMass: 1000000000,
    maxSingleMass: 300000000,
    maxHours: 16,
    regeneration: 0
  },
  M555: {
    destination: 'C5',
    maxMass: 3000000000,
    maxSingleMass: 1000000000,
    maxHours: 24,
    regeneration: 0
  },
  M609: {
    destination: 'C4',
    maxMass: 1000000000,
    maxSingleMass: 20000000,
    maxHours: 16,
    regeneration: 0
  },
  N062: {
    destination: 'C5',
    maxMass: 3000000000,
    maxSingleMass: 300000000,
    maxHours: 24,
    regeneration: 0
  },
  N110: {
    destination: 'HS',
    maxMass: 1000000000,
    maxSingleMass: 20000000,
    maxHours: 24,
    regeneration: 0
  },
  N290: {
    destination: 'LS',
    maxMass: 5000000000,
    maxSingleMass: 1800000000,
    maxHours: 24,
    regeneration: 500000000
  },
  N432: {
    destination: 'C5',
    maxMass: 3000000000,
    maxSingleMass: 1350000000,
    maxHours: 24,
    regeneration: 0
  },
  N766: {
    destination: 'C2',
    maxMass: 2000000000,
    maxSingleMass: 300000000,
    maxHours: 16,
    regeneration: 0
  },
  N770: {
    destination: 'C5',
    maxMass: 3000000000,
    maxSingleMass: 300000000,
    maxHours: 24,
    regeneration: 0
  },
  N944: {
    destination: 'LS',
    maxMass: 3000000000,
    maxSingleMass: 1350000000,
    maxHours: 24,
    regeneration: 0
  },
  N968: {
    destination: 'C3',
    maxMass: 2000000000,
    maxSingleMass: 300000000,
    maxHours: 16,
    regeneration: 0
  },
  O128: {
    destination: 'C4',
    maxMass: 1000000000,
    maxSingleMass: 300000000,
    maxHours: 24,
    regeneration: 100000000
  },
  O477: {
    destination: 'C3',
    maxMass: 2000000000,
    maxSingleMass: 300000000,
    maxHours: 16,
    regeneration: 0
  },
  O883: {
    destination: 'C3',
    maxMass: 1000000000,
    maxSingleMass: 20000000,
    maxHours: 16,
    regeneration: 0
  },
  P060: {
    destination: 'C1',
    maxMass: 500000000,
    maxSingleMass: 20000000,
    maxHours: 16,
    regeneration: 0
  },
  Q003: {
    destination: 'NS',
    maxMass: 1000000000,
    maxSingleMass: 5000000,
    maxHours: 16,
    regeneration: 500000000
  },
  Q063: {
    destination: 'HS',
    maxMass: 500000000,
    maxSingleMass: 20000000,
    maxHours: 16,
    regeneration: 0
  },
  Q317: {
    destination: 'C1',
    maxMass: 500000000,
    maxSingleMass: 20000000,
    maxHours: 16,
    regeneration: 0
  },
  R051: {
    destination: 'LS',
    maxMass: 3000000000,
    maxSingleMass: 1000000000,
    maxHours: 16,
    regeneration: 0
  },
  R259: {
    destination: 'Redoubt',
    maxMass: 750000000,
    maxSingleMass: 300000000,
    maxHours: 16,
    regeneration: 0
  },
  R474: {
    destination: 'C6',
    maxMass: 3000000000,
    maxSingleMass: 300000000,
    maxHours: 24,
    regeneration: 0
  },
  R943: {
    destination: 'C2',
    maxMass: 750000000,
    maxSingleMass: 300000000,
    maxHours: 16,
    regeneration: 0
  },
  S047: {
    destination: 'HS',
    maxMass: 3000000000,
    maxSingleMass: 300000000,
    maxHours: 24,
    regeneration: 0
  },
  S199: {
    destination: 'NS',
    maxMass: 3000000000,
    maxSingleMass: 1350000000,
    maxHours: 24,
    regeneration: 0
  },
  S804: {
    destination: 'C6',
    maxMass: 1000000000,
    maxSingleMass: 20000000,
    maxHours: 24,
    regeneration: 0
  },
  S877: {
    destination: 'Sentinel',
    maxMass: 750000000,
    maxSingleMass: 300000000,
    maxHours: 16,
    regeneration: 0
  },
  T405: {
    destination: 'C4',
    maxMass: 2000000000,
    maxSingleMass: 300000000,
    maxHours: 16,
    regeneration: 0
  },
  T458: {
    destination: 'Thera',
    maxMass: 500000000,
    maxSingleMass: 20000000,
    maxHours: 16,
    regeneration: 0
  },
  U210: {
    destination: 'LS',
    maxMass: 3000000000,
    maxSingleMass: 300000000,
    maxHours: 24,
    regeneration: 0
  },
  U319: {
    destination: 'C6',
    maxMass: 3000000000,
    maxSingleMass: 1800000000,
    maxHours: 48,
    regeneration: 500000000
  },
  U574: {
    destination: 'C6',
    maxMass: 3000000000,
    maxSingleMass: 300000000,
    maxHours: 24,
    regeneration: 0
  },
  V283: {
    destination: 'NS',
    maxMass: 3000000000,
    maxSingleMass: 1000000000,
    maxHours: 24,
    regeneration: 0
  },
  V301: {
    destination: 'C1',
    maxMass: 500000000,
    maxSingleMass: 20000000,
    maxHours: 16,
    regeneration: 0
  },
  V753: {
    destination: 'C6',
    maxMass: 3000000000,
    maxSingleMass: 1350000000,
    maxHours: 24,
    regeneration: 0
  },
  V898: {
    destination: 'LS',
    maxMass: 2000000000,
    maxSingleMass: 300000000,
    maxHours: 16,
    regeneration: 0
  },
  V911: {
    destination: 'C5',
    maxMass: 3000000000,
    maxSingleMass: 1350000000,
    maxHours: 24,
    regeneration: 0
  },
  V928: {
    destination: 'Vidette',
    maxMass: 750000000,
    maxSingleMass: 300000000,
    maxHours: 16,
    regeneration: 0
  },
  W237: {
    destination: 'C6',
    maxMass: 3000000000,
    maxSingleMass: 1350000000,
    maxHours: 24,
    regeneration: 0
  },
  X702: {
    destination: 'C3',
    maxMass: 1000000000,
    maxSingleMass: 300000000,
    maxHours: 24,
    regeneration: 0
  },
  X877: {
    destination: 'C4',
    maxMass: 2000000000,
    maxSingleMass: 300000000,
    maxHours: 16,
    regeneration: 0
  },
  Y683: {
    destination: 'C4',
    maxMass: 2000000000,
    maxSingleMass: 300000000,
    maxHours: 16,
    regeneration: 0
  },
  Y790: {
    destination: 'C1',
    maxMass: 500000000,
    maxSingleMass: 20000000,
    maxHours: 16,
    regeneration: 0
  },
  Z006: {
    destination: 'C3',
    maxMass: 1000000000,
    maxSingleMass: 5000000,
    maxHours: 16,
    regeneration: 5000000
  },
  Z060: {
    destination: 'NS',
    maxMass: 1000000000,
    maxSingleMass: 20000000,
    maxHours: 24,
    regeneration: 0
  },
  Z142: {
    destination: 'NS',
    maxMass: 3000000000,
    maxSingleMass: 1350000000,
    maxHours: 24,
    regeneration: 0
  },
  Z457: {
    destination: 'C4',
    maxMass: 2000000000,
    maxSingleMass: 300000000,
    maxHours: 16,
    regeneration: 0
  },
  Z647: {
    destination: 'C1',
    maxMass: 500000000,
    maxSingleMass: 20000000,
    maxHours: 16,
    regeneration: 0
  },
  Z971: {
    destination: 'C1',
    maxMass: 100000000,
    maxSingleMass: 20000000,
    maxHours: 16,
    regeneration: 0
  }
}

export default whTypes;