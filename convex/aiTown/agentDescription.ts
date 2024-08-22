import { ObjectType, v } from 'convex/values';
import { GameId, agentId, parseGameId } from './ids';

export class AgentDescription {
  agentId: GameId<'agents'>;
  identity: string;
  plan: string;
  role: string;
  secrets?: string;

  constructor(serialized: SerializedAgentDescription) {
    const { agentId, identity, plan, role, secrets } = serialized;
    this.agentId = parseGameId('agents', agentId);
    this.identity = identity;
    this.plan = plan;
    this.role = role;
    this.secrets = secrets;
  }

  serialize(): SerializedAgentDescription {
    const { agentId, identity, plan, role, secrets } = this;
    return { agentId, identity, plan, role, secrets };
  }
}

export const serializedAgentDescription = {
  agentId,
  identity: v.string(),
  plan: v.string(),
  role: v.string(),
  secrets: v.optional(v.string()),
};
export type SerializedAgentDescription = ObjectType<typeof serializedAgentDescription>;
