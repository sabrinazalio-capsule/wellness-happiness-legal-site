import { useEffect } from 'react';
import { Link } from 'react-router-dom';

function Terms() {
  useEffect(() => {
    document.title = 'Terms and Conditions – Happiness To Go';
  }, []);

  return (
    <>
      <header>
        <div className="container">
          <h1>Happiness To Go</h1>
          <p className="subtitle">Terms and Conditions</p>
          <p className="updated">Last updated: February 2025</p>
        </div>
      </header>

      <div className="container">
        <main>
          <nav className="links">
            <Link to="/delete-data">Data deletion request</Link>
          </nav>

          <section>
            <h2>1. Acceptance of the terms</h2>
            <p>By accessing or using the Happiness To Go application ("the App"), you agree to be bound by these Terms and Conditions. If you do not agree with any part of them, you must not use the App.</p>
          </section>

          <section>
            <h2>2. Description of the service</h2>
            <p>Happiness To Go is a wellness application that offers:</p>
            <ul>
              <li><strong>Daily activities ("glows"):</strong> gratitude, energy, calm, kindness and connection exercises, with completion tracking and streaks.</li>
              <li><strong>Journal:</strong> personal entries with title, content, category and optional photo.</li>
              <li><strong>Community:</strong> posts, likes and comments linked to glow types.</li>
              <li><strong>Courses:</strong> educational content with lessons and progress tracking.</li>
            </ul>
            <p>Some content or features may require a paid subscription.</p>
          </section>

          <section>
            <h2>3. Registration and account</h2>
            <p>To use all features of the App you may need to register. You are responsible for keeping your password confidential and for all activity under your account. Registration data (e.g. email and display name) is used to identify you and provide the service.</p>
          </section>

          <section>
            <h2>4. Personal data and privacy</h2>
            <p><strong>Data we collect:</strong></p>
            <ul>
              <li>Account data: email, password (stored securely), display name and, if you choose, avatar and bio.</li>
              <li>Content you create: journal entries (title, content, category, photos), community posts and comments, and daily activity completions (glows).</li>
              <li>Progress: progress in courses and lessons.</li>
              <li>Purchase and subscription data: subscriptions are managed via RevenueCat and the stores (App Store, Google Play); we may receive information about your subscription status linked to your account.</li>
            </ul>
            <p><strong>Purpose:</strong> to provide the service, personalise your experience, provide support and, where applicable, manage billing and subscriptions.</p>
            <p><strong>Storage:</strong> data is stored on Supabase infrastructure (database and authentication). The project may be located in the EU or other regions depending on project configuration.</p>
            <p><strong>Third parties:</strong> we use RevenueCat for subscriptions. If you sign in with Google or Apple, those providers process the data you give them in accordance with their own policies.</p>
            <p><strong>Retention:</strong> we retain your data while you maintain an active account and as required by law or billing. You may request deletion of your personal data at any time via the <Link to="/delete-data">data deletion request</Link> page.</p>
          </section>

          <section>
            <h2>5. Acceptable use</h2>
            <p>You agree to use the App lawfully and respectfully. You may not use the App to harass, insult or impersonate other users, or to post illegal, offensive or rights-infringing content. We reserve the right to remove content or accounts that breach these rules.</p>
          </section>

          <section>
            <h2>6. Intellectual property</h2>
            <p>The App's elements (design, text, logic, trademarks) are owned by Happiness To Go or its licensors. You retain rights in the content you create (journal, posts, comments), but you grant us the rights necessary to store, display and operate the service in relation to that content.</p>
          </section>

          <section>
            <h2>7. Subscriptions and payments</h2>
            <p>Subscriptions and in-app purchases are managed through RevenueCat and the stores (App Store, Google Play). Pricing, renewals, refunds and cancellations are governed by each store's policies. Happiness To Go does not store card details; payment is made solely through the stores.</p>
          </section>

          <section>
            <h2>8. Limitation of liability</h2>
            <p>The App is provided "as is". To the extent permitted by applicable law, we shall not be liable for indirect, incidental or consequential damages arising from the use or inability to use the App. Liability for content posted by users rests with the person who posts it.</p>
          </section>

          <section>
            <h2>9. Changes to the terms and governing law</h2>
            <p>We may modify these Terms at any time. Changes will be published on this page with a new "Last updated" date. Continued use of the App after publication constitutes acceptance of the changes. The law applicable to any dispute will depend on your residence and that of the service provider.</p>
          </section>

          <section>
            <h2>10. Contact</h2>
            <p>For questions about these Terms or your personal data, you can contact us at:</p>
            <p><a href="mailto:happinesstogo5@gmail.com">happinesstogo5@gmail.com</a></p>
          </section>

          <footer>
            <p><Link to="/delete-data">Data deletion request</Link></p>
          </footer>
        </main>
      </div>
    </>
  );
}

export default Terms;
