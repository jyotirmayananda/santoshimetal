"use client";

import { useState } from "react";
import Image from "next/image";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { CheckCircle2, MapPin, Building2, UserCheck, AlertCircle, Send, Clock, Sparkles } from "lucide-react";
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
    <div className="w-full pt-28 bg-[#07090E] text-white">
      {/* Hero Header */}
      <section className="relative py-24 sm:py-32 border-b border-white/[0.08] overflow-hidden">
        <div className="absolute top-0 right-1/4 w-[600px] h-[400px] bg-[#FF5B00]/[0.03] rounded-full blur-[140px] pointer-events-none" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3 mb-6">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] font-mono uppercase tracking-widest bg-[#FF5B00]/10 text-[#FF5B00] border border-[#FF5B00]/25">
              <Sparkles className="w-3 h-3" />
              Commercial &amp; Metallurgical Enquiries
            </span>
          </div>

          <h1 className="text-4xl sm:text-6xl md:text-7xl font-black uppercase tracking-tight leading-[1.05] max-w-5xl mb-6 text-white font-sans">
            Connect With Our
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF5B00] via-[#FF8A3D] to-[#FDBA74]">
              Technical Sales Team.
            </span>
          </h1>

          <p className="text-base sm:text-xl text-slate-300 max-w-3xl leading-relaxed font-normal">
            Discuss your material specifications, target delivery schedules, powder coating RAL codes, or bulk aluminium ingot supply requirements.
          </p>
        </div>
      </section>

      {/* Main Content: Form & Corporate Registration Info */}
      <section className="py-24 sm:py-32 bg-[#0B0F17]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            {/* Left Column: Form (7 cols) */}
            <div className="lg:col-span-7 p-8 sm:p-12 rounded-3xl bg-[#0E1420] border border-white/[0.08] shadow-2xl relative">
              <h2 className="text-2xl sm:text-3xl font-black uppercase tracking-tight text-white font-sans mb-2">
                B2B Project Enquiry Form
              </h2>
              <p className="text-xs sm:text-sm text-slate-400 mb-8 font-normal">
                Please provide detailed parameters to help us route your request to the appropriate engineering or metallurgical vertical.
              </p>

              {submitSuccess ? (
                <div className="p-8 rounded-2xl bg-[#07090E] border border-[#FF5B00]/40 text-center space-y-4">
                  <div className="w-12 h-12 rounded-full bg-[#FF5B00] text-white flex items-center justify-center mx-auto shadow-[0_0_20px_rgba(255,91,0,0.5)]">
                    <CheckCircle2 className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-bold uppercase text-white">
                    Enquiry Logged Successfully
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed max-w-md mx-auto">
                    {submitSuccess}
                  </p>
                  <button
                    type="button"
                    onClick={() => setSubmitSuccess(null)}
                    className="mt-4 px-6 py-2.5 rounded-full text-xs font-mono uppercase tracking-wider bg-[#FF5B00] text-white hover:bg-[#E04F00] transition-colors cursor-pointer"
                  >
                    Submit Another Inquiry
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                  {errorMessage && (
                    <div className="p-4 rounded-xl bg-red-950/40 border border-red-500/50 flex items-center gap-3 text-red-300 text-xs">
                      <AlertCircle className="w-4 h-4 shrink-0" />
                      <span>{errorMessage}</span>
                    </div>
                  )}

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    {/* Full Name */}
                    <div className="space-y-1.5">
                      <label className="text-xs font-mono uppercase tracking-wider text-slate-300 font-semibold">
                        Full Name *
                      </label>
                      <input
                        {...register("fullName")}
                        type="text"
                        placeholder="e.g. Rajesh Sharma"
                        className={cn(
                          "w-full px-4 py-3 rounded-xl bg-[#07090E] border text-sm text-white placeholder-slate-500 focus:outline-none focus:border-[#FF5B00] transition-all",
                          errors.fullName ? "border-red-500" : "border-white/[0.08]"
                        )}
                      />
                      {errors.fullName && (
                        <span className="text-[11px] text-red-400">
                          {errors.fullName.message}
                        </span>
                      )}
                    </div>

                    {/* Company Name */}
                    <div className="space-y-1.5">
                      <label className="text-xs font-mono uppercase tracking-wider text-slate-300 font-semibold">
                        Company / Entity Name *
                      </label>
                      <input
                        {...register("companyName")}
                        type="text"
                        placeholder="e.g. Apex Facades Ltd"
                        className={cn(
                          "w-full px-4 py-3 rounded-xl bg-[#07090E] border text-sm text-white placeholder-slate-500 focus:outline-none focus:border-[#FF5B00] transition-all",
                          errors.companyName ? "border-red-500" : "border-white/[0.08]"
                        )}
                      />
                      {errors.companyName && (
                        <span className="text-[11px] text-red-400">
                          {errors.companyName.message}
                        </span>
                      )}
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    {/* Business Email */}
                    <div className="space-y-1.5">
                      <label className="text-xs font-mono uppercase tracking-wider text-slate-300 font-semibold">
                        Business Email *
                      </label>
                      <input
                        {...register("email")}
                        type="email"
                        placeholder="name@company.com"
                        className={cn(
                          "w-full px-4 py-3 rounded-xl bg-[#07090E] border text-sm text-white placeholder-slate-500 focus:outline-none focus:border-[#FF5B00] transition-all",
                          errors.email ? "border-red-500" : "border-white/[0.08]"
                        )}
                      />
                      {errors.email && (
                        <span className="text-[11px] text-red-400">
                          {errors.email.message}
                        </span>
                      )}
                    </div>

                    {/* Phone Number */}
                    <div className="space-y-1.5">
                      <label className="text-xs font-mono uppercase tracking-wider text-slate-300 font-semibold">
                        Phone / Mobile *
                      </label>
                      <input
                        {...register("phone")}
                        type="tel"
                        placeholder="+91 98765 43210"
                        className={cn(
                          "w-full px-4 py-3 rounded-xl bg-[#07090E] border text-sm text-white placeholder-slate-500 focus:outline-none focus:border-[#FF5B00] transition-all",
                          errors.phone ? "border-red-500" : "border-white/[0.08]"
                        )}
                      />
                      {errors.phone && (
                        <span className="text-[11px] text-red-400">
                          {errors.phone.message}
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Required Service Dropdown */}
                  <div className="space-y-1.5">
                    <label className="text-xs font-mono uppercase tracking-wider text-slate-300 font-semibold">
                      Service Vertical *
                    </label>
                    <select
                      {...register("service")}
                      className="w-full px-4 py-3 rounded-xl bg-[#07090E] border border-white/[0.08] text-sm text-white focus:outline-none focus:border-[#FF5B00]"
                    >
                      <option value="Powder Coating" className="bg-[#0E1420]">Aluminium Powder Coating</option>
                      <option value="Anodising" className="bg-[#0E1420]">Aluminium Anodising</option>
                      <option value="Aluminium Ingots" className="bg-[#0E1420]">Aluminium Ingot Manufacturing &amp; Supply</option>
                      <option value="Aluminium Sales & Supply" className="bg-[#0E1420]">Aluminium Sales &amp; Supply</option>
                      <option value="General Enquiry" className="bg-[#0E1420]">General Corporate Enquiry</option>
                    </select>
                  </div>

                  {/* Project Description */}
                  <div className="space-y-1.5">
                    <label className="text-xs font-mono uppercase tracking-wider text-slate-300 font-semibold">
                      Project Requirements &amp; Quantities *
                    </label>
                    <textarea
                      {...register("projectDescription")}
                      rows={4}
                      placeholder="Please specify profile types, alloy grades, estimated tonnage or square meters, coating finish requirements, and expected timeline..."
                      className={cn(
                        "w-full px-4 py-3 rounded-xl bg-[#07090E] border text-sm text-white placeholder-slate-500 focus:outline-none focus:border-[#FF5B00] transition-all font-normal",
                        errors.projectDescription ? "border-red-500" : "border-white/[0.08]"
                      )}
                    />
                    {errors.projectDescription && (
                      <span className="text-[11px] text-red-400">
                        {errors.projectDescription.message}
                      </span>
                    )}
                  </div>

                  {/* Optional Attachment Note */}
                  <div className="space-y-1.5">
                    <label className="text-xs font-mono uppercase tracking-wider text-slate-400">
                      Drawing Reference / Additional Notes (Optional)
                    </label>
                    <input
                      {...register("specificationsNote")}
                      type="text"
                      placeholder="CAD drawing numbers, tender spec references, or cloud link"
                      className="w-full px-4 py-3 rounded-xl bg-[#07090E] border border-white/[0.08] text-sm text-white placeholder-slate-500 focus:outline-none focus:border-[#FF5B00]"
                    />
                  </div>

                  {/* Consent Checkbox */}
                  <div className="pt-2">
                    <label className="flex items-start gap-3 cursor-pointer">
                      <input
                        {...register("consent")}
                        type="checkbox"
                        className="mt-1 w-4 h-4 rounded border-white/20 text-[#FF5B00] focus:ring-[#FF5B00] bg-[#07090E]"
                      />
                      <span className="text-xs text-slate-400 leading-relaxed font-normal">
                        I agree to receive commercial communications and technical proposals from Santoshi Metal Industries regarding this requirement.
                      </span>
                    </label>
                    {errors.consent && (
                      <span className="text-[11px] text-red-400 block mt-1">
                        {errors.consent.message}
                      </span>
                    )}
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full flex items-center justify-center gap-2 py-4 rounded-full text-xs font-mono uppercase tracking-wider text-white bg-[#FF5B00] hover:bg-[#E04F00] transition-all shadow-[0_0_30px_rgba(255,91,0,0.35)] hover:shadow-[0_0_40px_rgba(255,91,0,0.5)] disabled:opacity-50 cursor-pointer"
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
              <div className="p-8 rounded-3xl bg-[#0E1420] border border-white/[0.08] shadow-2xl space-y-6">
                <div className="flex items-center gap-2">
                  <Building2 className="w-5 h-5 text-[#FF5B00]" />
                  <h3 className="text-lg font-bold uppercase text-white">
                    Registered Corporate Office
                  </h3>
                </div>

                <div className="flex items-start gap-3 text-sm text-slate-300 leading-relaxed font-normal">
                  <MapPin className="w-5 h-5 text-[#FF5B00] shrink-0 mt-0.5" />
                  <div>
                    <p className="font-bold text-white">{companyInfo.name}</p>
                    <p className="text-slate-400 mt-1">
                      {companyInfo.registeredOffice.fullAddress}
                    </p>
                  </div>
                </div>

                <div className="pt-4 border-t border-white/[0.08] space-y-3 font-mono text-xs">
                  <div className="flex justify-between">
                    <span className="text-slate-400">CIN</span>
                    <span className="text-amber-400 font-bold">{companyInfo.cin}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-400">Date of Incorporation</span>
                    <span className="text-white font-semibold">{companyInfo.incorporationDate}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-400">Company Type</span>
                    <span className="text-white font-semibold">{companyInfo.companyType}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-400">State / Jurisdiction</span>
                    <span className="text-white font-semibold">Odisha (761104), India</span>
                  </div>
                </div>
              </div>

              {/* Verified Directors Card */}
              <div className="p-8 rounded-3xl bg-[#0E1420] border border-white/[0.08] shadow-2xl space-y-4">
                <div className="flex items-center gap-2">
                  <UserCheck className="w-5 h-5 text-[#FF5B00]" />
                  <h3 className="text-lg font-bold uppercase text-white">
                    Corporate Leadership
                  </h3>
                </div>

                <div className="space-y-3 pt-2">
                  {companyInfo.directors.map((director) => (
                    <div
                      key={director.name}
                      className="p-3.5 rounded-xl bg-[#07090E] border border-white/[0.08] flex items-center justify-between shadow-sm"
                    >
                      <div className="flex items-center gap-3">
                        {director.image && (
                          <div className="w-10 h-10 rounded-lg overflow-hidden relative border border-white/10 shrink-0">
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
                          <span className="text-xs font-bold text-white uppercase block">
                            {director.name}
                          </span>
                          <span className="text-[10px] font-mono text-slate-400">
                            Board Director
                          </span>
                        </div>
                      </div>
                      <span className="text-[10px] font-mono text-amber-400 font-bold px-2.5 py-1 rounded bg-amber-400/10 border border-amber-400/20">
                        {director.role}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Consultation Response Standard */}
              <div className="p-6 rounded-2xl bg-gradient-to-br from-[#161F30] via-[#0E1420] to-[#0E1420] border border-white/[0.12] flex items-start gap-3">
                <Clock className="w-5 h-5 text-[#FF5B00] shrink-0 mt-0.5" />
                <div className="text-xs text-slate-300 leading-relaxed">
                  <strong className="text-white block uppercase font-mono mb-1 font-bold">
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