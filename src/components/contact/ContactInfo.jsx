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
    <div className="w-full sm:w-1/2 p-6 bg-slate-950 text-white">
      <div className="mt12 md:mt-28">
        <div className="flex bottom-0 mt-2 -z-20">
          <MapContainer
            center={[7.330875817375049, 80.25506795300656]}
            zoom={12}
            className="h-72 w-full rounded-lg">
            <TileLayer
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              attribution="&copy; OpenStreetMap contributors"
            />
            <Marker
              position={[7.330875817375049, 80.25506795300656]}
              icon={customIcon}
            >
              <Popup>Address : Poramadala, Yatigaloluwa, Polgahawela</Popup>
            </Marker>
          </MapContainer>
        </div>
      </div>
    </div>
  );
};

export default ContactInfo;
