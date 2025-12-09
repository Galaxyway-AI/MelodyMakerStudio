import { type Metadata } from "next";

export const metadata: Metadata = {
    title: "Terms & Conditions | MelodyMaker Studio",
    description: "Terms & Conditions for MelodyMaker Studio and Galaxyway AI Ltd.",
};

const currentDate = new Date().toLocaleDateString("en-GB", {
    year: "numeric",
    month: "long",
    day: "numeric",
});

const contactEmail = "contact@melodymakerstudio.com";
const websiteUrl = "https://www.melodymakerstudio.com";

export default function TermsPage() {
    return (
        <div className="min-h-screen bg-transparent pt-24 pb-16">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="mb-10 text-center">
                    <h1 className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white via-primary to-accent mb-4">
                        Terms & Conditions
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
                        <h2 className="text-2xl font-semibold text-white mb-4">1. Who We Are</h2>
                        <p className="text-gray-300">
                            1.1. These Terms & Conditions (“Terms”) govern your use of the MelodyMaker Studio website at <strong><a href={websiteUrl} className="text-primary hover:underline">{websiteUrl.replace("https://", "")}</a></strong> (the “Site”) and any services, products or content provided through it (collectively, the “Services”).
                        </p>
                        <p className="text-gray-300">
                            1.2. <strong>MelodyMaker Studio</strong> is a trading name of <strong>Galaxyway AI Ltd</strong> (“MelodyMaker Studio”, “Galaxyway AI Ltd”, “we”, “us”, or “our”), a company registered in England and Wales with registered office at London, United Kingdom and company number 15966090.
                        </p>
                        <p className="text-gray-300">
                            1.3. References to “you” or “your” mean any visitor to the Site, any person or organisation using our Services, including but not limited to artists, clients ordering personalised songs, and business partners.
                        </p>
                        <p className="text-gray-300">
                            1.4. By accessing or using the Site or Services, you agree to be bound by these Terms. If you do not agree, you must not use the Site or Services.
                        </p>
                        <div className="bg-primary/10 border-l-4 border-primary p-4 rounded-r my-6">
                            <p className="font-semibold text-primary m-0">Important</p>
                            <p className="m-0 text-gray-300">These Terms are a general template and do not constitute legal advice. You should seek independent legal advice to ensure they fully meet your legal and regulatory requirements.</p>
                        </div>
                    </section>

                    <section>
                        <h2 className="text-2xl font-semibold text-white mb-4">2. Changes to These Terms</h2>
                        <p className="text-gray-300">
                            2.1. We may update these Terms from time to time to reflect changes in our Services, business, or applicable laws.
                        </p>
                        <p className="text-gray-300">
                            2.2. When we make changes, we will post the updated Terms on this page and update the “Last updated” date above. Continued use of the Site or Services after any changes means you accept the updated Terms.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-semibold text-white mb-4">3. Our Services</h2>
                        <p className="text-gray-300">
                            3.1. MelodyMaker Studio provides a range of music-related services, including but not limited to:
                        </p>
                        <ul className="list-disc pl-6 space-y-2 text-gray-300">
                            <li>Music production and recording.</li>
                            <li>Global digital music distribution to third-party platforms (e.g., Spotify, TikTok, Apple Music, YouTube Music and others).</li>
                            <li>Artist branding and online presence support.</li>
                            <li>Ready-made songs for artists to re-voice and release.</li>
                            <li>Artist collaborations and connections.</li>
                            <li>Personalised songs for individuals, brands, and organisations.</li>
                        </ul>
                        <p className="text-gray-300">
                            3.2. Details of our Services, pricing and packages are described on the Site or in specific agreements, proposals or invoices we issue to you.
                        </p>
                        <p className="text-gray-300">
                            3.3. We reserve the right to modify, suspend, or discontinue any part of the Services at any time, with or without notice, provided that we fulfil any existing contractual obligations to you.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-semibold text-white mb-4">4. Eligibility & Accounts</h2>
                        <p className="text-gray-300">
                            4.1. To use certain Services (for example, artist distribution accounts or dashboards), you may need to create an account and provide accurate information.
                        </p>
                        <p className="text-gray-300">
                            4.2. You must be at least 18 years old, or of legal age in your jurisdiction, to enter into a contract with us. If you are under 18, a parent or legal guardian must contract on your behalf.
                        </p>
                        <p className="text-gray-300">
                            4.3. You are responsible for maintaining the confidentiality of any login details and for all activities under your account. You must notify us immediately if you suspect unauthorised use of your account.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-semibold text-white mb-4">5. Orders, Quotes & Payments</h2>
                        <p className="text-gray-300">
                            5.1. Some Services require a formal order, quotation, or written agreement. An order is confirmed when we accept it in writing (including by email) or when you make payment, whichever occurs first.
                        </p>
                        <p className="text-gray-300">
                            5.2. Prices, fees and payment terms will be stated on the Site, in invoices, or in a separate written agreement. We may require full or partial payment in advance.
                        </p>
                        <p className="text-gray-300">
                            5.3. All fees are non-refundable unless expressly stated otherwise in writing or required by applicable law.
                        </p>
                        <p className="text-gray-300">
                            5.4. You are responsible for any bank charges, currency conversion fees, or other costs related to payments.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-semibold text-white mb-4">6. Artist Content & Intellectual Property</h2>

                        <h3 className="text-xl font-medium text-white mt-6 mb-2">6.1. Ownership of Artist Works</h3>
                        <p className="text-gray-300">
                            6.1.1. Unless otherwise agreed in writing, <strong>you (the artist) retain ownership</strong> of your original musical works and recordings that you create and provide to us (“Artist Content”).
                        </p>
                        <p className="text-gray-300">
                            6.1.2. By submitting Artist Content to us, you confirm that:
                        </p>
                        <ul className="list-disc pl-6 space-y-2 text-gray-300">
                            <li>You own or control all rights in the Artist Content; and</li>
                            <li>The Artist Content does not infringe the rights (including copyright, trademark, privacy or publicity rights) of any third party.</li>
                        </ul>

                        <h3 className="text-xl font-medium text-white mt-6 mb-2">6.2. Licence Granted to MelodyMaker Studio</h3>
                        <p className="text-gray-300">
                            6.2.1. To provide the Services, you grant Galaxyway AI Ltd / MelodyMaker Studio a <strong>non-exclusive, worldwide, transferable, sublicensable licence</strong> to:
                        </p>
                        <ul className="list-disc pl-6 space-y-2 text-gray-300">
                            <li>Distribute your music on digital platforms we work with;</li>
                            <li>Reproduce, host, store, and transmit the Artist Content;</li>
                            <li>Use your name, stage name, image, biography, artwork and related materials to promote your music and our Services;</li>
                            <li>Create promotional materials and marketing campaigns related to your music.</li>
                        </ul>
                        <p className="text-gray-300">
                            6.2.2. This licence remains in effect for as long as we are providing Services for your releases and for a reasonable period thereafter to wind down distribution, unless otherwise agreed in writing or terminated according to a specific distribution agreement.
                        </p>

                        <h3 className="text-xl font-medium text-white mt-6 mb-2">6.3. Our Intellectual Property</h3>
                        <p className="text-gray-300">
                            6.3.1. The Site, its design, logos, branding, layout, text, graphics, software, and all other content created by or for MelodyMaker Studio (together, the “MelodyMaker IP”) are owned by Galaxyway AI Ltd or licensed to us.
                        </p>
                        <p className="text-gray-300">
                            6.3.2. You must not copy, reproduce, distribute, modify, adapt, reverse engineer, or create derivative works from the MelodyMaker IP without our prior written consent.
                        </p>
                        <p className="text-gray-300">
                            6.3.3. Unauthorised use of our intellectual property, branding, software, or content may result in immediate termination of your access to the Services and may expose you to civil and/or criminal liability. We reserve the right to pursue all legal remedies, including injunctive relief and claims for damages, for any theft, misuse, or infringement of our intellectual property.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-semibold text-white mb-4">7. Personalised Songs & Ready-Made Songs</h2>

                        <h3 className="text-xl font-medium text-white mt-6 mb-2">7.1. Personalised Songs for Individuals & Brands</h3>
                        <p className="text-gray-300">
                            7.1.1. For personalised songs we create for you (for example, for birthdays, weddings, anniversaries, corporate events or marketing campaigns), the default ownership is as follows unless otherwise agreed in writing:
                        </p>
                        <ul className="list-disc pl-6 space-y-2 text-gray-300">
                            <li><strong>MelodyMaker Studio / Galaxyway AI Ltd owns the master recording and composition</strong>, and</li>
                            <li>You receive a <strong>non-exclusive licence</strong> to use the song for your personal or internal business use (e.g., events, social media posts, internal presentations).</li>
                        </ul>
                        <p className="text-gray-300">
                            7.1.2. If you require commercial rights (e.g., for TV adverts, paid campaigns, resale, commercial distribution under your own name), this must be expressly agreed in writing, and additional fees may apply.
                        </p>
                        <p className="text-gray-300">
                            7.1.3. You must not claim authorship of works you did not write or produce, or misrepresent the origin of our personalised songs or ready-made songs.
                        </p>

                        <h3 className="text-xl font-medium text-white mt-6 mb-2">7.2. Ready-Made Songs for Artists</h3>
                        <p className="text-gray-300">
                            7.2.1. For ready-made songs we provide for re-voicing and release:
                        </p>
                        <ul className="list-disc pl-6 space-y-2 text-gray-300">
                            <li>Ownership and licensing arrangements will be set out in a <strong>separate written agreement or contract</strong> (for example, a master/recording licence, assignment, or collaboration agreement).</li>
                            <li>You may be granted rights to release the song under your artist name, subject to agreed terms, credits, royalties and usage limitations.</li>
                        </ul>
                        <p className="text-gray-300">
                            7.2.2. Any unauthorised duplication, resale, or distribution of our ready-made songs outside the scope of the agreement is strictly prohibited and may result in legal action.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-semibold text-white mb-4">8. Third-Party Platforms & Services</h2>
                        <p className="text-gray-300">
                            8.1. As part of our distribution Services, your music may be delivered to third-party platforms (e.g., Spotify, TikTok, Apple Music, YouTube Music, Amazon Music and others). These platforms are independent companies and have their own terms and policies.
                        </p>
                        <p className="text-gray-300">
                            8.2. We are not responsible for the availability, performance, policies or actions of third-party platforms, including their decisions to edit, refuse, remove or block content.
                        </p>
                        <p className="text-gray-300">
                            8.3. Revenue, royalties or payments from third-party platforms are subject to those platforms’ reporting, schedules, and policies. We will account to you, if applicable, in accordance with the terms set out in our separate agreement or distribution policy.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-semibold text-white mb-4">9. User Conduct & Prohibited Uses</h2>
                        <p className="text-gray-300">
                            9.1. You agree not to use the Site or Services:
                        </p>
                        <ul className="list-disc pl-6 space-y-2 text-gray-300">
                            <li>For any unlawful purpose or in violation of any applicable laws or regulations.</li>
                            <li>To upload or distribute any content that is illegal, defamatory, obscene, infringing, or harmful.</li>
                            <li>To infringe or attempt to infringe the intellectual property or privacy rights of others.</li>
                            <li>To engage in fraudulent activities, including artificial streaming, bots, click-farms or manipulation of statistics.</li>
                            <li>To attempt to gain unauthorised access to our systems, servers or other accounts.</li>
                        </ul>
                        <p className="text-gray-300">
                            9.2. We reserve the right to suspend or terminate your access to the Site or Services if we reasonably suspect that you have breached these Terms.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-semibold text-white mb-4">10. Copyright Infringement & Takedowns</h2>
                        <p className="text-gray-300">
                            10.1. We respect the intellectual property rights of others and expect our users and artists to do the same.
                        </p>
                        <p className="text-gray-300">
                            10.2. If you believe that any content on the Site or distributed by us infringes your copyright or other intellectual property rights, please contact us with:
                        </p>
                        <ul className="list-disc pl-6 space-y-2 text-gray-300">
                            <li>Your name and contact details;</li>
                            <li>A description of the work you claim has been infringed;</li>
                            <li>The location or link to the infringing material;</li>
                            <li>A statement that you have a good-faith belief that the use is not authorised; and</li>
                            <li>A statement that the information you have provided is accurate and that you are the owner or authorised to act on the owner’s behalf.</li>
                        </ul>
                        <p className="text-gray-300">
                            10.3. We may remove or disable access to allegedly infringing material and may, at our discretion, terminate relationships with users or artists who repeatedly infringe the rights of others.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-semibold text-white mb-4">11. Privacy</h2>
                        <p className="text-gray-300">
                            11.1. Your use of the Site and Services is also governed by our <strong><a href="/privacy" className="text-primary hover:underline">Privacy Policy</a></strong>, which explains how we collect, use, and protect your personal data.
                        </p>
                        <p className="text-gray-300">
                            11.2. By using the Site or Services, you consent to our use of your information as described in the Privacy Policy.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-semibold text-white mb-4">12. Disclaimers</h2>
                        <p className="text-gray-300">
                            12.1. While we aim to provide professional, high-quality Services, the Site and Services are provided on an “as is” and “as available” basis, without any warranties of any kind, whether express or implied.
                        </p>
                        <p className="text-gray-300">
                            12.2. We do not guarantee:
                        </p>
                        <ul className="list-disc pl-6 space-y-2 text-gray-300">
                            <li>That the Site or Services will be uninterrupted, error-free or secure;</li>
                            <li>Any specific commercial success, level of exposure, number of streams, or income;</li>
                            <li>That third-party platforms will accept, maintain, or promote your releases.</li>
                        </ul>
                        <p className="text-gray-300">
                            12.3. To the fullest extent permitted by law, we disclaim all warranties, express or implied, including but not limited to warranties of merchantability, fitness for a particular purpose, non-infringement, and accuracy.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-semibold text-white mb-4">13. Limitation of Liability</h2>
                        <p className="text-gray-300">
                            13.1. To the maximum extent permitted by law, Galaxyway AI Ltd / MelodyMaker Studio and its directors, officers, employees, and agents will not be liable for:
                        </p>
                        <ul className="list-disc pl-6 space-y-2 text-gray-300">
                            <li>Any indirect, incidental, special, consequential or punitive damages;</li>
                            <li>Any loss of profits, revenue, data, or goodwill;</li>
                            <li>Any loss arising from the actions or policies of third-party platforms.</li>
                        </ul>
                        <p className="text-gray-300">
                            13.2. Our total aggregate liability arising out of or in connection with the Site or Services, whether in contract, tort (including negligence), or otherwise, will be limited to the total fees you paid to us for the Services giving rise to the claim in the 12 months immediately preceding the event.
                        </p>
                        <p className="text-gray-300">
                            13.3. Nothing in these Terms limits or excludes liability for death or personal injury caused by negligence, fraud, or any other liability that cannot be excluded by law.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-semibold text-white mb-4">14. Indemnity</h2>
                        <p className="text-gray-300">
                            14.1. You agree to indemnify, defend, and hold harmless Galaxyway AI Ltd / MelodyMaker Studio and our officers, directors, employees, and agents from and against any claims, damages, losses, liabilities, costs, and expenses (including reasonable legal fees) arising out of or related to:
                        </p>
                        <ul className="list-disc pl-6 space-y-2 text-gray-300">
                            <li>Your use of the Site or Services;</li>
                            <li>Any Artist Content or other material you provide;</li>
                            <li>Your breach of these Terms;</li>
                            <li>Your infringement of any third party’s rights, including intellectual property rights.</li>
                        </ul>
                    </section>

                    <section>
                        <h2 className="text-2xl font-semibold text-white mb-4">15. Termination</h2>
                        <p className="text-gray-300">
                            15.1. We may suspend or terminate your access to the Site or Services at any time, with or without notice, if we reasonably believe that you have breached these Terms or engaged in fraudulent, illegal or harmful activity.
                        </p>
                        <p className="text-gray-300">
                            15.2. You may terminate your relationship with us by notifying us in writing and ceasing use of the Site and Services. Any specific distribution or service agreements you have with us may have their own termination clauses.
                        </p>
                        <p className="text-gray-300">
                            15.3. Sections relating to intellectual property, limitations of liability, indemnity, and other clauses which by their nature should survive termination will continue to apply after termination.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-semibold text-white mb-4">16. Governing Law & Jurisdiction</h2>
                        <p className="text-gray-300">
                            16.1. These Terms and any dispute or claim arising out of or in connection with them shall be governed by and construed in accordance with the laws of <strong>England and Wales</strong>.
                        </p>
                        <p className="text-gray-300">
                            16.2. You agree that the courts of <strong>England and Wales</strong> shall have exclusive jurisdiction to settle any dispute or claim arising out of or in connection with these Terms or their subject matter.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-semibold text-white mb-4">17. Contact Us</h2>
                        <p className="text-gray-300">
                            If you have any questions about these Terms, our Services, or your legal rights, please contact us at:
                        </p>
                        <div className="mt-4 text-gray-300">
                            <p><strong>MelodyMaker Studio (Galaxyway AI Ltd)</strong></p>
                            <p>Email: <a href={`mailto:${contactEmail}`} className="text-primary hover:underline">{contactEmail}</a></p>
                            <p>Website: <strong><a href={websiteUrl} className="text-primary hover:underline" target="_blank" rel="noopener noreferrer">{websiteUrl.replace("https://", "")}</a></strong></p>
                        </div>
                    </section>

                </div>
            </div>
        </div>
    );
}
