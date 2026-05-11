export interface SetCard {
  id: string;
  name: string;
  nameTh: string;
  image: string;
  ebayQuery: string;
}

export interface CardSet {
  id: string;
  name: string;
  nameTh: string;
  logo: string;
  cards: SetCard[];
}

export const cardSets: CardSet[] = [
  {
    id: "sv2",
    name: "Paldea Evolved",
    nameTh: "Paldea Evolved",
    logo: "https://images.pokemontcg.io/sv2/logo.png",
    cards: [
      { id: "sv2-199", name: "Charizard ex", nameTh: "ชาริซาร์ด ex", image: "https://images.pokemontcg.io/sv2/199.png", ebayQuery: "Charizard ex Paldea Evolved secret rare" },
      { id: "sv2-198", name: "Gardevoir ex", nameTh: "การ์เดวัวร์ ex", image: "https://images.pokemontcg.io/sv2/198.png", ebayQuery: "Gardevoir ex Paldea Evolved secret rare" },
      { id: "sv2-185", name: "Iono", nameTh: "ไอโอโนะ Full Art", image: "https://images.pokemontcg.io/sv2/185.png", ebayQuery: "Iono Paldea Evolved full art secret" },
      { id: "sv2-193", name: "Arven", nameTh: "อาร์เวน Full Art", image: "https://images.pokemontcg.io/sv2/193.png", ebayQuery: "Arven Paldea Evolved full art" },
      { id: "sv2-196", name: "Penny", nameTh: "เพนนี Full Art", image: "https://images.pokemontcg.io/sv2/196.png", ebayQuery: "Penny Paldea Evolved full art" },
      { id: "sv2-200", name: "Sylveon ex", nameTh: "ซิลวีออน ex", image: "https://images.pokemontcg.io/sv2/200.png", ebayQuery: "Sylveon ex Paldea Evolved secret rare" },
    ],
  },
  {
    id: "sv3",
    name: "Obsidian Flames",
    nameTh: "Obsidian Flames",
    logo: "https://images.pokemontcg.io/sv3/logo.png",
    cards: [
      { id: "sv3-215", name: "Charizard ex", nameTh: "ชาริซาร์ด ex", image: "https://images.pokemontcg.io/sv3/215.png", ebayQuery: "Charizard ex Obsidian Flames secret rare" },
      { id: "sv3-197", name: "Tyranitar ex", nameTh: "ไทแรนิตาร์ ex", image: "https://images.pokemontcg.io/sv3/197.png", ebayQuery: "Tyranitar ex Obsidian Flames" },
      { id: "sv3-221", name: "Pidgeot ex", nameTh: "พิดจีออต ex", image: "https://images.pokemontcg.io/sv3/221.png", ebayQuery: "Pidgeot ex Obsidian Flames secret rare" },
      { id: "sv3-218", name: "Revavroom ex", nameTh: "เรวาวรูม ex", image: "https://images.pokemontcg.io/sv3/218.png", ebayQuery: "Revavroom ex Obsidian Flames secret rare" },
      { id: "sv3-214", name: "Dragonite ex", nameTh: "แดรกโกไนต์ ex", image: "https://images.pokemontcg.io/sv3/214.png", ebayQuery: "Dragonite ex Obsidian Flames secret" },
      { id: "sv3-216", name: "Eiscue ex", nameTh: "ไอสคิว ex", image: "https://images.pokemontcg.io/sv3/216.png", ebayQuery: "Eiscue ex Obsidian Flames secret" },
    ],
  },
  {
    id: "sv3pt5",
    name: "Pokémon 151",
    nameTh: "Pokémon 151 (Kanto)",
    logo: "https://images.pokemontcg.io/sv3pt5/logo.png",
    cards: [
      { id: "sv3pt5-205", name: "Mew ex", nameTh: "มิว ex", image: "https://images.pokemontcg.io/sv3pt5/205.png", ebayQuery: "Mew ex 151 secret rare" },
      { id: "sv3pt5-201", name: "Charizard ex", nameTh: "ชาริซาร์ด ex", image: "https://images.pokemontcg.io/sv3pt5/201.png", ebayQuery: "Charizard ex 151 secret rare" },
      { id: "sv3pt5-207", name: "Blastoise ex", nameTh: "บลาสทอยส์ ex", image: "https://images.pokemontcg.io/sv3pt5/207.png", ebayQuery: "Blastoise ex 151 secret rare" },
      { id: "sv3pt5-204", name: "Venusaur ex", nameTh: "เวนูซอร์ ex", image: "https://images.pokemontcg.io/sv3pt5/204.png", ebayQuery: "Venusaur ex 151 secret rare" },
      { id: "sv3pt5-206", name: "Mewtwo ex", nameTh: "มิวทู ex", image: "https://images.pokemontcg.io/sv3pt5/206.png", ebayQuery: "Mewtwo ex 151 secret rare" },
      { id: "sv3pt5-202", name: "Alakazam ex", nameTh: "อลาคาแซม ex", image: "https://images.pokemontcg.io/sv3pt5/202.png", ebayQuery: "Alakazam ex 151 secret rare" },
    ],
  },
  {
    id: "swsh7",
    name: "Evolving Skies",
    nameTh: "Evolving Skies",
    logo: "https://images.pokemontcg.io/swsh7/logo.png",
    cards: [
      { id: "swsh7-215", name: "Umbreon VMAX", nameTh: "อัมบรีออน VMAX Alt Art", image: "https://images.pokemontcg.io/swsh7/215.png", ebayQuery: "Umbreon VMAX Evolving Skies alt art" },
      { id: "swsh7-218", name: "Rayquaza VMAX", nameTh: "เรย์ควาซา VMAX Alt Art", image: "https://images.pokemontcg.io/swsh7/218.png", ebayQuery: "Rayquaza VMAX Evolving Skies alt art" },
      { id: "swsh7-214", name: "Espeon VMAX", nameTh: "เอสปีออน VMAX Alt Art", image: "https://images.pokemontcg.io/swsh7/214.png", ebayQuery: "Espeon VMAX Evolving Skies alt art" },
      { id: "swsh7-209", name: "Glaceon VMAX", nameTh: "เกลซีออน VMAX Alt Art", image: "https://images.pokemontcg.io/swsh7/209.png", ebayQuery: "Glaceon VMAX Evolving Skies alt art" },
      { id: "swsh7-211", name: "Leafeon VMAX", nameTh: "ลีฟีออน VMAX Alt Art", image: "https://images.pokemontcg.io/swsh7/211.png", ebayQuery: "Leafeon VMAX Evolving Skies alt art" },
      { id: "swsh7-216", name: "Ditto VMAX", nameTh: "ดิ๊ตโต้ VMAX", image: "https://images.pokemontcg.io/swsh7/216.png", ebayQuery: "Ditto VMAX Evolving Skies" },
    ],
  },
  {
    id: "swsh9",
    name: "Brilliant Stars",
    nameTh: "Brilliant Stars",
    logo: "https://images.pokemontcg.io/swsh9/logo.png",
    cards: [
      { id: "swsh9-174", name: "Charizard VSTAR", nameTh: "ชาริซาร์ด VSTAR", image: "https://images.pokemontcg.io/swsh9/174.png", ebayQuery: "Charizard VSTAR Brilliant Stars secret rare" },
      { id: "swsh9-176", name: "Arceus VSTAR", nameTh: "อาร์เซอุส VSTAR", image: "https://images.pokemontcg.io/swsh9/176.png", ebayQuery: "Arceus VSTAR Brilliant Stars rainbow rare" },
      { id: "swsh9-172", name: "Mimikyu VMAX", nameTh: "มิมิคิว VMAX", image: "https://images.pokemontcg.io/swsh9/172.png", ebayQuery: "Mimikyu VMAX Brilliant Stars secret" },
      { id: "swsh9-167", name: "Raichu V", nameTh: "ไรชู V Alt Art", image: "https://images.pokemontcg.io/swsh9/167.png", ebayQuery: "Raichu V Brilliant Stars alt art" },
      { id: "swsh9-169", name: "Glaceon VSTAR", nameTh: "เกลซีออน VSTAR", image: "https://images.pokemontcg.io/swsh9/169.png", ebayQuery: "Glaceon VSTAR Brilliant Stars" },
      { id: "swsh9-180", name: "Magma Basin", nameTh: "Magma Basin", image: "https://images.pokemontcg.io/swsh9/180.png", ebayQuery: "Magma Basin Brilliant Stars secret" },
    ],
  },
  {
    id: "swsh8",
    name: "Fusion Strike",
    nameTh: "Fusion Strike",
    logo: "https://images.pokemontcg.io/swsh8/logo.png",
    cards: [
      { id: "swsh8-269", name: "Mew VMAX", nameTh: "มิว VMAX", image: "https://images.pokemontcg.io/swsh8/269.png", ebayQuery: "Mew VMAX Fusion Strike secret rare" },
      { id: "swsh8-271", name: "Gengar VMAX", nameTh: "เก็งการ์ VMAX Alt Art", image: "https://images.pokemontcg.io/swsh8/271.png", ebayQuery: "Gengar VMAX Fusion Strike alt art" },
      { id: "swsh8-264", name: "Espeon VMAX", nameTh: "เอสปีออน VMAX", image: "https://images.pokemontcg.io/swsh8/264.png", ebayQuery: "Espeon VMAX Fusion Strike secret" },
      { id: "swsh8-265", name: "Boltund V", nameTh: "โบลทันด์ V Alt Art", image: "https://images.pokemontcg.io/swsh8/265.png", ebayQuery: "Boltund V Fusion Strike alt art" },
      { id: "swsh8-267", name: "Flaaffy", nameTh: "ฟลาฟฟี่ Alt Art", image: "https://images.pokemontcg.io/swsh8/267.png", ebayQuery: "Flaaffy Fusion Strike alt art" },
      { id: "swsh8-270", name: "Greedent VMAX", nameTh: "กรีดันต์ VMAX", image: "https://images.pokemontcg.io/swsh8/270.png", ebayQuery: "Greedent VMAX Fusion Strike secret" },
    ],
  },
  {
    id: "swsh11",
    name: "Lost Origin",
    nameTh: "Lost Origin",
    logo: "https://images.pokemontcg.io/swsh11/logo.png",
    cards: [
      { id: "swsh11-182", name: "Giratina V", nameTh: "กิราตินา V Alt Art", image: "https://images.pokemontcg.io/swsh11/182.png", ebayQuery: "Giratina V Lost Origin alt art" },
      { id: "swsh11-186", name: "Lugia V", nameTh: "ลูเจีย V Alt Art", image: "https://images.pokemontcg.io/swsh11/186.png", ebayQuery: "Lugia V Lost Origin alt art" },
      { id: "swsh11-191", name: "Giratina VSTAR", nameTh: "กิราตินา VSTAR", image: "https://images.pokemontcg.io/swsh11/191.png", ebayQuery: "Giratina VSTAR Lost Origin secret" },
      { id: "swsh11-187", name: "Lugia VSTAR", nameTh: "ลูเจีย VSTAR", image: "https://images.pokemontcg.io/swsh11/187.png", ebayQuery: "Lugia VSTAR Lost Origin secret" },
      { id: "swsh11-189", name: "Aerodactyl V", nameTh: "เอโรแดกทิล V Alt Art", image: "https://images.pokemontcg.io/swsh11/189.png", ebayQuery: "Aerodactyl V Lost Origin alt art" },
      { id: "swsh11-193", name: "Comfey", nameTh: "คอมฟี Alt Art", image: "https://images.pokemontcg.io/swsh11/193.png", ebayQuery: "Comfey Lost Origin alt art" },
    ],
  },
  {
    id: "sv4",
    name: "Paradox Rift",
    nameTh: "Paradox Rift",
    logo: "https://images.pokemontcg.io/sv4/logo.png",
    cards: [
      { id: "sv4-245", name: "Roaring Moon ex", nameTh: "โรริ่งมูน ex", image: "https://images.pokemontcg.io/sv4/245.png", ebayQuery: "Roaring Moon ex Paradox Rift secret rare" },
      { id: "sv4-244", name: "Iron Valiant ex", nameTh: "Iron Valiant ex", image: "https://images.pokemontcg.io/sv4/244.png", ebayQuery: "Iron Valiant ex Paradox Rift secret rare" },
      { id: "sv4-241", name: "Garchomp ex", nameTh: "การ์ชอมป์ ex", image: "https://images.pokemontcg.io/sv4/241.png", ebayQuery: "Garchomp ex Paradox Rift secret" },
      { id: "sv4-249", name: "Rika", nameTh: "ริกะ Full Art", image: "https://images.pokemontcg.io/sv4/249.png", ebayQuery: "Rika Paradox Rift full art" },
      { id: "sv4-247", name: "Flutter Mane ex", nameTh: "Flutter Mane ex", image: "https://images.pokemontcg.io/sv4/247.png", ebayQuery: "Flutter Mane ex Paradox Rift secret" },
      { id: "sv4-243", name: "Groudon ex", nameTh: "กราวดอน ex", image: "https://images.pokemontcg.io/sv4/243.png", ebayQuery: "Groudon ex Paradox Rift secret" },
    ],
  },
];
