import React from 'react';
import { certificatesData } from '../../data/CertificateData';
import useScrollAnimation from '../useScrollAnimation';

const CertificatesSection = () => {
  return (
    <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 p-4">
      {certificatesData.map((certificate, index) => {
        const elementRef = useScrollAnimation(0.1);

        return (
          <div
            ref={elementRef}
            key={certificate.id}
            className="group relative overflow-hidden rounded-lg bg-gradient-to-br from-slate-800 to-slate-900 border border-slate-700/50 hover:border-cyan-500/50 transition-all duration-300 p-4 opacity-0" // opacity-0 to initially hide the card
          >
            {/* Top decoration line */}
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-cyan-500 to-blue-500 opacity-50 group-hover:opacity-100 transition-opacity" />

            <div className="space-y-4">
              {/* Certificate icon */}
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-cyan-500 to-blue-500 flex items-center justify-center mb-2">
                <svg
                  className="w-5 h-5 text-white"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>

              {/* Certificate content */}
              <div className="space-y-2">
                <h3 className="text-lg font-semibold text-white group-hover:text-cyan-400 transition-colors">
                  {certificate.name}
                </h3>

                <span className="inline-block px-2 py-1 text-xs font-medium bg-slate-700 text-cyan-400 rounded-md">
                  {certificate.issuer}
                </span>

                <p className="text-slate-400 text-xs">Issued: {certificate.date}</p>
              </div>

              {/* View certificate link */}
              <a
                href={certificate.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-cyan-400 hover:text-cyan-300 transition-colors text-xs font-medium group"
              >
                View Certificate
                <svg
                  className="w-4 h-4 group-hover:translate-x-0.5 transition-transform"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                  />
                </svg>
              </a>
            </div>

            {/* Background decoration */}
            <div className="absolute -right-14 -bottom-14 w-28 h-28 rounded-full bg-cyan-500/10 blur-2xl group-hover:bg-cyan-500/20 transition-all duration-300" />
          </div>
        );
      })}
    </div>
  );
};

export default CertificatesSection;
