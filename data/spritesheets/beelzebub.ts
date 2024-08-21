import { SpritesheetData } from './types';
const dimx = 87;
const dimy = 110;
export const data: SpritesheetData = {
  frames: {
    move0: {
      frame: { x: 0, y: 0, w: dimx, h: dimy },
      sourceSize: { w: dimx, h: dimy },
      spriteSourceSize: { x: 0, y: 0 },
    },
    move1: {
      frame: { x: dimx, y: 0, w: dimx, h: dimy },
      sourceSize: { w: dimx, h: dimy },
      spriteSourceSize: { x: 0, y: 0 },
    },
    move2: {
      frame: { x: dimx * 2, y: 0, w: dimx, h: dimy },
      sourceSize: { w: dimx, h: dimy },
      spriteSourceSize: { x: 0, y: 0 },
    },
    move3: {
      frame: { x: dimx * 3, y: 0, w: dimx, h: dimy },
      sourceSize: { w: dimx, h: dimy },
      spriteSourceSize: { x: 0, y: 0 },
    },
    move4: {
      frame: { x: 0, y: dimy, w: dimx, h: dimy },
      sourceSize: { w: dimx, h: dimy },
      spriteSourceSize: { x: 0, y: 0 },
    },
    move5: {
      frame: { x: dimx, y: dimy, w: dimx, h: dimy },
      sourceSize: { w: dimx, h: dimy },
      spriteSourceSize: { x: 0, y: 0 },
    },
    move6: {
      frame: { x: dimx * 2, y: dimy, w: dimx, h: dimy },
      sourceSize: { w: dimx, h: dimy },
      spriteSourceSize: { x: 0, y: 0 },
    },
    move7: {
      frame: { x: dimx * 3, y: dimy, w: dimx, h: dimy },
      sourceSize: { w: dimx, h: dimy },
      spriteSourceSize: { x: 0, y: 0 },
    },
  },
  meta: {
    scale: '1',
  },
  animations: {
    left: ['move0', 'move1', 'move2'],
    right: ['move3', 'move4', 'move5'],
    up: ['move6', 'move7', 'move0'],
    down: ['move1', 'move2', 'move3'],
  },
};
