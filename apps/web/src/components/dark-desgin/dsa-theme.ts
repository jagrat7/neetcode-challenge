export const DSA = {
  bg: "#0D1117",
  card: "#161B22",
  fg: "#E6EDF3",
  visited: "#10B981",
  current: "#06B6D4",
  queued: "#F59E0B",
  unvisited: "#334155",
  muted: "#7D8590",
  border: "#30363D",
  red: "#F85149",
  edgeColor: "#30363D",
  edgeActive: "#10B981",
}

export const DIFF_DSA: Record<string, string> = {
  Easy: DSA.visited,
  Medium: DSA.queued,
  Hard: DSA.red,
}
