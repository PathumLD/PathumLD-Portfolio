import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
// import { FaFacebook, FaLinkedin, FaGithub } from 'react-icons/fa';

const ContactInfo = () => {
  return (
    <div className="w-full  sm:w-1/2 p-6 bg-slate-950 text-white">
        <div className='mt12 md:mt-28 '>
            {/* <div className="mb-4">
                <p className=''><span className='text-lg mr-2'>Address :</span> Poramadala, Yatigaloluwa, Polgahawela, Sri Lanka 60300</p>
                <p className=''><span className='text-lg mr-2'>Phone :</span> +94 76 734 2605 / +94 72 999 7763</p>
                <p className=''><span className='text-lg mr-2'>Email :</span> <a href="mailto:pathumlk.diz@gmail.com" className="text-cyan-400">pathumlk.diz@gmail.com</a></p>
            </div>

            <div className="flex space-x-4">
                <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                <FaFacebook className="hover:text-cyan-400 text-white" size={24} />
                </a>
                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                <FaLinkedin className="hover:text-cyan-400 text-white" size={24} />
                </a>
                <a href="https://github.com" target="_blank" rel="noopener noreferrer">
                <FaGithub className="hover:text-cyan-400 text-white" size={24} />
                </a>
            </div> */}

            <div className="flex bottom-0 mt-2 -z-20 ">
                <MapContainer
                center={[7.330875817375049, 80.25506795300656]}
                zoom={13}
                className="h-72 w-full rounded-lg">
                <TileLayer
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    attribution="&copy; OpenStreetMap contributors"
                />
                <Marker position={[7.330875817375049, 80.25506795300656]}>
                    <Popup>Address : Poramadala, Yatigaloluwa, Polgahawela</Popup>
                </Marker>
                </MapContainer>
            </div>
        </div>
    </div>
  );
};

export default ContactInfo;
