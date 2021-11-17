import { h } from 'preact';
import { styled } from 'goober';
import { useEffect, useState } from 'preact/hooks';

import { Complete } from '../Home/types';
import badges from '../badges';
import Card from './Card';
import Progress from './Progress';

const Wrapper = styled('div')`
  background: #f3f3f3;
  padding: 24px;
  width: 100%;
`;

const CardsGrid = styled('div')`
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  grid-gap: 12px;
  background: #f3f3f3;
  width: 100%;
  max-width: 960px;
  margin: 0 auto;

  @media screen and (max-width: 768px) {
    grid-template-columns: minmax(0, 1fr);
  }
`;

const Status = styled('div')`
  width: 100%;
  max-width: 960px;
  margin: 0 auto 24px;
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  grid-column-gap: 12px;
  grid-row-gap: 20px;

  @media screen and (max-width: 515px) {
    grid-template-columns: minmax(0, 1fr);
  }
`;

const Achievements = () => {
  const [completions, setCompletions] = useState<Complete[]>([]);

  useEffect(() => {
    fetch('/.netlify/functions/completions')
      .then((d) => d.json())
      .then((d) => setCompletions(d));
  }, []);

  const progressBadges = badges.filter(({ hidden, psalms }) => !hidden && !psalms);
  const psalmsBadges = badges.filter(({ psalms }) => psalms);
  const hiddenBadges = badges.filter(({ hidden }) => hidden);

  // Calculate last `read` of a completion for a given badge
  // TODO: calculate badge earnings

  return (
    <Wrapper>
      <Status>
        <Progress total={progressBadges.length} value={0} label="Progress Badges Earned" />
        <Progress total={psalmsBadges.length} value={0} label="Psalms Badges Earned" />
        <Progress total={hiddenBadges.length} value={0} label="Hidden Badges Earned" />
        <Progress total={150} value={0} label="Psalms Read" />
      </Status>
      <CardsGrid>
        {progressBadges.map((badge) => (
          <Card {...badge} completed={false} />
        ))}
      </CardsGrid>
    </Wrapper>
  );
};

export default Achievements;
