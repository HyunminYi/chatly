export const MODELS = [
  "Claude3.5 Haiku",
  "Claude3.5 Sonnet",
  "Claude3 Sonnet",
  "Claude3 Haiku",
] as const;

export const modelMap: Record<tModelName, string> = {
  "Claude3.5 Haiku": "claude-3-5-haiku-20241022",
  "Claude3.5 Sonnet": "claude-3-5-sonnet-20241022",
  "Claude3 Haiku": "claude-3-haiku-20240307",
  "Claude3 Sonnet": "claude-3-sonnet-20240229",
};
export type tModelName = (typeof MODELS)[number];

export type tModelId = (typeof modelMap)[tModelName];
