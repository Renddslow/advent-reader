import { h } from 'preact';
import { styled } from 'goober';
import { useEffect, useState } from 'preact/hooks';
import calculateBadge from 'gamif';

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

const Title = styled('div')`
  width: 100%;
  max-width: 960px;
  margin: 24px auto;
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

  const calculator = calculateBadge(completions);

  // TODO: Add achivement date -> Calculate last `read` of a completion for a given badge
  const earnedProgressBadges = progressBadges.filter((badge) => calculator(badge.condition));
  const earnedPsalmBadges = psalmsBadges.filter((badge) => calculator(badge.condition));
  const earnedHiddenBadges = hiddenBadges.filter((badge) => calculator(badge.condition));

  return (
    <Wrapper>
      <Status>
        <Progress
          total={progressBadges.length}
          value={earnedProgressBadges.length}
          label="Progress Badges Earned"
        />
        <Progress
          total={psalmsBadges.length}
          value={earnedPsalmBadges.length}
          label="Psalms Badges Earned"
        />
        {earnedHiddenBadges.length ? (
          <Progress
            total={hiddenBadges.length}
            value={earnedHiddenBadges.length}
            label="Hidden Badges Earned"
          />
        ) : (
          <div />
        )}
        <Progress
          total={150}
          value={completions.filter((c) => c.type.includes('psalms')).length}
          label="Psalms Read"
        />
      </Status>
      <Title>
        <h2>Progress Badges</h2>
      </Title>
      <CardsGrid>
        {progressBadges.map((badge) => (
          <Card
            {...badge}
            completed={!!earnedProgressBadges.find((b) => b.title === badge.title)}
          />
        ))}
      </CardsGrid>
      {!!earnedHiddenBadges.length && (
        <Title>
          <h2>Hidden Badges</h2>
        </Title>
      )}
      <CardsGrid>
        {earnedHiddenBadges.map((badge) => (
          <Card {...badge} completed />
        ))}
      </CardsGrid>
      <Title>
        <h2>Psalm Badges</h2>
      </Title>
      <CardsGrid>
        {psalmsBadges.map((badge) => (
          <Card {...badge} completed={!!earnedPsalmBadges.find((b) => b.title === badge.title)} />
        ))}
      </CardsGrid>
    </Wrapper>
  );
};

export default Achievements;
