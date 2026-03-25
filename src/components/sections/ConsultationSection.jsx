import { useState } from 'react';

const INITIAL_FORM = {
  name: '',
  company: '',
  phone: '',
  email: '',
  service: '',
  message: '',
};

function ConsultationSection() {
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
      setStatus({ type: 'error', message: 'Vui lòng nhập Họ tên, Email và chọn Nhu cầu.' });
      return;
    }

    setIsSubmitting(true);
    setStatus({ type: '', message: '' });

    const payload = {
      name: form.name.trim(),
      email: form.email.trim(),
      phone: form.phone.trim(),
      service: form.service,
      subject: `Lead mới từ EgyptViet - ${form.service}`,
      message: `Công ty: ${form.company || 'Không cung cấp'}\n${form.message || ''}`.trim(),
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
        throw new Error('Response từ API không phải JSON hợp lệ. Vui lòng kiểm tra log PHP.');
      }

      if (!response.ok || !result.success) {
        throw new Error(result.message || 'Không gửi được biểu mẫu. Vui lòng thử lại.');
      }

      setStatus({ type: 'success', message: 'Đăng ký thành công! Chúng tôi sẽ liên hệ bạn trong 24h.' });
      setForm(INITIAL_FORM);
    } catch (error) {
      setStatus({ type: 'error', message: error.message || 'Có lỗi xảy ra, vui lòng thử lại.' });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="section consultation">
      <div className="container consultation__card">
        <header className="consultation__header">
          <h2 className="section-title">Nhận tư vấn & báo giá miễn phí</h2>
          <p>Điền thông tin để được hỗ trợ nhanh nhất. Đội ngũ chuyên gia sẽ liên hệ trong vòng 24h.</p>
        </header>
        <form className="consultation__form" onSubmit={handleSubmit}>
          <label>
            <span>Họ & tên</span>
            <input name="name" placeholder="Nguyễn Văn A" type="text" value={form.name} onChange={handleChange} />
          </label>
          <label>
            <span>Công ty</span>
            <input name="company" placeholder="Công ty Xuất Nhập Khẩu..." type="text" value={form.company} onChange={handleChange} />
          </label>
          <label>
            <span>Số điện thoại</span>
            <input name="phone" placeholder="090 xxx xxxx" type="tel" value={form.phone} onChange={handleChange} />
          </label>
          <label>
            <span>Email</span>
            <input name="email" placeholder="partner@company.com" type="email" value={form.email} onChange={handleChange} />
          </label>
          <label className="is-wide">
            <span>Nhu cầu (Nhập khẩu / Halal / Công bố sản phẩm)</span>
            <select name="service" value={form.service} onChange={handleChange}>
              <option value="">-- Chọn nhu cầu --</option>
              <option value="Nhập khẩu">Nhập khẩu</option>
              <option value="Halal">Halal</option>
              <option value="Công bố sản phẩm">Công bố sản phẩm</option>
            </select>
          </label>
          <label className="is-wide">
            <span>Lời nhắn thêm</span>
            <textarea
              name="message"
              rows="4"
              placeholder="Ví dụ: Tôi cần nhập khẩu Tahini và hỗ trợ công bố sản phẩm..."
              value={form.message}
              onChange={handleChange}
            />
          </label>
          <button className="btn-primary is-wide" type="submit" disabled={isSubmitting}>
            {isSubmitting ? 'Đang gửi...' : '🔥 Nhận báo giá ngay hôm nay'}
          </button>
          {status.message ? <p className={`consultation__status ${status.type}`}>{status.message}</p> : null}
        </form>
      </div>
    </section>
  );
}

export default ConsultationSection;
