import { certificatesData } from '../../data/CertificateData';

const CertificatesSection = () => {
  return (
    <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {certificatesData.map((certificate) => (
        <div
          key={certificate.id}
          className="bg-slate-800 hover:bg-slate-900 p-6 rounded-lg shadow-md">
          <h3 className="text-cyan-400 text-lg">{certificate.name}</h3>
          <p className="text-white">Issuer: {certificate.issuer}</p>
          <p className="text-white">Date: {certificate.date}</p>
          <a
            href={certificate.link}
            target="_blank"
            className="text-cyan-400 underline mt-2 block">
            View Certificate
          </a>
        </div>
      ))}
    </div>
  );
};

export default CertificatesSection;
