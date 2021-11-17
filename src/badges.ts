export type Condition = { args: string[] } & (
  | {
      type: 'in';
    }
  | {
      type: 'perfect in range' | 'in range';
      includePsalms?: boolean;
    }
);

const Badge = (
  title: string,
  description: string,
  src: string,
  condition: Condition,
  hidden: boolean = false,
  psalms: boolean = false,
) => ({
  title,
  description,
  image: src,
  condition,
  hidden,
  psalms,
});

const badges = [
  Badge('In the Beginning', `You read the whole book of Genesis`, '/badges/genesis.png', {
    type: 'in range',
    args: ['1/morning', '2/evening'],
  }),
  Badge('An Outstretched Arm', 'You read the whole book of Exodus', '/badges/exodus.png', {
    type: 'in range',
    args: [],
  }),
  Badge(
    'A Priestly Ephod',
    'You read the priestly code in the book of Leviticus',
    '/badges/leviticus.png',
    {
      type: 'in range',
      args: [],
    },
  ),
  Badge('A Second Time', 'You read the whole book of Deuteronomy', '/badges/deuteronomy.png', {
    type: 'in range',
    args: [],
  }),
  Badge(
    'Son of Nun',
    'You completed all the readings from the book of Joshua',
    '/badges/joshua.png',
    {
      type: 'in range',
      args: [],
    },
  ),
  Badge('Cried Out to YHWH', 'You read the whole book of Judges', '/badges/judges.png', {
    type: 'in range',
    args: [],
  }),
  Badge(`Where You Go, I'll Go`, 'You read the whole book of Ruth', '/badges/ruth.png', {
    type: 'in',
    args: [],
  }),
  Badge('The End of a Dynasty', 'You read the whole book of 1 Samuel', '/badges/1samuel.png', {
    type: 'in range',
    args: [],
  }),
  Badge(
    'The Beginning of a Dynasty',
    'You read the whole book of 2 Samuel',
    '/badges/2samuel.png',
    {
      type: 'in range',
      args: [],
    },
  ),
  Badge('The Fall of Kings', 'You read the whole book of 1 Kings', '/badges/1kings.png', {
    type: 'in range',
    args: [],
  }),
  Badge('Away from Her Land', 'You read the whole book of 2 Kings', '/badges/2kings.png', {
    type: 'in range',
    args: [],
  }),
  Badge(
    'My Holy Mountain',
    `You read about God's holy mountain in Isaiah 11`,
    '/badges/holy-mountain.png',
    {
      type: 'in',
      args: [],
    },
    true,
  ),
  Badge(
    'The Prophet Isaiah',
    'You completed all the readings from proto-Isaiah',
    '/badges/proto-isaiah.png',
    {
      type: 'in range',
      args: [],
    },
  ),
  Badge(
    'The Suffering Servant',
    'You completed all the readings from deutero (and trito) Isaiah',
    '/badges/deutero-isaiah.png',
    {
      type: 'in range',
      args: [],
    },
  ),
  Badge(
    'The Unfaithful Wife',
    'You read the grim description of unfaithful Israel',
    '/badges/unfaithful-wife.png',
    {
      type: 'in',
      args: [],
    },
    true,
  ),
  Badge(
    'The New Jerusalem',
    'You completed all the readings from the book of Ezekiel',
    '/badges/ezekiel.png',
    {
      type: 'in range',
      args: [],
    },
  ),
  Badge(
    'The Years the Locust have Taken',
    'You read all of the books of Joel and Amos',
    '/badges/joel-amos.png',
    {
      type: 'in',
      args: [],
    },
  ),
  Badge(
    'A Universal Hope',
    'You read all of the books of Jonah and Micah',
    '/badges/jonah-micah.png',
    {
      type: 'in',
      args: [],
    },
  ),
  Badge(
    'Justice and Mercy',
    'You read all of the books of Habbakuk, Zephaniah, and Haggai',
    '/badges/hab-zeph-hag.png',
    {
      type: 'in',
      args: [],
    },
  ),
  Badge('Latter', 'You completed all the readings from the Latter Prophets', '/badges/latter.png', {
    type: 'in range',
    args: [],
  }),
  Badge('The Son of Man', 'You read the whole book of Mark', '/badges/mark.png', {
    type: 'in range',
    args: [],
  }),
  Badge('A New Moses', 'You read the whole book of Matthew', '/badges/matthew.png', {
    type: 'in range',
    args: [],
  }),
  Badge(
    'A Torah Psalm',
    'You read Psalm 119',
    '/badges/119.png',
    {
      type: 'in',
      args: [],
    },
    false,
    true,
  ),
  Badge('The Word Became Flesh', 'You read the whole book of John', '/badges/john.png', {
    type: 'in range',
    args: [],
  }),
  Badge(
    'Seated at the Right Hand',
    'You read about the first martyr and his vindication in Christ',
    '/badges/acts.png',
    {
      type: 'in',
      args: [],
    },
    true,
  ),
  Badge('The Family of God', 'You read the whole book of Romans', '/badges/romans.png', {
    type: 'in range',
    args: [],
  }),
  Badge(
    'The Resurrection of the Body',
    'You read one of the most glorious pieces of prose in the epistles: 1 Corinthians 15',
    '/badges/resurrection.png',
    {
      type: 'in',
      args: [],
    },
    true,
  ),
  Badge(
    'Pauline',
    'You completed all the readings from the Pauline epistles',
    '/badges/pauline.png',
    {
      type: 'in range',
      args: [],
    },
  ),
  Badge('A Great High Priest', 'You read the whole book of Hebrews', '/badges/hebrews.png', {
    type: 'in',
    args: [],
  }),
  Badge(
    'Brothers of Jesus',
    'You read all of the books of James and Jude',
    '/badges/james-jude.png',
    {
      type: 'in',
      args: [],
    },
  ),
  Badge('The End', 'You read the whole book of Revelation', '/badges/revelation.png', {
    type: 'in range',
    args: [],
  }),
];

export default badges;
