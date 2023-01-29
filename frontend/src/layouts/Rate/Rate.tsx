import React, { useEffect, useState } from 'react';
import s from './Rate.module.scss';
import { useAppDispatch, useAppSelector } from '../../store';
import { fetchThunk } from '../../store/query';
import { rateSlice } from '../../store/slices/rateSlice';
import Input from '../../components/Input/Input';
import { useDebounce } from '../../hooks/useDebounce';

const Rate = () => {
  const [volume, setVolume] = useState<string>('');
  const [volumeIndex, setVolumeIndex] = useState<number | null>(null);
  const [volumeIdentify, setVolumeIdentify] = useState<string>('');
  const rateData = useAppSelector((state) => state.rateReducer.data);
  const dispatch = useAppDispatch();
  const debounceVolumeTerms = useDebounce(volume);

  useEffect(() => {
    if (debounceVolumeTerms) {
      dispatch(fetchThunk.rate({ volume, volumeIdentify }));
    }
  }, [debounceVolumeTerms]);

  useEffect(() => {
    if (!volume) {
      dispatch(rateSlice.actions.clearVolumes());
    }
  }, [volume]);

  const handleChange = (
    event: React.FormEvent<HTMLInputElement>,
    index: number,
    identify: string
  ) => {
    setVolumeIndex(index);
    setVolumeIdentify(identify);
    setVolume(event.currentTarget.value);
  };
  return (
    <div className={s.container}>
      {Object.keys(rateData).map((rateKey, i) => {
        const rateItem = rateData[rateKey];
        return (
          <div key={`${rateItem.time}_${i}`} className={s.container_item}>
            <div className={s.container_item__factor}>
              {`${rateItem.factor || ''} м`}
              <sup>3</sup> / {rateItem.time}
            </div>
            <Input
              className={s.item_input}
              size="m"
              value={volumeIndex === i ? volume : rateItem.volume}
              onChange={(e) => handleChange(e, i, rateKey)}
              placeholder={!volume ? 'Введите значение' : ''}
              disabled={Boolean(volume && volumeIndex !== i)}
              {...(volumeIndex === i && { validate: 'numbers' })}
            />
          </div>
        );
      })}
    </div>
  );
};

export default Rate;
