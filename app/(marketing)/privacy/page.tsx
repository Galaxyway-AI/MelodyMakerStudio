import { type Metadata } from "next";

export const metadata: Metadata = {
    title: "Privacy Policy | MelodyMaker Studio",
    description: "Privacy Policy for MelodyMaker Studio and Galaxyway AI Ltd.",
};

const currentDate = new Date().toLocaleDateString("en-GB", {
    year: "numeric",
    month: "long",
    day: "numeric",
});

const contactEmail = "contact@melodymakerstudio.com";
const websiteUrl = "https://www.melodymakerstudio.com";

export default function PrivacyPolicyPage() {
    return (
        <div className="min-h-screen bg-transparent pt-24 pb-16">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="mb-10 text-center">
                    <h1 className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white via-primary to-accent mb-4">
                        Privacy Policy
                    </h1>
                    <p className="text-gray-300 text-lg">
                        MelodyMaker Studio (a trading name of Galaxyway AI Ltd)
                    </p>
                    <p className="text-gray-300 mt-2">
                        Last updated: {currentDate}
                    </p>
                </div>

                <div className="prose prose-invert prose-purple max-w-none space-y-8 bg-card/40 backdrop-blur-md p-8 rounded-2xl border border-white/10 shadow-2xl">

                    <section>
                        <p>
                            MelodyMaker Studio (“MelodyMaker Studio”, “we”, “us”, “our”) is a trading name of <strong>Galaxyway AI Ltd</strong>.
                            We are committed to protecting your privacy, your personal data, and the intellectual property that we and our artists create.
                        </p>
                        <p>
                            This Privacy Policy explains how we collect, use, store, share, and protect your information when you use our websites, apps, forms, and services (together, the “Services”).
                        </p>
                        <div className="bg-primary/10 border-l-4 border-primary p-4 rounded-r my-6">
                            <p className="font-semibold text-primary m-0">Important</p>
                            <p className="m-0 text-gray-300">This policy is for general information only and does not constitute legal advice. You should seek independent legal advice before relying on this text for regulatory compliance.</p>
                        </div>
                    </section>

                    <section>
                        <h2 className="text-2xl font-semibold text-white mb-4">1. Who We Are</h2>
                        <p>
                            MelodyMaker Studio is an online music production, personalised song, and global music distribution company.
                            Galaxyway AI Ltd is the legal entity responsible for processing your personal data.
                        </p>
                        <ul className="list-disc pl-6 space-y-2 text-gray-300">
                            <li><strong>Trading name:</strong> MelodyMaker Studio</li>
                            <li><strong>Legal entity:</strong> Galaxyway AI Ltd</li>
                            <li><strong>Website:</strong> <a href={websiteUrl} className="text-primary hover:underline" target="_blank" rel="noopener noreferrer">{websiteUrl.replace("https://", "")}</a></li>
                            <li><strong>Contact email:</strong> <a href={`mailto:${contactEmail}`} className="text-primary hover:underline">{contactEmail}</a></li>
                        </ul>
                        <p>
                            For data protection purposes, Galaxyway AI Ltd is the <strong>data controller</strong> for personal data collected through our Services.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-semibold text-white mb-4">2. What This Policy Covers</h2>
                        <p>This Privacy Policy applies to:</p>
                        <ul className="list-disc pl-6 space-y-2 text-gray-300">
                            <li>Visitors to our website and web applications</li>
                            <li>Artists, clients, and customers who use our Services</li>
                            <li>People who contact us via email, contact forms, social media, or other channels</li>
                        </ul>
                        <p>
                            It does <strong>not</strong> apply to third-party platforms we distribute music to (e.g. Spotify, Apple Music, YouTube) or external websites you access via links on our site. Those services have their own privacy and terms.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-semibold text-white mb-4">3. Personal Data We Collect</h2>
                        <p>We may collect and process the following categories of personal data:</p>

                        <h3 className="text-xl font-medium text-white mt-6 mb-2">3.1 Information you provide directly</h3>
                        <ul className="list-disc pl-6 space-y-2 text-gray-300">
                            <li><strong>Contact details:</strong> Name, email address, phone number, social media handles</li>
                            <li><strong>Account details:</strong> Login information, artist name(s), stage name(s)</li>
                            <li><strong>Project information:</strong> Song briefs, lyrics, reference tracks, artwork, branding details, biography text, photos or videos you submit</li>
                            <li><strong>Business details:</strong> Company name, role, invoicing information</li>
                            <li><strong>Payment details:</strong> Limited billing information processed via secure payment providers (we do not store full card numbers)</li>
                            <li><strong>Communication records:</strong> Emails, messages, and feedback sent to us</li>
                        </ul>

                        <h3 className="text-xl font-medium text-white mt-6 mb-2">3.2 Information we collect automatically</h3>
                        <p>When you use our website or apps, we may automatically collect:</p>
                        <ul className="list-disc pl-6 space-y-2 text-gray-300">
                            <li>IP address, browser type, device type, operating system</li>
                            <li>Pages visited, time and date of visit, click data, referral URL</li>
                            <li>Basic analytics and performance data (for example, via cookies or similar technologies)</li>
                        </ul>

                        <h3 className="text-xl font-medium text-white mt-6 mb-2">3.3 Information from third parties</h3>
                        <p>We may receive data from:</p>
                        <ul className="list-disc pl-6 space-y-2 text-gray-300">
                            <li>Music platforms (e.g. streaming stats, royalty reports)</li>
                            <li>Payment processors</li>
                            <li>Marketing or advertising partners</li>
                            <li>Social media platforms, if you interact with our accounts or ads</li>
                        </ul>
                    </section>

                    <section>
                        <h2 className="text-2xl font-semibold text-white mb-4">4. How We Use Your Personal Data</h2>
                        <p>We use your personal data for the following purposes:</p>
                        <div className="space-y-4">
                            <div>
                                <strong className="text-white block mb-1">1. To provide and manage our Services</strong>
                                <ul className="list-disc pl-6 mt-1 text-gray-300">
                                    <li>Producing, mixing, and mastering your music</li>
                                    <li>Distributing your songs and personalised tracks to streaming platforms</li>
                                    <li>Managing collaborations, ready-made songs, and artist projects</li>
                                </ul>
                            </div>
                            <div>
                                <strong className="text-white block mb-1">2. To communicate with you</strong>
                                <ul className="list-disc pl-6 mt-1 text-gray-300">
                                    <li>Responding to enquiries and support requests</li>
                                    <li>Sending project updates, release confirmations, and royalty information</li>
                                </ul>
                            </div>
                            <div>
                                <strong className="text-white block mb-1">3. To operate and improve our business</strong>
                                <ul className="list-disc pl-6 mt-1 text-gray-300">
                                    <li>Monitoring website usage and performance</li>
                                    <li>Enhancing user experience, design, and functionality</li>
                                    <li>Developing new services, features, and offerings</li>
                                </ul>
                            </div>
                            <div>
                                <strong className="text-white block mb-1">4. For marketing and promotion (where permitted)</strong>
                                <ul className="list-disc pl-6 mt-1 text-gray-300">
                                    <li>Sending newsletters or updates about new services, releases, and opportunities</li>
                                    <li>Featuring artists, songs, or client stories (subject to our agreements with you)</li>
                                </ul>
                            </div>
                            <div>
                                <strong className="text-white block mb-1">5. To comply with legal, regulatory, and contractual obligations</strong>
                                <ul className="list-disc pl-6 mt-1 text-gray-300">
                                    <li>Maintaining accounting and tax records</li>
                                    <li>Handling rights, ownership, and takedown requests</li>
                                    <li>Preventing fraud, misuse, and unlawful activity</li>
                                </ul>
                            </div>
                        </div>
                        <p className="mt-4">
                            Where required by law (e.g. UK/EU), we rely on legal bases such as: performance of a contract, legitimate interests, compliance with legal obligations, and consent for certain marketing activities.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-semibold text-white mb-4">5. Cookies and Similar Technologies</h2>
                        <p>We may use cookies and similar technologies to:</p>
                        <ul className="list-disc pl-6 space-y-2 text-gray-300">
                            <li>Remember your preferences</li>
                            <li>Analyse website traffic and usage</li>
                            <li>Improve site performance and security</li>
                        </ul>
                        <p>
                            You can manage or disable cookies via your browser settings. Some features of the site may not function correctly if cookies are disabled.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-semibold text-white mb-4">6. How We Share Your Information</h2>
                        <p>We may share your data with:</p>
                        <div className="space-y-4">
                            <div>
                                <strong className="text-white block mb-1">1. Service providers and partners</strong>
                                <ul className="list-disc pl-6 mt-1 text-gray-300">
                                    <li>Payment processors</li>
                                    <li>Cloud hosting and storage providers</li>
                                    <li>Email, marketing, and analytics platforms</li>
                                    <li>Professional advisers (e.g. accountants, legal advisors)</li>
                                </ul>
                            </div>
                            <div>
                                <strong className="text-white block mb-1">2. Music and content platforms</strong>
                                <ul className="list-disc pl-6 mt-1 text-gray-300">
                                    <li>Streaming and download services (e.g. Spotify, TikTok, Apple Music, YouTube Music, Amazon Music, etc.)</li>
                                    <li>Content ID and fingerprinting services to protect your and our rights</li>
                                </ul>
                            </div>
                            <div>
                                <strong className="text-white block mb-1">3. Collaborators and project partners</strong>
                                <ul className="list-disc pl-6 mt-1 text-gray-300">
                                    <li>Producers, writers, vocalists, and other artists involved in a project, where necessary for collaboration and credits</li>
                                </ul>
                            </div>
                            <div>
                                <strong className="text-white block mb-1">4. Legal and regulatory bodies</strong>
                                <ul className="list-disc pl-6 mt-1 text-gray-300">
                                    <li>If required by law, court order, or to protect our rights, users, or the public</li>
                                </ul>
                            </div>
                            <div>
                                <strong className="text-white block mb-1">5. Business transfers</strong>
                                <ul className="list-disc pl-6 mt-1 text-gray-300">
                                    <li>In connection with a merger, acquisition, asset sale, or restructuring, where your data may be transferred as part of the business.</li>
                                </ul>
                            </div>
                        </div>
                        <p className="mt-4">We do <strong>not</strong> sell your personal data to third parties.</p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-semibold text-white mb-4">7. International Data Transfers</h2>
                        <p>
                            Our servers, partners, or service providers may be located outside your country. Where personal data is transferred internationally, we take reasonable steps to ensure an adequate level of protection, such as using standard contractual clauses or equivalent safeguards required by applicable law.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-semibold text-white mb-4">8. Data Security</h2>
                        <p>We take data security seriously and use appropriate technical and organisational measures to protect your personal data, including:</p>
                        <ul className="list-disc pl-6 space-y-2 text-gray-300">
                            <li>Secure servers and encrypted connections (HTTPS)</li>
                            <li>Access controls and authentication</li>
                            <li>Regular backups and monitoring</li>
                        </ul>
                        <p>
                            However, no method of transmission or storage is completely secure, and we cannot guarantee absolute security.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-semibold text-white mb-4">9. Data Retention</h2>
                        <p>We retain your personal data only for as long as necessary to:</p>
                        <ul className="list-disc pl-6 space-y-2 text-gray-300">
                            <li>Provide the Services to you</li>
                            <li>Comply with legal, accounting, and reporting obligations</li>
                            <li>Resolve disputes and enforce our agreements</li>
                        </ul>
                        <p>When data is no longer required, we will securely delete or anonymise it.</p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-semibold text-white mb-4">10. Your Rights (Subject to Local Law)</h2>
                        <p>Depending on where you live, you may have some or all of the following rights:</p>
                        <ul className="list-disc pl-6 space-y-2 text-gray-300">
                            <li><strong>Access:</strong> Request a copy of the personal data we hold about you</li>
                            <li><strong>Correction:</strong> Ask us to correct inaccurate or incomplete information</li>
                            <li><strong>Deletion:</strong> Request that we delete certain data, where legally possible</li>
                            <li><strong>Restriction:</strong> Ask us to limit how we use your data in certain circumstances</li>
                            <li><strong>Objection:</strong> Object to processing based on legitimate interests or direct marketing</li>
                            <li><strong>Portability:</strong> Request a copy of your data in a structured, machine-readable format</li>
                        </ul>
                        <p className="mt-4">
                            To exercise these rights, please contact us using the details in Section 17. We may need to verify your identity before responding.
                        </p>
                        <p>You also have the right to lodge a complaint with your local data protection authority.</p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-semibold text-white mb-4">11. Artists’ Rights and Responsibilities</h2>
                        <p>
                            We work with artists, writers, producers, and performers. To avoid confusion, this section explains how privacy and intellectual property interact in our relationship with artists.
                        </p>

                        <h3 className="text-xl font-medium text-white mt-6 mb-2">11.1 Ownership of artistic works</h3>
                        <p>Unless otherwise agreed in a written contract:</p>
                        <ul className="list-disc pl-6 space-y-2 text-gray-300">
                            <li>Artists generally retain ownership of their <strong>original compositions, lyrics, and performances</strong>.</li>
                            <li>By working with us, artists grant MelodyMaker Studio / Galaxyway AI Ltd the necessary <strong>licences</strong> to produce, distribute, promote, and monetise those works, as described in our production, distribution, or collaboration agreements.</li>
                        </ul>

                        <h3 className="text-xl font-medium text-white mt-6 mb-2">11.2 Use of artist data and content</h3>
                        <p>We may use artist names, biographies, photos, and song information:</p>
                        <ul className="list-disc pl-6 space-y-2 text-gray-300">
                            <li>To distribute songs to streaming platforms</li>
                            <li>For credits, metadata, and royalty reporting</li>
                            <li>For promotional materials and case studies, where permitted by contract or consent</li>
                        </ul>
                        <p>We will not misrepresent artist ownership or remove credits intentionally.</p>

                        <h3 className="text-xl font-medium text-white mt-6 mb-2">11.3 Responsibility for rights clearance</h3>
                        <p>Artists are responsible for ensuring that:</p>
                        <ul className="list-disc pl-6 space-y-2 text-gray-300">
                            <li>The content they provide (lyrics, compositions, samples, artwork, etc.) does <strong>not</strong> infringe third-party rights.</li>
                            <li>Any required permissions or licences (e.g. for samples) are obtained, unless we explicitly handle this for you in writing.</li>
                        </ul>
                        <p>If a dispute or claim arises from content you supplied, you may be required to indemnify us under the terms of your agreement with us.</p>

                        <h3 className="text-xl font-medium text-white mt-6 mb-2">11.4 Takedowns and disputes</h3>
                        <p>If we receive a credible infringement claim relating to your content, we may:</p>
                        <ul className="list-disc pl-6 space-y-2 text-gray-300">
                            <li>Temporarily suspend distribution or promotion of the content</li>
                            <li>Cooperate with music platforms and rights holders</li>
                            <li>Request information or documentation from you to resolve the issue</li>
                        </ul>
                        <p>We aim to handle such matters fairly and transparently, protecting both our interests and those of our artists.</p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-semibold text-white mb-4">12. MelodyMaker Studio & Galaxyway AI Ltd Intellectual Property</h2>

                        <h3 className="text-xl font-medium text-white mt-6 mb-2">12.1 Our IP</h3>
                        <p>Unless otherwise stated, MelodyMaker Studio / Galaxyway AI Ltd owns or controls all rights in:</p>
                        <ul className="list-disc pl-6 space-y-2 text-gray-300">
                            <li>Website and app design, layout, and code</li>
                            <li>Branding, logos, trademarks, and visual identity</li>
                            <li>Custom backing tracks, arrangements, sound design, and production templates created by us (where not specifically assigned to an artist)</li>
                            <li>AI prompts, workflows, and proprietary production methods</li>
                            <li>Text, graphics, and media we create for our Services</li>
                        </ul>
                        <p>These materials are protected by copyright, trademark, and other intellectual property laws.</p>

                        <h3 className="text-xl font-medium text-white mt-6 mb-2">12.2 Prohibited uses</h3>
                        <p>You must not, without our prior written permission:</p>
                        <ul className="list-disc pl-6 space-y-2 text-gray-300">
                            <li>Copy, reproduce, modify, or redistribute our website design, code, branding, or content</li>
                            <li>Resell, sublicense, or otherwise exploit our production tools, templates, or AI setups</li>
                            <li>Claim our intellectual property as your own or remove proprietary notices</li>
                        </ul>
                        <p>Any unauthorised use of our intellectual property may constitute infringement of copyright, trademarks, or other rights.</p>

                        <h3 className="text-xl font-medium text-white mt-6 mb-2">12.3 Enforcement and legal action</h3>
                        <p>
                            We take protection of our intellectual property very seriously. In cases of suspected theft, unlawful copying, or misuse of our content, branding, or proprietary materials, we reserve the right to:
                        </p>
                        <ul className="list-disc pl-6 space-y-2 text-gray-300">
                            <li>Issue takedown notices to platforms and hosting providers</li>
                            <li>Terminate access to our Services</li>
                            <li>Seek compensation, damages, and injunctive relief through legal proceedings, including but not limited to civil lawsuits</li>
                        </ul>
                        <p>By using our Services, you agree not to engage in any conduct that infringes or attempts to infringe our intellectual property rights.</p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-semibold text-white mb-4">13. Third-Party Links and Services</h2>
                        <p>
                            Our website and Services may contain links to third-party websites, apps, or platforms (such as Spotify, Apple Music, TikTok, YouTube, or payment gateways). We are not responsible for the privacy practices, content, or terms of those third parties. Please review their policies before providing them with your personal data.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-semibold text-white mb-4">14. Children’s Privacy</h2>
                        <p>
                            Our Services are not primarily directed at children under 16. We do not knowingly collect personal data from children without appropriate parental or guardian consent where required by law. If you believe a child has provided us with personal data without consent, please contact us and we will take appropriate steps.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-semibold text-white mb-4">15. Changes to This Privacy Policy</h2>
                        <p>
                            We may update this Privacy Policy from time to time to reflect changes in law, technology, or our Services. When we do, we will revise the “Last updated” date at the top of this page. In some cases, we may provide additional notice (such as on the website or via email).
                        </p>
                        <p>Your continued use of our Services after any changes means you accept the updated policy.</p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-semibold text-white mb-4">16. Contact Us</h2>
                        <p>
                            If you have any questions, concerns, or requests relating to this Privacy Policy or your personal data, please contact us:
                        </p>
                        <ul className="list-disc pl-6 space-y-2 text-gray-300">
                            <li><strong>Email:</strong> <a href={`mailto:${contactEmail}`} className="text-primary hover:underline">{contactEmail}</a></li>
                            <li><strong>Website:</strong> <a href={websiteUrl} className="text-primary hover:underline" target="_blank" rel="noopener noreferrer">{websiteUrl.replace("https://", "")}</a></li>
                        </ul>
                        <p>
                            We will do our best to respond within a reasonable timeframe and, where applicable, within any deadlines required by law.
                        </p>
                    </section>

                </div>
            </div>
        </div>
    );
}
