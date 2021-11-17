import { h } from 'preact';
import { useEffect, useState } from 'preact/hooks';
import { add, isSameDay, isBefore } from 'date-fns';

import Panel from './Panel';
import { Complete } from './types';
import { styled } from 'goober';

type Plan = {
  day: number;
  date: string;
  morningTitle: string;
  eveningTitle: string;
  morning: string;
  evening: string;
  psalms: string;
};

const Wrapper = styled('div')`
  width: 100%;
  max-width: 800px;
  margin: 0 auto;
`;

const startDate = new Date(2021, 10, 28);

const Home = () => {
  const [plan, setPlan] = useState<Plan[]>([]);
  const [loading, setLoading] = useState(true);
  const [completions, setCompletions] = useState<Complete[]>([]);

  useEffect(() => {
    fetch('/data/plan.json')
      .then((d) => d.json())
      .then((d) => {
        setPlan(d);
        setLoading(false);
      });
  }, []);

  useEffect(() => {
    fetch('/.netlify/functions/completions')
      .then((d) => d.json())
      .then((d) => {
        setCompletions(d);
      });
  }, []);

  return (
    <Wrapper>
      {!loading &&
        plan.map((day, idx) => {
          const unlockDay = add(startDate, { days: idx });
          const unlocked =
            day.day === 1 || isSameDay(unlockDay, new Date()) || isBefore(unlockDay, new Date());
          const dayCompletions = completions.filter((c) => c.day === day.day);

          return (
            <Panel
              locked={!unlocked}
              completions={dayCompletions}
              {...day}
              key={`day-${day.day}`}
            />
          );
        })}
    </Wrapper>
  );
};

export default Home;
