import React from 'react';
import CurrentOver from './CurrentOver'
import './styles/CurrScoreHeader.css'

const ScorecardHeader = ({
    currentBattingTeam,
    currentScore,
    wickets,
    currentOver,
    totalOvers,
    currentRunRate
}) => {
    // Function to display the over in the correct format 
    const displayFormattedOver = () => {
        const balls = currentOver.length % 6;
        const oversCompleted = Math.floor(currentOver.length / 6);
        return `${oversCompleted}.${balls}`;
    };

    return (
        <div className="scorecard-header"> {/* Add your styling classes here */}
            <div>
                <h3>{currentBattingTeam && currentBattingTeam.name}</h3>
                <p>{currentScore}/{wickets}</p>
            </div>
            <div>
                <CurrentOver currentOver={[1, 4, 0, 'W', 1, 2]}/>
            </div>
            <div>
                <p>Overs: {displayFormattedOver()} / {totalOvers}</p>
                <p>CRR: {currentRunRate}</p> {/* Current Run Rate */}
            </div>
        </div>
    );
};

export default ScorecardHeader;