import React from 'react';
import { hours } from '../data'; // Make sure to import 'hours' correctly

export default function Table({ data }) {
  const calculateTotalCookiesPerHour = (entry, hourIndex) => {
    const randomCustomers = Math.floor(
      Math.random() * (entry.maxCust - entry.minCust + 1) + entry.minCust
    );
    return (entry.avgCookie * randomCustomers).toFixed(1);
  };

  const calculateTotalCookiesPerLocation = (location) => {
    let total = 0;
    data.forEach((entry) => {
      if (entry.location === location) {
        hours.forEach((_, hourIndex) => {
          total += parseFloat(calculateTotalCookiesPerHour(entry, hourIndex));
        });
      }
    });
    return total.toFixed(1);
  };

  return (
    <>
      {data.length > 0 && (
        <table className="w-1/2 mx-auto my-4 border">
          <thead>
            <tr>
              <th>Location</th>
              {hours.map((hour, index) => (
                <th key={index} className="font-bold">
                  {hour}
                </th>
              ))}
              <th className="font-bold">Totals</th>
            </tr>
          </thead>
          <tbody>
            {data.map((entry, index) => (
              <tr
                key={index}
                className={index % 2 === 0 ? 'bg-gray-100' : 'bg-white'}
              >
                <td className="font-bold">{entry.location}</td>
                {hours.map((_, hourIndex) => (
                  <td key={hourIndex}>
                    {calculateTotalCookiesPerHour(entry, hourIndex)}
                  </td>
                ))}
                <td>{calculateTotalCookiesPerLocation(entry.location)}</td>
              </tr>
            ))}
          </tbody>
          <tfoot>
            <tr className="font-bold">
              <th>Totals</th>
              {hours.map((_, hourIndex) => (
                <td key={hourIndex}>
                  {data.reduce(
                    (acc, entry) =>
                      acc + parseFloat(calculateTotalCookiesPerHour(entry, hourIndex)),
                    0
                  ).toFixed(1)}
                </td>
              ))}
              <td>{calculateTotalCookiesPerLocation('Total')}</td>
            </tr>
          </tfoot>
        </table>
      )}
    </>
  );
}
