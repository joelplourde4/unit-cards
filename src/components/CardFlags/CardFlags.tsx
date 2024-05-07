import React from 'react';
import './CardFlags.css';
import regularImg from './assets/experience/regular.png';
import seasonedImg from './assets/experience/seasoned.png';
import veteranImg from './assets/experience/veteran.png';
import eliteImg from './assets/experience/elite.png';
import supereliteImg from './assets/experience/super-elite.png';
import leviesImg from './assets/type/levies.png';
import dragonbornImg from './assets/ancestry/dragonborn.png';
import dwarfImg from './assets/ancestry/dwarf.png';
import elfImg from './assets/ancestry/elf.png';
import humanImg from './assets/ancestry/human.png';
import goblinoidImg from './assets/ancestry/goblinoid.png';
import monsterousImg from './assets/ancestry/monsterous.png';
import undeadImg from './assets/ancestry/undead.png';
import specialImg from './assets/ancestry/special.png';
import fortificationImg from './assets/type/fortification.png';

import {
  UnitAncestry,
  UnitType,
  UnitEquipment,
  UnitExperience,
} from '../../types/units';
import { flagTypes } from '../../fixtures/units';
import { ArcherFlag } from './ArcherFlag';
import { CavalryFlag } from './CavalryFlag';
import { InfantryFlag } from './InfantryFlag';
import { FlyingFlag } from './FlyingFlag';
import { SiegeEngineFlag } from './SiegeEngineFlag';
import { SpellcasterFlag } from './SpellcasterFlag';

interface Props {
  ancestry: UnitAncestry;
  type: UnitType;
  equipment: UnitEquipment;
  experience: UnitExperience;
}
const AncestryFlag = ({
  experience,
  ancestry,
  type,
}: {
  experience: UnitExperience;
  ancestry: UnitAncestry;
  type: UnitType;
}) => (
  <div className="card-flag">
    {flagTypes[ancestry] === 'Human' ? (
      <img alt="" src={humanImg} className="ancestry-flag" />
    ) : flagTypes[ancestry] === 'Dragonborn' ? (
      <img alt="" src={dragonbornImg} className="ancestry-flag" />
    ) : flagTypes[ancestry] === 'Dwarf' ? (
      <img alt="" src={dwarfImg} className="ancestry-flag" />
    ) : flagTypes[ancestry] === 'Elf' ? (
      <img alt="" src={elfImg} className="ancestry-flag" />
    ) : flagTypes[ancestry] === 'Undead' ? (
      <img alt="" src={undeadImg} className="ancestry-flag" />
    ) : flagTypes[ancestry] === 'Goblinoid' ? (
      <img alt="" src={goblinoidImg} className="ancestry-flag" />
    ) : flagTypes[ancestry] === 'Special' ? (
      <img alt="" src={specialImg} className="ancestry-flag" />
    ) : flagTypes[ancestry] === 'Monsterous' ? (
      <img alt="" src={monsterousImg} className="ancestry-flag" />
    ) : (
      <img alt="" src={specialImg} className="ancestry-flag" />
    )}

    {experience === 'Regular' ? (
      <img alt="" src={regularImg} className="experience-flag" />
    ) : experience === 'Seasoned' ? (
      <img alt="" src={seasonedImg} className="experience-flag" />
    ) : experience === 'Veteran' ? (
      <img alt="" src={veteranImg} className="experience-flag" />
    ) : experience === 'Elite' ? (
      <img alt="" src={eliteImg} className="experience-flag" />
    ) : experience === 'Super-Elite' ? (
      <img alt="" src={supereliteImg} className="experience-flag" />
    ) : null}
  </div>
);

const TypeFlag = ({
  equipment,
  type,
}: {
  equipment: UnitEquipment;
  type: UnitType;
}) => (
  <div className="card-flag">
    {type === 'Archers' ? (
      <ArcherFlag equipment={equipment} />
    ) : type === 'Infantry' ? (
      <InfantryFlag equipment={equipment} />
    ) : type === 'Siege Engine' ? (
      <SiegeEngineFlag equipment={equipment} />
    ) : type === 'Levies' ? (
      <img alt="" src={leviesImg} className="type-flag" />
    ) : type === 'Cavalry' ? (
      <CavalryFlag equipment={equipment} />
    ) : type === 'Flying' ? (
      <FlyingFlag equipment={equipment} />
    ) : type === 'Spellcasters' ? (
      <SpellcasterFlag equipment={equipment} />
    ) : null}
  </div>
);
export const CardFlags = ({ ancestry, type, equipment, experience }: Props) => (
  <>
    {type === 'Fortification' ? (
      <div className="fort-flag">
        <img alt="" src={fortificationImg} />
      </div>
    ) : (
      <>
        <AncestryFlag
          ancestry={ancestry}
          type={type}
          experience={type !== 'Levies' ? experience : 'Green'}
        />
        <TypeFlag
          equipment={type !== 'Levies' ? equipment : 'Light'}
          type={type}
        />
      </>
    )}
  </>
);
