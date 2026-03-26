import { useState } from 'react';

const INITIAL_FORM = {
  name: '',
  company: '',
  phone: '',
  email: '',
  service: '',
  message: '',
};

function ConsultationSection({ content }) {
  const [form, setForm] = useState(INITIAL_FORM);
  const [status, setStatus] = useState({ type: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = ({ target }) => {
    const { name, value } = target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!form.name.trim() || !form.email.trim() || !form.service.trim()) {
      setStatus({ type: 'error', message: content.validationError });
      return;
    }

    setIsSubmitting(true);
    setStatus({ type: '', message: '' });

    const payload = {
      name: form.name.trim(),
      email: form.email.trim(),
      phone: form.phone.trim(),
      service: form.service,
      subject: `${content.leadSubjectPrefix} ${form.service}`,
      message: `Company: ${form.company || content.companyFallback}\n${form.message || ''}`.trim(),
    };

    try {
      const response = await fetch('/api.php', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });

      const contentType = response.headers.get('content-type') || '';
      const rawBody = await response.text();

      if (!contentType.includes('application/json')) {
        const preview = rawBody.slice(0, 160).replace(/\s+/g, ' ').trim();
        throw new Error(`API không trả JSON. Preview: ${preview || 'empty response'}`);
      }

      let result;
      try {
        result = JSON.parse(rawBody);
      } catch {
        throw new Error(content.invalidJsonError);
      }

      if (!response.ok || !result.success) {
        throw new Error(result.message || content.submitError);
      }

      setStatus({ type: 'success', message: content.successMessage });
      setForm(INITIAL_FORM);
    } catch (error) {
      setStatus({ type: 'error', message: error.message || content.fallbackError });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="section consultation">
      <div className="container consultation__card">
        <header className="consultation__header">
          <h2 className="section-title">{content.title}</h2>
          <p>{content.subtitle}</p>
        </header>
        <form className="consultation__form" onSubmit={handleSubmit}>
          <label>
            <span>{content.labels.name}</span>
            <input
              name="name"
              placeholder={content.placeholders.name}
              type="text"
              value={form.name}
              onChange={handleChange}
            />
          </label>
          <label>
            <span>{content.labels.company}</span>
            <input
              name="company"
              placeholder={content.placeholders.company}
              type="text"
              value={form.company}
              onChange={handleChange}
            />
          </label>
          <label>
            <span>{content.labels.phone}</span>
            <input
              name="phone"
              placeholder={content.placeholders.phone}
              type="tel"
              value={form.phone}
              onChange={handleChange}
            />
          </label>
          <label>
            <span>{content.labels.email}</span>
            <input
              name="email"
              placeholder={content.placeholders.email}
              type="email"
              value={form.email}
              onChange={handleChange}
            />
          </label>
          <label className="is-wide">
            <span>{content.labels.service}</span>
            <select name="service" value={form.service} onChange={handleChange}>
              <option value="">{content.options.default}</option>
              <option value={content.options.import}>{content.options.import}</option>
              <option value={content.options.halal}>{content.options.halal}</option>
              <option value={content.options.declaration}>{content.options.declaration}</option>
            </select>
          </label>
          <label className="is-wide">
            <span>{content.labels.message}</span>
            <textarea
              name="message"
              rows="4"
              placeholder={content.placeholders.message}
              value={form.message}
              onChange={handleChange}
            />
          </label>
          <button className="btn-primary is-wide" type="submit" disabled={isSubmitting}>
            {isSubmitting ? content.submitLoading : content.submitIdle}
          </button>
          {status.message ? <p className={`consultation__status ${status.type}`}>{status.message}</p> : null}
        </form>
      </div>
    </section>
  );
}

export default ConsultationSection;
