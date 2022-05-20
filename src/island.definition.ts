import { Definition } from './definition/definition';
const cornerWeight = 0.05;
const innerCornerWeight = 0.03;
const edgeWeight = 0.08;
const landWeight = 0.3;
export const islandDefinition: Definition = {
  path: './assets/island/',
  tilesize: 16,
  unique: true,
  tiles: [
    { name: 'corner_grass_rock', symmetry: 'L', weight: cornerWeight },
    { name: 'corner_grass_water', symmetry: 'L', weight: cornerWeight },
    { name: 'corner_rock_water', symmetry: 'L', weight: cornerWeight },
    { name: 'inner_corner_grass_rock', symmetry: 'L', weight: innerCornerWeight },
    { name: 'inner_corner_grass_water', symmetry: 'L', weight: innerCornerWeight },
    { name: 'inner_corner_rock_water', symmetry: 'L', weight: innerCornerWeight },
    { name: 'edge_grass_rock', symmetry: 'T', weight: edgeWeight },
    { name: 'edge_grass_water', symmetry: 'T', weight: edgeWeight },
    { name: 'edge_rock_water', symmetry: 'T', weight: edgeWeight },
    { name: 'water', symmetry: 'X', weight: 0.7 },
    { name: 'rock', symmetry: 'X', weight: landWeight },
    { name: 'grass', symmetry: 'X', weight: landWeight },
  ],
  neighbors: [
    { left: 'corner_grass_rock 0', right: 'rock 0' },
    { left: 'corner_grass_rock 0', right: 'edge_grass_rock 1' },
    { left: 'corner_grass_rock 0', right: 'edge_rock_water 1' },
    { left: 'corner_grass_rock 0', right: 'inner_corner_rock_water 0' },
    { left: 'corner_grass_rock 0', right: 'inner_corner_rock_water 3' },
    { left: 'corner_grass_rock 0', right: 'corner_grass_rock 1' },
    { left: 'corner_grass_rock 0', right: 'corner_grass_rock 2' },

    { left: 'corner_grass_rock 1', right: 'edge_grass_rock 0' },

    { left: 'corner_grass_rock 2', right: 'edge_grass_rock 2' },

    { left: 'corner_grass_rock 3', right: 'rock 0' },
    { left: 'corner_grass_rock 3', right: 'edge_grass_rock 1' },
    { left: 'corner_grass_rock 3', right: 'edge_rock_water 1' },
    { left: 'corner_grass_rock 3', right: 'inner_corner_rock_water 0' },
    { left: 'corner_grass_rock 3', right: 'inner_corner_rock_water 3' },
    { left: 'corner_grass_rock 3', right: 'corner_grass_rock 1' },
    { left: 'corner_grass_rock 3', right: 'corner_grass_rock 2' },

    { left: 'corner_grass_water 0', right: 'edge_grass_water 0' },

    { left: 'corner_grass_water 1', right: 'corner_grass_water 0' },
    { left: 'corner_grass_water 1', right: 'corner_grass_water 3' },
    { left: 'corner_grass_water 1', right: 'corner_rock_water 0' },
    { left: 'corner_grass_water 1', right: 'corner_rock_water 3' },
    { left: 'corner_grass_water 1', right: 'edge_grass_water 3' },
    { left: 'corner_grass_water 1', right: 'edge_rock_water 3' },
    { left: 'corner_grass_water 1', right: 'water 0' },

    { left: 'corner_grass_water 2', right: 'corner_grass_water 0' },
    { left: 'corner_grass_water 2', right: 'corner_grass_water 3' },
    { left: 'corner_grass_water 2', right: 'corner_rock_water 0' },
    { left: 'corner_grass_water 2', right: 'corner_rock_water 3' },
    { left: 'corner_grass_water 2', right: 'edge_grass_water 3' },
    { left: 'corner_grass_water 2', right: 'edge_rock_water 3' },
    { left: 'corner_grass_water 2', right: 'water 0' },

    { left: 'corner_grass_water 3', right: 'edge_grass_water 2' },

    { left: 'corner_rock_water 0', right: 'edge_rock_water 0' },

    { left: 'corner_rock_water 1', right: 'corner_grass_water 0' },
    { left: 'corner_rock_water 1', right: 'corner_grass_water 3' },
    { left: 'corner_rock_water 1', right: 'corner_rock_water 0' },
    { left: 'corner_rock_water 1', right: 'corner_rock_water 3' },
    { left: 'corner_rock_water 1', right: 'edge_grass_water 3' },
    { left: 'corner_rock_water 1', right: 'edge_rock_water 3' },
    { left: 'corner_rock_water 1', right: 'water 0' },

    { left: 'corner_rock_water 2', right: 'corner_grass_water 0' },
    { left: 'corner_rock_water 2', right: 'corner_grass_water 3' },
    { left: 'corner_rock_water 2', right: 'corner_rock_water 0' },
    { left: 'corner_rock_water 2', right: 'corner_rock_water 3' },
    { left: 'corner_rock_water 2', right: 'edge_grass_water 3' },
    { left: 'corner_rock_water 2', right: 'edge_rock_water 3' },
    { left: 'corner_rock_water 2', right: 'water 0' },

    { left: 'corner_rock_water 3', right: 'edge_rock_water 2' },

    { left: 'inner_corner_grass_rock 0', right: 'edge_grass_rock 0' },
    { left: 'inner_corner_grass_rock 0', right: 'inner_corner_grass_rock 1' },
    { left: 'inner_corner_grass_rock 0', right: 'corner_grass_rock 0' },

    { left: 'inner_corner_grass_rock 1', right: 'grass 0' },
    { left: 'inner_corner_grass_rock 1', right: 'edge_grass_water 1' },
    { left: 'inner_corner_grass_rock 1', right: 'edge_grass_rock 3' },
    { left: 'inner_corner_grass_rock 1', right: 'inner_corner_grass_rock 0' },
    { left: 'inner_corner_grass_rock 2', right: 'inner_corner_grass_rock 3' },

    { left: 'inner_corner_grass_rock 2', right: 'grass 0' },
    { left: 'inner_corner_grass_rock 2', right: 'edge_grass_water 1' },
    { left: 'inner_corner_grass_rock 2', right: 'edge_grass_rock 3' },
    { left: 'inner_corner_grass_rock 2', right: 'inner_corner_grass_rock 0' },
    { left: 'inner_corner_grass_rock 2', right: 'inner_corner_grass_rock 3' },

    { left: 'inner_corner_grass_rock 3', right: 'edge_grass_rock 2' },
    { left: 'inner_corner_grass_rock 3', right: 'corner_grass_rock 3' },
    { left: 'inner_corner_grass_rock 3', right: 'inner_corner_grass_rock 2' },

    { left: 'inner_corner_grass_water 0', right: 'inner_corner_grass_water 1' },
    { left: 'inner_corner_grass_water 0', right: 'corner_grass_water 2' },
    { left: 'inner_corner_grass_water 0', right: 'edge_grass_water 2' },

    { left: 'inner_corner_grass_water 1', right: 'grass 0' },
    { left: 'inner_corner_grass_water 1', right: 'edge_grass_water 1' },
    { left: 'inner_corner_grass_water 1', right: 'inner_corner_grass_water 3' },

    { left: 'inner_corner_grass_water 2', right: 'inner_corner_grass_water 3' },
    { left: 'inner_corner_grass_water 2', right: 'grass 0' },
    { left: 'inner_corner_grass_water 2', right: 'edge_grass_water 1' },

    { left: 'inner_corner_grass_water 3', right: 'corner_grass_water 1' },
    { left: 'inner_corner_grass_water 3', right: 'edge_grass_water 0' },
    { left: 'inner_corner_grass_water 3', right: 'inner_corner_grass_water 2' },

    { left: 'inner_corner_rock_water 0', right: 'inner_corner_rock_water 1' },
    { left: 'inner_corner_rock_water 0', right: 'edge_rock_water 2' },
    { left: 'inner_corner_rock_water 0', right: 'corner_rock_water 2' },

    { left: 'inner_corner_rock_water 1', right: 'rock 0' },
    { left: 'inner_corner_rock_water 1', right: 'inner_corner_rock_water 3' },
    { left: 'inner_corner_rock_water 1', right: 'edge_rock_water 1' },
    { left: 'inner_corner_rock_water 1', right: 'corner_grass_rock 1' },
    { left: 'inner_corner_rock_water 1', right: 'corner_grass_rock 2' },
    { left: 'inner_corner_rock_water 1', right: 'edge_grass_rock 1' },
    { left: 'inner_corner_rock_water 1', right: 'inner_corner_rock_water 0' },

    { left: 'inner_corner_rock_water 2', right: 'inner_corner_rock_water 0' },
    { left: 'inner_corner_rock_water 2', right: 'inner_corner_rock_water 3' },
    { left: 'inner_corner_rock_water 2', right: 'rock 0' },
    { left: 'inner_corner_rock_water 2', right: 'edge_rock_water 1' },
    { left: 'inner_corner_rock_water 2', right: 'edge_grass_rock 1' },
    { left: 'inner_corner_rock_water 2', right: 'corner_grass_rock 2' },
    { left: 'inner_corner_rock_water 2', right: 'corner_grass_rock 1' },

    { left: 'inner_corner_rock_water 3', right: 'corner_rock_water 1' },
    { left: 'inner_corner_rock_water 3', right: 'edge_rock_water 0' },
    { left: 'inner_corner_rock_water 3', right: 'inner_corner_rock_water 2' },

    { left: 'edge_grass_rock 0', right: 'edge_grass_rock 0' },
    { left: 'edge_grass_rock 0', right: 'corner_grass_rock 0' },
    { left: 'edge_grass_rock 0', right: 'inner_corner_grass_rock 1' },

    { left: 'edge_grass_rock 1', right: 'grass 0' },
    { left: 'edge_grass_rock 1', right: 'inner_corner_grass_rock 0' },
    { left: 'edge_grass_rock 1', right: 'inner_corner_grass_rock 3' },
    { left: 'edge_grass_rock 1', right: 'edge_grass_rock 3' },

    { left: 'edge_grass_rock 2', right: 'edge_grass_rock 2' },
    { left: 'edge_grass_rock 2', right: 'corner_grass_rock 3' },
    { left: 'edge_grass_rock 2', right: 'inner_corner_grass_rock 2' },

    { left: 'edge_grass_rock 3', right: 'corner_grass_rock 1' },
    { left: 'edge_grass_rock 3', right: 'corner_grass_rock 2' },
    { left: 'edge_grass_rock 3', right: 'inner_corner_rock_water 0' },
    { left: 'edge_grass_rock 3', right: 'inner_corner_rock_water 3' },
    { left: 'edge_grass_rock 3', right: 'edge_rock_water 1' },
    { left: 'edge_grass_rock 3', right: 'edge_grass_rock 1' },

    { left: 'edge_grass_water 0', right: 'edge_grass_water 0' },
    { left: 'edge_grass_water 0', right: 'corner_grass_water 1' },
    { left: 'edge_grass_water 0', right: 'inner_corner_grass_water 2' },

    { left: 'edge_grass_water 1', right: 'corner_grass_water 0' },
    { left: 'edge_grass_water 1', right: 'corner_grass_water 3' },
    { left: 'edge_grass_water 1', right: 'edge_grass_water 3' },
    { left: 'edge_grass_water 1', right: 'water 0' },
    { left: 'edge_grass_water 1', right: 'edge_rock_water 3' },
    { left: 'edge_grass_water 1', right: 'corner_rock_water 0' },
    { left: 'edge_grass_water 1', right: 'corner_rock_water 3' },

    { left: 'edge_grass_water 2', right: 'edge_grass_water 2' },
    { left: 'edge_grass_water 2', right: 'corner_grass_water 2' },
    { left: 'edge_grass_water 2', right: 'inner_corner_grass_water 1' },

    { left: 'edge_grass_water 3', right: 'edge_grass_water 1' },
    { left: 'edge_grass_water 3', right: 'grass 0' },
    { left: 'edge_grass_water 3', right: 'inner_corner_grass_water 0' },
    { left: 'edge_grass_water 3', right: 'inner_corner_grass_water 3' },

    { left: 'edge_rock_water 0', right: 'corner_rock_water 1' },
    { left: 'edge_rock_water 0', right: 'edge_rock_water 0' },
    { left: 'edge_rock_water 0', right: 'inner_corner_rock_water 2' },

    { left: 'edge_rock_water 1', right: 'water 0' },
    { left: 'edge_rock_water 1', right: 'edge_rock_water 3' },
    { left: 'edge_rock_water 1', right: 'edge_grass_water 3' },
    { left: 'edge_rock_water 1', right: 'corner_rock_water 0' },
    { left: 'edge_rock_water 1', right: 'corner_rock_water 3' },
    { left: 'edge_rock_water 1', right: 'corner_grass_water 0' },
    { left: 'edge_rock_water 1', right: 'corner_grass_water 3' },

    { left: 'edge_rock_water 2', right: 'edge_rock_water 2' },
    { left: 'edge_rock_water 2', right: 'inner_corner_rock_water 1' },
    { left: 'edge_rock_water 2', right: 'corner_rock_water 2' },

    { left: 'edge_rock_water 3', right: 'rock 0' },
    { left: 'edge_rock_water 3', right: 'inner_corner_rock_water 0' },
    { left: 'edge_rock_water 3', right: 'inner_corner_rock_water 3' },
    { left: 'edge_rock_water 3', right: 'edge_rock_water 1' },
    { left: 'edge_rock_water 3', right: 'edge_grass_rock 1' },
    { left: 'edge_rock_water 3', right: 'corner_grass_rock 1' },
    { left: 'edge_rock_water 3', right: 'corner_grass_rock 2' },

    { left: 'water 0', right: 'water 0' },
    { left: 'water 0', right: 'corner_grass_water 0' },
    { left: 'water 0', right: 'corner_grass_water 3' },
    { left: 'water 0', right: 'corner_rock_water 0' },
    { left: 'water 0', right: 'corner_rock_water 3' },
    { left: 'water 0', right: 'edge_grass_water 3' },
    { left: 'water 0', right: 'edge_rock_water 3' },

    { left: 'rock 0', right: 'corner_grass_rock 1' },
    { left: 'rock 0', right: 'corner_grass_rock 2' },
    { left: 'rock 0', right: 'edge_grass_rock 1' },
    { left: 'rock 0', right: 'edge_rock_water 1' },
    { left: 'rock 0', right: 'inner_corner_rock_water 0' },
    { left: 'rock 0', right: 'inner_corner_rock_water 3' },
    { left: 'rock 0', right: 'rock 0' },

    { left: 'grass 0', right: 'edge_grass_rock 3' },
    { left: 'grass 0', right: 'edge_grass_water 1' },
    { left: 'grass 0', right: 'grass 0' },
    { left: 'grass 0', right: 'inner_corner_grass_rock 0' },
    { left: 'grass 0', right: 'inner_corner_grass_rock 3' },
    { left: 'grass 0', right: 'inner_corner_grass_water 0' },
    { left: 'grass 0', right: 'inner_corner_grass_water 3' },
  ],
};
