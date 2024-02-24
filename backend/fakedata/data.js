// const Users = require('../models/UserModel');
// const Team = require('../models/TeamModel');

// async function createTeams() {
//     try {
//         // Fetch users from the database
//         const users = await fetch("http://localhost:8080/api/users/").then(res => res.json());
//         // console.log('Users fetched successfully:', users);

//         // Divide users into two teams (random selection in this example)
//         const team1Players = users.slice(0, 11); // First 11 users
//         const team2Players = users.slice(11, 22); // Next 11 users
//         // console.log(team1Players, team2Players);

//         const team1Captain = users.find(user => user.name === "Virat Kohli");
//         const team1WK = users.find(user => user.name === "Dinesh Karthik");
//         const team2Captain = users.find(user => user.name === "Rohit sharma");
//         const team2WK = users.find(user => user.name === "Ishan Kishan");
//         console.log(team1Captain, team1WK, team2Captain, team2WK);

//         const team1 = {
//             name: "RCB",
//             captain: team1Captain._id,
//             wk: team1WK._id,
//             players: team1Players.map(user => user._id)
//         }

//         const team2 = {
//             name: "MI",
//             captain: team2Captain._id,
//             wk: team2WK._id,
//             players: team2Players.map(user => user._id)
//         };

//         await fetch("http://localhost:8080/api/teams", {
//             method: 'POST',
//             headers: {
//                 'Content-Type': 'application/json'
//             },
//             body: JSON.stringify(team1)
//         })
//             .then(res => res.json())
//             .then(data => console.log('Team 1 created:', data))
//             .catch(err => console.error('Error creating team 1:', err));

//         await fetch("http://localhost:8080/api/teams", {
//             method: 'POST',
//             headers: {
//                 'Content-Type': 'application/json'
//             },
//             body: JSON.stringify(team2)
//         })
//             .then(res => res.json())
//             .then(data => console.log('Team 2 created:', data))
//             .catch(err => console.error('Error creating team 2:', err));

//     } catch (error) {
//         console.error('Error creating teams:', error);
//     }
// }

// // Call the function to create teams
// createTeams();