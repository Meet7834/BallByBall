'use client'
import React from 'react'
import { useState, useEffect } from 'react';
import CurrScoreHeader from '@/components/match/CurrScoreHeader';
import DeliveryOptions from '@/components/match/DeliveryOptions';
import BatterTable from '@/components/match/BatterTable';
import BowlerTable from '@/components/match/BowlerTable';
import dummyData from './dummyData';
import { useRouter } from 'next/navigation';

const Match = () => {

    const [match, setMatch] = useState();
    const [team1, setTeam1] = useState([]);
    const [team2, setTeam2] = useState([]);
    const [currBattingTeam, setCurrBattingTeam] = useState(null);
    const [currScore, setCurrScore] = useState(0);
    const [wickets, setWickets] = useState(0);
    const [currOver, setCurrOver] = useState([]);
    const [oversCompleted, setOversCompleted] = useState([]);
    const [totalOvers, setTotalOvers] = useState(5);
    const [currRunRate, setCurrRunRate] = useState(0);
    const [currBatters, setCurrBatters] = useState([]);
    const [currBowler, setCurrBowler] = useState(null);
    
    const router = useRouter();
    useEffect(() => {
        const { matchId } = router.query;

        const fetchMatchData = async () => {
            try {
                const response = await fetch(`http://localhost:8080/api/matches/${matchId}`); 
                if (!response.ok) {
                    throw new Error('Failed to fetch match data');
                }
                const matchData = await response.json();
                setMatch(matchData);
                setTeam1(match.battingFirst);
                setTeam2(match.battingSecond);
                setCurrBattingTeam(match.battingFirst);
                setCurrScore(match.currentScore);
                setCurrBatters(match.scoreCard.innings.currBatters);
                setCurrBowler(match.scoreCard.innings.currBowler);
                setWickets(match.scoreCard.wickets)
                setTotalOvers(match.scoreCard.totalOvers);
            } catch (error) {
                console.error('Error fetching match data:', error);
            }
        };

        fetchMatchData();
    }, []);

    const handleDeliveryResult = (result) => {

    }

    return (
        <>
            {/* <Navbar /> */}
            <CurrScoreHeader
                currentBattingTeam={dummyData.teams[0]}
                currentScore={dummyData.match.currentScore}
                wickets={dummyData.match.wickets}
                currentOver={dummyData.match.currentOver}
                totalOvers={dummyData.match.totalOvers}
                currentRunRate={dummyData.match.currentRunRate} />

            <DeliveryOptions onDeliveryResult={handleDeliveryResult} />

            <BatterTable currentBatters={dummyData.match.currentBatters} />

            <BowlerTable currentBowler={dummyData.match.currentBowler} />

        </>
    )
}

export default Match