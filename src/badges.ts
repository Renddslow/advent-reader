import { ComponentChild } from 'preact';

import { default as Component } from './Badge';

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
  component: ComponentChild,
  condition: Condition,
  hidden: boolean = false,
  psalms: boolean = false,
) => ({
  title,
  description,
  component,
  condition,
  hidden,
  psalms,
});

const badges = [
  Badge('In the Beginning', `You read the whole book of Genesis`, Component({ color: 'blue' }), {
    type: 'in range',
    args: ['1/morning', '2/evening'],
  }),
  Badge(
    'An Outstretched Arm',
    'You read the whole book of Exodus',
    Component({ color: 'auburn' }),
    {
      type: 'in range',
      args: [],
    },
  ),
  Badge(
    'A Priestly Ephod',
    'You read the priestly code in the book of Leviticus',
    Component({ color: 'yellow' }),
    {
      type: 'in range',
      args: [],
    },
  ),
  Badge('A Second Time', 'You read the whole book of Deuteronomy', Component({ color: 'orange' }), {
    type: 'in range',
    args: [],
  }),
  Badge(
    'Son of Nun',
    'You completed all the readings from the book of Joshua',
    Component({ color: 'teal' }),
    {
      type: 'in range',
      args: [],
    },
  ),
  Badge('Cried Out to YHWH', 'You read the whole book of Judges', Component({ color: 'red' }), {
    type: 'in range',
    args: [],
  }),
  Badge(`Where You Go, I'll Go`, 'You read the whole book of Ruth', Component({ color: 'pink' }), {
    type: 'in',
    args: [],
  }),
  Badge(
    'The End of a Dynasty',
    'You read the whole book of 1 Samuel',
    Component({ color: 'orange' }),
    {
      type: 'in range',
      args: [],
    },
  ),
  Badge(
    'The Beginning of a Dynasty',
    'You read the whole book of 2 Samuel',
    Component({ color: 'auburn' }),
    {
      type: 'in range',
      args: [],
    },
  ),
  Badge('The Fall of Kings', 'You read the whole book of 1 Kings', Component({ color: 'purple' }), {
    type: 'in range',
    args: [],
  }),
  Badge(
    'Away from Her Land',
    'You read the whole book of 2 Kings',
    Component({ color: 'darkBlue' }),
    {
      type: 'in range',
      args: [],
    },
  ),
  Badge(
    'My Holy Mountain',
    `You read about God's holy mountain in Isaiah 11`,
    Component({ color: 'teal' }),
    {
      type: 'in',
      args: [],
    },
    true,
  ),
  Badge(
    'The Prophet Isaiah',
    'You completed all the readings from proto-Isaiah',
    Component({ color: 'pink' }),
    {
      type: 'in range',
      args: [],
    },
  ),
  Badge(
    'The Suffering Servant',
    'You completed all the readings from deutero (and trito) Isaiah',
    Component({ color: 'red' }),
    {
      type: 'in range',
      args: [],
    },
  ),
  Badge(
    'The Unfaithful Wife',
    'You read the grim description of unfaithful Israel',
    Component({ color: 'purple' }),
    {
      type: 'in',
      args: [],
    },
    true,
  ),
  Badge(
    'The New Jerusalem',
    'You completed all the readings from the book of Ezekiel',
    Component({ color: 'green' }),
    {
      type: 'in range',
      args: [],
    },
  ),
  Badge(
    'The Years the Locust have Taken',
    'You read all of the books of Joel and Amos',
    Component({ color: 'orange' }),
    {
      type: 'in',
      args: [],
    },
  ),
  Badge(
    'A Universal Hope',
    'You read all of the books of Jonah and Micah',
    Component({ color: 'lime' }),
    {
      type: 'in',
      args: [],
    },
  ),
  Badge(
    'Justice and Mercy',
    'You read all of the books of Habakkuk, Zephaniah, and Haggai',
    Component({ color: 'yellow' }),
    {
      type: 'in',
      args: [],
    },
  ),
  Badge(
    'Latter',
    'You completed all the readings from the Latter Prophets',
    Component({ color: 'teal' }),
    {
      type: 'in range',
      args: [],
    },
  ),
  Badge('The Son of Man', 'You read the whole book of Mark', Component({ color: 'red' }), {
    type: 'in range',
    args: [],
  }),
  Badge('A New Moses', 'You read the whole book of Matthew', Component({ color: 'green' }), {
    type: 'in range',
    args: [],
  }),
  Badge(
    'A Torah Psalm',
    'You read Psalm 119',
    () => {},
    {
      type: 'in',
      args: [],
    },
    false,
    true,
  ),
  Badge('The Word Became Flesh', 'You read the whole book of John', Component({ color: 'blue' }), {
    type: 'in range',
    args: [],
  }),
  Badge(
    'Seated at the Right Hand',
    'You read about the first martyr and his vindication in Christ',
    Component({ color: 'pink' }),
    {
      type: 'in',
      args: [],
    },
    true,
  ),
  Badge('The Family of God', 'You read the whole book of Romans', Component({ color: 'orange' }), {
    type: 'in range',
    args: [],
  }),
  Badge(
    'The Resurrection of the Body',
    'You read one of the most glorious pieces of prose in the epistles: 1 Corinthians 15',
    Component({ color: 'teal' }),
    {
      type: 'in',
      args: [],
    },
    true,
  ),
  Badge(
    'Pauline',
    'You completed all the readings from the Pauline epistles',
    Component({ color: 'yellow' }),
    {
      type: 'in range',
      args: [],
    },
  ),
  Badge('A Great High Priest', 'You read the whole book of Hebrews', Component({ color: 'red' }), {
    type: 'in',
    args: [],
  }),
  Badge(
    'Brothers of Jesus',
    'You read all of the books of James and Jude',
    Component({ color: 'green' }),
    {
      type: 'in',
      args: [],
    },
  ),
  Badge('The End', 'You read the whole book of Revelation', Component({ color: 'darkBlue' }), {
    type: 'in range',
    args: [],
  }),
];

export default badges;
