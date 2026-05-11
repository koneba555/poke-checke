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

  // ── SV Era ──────────────────────────────────────────────
  {
    id: "sv5",
    name: "Temporal Forces",
    nameTh: "Temporal Forces",
    logo: "https://images.pokemontcg.io/sv5/logo.png",
    cards: [
      { id: "sv5-182", name: "Walking Wake ex", nameTh: "Walking Wake ex", image: "https://images.pokemontcg.io/sv5/182.png", ebayQuery: "Walking Wake ex Temporal Forces secret" },
      { id: "sv5-183", name: "Iron Leaves ex", nameTh: "Iron Leaves ex", image: "https://images.pokemontcg.io/sv5/183.png", ebayQuery: "Iron Leaves ex Temporal Forces secret" },
      { id: "sv5-180", name: "Raging Bolt ex", nameTh: "Raging Bolt ex", image: "https://images.pokemontcg.io/sv5/180.png", ebayQuery: "Raging Bolt ex Temporal Forces secret" },
      { id: "sv5-178", name: "Terapagos ex", nameTh: "เทราปาโกส ex", image: "https://images.pokemontcg.io/sv5/178.png", ebayQuery: "Terapagos ex Temporal Forces" },
      { id: "sv5-177", name: "Ursaluna ex", nameTh: "เออร์ซาลูนา ex", image: "https://images.pokemontcg.io/sv5/177.png", ebayQuery: "Ursaluna ex Temporal Forces secret" },
    ],
  },
  {
    id: "sv6",
    name: "Twilight Masquerade",
    nameTh: "Twilight Masquerade",
    logo: "https://images.pokemontcg.io/sv6/logo.png",
    cards: [
      { id: "sv6-191", name: "Ogerpon ex", nameTh: "โอเกอร์พอน ex", image: "https://images.pokemontcg.io/sv6/191.png", ebayQuery: "Ogerpon ex Twilight Masquerade secret" },
      { id: "sv6-193", name: "Pecharunt ex", nameTh: "เพชารันต์ ex", image: "https://images.pokemontcg.io/sv6/193.png", ebayQuery: "Pecharunt ex Twilight Masquerade secret" },
      { id: "sv6-197", name: "Kieran", nameTh: "คีรัน Full Art", image: "https://images.pokemontcg.io/sv6/197.png", ebayQuery: "Kieran Twilight Masquerade full art" },
      { id: "sv6-189", name: "Carbink ex", nameTh: "คาร์บิงค์ ex", image: "https://images.pokemontcg.io/sv6/189.png", ebayQuery: "Carbink ex Twilight Masquerade secret" },
      { id: "sv6-194", name: "Munkidori ex", nameTh: "มังกิโดริ ex", image: "https://images.pokemontcg.io/sv6/194.png", ebayQuery: "Munkidori ex Twilight Masquerade secret" },
    ],
  },
  {
    id: "sv4pt5",
    name: "Paldean Fates",
    nameTh: "Paldean Fates (Shiny)",
    logo: "https://images.pokemontcg.io/sv4pt5/logo.png",
    cards: [
      { id: "sv4pt5-91", name: "Charizard ex", nameTh: "ชาริซาร์ด ex Shiny", image: "https://images.pokemontcg.io/sv4pt5/91.png", ebayQuery: "Charizard ex Paldean Fates shiny" },
      { id: "sv4pt5-86", name: "Gardevoir ex", nameTh: "การ์เดวัวร์ ex Shiny", image: "https://images.pokemontcg.io/sv4pt5/86.png", ebayQuery: "Gardevoir ex Paldean Fates shiny" },
      { id: "sv4pt5-67", name: "Meowscarada ex", nameTh: "มีโอว์สการาดา ex Shiny", image: "https://images.pokemontcg.io/sv4pt5/67.png", ebayQuery: "Meowscarada ex Paldean Fates shiny" },
      { id: "sv4pt5-30", name: "Skeledirge ex", nameTh: "สเกลไดร์จ ex Shiny", image: "https://images.pokemontcg.io/sv4pt5/30.png", ebayQuery: "Skeledirge ex Paldean Fates shiny" },
      { id: "sv4pt5-54", name: "Quaquaval ex", nameTh: "ควาควาวัล ex Shiny", image: "https://images.pokemontcg.io/sv4pt5/54.png", ebayQuery: "Quaquaval ex Paldean Fates shiny" },
    ],
  },

  // ── SWSH Era ─────────────────────────────────────────────
  {
    id: "swsh45",
    name: "Shining Fates",
    nameTh: "Shining Fates (Shiny)",
    logo: "https://images.pokemontcg.io/swsh45/logo.png",
    cards: [
      { id: "swsh45-sv107", name: "Charizard VMAX", nameTh: "ชาริซาร์ด VMAX Shiny", image: "https://images.pokemontcg.io/swsh45/SV107.png", ebayQuery: "Charizard VMAX Shining Fates shiny" },
      { id: "swsh45-sv122", name: "Pikachu VMAX", nameTh: "พิคาชู VMAX Shiny", image: "https://images.pokemontcg.io/swsh45/SV122.png", ebayQuery: "Pikachu VMAX Shining Fates shiny" },
      { id: "swsh45-sv35", name: "Eevee VMAX", nameTh: "อีวุย VMAX Shiny", image: "https://images.pokemontcg.io/swsh45/SV35.png", ebayQuery: "Eevee VMAX Shining Fates shiny" },
      { id: "swsh45-sv72", name: "Dragapult VMAX", nameTh: "แดรกาพัลต์ VMAX Shiny", image: "https://images.pokemontcg.io/swsh45/SV72.png", ebayQuery: "Dragapult VMAX Shining Fates shiny" },
      { id: "swsh45-sv41", name: "Toxtricity VMAX", nameTh: "ท็อกซ์ทริซิตี้ VMAX Shiny", image: "https://images.pokemontcg.io/swsh45/SV41.png", ebayQuery: "Toxtricity VMAX Shining Fates shiny" },
    ],
  },
  {
    id: "swsh35",
    name: "Champion's Path",
    nameTh: "Champion's Path",
    logo: "https://images.pokemontcg.io/swsh35/logo.png",
    cards: [
      { id: "swsh35-79", name: "Charizard V", nameTh: "ชาริซาร์ด V Secret", image: "https://images.pokemontcg.io/swsh35/79.png", ebayQuery: "Charizard V Champions Path secret rainbow" },
      { id: "swsh35-74", name: "Charizard VMAX", nameTh: "ชาริซาร์ด VMAX", image: "https://images.pokemontcg.io/swsh35/74.png", ebayQuery: "Charizard VMAX Champions Path" },
      { id: "swsh35-68", name: "Marnie", nameTh: "มาร์นี Full Art", image: "https://images.pokemontcg.io/swsh35/68.png", ebayQuery: "Marnie Champions Path full art secret" },
      { id: "swsh35-70", name: "Nessa", nameTh: "เนสซา Full Art", image: "https://images.pokemontcg.io/swsh35/70.png", ebayQuery: "Nessa Champions Path full art" },
      { id: "swsh35-71", name: "Bea", nameTh: "เบีย Full Art", image: "https://images.pokemontcg.io/swsh35/71.png", ebayQuery: "Bea Champions Path full art" },
    ],
  },
  {
    id: "swsh6",
    name: "Chilling Reign",
    nameTh: "Chilling Reign",
    logo: "https://images.pokemontcg.io/swsh6/logo.png",
    cards: [
      { id: "swsh6-198", name: "Shadow Rider Calyrex VMAX", nameTh: "Shadow Rider Calyrex VMAX", image: "https://images.pokemontcg.io/swsh6/198.png", ebayQuery: "Shadow Rider Calyrex VMAX Chilling Reign alt art" },
      { id: "swsh6-197", name: "Ice Rider Calyrex VMAX", nameTh: "Ice Rider Calyrex VMAX", image: "https://images.pokemontcg.io/swsh6/197.png", ebayQuery: "Ice Rider Calyrex VMAX Chilling Reign alt art" },
      { id: "swsh6-191", name: "Blaziken VMAX", nameTh: "เบลซิเกน VMAX Alt Art", image: "https://images.pokemontcg.io/swsh6/191.png", ebayQuery: "Blaziken VMAX Chilling Reign alt art" },
      { id: "swsh6-185", name: "Celebi V", nameTh: "เซเลบี V Alt Art", image: "https://images.pokemontcg.io/swsh6/185.png", ebayQuery: "Celebi V Chilling Reign alt art" },
      { id: "swsh6-182", name: "Tornadus V", nameTh: "ทอร์เนดัส V Alt Art", image: "https://images.pokemontcg.io/swsh6/182.png", ebayQuery: "Tornadus V Chilling Reign alt art" },
    ],
  },
  {
    id: "swsh12",
    name: "Silver Tempest",
    nameTh: "Silver Tempest",
    logo: "https://images.pokemontcg.io/swsh12/logo.png",
    cards: [
      { id: "swsh12-195", name: "Lugia VSTAR", nameTh: "ลูเจีย VSTAR Alt Art", image: "https://images.pokemontcg.io/swsh12/195.png", ebayQuery: "Lugia VSTAR Silver Tempest alt art" },
      { id: "swsh12-193", name: "Alolan Vulpix V", nameTh: "อโลลัน วุลพิกซ์ V Alt Art", image: "https://images.pokemontcg.io/swsh12/193.png", ebayQuery: "Alolan Vulpix V Silver Tempest alt art" },
      { id: "swsh12-196", name: "Lugia V", nameTh: "ลูเจีย V Alt Art", image: "https://images.pokemontcg.io/swsh12/196.png", ebayQuery: "Lugia V Silver Tempest alt art" },
      { id: "swsh12-187", name: "Serperior V", nameTh: "เซอร์เพเรียร์ V Alt Art", image: "https://images.pokemontcg.io/swsh12/187.png", ebayQuery: "Serperior V Silver Tempest alt art" },
      { id: "swsh12-189", name: "Unown V", nameTh: "อันโนน V Alt Art", image: "https://images.pokemontcg.io/swsh12/189.png", ebayQuery: "Unown V Silver Tempest alt art" },
    ],
  },

  // ── XY Era (Mega Evolution) ───────────────────────────────
  {
    id: "xy12",
    name: "XY Evolutions",
    nameTh: "XY Evolutions (Mega)",
    logo: "https://images.pokemontcg.io/xy12/logo.png",
    cards: [
      { id: "xy12-13", name: "M Charizard EX", nameTh: "เมก้าชาริซาร์ด EX", image: "https://images.pokemontcg.io/xy12/13.png", ebayQuery: "M Charizard EX XY Evolutions holo" },
      { id: "xy12-12", name: "Charizard EX", nameTh: "ชาริซาร์ด EX", image: "https://images.pokemontcg.io/xy12/12.png", ebayQuery: "Charizard EX XY Evolutions holo" },
      { id: "xy12-121", name: "M Gengar EX", nameTh: "เมก้าเก็งการ์ EX Gold", image: "https://images.pokemontcg.io/xy12/121.png", ebayQuery: "M Gengar EX XY Evolutions secret gold" },
      { id: "xy12-35", name: "Pikachu", nameTh: "พิคาชู (Reprint)", image: "https://images.pokemontcg.io/xy12/35.png", ebayQuery: "Pikachu XY Evolutions holo" },
      { id: "xy12-2", name: "M Venusaur EX", nameTh: "เมก้าเวนูซอร์ EX", image: "https://images.pokemontcg.io/xy12/2.png", ebayQuery: "M Venusaur EX XY Evolutions" },
      { id: "xy12-51", name: "M Blastoise EX", nameTh: "เมก้าบลาสทอยส์ EX", image: "https://images.pokemontcg.io/xy12/51.png", ebayQuery: "M Blastoise EX XY Evolutions" },
    ],
  },
  {
    id: "xy6",
    name: "Roaring Skies",
    nameTh: "XY Roaring Skies (Mega)",
    logo: "https://images.pokemontcg.io/xy6/logo.png",
    cards: [
      { id: "xy6-76", name: "M Rayquaza EX", nameTh: "เมก้าเรย์ควาซา EX Full Art", image: "https://images.pokemontcg.io/xy6/76.png", ebayQuery: "M Rayquaza EX Roaring Skies full art" },
      { id: "xy6-61", name: "M Rayquaza EX", nameTh: "เมก้าเรย์ควาซา EX (Dragon)", image: "https://images.pokemontcg.io/xy6/61.png", ebayQuery: "M Rayquaza EX Roaring Skies dragon" },
      { id: "xy6-77", name: "Shaymin EX", nameTh: "ชายมิน EX Full Art", image: "https://images.pokemontcg.io/xy6/77.png", ebayQuery: "Shaymin EX Roaring Skies full art" },
      { id: "xy6-72", name: "Dragonite EX", nameTh: "แดรกโกไนต์ EX Full Art", image: "https://images.pokemontcg.io/xy6/72.png", ebayQuery: "Dragonite EX Roaring Skies full art" },
      { id: "xy6-60", name: "M Rayquaza EX", nameTh: "เมก้าเรย์ควาซา EX (Green)", image: "https://images.pokemontcg.io/xy6/60.png", ebayQuery: "M Rayquaza EX Roaring Skies green" },
    ],
  },
  {
    id: "xy2",
    name: "Flashfire",
    nameTh: "XY Flashfire (Mega Charizard)",
    logo: "https://images.pokemontcg.io/xy2/logo.png",
    cards: [
      { id: "xy2-107", name: "M Charizard EX", nameTh: "เมก้าชาริซาร์ด EX Gold", image: "https://images.pokemontcg.io/xy2/107.png", ebayQuery: "M Charizard EX Flashfire secret gold" },
      { id: "xy2-69", name: "M Charizard EX", nameTh: "เมก้าชาริซาร์ด EX Full Art", image: "https://images.pokemontcg.io/xy2/69.png", ebayQuery: "M Charizard EX Flashfire full art" },
      { id: "xy2-13", name: "M Charizard EX", nameTh: "เมก้าชาริซาร์ด EX (Dragon)", image: "https://images.pokemontcg.io/xy2/13.png", ebayQuery: "M Charizard EX Flashfire dragon" },
      { id: "xy2-12", name: "Charizard EX", nameTh: "ชาริซาร์ด EX", image: "https://images.pokemontcg.io/xy2/12.png", ebayQuery: "Charizard EX Flashfire holo" },
      { id: "xy2-106", name: "Charizard EX", nameTh: "ชาริซาร์ด EX Full Art", image: "https://images.pokemontcg.io/xy2/106.png", ebayQuery: "Charizard EX Flashfire full art" },
    ],
  },
  {
    id: "xy7",
    name: "Ancient Origins",
    nameTh: "XY Ancient Origins",
    logo: "https://images.pokemontcg.io/xy7/logo.png",
    cards: [
      { id: "xy7-98", name: "M Rayquaza EX", nameTh: "เมก้าเรย์ควาซา EX Shiny Gold", image: "https://images.pokemontcg.io/xy7/98.png", ebayQuery: "M Rayquaza EX Ancient Origins shiny gold" },
      { id: "xy7-76", name: "M Rayquaza EX", nameTh: "เมก้าเรย์ควาซา EX Full Art", image: "https://images.pokemontcg.io/xy7/76.png", ebayQuery: "M Rayquaza EX Ancient Origins full art" },
      { id: "xy7-85", name: "Lugia EX", nameTh: "ลูเจีย EX Full Art", image: "https://images.pokemontcg.io/xy7/85.png", ebayQuery: "Lugia EX Ancient Origins full art" },
      { id: "xy7-83", name: "Ho-Oh EX", nameTh: "โฮโอ EX Full Art", image: "https://images.pokemontcg.io/xy7/83.png", ebayQuery: "Ho-Oh EX Ancient Origins full art" },
      { id: "xy7-82", name: "Hoopa EX", nameTh: "ฮูปา EX Full Art", image: "https://images.pokemontcg.io/xy7/82.png", ebayQuery: "Hoopa EX Ancient Origins full art" },
    ],
  },
  {
    id: "xy5",
    name: "Primal Clash",
    nameTh: "XY Primal Clash (M Groudon/Kyogre)",
    logo: "https://images.pokemontcg.io/xy5/logo.png",
    cards: [
      { id: "xy5-149", name: "M Groudon EX", nameTh: "เมก้ากราวดอน EX Full Art", image: "https://images.pokemontcg.io/xy5/149.png", ebayQuery: "M Groudon EX Primal Clash full art" },
      { id: "xy5-148", name: "M Kyogre EX", nameTh: "เมก้าไคโอก้า EX Full Art", image: "https://images.pokemontcg.io/xy5/148.png", ebayQuery: "M Kyogre EX Primal Clash full art" },
      { id: "xy5-97", name: "M Groudon EX", nameTh: "เมก้ากราวดอน EX", image: "https://images.pokemontcg.io/xy5/97.png", ebayQuery: "M Groudon EX Primal Clash holo" },
      { id: "xy5-55", name: "M Kyogre EX", nameTh: "เมก้าไคโอก้า EX", image: "https://images.pokemontcg.io/xy5/55.png", ebayQuery: "M Kyogre EX Primal Clash holo" },
      { id: "xy5-151", name: "Wobbuffet", nameTh: "วอบบัฟเฟต Full Art", image: "https://images.pokemontcg.io/xy5/151.png", ebayQuery: "Wobbuffet Primal Clash full art" },
    ],
  },
  {
    id: "xy4",
    name: "Phantom Forces",
    nameTh: "XY Phantom Forces (M Gengar)",
    logo: "https://images.pokemontcg.io/xy4/logo.png",
    cards: [
      { id: "xy4-122", name: "M Gengar EX", nameTh: "เมก้าเก็งการ์ EX Full Art", image: "https://images.pokemontcg.io/xy4/122.png", ebayQuery: "M Gengar EX Phantom Forces full art" },
      { id: "xy4-35", name: "M Gengar EX", nameTh: "เมก้าเก็งการ์ EX", image: "https://images.pokemontcg.io/xy4/35.png", ebayQuery: "M Gengar EX Phantom Forces holo" },
      { id: "xy4-119", name: "M Manectric EX", nameTh: "เมก้าแมนเนคทริก EX Full Art", image: "https://images.pokemontcg.io/xy4/119.png", ebayQuery: "M Manectric EX Phantom Forces full art" },
      { id: "xy4-116", name: "Dialga EX", nameTh: "ไดแอลก้า EX Full Art", image: "https://images.pokemontcg.io/xy4/116.png", ebayQuery: "Dialga EX Phantom Forces full art" },
      { id: "xy4-117", name: "Giratina EX", nameTh: "กิราตินา EX Full Art", image: "https://images.pokemontcg.io/xy4/117.png", ebayQuery: "Giratina EX Phantom Forces full art" },
    ],
  },
  {
    id: "xy8",
    name: "BREAKthrough",
    nameTh: "XY BREAKthrough (M Mewtwo)",
    logo: "https://images.pokemontcg.io/xy8/logo.png",
    cards: [
      { id: "xy8-163", name: "M Mewtwo EX", nameTh: "เมก้ามิวทู EX Full Art (Y)", image: "https://images.pokemontcg.io/xy8/163.png", ebayQuery: "M Mewtwo EX BREAKthrough full art psychic" },
      { id: "xy8-162", name: "M Mewtwo EX", nameTh: "เมก้ามิวทู EX Full Art (X)", image: "https://images.pokemontcg.io/xy8/162.png", ebayQuery: "M Mewtwo EX BREAKthrough full art fighting" },
      { id: "xy8-64", name: "M Mewtwo EX", nameTh: "เมก้ามิวทู EX (Y)", image: "https://images.pokemontcg.io/xy8/64.png", ebayQuery: "M Mewtwo EX BREAKthrough psychic" },
      { id: "xy8-158", name: "M Houndoom EX", nameTh: "เมก้าฮาวน์ดูม EX Full Art", image: "https://images.pokemontcg.io/xy8/158.png", ebayQuery: "M Houndoom EX BREAKthrough full art" },
      { id: "xy8-156", name: "Raichu BREAK", nameTh: "ไรชู BREAK", image: "https://images.pokemontcg.io/xy8/156.png", ebayQuery: "Raichu BREAK BREAKthrough" },
    ],
  },
  {
    id: "xy11",
    name: "Steam Siege",
    nameTh: "XY Steam Siege (M Gardevoir)",
    logo: "https://images.pokemontcg.io/xy11/logo.png",
    cards: [
      { id: "xy11-112", name: "M Gardevoir EX", nameTh: "เมก้าการ์เดวัวร์ EX Full Art", image: "https://images.pokemontcg.io/xy11/112.png", ebayQuery: "M Gardevoir EX Steam Siege full art" },
      { id: "xy11-79", name: "M Gardevoir EX", nameTh: "เมก้าการ์เดวัวร์ EX", image: "https://images.pokemontcg.io/xy11/79.png", ebayQuery: "M Gardevoir EX Steam Siege holo" },
      { id: "xy11-116", name: "M Steelix EX", nameTh: "เมก้าสตีลิกซ์ EX Full Art", image: "https://images.pokemontcg.io/xy11/116.png", ebayQuery: "M Steelix EX Steam Siege full art" },
      { id: "xy11-114", name: "Volcanion EX", nameTh: "โวลคาเนียน EX Full Art", image: "https://images.pokemontcg.io/xy11/114.png", ebayQuery: "Volcanion EX Steam Siege full art" },
      { id: "xy11-108", name: "Xerneas BREAK", nameTh: "เซอร์เนียส BREAK", image: "https://images.pokemontcg.io/xy11/108.png", ebayQuery: "Xerneas BREAK Steam Siege" },
    ],
  },
  {
    id: "xy10",
    name: "Fates Collide",
    nameTh: "XY Fates Collide (M Alakazam)",
    logo: "https://images.pokemontcg.io/xy10/logo.png",
    cards: [
      { id: "xy10-127", name: "M Alakazam EX", nameTh: "เมก้าอลาคาแซม EX Full Art", image: "https://images.pokemontcg.io/xy10/127.png", ebayQuery: "M Alakazam EX Fates Collide full art" },
      { id: "xy10-125", name: "M Audino EX", nameTh: "เมก้าออดิโน EX Full Art", image: "https://images.pokemontcg.io/xy10/125.png", ebayQuery: "M Audino EX Fates Collide full art" },
      { id: "xy10-124", name: "Zygarde EX", nameTh: "ไซการ์ดี EX Full Art", image: "https://images.pokemontcg.io/xy10/124.png", ebayQuery: "Zygarde EX Fates Collide full art" },
      { id: "xy10-122", name: "Lugia EX", nameTh: "ลูเจีย EX Full Art", image: "https://images.pokemontcg.io/xy10/122.png", ebayQuery: "Lugia EX Fates Collide full art" },
      { id: "xy10-119", name: "Mew EX", nameTh: "มิว EX Full Art", image: "https://images.pokemontcg.io/xy10/119.png", ebayQuery: "Mew EX Fates Collide full art" },
    ],
  },
  {
    id: "xy9",
    name: "BREAKpoint",
    nameTh: "XY BREAKpoint (M Gyarados)",
    logo: "https://images.pokemontcg.io/xy9/logo.png",
    cards: [
      { id: "xy9-122", name: "M Gyarados EX", nameTh: "เมก้าไกราดอส EX Full Art", image: "https://images.pokemontcg.io/xy9/122.png", ebayQuery: "M Gyarados EX BREAKpoint full art" },
      { id: "xy9-114", name: "M Scizor EX", nameTh: "เมก้าไซเซอร์ EX Full Art", image: "https://images.pokemontcg.io/xy9/114.png", ebayQuery: "M Scizor EX BREAKpoint full art" },
      { id: "xy9-123", name: "Trevenant BREAK", nameTh: "เทรเวแนนต์ BREAK", image: "https://images.pokemontcg.io/xy9/123.png", ebayQuery: "Trevenant BREAK BREAKpoint" },
      { id: "xy9-116", name: "Darkrai EX", nameTh: "ดาร์คไร EX Full Art", image: "https://images.pokemontcg.io/xy9/116.png", ebayQuery: "Darkrai EX BREAKpoint full art" },
      { id: "xy9-112", name: "Espeon EX", nameTh: "เอสปีออน EX Full Art", image: "https://images.pokemontcg.io/xy9/112.png", ebayQuery: "Espeon EX BREAKpoint full art" },
    ],
  },
];
