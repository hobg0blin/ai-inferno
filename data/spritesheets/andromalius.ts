import { SpritesheetData } from './types';
const ydim = 88;
const xdim = 57;
export const data: SpritesheetData = {
  frames: {
    left: {
      frame: { x: 0, y: ydim * 2, w: xdim, h: ydim },
      sourceSize: { w: xdim, h: ydim },
      spriteSourceSize: { x: 0, y: 0 },
    },
    left2: {
      frame: { x: xdim, y: ydim * 2, w: xdim, h: ydim },
      sourceSize: { w: xdim, h: ydim },
      spriteSourceSize: { x: 0, y: 0 },
    },
    left3: {
      frame: { x: xdim * 2, y: ydim * 2, w: xdim, h: ydim },
      sourceSize: { w: xdim, h: ydim },
      spriteSourceSize: { x: 0, y: 0 },
    },
    right: {
      frame: { x: 0, y: ydim, w: xdim, h: ydim },
      sourceSize: { w: xdim, h: ydim },
      spriteSourceSize: { x: 0, y: 0 },
    },
    right2: {
      frame: { x: xdim * 2, y: ydim * 2, w: xdim, h: ydim },
      sourceSize: { w: xdim, h: ydim },
      spriteSourceSize: { x: 0, y: 0 },
    },
    right3: {
      frame: { x: xdim * 3, y: ydim * 2, w: xdim, h: ydim },
      sourceSize: { w: xdim, h: ydim },
      spriteSourceSize: { x: 0, y: 0 },
    },
    up: {
      frame: { x: xdim * 4, y: ydim * 2, w: xdim, h: ydim },
      sourceSize: { w: xdim, h: ydim },
      spriteSourceSize: { x: 0, y: 0 },
    },
  },
  meta: {
    scale: '1',
  },
  animations: {
    left: ['left', 'left2', 'left3'],
    right: ['right', 'right2', 'right3'],
    up: ['up', 'up', 'up'],
    down: ['up', 'up', 'up'],
  },
};
