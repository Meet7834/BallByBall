const dummyData = {
    match: {
        isLive: true,
        hostId: 'someUserId', // Replace with a valid format 
        totalOvers: 5,
        battingFirst: 'teamObjectIdFirst',  // Replace with a valid team object Id
        battingSecond: 'teamObjectIdSecond', // Replace with a valid team object Id
        extras: {
            noBalls: 0,
            legByes: 1,
            byes: 2,
            wides: 1,
        },
    },
    scorecard: {
        matchID: 'matchObjectId', // Replace with a valid match object Id
        innings: [
            {
                inningNum: 1,
                runs: 85,
                wickets: 2,
                extras: { noBalls: 1, legByes: 0, byes: 0, wides: 2 },
                currOver: { balls: [1, 4, 0, 'W', 1, 2] },
                overs: [
                    // More over data if needed 
                ],
                currBatters: [
                    'playerObjectId1', // Replace with player object Ids
                    'playerObjectId2',
                ],
                currBowler: 'playerObjectIdBowler',
                battingStats: [
                    { playerId: { name: 'Virat Kohli' }, runs: 34, balls: 22, fours: 3, sixes: 2, didBat: true },
                    { playerId: { name: 'Rohit Sharma' }, runs: 28, balls: 20, fours: 4, sixes: 0, didBat: true },
                    // ... more as needed 
                ],
                bowlingStats: [{
                    playerId: 'playerObjectIdBowler',
                    overs: 2.3,
                    maidens: 0,
                    runsConceded: 25,
                    wickets: 1,
                    extras: { noBalls: 0, legByes: 1, byes: 0, wides: 0 },
                }],
            },
        ],
    },
};

export default dummyData;
