import React from 'react';
import { ITabs } from './Tabs.interface';
import classnames from 'classnames';
import s from './Tabs.module.scss';

const Tabs: React.FC<ITabs> = ({
  tabs,
  size = 'm',
  color = 'pink',
  active,
  onClick,
  ...restProps
}) => {
  const colorTab: { [x: string]: string } = {
    pink: s.pink
  };
  return (
    <div className={s.tabs} {...restProps}>
      {tabs &&
        tabs.map((tab, index) => {
          return (
            <div
              key={index}
              className={classnames(
                s.tabItem,
                { [s.active]: index === active },
                s[size],
                colorTab[color]
              )}
              onClick={() => onClick(index)}
            >
              {tab.name}
              {tab.icon}
            </div>
          );
        })}
    </div>
  );
};

export default Tabs;
