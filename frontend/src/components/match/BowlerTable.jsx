import React from 'react';
import './styles/bowlerTable.css'

const BowlerTable = ({ currentBowler }) => {
  return (
    <div className="bowler-stats-table">
      <h3>Bowling Stats</h3>
      <table>
        <thead>
          <tr>
            <th>Bowler</th>
            <th>Overs</th>
            <th>Maidens</th>
            <th>Runs</th>
            <th>Wickets</th>
            <th>Economy</th> 
          </tr>
        </thead>
        <tbody>
          {/* Assuming currentBowler is an object */}
          {currentBowler && ( 
            <tr>
              <td>{currentBowler.name}</td>
              <td>{currentBowler.overs}</td>
              <td>{currentBowler.maidens}</td>
              <td>{currentBowler.runs}</td>
              <td>{currentBowler.wickets}</td>
              <td>{currentBowler.economy.toFixed(1)}</td> {/* Display with 1 decimal place */}
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default BowlerTable;
