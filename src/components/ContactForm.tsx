import { useState, type FormEvent, type ChangeEvent } from 'react';
import { Send, CheckCircle, AlertCircle } from 'lucide-react';

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  });

  const [status, setStatus] = useState<'loading' | 'success' | 'error' | null>(null);
  const [message, setMessage] = useState('');

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus('loading');

    try {
      const response = await fetch('/api/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        setStatus('success');
        setMessage('Thank you! Your message has been sent successfully. We will get back to you soon.');
        setFormData({
          name: '',
          email: '',
          phone: '',
          subject: '',
          message: '',
        });
      } else {
        setStatus('error');
        setMessage(data.error || 'Failed to send message. Please try again.');
      }
    } catch (error) {
      setStatus('error');
      setMessage('Network error. Please make sure the server is running and try again.');
      console.error('Error:', error);
    }

    // Clear status after 5 seconds
    setTimeout(() => {
      setStatus(null);
      setMessage('');
    }, 5000);
  };

  return (
    <div className="w-full max-w-2xl mx-auto">
      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Status Messages */}
        {status === 'success' && (
          <div className="flex items-center gap-3 p-4 rounded-lg bg-green-500/10 border border-green-500/50">
            <CheckCircle className="w-5 h-5 text-green-400 shrink-0" />
            <p className="text-green-400">{message}</p>
          </div>
        )}

        {status === 'error' && (
          <div className="flex items-center gap-3 p-4 rounded-lg bg-red-500/10 border border-red-500/50">
            <AlertCircle className="w-5 h-5 text-red-400 shrink-0" />
            <p className="text-red-400">{message}</p>
          </div>
        )}

        {/* Name Field */}
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
            Full Name <span className="text-red-400">*</span>
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            className="w-full px-4 py-3 rounded-lg bg-gray-900/50 border border-gray-700 text-white placeholder-gray-500 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition"
            placeholder="John Doe"
          />
        </div>

        {/* Email Field */}
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
            Email Address <span className="text-red-400">*</span>
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full px-4 py-3 rounded-lg bg-gray-900/50 border border-gray-700 text-white placeholder-gray-500 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition"
            placeholder="john@example.com"
          />
        </div>

        {/* Phone Field */}
        <div>
          <label htmlFor="phone" className="block text-sm font-medium text-gray-300 mb-2">
            Phone Number <span className="text-gray-500">(Optional)</span>
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            className="w-full px-4 py-3 rounded-lg bg-gray-900/50 border border-gray-700 text-white placeholder-gray-500 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition"
            placeholder="+1 (555) 123-4567"
          />
        </div>

        {/* Subject Field */}
        <div>
          <label htmlFor="subject" className="block text-sm font-medium text-gray-300 mb-2">
            Subject <span className="text-red-400">*</span>
          </label>
          <input
            type="text"
            id="subject"
            name="subject"
            value={formData.subject}
            onChange={handleChange}
            required
            className="w-full px-4 py-3 rounded-lg bg-gray-900/50 border border-gray-700 text-white placeholder-gray-500 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition"
            placeholder="Consultation Request"
          />
        </div>

        {/* Message Field */}
        <div>
          <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
            Message <span className="text-red-400">*</span>
          </label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
            rows={5}
            className="w-full px-4 py-3 rounded-lg bg-gray-900/50 border border-gray-700 text-white placeholder-gray-500 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition resize-none"
            placeholder="Tell us more about your inquiry..."
          ></textarea>
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          disabled={status === 'loading'}
          className="w-full btn-primary flex items-center justify-center gap-2 py-3 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {status === 'loading' ? (
            <>
              <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
              Sending...
            </>
          ) : (
            <>
              <Send size={20} />
              Send Message
            </>
          )}
        </button>
      </form>
    </div>
  );
}
