'use client'

import React, { useState, useEffect } from 'react';
import './createMatch.css'

const CreateMatch = () => {
    const [teams, setTeams] = useState([]);
    const [battingTeam, setBattingTeam] = useState({});
    const [bowlingTeam, setBowlingTeam] = useState({});
    const [totalOvers, setTotalOvers] = useState(5);

    useEffect(() => {
        const fetchTeams = async () => {
            const response = await fetch('http://localhost:8080/api/teams');
            if (!response.ok) {
                throw new Error('Failed to fetch teams');
            }
            const data = await response.json();
            setTeams(data);
        };
        fetchTeams();
    }, []);

    const handleTeam1Change = (event) => {
        const selectedTeamId = event.target.value;
        const battingTeam = teams.find((team) => team._id === selectedTeamId); 
        setBattingTeam(battingTeam);
    };

    const handleTeam2Change = (event) => {
        const selectedTeamId = event.target.value;
        const bowlingTeam = teams.find((team) => team._id === selectedTeamId); 
        setBowlingTeam(bowlingTeam);
    };

    const handleOversChange = (event) => {
        setTotalOvers(event.target.value);
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            const scorecardRes = await fetch('http://localhost:8080/api/scorecards', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({}),
            })

            if (!scorecardRes.ok) {
                throw new Error('Failed to create scorecard');
            }

            const scorecard = await scorecardRes.json();

            const matchData = {
                battingTeam,
                bowlingTeam,
                totalOvers,
                hostId: battingTeam.players[0],
                scorecard,
            };

            try {
                const response = await fetch('http://localhost:8080/api/matches', {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify(matchData),
                });

                if (!response.ok) {
                    throw new Error('Failed to create match');
                }
                const newMatch = await response.json();

                // Redirect to the newly created match page (assuming you have the match ID)
                window.location.href = `/matches/${newMatch._id}`; 
            } catch (error) {
                console.error('Error creating match:', error);
            }

        } catch (error) {
            console.error('Error creating Scorecard', error);
        }
    };

    return (
        <div>
            <form onSubmit={handleSubmit} className='create-match-form'>
                <div>
                    <label htmlFor="team1">Team 1: </label>
                    <select id="team1" value={battingTeam._id || ""} onChange={handleTeam1Change}>
                        <option value="">Select Batting Team</option>
                        {teams.map((team) => (
                            <option key={team._id} value={team._id}>
                                {team.name}
                            </option>
                        ))}
                    </select>
                </div>
                <div>
                    <label htmlFor="team2">Team 2: </label>
                    <select id="team2" value={bowlingTeam._id || ""} onChange={handleTeam2Change}>
                        <option value="">Select Bowling Team</option>
                        {teams.map((team) => (
                            <option key={team._id} value={team._id}>
                                {team.name}
                            </option>
                        ))}
                    </select>
                </div>

                <div>
                    <label htmlFor="overs">Total Overs: </label>
                    <input
                        id="overs"
                        type="number"
                        min="1"
                        value={totalOvers}
                        onChange={handleOversChange}
                    />
                </div>

                <button type="submit">Start Match</button>
            </form>
        </div>
    );
};

export default CreateMatch;