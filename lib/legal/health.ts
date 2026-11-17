import type { LegalDoc } from "@/components/legal"

// Every factual statement here must match lib/legal/privacy.ts, which is checked against the app and server code. Change one, change both.
export const health: LegalDoc = {
  slug: "consumer-health-data",
  title: "Consumer Health Data Privacy Policy",
  effective: "November 17, 2026",
  intro: [
    "This Consumer Health Data Privacy Policy explains how AidSnap Inc. (\"AidSnap,\" \"we,\" \"us\" or \"our\") collects, uses, shares and deletes consumer health data when you use the AidSnap mobile application (the \"App\") and the website at aidsnap.com (the \"Site\"), together the \"Services.\" It is the consumer health data privacy policy required by the Washington My Health My Data Act (RCW 19.373), and it also applies to consumers covered by the consumer health data provisions of Nevada law (SB 370) and Connecticut law.",
    "This policy forms part of, and should be read with, our Privacy Policy, which describes the rest of the personal information we handle. If the two differ on how we treat consumer health data, this policy controls. AidSnap is not a health care provider, and it is not a covered entity or business associate under the Health Insurance Portability and Accountability Act (HIPAA).",
  ],
  sections: [
    {
      id: "scope",
      heading: "Who this applies to and what consumer health data means here",
      body: [
        "This policy applies to you if you use the Services and you are a consumer under the Washington My Health My Data Act, the Nevada law or the Connecticut law, which includes a person who lives in one of those states and, in Washington, a person whose consumer health data is collected in that state. If you do not live in one of those states, our Privacy Policy still applies to you, and we handle your health information in the same way.",
        "\"Consumer health data\" means personal information that is linked or reasonably linkable to you and that identifies your past, present or future physical or mental health status, as those laws define it. In AidSnap, we treat the following as consumer health data:",
        {
          list: [
            "The fields of your Medical ID: your name, date of birth, sex, height, weight, blood type, phone number, allergies, medical conditions, medications and pregnancies, to the extent you fill them in",
            "Health and fitness data read from Apple Health or Health Connect, and from WHOOP, Oura, Withings and Dexcom if you connect them, such as heart rate, sleep, blood oxygen, blood pressure, blood glucose and workouts",
            "Health information you describe in a chat or in an AidSnap Live session, including in messages, photos, voice and, if you turn the camera on, camera frames, and the written transcript of a Live session",
            "Facts about your health that AidSnap remembers when the \"Remember things about me\" setting is on, such as that a family member uses an inhaler",
            "Information we infer from any of the above, such as an answer that takes your allergies into account",
          ],
        },
        "Your account email address, emergency contacts and insurance card details are described in our Privacy Policy. We handle them with the same care, and we treat them as consumer health data wherever they are stored together with, or reveal, information about your health.",
      ],
    },
    {
      id: "collected",
      heading: "Categories of consumer health data we collect and where it comes from",
      body: [
        "We collect the categories of consumer health data listed in Section 1. We collect them from three sources.",
        "From you. You give us your Medical ID fields, the messages and photos you send in chat, the voice and camera input you stream in AidSnap Live, and the health facts you share in conversation, which AidSnap may remember if you have turned that setting on. Every Medical ID field is optional.",
        "From your device's health store. If you turn on Apple Health or Health Connect, the App reads the types you allow, which are heart rate, resting heart rate and heart rate variability; steps, distance, active energy, exercise and stand time; sleep; blood oxygen, respiratory rate, body temperature and blood pressure; weight, height, body mass index and body fat; blood glucose; workouts; and, on iPhone, high, low and irregular heart rhythm events. The App reads only what a question needs, when you ask it. AidSnap never writes to Apple Health or Health Connect.",
        "From connected services. If you connect WHOOP, Oura, Withings or Dexcom, you sign in with that company, and it gives our server an access token. We store the token encrypted and use it only to read the values a question needs, when you ask it. Apart from the token, we keep only the time of the last read.",
        "Health connections are optional and off by default, and you can turn any of them off at any time. Section 3 of our Privacy Policy describes what each source provides in more detail.",
      ],
    },
    {
      id: "purposes",
      heading: "Why we collect and use consumer health data",
      body: [
        "We collect and use consumer health data only to provide and protect the Services you ask for. Specifically, we use it to answer your questions with first aid guidance that takes your Medical ID, connected health data and remembered facts into account, for example by warning you before suggesting a medicine you are allergic to; to show your Medical ID back to you; to keep your conversation history so you can return to it; to offer a call to emergency services or one of your contacts, which happens only when you tap a call button; and to operate, secure, debug and improve the reliability of the Services.",
        "We do not use consumer health data for advertising or marketing, and we do not use it to train AI models. We do not sell it, and we do not share it with data brokers.",
      ],
    },
    {
      id: "sharing",
      heading: "Categories of consumer health data we share, and with whom",
      body: [
        "We share consumer health data only with service providers that process it on our behalf and under our instructions, and only as needed to run the Services. AidSnap has no affiliates, so we share no consumer health data with affiliates. The categories of third parties, and the consumer health data each receives, are:",
        {
          list: [
            "Google, as the provider of Firebase Authentication, Cloud Firestore and Cloud Storage, which store your account, Medical ID, emergency contacts and insurance cards, and of the Gemini API, which receives your messages, photos, recent conversation, remembered facts, connected health data, device language, region and time zone, and a summary of your Medical ID in order to generate an answer, and which receives your microphone audio and camera frames during AidSnap Live",
            "Railway, which hosts our server and the databases that hold your conversations, photos, Live transcripts, remembered facts and encrypted wearable tokens",
            "Tavily, a search provider, which receives the search terms the assistant writes from your question when it searches a fixed list of trusted medical websites, and which may therefore receive terms that relate to your health. The search does not include your name, account or Medical ID",
            "WHOOP, Oura, Withings and Dexcom, only if you connect them, as the source of the readings you ask about. We receive consumer health data from these companies and do not send them your other consumer health data",
          ],
        },
        "To answer some questions, AidSnap may also look up a medicine in the U.S. National Library of Medicine's RxNav and the U.S. Food and Drug Administration's openFDA databases, which receive the medicine's name and nothing that identifies you.",
        "We may also disclose consumer health data when we believe in good faith that the law requires it, such as in response to a valid subpoena or court order, or when it is necessary to protect the life or safety of any person. If we are part of a merger, acquisition or sale of assets, this policy will continue to apply to your information. We will not otherwise share consumer health data with third parties.",
      ],
    },
    {
      id: "consent",
      heading: "Consent, and no sale of consumer health data",
      body: [
        "We collect consumer health data only with your consent or as necessary to provide the Services you have requested. You give consent when you enter information in your Medical ID, connect a health source, or describe a health situation to the assistant, and each health connection is a separate choice that you make on the Connections screen.",
        "We share consumer health data beyond what is necessary to provide the Services you requested only with your separate, specific consent, requested at the time and in a way that is distinct from this policy and from our Terms of Service. We have no such sharing today. If that changes, we will ask first, and we will not share your data unless you agree.",
        "AidSnap does not sell consumer health data. We will never sell it without a valid signed authorization from you that meets the requirements of the Washington My Health My Data Act, and we have no plans to ask for one.",
        "You can withdraw your consent at any time, as Section 7 explains. Withdrawing consent does not affect the lawfulness of what we did before you withdrew it.",
      ],
    },
    {
      id: "geofencing",
      heading: "Geofencing and location",
      body: [
        "AidSnap does not request or collect your location, and it does not use a geofence, which is a virtual boundary around a physical place, to identify or track you, to collect consumer health data from you or to send you messages or advertisements. The emergency number the App shows comes from the region setting of your device.",
      ],
    },
    {
      id: "rights",
      heading: "Your rights over your consumer health data",
      body: [
        "You have the right to:",
        {
          list: [
            "Confirm whether we are collecting, sharing or selling your consumer health data, and access that data, including a list of all third parties and affiliates with whom we have shared or sold it and an active email address or other online way to contact them",
            "Withdraw consent you have given us to collect or share your consumer health data",
            "Have your consumer health data deleted",
            "Appeal our decision if we decline to act on a request",
            "Not be discriminated against for exercising any of these rights",
          ],
        },
        "When you ask us to delete consumer health data, we will delete it from our records and notify our service providers listed in Section 4 so that they delete it too, except where the law requires us to keep it. Deleting your account permanently deletes your conversations and Live transcripts, remembered facts, wearable connections and their tokens, your Medical ID, emergency contacts, insurance cards and card photos, and your account. It cannot be undone. Information already sent to Google to generate an answer is handled under Google's own retention terms for the Gemini API, as our Privacy Policy explains.",
        "If any of your consumer health data is held on an archived or backup system, we may delay deleting that copy for the limited time necessary to restore the archived or backup system, and we will delete it no later than six months after we authenticate your request.",
      ],
    },
    {
      id: "exercise",
      heading: "How to exercise your rights, and how to appeal",
      body: [
        "Most of your rights you can exercise directly in the App. You can edit or clear your Medical ID in the App at any time. You can delete any conversation. You can see, delete or turn off remembered facts in Settings, under Memory. You can turn off any health connection, and disconnect any wearable, on the Connections screen, and you can revoke AidSnap's access to Apple Health or Health Connect in your phone's settings. You can delete your account in Settings, under Account. If you cannot open the App, see aidsnap.com/delete-account to ask us to delete it for you.",
        "For anything else, including a request to confirm or access your consumer health data, to see the list of third parties with whom we have shared it, or to withdraw consent, email AidSnap Inc. at aryan.mittal@aidsnap.com. We will verify your request by confirming that it comes from the email address on your account. You may use an authorized agent where the law allows it.",
        "We will respond to your request within 45 days of receiving it. If it is reasonably necessary, because of the complexity or number of requests, we may extend that period by a further 45 days, and we will tell you about the extension and the reason for it within the first 45 days.",
        "If we decline to act on your request, we will tell you why and how to appeal. To appeal, reply to our decision, or email aryan.mittal@aidsnap.com, with the subject \"Appeal,\" and say what you want us to reconsider. We will respond to your appeal in writing within 45 days of receiving it, and we will explain our reasons. If we deny your appeal, you may submit a complaint to the Washington Attorney General at www.atg.wa.gov/file-complaint, or to the attorney general of your own state, and we will include these contact details in our response.",
      ],
    },
    {
      id: "security",
      heading: "Security and access",
      body: [
        "We restrict access to consumer health data to the people and service providers that need it to run the Services, and we protect it with the measures our Privacy Policy describes. All traffic between the App, the Site and our servers is encrypted in transit, access to your stored information is limited to your signed-in account by server-enforced rules, and wearable tokens are encrypted at rest. No method of transmission or storage is completely secure, and we cannot guarantee absolute security. If a breach affects your consumer health data, we will notify you and the relevant authorities as the law requires.",
        "Our Privacy Policy also explains where we store consumer health data and how long we keep it.",
      ],
    },
    {
      id: "changes-contact",
      heading: "Changes to this policy and contact",
      body: [
        "We may update this policy as the Services change. We will post the new version here with a new effective date. If we make a material change, we will tell you in the App before it takes effect, and we will not collect, use or share additional categories of consumer health data, or use or share it for a different purpose than the one described here, without first obtaining your consent.",
        "If you have questions about this policy or want to exercise your rights, email AidSnap Inc. at aryan.mittal@aidsnap.com.",
      ],
    },
  ],
}
