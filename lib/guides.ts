// shortcut: copied from aidsnapv2/shared/guides.ts (pure data, no imports). Re-copy when the app's guides change.
// Pure data: imported by both the Expo app and the server. No imports.
// Content follows current AHA, ERC, Red Cross and NHS lay-responder guidance.
// Where they differ, the more conservative instruction wins.

export type Urgency = "life-threatening" | "soon" | "everyday";
export type GuideStep = { action: string; detail?: string; timerSec?: number };
export type Guide = {
  id: string;
  title: string;
  summary: string;
  icon: string;
  urgency: Urgency;
  callEmergencyIf: string[];
  signs: string[];
  steps: GuideStep[];
  donts: string[];
  afterCare: string[];
  tool?: "metronome";
  related: string[];
  source: string;
};

export const URGENCY_LABEL: Record<Urgency, string> = {
  "life-threatening": "Life-threatening",
  soon: "Get care soon",
  everyday: "Everyday care",
};

// Lucide icon names a guide may use. lib/guide-icons.ts maps exactly these.
export const GUIDE_ICON_NAMES = [
  "activity",
  "bandage",
  "bone",
  "brain",
  "bug",
  "droplet",
  "droplets",
  "flame",
  "heart",
  "heart-pulse",
  "skull",
  "snowflake",
  "sun",
  "syringe",
  "wind",
  "zap",
] as const;
export type GuideIconName = (typeof GUIDE_ICON_NAMES)[number];

const NOT_BREATHING_CPR: GuideStep = {
  action: "If they stop responding and are not breathing normally, start CPR.",
  detail: "Send someone for an AED. See the CPR guide.",
};

