'use client'
import React from 'react'
import { useState, useEffect } from 'react';
import CurrScoreHeader from '@/components/match/CurrScoreHeader';
import DeliveryOptions from '@/components/match/DeliveryOptions';
import BatterTable from '@/components/match/BatterTable';
import BowlerTable from '@/components/match/BowlerTable';
import { useRouter, usePathname, useParams, useSearchParams } from 'next/navigation';

const Match = () => {

    const [match, setMatch] = useState({});
    const [battingTeam, setBattingTeam] = useState(null);
    const [bowlingTeam, setBowlingTeam] = useState(null);
    const [scoreCard, setScoreCard] = useState(null);
    const [currScore, setCurrScore] = useState(0);
    const [wickets, setWickets] = useState(0);
    const [currOver, setCurrOver] = useState([]);
    const [oversCompleted, setOversCompleted] = useState([]);
    const [totalOvers, setTotalOvers] = useState(5);
    const [currRunRate, setCurrRunRate] = useState(0);
    const [currBatters, setCurrBatters] = useState([]);
    const [currBowler, setCurrBowler] = useState(null);

    const params = useParams();

    const matchId = params.matchId;

    useEffect(() => {
        fetchMatchData();
    }, []);

    useEffect(() => {
        if (match.battingTeam) fetchBattingTeamData();
    }, [match])

    const fetchBattingTeamData = async () => {
        const battingTeamRes = await fetch(`http://localhost:8080/api/teams/${match.battingTeam}`)
        if (!battingTeamRes.ok) throw new Error('Failed to fetch batting team');
        const batTeam = await battingTeamRes.json();
        
        const bowlingTeamRes = await fetch(`http://localhost:8080/api/teams/${match.bowlingTeam}`)
        if (!bowlingTeamRes.ok) throw new Error('Failed to fetch bowling team');
        const bowlTeam = await bowlingTeamRes.json();
        
        const scoreCardRes = await fetch(`http://localhost:8080/api/scorecard/${match.scoreCard}`)
        if (!scoreCardRes.ok) throw new Error('Failed to fetch scorecard');
        const scoreCard = await scoreCardRes.json();

        if (scoreCard){
            setScoreCard(scoreCard);
            
        }
        if (battingTeam){
            setBattingTeam(batTeam)
        }
        if (bowlingTeam){
            setBowlingTeam(bowlTeam);
        }
    };
    const fetchMatchData = async () => {
        try {
            const response = await fetch(`http://localhost:8080/api/matches/${matchId}`);
            if (!response.ok) {
                throw new Error('Failed to fetch match data');
            }
            const matchData = await response.json();

            if (matchData) {
                setMatch(matchData)
                setCurrScore(matchData.currentScore);
                setCurrBatters(matchData.scoreCard.innings.currBatters);
                setCurrBowler(matchData.scoreCard.innings.currBowler);
                setWickets(matchData.scoreCard.wickets)
                setTotalOvers(matchData.scoreCard.totalOvers);    
            }
        } catch (error) {
            console.error('Error fetching match data:', error);
        }
    };


    const handleDeliveryResult = (result) => {

    }

    return (
        <>
            {/* <Navbar /> */}
            {match ?
                (<>
                    <CurrScoreHeader
                        currentBattingTeam={battingTeam}
                        currentScore={scoreCard.innings.runs}
                        wickets={scoreCard.wickets}
                        currentOver={currOver}
                        totalOvers={totalOvers}
                        currentRunRate={currRunRate} />

                    <DeliveryOptions onDeliveryResult={handleDeliveryResult} />

                    <BatterTable currentBatters={currBatters} />

                    <BowlerTable currentBowler={currBowler} />
                </>)
                : <div>Loading Match Data</div>}
        </>
    )
}

export default Match