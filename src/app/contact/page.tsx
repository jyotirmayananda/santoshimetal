"use client";

import { useState } from "react";
import Image from "next/image";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { CheckCircle2, MapPin, Building2, UserCheck, AlertCircle, Send, Clock } from "lucide-react";
import { companyInfo } from "@/data/company";
import { cn } from "@/lib/utils";

const formSchema = z.object({
  fullName: z.string().min(2, "Full name is required (min 2 characters)"),
  companyName: z.string().min(2, "Company name is required"),
  email: z.string().email("Valid business email is required"),
  phone: z.string().min(8, "Phone number is required (min 8 digits)"),
  service: z.enum([
    "Powder Coating",
    "Anodising",
    "Aluminium Ingots",
    "Aluminium Sales & Supply",
    "General Enquiry",
  ]),
  projectDescription: z
    .string()
    .min(10, "Please provide at least 10 characters detailing your requirement"),
  specificationsNote: z.string().optional(),
  consent: z.boolean().refine((val) => val === true, {
    message: "You must agree to commercial correspondence",
  }),
});

type FormValues = z.infer<typeof formSchema>;

export default function ContactPage() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState<string | null>(null);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      service: "Powder Coating",
      consent: true,
    },
  });

  const onSubmit = async (data: FormValues) => {
    setIsSubmitting(true);
    setErrorMessage(null);
    setSubmitSuccess(null);

    try {
      const response = await fetch("/api/enquiry", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      const result = await response.json();

      if (response.ok && result.success) {
        setSubmitSuccess(
          `Reference ID: ${result.referenceId}. ${result.message}`
        );
        reset();
      } else {
        setErrorMessage(result.message || "Failed to submit enquiry.");
      }
    } catch {
      setErrorMessage("Network error occurred. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="w-full pt-28">
      {/* Hero Header */}
      <section className="relative py-20 sm:py-28 bg-gradient-to-b from-white via-slate-50 to-slate-100 text-[#0F172A] border-b border-slate-200 overflow-hidden">
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-amber-100/30 rounded-full blur-[140px] pointer-events-none" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3 mb-4">
            <span className="text-xs font-bold uppercase tracking-widest text-[#FF5B00]">
              Commercial Enquiries
            </span>
          </div>

          <h1 className="text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-tight leading-[1.1] max-w-4xl mb-6 text-slate-900">
            Connect With Our
            <br />
            <span className="text-[#FF5B00]">Technical Sales Team.</span>
          </h1>

          <p className="text-base sm:text-xl text-slate-600 max-w-3xl leading-relaxed font-normal">
            Discuss your material specifications, target delivery schedules, powder coating RAL codes, or bulk aluminium ingot supply requirements.
          </p>
        </div>
      </section>

      {/* Main Content: Form & Corporate Registration Info */}
      <section className="py-20 sm:py-28 bg-[#F8FAFC] text-[#0F172A]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            {/* Left Column: Form (7 cols) */}
            <div className="lg:col-span-7 p-8 sm:p-12 rounded-3xl bg-white border border-slate-200 shadow-xl relative">
              <h2 className="text-2xl sm:text-3xl font-black uppercase tracking-tight text-slate-900 font-sans mb-2">
                B2B Project Enquiry Form
              </h2>
              <p className="text-xs sm:text-sm text-slate-600 mb-8">
                Please provide detailed parameters to help us route your request to the appropriate engineering or metallurgical vertical.
              </p>

              {submitSuccess ? (
                <div className="p-8 rounded-2xl bg-amber-50/80 border border-[#C6924D] text-center space-y-4">
                  <div className="w-12 h-12 rounded-full bg-[#C6924D] text-white flex items-center justify-center mx-auto shadow-md">
                    <CheckCircle2 className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-bold uppercase text-slate-900">
                    Enquiry Logged Successfully
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-700 leading-relaxed max-w-md mx-auto">
                    {submitSuccess}
                  </p>
                  <button
                    type="button"
                    onClick={() => setSubmitSuccess(null)}
                    className="mt-4 px-6 py-2.5 rounded-lg text-xs font-mono uppercase tracking-wider bg-slate-900 text-white hover:bg-slate-800 transition-colors"
                  >
                    Submit Another Inquiry
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                  {errorMessage && (
                    <div className="p-4 rounded-xl bg-red-50 border border-red-200 flex items-center gap-3 text-red-700 text-xs">
                      <AlertCircle className="w-4 h-4 shrink-0" />
                      <span>{errorMessage}</span>
                    </div>
                  )}

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    {/* Full Name */}
                    <div className="space-y-1.5">
                      <label className="text-xs font-mono uppercase tracking-wider text-slate-700 font-semibold">
                        Full Name *
                      </label>
                      <input
                        {...register("fullName")}
                        type="text"
                        placeholder="e.g. Rajesh Sharma"
                        className={cn(
                          "w-full px-4 py-3 rounded-xl bg-slate-50 border text-sm text-slate-900 placeholder-slate-400 focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#C6924D] transition-all",
                          errors.fullName ? "border-red-500" : "border-slate-200"
                        )}
                      />
                      {errors.fullName && (
                        <span className="text-[11px] text-red-500">
                          {errors.fullName.message}
                        </span>
                      )}
                    </div>

                    {/* Company Name */}
                    <div className="space-y-1.5">
                      <label className="text-xs font-mono uppercase tracking-wider text-slate-700 font-semibold">
                        Company / Entity Name *
                      </label>
                      <input
                        {...register("companyName")}
                        type="text"
                        placeholder="e.g. Apex Facades Ltd"
                        className={cn(
                          "w-full px-4 py-3 rounded-xl bg-slate-50 border text-sm text-slate-900 placeholder-slate-400 focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#C6924D] transition-all",
                          errors.companyName ? "border-red-500" : "border-slate-200"
                        )}
                      />
                      {errors.companyName && (
                        <span className="text-[11px] text-red-500">
                          {errors.companyName.message}
                        </span>
                      )}
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    {/* Business Email */}
                    <div className="space-y-1.5">
                      <label className="text-xs font-mono uppercase tracking-wider text-slate-700 font-semibold">
                        Business Email *
                      </label>
                      <input
                        {...register("email")}
                        type="email"
                        placeholder="name@company.com"
                        className={cn(
                          "w-full px-4 py-3 rounded-xl bg-slate-50 border text-sm text-slate-900 placeholder-slate-400 focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#C6924D] transition-all",
                          errors.email ? "border-red-500" : "border-slate-200"
                        )}
                      />
                      {errors.email && (
                        <span className="text-[11px] text-red-500">
                          {errors.email.message}
                        </span>
                      )}
                    </div>

                    {/* Phone Number */}
                    <div className="space-y-1.5">
                      <label className="text-xs font-mono uppercase tracking-wider text-slate-700 font-semibold">
                        Phone / Mobile *
                      </label>
                      <input
                        {...register("phone")}
                        type="tel"
                        placeholder="+91 98765 43210"
                        className={cn(
                          "w-full px-4 py-3 rounded-xl bg-slate-50 border text-sm text-slate-900 placeholder-slate-400 focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#C6924D] transition-all",
                          errors.phone ? "border-red-500" : "border-slate-200"
                        )}
                      />
                      {errors.phone && (
                        <span className="text-[11px] text-red-500">
                          {errors.phone.message}
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Required Service Dropdown */}
                  <div className="space-y-1.5">
                    <label className="text-xs font-mono uppercase tracking-wider text-slate-700 font-semibold">
                      Service Vertical *
                    </label>
                    <select
                      {...register("service")}
                      className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 text-sm text-slate-900 focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#C6924D]"
                    >
                      <option value="Powder Coating">Aluminium Powder Coating</option>
                      <option value="Anodising">Aluminium Anodising</option>
                      <option value="Aluminium Ingots">Aluminium Ingot Manufacturing & Supply</option>
                      <option value="Aluminium Sales & Supply">Aluminium Sales & Supply</option>
                      <option value="General Enquiry">General Corporate Enquiry</option>
                    </select>
                  </div>

                  {/* Project Description */}
                  <div className="space-y-1.5">
                    <label className="text-xs font-mono uppercase tracking-wider text-slate-700 font-semibold">
                      Project Requirements &amp; Quantities *
                    </label>
                    <textarea
                      {...register("projectDescription")}
                      rows={4}
                      placeholder="Please specify profile types, alloy grades, estimated tonnage or square meters, coating finish requirements, and expected timeline..."
                      className={cn(
                        "w-full px-4 py-3 rounded-xl bg-slate-50 border text-sm text-slate-900 placeholder-slate-400 focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#C6924D] transition-all",
                        errors.projectDescription ? "border-red-500" : "border-slate-200"
                      )}
                    />
                    {errors.projectDescription && (
                      <span className="text-[11px] text-red-500">
                        {errors.projectDescription.message}
                      </span>
                    )}
                  </div>

                  {/* Optional Attachment Note */}
                  <div className="space-y-1.5">
                    <label className="text-xs font-mono uppercase tracking-wider text-slate-500">
                      Drawing Reference / Additional Notes (Optional)
                    </label>
                    <input
                      {...register("specificationsNote")}
                      type="text"
                      placeholder="CAD drawing numbers, tender spec references, or cloud link"
                      className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 text-sm text-slate-900 placeholder-slate-400 focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#C6924D]"
                    />
                  </div>

                  {/* Consent Checkbox */}
                  <div className="pt-2">
                    <label className="flex items-start gap-3 cursor-pointer">
                      <input
                        {...register("consent")}
                        type="checkbox"
                        className="mt-1 w-4 h-4 rounded border-slate-300 text-[#C6924D] focus:ring-[#C6924D]"
                      />
                      <span className="text-xs text-slate-600 leading-relaxed">
                        I agree to receive commercial communications and technical proposals from Santoshi Metal Industries regarding this requirement.
                      </span>
                    </label>
                    {errors.consent && (
                      <span className="text-[11px] text-red-500 block mt-1">
                        {errors.consent.message}
                      </span>
                    )}
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full flex items-center justify-center gap-2 py-4 rounded-full text-sm font-semibold text-white bg-[#FF5B00] hover:bg-[#E04F00] transition-colors shadow-md shadow-orange-500/20 disabled:opacity-50 cursor-pointer"
                  >
                    {isSubmitting ? (
                      <span>Recording Request...</span>
                    ) : (
                      <>
                        <Send className="w-4 h-4" />
                        <span>Submit Project Requirement</span>
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>

            {/* Right Column: Registered Office & Legal Profile (5 cols) */}
            <div className="lg:col-span-5 space-y-8">
              {/* Corporate Registered Address Card */}
              <div className="p-8 rounded-3xl bg-white border border-slate-200 shadow-xl space-y-6">
                <div className="flex items-center gap-2">
                  <Building2 className="w-5 h-5 text-[#C6924D]" />
                  <h3 className="text-lg font-bold uppercase text-slate-900">
                    Registered Corporate Office
                  </h3>
                </div>

                <div className="flex items-start gap-3 text-sm text-slate-700 leading-relaxed">
                  <MapPin className="w-5 h-5 text-[#C6924D] shrink-0 mt-0.5" />
                  <div>
                    <p className="font-semibold text-slate-900">{companyInfo.name}</p>
                    <p className="text-slate-600 mt-1">
                      {companyInfo.registeredOffice.fullAddress}
                    </p>
                  </div>
                </div>

                <div className="pt-4 border-t border-slate-200 space-y-3 font-mono text-xs">
                  <div className="flex justify-between">
                    <span className="text-slate-500">CIN</span>
                    <span className="text-[#C6924D] font-bold">{companyInfo.cin}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-500">Date of Incorporation</span>
                    <span className="text-slate-900 font-semibold">{companyInfo.incorporationDate}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-500">Company Type</span>
                    <span className="text-slate-900 font-semibold">{companyInfo.companyType}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-500">State / Jurisdiction</span>
                    <span className="text-slate-900 font-semibold">Odisha (761104), India</span>
                  </div>
                </div>
              </div>

              {/* Verified Directors Card */}
              <div className="p-8 rounded-3xl bg-white border border-slate-200 shadow-xl space-y-4">
                <div className="flex items-center gap-2">
                  <UserCheck className="w-5 h-5 text-[#C6924D]" />
                  <h3 className="text-lg font-bold uppercase text-slate-900">
                    Corporate Leadership
                  </h3>
                </div>

                <div className="space-y-3 pt-2">
                  {companyInfo.directors.map((director) => (
                    <div
                      key={director.name}
                      className="p-3.5 rounded-xl bg-slate-50 border border-slate-200 flex items-center justify-between shadow-sm"
                    >
                      <div className="flex items-center gap-3">
                        {director.image && (
                          <div className="w-10 h-10 rounded-lg overflow-hidden relative border border-slate-200 shrink-0 shadow-sm">
                            <Image
                              src={director.image}
                              alt={director.name}
                              width={40}
                              height={40}
                              className="w-full h-full object-cover object-top"
                            />
                          </div>
                        )}
                        <div>
                          <span className="text-xs font-bold text-slate-900 uppercase block">
                            {director.name}
                          </span>
                          <span className="text-[10px] font-mono text-slate-500">
                            Board Member
                          </span>
                        </div>
                      </div>
                      <span className="text-[10px] font-mono text-[#C6924D] font-bold px-2.5 py-1 rounded bg-amber-50 border border-amber-200">
                        {director.role}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Consultation Response Standard */}
              <div className="p-6 rounded-2xl bg-amber-50/70 border border-amber-200/70 flex items-start gap-3">
                <Clock className="w-5 h-5 text-[#C6924D] shrink-0 mt-0.5" />
                <div className="text-xs text-slate-700 leading-relaxed">
                  <strong className="text-slate-900 block uppercase font-mono mb-1 font-bold">
                    Turnaround Commitment
                  </strong>
                  All commercial inquiries are reviewed within one business day for technical alignment and quote scheduling.
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
