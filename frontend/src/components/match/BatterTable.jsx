import React from 'react';
import './styles/batterTable.css'

const BatterTable = ({ currentBatters }) => {
  return (
    <div className="batter-stats-table"> 
      <h3>Batting Stats</h3>
      <table>
        <thead>
          <tr>
            <th>Batter</th>
            <th>Runs</th>
            <th>Balls</th>
            <th>4s</th>
            <th>6s</th>
            <th>SR</th>
          </tr>
        </thead>
        <tbody>
        {currentBatters.map((batter, index) => (
          <tr key={index}>
            <td>{batter.name}</td> {/* Assuming you have 'name' */}
            <td>{batter.runs}</td>
            <td>{batter.balls}</td>
            <td>{batter.fours}</td>
            <td>{batter.sixes}</td>
            <td>{batter.strikeRate.toFixed(1)}</td> {/* Display with 1 decimal place */} 
          </tr>
        ))}
        </tbody>
      </table>
    </div>
  );
};

export default BatterTable;