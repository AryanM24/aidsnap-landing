import { GUIDES } from "@/lib/guides"

// The one source for the FAQ: the support page, its FAQPage data, support.md and llms-full.txt all read this.
// Every answer is a fact from the app, the Terms, the Privacy Policy or press coverage. No claims beyond those.
export const FAQS: [question: string, answer: string][] = [
  [
    "What is AidSnap?",
    "AidSnap is an AI first aid assistant for people with no medical training. You describe what happened by text, photo or voice, and it answers with clear, numbered first aid steps, can talk you through them hands free, and keeps your region's emergency number one tap away.",
  ],
  [
    "Does AidSnap replace emergency services?",
    "No. AidSnap gives first aid guidance, not a diagnosis. If someone may be in danger, call your local emergency number first, then follow the steps while you wait.",
  ],
  [
    "Can AidSnap call for me?",
    "No. It shows the right emergency number for your region, and you tap to call. It asks once before dialing, so a call never happens by accident.",
  ],
  [
    "Where do the answers come from?",
    "AidSnap uses Google Gemini, guided by 16 first aid guides based on AHA, Red Cross and NHS guidance. Like any AI it can make mistakes, so follow the guide steps and trust the responders.",
  ],
  [
    "Which first aid guides are included?",
    `${GUIDES.length} guides: ${GUIDES.map((g) => g.title).join(", ")}. Each one says when to call emergency services, what to do step by step, and what not to do.`,
  ],
  [
    "What is AidSnap Live?",
    "Live is AidSnap's hands-free voice mode. You speak, AidSnap answers out loud, and you can turn on the camera so it can see what you see, so your hands stay where they're needed.",
  ],
  [
    "Can I send AidSnap a photo of an injury?",
    "Yes. You can attach a photo in the chat, or turn on the camera during Live, and AidSnap takes what it sees into account. It is still first aid guidance, not a diagnosis.",
  ],
  [
    "Is AidSnap free?",
    "Yes. AidSnap is currently free to use, with no ads.",
  ],
  [
    "Which phones does AidSnap work on?",
    "AidSnap is available on Android from Google Play. The iPhone app is coming soon.",
  ],
  [
    "Which health apps and wearables can it connect to?",
    "Apple Health, Health Connect, WHOOP, Oura, Withings and Dexcom. Every connection is optional and off until you turn it on, and AidSnap reads only what a question needs, when you ask it.",
  ],
  [
    "Does it work without internet?",
    "Chat and Live need a connection. The first aid guides are built into the app.",
  ],
  [
    "What happens to my information?",
    "What you ask is sent to Google Gemini to get an answer. Health data from Apple Health, Health Connect or a wearable is read only when you ask about it. You can delete what AidSnap remembers in Settings, and delete your account in the app.",
  ],
  [
    "How do I delete my account?",
    "In the app, go to Settings, then Account, and tap Delete account. It permanently deletes your chats, everything AidSnap remembers, your connections, your Medical ID and your account. If you can't open the app, email us from the address you signed up with.",
  ],
  [
    "Is AidSnap a medical device?",
    "No. AidSnap gives general first aid information. It is not a medical device, and it has not been reviewed or approved by the U.S. Food and Drug Administration.",
  ],
  [
    "Can AidSnap replace a first aid course?",
    "No. AidSnap is designed to help in the moment, not to replace proper training. We strongly recommend a certified first aid and CPR course.",
  ],
  [
    "Who made AidSnap?",
    "AidSnap was created by students at Edison High School, as covered by TapInto Edison.",
  ],
]
