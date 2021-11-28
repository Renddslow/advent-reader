import { ComponentChild } from 'preact';
import { Condition } from 'gamif/dist/types';

import { default as Component } from './Badge';

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
  Badge(
    'The Journey Begins',
    `You've started your Advent reading journey`,
    Component({ color: 'red' }),
    {
      type: 'in',
      args: ['1/morning'],
    },
  ),
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
      args: ['3/morning', '4/evening'],
    },
  ),
  Badge(
    'A Priestly Ephod',
    'You read the priestly code in the book of Leviticus',
    Component({ color: 'yellow' }),
    {
      type: 'in range',
      args: ['5/morning', '5/evening'],
    },
  ),
  Badge('A Second Time', 'You read the whole book of Deuteronomy', Component({ color: 'orange' }), {
    type: 'in range',
    args: ['6/morning', '7/evening'],
  }),
  Badge(
    'Son of Nun',
    'You completed all the readings from the book of Joshua',
    Component({ color: 'teal' }),
    {
      type: 'in range',
      args: ['8/morning', '8/evening'],
    },
  ),
  Badge('Cried Out to YHWH', 'You read the whole book of Judges', Component({ color: 'red' }), {
    type: 'in range',
    args: ['8/evening', '9/evening'],
  }),
  Badge(`Where You Go, I'll Go`, 'You read the whole book of Ruth', Component({ color: 'pink' }), {
    type: 'in',
    args: ['10/morning'],
  }),
  Badge(
    'The End of a Dynasty',
    'You read the whole book of 1 Samuel',
    Component({ color: 'orange' }),
    {
      type: 'in range',
      args: ['11/morning', '11/evening'],
    },
  ),
  Badge(
    'The Beginning of a Dynasty',
    'You read the whole book of 2 Samuel',
    Component({ color: 'auburn' }),
    {
      type: 'in range',
      args: ['11/evening', '12/evening'],
    },
  ),
  Badge('The Fall of Kings', 'You read the whole book of 1 Kings', Component({ color: 'purple' }), {
    type: 'in range',
    args: ['13/morning', '13/evening'],
  }),
  Badge(
    'Away from Her Land',
    'You read the whole book of 2 Kings',
    Component({ color: 'darkBlue' }),
    {
      type: 'in range',
      args: ['14/morning', '15/morning'],
    },
  ),
  Badge(
    'My Holy Mountain',
    `You read about God's holy mountain in Isaiah 11`,
    Component({ color: 'teal' }),
    {
      type: 'in',
      args: ['15/morning'],
    },
    true,
  ),
  Badge(
    'The Prophet Isaiah',
    'You completed all the readings from proto-Isaiah',
    Component({ color: 'pink' }),
    {
      type: 'in range',
      args: ['15/morning', '15/evening'],
    },
  ),
  Badge(
    'The Suffering Servant',
    'You completed all the readings from deutero (and trito) Isaiah',
    Component({ color: 'red' }),
    {
      type: 'in range',
      args: ['15/evening', '16/evening'],
    },
  ),
  Badge(
    'The Unfaithful Wife',
    'You read the grim description of unfaithful Israel',
    Component({ color: 'purple' }),
    {
      type: 'in',
      args: ['17/morning'],
    },
    true,
  ),
  Badge(
    'The New Jerusalem',
    'You completed all the readings from the book of Ezekiel',
    Component({ color: 'green' }),
    {
      type: 'in range',
      args: ['17/morning', '17/evening'],
    },
  ),
  Badge(
    'The Years the Locust have Taken',
    'You read all of the books of Joel and Amos',
    Component({ color: 'orange' }),
    {
      type: 'in',
      args: ['18/morning'],
    },
  ),
  Badge(
    'A Universal Hope',
    'You read all of the books of Jonah and Micah',
    Component({ color: 'lime' }),
    {
      type: 'in',
      args: ['18/evening'],
    },
  ),
  Badge(
    'Justice and Mercy',
    'You read all of the books of Habakkuk, Zephaniah, and Haggai',
    Component({ color: 'yellow' }),
    {
      type: 'in',
      args: ['19/morning'],
    },
  ),
  Badge(
    'Latter',
    'You completed all the readings from the Latter Prophets',
    Component({ color: 'teal' }),
    {
      type: 'in range',
      args: ['18/morning', '19/evening'],
    },
  ),
  Badge('The Son of Man', 'You read the whole book of Mark', Component({ color: 'red' }), {
    type: 'in range',
    args: ['20/morning', '20/evening'],
  }),
  Badge('A New Moses', 'You read the whole book of Matthew', Component({ color: 'green' }), {
    type: 'in range',
    args: ['20/evening', '22/morning'],
  }),
  Badge(
    'A Torah Psalm',
    'You read Psalm 119',
    () => {},
    {
      type: 'in',
      args: ['22/psalms'],
    },
    false,
    true,
  ),
  Badge('The Word Became Flesh', 'You read the whole book of John', Component({ color: 'blue' }), {
    type: 'in range',
    args: ['22/evening', '23/morning'],
  }),
  Badge(
    'Seated at the Right Hand',
    'You read about the first martyr and his vindication in Christ',
    Component({ color: 'pink' }),
    {
      type: 'in',
      args: ['23/evening'],
    },
    true,
  ),
  Badge('The Family of God', 'You read the whole book of Romans', Component({ color: 'orange' }), {
    type: 'in range',
    args: ['24/morning', '24/evening'],
  }),
  Badge(
    'The Resurrection of the Body',
    'You read one of the most glorious pieces of prose in the epistles: 1 Corinthians 15',
    Component({ color: 'teal' }),
    {
      type: 'in',
      args: ['25/morning'],
    },
    true,
  ),
  Badge(
    'Pauline',
    'You completed all the readings from the Pauline epistles',
    Component({ color: 'yellow' }),
    {
      type: 'in range',
      args: ['24/morning', '25/evening'],
    },
  ),
  Badge('A Great High Priest', 'You read the whole book of Hebrews', Component({ color: 'red' }), {
    type: 'in',
    args: ['26/morning'],
  }),
  Badge(
    'Brothers of Jesus',
    'You read all of the books of James and Jude',
    Component({ color: 'green' }),
    {
      type: 'in',
      args: ['26/evening'],
    },
  ),
  Badge('The End', 'You read the whole book of Revelation', Component({ color: 'darkBlue' }), {
    type: 'in range',
    args: ['27/morning', '27/evening'],
  }),
];

export default badges;
