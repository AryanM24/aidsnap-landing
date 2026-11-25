import type { LegalDoc } from "@/components/legal"

// Every factual statement here is checked against the app and server code (aidsnapv2). Change the code, change this.
export const privacy: LegalDoc = {
  slug: "privacy",
  title: "Privacy Policy",
  effective: "November 24, 2026",
  intro: [
    "This Privacy Policy explains how AidSnap Inc. (\"AidSnap,\" \"we,\" \"us\" or \"our\") collects, uses, discloses, stores and deletes personal information when you use the AidSnap mobile application (the \"App\") and the website at aidsnap.com (the \"Site\"), together the \"Services.\" It also explains the choices and rights you have.",
    "AidSnap is a first aid assistant. Using it can involve information about your health, which the law treats as sensitive. We have tried to describe plainly what happens to that information, including the parts that are handled by other companies on our behalf. If you live in Washington, Nevada or another state with a consumer health data law, our Consumer Health Data Privacy Policy also applies to you and forms part of this policy.",
    "AidSnap is not a health care provider, and it is not a covered entity or business associate under the Health Insurance Portability and Accountability Act (HIPAA). Information you give AidSnap is protected by this policy and by the consumer privacy laws that apply to you, not by HIPAA.",
  ],
  sections: [
    {
      id: "collect",
      heading: "Information we collect",
      body: [
        "Account information. To use the App you create an account with an email address and a password. Sign-in is handled by Firebase Authentication, a Google service. We never store your password. If you reset it, the new password passes through our server, over an encrypted connection, on its way to Firebase, and we do not keep it.",
        "Medical ID. You may choose to fill in a Medical ID: your name, date of birth, sex, height, weight, blood type, phone number, allergies, medical conditions, medications and pregnancies. Every field is optional and entered by you, and you can change or clear any of it at any time.",
        "Emergency contacts and insurance cards. You may add emergency contacts, either by typing them or by choosing them one at a time from your phone's contacts. For each, we store the name, relationship and phone number you choose, and which contact is primary. AidSnap never reads your address book as a whole. You may also store insurance card details (provider, member ID and group number) and a photo of the card.",
        "Conversations. When you use the chat, we collect the messages you send, the photos you attach and the replies AidSnap gives. When you use AidSnap Live, the voice mode, your microphone audio and, if you turn the camera on, about one camera frame per second are streamed for the length of the session, and a written transcript of what you and the assistant said is saved to your conversation when the session ends. We do not record or store the audio or the camera frames themselves.",
        "Things AidSnap remembers. If the \"Remember things about me\" setting is on, AidSnap may save short facts you share in conversation so that later answers fit you, for example that you work night shifts or that a family member uses an inhaler. AidSnap keeps at most 100 such facts. It never copies your Medical ID into them. You can see, delete or turn off these facts in Settings, under Memory.",
        "Health and fitness data you connect. Connecting a health source is optional and off by default. Section 3 explains exactly what AidSnap reads from Apple Health, Health Connect, WHOOP, Oura, Withings and Dexcom, and when.",
        "Device and technical information. With each request, the App sends your device language, region and time zone, so that answers use the right emergency number, units and times. Like any internet service, our servers and our providers' servers receive your IP address and basic connection information when the App or Site contacts them, and may keep it in short-lived operational logs used for security and troubleshooting. App settings such as your theme and voice preference, your sign-in session and which health sources are switched on are stored on your device.",
        "Information we do not collect. AidSnap does not request or collect your location. The emergency number it shows comes from the region setting of your device. Reminders and timer alerts are scheduled on your device, so we do not collect a push notification token. The App and the Site contain no advertising and no analytics or tracking software, and the Site sets no cookies of its own.",
      ],
    },
    {
      id: "use",
      heading: "How we use your information",
      body: [
        "We use personal information only to provide and protect the Services. Specifically, we use it to answer your questions with first aid guidance that takes your Medical ID, connected health data and remembered facts into account, for example by warning you before suggesting a medicine you are allergic to; to show your Medical ID, emergency contacts and insurance cards back to you; to show the right emergency numbers for your region and to offer a call to emergency services or one of your contacts; to schedule the reminders and timer alerts you ask for; to keep your conversation history so you can return to it; to send you account emails, which are a welcome message, a link to verify your email address, password reset links, and notices that your password changed or your account is being deleted; and to operate, secure, debug and improve the reliability of the Services.",
        "AidSnap never places a call on its own. A call is made only when you tap a call button, and calls to emergency services ask you to confirm first. The call itself is placed by your phone's dialer, not by AidSnap, and we do not receive its contents.",
        "We do not use your information for advertising or marketing, we do not sell it, and we do not share it for cross-context behavioral advertising. We do not use your conversations or health data to train AI models.",
      ],
    },
    {
      id: "health",
      heading: "Health and fitness data",
      body: [
        "You choose each health connection on the Connections screen, and you can turn any of them off at any time. Health and fitness data is used only to answer your questions. It is never used for advertising, never sold and never shared with data brokers.",
        "Apple Health and Health Connect. With your permission, the App can read the following types from your phone's health store: heart rate, resting heart rate and heart rate variability; steps, distance, active energy, exercise and stand time; sleep; blood oxygen, respiratory rate, body temperature and blood pressure; weight, height, body mass index and body fat; blood glucose; workouts; and, on iPhone, high, low and irregular heart rhythm events. The App reads only what a question needs, when you ask it. The values it reads, and a short summary of your latest readings that travels with each request, are sent to our server and to Google Gemini so the answer can use them. The values become part of that conversation's history, which you can delete with the conversation or your account. AidSnap never writes to Apple Health or Health Connect. Apple Health data is never used for advertising, in keeping with Apple's rules.",
        "WHOOP, Oura, Withings and Dexcom. When you connect one of these services, you sign in with that company, and it gives our server an access token. We store that token encrypted, using AES-256-GCM. AidSnap uses the token only to read the values a question needs, when you ask it. Those values are sent to Google Gemini with your question and become part of that conversation's history. Apart from that, we keep only the time of the last read.",
        "Turning it off. Turning off Apple Health or Health Connect stops all reading. Disconnecting a wearable revokes its token with that company where the company allows it, and deletes the token from our server. Deleting your account removes every stored token.",
      ],
    },
    {
      id: "ai",
      heading: "How answers are generated",
      body: [
        "AidSnap's answers are generated by Google's Gemini models. To generate a chat answer, our server sends Google your message, any photo you attached, the recent messages of that conversation, the facts AidSnap remembers about you, any connected health data described in Section 3, your device language, region and time zone, and a summary of your Medical ID: your name, age, sex, height, weight, blood type, allergies, conditions, medications and pregnancies, and the names and relationships of your emergency contacts. Your emergency contacts' phone numbers reach our server but are not sent to Google.",
        "When you start AidSnap Live, the same summary is sent to Google to set up the session. Your microphone audio and camera frames then stream directly from your device to Google's Gemini Live service, and its spoken replies stream back. We do not record or store the audio or frames.",
        "To answer some questions, AidSnap may also search a fixed list of trusted medical websites through Tavily, a search provider, which receives the search terms the assistant writes from your question, and may look up a medicine in the U.S. National Library of Medicine's RxNav and the U.S. Food and Drug Administration's openFDA databases, which receive the medicine's name. None of these lookups includes your name, account or Medical ID.",
        "Google processes the information it receives under its terms for the Gemini API. AI can make mistakes. AidSnap's answers are first aid guidance, not a diagnosis, as our Terms of Service explain.",
      ],
    },
    {
      id: "disclose",
      heading: "How we disclose information",
      body: [
        "We disclose personal information only to service providers that process it on our behalf and under our instructions, and only as needed to run the Services:",
        {
          list: [
            "Google, for Firebase Authentication, Cloud Firestore and Cloud Storage (your account, Medical ID, emergency contacts and insurance cards) and the Gemini API (generating answers)",
            "Railway, which hosts our server and the databases that hold conversations, remembered facts and encrypted wearable tokens",
            "Resend, which delivers account emails and receives your email address and the content of those emails, which never includes health information",
            "Vercel, which hosts the Site",
            "Tavily, for searches of trusted medical websites",
            "WHOOP, Oura, Withings and Dexcom, only if you connect them, as the source of the readings you ask about",
          ],
        },
        "We may also disclose information when we believe in good faith that the law requires it, such as in response to a valid subpoena or court order; when it is necessary to protect the life or safety of any person; or as part of a merger, acquisition or sale of assets, in which case this policy will continue to apply to your information. We will not otherwise disclose your information to third parties.",
      ],
    },
    {
      id: "storage",
      heading: "Where your information is stored",
      body: [
        "Your account, Medical ID, emergency contacts and insurance card details are stored in Google Cloud Firestore, and insurance card photos in Google Cloud Storage, under your account. Security rules enforced by Google's servers allow only your own signed-in account to read or change them. Google encrypts this data at rest.",
        "Your conversations, attached photos, Live transcripts, remembered facts and encrypted wearable tokens are stored in databases on our server, keyed to your account. Every request to our server must carry your signed-in session, and the server only ever returns your own conversations.",
      ],
    },
    {
      id: "retention",
      heading: "How long we keep information",
      body: [
        "We keep your account, Medical ID, contacts and insurance cards until you change or delete them, or delete your account. We keep each conversation, with its photos, transcripts and any health values read during it, until you delete it or your account. We keep remembered facts until you delete them, turn memory off and delete them, or delete your account. We keep a wearable's access token until you disconnect it or delete your account. Operational logs are kept for a short period for security and troubleshooting and then discarded.",
        "When you delete your account, we delete all of the above. Emails already sent to you, and the records of them, are handled under Resend's own retention terms. Information already sent to Google to generate an answer is handled under Google's own retention terms for the Gemini API.",
      ],
    },
    {
      id: "choices",
      heading: "Your choices and how to delete your data",
      body: [
        "You can edit or clear your Medical ID and delete emergency contacts and insurance cards in the App at any time. You can delete any conversation. You can see, delete or turn off remembered facts in Settings, under Memory. You can turn off any health connection on the Connections screen, and you can revoke AidSnap's access to Apple Health or Health Connect in your phone's settings.",
        "You can delete your account in the App, in Settings, under Account. This permanently deletes your conversations and Live transcripts, remembered facts, wearable connections and their tokens, your Medical ID, emergency contacts, insurance cards and card photos, and your account. It cannot be undone. If you cannot open the App, see aidsnap.com/delete-account to ask us to delete it for you.",
      ],
    },
    {
      id: "rights",
      heading: "Your privacy rights",
      body: [
        "Depending on where you live, you may have the right to know what personal information we hold about you and to receive a copy of it in a portable format; to correct it; to delete it; to restrict or object to how we process it; to withdraw consent you have given; and not to be discriminated against for exercising these rights. Most of these you can exercise directly in the App. For anything else, email us at the address in Section 14.",
        "We will verify your request by confirming it comes from the email address on your account, and we will respond within the time the law requires, generally within 30 days in the EEA and UK and 45 days under U.S. state laws. You may use an authorized agent where the law allows it. If we decline your request, you may appeal by replying to our decision with the subject \"Appeal,\" and we will respond to your appeal within the time the law requires. If you are not satisfied, you may contact your state attorney general or your local data protection authority.",
        "California residents. Under the California Consumer Privacy Act, as amended, in the past 12 months we have collected the categories of information described in Section 1, including identifiers, sensitive personal information (account credentials and health information) and audio and visual information, from you and your device, for the purposes in Section 2. We have disclosed them to the service providers in Section 5 for business purposes. We do not sell or share personal information, and we use sensitive personal information only to provide the Services you ask for, so there is no need to opt out or to limit its use.",
      ],
    },
    {
      id: "eea",
      heading: "Users in the EEA and the United Kingdom",
      body: [
        "AidSnap Inc. is the controller of your personal information. We process your account and conversation information because it is necessary to provide the Services under our Terms of Service. We process health information, a special category of data, on the basis of your explicit consent, which you give when you enter it, connect a health source or describe a health situation to the assistant; you may withdraw that consent at any time by deleting the information or your account. We process technical information for security on the basis of our legitimate interest in keeping the Services safe.",
        "Your information is processed in the United States and in other countries where our service providers operate, which may not have the same data protection laws as your country. Where the law requires it, these transfers rely on the European Commission's Standard Contractual Clauses, and the UK addendum to them, included in our providers' data processing terms. You may ask us for details of these safeguards.",
      ],
    },
    {
      id: "security",
      heading: "Security",
      body: [
        "We protect your information with measures appropriate to its sensitivity. All traffic between the App, the Site and our servers is encrypted in transit. Access to your stored information is limited to your signed-in account by server-enforced rules, and wearable tokens are encrypted at rest. No method of transmission or storage is completely secure, and we cannot guarantee absolute security. If a breach affects your personal information, we will notify you and the relevant authorities as the law requires.",
      ],
    },
    {
      id: "children",
      heading: "Children",
      body: [
        "AidSnap is not intended for children under 13, and we do not knowingly collect personal information from them. If you believe a child under 13 has given us personal information, contact us and we will delete it.",
      ],
    },
    {
      id: "changes",
      heading: "Changes to this policy",
      body: [
        "We may update this policy as the Services change. We will post the new version here with a new effective date. If a change materially affects how we use information we already hold, we will tell you in the App before it takes effect and, where the law requires it, ask for your consent.",
      ],
    },
    {
      id: "contact",
      heading: "Contact us",
      body: [
        "If you have questions about this policy or want to exercise your rights, email AidSnap Inc. at aryan.mittal@aidsnap.com.",
      ],
    },
  ],
}
