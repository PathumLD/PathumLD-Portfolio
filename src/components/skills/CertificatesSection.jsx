import React from 'react';
import { certificatesData } from '../../data/CertificateData';
import useScrollAnimation from '../useScrollAnimation';

const CertificatesSection = () => {
  return (
    <div className="max-w-6xl py-12 mx-auto">
      <div className="grid grid-cols-1 gap-6 p-4 sm:grid-cols-2 lg:grid-cols-3">
        {certificatesData.map((certificate) => {
          const elementRef = useScrollAnimation(0.1);
          return (
            <div
              ref={elementRef}
              key={certificate.id}
              className="group relative overflow-hidden rounded-xl bg-slate-900/90 border border-slate-700/30 hover:border-cyan-500/50 shadow-lg shadow-slate-900/20 transition-all duration-300 p-6 opacity-0 flex flex-col min-h-[15rem] w-full"
            >
              {/* Top accent bar */}
              <div className="absolute top-0 left-0 w-full h-1 transition-transform duration-300 origin-left transform scale-x-0 bg-gradient-to-r from-cyan-500 to-blue-600 group-hover:scale-x-100" />
              
              {/* Certificate content */}
              <div className="flex items-start space-x-4">
                {/* Icon with gradient background */}
                <div className="flex items-center justify-center flex-shrink-0 w-12 h-12 rounded-lg shadow-md bg-gradient-to-br from-cyan-500 to-blue-600 shadow-cyan-900/30">
                  <svg
                    className="w-6 h-6 text-white"
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
                
                {/* Text content - Changed to allow text wrapping */}
                <div className="flex-1 min-w-0"> {/* Added min-w-0 to fix flexbox text overflow */}
                  <h3 className="mb-1 text-lg font-semibold text-white break-words transition-colors group-hover:text-cyan-400 line-clamp-2">
                    {certificate.name}
                  </h3>
                  <span className="inline-block px-3 py-1 mb-2 text-xs font-medium rounded-md bg-slate-800 text-cyan-400">
                    {certificate.issuer}
                  </span>
                </div>
              </div>
              
              {/* Separator line */}
              <div className="w-full h-px my-2 bg-slate-700/50" />
              
              {/* Description (if available) */}
              {certificate.description && (
                <p className="text-sm text-slate-400 line-clamp-3">
                  {certificate.description}
                </p>
              )}
              
              {/* Date and link row */}
              <div className="flex items-center justify-between mt-auto">
                <div className="flex flex-col">
                  <span className="mb-1 text-xs tracking-wider uppercase text-slate-500">Issued</span>
                  <p className="text-sm font-medium text-slate-400">{certificate.date}</p>
                </div>
                
                <a
                  href={certificate.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-3 py-2 text-sm font-medium transition-all rounded-lg bg-slate-800 hover:bg-slate-700 text-cyan-400 hover:text-cyan-300 group"
                >
                  View
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
              
              {/* Decorative background elements */}
              <div className="absolute w-32 h-32 transition-all duration-300 rounded-full -right-16 -bottom-16 bg-cyan-500/5 blur-2xl group-hover:bg-cyan-500/10" />
              <div className="absolute w-24 h-24 transition-all duration-300 rounded-full -left-8 -top-8 bg-blue-600/5 blur-xl group-hover:bg-blue-600/10" />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default CertificatesSection;