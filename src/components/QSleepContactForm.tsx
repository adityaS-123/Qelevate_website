import { useState, type FormEvent, type ChangeEvent } from 'react';
import { Send, CheckCircle, AlertCircle } from 'lucide-react';

export default function QSleepContactForm() {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    country: '',
    primarySleepConcern: '',
    description: '',
  });

  const [status, setStatus] = useState<'loading' | 'success' | 'error' | null>(null);
  const [message, setMessage] = useState('');

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
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
        body: JSON.stringify({
          name: formData.fullName,
          email: formData.email,
          phone: formData.phone,
          subject: 'QSleep Enquiry - ' + formData.primarySleepConcern,
          message: `QSleep Enquiry Form\n\nFull Name: ${formData.fullName}\nEmail: ${formData.email}\nPhone/WhatsApp: ${formData.phone}\nCountry of Residence: ${formData.country}\nPrimary Sleep Concern: ${formData.primarySleepConcern}\nDescription: ${formData.description}`,
        }),
      });

      const data = await response.json();

      if (response.ok) {
        setStatus('success');
        setMessage('Thank you! Your QSleep enquiry has been submitted successfully. We will contact you soon.');
        setFormData({
          fullName: '',
          email: '',
          phone: '',
          country: '',
          primarySleepConcern: '',
          description: '',
        });
      } else {
        setStatus('error');
        setMessage(data.error || 'Failed to send enquiry. Please try again.');
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

        {/* Full Name Field */}
        <div>
          <label htmlFor="fullName" className="block text-sm font-medium text-gray-300 mb-2">
            Full Name <span className="text-red-400">*</span>
          </label>
          <input
            type="text"
            id="fullName"
            name="fullName"
            value={formData.fullName}
            onChange={handleChange}
            required
            className="w-full px-4 py-3 rounded-lg bg-gray-900/50 border border-gray-700 text-white placeholder-gray-500 focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 transition"
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
            className="w-full px-4 py-3 rounded-lg bg-gray-900/50 border border-gray-700 text-white placeholder-gray-500 focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 transition"
            placeholder="your@email.com"
          />
        </div>

        {/* Phone Field */}
        <div>
          <label htmlFor="phone" className="block text-sm font-medium text-gray-300 mb-2">
            Phone / WhatsApp Number <span className="text-red-400">*</span>
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            required
            className="w-full px-4 py-3 rounded-lg bg-gray-900/50 border border-gray-700 text-white placeholder-gray-500 focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 transition"
            placeholder="+1 (555) 000-0000"
          />
        </div>

        {/* Country Field */}
        <div>
          <label htmlFor="country" className="block text-sm font-medium text-gray-300 mb-2">
            Country of Residence <span className="text-red-400">*</span>
          </label>
          <input
            type="text"
            id="country"
            name="country"
            value={formData.country}
            onChange={handleChange}
            required
            className="w-full px-4 py-3 rounded-lg bg-gray-900/50 border border-gray-700 text-white placeholder-gray-500 focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 transition"
            placeholder="United States"
          />
        </div>

        {/* Primary Sleep Concern Field */}
        <div>
          <label htmlFor="primarySleepConcern" className="block text-sm font-medium text-gray-300 mb-2">
            What is your primary sleep concern? <span className="text-red-400">*</span>
          </label>
          <select
            id="primarySleepConcern"
            name="primarySleepConcern"
            value={formData.primarySleepConcern}
            onChange={handleChange}
            required
            className="w-full px-4 py-3 rounded-lg bg-gray-900/50 border border-gray-700 text-white placeholder-gray-500 focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 transition"
          >
            <option value="">Select a concern</option>
            <option value="Insomnia">Insomnia</option>
            <option value="Snoring / Suspected Sleep Apnea">Snoring / Suspected Sleep Apnea</option>
            <option value="Excessive Daytime Sleepiness or Fatigue">Excessive Daytime Sleepiness or Fatigue</option>
            <option value="Shift Work or Irregular Sleep Schedule">Shift Work or Irregular Sleep Schedule</option>
            <option value="Other">Other</option>
          </select>
        </div>

        {/* Description Field */}
        <div>
          <label htmlFor="description" className="block text-sm font-medium text-gray-300 mb-2">
            Briefly describe your sleep issue (optional)
          </label>
          <textarea
            id="description"
            name="description"
            value={formData.description}
            onChange={handleChange}
            rows={5}
            className="w-full px-4 py-3 rounded-lg bg-gray-900/50 border border-gray-700 text-white placeholder-gray-500 focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 transition resize-none"
            placeholder="Tell us more about your sleep concerns, symptoms, and how they affect your daily life..."
          />
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          disabled={status === 'loading'}
          className="w-full flex items-center justify-center gap-2 px-6 py-4 bg-gradient-to-r from-indigo-500 to-cyan-500 text-white font-semibold rounded-lg hover:shadow-lg hover:shadow-indigo-500/50 transition duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {status === 'loading' ? (
            <>
              <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
              Sending...
            </>
          ) : (
            <>
              Submit Enquiry
              <Send size={20} />
            </>
          )}
        </button>

        <p className="text-gray-500 text-sm text-center">
          We respect your privacy. Your information will be used only to contact you about your sleep health consultation.
        </p>
      </form>
    </div>
  );
}
