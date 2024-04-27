import { Button } from 'antd';
import { RaceCar } from './RaceCar';

export function Car() {
  return (
    <div className="race">
      <div className="race_ResetRemove">
        <Button type="dashed" ghost size="small">
          RESET
        </Button>

        <Button type="dashed" ghost size="small">
          REMOVE
        </Button>
      </div>
      <div className="race_AB">
        <Button type="dashed" ghost size="small">
          A
        </Button>
        <Button type="dashed" ghost size="small">
          B
        </Button>
      </div>
      <RaceCar />
    </div>
  );
}
