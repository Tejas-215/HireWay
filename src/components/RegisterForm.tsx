import { useState, FormEvent } from 'react';
import { CheckCircle, Upload, Loader2, BookOpen, AlertCircle } from 'lucide-react';
import { supabase } from '../lib/supabase';

const experienceOptions = ['0–1 years', '1–3 years', '3–5 years', '5–8 years', '8–12 years', '12+ years'];
const educationOptions = ['High School', 'Diploma', "Bachelor's Degree", "Master's Degree", 'MBA', 'PhD', 'Other'];

const initialForm = {
  full_name: '',
  email: '',
  phone: '',
  date_of_birth: '',
  address: '',
  current_company: '',
  job_title: '',
  experience_years: '',
  current_ctc: '',
  expected_ctc: '',
  education: '',
  pan_number: '',
};

const initialErrors = {
  full_name: '',
  email: '',
  phone: '',
  date_of_birth: '',
  address: '',
  current_company: '',
  job_title: '',
  experience_years: '',
  current_ctc: '',
  expected_ctc: '',
  education: '',
  pan_number: '',
  resume: '',
};

export default function RegisterForm() {
  const [form, setForm] = useState(initialForm);
  const [resumeFile, setResumeFile] = useState<File | null>(null);
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState('');
  const [fieldErrors, setFieldErrors] = useState(initialErrors);

  const validateField = (field: string, value: string) => {
    let error = '';

    switch (field) {
      case 'full_name':
        if (!value.trim()) {
          error = 'Full name is required';
        } else if (value.trim().length < 2) {
          error = 'Full name must be at least 2 characters';
        } else if (!/^[a-zA-Z\s]+$/.test(value.trim())) {
          error = 'Full name should contain only letters and spaces';
        }
        break;

      case 'email':
        if (!value.trim()) {
          error = 'Email is required';
        } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) {
          error = 'Please enter a valid email address';
        }
        break;

      case 'phone':
        if (!value.trim()) {
          error = 'Phone number is required';
        } else if (!/^[6-9]\d{9}$/.test(value.replace(/\s+/g, ''))) {
          error = 'Please enter a valid 10-digit mobile number starting with 6-9';
        }
        break;

      case 'date_of_birth':
        if (!value) {
          error = 'Date of birth is required';
        } else {
          const birthDate = new Date(value);
          const today = new Date();
          const age = today.getFullYear() - birthDate.getFullYear();
          if (age < 18) {
            error = 'You must be at least 18 years old';
          } else if (age > 65) {
            error = 'Age must be less than 65 years';
          }
        }
        break;

      case 'address':
        if (!value.trim()) {
          error = 'Address is required';
        } else if (value.trim().length < 10) {
          error = 'Please provide a complete address (minimum 10 characters)';
        }
        break;

      case 'current_company':
        if (!value.trim()) {
          error = 'Current company is required';
        } else if (value.trim().length < 2) {
          error = 'Company name must be at least 2 characters';
        }
        break;

      case 'job_title':
        if (!value.trim()) {
          error = 'Current role is required';
        } else if (value.trim().length < 2) {
          error = 'Job title must be at least 2 characters';
        }
        break;

      case 'experience_years':
        if (!value) {
          error = 'Experience is required';
        }
        break;

      case 'education':
        if (!value) {
          error = 'Education is required';
        }
        break;

      case 'current_ctc':
        if (!value.trim()) {
          error = 'Current CTC is required';
        } else if (isNaN(Number(value)) || Number(value) <= 0) {
          error = 'Please enter a valid CTC amount';
        } else if (Number(value) > 100) {
          error = 'CTC seems too high (max 100 LPA)';
        }
        break;

      case 'expected_ctc':
        if (!value.trim()) {
          error = 'Expected CTC is required';
        } else if (isNaN(Number(value)) || Number(value) <= 0) {
          error = 'Please enter a valid expected CTC amount';
        } else if (Number(value) > 200) {
          error = 'Expected CTC seems too high (max 200 LPA)';
        } else if (Number(value) <= Number(form.current_ctc)) {
          error = 'Expected CTC should be higher than current CTC';
        }
        break;

      case 'pan_number':
        if (!value.trim()) {
          error = 'PAN number is required';
        } else if (!/^[A-Z]{5}[0-9]{4}[A-Z]{1}$/.test(value.toUpperCase())) {
          error = 'Please enter a valid PAN number (e.g., ABCDE1234F)';
        }
        break;
    }

    setFieldErrors(prev => ({ ...prev, [field]: error }));
    return error === '';
  };

  const set = (field: string) => (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const value = e.target.value;
    setForm((prev) => ({ ...prev, [field]: value }));
    validateField(field, value);
  };

  const handleResumeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0] || null;
    setResumeFile(file);

    if (!file) {
      setFieldErrors(prev => ({ ...prev, resume: 'Resume is required' }));
    } else {
      const allowedTypes = ['application/pdf', 'application/msword', 'application/vnd.openxmlformats-officedocument.wordprocessingml.document'];
      const maxSize = 5 * 1024 * 1024; // 5MB

      if (!allowedTypes.includes(file.type)) {
        setFieldErrors(prev => ({ ...prev, resume: 'Please upload a PDF or Word document' }));
      } else if (file.size > maxSize) {
        setFieldErrors(prev => ({ ...prev, resume: 'File size must be less than 5MB' }));
      } else {
        setFieldErrors(prev => ({ ...prev, resume: '' }));
      }
    }
  };

  const createSupportMailto = (resume_url: string) => {
    const body = [
      `Full Name: ${form.full_name}`,
      `Email: ${form.email}`,
      `Phone: ${form.phone}`,
      `Date of Birth: ${form.date_of_birth}`,
      `Address: ${form.address}`,
      `Current Company: ${form.current_company}`,
      `Current Role: ${form.job_title}`,
      `Experience: ${form.experience_years}`,
      `Current CTC: ${form.current_ctc}`,
      `Expected CTC: ${form.expected_ctc}`,
      `Education: ${form.education}`,
      `PAN Number: ${form.pan_number}`,
      `Resume URL: ${resume_url || 'Not provided'}`,
    ].join('\n');

    return `mailto:chandrakumar3897@gmail.com?subject=${encodeURIComponent(
      'New HireWay Registration',
    )}&body=${encodeURIComponent(body)}`;
  };

  const sendEmailToSupport = async (resume_url: string) => {
    const formattedMessage = `
New HireWay Registration Submission

Personal Information:
- Full Name: ${form.full_name}
- Email: ${form.email}
- Phone: ${form.phone}
- Date of Birth: ${form.date_of_birth}
- Address: ${form.address}

Professional Details:
- Current Company: ${form.current_company}
- Current Role: ${form.job_title}
- Experience: ${form.experience_years}
- Education: ${form.education}

Compensation:
- Current CTC: ₹${form.current_ctc} LPA
- Expected CTC: ₹${form.expected_ctc} LPA

Additional Information:
- PAN Number: ${form.pan_number}
- Resume: ${resume_url || 'Not provided'}

Source: HireWay Registration Form
Submitted on: ${new Date().toLocaleString()}
    `.trim();

    const payload = {
      _subject: 'New HireWay Registration - ' + form.full_name,
      _captcha: 'false',
      message: formattedMessage,
    };

    const response = await fetch('https://formsubmit.co/ajax/chandrakumar3897@gmail.com', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
      body: JSON.stringify(payload),
    });

    if (!response.ok) {
      const text = await response.text();
      throw new Error(`Email delivery failed: ${response.status} ${text}`);
    }

    const data = await response.json();
    if (data.success === false) {
      throw new Error(data.message || 'Email delivery failed');
    }
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setError('');

    // Validate all fields
    const fields = Object.keys(initialForm);
    let hasErrors = false;

    fields.forEach(field => {
      if (!validateField(field, form[field as keyof typeof form])) {
        hasErrors = true;
      }
    });

    // Validate resume
    if (!resumeFile) {
      setFieldErrors(prev => ({ ...prev, resume: 'Resume is required' }));
      hasErrors = true;
    }

    if (hasErrors) {
      setError('Please fix the errors below and try again.');
      return;
    }

    setLoading(true);

    try {
      let resume_url = '';

      if (resumeFile) {
        const ext = resumeFile.name.split('.').pop();
        const fileName = `${Date.now()}-${Math.random().toString(36).slice(2)}.${ext}`;
        const { error: uploadError } = await supabase.storage
          .from('resumes')
          .upload(fileName, resumeFile);
        if (uploadError) throw uploadError;
        const { data: urlData } = supabase.storage.from('resumes').getPublicUrl(fileName);
        resume_url = urlData.publicUrl;
      }

      const { error: insertError } = await supabase.from('leads').insert([
        {
          ...form,
          date_of_birth: form.date_of_birth || null,
          resume_url,
        },
      ]);

      if (insertError) throw insertError;

      await sendEmailToSupport(resume_url);
      setSuccess(true);
      setForm(initialForm);
      setResumeFile(null);
      setFieldErrors(initialErrors);
    } catch (err: unknown) {
      if (err instanceof Error) {
        setError(err.message || 'Something went wrong. Please try again.');
      } else {
        setError('Something went wrong. Please try again.');
      }
    } finally {
      setLoading(false);
    }
  };

  if (success) {
    return (
      <div className="flex flex-col items-center justify-center py-16 text-center">
        <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mb-6">
          <CheckCircle size={40} className="text-green-500" />
        </div>
        <h3 className="text-2xl font-bold text-gray-900 mb-3">You're Registered!</h3>
        <p className="text-gray-500 max-w-md">
          Your registration is complete and the details have been sent to chandrakumar3897@gmail.com.
        </p>
        <button
          onClick={() => setSuccess(false)}
          className="mt-6 text-blue-600 text-sm font-medium hover:underline"
        >
          Register another profile
        </button>
      </div>
    );
  }

  const inputClass = 'w-full border rounded-xl px-4 py-3 text-sm text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all bg-white';
  const errorInputClass = 'w-full border border-red-300 rounded-xl px-4 py-3 text-sm text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent transition-all bg-white';
  const labelClass = 'block text-xs font-semibold text-gray-600 mb-1.5';
  const errorLabelClass = 'block text-xs font-semibold text-red-600 mb-1.5';
  const errorTextClass = 'text-xs text-red-600 mt-1 flex items-center gap-1';

  return (
    <form onSubmit={handleSubmit} className="grid grid-cols-1 sm:grid-cols-2 gap-5">
      <div>
        <label className={fieldErrors.full_name ? errorLabelClass : labelClass}>
          Full Name <span className="text-red-500">*</span>
        </label>
        <input
          className={fieldErrors.full_name ? errorInputClass : inputClass}
          placeholder="Your full name"
          value={form.full_name}
          onChange={set('full_name')}
        />
        {fieldErrors.full_name && (
          <div className={errorTextClass}>
            <AlertCircle size={12} />
            {fieldErrors.full_name}
          </div>
        )}
      </div>

      <div>
        <label className={fieldErrors.email ? errorLabelClass : labelClass}>
          Email Address <span className="text-red-500">*</span>
        </label>
        <input
          type="email"
          className={fieldErrors.email ? errorInputClass : inputClass}
          placeholder="your.email@example.com"
          value={form.email}
          onChange={set('email')}
        />
        {fieldErrors.email && (
          <div className={errorTextClass}>
            <AlertCircle size={12} />
            {fieldErrors.email}
          </div>
        )}
      </div>

      <div>
        <label className={fieldErrors.phone ? errorLabelClass : labelClass}>
          Phone Number <span className="text-red-500">*</span>
        </label>
        <input
          type="tel"
          className={fieldErrors.phone ? errorInputClass : inputClass}
          placeholder="9876543210"
          value={form.phone}
          onChange={set('phone')}
          maxLength={10}
        />
        {fieldErrors.phone && (
          <div className={errorTextClass}>
            <AlertCircle size={12} />
            {fieldErrors.phone}
          </div>
        )}
      </div>

      <div>
        <label className={fieldErrors.date_of_birth ? errorLabelClass : labelClass}>
          Date of Birth <span className="text-red-500">*</span>
        </label>
        <input
          type="date"
          className={fieldErrors.date_of_birth ? errorInputClass : inputClass}
          value={form.date_of_birth}
          onChange={set('date_of_birth')}
          max={new Date(Date.now() - 18 * 365 * 24 * 60 * 60 * 1000).toISOString().split('T')[0]}
        />
        {fieldErrors.date_of_birth && (
          <div className={errorTextClass}>
            <AlertCircle size={12} />
            {fieldErrors.date_of_birth}
          </div>
        )}
      </div>

      <div className="sm:col-span-2">
        <label className={fieldErrors.address ? errorLabelClass : labelClass}>
          Address <span className="text-red-500">*</span>
        </label>
        <textarea
          className={fieldErrors.address ? `${errorInputClass} resize-none` : `${inputClass} resize-none`}
          placeholder="Your complete address"
          value={form.address}
          onChange={set('address')}
          rows={3}
        />
        {fieldErrors.address && (
          <div className={errorTextClass}>
            <AlertCircle size={12} />
            {fieldErrors.address}
          </div>
        )}
      </div>

      <div>
        <label className={fieldErrors.current_company ? errorLabelClass : labelClass}>
          Current Company <span className="text-red-500">*</span>
        </label>
        <input
          className={fieldErrors.current_company ? errorInputClass : inputClass}
          placeholder="e.g., TCS, Infosys, Wipro"
          value={form.current_company}
          onChange={set('current_company')}
        />
        {fieldErrors.current_company && (
          <div className={errorTextClass}>
            <AlertCircle size={12} />
            {fieldErrors.current_company}
          </div>
        )}
      </div>

      <div>
        <label className={fieldErrors.job_title ? errorLabelClass : labelClass}>
          Current Role <span className="text-red-500">*</span>
        </label>
        <input
          className={fieldErrors.job_title ? errorInputClass : inputClass}
          placeholder="e.g., Software Engineer"
          value={form.job_title}
          onChange={set('job_title')}
        />
        {fieldErrors.job_title && (
          <div className={errorTextClass}>
            <AlertCircle size={12} />
            {fieldErrors.job_title}
          </div>
        )}
      </div>

      <div>
        <label className={fieldErrors.experience_years ? errorLabelClass : labelClass}>
          Experience (Years) <span className="text-red-500">*</span>
        </label>
        <select
          className={fieldErrors.experience_years ? errorInputClass : inputClass}
          value={form.experience_years}
          onChange={set('experience_years')}
        >
          <option value="">Select experience</option>
          {experienceOptions.map((o) => <option key={o}>{o}</option>)}
        </select>
        {fieldErrors.experience_years && (
          <div className={errorTextClass}>
            <AlertCircle size={12} />
            {fieldErrors.experience_years}
          </div>
        )}
      </div>

      <div>
        <label className={fieldErrors.education ? errorLabelClass : labelClass}>
          Education <span className="text-red-500">*</span>
        </label>
        <select
          className={fieldErrors.education ? errorInputClass : inputClass}
          value={form.education}
          onChange={set('education')}
        >
          <option value="">Select education</option>
          {educationOptions.map((o) => <option key={o}>{o}</option>)}
        </select>
        {fieldErrors.education && (
          <div className={errorTextClass}>
            <AlertCircle size={12} />
            {fieldErrors.education}
          </div>
        )}
      </div>

      <div>
        <label className={fieldErrors.current_ctc ? errorLabelClass : labelClass}>
          Current CTC (LPA) <span className="text-red-500">*</span>
        </label>
        <input
          type="number"
          step="0.1"
          min="0"
          max="100"
          className={fieldErrors.current_ctc ? errorInputClass : inputClass}
          placeholder="e.g., 6.5"
          value={form.current_ctc}
          onChange={set('current_ctc')}
        />
        {fieldErrors.current_ctc && (
          <div className={errorTextClass}>
            <AlertCircle size={12} />
            {fieldErrors.current_ctc}
          </div>
        )}
      </div>

      <div>
        <label className={fieldErrors.expected_ctc ? errorLabelClass : labelClass}>
          Expected CTC (LPA) <span className="text-red-500">*</span>
        </label>
        <input
          type="number"
          step="0.1"
          min="0"
          max="200"
          className={fieldErrors.expected_ctc ? errorInputClass : inputClass}
          placeholder="e.g., 10"
          value={form.expected_ctc}
          onChange={set('expected_ctc')}
        />
        {fieldErrors.expected_ctc && (
          <div className={errorTextClass}>
            <AlertCircle size={12} />
            {fieldErrors.expected_ctc}
          </div>
        )}
      </div>

      <div>
        <label className={fieldErrors.pan_number ? errorLabelClass : labelClass}>
          PAN Number <span className="text-red-500">*</span>
        </label>
        <input
          className={fieldErrors.pan_number ? errorInputClass : inputClass}
          placeholder="ABCDE1234F"
          value={form.pan_number.toUpperCase()}
          onChange={(e) => {
            const value = e.target.value.toUpperCase().replace(/[^A-Z0-9]/g, '');
            setForm((prev) => ({ ...prev, pan_number: value }));
            validateField('pan_number', value);
          }}
          maxLength={10}
        />
        {fieldErrors.pan_number && (
          <div className={errorTextClass}>
            <AlertCircle size={12} />
            {fieldErrors.pan_number}
          </div>
        )}
      </div>

      <div>
        <label className={fieldErrors.resume ? errorLabelClass : labelClass}>
          Upload Resume (PDF/DOC) <span className="text-red-500">*</span>
        </label>
        <label className={`flex items-center gap-3 w-full border border-dashed rounded-xl px-4 py-3 text-sm text-gray-500 cursor-pointer transition-colors ${
          fieldErrors.resume ? 'border-red-300 bg-red-50 hover:border-red-400 hover:bg-red-100' : 'border-gray-300 hover:border-blue-400 hover:bg-blue-50'
        }`}>
          <Upload size={16} className="text-gray-400 flex-shrink-0" />
          <span className="truncate">{resumeFile ? resumeFile.name : 'Choose file...'}</span>
          <input
            type="file"
            accept=".pdf,.doc,.docx"
            className="hidden"
            onChange={handleResumeChange}
          />
        </label>
        {fieldErrors.resume && (
          <div className={errorTextClass}>
            <AlertCircle size={12} />
            {fieldErrors.resume}
          </div>
        )}
      </div>

      {error && (
        <div className="sm:col-span-2 bg-red-50 border border-red-200 text-red-600 text-sm rounded-xl px-4 py-3">
          {error}
        </div>
      )}

      <div className="sm:col-span-2">
        <button
          type="submit"
          disabled={loading}
          className="w-full bg-blue-700 hover:bg-blue-800 disabled:opacity-60 text-white font-bold py-4 rounded-xl transition-all duration-200 flex items-center justify-center gap-2 shadow-lg hover:shadow-xl"
        >
          {loading ? (
            <>
              <Loader2 size={18} className="animate-spin" />
              Submitting...
            </>
          ) : (
            <>
              <BookOpen size={18} />
              Register Now — It's Free!
            </>
          )}
        </button>
        <p className="text-center text-gray-400 text-xs mt-3">
          By registering, you agree to our terms. Your data is 100% confidential.
        </p>
      </div>
    </form>
  );
}
