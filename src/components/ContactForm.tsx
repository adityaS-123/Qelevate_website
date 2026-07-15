import { useState, type FormEvent, type ChangeEvent } from 'react';
import { Send, CheckCircle, AlertCircle } from 'lucide-react';

export default function ContactForm() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState<'loading' | 'success' | 'error' | null>(null);
  const [statusMessage, setStatusMessage] = useState('');

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus('loading');

    try {
      const response = await fetch('/api/send-email', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...formData, subject: 'Website Contact' }),
      });
      const data = await response.json();

      if (response.ok) {
        setStatus('success');
        setStatusMessage('Thank you. Your message has been sent and we will be in touch shortly.');
        setFormData({ name: '', email: '', message: '' });
      } else {
        setStatus('error');
        setStatusMessage(data.error || 'Failed to send message. Please try again.');
      }
    } catch {
      setStatus('error');
      setStatusMessage('Network error. Please try again.');
    }

    setTimeout(() => { setStatus(null); setStatusMessage(''); }, 6000);
  };

  const inputClass =
    'w-full px-4 py-3 rounded-lg text-sm transition-colors duration-200 focus:outline-none focus:ring-1 ' +
    'bg-white border border-gray-300 text-gray-900 placeholder-gray-400 focus:border-blue-500 focus:ring-blue-500 ' +
    'dark:bg-gray-900/60 dark:border-gray-800 dark:text-gray-100 dark:placeholder-gray-600 dark:focus:border-blue-700 dark:focus:ring-blue-700';

  const labelClass = 'block text-sm font-medium mb-2 text-gray-600 dark:text-gray-400';

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      {status === 'success' && (
        <div className="flex items-start gap-3 p-4 rounded-lg bg-green-500/10 border border-green-500/30">
          <CheckCircle className="w-5 h-5 text-green-600 dark:text-green-400 shrink-0 mt-0.5" />
          <p className="text-green-700 dark:text-green-400 text-sm">{statusMessage}</p>
        </div>
      )}

      {status === 'error' && (
        <div className="flex items-start gap-3 p-4 rounded-lg bg-red-500/10 border border-red-500/30">
          <AlertCircle className="w-5 h-5 text-red-600 dark:text-red-400 shrink-0 mt-0.5" />
          <p className="text-red-700 dark:text-red-400 text-sm">{statusMessage}</p>
        </div>
      )}

      <div>
        <label htmlFor="name" className={labelClass}>
          Name <span className="text-gray-400 dark:text-gray-600">*</span>
        </label>
        <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} required className={inputClass} placeholder="Your name" />
      </div>

      <div>
        <label htmlFor="email" className={labelClass}>
          Email <span className="text-gray-400 dark:text-gray-600">*</span>
        </label>
        <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} required className={inputClass} placeholder="you@organisation.com" />
      </div>

      <div>
        <label htmlFor="message" className={labelClass}>
          Message <span className="text-gray-400 dark:text-gray-600">*</span>
        </label>
        <textarea id="message" name="message" value={formData.message} onChange={handleChange} required rows={5} className={`${inputClass} resize-none`} placeholder="Tell us about your interest or inquiry..." />
      </div>

      <button
        type="submit"
        disabled={status === 'loading'}
        className="btn-primary flex items-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {status === 'loading' ? (
          <><div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />Sending…</>
        ) : (
          <><Send size={16} />Send Message</>
        )}
      </button>
    </form>
  );
}
