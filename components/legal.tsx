"use client"

import { SiteFooter, SiteHeader } from "@/components/site"
import { useState, useEffect } from "react"
import { useSearchParams } from "next/navigation"

export function LegalPage({ initialTab = "privacy" }: { initialTab?: string }) {
  const searchParams = useSearchParams()
  const [activeTab, setActiveTab] = useState(initialTab)

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
    <>
      <SiteHeader />

      <main className="mx-auto max-w-6xl border-x px-4 pb-24 pt-20 sm:px-8 md:pt-28">
        {/* Hero Section */}
        <div className="mb-16">
          <h1 className="text-4xl font-medium tracking-tight md:text-5xl">Legal Policies</h1>
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
                    <h2 className="text-2xl font-medium tracking-tight">AidSnap Privacy Policy</h2>
                    <p className="text-muted-foreground">Effective Date: August 22, 2025 | Last Updated: August 22, 2025</p>
                  </div>

                  <div className="space-y-4 text-muted-foreground leading-relaxed">
                    <p>
                      This Privacy Policy explains in full detail how AidSnap Inc. ("AidSnap," "we," "our," or "us") collects, uses, shares, and safeguards information in connection with the AidSnap mobile application, website, and related services ("Services").
                    </p>
                    <p>
                      By using AidSnap, you agree to the practices described in this Privacy Policy.
                    </p>
                  </div>

                  <section className="space-y-4">
                    <h2 className="text-xl font-medium">1. Information We Collect</h2>
                    <div className="text-muted-foreground leading-relaxed space-y-4">
                      <p>We collect the following types of data:</p>
                      
                      <h3 className="font-medium">1.1 Personal Identifiers</h3>
                      <ul className="list-disc list-inside space-y-2 ml-4">
                        <li>Name, email address, phone number, account login details.</li>
                        <li>Age and demographic information you may provide.</li>
                      </ul>

                      <h3 className="font-medium">1.2 Health-Related Inputs</h3>
                      <ul className="list-disc list-inside space-y-2 ml-4">
                        <li>Photos, text, or voice data you upload for suggested first aid guidance.</li>
                        <li>Metadata tied to such inputs (time, location, device details).</li>
                        <li className="font-medium">Note: AidSnap is <strong>not a HIPAA-covered entity</strong>, and uploaded health-related data is not protected under HIPAA.</li>
                      </ul>

                      <h3 className="font-medium">1.3 Device & Usage Data</h3>
                      <ul className="list-disc list-inside space-y-2 ml-4">
                        <li>IP address, device identifiers, operating system, browser, and app usage logs.</li>
                        <li>Crash reports, performance analytics, and interaction metrics.</li>
                      </ul>

                      <h3 className="font-medium">1.4 Location Data</h3>
                      <ul className="list-disc list-inside space-y-2 ml-4">
                        <li>If enabled, GPS-based location to recommend relevant emergency contacts or nearby resources.</li>
                      </ul>

                      <h3 className="font-medium">1.5 Cookies & Tracking</h3>
                      <ul className="list-disc list-inside space-y-2 ml-4">
                        <li>Firebase analytics, Google Cloud telemetry, session cookies, and SDKs used for security and analytics.</li>
                      </ul>
                    </div>
                  </section>

                  <section className="space-y-4">
                    <h2 className="text-xl font-medium">2. How We Use Your Information</h2>
                    <div className="text-muted-foreground leading-relaxed space-y-4">
                      <p>We use information for:</p>
                      <ul className="list-disc list-inside space-y-2 ml-4">
                        <li>Providing suggested first aid guidance.</li>
                        <li>Improving AI models, including training and validation (images may be anonymized).</li>
                        <li>Research, quality assurance, and internal testing.</li>
                        <li>Communicating with users (updates, bug fixes, notices).</li>
                        <li>Ensuring safety and compliance with applicable laws.</li>
                      </ul>
                      <p className="font-medium">We do not sell your information.</p>
                    </div>
                  </section>

                  <section className="space-y-4">
                    <h2 className="text-xl font-medium">3. How We Share Information</h2>
                    <div className="text-muted-foreground leading-relaxed space-y-4">
                      <p>We may share information with:</p>
                      <ul className="list-disc list-inside space-y-2 ml-4">
                        <li><strong>Service Providers</strong>: Google Cloud, Firebase, hosting and security vendors.</li>
                        <li><strong>Legal Compliance</strong>: Courts, regulators, or government agencies if legally required.</li>
                        <li><strong>Business Transfers</strong>: If we undergo merger, acquisition, or restructuring.</li>
                        <li><strong>Affiliates</strong>: Entities under common ownership with AidSnap.</li>
                      </ul>
                      <p className="font-medium">We never share your data for unrelated third-party advertising.</p>
                    </div>
                  </section>

                  <section className="space-y-4">
                    <h2 className="text-xl font-medium">4. Data Retention</h2>
                    <div className="text-muted-foreground leading-relaxed space-y-4">
                      <ul className="list-disc list-inside space-y-2 ml-4">
                        <li>Personal information is retained only as long as necessary for the purposes above.</li>
                        <li>Uploaded health-related photos may be stored temporarily for processing and deleted after [insert retention period].</li>
                        <li>You may request deletion at any time by emailing <strong>aryan.mittal@aidsnap.com</strong>.</li>
                      </ul>
                    </div>
                  </section>

                  <section className="space-y-4">
                    <h2 className="text-xl font-medium">5. International Data Transfers</h2>
                    <div className="text-muted-foreground leading-relaxed space-y-4">
                      <ul className="list-disc list-inside space-y-2 ml-4">
                        <li>Your data may be transferred to the United States or other jurisdictions.</li>
                        <li>Safeguards include <strong>encryption in transit and at rest</strong>, Standard Contractual Clauses (SCCs), and secure authentication.</li>
                      </ul>
                    </div>
                  </section>

                  <section className="space-y-4">
                    <h2 className="text-xl font-medium">6. Your Rights</h2>
                    <div className="text-muted-foreground leading-relaxed space-y-4">
                      <p>Depending on where you live (GDPR, CCPA, etc.), you may:</p>
                      <ul className="list-disc list-inside space-y-2 ml-4">
                        <li>Request access, correction, or deletion of your data.</li>
                        <li>Object to certain processing (e.g., marketing).</li>
                        <li>Request a copy of your data in portable format.</li>
                        <li>File a complaint with a local regulator.</li>
                      </ul>
                    </div>
                  </section>

                  <section className="space-y-4">
                    <h2 className="text-xl font-medium">7. Children's Privacy</h2>
                    <div className="text-muted-foreground leading-relaxed space-y-4">
                      <ul className="list-disc list-inside space-y-2 ml-4">
                        <li>AidSnap is not intended for children under 13 (or under 16 in the EU).</li>
                        <li>We do not knowingly collect data from children.</li>
                      </ul>
                    </div>
                  </section>

                  <section className="space-y-4">
                    <h2 className="text-xl font-medium">8. Security</h2>
                    <div className="text-muted-foreground leading-relaxed space-y-4">
                      <ul className="list-disc list-inside space-y-2 ml-4">
                        <li>Data is encrypted in transit (TLS) and at rest (AES-256).</li>
                        <li>Access controls, logging, and monitoring are in place.</li>
                        <li>No system is 100% secure. You use the App at your own risk.</li>
                      </ul>
                    </div>
                  </section>

                  <section className="space-y-4">
                    <h2 className="text-xl font-medium">9. Changes</h2>
                    <div className="text-muted-foreground leading-relaxed space-y-4">
                      <p>We may update this Privacy Policy. Updates will be posted in-app with a new "Effective Date."</p>
                    </div>
                  </section>
                </div>
              )}

              {/* Terms of Service Tab */}
              {activeTab === "terms" && (
                <div id="terms" className="space-y-8">
                  <div className="space-y-4">
                    <h2 className="text-2xl font-medium tracking-tight">AidSnap Terms of Service</h2>
                    <p className="text-muted-foreground">Effective Date: August 22, 2025</p>
                  </div>

                  <div className="space-y-4 text-muted-foreground leading-relaxed">
                    <p>
                      These Terms of Service ("Terms") govern your use of AidSnap.
                    </p>
                  </div>

                  <section className="space-y-4">
                    <h2 className="text-xl font-medium">1. Services Provided</h2>
                    <div className="text-muted-foreground leading-relaxed space-y-4">
                      <p>AidSnap provides <strong>first aid guidance suggestions only</strong>. It is:</p>
                      <ul className="list-disc list-inside space-y-2 ml-4">
                        <li>Not FDA-approved.</li>
                        <li>Not a medical device.</li>
                        <li>Not a substitute for a doctor or emergency services.</li>
                      </ul>
                      <p className="font-medium">You must call emergency services for serious injuries.</p>
                    </div>
                  </section>

                  <section className="space-y-4">
                    <h2 className="text-xl font-medium">2. User Responsibilities</h2>
                    <div className="text-muted-foreground leading-relaxed space-y-4">
                      <ul className="list-disc list-inside space-y-2 ml-4">
                        <li>You are solely responsible for decisions you make using the App.</li>
                        <li>You must provide accurate information when requested.</li>
                        <li>You may not misuse the App (reverse engineer, exploit, harass, spread malware).</li>
                      </ul>
                    </div>
                  </section>

                  <section className="space-y-4">
                    <h2 className="text-xl font-medium">3. Disclaimers</h2>
                    <div className="text-muted-foreground leading-relaxed space-y-4">
                      <ul className="list-disc list-inside space-y-2 ml-4">
                        <li>AidSnap is provided <strong>"as is"</strong> with no warranty of accuracy, reliability, or fitness for purpose.</li>
                        <li>No guarantees of uptime, accuracy, or completeness of information.</li>
                        <li>AidSnap does not diagnose, treat, or cure medical conditions.</li>
                      </ul>
                    </div>
                  </section>

                  <section className="space-y-4">
                    <h2 className="text-xl font-medium">4. Indemnification</h2>
                    <div className="text-muted-foreground leading-relaxed space-y-4">
                      <p>You agree to indemnify and hold AidSnap harmless against claims, damages, or expenses arising from your misuse of the App.</p>
                    </div>
                  </section>

                  <section className="space-y-4">
                    <h2 className="text-xl font-medium">5. Intellectual Property</h2>
                    <div className="text-muted-foreground leading-relaxed space-y-4">
                      <ul className="list-disc list-inside space-y-2 ml-4">
                        <li>All code, logos, designs, and trademarks belong to AidSnap.</li>
                        <li>You may not copy, redistribute, or modify the App without written consent.</li>
                      </ul>
                    </div>
                  </section>

                  <section className="space-y-4">
                    <h2 className="text-xl font-medium">6. Termination</h2>
                    <div className="text-muted-foreground leading-relaxed space-y-4">
                      <p>We may suspend or terminate your account at our discretion, without notice, for misuse or violation of these Terms.</p>
                    </div>
                  </section>

                  <section className="space-y-4">
                    <h2 className="text-xl font-medium">7. Governing Law & Arbitration</h2>
                    <div className="text-muted-foreground leading-relaxed space-y-4">
                      <ul className="list-disc list-inside space-y-2 ml-4">
                        <li>These Terms are governed by New York law.</li>
                        <li>Any disputes must be resolved through <strong>binding arbitration in New York</strong>, not in court.</li>
                        <li>You waive the right to class-action lawsuits.</li>
                      </ul>
                    </div>
                  </section>
                </div>
              )}

              {/* Data Transfer Agreement Tab */}
              {activeTab === "data-transfer" && (
                <div id="data-transfer" className="space-y-8">
                  <div className="space-y-4">
                    <h2 className="text-2xl font-medium tracking-tight">AidSnap Data Transfer Agreement</h2>
                    <p className="text-muted-foreground">Effective Date: August 22, 2025</p>
                  </div>

                  <div className="space-y-4 text-muted-foreground leading-relaxed">
                    <p>
                      This Agreement explains how AidSnap handles cross-border transfers of personal data.
                    </p>
                  </div>

                  <section className="space-y-4">
                    <h2 className="text-xl font-medium">1. Transfers</h2>
                    <div className="text-muted-foreground leading-relaxed space-y-4">
                      <ul className="list-disc list-inside space-y-2 ml-4">
                        <li>Data may be stored and processed in the United States or other countries.</li>
                        <li>Transfers are secured with encryption, authentication, and access controls.</li>
                      </ul>
                    </div>
                  </section>

                  <section className="space-y-4">
                    <h2 className="text-xl font-medium">2. GDPR Compliance</h2>
                    <div className="text-muted-foreground leading-relaxed space-y-4">
                      <p>For EU users:</p>
                      <ul className="list-disc list-inside space-y-2 ml-4">
                        <li>Transfers rely on <strong>Standard Contractual Clauses (SCCs)</strong> approved by the European Commission.</li>
                        <li>Data subjects may request details about safeguards at <strong>aryan.mittal@aidsnap.com</strong>.</li>
                      </ul>
                    </div>
                  </section>

                  <section className="space-y-4">
                    <h2 className="text-xl font-medium">3. Security Measures</h2>
                    <div className="text-muted-foreground leading-relaxed space-y-4">
                      <ul className="list-disc list-inside space-y-2 ml-4">
                        <li>Data encrypted in transit and at rest.</li>
                        <li>Role-based access control for employees.</li>
                        <li>Regular security audits and penetration tests.</li>
                      </ul>
                    </div>
                  </section>

                  <section className="space-y-4">
                    <h2 className="text-xl font-medium">4. Breach Notification</h2>
                    <div className="text-muted-foreground leading-relaxed space-y-4">
                      <p>In case of a data breach, we will notify affected users and regulators within 72 hours as required by GDPR.</p>
                    </div>
                  </section>

                  <section className="space-y-4">
                    <h2 className="text-xl font-medium">5. Termination</h2>
                    <div className="text-muted-foreground leading-relaxed space-y-4">
                      <p>This Agreement applies for as long as you use AidSnap. If you delete your account, we will delete or anonymize your personal data unless legally required to retain it.</p>
                    </div>
                  </section>
                </div>
              )}

              {/* Marketing Disclosure Tab */}
              {activeTab === "marketing" && (
                <div id="marketing" className="space-y-8">
                  <div className="space-y-4">
                    <h2 className="text-2xl font-medium tracking-tight">AidSnap Marketing Disclosure</h2>
                    <p className="text-muted-foreground">Effective Date: August 22, 2025</p>
                  </div>

                  <section className="space-y-4">
                    <h2 className="text-xl font-medium">1. Marketing Practices</h2>
                    <div className="text-muted-foreground leading-relaxed space-y-4">
                      <ul className="list-disc list-inside space-y-2 ml-4">
                        <li>We may send you marketing emails, in-app notifications, or push alerts.</li>
                        <li>We may use analytics platforms (Google, Firebase, social media) to measure effectiveness.</li>
                        <li>We do not sell your data to third-party advertisers.</li>
                      </ul>
                    </div>
                  </section>

                  <section className="space-y-4">
                    <h2 className="text-xl font-medium">2. Affiliates & Sponsors</h2>
                    <div className="text-muted-foreground leading-relaxed space-y-4">
                      <ul className="list-disc list-inside space-y-2 ml-4">
                        <li>If we receive payment for promotions, partnerships, or sponsored content, it will be clearly labeled.</li>
                        <li>Testimonials or endorsements may come from real users; if compensated, that will be disclosed.</li>
                      </ul>
                    </div>
                  </section>

                  <section className="space-y-4">
                    <h2 className="text-xl font-medium">3. Opt-In & Opt-Out</h2>
                    <div className="text-muted-foreground leading-relaxed space-y-4">
                      <ul className="list-disc list-inside space-y-2 ml-4">
                        <li>You can opt out of marketing emails at any time via "unsubscribe."</li>
                        <li>Push notifications can be disabled in device settings.</li>
                      </ul>
                    </div>
                  </section>

                  <section className="space-y-4">
                    <h2 className="text-xl font-medium">4. Transparency</h2>
                    <div className="text-muted-foreground leading-relaxed space-y-4">
                      <ul className="list-disc list-inside space-y-2 ml-4">
                        <li>All promotional material will clearly state if it is advertising.</li>
                        <li>No hidden advertising or data resale practices are used.</li>
                      </ul>
                    </div>
                  </section>
                </div>
              )}
            </div>

          </div>

          {/* Sidebar - Quick Navigation */}
          <div className="lg:col-span-1">
            <div className="sticky top-24 rounded-2xl border bg-card p-6">
              <h3 className="mb-4 text-sm text-muted-foreground">Quick Navigation</h3>

              <div className="space-y-4">
                {tabs.map((tab) => (
                  <button
                    key={tab.id}
                    onClick={() => handleTabChange(tab.id)}
                    className={`block w-full py-1 text-left text-sm transition-colors ${
                      activeTab === tab.id ? "text-foreground" : "text-muted-foreground hover:text-foreground"
                    }`}
                  >
                    {tab.label}
                  </button>
                ))}
              </div>

              <div className="mt-6 border-t pt-6">
                <p className="text-xs text-muted-foreground leading-relaxed">
                  These policies work together to protect your privacy and ensure safe emergency response services.
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>

      <SiteFooter />
    </>
  )
}
