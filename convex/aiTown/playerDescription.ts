import { ObjectType, v } from 'convex/values';
import { GameId, parseGameId, playerId } from './ids';

export const serializedPlayerDescription = {
  playerId,
  name: v.string(),
  description: v.string(),
  character: v.string(),
  role: v.string(),
};
export type SerializedPlayerDescription = ObjectType<typeof serializedPlayerDescription>;

export class PlayerDescription {
  playerId: GameId<'players'>;
  name: string;
  description: string;
  character: string;
  role: string;

  constructor(serialized: SerializedPlayerDescription) {
    const { playerId, name, description, character, role } = serialized;
    this.playerId = parseGameId('players', playerId);
    this.name = name;
    this.description = description;
    this.character = character;
    this.role = role;
  }

  serialize(): SerializedPlayerDescription {
    const { playerId, name, description, character, role } = this;
    return {
      playerId,
      name,
      description,
      character,
      role,
    };
  }
}
