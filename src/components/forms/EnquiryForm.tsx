'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import {
  enquirySchema,
  EnquiryFormData,
  serviceOptions,
} from '@/lib/validation/enquiry';
import {
  Send,
  CheckCircle2,
  AlertCircle,
  Loader2,
  Building,
  User,
  Mail,
  Phone,
  FileText,
  ShieldCheck,
} from 'lucide-react';

export function EnquiryForm() {
  const [submissionState, setSubmissionState] = useState<{
    status: 'idle' | 'loading' | 'success' | 'error';
    message?: string;
    referenceId?: string;
  }>({ status: 'idle' });

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<EnquiryFormData>({
    resolver: zodResolver(enquirySchema),
    defaultValues: {
      serviceRequired: 'Aluminium Powder Coating',
      consent: false as unknown as true,
      honeypot: '',
    },
  });

  const onSubmit = async (data: EnquiryFormData) => {
    setSubmissionState({ status: 'loading' });

    try {
      const response = await fetch('/api/enquiry', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });

      const result = await response.json();

      if (response.ok && result.success) {
        setSubmissionState({
          status: 'success',
          message: result.message,
          referenceId: result.referenceId,
        });
        reset();
      } else {
        setSubmissionState({
          status: 'error',
          message:
            result.error ||
            'We encountered an issue submitting your enquiry. Please verify your details or try again.',
        });
      }
    } catch {
      setSubmissionState({
        status: 'error',
        message: 'Network error. Please check your internet connection and try again.',
      });
    }
  };

  return (
    <div className="bg-white rounded-3xl p-6 sm:p-10 border border-brand-border shadow-elevated">
      {submissionState.status === 'success' ? (
        <div className="py-12 px-4 text-center space-y-4">
          <div className="w-16 h-16 rounded-full bg-emerald-50 text-emerald-600 mx-auto flex items-center justify-center border border-emerald-200">
            <CheckCircle2 className="w-8 h-8" />
          </div>
          <h3 className="font-heading font-extrabold text-2xl text-brand-navy">
            Enquiry Received Successfully
          </h3>
          <p className="text-sm text-brand-text-secondary max-w-md mx-auto leading-relaxed">
            {submissionState.message}
          </p>
          {submissionState.referenceId && (
            <div className="p-3 bg-brand-ice rounded-xl inline-block text-xs font-mono font-bold text-brand-navy border border-brand-border">
              Reference ID: {submissionState.referenceId}
            </div>
          )}
          <div className="pt-4">
            <button
              onClick={() => setSubmissionState({ status: 'idle' })}
              className="px-6 py-2.5 rounded-xl bg-brand-navy text-white text-xs font-bold hover:bg-brand-blue transition-colors"
            >
              Submit Another Technical Enquiry
            </button>
          </div>
        </div>
      ) : (
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
          {/* Honeypot field for spam bots (hidden from real users) */}
          <div className="hidden" aria-hidden="true">
            <label htmlFor="honeypot">Leave blank</label>
            <input type="text" id="honeypot" {...register('honeypot')} tabIndex={-1} />
          </div>

          {/* Form Header */}
          <div className="border-b border-slate-100 pb-4">
            <h3 className="font-heading font-extrabold text-2xl text-brand-navy">
              Technical & Commercial Enquiry
            </h3>
            <p className="text-xs text-brand-text-secondary mt-1">
              Please provide your project specifications. Our engineering team will review and
              respond promptly.
            </p>
          </div>

          {/* Error Banner if API error occurs */}
          {submissionState.status === 'error' && (
            <div className="p-4 rounded-xl bg-red-50 border border-red-200 text-xs text-red-700 flex items-start gap-3">
              <AlertCircle className="w-4 h-4 shrink-0 mt-0.5" />
              <span>{submissionState.message}</span>
            </div>
          )}

          {/* Row 1: Full Name & Company Name */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-brand-navy mb-1.5">
                Full Name *
              </label>
              <div className="relative">
                <input
                  type="text"
                  placeholder="e.g. Ramesh Chandra"
                  {...register('fullName')}
                  className={`w-full px-4 py-3 rounded-xl border text-sm text-brand-text bg-brand-ice/40 focus:bg-white focus:outline-none focus:ring-2 transition-all ${
                    errors.fullName
                      ? 'border-red-300 focus:ring-red-200'
                      : 'border-brand-border focus:border-brand-blue focus:ring-brand-blue/20'
                  }`}
                />
              </div>
              {errors.fullName && (
                <p className="text-xs text-red-500 mt-1">{errors.fullName.message}</p>
              )}
            </div>

            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-brand-navy mb-1.5">
                Company / Organization *
              </label>
              <div className="relative">
                <input
                  type="text"
                  placeholder="e.g. Apex Facades Pvt Ltd"
                  {...register('companyName')}
                  className={`w-full px-4 py-3 rounded-xl border text-sm text-brand-text bg-brand-ice/40 focus:bg-white focus:outline-none focus:ring-2 transition-all ${
                    errors.companyName
                      ? 'border-red-300 focus:ring-red-200'
                      : 'border-brand-border focus:border-brand-blue focus:ring-brand-blue/20'
                  }`}
                />
              </div>
              {errors.companyName && (
                <p className="text-xs text-red-500 mt-1">{errors.companyName.message}</p>
              )}
            </div>
          </div>

          {/* Row 2: Email & Phone Number */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-brand-navy mb-1.5">
                Email Address *
              </label>
              <input
                type="email"
                placeholder="name@company.com"
                {...register('email')}
                className={`w-full px-4 py-3 rounded-xl border text-sm text-brand-text bg-brand-ice/40 focus:bg-white focus:outline-none focus:ring-2 transition-all ${
                  errors.email
                    ? 'border-red-300 focus:ring-red-200'
                    : 'border-brand-border focus:border-brand-blue focus:ring-brand-blue/20'
                }`}
              />
              {errors.email && (
                <p className="text-xs text-red-500 mt-1">{errors.email.message}</p>
              )}
            </div>

            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-brand-navy mb-1.5">
                Phone Number *
              </label>
              <input
                type="tel"
                placeholder="+91 98765 43210"
                {...register('phone')}
                className={`w-full px-4 py-3 rounded-xl border text-sm text-brand-text bg-brand-ice/40 focus:bg-white focus:outline-none focus:ring-2 transition-all ${
                  errors.phone
                    ? 'border-red-300 focus:ring-red-200'
                    : 'border-brand-border focus:border-brand-blue focus:ring-brand-blue/20'
                }`}
              />
              {errors.phone && (
                <p className="text-xs text-red-500 mt-1">{errors.phone.message}</p>
              )}
            </div>
          </div>

          {/* Row 3: Service Required & Estimated Quantity */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-brand-navy mb-1.5">
                Service Required *
              </label>
              <select
                {...register('serviceRequired')}
                className="w-full px-4 py-3 rounded-xl border border-brand-border text-sm text-brand-text bg-brand-ice/40 focus:bg-white focus:outline-none focus:ring-2 focus:ring-brand-blue/20 focus:border-brand-blue"
              >
                {serviceOptions.map((opt) => (
                  <option key={opt} value={opt}>
                    {opt}
                  </option>
                ))}
              </select>
              {errors.serviceRequired && (
                <p className="text-xs text-red-500 mt-1">{errors.serviceRequired.message}</p>
              )}
            </div>

            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-brand-navy mb-1.5">
                Estimated Volume / Weight (Optional)
              </label>
              <input
                type="text"
                placeholder="e.g. 5 Metric Tonnes / 1200 Metres"
                {...register('estimatedQuantity')}
                className="w-full px-4 py-3 rounded-xl border border-brand-border text-sm text-brand-text bg-brand-ice/40 focus:bg-white focus:outline-none focus:ring-2 focus:ring-brand-blue/20 focus:border-brand-blue"
              />
            </div>
          </div>

          {/* Row 4: Project Details */}
          <div>
            <label className="block text-xs font-bold uppercase tracking-wider text-brand-navy mb-1.5">
              Project Details & Technical Specifications *
            </label>
            <textarea
              rows={4}
              placeholder="Please describe your alloy requirements, profile dimensions, coating finish (RAL shade / micron thickness), delivery timeline, or application details..."
              {...register('projectDetails')}
              className={`w-full px-4 py-3 rounded-xl border text-sm text-brand-text bg-brand-ice/40 focus:bg-white focus:outline-none focus:ring-2 transition-all ${
                errors.projectDetails
                  ? 'border-red-300 focus:ring-red-200'
                  : 'border-brand-border focus:border-brand-blue focus:ring-brand-blue/20'
              }`}
            />
            {errors.projectDetails && (
              <p className="text-xs text-red-500 mt-1">{errors.projectDetails.message}</p>
            )}
          </div>

          {/* Row 5: Consent Checkbox */}
          <div>
            <label className="flex items-start gap-3 cursor-pointer">
              <input
                type="checkbox"
                {...register('consent')}
                className="mt-1 w-4 h-4 rounded text-brand-blue focus:ring-brand-blue border-brand-border"
              />
              <span className="text-xs text-brand-text-secondary leading-normal">
                I authorize Santoshi Metal Industries Private Limited to contact me regarding this
                technical enquiry. I understand my corporate information will be processed securely
                in accordance with standard commercial confidentiality.
              </span>
            </label>
            {errors.consent && (
              <p className="text-xs text-red-500 mt-1">{errors.consent.message}</p>
            )}
          </div>

          {/* Submit Button */}
          <div>
            <button
              type="submit"
              disabled={submissionState.status === 'loading'}
              className="w-full inline-flex items-center justify-center gap-3 py-4 rounded-xl bg-brand-navy text-white font-semibold text-base shadow-subtle hover:bg-brand-blue transition-all duration-300 disabled:opacity-60"
            >
              {submissionState.status === 'loading' ? (
                <>
                  <Loader2 className="w-5 h-5 animate-spin" />
                  <span>Submitting Enquiry...</span>
                </>
              ) : (
                <>
                  <Send className="w-5 h-5" />
                  <span>Transmit Technical Enquiry</span>
                </>
              )}
            </button>
          </div>
        </form>
      )}
    </div>
  );
}

