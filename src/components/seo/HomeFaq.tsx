import { siteFaqs } from '@/data/seo-pages';

/** Visible FAQ block matching FAQPage JSON-LD (verified facts only). */
export function HomeFaq() {
  return (
    <section
      id="faq"
      className="py-20 sm:py-24 bg-white border-t border-brand-border/60"
      aria-labelledby="faq-heading"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mb-10">
          <h2
            id="faq-heading"
            className="font-heading font-extrabold text-3xl sm:text-4xl text-brand-navy tracking-tight"
          >
            Frequently Asked Questions
          </h2>
          <p className="mt-3 text-brand-text-secondary">
            Concise answers based on publicly listed company information.
          </p>
        </div>
        <dl className="space-y-4 max-w-3xl">
          {siteFaqs.map((faq) => (
            <div
              key={faq.question}
              className="p-5 rounded-2xl bg-brand-ice border border-brand-border/70"
            >
              <dt className="font-heading font-bold text-brand-navy text-base">
                {faq.question}
              </dt>
              <dd className="mt-2 text-sm text-brand-text-secondary leading-relaxed">
                {faq.answer}
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
