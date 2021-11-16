import { h } from 'preact';
import { useEffect, useState } from 'preact/hooks';
import { add, isSameDay, isBefore } from 'date-fns';

import Panel from './Panel';

type Plan = {
  day: number;
  date: string;
  morningTitle: string;
  eveningTitle: string;
  morning: string;
  evening: string;
  psalms: string;
};

const startDate = new Date(2021, 10, 28);

const Home = () => {
  const [plan, setPlan] = useState<Plan[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('/data/plan.json')
      .then((d) => d.json())
      .then((d) => {
        setPlan(d);
        setLoading(false);
      });
  }, []);

  return (
    <div>
      {!loading &&
        plan.map((day, idx) => {
          const unlockDay = add(startDate, { days: idx });
          const unlocked = isSameDay(unlockDay, new Date()) || isBefore(unlockDay, new Date());

          return <Panel locked={!unlocked} complete={false} {...day} key={`day-${day.day}`} />;
        })}
    </div>
  );
};

export default Home;
