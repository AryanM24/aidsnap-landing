// The manifesto, one source for /manifesto and /manifesto.md.
export const MANIFESTO_TITLE = "No one should feel powerless when it matters most."

export const MANIFESTO_LEAD =
  "Why we built AidSnap, and what we think health actually is in the minutes before help arrives."

export const MANIFESTO: { heading: string; paragraphs: string[] }[] = [
  {
    heading: "Where health actually happens",
    paragraphs: [
      "Most people think of health as something that belongs to other people. It belongs to doctors, to hospitals, to the appointment that gets scheduled three weeks out and the waiting room that comes with it. Health, in this way of thinking, is a place you go to and a person you see, and the rest of life is just the time in between. However, the moments that decide whether someone is okay rarely happen in those places. They happen in a kitchen when a knife slips, in a classroom when a student stops breathing normally, at a family dinner when someone starts choking, or in a parking lot where nobody knows each other's name.",
      "In those moments, the most important person is not a doctor. It is whoever happens to be standing there. That person did not choose to be there and was not trained to be there, but for a few minutes they are the entire healthcare system that the other person has. This is the idea that AidSnap is built on. Health is not only what professionals do once help arrives. It is also what ordinary people do, or fail to do, before it does.",
    ],
  },
  {
    heading: "Why people freeze",
    paragraphs: [
      "When something goes wrong in front of them, a lot of people freeze. It is easy to read that freeze as fear or as not caring, but I do not think that is what it is. Most people who freeze care a great deal. They freeze because they do not know what to do, and not knowing what to do while someone is hurt is one of the worst feelings a person can have. The freeze is actually a reasonable reaction to uncertainty. When every action feels like it could be the wrong one, doing nothing can feel safer than doing something wrong.",
      "What makes this frustrating is that the knowledge already exists. How to stop bleeding, what to do for a burn, how hard and fast to push during CPR, all of it is written down in manuals and taught in courses. The problem is not that the knowledge is missing. The problem is that the knowledge is somewhere else. It is in a course someone took years ago and half remembers, in a pamphlet nobody carries, or in a search result that takes too long to read while someone is on the floor. The gap between the person and the knowledge is small on paper, but in an emergency that gap is measured in minutes, and minutes are exactly what the hurt person does not have.",
      "This changes how I think about the problem. If people freeze because of uncertainty, then the solution is not to tell them to be braver. The solution is to remove the uncertainty. When someone knows what the first step is, they usually take it. When they know what the second step is, they take that too. Confidence in an emergency is not really a personality trait. It is mostly just knowing what comes next.",
    ],
  },
  {
    heading: "A system that waits",
    paragraphs: [
      "Our healthcare system is designed around appointments and institutions, which makes sense for most of medicine. Nobody should be doing surgery in their kitchen. However, a system built around institutions has a blind spot, which is everything that happens before a person reaches one. The person who calls for help and then waits is outside of that system. They are told help is coming, but in the meantime they are on their own, and what they do in that time can shape everything that happens after.",
      "One could argue that this problem is already solved by first aid courses. If everyone took a course, everyone would know what to do. This is somewhat true, and we strongly believe people should take a certified first aid and CPR course. AidSnap is not meant to replace one. However, a course is something that happens once, and an emergency can happen years later, when the details have faded and the steps are out of order in someone's memory. Furthermore, many people never take a course at all, not because they think it is unimportant but because life is busy and an emergency always feels like something that happens to other people. A course prepares people in advance. We wanted something that helps them in the moment.",
    ],
  },
  {
    heading: "What technology should do here",
    paragraphs: [
      "It would be easy to build a product that tries to take over. An app could try to diagnose, try to decide, or try to act on its own. We think that would be the wrong direction. AidSnap is not a doctor and it should never pretend to be one. It gives first aid guidance, not a diagnosis, and like any AI it can make mistakes. The goal is not to replace human judgment. The goal is to make the human standing there more capable than they would have been alone.",
      "This belief shows up in small design choices. AidSnap never calls emergency services on its own. It shows the right number for your region, and you tap to call, and it asks once before it dials so a call never happens by accident. That choice might seem minor, but it reflects something important about how we think about health. The person in the room should stay in control of what happens, because they are the one who can see the situation, and because responsibility that is taken away from people tends to make them more passive rather than more helpful. Similarly, the answers are short, numbered steps rather than long paragraphs, because a person in an emergency does not need to understand everything. They need to know what to do with their hands right now.",
      "The same thinking is why AidSnap can listen and talk back. When someone is pressing on a wound or doing compressions, their hands are busy, and stopping to type is not an option. Being able to speak and hear the next step out loud keeps the person focused on the person they are helping instead of on a screen. The technology should fit around the emergency, not the other way around.",
    ],
  },
  {
    heading: "Health is personal",
    paragraphs: [
      "Information about someone's body is information about who they are. A list of allergies, a condition someone has lived with for years, a medication they take every morning, a glucose reading at two in the morning, all of these details reveal something private about a person's life. Because of that, the way a health product handles this information matters as much as what the product does with it.",
      "This is why we made privacy the default rather than a setting. Every health connection is off until you turn it on. Records from Apple Health and Health Connect stay on your phone, and AidSnap reads only what a question needs when you ask it. There are no ads and no trackers, and health data is never sold. You can delete what AidSnap remembers, or your whole account, at any time. We do not see these choices as features. They are the conditions for being trusted with something this personal, and in health, trust is not optional. A person who does not trust a tool will not open it when it matters.",
    ],
  },
  {
    heading: "Health is shared",
    paragraphs: [
      "The longer we worked on AidSnap, the more it became clear that health is not only an individual thing. We usually talk about health as something each person owns, their diet, their sleep, their checkups. However, in an emergency, your health depends almost entirely on the people around you. The stranger who knows to press on the wound, the friend who recognizes the signs of a stroke, the parent who knows what to do when a child is choking, all of these people become part of someone else's health without ever meaning to.",
      "This means that making one person more prepared actually makes everyone around them safer. A single person who knows what to do changes the outcome for the people in their family, their school and their neighborhood. In this way, first aid is less about individual knowledge and more about a kind of shared responsibility, where each person who is ready raises the floor for everyone near them.",
    ],
  },
  {
    heading: "What we believe",
    paragraphs: [
      "AidSnap started from a simple observation, which is that people freeze in emergencies not because they do not care but because they do not know what to do. Everything else follows from that. If uncertainty is the problem, then clear, immediate guidance is the answer. If the person in the room is the one who matters most in those minutes, then the tool should make them more capable rather than take control away from them. If health information is personal, then privacy is a condition for trust rather than an extra.",
      "We do not think AidSnap can save every life on its own. No app can. What we do think is that the minutes before help arrives deserve the same seriousness as everything that happens after, and that nobody should spend those minutes feeling helpless while someone they care about needs them. We are driven by one belief: no one should ever feel powerless when it matters most.",
    ],
  },
]

export function manifestoMarkdown() {
  const body = MANIFESTO.map((s) => `## ${s.heading}\n\n${s.paragraphs.join("\n\n")}`).join("\n\n")
  return `# ${MANIFESTO_TITLE}\n\n${MANIFESTO_LEAD}\n\n${body}\n`
}
