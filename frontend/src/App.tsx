import React, { SetStateAction, Suspense, useEffect, useState } from 'react';
import Tabs from './components/Tabs/Tabs';
import Rate from './layouts/Rate/Rate';
import Pressure from './layouts/Pressure/Pressure';
import RateIcon from './layouts/Rate/RateIcon.png';
import Temperature from './layouts/Temperature/Temperature';
import PressureIcon from './layouts/Pressure/PressureIcon.png';
import TemperatureIcon from './layouts/Temperature/TemperatureIcon.png';
import s from './App.module.scss';
import { TabItem } from './components/Tabs/Tabs.interface';

function App() {
  const [activeTab, setActiveTab] = useState(0);
  const [tabs, setTabs] = useState<null | TabItem[]>(null);
  const changeActibeTab = (index: number) => {
    setActiveTab(index);
  };
  console.log({ activeTab });
  useEffect(() => {
    setTabs([
      { name: 'Расход', icon: <img src={RateIcon} /> },
      { name: 'Давление', icon: <img src={PressureIcon} /> },
      { name: 'Температура', icon: <img src={TemperatureIcon} /> }
    ]);
  }, []);

  const componentByTabs: React.ReactElement<{}>[] = [
    <Rate />,
    <Pressure />,
    <Temperature />
  ].filter(Boolean);

  return (
    <div className={s.container}>
      <div className={s.container_payload}>
        <Tabs
          tabs={tabs}
          onClick={changeActibeTab}
          active={activeTab}
          size="l"
          color="pink"
        />
      </div>
      <div className={s.container_component}>
        <Suspense fallback={<div> ...loading</div>}>
          {componentByTabs[activeTab]}
        </Suspense>
      </div>
    </div>
  );
}

export default App;
