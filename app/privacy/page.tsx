"use client"

import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { useState, useEffect } from "react"
import { useSearchParams } from "next/navigation"

export default function PrivacyPage() {
  const searchParams = useSearchParams()
  const [activeTab, setActiveTab] = useState("privacy")

  useEffect(() => {
    const tab = searchParams.get("tab")
    if (tab && ["privacy", "terms", "data-transfer", "marketing"].includes(tab)) {
      setActiveTab(tab)
    }
  }, [searchParams])

  const tabs = [
    { id: "privacy", label: "Privacy Policy" },
    { id: "terms", label: "Terms of Service" },
    { id: "data-transfer", label: "Data Transfer Agreement" },
    { id: "marketing", label: "Marketing Disclosure" },
  ]

  const handleTabChange = (tabId: string) => {
    setActiveTab(tabId)
    // Update URL without page reload
    const url = new URL(window.location.href)
    url.searchParams.set("tab", tabId)
    window.history.pushState({}, "", url.toString())
  }

  return (
    <div className="min-h-screen bg-[#222222] text-white">
      <Navbar />

      <main className="max-w-7xl mx-auto px-4 pt-40 pb-12 md:pt-48 md:pb-20">
        {/* Hero Section */}
        <div className="mb-16">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-8">Legal Policies</h1>
        </div>

        <div className="grid lg:grid-cols-4 gap-12">
          {/* Main Content */}
          <div className="lg:col-span-3 space-y-8">
            {/* Tab Content */}
            <div className="space-y-8">
              {/* Privacy Policy Tab */}
              {activeTab === "privacy" && (
                <div id="privacy" className="space-y-8">
                  <div className="space-y-4">
                    <h2 className="text-xl font-semibold text-white">AidSnap, Inc. Privacy Policy</h2>
                    <p className="text-gray-400">Last Updated on December 15, 2024</p>
                  </div>

                  <div className="space-y-4 text-gray-300 leading-relaxed">
                    <p>
                      Your privacy is important to us. This Privacy Policy ("Policy") applies to services provided by
                      AidSnap, Inc. ("we", "us", or "AidSnap") and our website (the "Site"), product pages, mobile or
                      web applications, or other digital products that link to or reference this Policy (collectively,
                      the "Services") and explains what information we collect from users of our Services (a "user",
                      "you", or "your"), including information that may be used to personally identify you ("Personal
                      Information") and how we use it.
                    </p>
                  </div>

                  <section className="space-y-4">
                    <h2 className="text-2xl font-bold text-white">Information We Collect</h2>
                    <div className="text-gray-300 leading-relaxed space-y-4">
                      <p>We collect information to provide better emergency medical services to our users:</p>
                      <ul className="list-disc list-inside space-y-2 ml-4">
                        <li>Account information (name, email address, phone number) when you create an account</li>
                        <li>Emergency contact information you choose to provide</li>
                        <li>
                          Location data (only when you explicitly enable location services for emergency purposes)
                        </li>
                        <li>Medical interaction data to improve our AI algorithms and emergency response</li>
                        <li>Device information for app functionality, security, and emergency services integration</li>
                      </ul>
                    </div>
                  </section>

                  <section className="space-y-4">
                    <h2 className="text-2xl font-bold text-white">How We Use Your Information</h2>
                    <div className="text-gray-300 leading-relaxed space-y-4">
                      <ul className="list-disc list-inside space-y-2 ml-4">
                        <li>Provide emergency first aid guidance and AI-powered medical assessments</li>
                        <li>Connect you with emergency services and share critical information when needed</li>
                        <li>Improve our AI algorithms and medical protocols for better emergency response</li>
                        <li>Send important safety updates, medical alerts, and app notifications</li>
                        <li>Ensure app security, prevent misuse, and maintain service integrity</li>
                      </ul>
                    </div>
                  </section>

                  <section className="space-y-4">
                    <h2 className="text-2xl font-bold text-white">Data Security & Protection</h2>
                    <div className="text-gray-300 leading-relaxed space-y-4">
                      <ul className="list-disc list-inside space-y-2 ml-4">
                        <li>End-to-end encryption for all sensitive medical data and emergency communications</li>
                        <li>Local processing of medical assessments on your device when possible</li>
                        <li>HIPAA-compliant data handling procedures and medical data protection</li>
                        <li>Secure cloud infrastructure with redundant backups and disaster recovery</li>
                      </ul>
                    </div>
                  </section>

                  <section className="space-y-4">
                    <h2 className="text-2xl font-bold text-white">Your Privacy Rights</h2>
                    <div className="text-gray-300 leading-relaxed space-y-4">
                      <ul className="list-disc list-inside space-y-2 ml-4">
                        <li>Access, update, or delete your personal information at any time</li>
                        <li>Control location sharing and emergency contact access preferences</li>
                        <li>Opt out of non-essential data collection while maintaining emergency features</li>
                        <li>Request a copy of your data in a portable, machine-readable format</li>
                        <li>Withdraw consent for data processing (except for emergency services)</li>
                      </ul>
                    </div>
                  </section>
                </div>
              )}

              {/* Terms of Service Tab */}
              {activeTab === "terms" && (
                <div id="terms" className="space-y-8">
                  <div className="space-y-4">
                    <h2 className="text-xl font-semibold text-white">AidSnap, Inc. Terms of Service</h2>
                    <p className="text-gray-400">Last Updated on December 15, 2024</p>
                  </div>

                  <div className="space-y-4 text-gray-300 leading-relaxed">
                    <p>
                      These Terms of Service ("Terms") govern your use of AidSnap's emergency medical assistance
                      application and related services. By using AidSnap, you agree to these Terms and acknowledge that
                      this is a medical assistance tool, not a replacement for professional medical care.
                    </p>
                  </div>

                  <section className="space-y-4">
                    <h2 className="text-2xl font-bold text-white">Medical Disclaimer</h2>
                    <div className="bg-red-500/10 border border-red-500/20 rounded-2xl p-6">
                      <p className="text-red-300 font-medium mb-4">⚠️ IMPORTANT MEDICAL DISCLAIMER</p>
                      <div className="text-gray-300 leading-relaxed space-y-2">
                        <p>
                          AidSnap is NOT a substitute for professional medical care, emergency services, or licensed
                          medical professionals. In life-threatening emergencies, ALWAYS call 911 or your local
                          emergency services immediately.
                        </p>
                        <p>
                          Our AI provides general first aid guidance based on medical protocols, but cannot diagnose
                          medical conditions or provide personalized medical advice.
                        </p>
                      </div>
                    </div>
                  </section>

                  <section className="space-y-4">
                    <h2 className="text-2xl font-bold text-white">Acceptable Use</h2>
                    <div className="text-gray-300 leading-relaxed space-y-4">
                      <p>You agree to use AidSnap only for legitimate emergency assistance purposes. You may not:</p>
                      <ul className="list-disc list-inside space-y-2 ml-4">
                        <li>Use the service for non-emergency medical advice or routine healthcare questions</li>
                        <li>Attempt to reverse engineer, modify, or tamper with our AI algorithms</li>
                        <li>Share your account credentials or allow unauthorized access to your account</li>
                        <li>Use the service in any way that could harm, disable, or impair our systems</li>
                        <li>Provide false or misleading information during emergency situations</li>
                      </ul>
                    </div>
                  </section>

                  <section className="space-y-4">
                    <h2 className="text-2xl font-bold text-white">Limitation of Liability</h2>
                    <div className="text-gray-300 leading-relaxed space-y-4">
                      <p>
                        AidSnap provides emergency assistance tools but cannot guarantee specific medical outcomes. We
                        are not liable for any medical decisions made based on our AI guidance. Users assume full
                        responsibility for their medical care and emergency response decisions.
                      </p>
                    </div>
                  </section>

                  <section className="space-y-4">
                    <h2 className="text-2xl font-bold text-white">Emergency Services Integration</h2>
                    <div className="text-gray-300 leading-relaxed space-y-4">
                      <p>
                        AidSnap may automatically contact emergency services on your behalf in certain critical
                        situations. By using our service, you consent to this emergency contact and information sharing
                        when our AI determines it's necessary for your safety.
                      </p>
                    </div>
                  </section>
                </div>
              )}

              {/* Data Transfer Agreement Tab */}
              {activeTab === "data-transfer" && (
                <div id="data-transfer" className="space-y-8">
                  <div className="space-y-4">
                    <h2 className="text-xl font-semibold text-white">Data Transfer Agreement</h2>
                    <p className="text-gray-400">Last Updated on December 15, 2024</p>
                  </div>

                  <div className="space-y-4 text-gray-300 leading-relaxed">
                    <p>
                      This Data Transfer Agreement outlines how AidSnap handles the transfer of your personal and
                      medical data, particularly in emergency situations and for service improvement purposes.
                    </p>
                  </div>

                  <section className="space-y-4">
                    <h2 className="text-2xl font-bold text-white">Emergency Data Transfers</h2>
                    <div className="text-gray-300 leading-relaxed space-y-4">
                      <p>During active emergencies, AidSnap may transfer your data to:</p>
                      <ul className="list-disc list-inside space-y-2 ml-4">
                        <li>Emergency medical services (911, paramedics, hospitals)</li>
                        <li>Poison control centers and specialized emergency response teams</li>
                        <li>Your designated emergency contacts</li>
                        <li>Healthcare providers involved in your emergency care</li>
                      </ul>
                      <p className="mt-4">
                        This data transfer is automatic and necessary for emergency response. It may include your
                        location, medical history, current symptoms, and emergency contact information.
                      </p>
                    </div>
                  </section>

                  <section className="space-y-4">
                    <h2 className="text-2xl font-bold text-white">International Data Transfers</h2>
                    <div className="text-gray-300 leading-relaxed space-y-4">
                      <p>
                        AidSnap operates globally and may transfer your data across international borders for service
                        provision and emergency response. We ensure all international transfers comply with applicable
                        data protection laws including GDPR, CCPA, and HIPAA.
                      </p>
                      <ul className="list-disc list-inside space-y-2 ml-4">
                        <li>Data is encrypted during all transfers</li>
                        <li>We use Standard Contractual Clauses (SCCs) for EU data transfers</li>
                        <li>Emergency data may be transferred without delay to save lives</li>
                        <li>Non-emergency data transfers follow standard privacy protocols</li>
                      </ul>
                    </div>
                  </section>

                  <section className="space-y-4">
                    <h2 className="text-2xl font-bold text-white">Third-Party Service Providers</h2>
                    <div className="text-gray-300 leading-relaxed space-y-4">
                      <p>We may share your data with trusted third-party providers for:</p>
                      <ul className="list-disc list-inside space-y-2 ml-4">
                        <li>Cloud infrastructure and data storage (AWS, Google Cloud)</li>
                        <li>Emergency services integration and dispatch systems</li>
                        <li>Medical AI training and algorithm improvement (anonymized data only)</li>
                        <li>Analytics and service optimization (aggregated data only)</li>
                      </ul>
                    </div>
                  </section>

                  <section className="space-y-4">
                    <h2 className="text-2xl font-bold text-white">Data Retention and Deletion</h2>
                    <div className="text-gray-300 leading-relaxed space-y-4">
                      <p>
                        Emergency interaction data is retained for medical and legal compliance purposes. You can
                        request deletion of non-essential data at any time, though emergency records may be retained as
                        required by law.
                      </p>
                    </div>
                  </section>
                </div>
              )}

              {/* Marketing Disclosure Tab */}
              {activeTab === "marketing" && (
                <div id="marketing" className="space-y-8">
                  <div className="space-y-4">
                    <h2 className="text-xl font-semibold text-white">Marketing Disclosure</h2>
                    <p className="text-gray-400">Last Updated on December 15, 2024</p>
                  </div>

                  <div className="space-y-4 text-gray-300 leading-relaxed">
                    <p>
                      This Marketing Disclosure explains how AidSnap uses your information for marketing purposes and
                      your rights regarding marketing communications.
                    </p>
                  </div>

                  <section className="space-y-4">
                    <h2 className="text-2xl font-bold text-white">Marketing Communications</h2>
                    <div className="text-gray-300 leading-relaxed space-y-4">
                      <p>AidSnap may send you marketing communications about:</p>
                      <ul className="list-disc list-inside space-y-2 ml-4">
                        <li>New emergency response features and medical protocols</li>
                        <li>Safety tips and first aid education content</li>
                        <li>Product updates and service improvements</li>
                        <li>Community safety initiatives and partnerships</li>
                        <li>Medical training opportunities and certifications</li>
                      </ul>
                    </div>
                  </section>

                  <section className="space-y-4">
                    <h2 className="text-2xl font-bold text-white">Opt-Out Rights</h2>
                    <div className="text-gray-300 leading-relaxed space-y-4">
                      <p>You can opt out of marketing communications at any time:</p>
                      <ul className="list-disc list-inside space-y-2 ml-4">
                        <li>Click "unsubscribe" in any marketing email</li>
                        <li>Update your preferences in the AidSnap app settings</li>
                        <li>Contact our support team to opt out of all marketing</li>
                        <li>Use the "Do Not Sell My Personal Information" option (California residents)</li>
                      </ul>
                      <div className="bg-yellow-500/10 border border-yellow-500/20 rounded-2xl p-6 mt-4">
                        <p className="text-yellow-300 font-medium mb-2">⚠️ Important Note</p>
                        <p className="text-gray-300">
                          Opting out of marketing will NOT affect critical safety alerts, emergency notifications, or
                          service-related communications necessary for your safety.
                        </p>
                      </div>
                    </div>
                  </section>

                  <section className="space-y-4">
                    <h2 className="text-2xl font-bold text-white">Data Used for Marketing</h2>
                    <div className="text-gray-300 leading-relaxed space-y-4">
                      <p>For marketing purposes, we may use:</p>
                      <ul className="list-disc list-inside space-y-2 ml-4">
                        <li>Basic account information (name, email, general location)</li>
                        <li>App usage patterns and feature preferences (anonymized)</li>
                        <li>Emergency response feedback and satisfaction surveys</li>
                        <li>Demographic information for targeted safety campaigns</li>
                      </ul>
                      <p className="mt-4 font-medium text-white">
                        We NEVER use specific medical data or emergency details for marketing purposes.
                      </p>
                    </div>
                  </section>

                  <section className="space-y-4">
                    <h2 className="text-2xl font-bold text-white">Third-Party Marketing Partners</h2>
                    <div className="text-gray-300 leading-relaxed space-y-4">
                      <p>We may partner with:</p>
                      <ul className="list-disc list-inside space-y-2 ml-4">
                        <li>Medical training organizations for first aid education</li>
                        <li>Healthcare providers for community safety programs</li>
                        <li>Emergency services for public awareness campaigns</li>
                        <li>Safety equipment manufacturers for product recommendations</li>
                      </ul>
                      <p className="mt-4">
                        We do not sell your personal information to third parties for their independent marketing use.
                      </p>
                    </div>
                  </section>

                  <section className="space-y-4">
                    <h2 className="text-2xl font-bold text-white">California Privacy Rights</h2>
                    <div className="text-gray-300 leading-relaxed space-y-4">
                      <p>California residents have additional rights under CCPA:</p>
                      <ul className="list-disc list-inside space-y-2 ml-4">
                        <li>Right to know what personal information is collected and used for marketing</li>
                        <li>Right to delete personal information used for marketing purposes</li>
                        <li>Right to opt out of the sale of personal information</li>
                        <li>Right to non-discrimination for exercising privacy rights</li>
                      </ul>
                    </div>
                  </section>
                </div>
              )}
            </div>

            {/* Contact Information */}
            <section className="space-y-4 border-t border-white/10 pt-8">
              <h2 className="text-2xl font-bold text-white">Contact Us</h2>
              <div className="text-gray-300 leading-relaxed space-y-4">
                <p>If you have any questions about these policies, please contact us:</p>
                <div className="bg-[#121212]/50 backdrop-blur-custom border border-white/10 rounded-2xl p-6">
                  <p>
                    <strong className="text-white">Email:</strong> support@aidsnap.com
                  </p>
                  
                </div>
              </div>
            </section>
          </div>

          {/* Sidebar - Quick Navigation */}
          <div className="lg:col-span-1">
            <div className="bg-[#121212]/30 backdrop-blur-custom border border-white/10 rounded-3xl p-8 sticky top-32">
              <h3 className="text-xl font-semibold text-white mb-6">Quick Navigation</h3>

              <div className="space-y-4">
                {tabs.map((tab) => (
                  <button
                    key={tab.id}
                    onClick={() => handleTabChange(tab.id)}
                    className={`block w-full text-left text-sm transition-colors ${
                      activeTab === tab.id ? "text-[#F87171]" : "text-gray-400 hover:text-white"
                    }`}
                  >
                    {tab.label}
                  </button>
                ))}
              </div>

              <div className="mt-8 pt-6 border-t border-white/10">
                <p className="text-xs text-gray-500 leading-relaxed">
                  These policies work together to protect your privacy and ensure safe emergency response services.
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}
