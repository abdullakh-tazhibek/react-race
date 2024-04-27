import { useState } from 'react';

import { Button, Input } from 'antd';
import { ColorPicker } from 'antd';
import type { ColorPickerProps, GetProp } from 'antd';

import { Car } from './Car';

type Color = GetProp<ColorPickerProps, 'value'>;

export function Garage() {
  const [clr1, stClr1] = useState<Color>('#1677ff');
  const [clr2, stClr2] = useState<Color>('#1677ff');

  return (
    <>
      <div className="garage">
        <div className="garage_raceReset">
          <Button type="default" ghost>
            RACE
          </Button>

          <Button type="default" ghost>
            RESET
          </Button>
        </div>

        <div className="garage_createBtn">
          <Input placeholder="TYPE CAR MODEL" style={{ width: '55%' }} />
          <ColorPicker value={clr1} onChange={stClr1} />
          <Button type="default" ghost>
            CREATE
          </Button>
        </div>

        <div className="garage_updateBtn">
          <Input placeholder="TYPE CAR MODEL" style={{ width: '55%' }} />
          <ColorPicker value={clr2} onChange={stClr2} />
          <Button type="default" ghost>
            UPDATE
          </Button>
        </div>

        <Button type="default" ghost>
          GENERATE CARS
        </Button>
      </div>
      <img
        src={require('../assets/sign.png')}
        alt="sign"
        className="sign_img"
        width={'50px'}
      />
      <Car />
      <img
        src={require('../assets/sign.png')}
        alt="sign"
        className="sign_img"
        width={'50px'}
      />
      <div className="numberData">
        <h2>GARAGE (103)</h2>
        <div>
          <h2>PAGE #16</h2>
        </div>
      </div>
    </>
  );
}
