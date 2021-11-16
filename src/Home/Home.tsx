import { h } from 'preact';
import { useEffect, useState } from 'preact/hooks';
import Panel from './Panel';

type Plan = {
  day: number;
  date: string;
  morning: string;
  evening: string;
  psalms: string;
};

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

  return <div>{!loading && plan.map((day) => <Panel {...day} key={`day-${day.day}`} />)}</div>;
};

export default Home;
