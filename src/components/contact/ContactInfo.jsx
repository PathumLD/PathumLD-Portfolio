import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';
import markerIconPng from 'leaflet/dist/images/marker-icon.png';
import markerShadowPng from 'leaflet/dist/images/marker-shadow.png';

const ContactInfo = () => {
  const customIcon = L.icon({
    iconUrl: markerIconPng,
    shadowUrl: markerShadowPng,
    iconSize: [25, 41],
    iconAnchor: [12, 41],
  });

  return (
    <div className="w-full sm:w-2/3 lg:w-1/2 p-8  text-white rounded-2xl shadow-lg mx-auto mt-8">
      {/* <h2 className="text-3xl font-bold text-center text-teal-400 mb-6">Get in Touch</h2> */}
      
      {/* <div className="flex flex-col lg:flex-row items-center justify-between lg:space-x-6"> */}
        {/* Contact Info Card */}
        {/* <div className="w-full lg:w-1/2 bg-slate-800 rounded-lg p-6 shadow-lg mb-6 lg:mb-0">
          <h3 className="text-xl font-semibold text-teal-300 mb-4 text-center">Contact Information</h3>
          <div className="space-y-3">
            <p className="text-lg">
              <span className="font-semibold text-teal-300">Address:</span> Poramadala, Yatigaloluwa, Polgahawela
            </p>
            <p className="text-lg">
              <span className="font-semibold text-teal-300">Phone:</span> +94 123 456 789
            </p>
            <p className="text-lg">
              <span className="font-semibold text-teal-300">Email:</span> contact@domain.com
            </p>
          </div>
        </div> */}

        {/* Map Container */}
        <div className="w-full  h-80 rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transform transition duration-300 hover:scale-105">
          <MapContainer
            center={[7.330875817375049, 80.25506795300656]}
            zoom={12}
            className="h-full w-full"
          >
            <TileLayer
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              attribution="&copy; OpenStreetMap contributors"
            />
            <Marker
              position={[7.330875817375049, 80.25506795300656]}
              icon={customIcon}
            >
              <Popup>Address: Poramadala, Yatigaloluwa, Polgahawela</Popup>
            </Marker>
          </MapContainer>
        </div>
      {/* </div> */}

      {/* Call-to-Action Button */}
      {/* <div className="flex justify-center mt-8">
        <button className="bg-teal-500 hover:bg-teal-600 text-white font-semibold py-3 px-8 rounded-lg shadow-lg transition duration-300 transform hover:scale-105">
          Get Directions
        </button>
      </div> */}
    </div>
  );
};

export default ContactInfo;
