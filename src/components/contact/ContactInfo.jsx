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
    <div className="w-full p-8 mx-auto mt-8 text-white shadow-lg sm:w-2/3 lg:w-1/2 rounded-2xl">

        {/* Map Container */}
        <div className="w-full overflow-hidden transition duration-300 transform rounded-lg shadow-lg h-80 hover:shadow-2xl hover:scale-105">
          <MapContainer
            center={[7.330875817375049, 80.25506795300656]}
            zoom={12}
            className="w-full h-full"
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
    </div>
  );
};

export default ContactInfo;
