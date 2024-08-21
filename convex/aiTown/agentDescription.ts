import { ObjectType, v } from 'convex/values';
import { GameId, agentId, parseGameId } from './ids';

export class AgentDescription {
  agentId: GameId<'agents'>;
  identity: string;
  plan: string;
  role: string;

  constructor(serialized: SerializedAgentDescription) {
    const { agentId, identity, plan, role } = serialized;
    this.agentId = parseGameId('agents', agentId);
    this.identity = identity;
    this.plan = plan;
    this.role = role;
  }

  serialize(): SerializedAgentDescription {
    const { agentId, identity, plan, role } = this;
    return { agentId, identity, plan, role };
  }
}

export const serializedAgentDescription = {
  agentId,
  identity: v.string(),
  plan: v.string(),
  role: v.string(),
};
export type SerializedAgentDescription = ObjectType<typeof serializedAgentDescription>;
