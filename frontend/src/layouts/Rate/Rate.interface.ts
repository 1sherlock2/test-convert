export type IVolume<T = unknown> = {
  volume: string | T;
  volumeIdentify: string;
};

type IRateItem = {
  volume: string;
  factor: string;
  time: string;
};
type IRate = {
  one: IRateItem;
  thousand: IRateItem;
  million: IRateItem;
  billion: IRateItem;
  [key: string]: any;
};
export type IRateUpdate = {
  one: string;
  thousand: string;
  million: string;
  billion: string;
  [key: string]: any;
};

export type IRateInitial = {
  data: IRate;
  isLoading: boolean;
  error: string;
};
