import React from 'react';

const ImpactMetrics: React.FC = () => {
  const metrics = [
    {
      value: "3X",
      label: "Patent Transactions",
      description: "Increased NTHU annual licensing from <30/yr to 90/yr within two years.",
      highlight: true
    },
    {
      value: "2X",
      label: "Contract Value",
      description: "Doubled NTHU's IP transaction contract value within the same period.",
      highlight: true
    },
    {
      value: "2000+",
      label: "Patents Managed",
      description: "Strategic oversight of NTHU's massive multidisciplinary patent portfolio.",
      highlight: false
    },
    {
      value: "600+",
      label: "Global IP Assets",
      description: "Managed global BNCT patent portfolio across US, EU, and Asian markets.",
      highlight: false
    },
    {
      value: "10+",
      label: "Deep-Tech Startups",
      description: "Mentored ventures in biotech, semiconductors, and new energy on IP strategy.",
      highlight: false
    }
  ];

  return (
    <section className="bg-navy-950 py-20 relative overflow-hidden">
      {/* Background Decorative Element */}
      <div className="absolute top-0 right-0 -mt-20 -mr-20 w-96 h-96 bg-primary-600/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 -mb-20 -ml-20 w-72 h-72 bg-primary-500/5 rounded-full blur-3xl"></div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="mb-16 text-center lg:text-left">
          <span className="text-primary-400 font-bold text-xs uppercase tracking-widest mb-3 block">Quantifiable Impact</span>
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-white mb-4">
            Performance Highlights & Metrics
          </h2>
          <p className="text-slate-400 max-w-2xl text-lg font-light">
            A track record of delivering measurable growth in technology transfer, portfolio management, and innovation ecosystems.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {metrics.map((m, idx) => (
            <div 
              key={idx} 
              className={`p-8 rounded-lg border transition-all duration-300 ${
                m.highlight 
                  ? 'bg-navy-900 border-primary-500/30 shadow-[0_0_20px_rgba(6,182,212,0.1)]' 
                  : 'bg-navy-900/50 border-slate-800 hover:border-slate-700'
              }`}
            >
              <div className="text-4xl font-serif font-bold text-white mb-2 flex items-baseline gap-1">
                <span className={m.highlight ? 'text-primary-500' : 'text-white'}>{m.value}</span>
              </div>
              <div className="text-slate-200 font-bold text-sm uppercase tracking-wider mb-4">
                {m.label}
              </div>
              <p className="text-slate-400 text-sm leading-relaxed">
                {m.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ImpactMetrics;