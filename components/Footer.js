import React from 'react';

export default function Footer({ locations }) {
  return (
    <footer className="relative w-full bg-green-500 text-black-10">
      <div className="absolute bottom-0 left-0 w-full h-2 bg-black"></div>
      <p className="p-4 text-left mt-10rem" style={{ fontFamily: 'Arial' }}>
        {locations} Locations World Wide
      </p>
    </footer>
  );
}