export const GUIDES: Guide[] = [
  {
    id: "cpr",
    title: "CPR",
    summary: "For an adult who is unresponsive and not breathing normally.",
    icon: "heart-pulse",
    urgency: "life-threatening",
    tool: "metronome",
    callEmergencyIf: [
      "The person does not respond and is not breathing or is only gasping. Call before you start.",
    ],
    signs: [
      "Does not respond when you tap their shoulders and shout.",
      "Not breathing, or only gasping now and then.",
      "Lips or skin may look grey or blue.",
    ],
    steps: [
      {
        action: "Tap their shoulders and shout to check if they respond.",
        detail: "No response and no normal breathing, or only gasping, means start CPR now.",
      },
      {
        action: "Call emergency services and put the phone on speaker.",
        detail: "If someone is with you, have them call while you start.",
      },
      {
        action: "Send someone to bring an AED.",
        detail: "If you are alone, do not leave the person to look for one. Start pushing.",
      },
      {
        action: "Lay them on their back on a firm surface.",
        detail: "Kneel beside their chest.",
      },
      {
        action: "Put the heel of one hand on the center of the chest.",
        detail: "Put your other hand on top and interlock your fingers. Keep your arms straight.",
      },
      {
        action: "Push hard and fast in the center of the chest.",
        detail:
          "5 to 6 cm (2 to 2.4 in) deep, 100 to 120 pushes a minute. Let the chest rise fully after each push.",
      },
      {
        action: "Keep pushing with as few pauses as possible.",
        detail:
          "If you are trained and willing, give 2 rescue breaths after every 30 pushes. If not, keep pushing without breaths.",
      },
      {
        action: "Turn on the AED as soon as it arrives and follow its prompts.",
        detail:
          "Stick the pads on the bare chest as the pictures show. Stand clear when it says so, then start pushing again right away.",
      },
      {
        action: "Swap with another person every 2 minutes if you can.",
        detail: "Switch quickly so the pushing barely stops.",
      },
      {
        action: "Keep going until help takes over or they breathe normally.",
        detail: "If they start breathing normally, roll them onto their side and keep watching their breathing.",
      },
    ],
    donts: [
      "Do not wait for gasping to stop before you start. Gasping is not normal breathing.",
      "Do not stop pushing to check for a pulse.",
      "Do not leave them alone to fetch an AED if no one else is there.",
      "Do not move them unless the place is unsafe.",
    ],
    afterCare: [
      "Stay with them until responders take over.",
      "Tell responders when you started CPR and how many shocks the AED gave.",
      "Doing CPR can be upsetting. Talk to someone about it afterward.",
    ],
    related: ["choking", "heart-attack"],
    source: "AHA and ERC 2025 guidelines, Red Cross",
  },
  {
    id: "choking",
    title: "Choking",
    summary: "For an adult or child who cannot breathe, cough or speak.",
    icon: "wind",
    urgency: "life-threatening",
    callEmergencyIf: [
      "They cannot breathe, cough or speak.",
      "They become unresponsive.",
      "The blockage does not clear after the first cycle of blows and thrusts.",
    ],
    signs: [
      "Cannot speak, cough or breathe.",
      "Clutches at the throat.",
      "Squeaky, noisy breathing, or none at all.",
      "Weak cough that is getting quieter.",
      "Lips or face turning blue or grey.",
    ],
    steps: [
      {
        action: "Ask if they are choking.",
        detail: "If they can cough hard or speak, tell them to keep coughing and stay with them.",
      },
      {
        action: "Have someone call emergency services while you help.",
      },
      {
        action: "Stand behind them, slightly to one side, and lean them forward.",
      },
      {
        action: "Give up to 5 sharp back blows between the shoulder blades.",
        detail: "Use the heel of your hand. Check after each blow whether the blockage has cleared.",
      },
      {
        action: "Give up to 5 abdominal thrusts.",
        detail:
          "Put your fist just above the belly button, grab it with your other hand, and pull sharply in and up.",
      },
      {
        action: "Repeat 5 back blows and 5 thrusts until it clears.",
        detail: "Keep going until the object comes out, they can breathe, or they stop responding.",
      },
      {
        action: "For a pregnant or large person, give chest thrusts instead.",
        detail: "Put your fist on the middle of the breastbone and pull sharply straight back.",
      },
      {
        action: "For a baby under 1, use back blows and chest thrusts only.",
        detail:
          "Lay the baby face down along your forearm, head lower than the body, and give 5 back blows. Turn them face up, head still low, and give 5 sharp chest thrusts in the center of the chest, just below the nipple line, with the heel of one hand or two thumbs. Push in about a third of the chest depth.",
      },
      {
        action: "If they stop responding, lower them to the floor and start CPR.",
        detail:
          "Call emergency services if no one has. Before rescue breaths, look in the mouth and remove any object you can see.",
      },
    ],
    donts: [
      "Do not give back blows or thrusts while they can still cough hard.",
      "Do not sweep a finger blindly in their mouth.",
      "Do not give abdominal thrusts to a baby under 1.",
      "Do not give them food or water to wash it down.",
    ],
    afterCare: [
      "Anyone who had abdominal or chest thrusts should see a doctor, as thrusts can cause internal injury.",
      "See a doctor if coughing, pain or trouble swallowing continues.",
    ],
    related: ["cpr"],
    source: "AHA and ERC 2025 guidelines, Red Cross, NHS",
  },
  {
    id: "severe-bleeding",
    title: "Severe bleeding",
    summary: "Stop heavy bleeding from a wound with firm, direct pressure.",
    icon: "droplets",
    urgency: "life-threatening",
    callEmergencyIf: [
      "Blood is spurting or pooling, or will not stop.",
      "Bleeding continues after 10 minutes of firm pressure.",
      "The wound is deep, or on the chest, abdomen, neck or head.",
      "The person is pale, cold, confused or faint.",
    ],
    signs: [
      "Blood spurting or pulsing from the wound.",
      "Blood pooling on the ground or soaking through clothing.",
      "Bleeding that does not slow with pressure.",
      "Pale, cold or clammy skin.",
      "Confusion, faintness or fast breathing.",
    ],
    steps: [
      {
        action: "Call emergency services now.",
        detail: "Put the phone on speaker so your hands are free.",
      },
      {
        action: "Protect your hands with gloves or a plastic bag if you can.",
        detail: "Do not delay pressure to look for them.",
      },
      {
        action: "Press firmly and directly on the wound with a clean cloth.",
        detail: "Use gauze, a towel or clothing. Use your bare hands if nothing else is close.",
      },
      {
        action: "Keep pressing hard without lifting to check.",
        detail: "Hold steady pressure for at least 10 minutes. Lean your body weight into it.",
      },
      {
        action: "If blood soaks through, add more cloth on top and press harder.",
        detail: "Leave the first layer in place.",
      },
      {
        action: "Use a tourniquet on an arm or leg if pressure does not stop it.",
        detail:
          "Use a manufactured tourniquet if there is one. Place it 5 to 7 cm (2 to 3 in) above the wound, not on a joint. Tighten until the bleeding stops, even though it hurts. Note the time.",
      },
      {
        action: "If something is stuck in the wound, press around it.",
        detail: "Pad around the object to hold it still.",
      },
      {
        action: "Lay them down and keep them warm until help arrives.",
        detail: "Watch for signs of shock: pale, cold, clammy skin and fast breathing.",
      },
    ],
    donts: [
      "Do not pull out an object stuck in the wound.",
      "Do not lift the cloth to check the bleeding.",
      "Do not loosen or remove a tourniquet once it is on.",
      "Do not give them anything to eat or drink.",
    ],
    afterCare: [
      "Tell responders what time a tourniquet went on.",
      "Wash your hands and any skin that touched the blood.",
    ],
    related: ["shock", "cuts-and-scrapes"],
    source: "AHA and Red Cross first aid guidelines, ERC 2025",
  },
  {
    id: "heart-attack",
    title: "Heart attack",
    summary: "Chest pain or pressure that may spread to the arm, jaw or back.",
    icon: "heart",
    urgency: "life-threatening",
    callEmergencyIf: [
      "Chest pain or pressure lasts more than a few minutes, or goes away and returns.",
      "There is shortness of breath, cold sweat, nausea or pain spreading to the arm, jaw or back.",
    ],
    signs: [
      "Chest pain, pressure, squeezing or tightness.",
      "Pain spreading to the arm, neck, jaw, back or stomach.",
      "Shortness of breath.",
      "Cold sweat, nausea or lightheadedness.",
      "In women, older adults and people with diabetes: tiredness, nausea or breathlessness without chest pain.",
    ],
    steps: [
      {
        action: "Call emergency services now.",
        detail: "Do not drive them yourself unless there is no other way. Do not let them drive.",
      },
      {
        action: "Help them sit down and rest.",
        detail: "Half sitting, leaning back with knees bent, often eases breathing.",
      },
      {
        action: "Loosen tight clothing.",
      },
      {
        action: "Give one adult aspirin to chew if it is safe.",
        detail:
          "300 mg (US: 325 mg, or four 81 mg low-dose tablets), chewed slowly. Only for an adult who is awake, not allergic to aspirin, has no bleeding problem and has not been told by a doctor to avoid it.",
      },
      {
        action: "Help them take their own prescribed chest pain medicine.",
        detail: "For example, nitroglycerin spray or tablets, as their doctor told them.",
      },
      {
        action: "Stay with them and keep them calm.",
        detail: "Note when the pain started and watch their breathing.",
      },
      NOT_BREATHING_CPR,
    ],
    donts: [
      "Do not wait to see if the pain goes away.",
      "Do not let them walk around or exert themselves.",
      "Do not give aspirin to a child or anyone allergic to it.",
      "Do not give them anything else to eat or drink.",
    ],
    afterCare: [
      "Tell responders if they took aspirin, and when.",
      "Even if the pain eases, they still need to be checked in hospital.",
    ],
    related: ["cpr", "shock"],
    source: "AHA 2025 guidelines, Red Cross, NHS",
  },
  {
    id: "stroke",
    title: "Stroke",
    summary: "Use FAST to spot a stroke. Every minute counts.",
    icon: "brain",
    urgency: "life-threatening",
    callEmergencyIf: [
      "Any one FAST sign appears, even if it goes away.",
      "There is a sudden severe headache, confusion, loss of vision or loss of balance.",
    ],
    signs: [
      "Face drooping on one side.",
      "Weakness or numbness in an arm or leg, often on one side.",
      "Slurred or strange speech, or trouble understanding.",
      "Sudden loss of vision or balance.",
      "Sudden severe headache.",
    ],
    steps: [
      {
        action: "Face: ask them to smile and check if one side droops.",
      },
      {
        action: "Arms: ask them to raise both arms and check if one drifts down.",
      },
      {
        action: "Speech: ask them to repeat a simple phrase and listen for slurring.",
      },
      {
        action: "Time: if you see any sign, call emergency services now.",
        detail: "Say the word stroke.",
      },
      {
        action: "Note the time the symptoms started.",
        detail: "If they woke up with symptoms, note when they were last seen well. Tell the responders.",
      },
      {
        action: "Help them rest with the head and shoulders slightly raised.",
        detail: "If they vomit or become drowsy, roll them onto their side.",
      },
      NOT_BREATHING_CPR,
    ],
    donts: [
      "Do not give food, drink or medicine, including aspirin.",
      "Do not wait to see if the signs go away.",
      "Do not drive them yourself unless there is no other way.",
    ],
    afterCare: ["Tell responders what medicines they take, especially blood thinners."],
    related: ["cpr", "heart-attack"],
    source: "AHA/ASA, Red Cross, NHS",
  },
  {
    id: "anaphylaxis",
    title: "Severe allergic reaction",
    summary: "Anaphylaxis: trouble breathing, swelling or hives after a trigger.",
    icon: "syringe",
    urgency: "life-threatening",
    callEmergencyIf: [
      "There is trouble breathing, wheezing or a tight throat.",
      "The face, lips or tongue are swelling.",
      "They are dizzy, faint or have widespread hives after a sting, food or medicine.",
      "An epinephrine auto-injector has been used, even if they feel better.",
    ],
    signs: [
      "Trouble breathing, wheezing or a tight throat.",
      "Swelling of the lips, tongue, face or throat.",
      "Widespread hives, itching or flushing.",
      "Dizziness, fainting or confusion.",
      "Vomiting or stomach cramps after a trigger.",
    ],
    steps: [
      {
        action: "Use their epinephrine auto-injector right away.",
        detail:
          "Also called adrenaline, EpiPen or similar. Follow the instructions on the device. If they do not have one, call emergency services now.",
      },
      {
        action: "Press it firmly into the outer thigh and hold it there.",
        detail: "It works through clothing. Hold for as long as the device says.",
      },
      {
        action: "Call emergency services and say anaphylaxis.",
      },
      {
        action: "Remove the trigger if you can do it quickly.",
        detail: "Scrape away a stinger. Stop any food or medicine that caused it.",
      },
      {
        action: "Lay them down and raise their legs.",
        detail:
          "If breathing is hard, let them sit up. If they are pregnant, lay them on their left side. Keep them lying or sitting, even if they feel better.",
      },
      {
        action: "Use a second auto-injector after 5 minutes if they are no better.",
        detail: "Use the other thigh.",
      },
      NOT_BREATHING_CPR,
    ],
    donts: [
      "Do not wait to see if symptoms improve before using the auto-injector.",
      "Do not let them stand up or walk, even if they feel better.",
      "Do not give an antihistamine instead of epinephrine.",
      "Do not leave them alone.",
    ],
    afterCare: [
      "They must go to hospital, even if they feel better. Symptoms can come back hours later.",
      "Give the used auto-injector to the responders.",
      "They need a replacement auto-injector and a follow-up with their doctor.",
    ],
    related: ["bites-and-stings", "cpr"],
    source: "Resuscitation Council UK, AHA, Red Cross, NHS",
  },
  {
    id: "shock",
    title: "Shock",
    summary: "Pale, cold, clammy skin and a fast pulse after injury or illness.",
    icon: "activity",
    urgency: "life-threatening",
    callEmergencyIf: [
      "The skin is pale, cold and clammy with fast breathing or a fast, weak pulse.",
      "They are confused, very drowsy or faint after an injury, bleeding or severe illness.",
    ],
    signs: [
      "Pale, cold, clammy skin.",
      "Fast, weak pulse.",
      "Fast, shallow breathing.",
      "Dizziness, weakness or fainting.",
      "Confusion, anxiety or drowsiness.",
      "Thirst or nausea.",
    ],
    steps: [
      {
        action: "Call emergency services now.",
      },
      {
        action: "Treat the cause, such as pressing on a bleeding wound.",
      },
      {
        action: "Lay them flat on their back.",
        detail:
          "If you suspect a head, neck or spine injury, do not move them. If they have trouble breathing, let them sit up.",
      },
      {
        action: "Loosen tight clothing at the neck, chest and waist.",
      },
      {
        action: "Cover them with a coat or blanket.",
        detail: "Keep them warm, not hot. Put something under them if they are on cold ground.",
      },
      {
        action: "Stay with them and keep checking their breathing.",
        detail: "Reassure them. If they stop responding but are breathing, roll them onto their side.",
      },
      NOT_BREATHING_CPR,
    ],
    donts: [
      "Do not give them anything to eat or drink.",
      "Do not let them get up or walk around.",
      "Do not move them if you suspect a head, neck or spine injury.",
      "Do not leave them alone.",
    ],
    afterCare: ["Tell responders what happened and any changes you noticed."],
    related: ["severe-bleeding", "anaphylaxis"],
    source: "Red Cross, AHA first aid guidelines, NHS",
  },
  {
    id: "seizures",
    title: "Seizures",
    summary: "Keep the person safe until the seizure stops by itself.",
    icon: "zap",
    urgency: "life-threatening",
    callEmergencyIf: [
      "The seizure lasts more than 5 minutes.",
      "A second seizure follows, or they do not wake up afterward.",
      "It is their first seizure.",
      "They are pregnant, diabetic, injured or it happened in water.",
      "They have trouble breathing afterward.",
    ],
    signs: [
      "Sudden collapse, stiffening and jerking of the body.",
      "Not responding, or staring blankly.",
      "Noisy breathing, drooling or a bitten tongue.",
      "Loss of bladder or bowel control.",
      "Confusion and sleepiness afterward.",
    ],
    steps: [
      {
        action: "Note the time the seizure starts.",
        detail: "Call emergency services if it lasts more than 5 minutes.",
      },
      {
        action: "Move hard or sharp objects away from them.",
      },
      {
        action: "Cushion their head with something soft.",
        detail: "A folded jacket works.",
      },
      {
        action: "Loosen anything tight around the neck.",
      },
      {
        action: "Stay with them and let the seizure run its course.",
        detail: "Most seizures stop by themselves within a few minutes.",
      },
      {
        action: "When the jerking stops, roll them onto their side.",
        detail: "Tilt the head back slightly to keep the airway open. Check they are breathing normally.",
      },
      {
        action: "Stay with them until they are fully awake.",
        detail: "Speak calmly. They may be confused for a while.",
      },
    ],
    donts: [
      "Do not hold them down or try to stop the movements.",
      "Do not put anything in their mouth.",
      "Do not give food or drink until they are fully awake.",
      "Do not move them unless they are in danger.",
    ],
    afterCare: [
      "Tell them what happened and how long it lasted.",
      "Let them rest. They may be tired and confused for some time.",
    ],
    related: ["cpr"],
    source: "Epilepsy Foundation, Red Cross, NHS",
  },
  {
    id: "burns",
    title: "Burns",
    summary: "Cool the burn with running water, then cover it loosely.",
    icon: "flame",
    urgency: "soon",
    callEmergencyIf: [
      "The burn is larger than the person's hand.",
      "The skin is white, charred or leathery.",
      "It is on the face, hands, feet, genitals or over a joint.",
      "It was caused by chemicals, electricity or an explosion.",
      "The person breathed in smoke, or is a baby or an older adult.",
    ],
    signs: [
      "Red, painful skin.",
      "Blisters.",
      "Swelling around the area.",
      "White, charred or leathery skin, which may not hurt.",
    ],
    steps: [
      {
        action: "Stop the burning and get away from the heat.",
        detail:
          "If clothing is on fire: stop, drop and roll. For an electrical burn, turn off the power before you touch them. For a chemical burn, put on gloves, brush off any powder and remove soaked clothing, then rinse for at least 20 minutes.",
      },
      {
        action: "Cool the burn under cool running water for 20 minutes.",
        detail: "Start as soon as you can. Use cool tap water, not ice-cold. Keep the rest of the body warm.",
        timerSec: 1200,
      },
      {
        action: "Remove rings, watches and clothing near the burn.",
        detail: "Do it before swelling starts. Leave anything stuck to the skin.",
      },
      {
        action: "Cover the burn loosely with cling film or a clean non-fluffy dressing.",
        detail: "Lay cling film over the burn in strips; do not wrap a limb tightly. A clean plastic bag works for a hand.",
      },
      {
        action: "Give pain relief if needed.",
        detail: "Paracetamol or ibuprofen, following the dose on the pack.",
      },
    ],
    donts: [
      "Do not use ice, iced water, butter, oil or creams.",
      "Do not pop blisters.",
      "Do not pull off clothing stuck to the burn.",
      "Do not use fluffy dressings or cotton wool.",
    ],
    afterCare: [
      "See a doctor for any burn larger than their palm, or any deep burn.",
      "See a doctor if it becomes more painful, red or swollen, leaks pus, or a fever starts.",
    ],
    related: ["shock"],
    source: "NHS, Red Cross, AHA first aid guidelines",
  },
  {
    id: "poisoning",
    title: "Poisoning",
    summary: "Swallowed, inhaled or spilled something harmful.",
    icon: "skull",
    urgency: "life-threatening",
    callEmergencyIf: [
      "They are unresponsive, having a seizure or struggling to breathe.",
      "The lips or mouth are burned.",
      "You suspect an opioid overdose.",
      "You do not know what or how much they took.",
    ],
    signs: [
      "Empty pill packets or open chemicals nearby.",
      "Burns or redness around the mouth.",
      "Vomiting, drowsiness or confusion.",
      "Trouble breathing.",
      "Unusual smell on the breath.",
    ],
    steps: [
      {
        action: "Make sure the area is safe for you.",
        detail: "For gas or fumes, get them to fresh air only if you can do it safely.",
      },
      {
        action: "If they are unresponsive or struggling to breathe, call emergency services.",
      },
      {
        action: "Otherwise call poison control and follow their advice.",
        detail: "US: 1-800-222-1222. UK: call 111. Elsewhere, call your local poison center.",
      },
      {
        action: "Find out what they took, how much and when.",
        detail: "Keep the container, label or plant to show responders.",
      },
      {
        action: "If you suspect an opioid overdose, give naloxone if you have it.",
        detail:
          "Call emergency services. If they are not breathing normally, start CPR first. Spray it into one nostril. Give a second dose after 2 to 3 minutes if they do not wake up.",
      },
      {
        action: "Rinse poison off the skin with running water for 15 to 20 minutes.",
        detail: "Remove contaminated clothing first. Wear gloves if you can.",
      },
      {
        action: "Rinse poison out of the eye with lukewarm water for 15 to 20 minutes.",
      },
      {
        action: "If they stop responding but are breathing, roll them onto their side.",
        detail:
          "If they are not breathing normally, start CPR. If there is poison on their mouth, push on the chest without giving breaths.",
      },
    ],
    donts: [
      "Do not make them vomit.",
      "Do not give anything to eat or drink unless poison control tells you to.",
      "Do not wait for symptoms before calling for advice.",
      "Do not go into a room with gas or fumes if it is not safe.",
    ],
    afterCare: [
      "Follow up with a doctor even if they seem fine.",
      "Keep medicines and chemicals locked away and out of reach.",
    ],
    related: ["cpr", "seizures"],
    source: "Poison Control (US), AHA 2025 guidelines, NHS",
  },
  {
    id: "fractures-and-sprains",
    title: "Fractures and sprains",
    summary: "Support an injured bone or joint and keep it still.",
    icon: "bone",
    urgency: "soon",
    callEmergencyIf: [
      "Bone is showing through the skin or the limb looks deformed.",
      "You suspect a head, neck, back, hip or thigh injury.",
      "The limb is numb, cold, pale or blue below the injury.",
      "There is heavy bleeding.",
    ],
    signs: [
      "Pain, swelling or bruising.",
      "Cannot move it or put weight on it.",
      "The limb looks bent or out of shape.",
      "A snap or grinding felt at the time of injury.",
    ],
    steps: [
      {
        action: "Keep the injured part still.",
        detail: "Do not try to straighten it.",
      },
      {
        action: "Support it in the position you found it.",
        detail: "Use a sling, rolled towel, pillow or padded splint.",
      },
      {
        action: "Cover any open wound with a clean dressing.",
        detail: "If bone is showing, press around it, not on it, to control bleeding.",
      },
      {
        action: "Apply a cold pack wrapped in cloth for up to 20 minutes.",
        detail: "Repeat every 2 to 3 hours.",
      },
      {
        action: "Check that fingers or toes below the injury stay warm and pink.",
        detail: "If they turn numb, cold, pale or blue, loosen the splint and get help fast.",
      },
      {
        action: "For a sprain, rest it and raise it above the heart.",
        detail: "Wrap it in an elastic bandage that is snug, not tight.",
      },
      {
        action: "Get medical care if they cannot use it or put weight on it.",
      },
    ],
    donts: [
      "Do not try to straighten a broken bone or push it back in.",
      "Do not let them walk on an injured leg.",
      "Do not put ice directly on the skin.",
      "Do not move them if you suspect a neck or back injury.",
    ],
    afterCare: [
      "For a sprain, rest it for 2 to 3 days, then start moving it gently.",
      "See a doctor if pain or swelling does not improve in a few days.",
    ],
    related: ["severe-bleeding", "shock"],
    source: "Red Cross, NHS",
  },
  {
    id: "cuts-and-scrapes",
    title: "Cuts and scrapes",
    summary: "Clean and cover a minor wound.",
    icon: "bandage",
    urgency: "everyday",
    callEmergencyIf: [
      "Bleeding does not stop after 10 minutes of firm pressure.",
      "The cut is deep, gaping or has something stuck in it.",
    ],
    signs: [
      "A small cut or graze.",
      "Light bleeding that slows with gentle pressure.",
      "Skin scraped off the surface.",
    ],
    steps: [
      {
        action: "Wash your hands.",
      },
      {
        action: "Press on the cut with a clean cloth until it stops bleeding.",
      },
      {
        action: "Rinse the wound under clean running water.",
        detail: "Wash around it with soap. Remove dirt you can see.",
      },
      {
        action: "Pat it dry with a clean cloth.",
      },
      {
        action: "Apply a thin layer of petroleum jelly or antibiotic ointment.",
        detail: "Skip it if you have none.",
      },
      {
        action: "Cover it with a sterile bandage.",
      },
    ],
    donts: [
      "Do not use hydrogen peroxide or alcohol on the wound.",
      "Do not pull out anything deeply stuck in it.",
      "Do not touch the wound with dirty hands.",
    ],
    afterCare: [
      "Change the bandage every day or when it gets wet or dirty.",
      "See a doctor if it turns red, swollen or warm, or leaks pus.",
      "See a doctor for a bite, or a wound from a dirty or rusty object. They may need a tetanus shot.",
    ],
    related: ["severe-bleeding"],
    source: "Red Cross, NHS",
  },
  {
    id: "nosebleeds",
    title: "Nosebleeds",
    summary: "Lean forward and pinch the soft part of the nose.",
    icon: "droplet",
    urgency: "everyday",
    callEmergencyIf: [
      "Bleeding continues after 20 minutes of pinching.",
      "It follows a blow to the head or face.",
      "The person takes blood thinners and it will not stop.",
      "They feel faint or are swallowing a lot of blood.",
    ],
    signs: [
      "Blood dripping from one or both nostrils.",
      "Blood running down the back of the throat.",
      "Swallowing or spitting out blood.",
    ],
    steps: [
      {
        action: "Sit up and lean slightly forward.",
        detail: "Leaning forward stops blood running down the throat.",
      },
      {
        action: "Pinch the soft part of the nose, just below the bony bridge.",
      },
      {
        action: "Hold for 10 minutes without letting go.",
        detail: "Breathe through the mouth. Do not let go early to check.",
        timerSec: 600,
      },
      {
        action: "Spit out blood instead of swallowing it.",
      },
      {
        action: "If it is still bleeding, pinch for another 10 minutes.",
        timerSec: 600,
      },
    ],
    donts: [
      "Do not tilt the head back.",
      "Do not lie them down.",
      "Do not pack the nose with tissue or cotton wool.",
    ],
    afterCare: [
      "For 24 hours, avoid blowing or picking the nose, hard exercise and hot drinks.",
      "See a doctor if nosebleeds keep coming back.",
    ],
    related: [],
    source: "NHS, Red Cross",
  },
  {
    id: "heat-illness",
    title: "Heat exhaustion and heatstroke",
    summary: "Cool the person down fast. Heatstroke is an emergency.",
    icon: "sun",
    urgency: "life-threatening",
    callEmergencyIf: [
      "They are confused, slurring words, having a seizure or unresponsive.",
      "Their skin is very hot, whether dry or still sweaty.",
      "They are vomiting or not improving after 30 minutes of cooling.",
    ],
    signs: [
      "Heavy sweating and clammy skin.",
      "Very hot skin, which may be dry or still sweaty.",
      "Headache, dizziness or confusion.",
      "Feeling sick or vomiting.",
      "Cramps in the arms, legs or stomach.",
      "Fast breathing or pulse.",
    ],
    steps: [
      {
        action: "Move them to a cool, shaded place.",
      },
      {
        action: "Call emergency services now if they are confused or collapse.",
        detail: "This is heatstroke. Their skin may be dry or still sweaty.",
      },
      {
        action: "Lay them down and raise their feet slightly.",
      },
      {
        action: "Remove extra clothing.",
      },
      {
        action: "Cool their skin with water and moving air.",
        detail: "Spray or sponge them with cool water and fan them. Cold packs on the neck and armpits help too.",
      },
      {
        action: "Give sips of cool water or a sports drink if they are fully awake.",
        detail: "Only if they are not vomiting.",
      },
      {
        action: "Call emergency services if they are not better in 30 minutes.",
      },
      {
        action: "For heatstroke, cool them as fast as you can while help comes.",
        detail:
          "Cold water up to the neck works best if someone watches them closely. Otherwise soak them in cold water, fan them, and put ice packs on the neck, armpits and groin.",
      },
      {
        action: "If they stop responding but are breathing, roll them onto their side.",
        detail: "If they are not breathing normally, start CPR.",
      },
    ],
    donts: [
      "Do not give drinks to someone who is confused or not fully awake.",
      "Do not give paracetamol or aspirin to bring the temperature down.",
      "Do not give alcohol or caffeine.",
      "Do not leave them alone.",
    ],
    afterCare: [
      "Rest in a cool place and drink fluids for the rest of the day.",
      "Avoid heat and hard exercise for at least a day or two.",
    ],
    related: ["seizures", "cpr"],
    source: "AHA and Red Cross first aid guidelines, NHS",
  },
  {
    id: "hypothermia",
    title: "Hypothermia",
    summary: "Warm a dangerously cold person slowly and gently.",
    icon: "snowflake",
    urgency: "life-threatening",
    callEmergencyIf: [
      "They are confused, drowsy or slurring words.",
      "Shivering has stopped but they are still cold.",
      "Breathing is slow or the pulse is weak.",
      "They are unresponsive.",
    ],
    signs: [
      "Shivering, which may stop as it gets worse.",
      "Cold, pale skin.",
      "Slurred speech or confusion.",
      "Slow breathing.",
      "Tiredness, clumsiness or drowsiness.",
    ],
    steps: [
      {
        action: "Move them gently to a warm, dry place.",
        detail: "Handle them carefully. Rough movement can upset the heart rhythm.",
      },
      {
        action: "Remove wet clothing and replace it with dry layers.",
      },
      {
        action: "Wrap them in blankets, covering the head but not the face.",
        detail: "Insulate them from the ground. Add a foil blanket if you have one.",
      },
      {
        action: "Warm the chest, neck, head and groin first.",
        detail: "Use warm, not hot, packs wrapped in cloth, or skin-to-skin contact under blankets.",
      },
      {
        action: "Give warm, sweet drinks if they are fully awake and can swallow.",
        detail: "No alcohol.",
      },
      {
        action: "Stay with them and watch their breathing.",
      },
      NOT_BREATHING_CPR,
    ],
    donts: [
      "Do not rub or massage their arms and legs.",
      "Do not warm the arms and legs first.",
      "Do not use a hot bath, or put hot water bottles straight on the skin.",
      "Do not give alcohol.",
    ],
    afterCare: [
      "Get them checked by a doctor, even if they seem to recover.",
      "Keep them warm and resting for several hours.",
    ],
    related: ["cpr", "shock"],
    source: "Red Cross, AHA first aid guidelines, NHS",
  },
  {
    id: "bites-and-stings",
    title: "Insect bites and stings",
    summary: "Remove the stinger, cool the area and watch for an allergic reaction.",
    icon: "bug",
    urgency: "everyday",
    callEmergencyIf: [
      "There is trouble breathing, a swollen face or throat, widespread hives or dizziness.",
      "The sting is inside the mouth or throat.",
      "There are many stings at once.",
      "The person has a known severe allergy.",
    ],
    signs: [
      "Pain, redness and swelling where they were bitten.",
      "Itching or a raised bump.",
      "A stinger or tick still in the skin.",
    ],
    steps: [
      {
        action: "Move away from the insects.",
      },
      {
        action: "Scrape out a stinger sideways with a card edge or fingernail.",
      },
      {
        action: "Remove a tick with fine tweezers, pulling straight out.",
        detail: "Grip it as close to the skin as you can and pull slowly and steadily.",
      },
      {
        action: "Wash the area with soap and water.",
      },
      {
        action: "Hold a cold pack wrapped in cloth on it for 10 minutes.",
      },
      {
        action: "For itching, use an antihistamine or hydrocortisone cream.",
        detail: "Only if they can take it. Follow the pack.",
      },
      {
        action: "Watch them for 30 minutes for signs of a severe allergic reaction.",
        detail:
          "Trouble breathing, a swollen face or throat, or spreading hives: use their auto-injector and call emergency services.",
      },
    ],
    donts: [
      "Do not squeeze a stinger with tweezers or fingers.",
      "Do not twist a tick, burn it or cover it with oil.",
      "Do not scratch the bite.",
    ],
    afterCare: [
      "See a doctor if swelling keeps growing for more than 2 days.",
      "After a tick bite, see a doctor if a rash or fever appears in the next few weeks.",
    ],
    related: ["anaphylaxis"],
    source: "Red Cross, NHS",
  },
];

export function getGuide(id: string): Guide | undefined {
  return GUIDES.find((g) => g.id === id);
}
