// The features page copy, one source for /features and /features.md. Every line is something the app does today.
export type Feature = { key: string; title: string; body: string }
export type FeatureGroup = { id: string; label: string; title: string; sub: string; items: Feature[] }

export const FEATURE_GROUPS: FeatureGroup[] = [
  {
    id: "ask",
    label: "Ask",
    title: "Describe it however you can.",
    sub: "No forms and no menus. Say what happened and get the first thing to do.",
    items: [
      { key: "input", title: "Text, photo or voice", body: "Type what happened, say it, or attach a photo. AidSnap takes what it sees into account." },
      { key: "steps", title: "Short, numbered steps", body: "One action per step, in plain words, and when to call for help comes first." },
      {
        key: "sources",
        title: "Checked against trusted sources",
        body: "When it needs more, AidSnap searches trusted medical sites like MedlinePlus, the CDC and the NHS, and reads official FDA drug labels.",
      },
    ],
  },
  {
    id: "live",
    label: "Live",
    title: "Keep your hands on the person.",
    sub: "Start Live and talk. AidSnap answers out loud, and with the camera on it can see what you see.",
    items: [
      { key: "live", title: "Hands free, start to finish", body: "Speak, listen and keep going. Pick the voice you want in Settings." },
    ],
  },
  {
    id: "guides",
    label: "Guides",
    title: "Sixteen guides, built in.",
    sub: "Based on AHA, Red Cross and NHS guidance. They ship with the app, so they open without a connection.",
    items: [
      {
        key: "library",
        title: "Grouped by urgency",
        body: "Life-threatening first, then get care soon, then everyday care. Each says when to call, what to do and what not to do.",
      },
      { key: "step", title: "One step per screen", body: "Large type, the call button on top, and the screen stays awake while you work." },
      {
        key: "timers",
        title: "Timers and a CPR beat",
        body: "A 20 minute countdown to cool a burn, and a 110 a minute beat for CPR with a reminder to swap every 2 minutes.",
      },
    ],
  },
  {
    id: "actions",
    label: "Actions",
    title: "Nothing happens until you tap.",
    sub: "AidSnap can suggest the next move as a card. You decide whether it happens.",
    items: [
      {
        key: "cards",
        title: "Cards that wait for you",
        body: "Call for help, set a reminder, add an allergy to your Medical ID, start a guide step by step, or find care nearby in your maps app.",
      },
    ],
  },
  {
    id: "you",
    label: "You",
    title: "It knows what a responder should.",
    sub: "Your details, ready when they matter, and only kept as long as you want them.",
    items: [
      { key: "medical", title: "Medical ID", body: "Allergies, conditions, medications and emergency contacts. Add contacts straight from your phone." },
      {
        key: "memory",
        title: "Memory you control",
        body: "AidSnap remembers short facts across chats and tells you when it does. Undo it, delete one, delete all, or turn memory off.",
      },
      {
        key: "reminders",
        title: "Reminders that follow up",
        body: "Follow-ups AidSnap suggests, step timer alerts and a weekly check-in. Each has its own switch, and they stay on your phone.",
      },
    ],
  },
  {
    id: "connections",
    label: "Connections",
    title: "Bring the health data you already have.",
    sub: "Every connection is off until you turn it on, read only, and read only when a question needs it.",
    items: [
      { key: "connectors", title: "Six sources", body: "Apple Health, Health Connect, WHOOP, Oura, Withings and Dexcom." },
    ],
  },
]

export function featuresMarkdown() {
  const body = FEATURE_GROUPS.map(
    (g) => `## ${g.title}\n\n${g.sub}\n\n${g.items.map((f) => `- **${f.title}:** ${f.body}`).join("\n")}`,
  ).join("\n\n")
  return `# AidSnap features\n\nEverything AidSnap does in the minutes before help arrives. It gives first aid guidance, not a diagnosis. In an emergency, call your local emergency number first.\n\n${body}\n`
}
