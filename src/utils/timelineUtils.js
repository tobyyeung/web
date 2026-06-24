import { TIMELINE_END_YEAR, TIMELINE_END_MONTH } from '../data/experiences';

export const getBasePixelsForMonth = (y, m) => {
  return (y >= 2025 || y <= 2022) ? 8 : 22;
};

export const getBasePositionForDate = (y, m) => {
  let px = 0;
  let currentY = TIMELINE_END_YEAR;
  let currentM = TIMELINE_END_MONTH;

  while (currentY > y || (currentY === y && currentM > m)) {
    px += getBasePixelsForMonth(currentY, currentM);
    currentM--;
    if (currentM === 0) {
      currentM = 12;
      currentY--;
    }
  }
  return px;
};

export const getPixelsForMonth = (y, m, experiences, hoveredExpId, hoveredExpStretch) => {
  let px = getBasePixelsForMonth(y, m);

  if (hoveredExpId && hoveredExpStretch > 0) {
    const hoveredExp = experiences.find(e => e.id === hoveredExpId);
    if (hoveredExp) {
      const mVal = y * 12 + m;
      const endVal = hoveredExp.endY * 12 + hoveredExp.endM;

      if (mVal === endVal) {
        px += hoveredExpStretch;
      }
    }
  }
  return px;
};

export const getPositionForDate = (y, m, experiences, hoveredExpId, hoveredExpStretch) => {
  let px = 0;
  let currentY = TIMELINE_END_YEAR;
  let currentM = TIMELINE_END_MONTH;

  while (currentY > y || (currentY === y && currentM > m)) {
    px += getPixelsForMonth(currentY, currentM, experiences, hoveredExpId, hoveredExpStretch);
    currentM--;
    if (currentM === 0) {
      currentM = 12;
      currentY--;
    }
  }
  return px;
};
