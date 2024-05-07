import React from 'react';
// TODO change this.
import lightImg from './assets/type/spellcaster-light.png';
import mediumImg from './assets/type/spellcaster-medium.png';
import heavyImg from './assets/type/spellcaster-heavy.png';
import superHeavyImg from './assets/type/spellcaster-super-heavy.png';

import { UnitEquipment } from '../../types/units';

interface Props {
  equipment: UnitEquipment;
}
export const SpellcasterFlag = ({ equipment }: Props) => (
  <>
    {equipment === 'Light' ? (
      <img alt="" src={lightImg} className="type-flag" />
    ) : equipment === 'Medium' ? (
      <img alt="" src={mediumImg} className="type-flag" />
    ) : equipment === 'Heavy' ? (
      <img alt="" src={heavyImg} className="type-flag" />
    ) : equipment === 'Super-Heavy' ? (
      <img alt="" src={superHeavyImg} className="type-flag" />
    ) : null}
  </>
);
