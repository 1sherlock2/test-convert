export interface ITabs {
  tabs: TabItem[] | null;
  size: string;
  color: string;
  active: number;
  onClick: (index: number) => void;
  [key: string]: any;
}

export type TabItem = {
  name: string;
  icon?: JSX.Element;
};
