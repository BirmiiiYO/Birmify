import { FC } from 'react';

interface TrackProgressProps {
  left: number;
  right: number;
  margin: string;
  onChange: (e: any) => void;
}

const TrackProgress: FC<TrackProgressProps> = ({ left, right, onChange, margin }) => {
  return (
    <div style={{ marginLeft: margin }}>
      <input type="range" max={right} min={0} value={left} onChange={onChange} />
      <div>
        {' '}
        {left}/{right}
      </div>
    </div>
  );
};

export default TrackProgress;
