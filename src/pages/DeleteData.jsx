import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { supabase } from '../supabase';

function DeleteData() {
  const [email, setEmail] = useState('');
  const [confirmEmail, setConfirmEmail] = useState('');
  const [confirmar, setConfirmar] = useState(false);
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState({ text: '', isError: false, hidden: true });

  useEffect(() => {
    document.title = 'Data deletion request – Happiness To Go';
  }, []);

  const showMessage = (text, isError) => {
    setMessage({ text, isError, hidden: false });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!confirmar) return;

    const emailTrim = email.trim();
    const confirmEmailTrim = confirmEmail.trim();
    if (emailTrim !== confirmEmailTrim) {
      showMessage('Email and confirmation do not match.', true);
      return;
    }

    if (!import.meta.env.VITE_SUPABASE_URL || !import.meta.env.VITE_SUPABASE_ANON_KEY) {
      showMessage('Configuration error: missing Supabase URL or key. Please contact support.', true);
      return;
    }

    setLoading(true);
    setMessage(prev => ({ ...prev, hidden: true }));

    try {
      const { data, error } = await supabase.functions.invoke('delete-user-data', {
        body: { email: emailTrim, confirmEmail: confirmEmailTrim },
      });

      setLoading(false);

      if (error) {
        showMessage(error.message || 'Network error. Try again or contact support.', true);
        return;
      }

      if (data?.success) {
        showMessage(data.message || 'Your data has been deleted.', false);
        setEmail('');
        setConfirmEmail('');
        setConfirmar(false);
      } else {
        showMessage(
          data?.error || 'Something went wrong. Please try again or contact support.',
          true
        );
      }
    } catch (err) {
      setLoading(false);
      showMessage(err?.message || 'Network error. Try again or contact support.', true);
    }
  };

  return (
    <>
      <header>
        <div className="container">
          <h1>Happiness To Go</h1>
          <p className="subtitle">Data deletion request</p>
        </div>
      </header>

      <div className="container">
        <main>
          <nav className="links">
            <Link to="/">Terms and Conditions</Link>
          </nav>

          <section>
            <h2>Right to deletion of your data</h2>
            <p>If you have left the application (signed out or stopped using it) and want us to delete your personal data, you can request automatic deletion below. In line with GDPR and data protection regulations, deletion is processed <strong>automatically</strong> once you confirm.</p>
          </section>

          <section>
            <h2>What will be deleted</h2>
            <p>After you submit and confirm your email, we will delete:</p>
            <ul>
              <li>Your authentication account (Supabase Auth) and your profile (name, email, avatar, bio).</li>
              <li>Your journal entries, community posts and comments.</li>
              <li>Records of completed daily activities (glows) and your progress in courses.</li>
              <li>Your entry in the list of users with gifted courses (app_users), if it exists.</li>
            </ul>
            <p>Purchase and subscription data managed by RevenueCat and the stores (App Store, Google Play) may be retained for as long as legal or tax obligations require; in that case we will inform you what is kept and why.</p>
          </section>

          <section>
            <h2>Request deletion</h2>
            <p>Enter the <strong>email address you used to register</strong> in the App and confirm it. Deletion runs automatically and cannot be undone.</p>

            <div
              id="form-message"
              className={`form-message ${message.isError ? 'form-message-error' : 'form-message-success'}`}
              role="alert"
              aria-live="polite"
              hidden={message.hidden}
            >
              {message.text}
            </div>

            <form id="form-eliminacion" onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="email">Email address of the account to delete *</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  placeholder="example@email.com"
                  autoComplete="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                <p className="hint">Must be the email you used to register in Happiness To Go.</p>
              </div>
              <div className="form-group">
                <label htmlFor="confirmEmail">Confirm email address *</label>
                <input
                  type="email"
                  id="confirmEmail"
                  name="confirmEmail"
                  required
                  placeholder="example@email.com"
                  autoComplete="email"
                  value={confirmEmail}
                  onChange={(e) => setConfirmEmail(e.target.value)}
                />
                <p className="hint">Re-enter the same email to confirm.</p>
              </div>
              <div className="checkbox-group">
                <label>
                  <input
                    type="checkbox"
                    id="confirmar"
                    name="confirmar"
                    required
                    checked={confirmar}
                    onChange={(e) => setConfirmar(e.target.checked)}
                  />
                  <span>I confirm that I wish to delete my personal data from Happiness To Go and that I am the account holder or am acting on their behalf. I understand this action is irreversible.</span>
                </label>
              </div>
              <button type="submit" className="btn" id="btn-enviar" disabled={loading}>
                Delete my data
              </button>
            </form>

            <div className="legal-note">
              <strong>Need help?</strong> If the form does not work or you have questions, contact <a href="mailto:happinesstogo5@gmail.com">happinesstogo5@gmail.com</a> with the subject <strong>Data deletion request - Happiness To Go</strong> and the email of the account to delete.
            </div>
          </section>

          <footer>
            <p><Link to="/">Terms and Conditions</Link></p>
          </footer>
        </main>
      </div>
    </>
  );
}

export default DeleteData;
