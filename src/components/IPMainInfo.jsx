import React from 'react';

export const IPMainInfo = ({ location }) => {
  return (
    <div>
      <h2>{location?.city}</h2>
      {location?.postal && <p>Postal: {location.postal}</p>}
      {location?.region && <p>Region: {location.region}</p>}
      {/* Renderizar el mapa usando un iframe de Google Maps */}
      {location && (
        <iframe
          title="Google Maps"
          src={`https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d15057.534307180755!2d${location.loc.split(',')[1]}!3d${location.loc.split(',')[0]}!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2smx!4v1651103744472!5m2!1sen!2smx`}
          width="100%"
          height="350"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      )}
    </div>
  );
};