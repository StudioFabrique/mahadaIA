// import {createServer} from "@graphql-yoga/node"
import fetch from "node-fetch"
import { got } from "got";



// const obtenerUsuarios = async() => {


//   const  query = `query {
//         trainees{
//           lastname
//         }
//       }`

//     try {
//         const resp = await fetch(`https://app.digiforma.com/api/v1/graphiql`, {
//             headers: {
//                 'authorization': `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MjE2NzcsIm1vZGUiOiJhcGkiLCJ0eXBlIjoidXNlciIsImV4cCI6MTk2ODAxOTIwMCwiaXNzIjoiRGlnaWZvcm1hIn0.Zui_Iedtk84kIZ2maAhFOT3DRLYLzFJd7H2WYzAOqk4`,
//                 "Content-Type":"application/json"

//             }
//         })
//         const data = await resp.json({query})
//         // let messagesDc = [];
//         // let messagesBd;
//         console.log(data);

//         // await data.forEach((message) => {
//         //     let mensaje = {
//         //                 messageID: message.id,
//         //                 messageContent: message.content,
//         //                 userID: message.author.id,
//         //                 userName: message.author.username,
//         //                 serverID: message.guild_id,
//         //                 channelID: message.channel_id,
//         //                 timeStamp: message.timestamp,
//         //                 message: message.editedTimestamp,
//         //             }
//         //             messagesDc.push(mensaje);
//         //         });
//         // console.log(messagesDc);

//                 // const dese = {...messagesDc}
//                 // console.log(messagesDc[0].messageID);
//                 // modelMessage.insertMany(messagesDc)
//                 // messagesBd = await modelMessage.find({},{messageID:1})
//                 // // console.log(messagesBd);
//                 // const diferenciaDeArreglos = (arr1, arr2) => {
//                 //     return arr1.filter(elemento => arr2.indexOf(elemento) == -1);
//                 // }

//                 // i = 1;


//     }catch(err){
//         console.log(err);
//     }
//   }

//   obtenerUsuarios();

console.log('hello');

//   const spaceID = "mt0pmhki5db7";
// const got = require("got");

// const spaceID = "mt0pmhki5db7";
const accessToken = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MjE2NzcsIm1vZGUiOiJhcGkiLCJ0eXBlIjoidXNlciIsImV4cCI6MTk2ODAxOTIwMCwiaXNzIjoiRGlnaWZvcm1hIn0.Zui_Iedtk84kIZ2maAhFOT3DRLYLzFJd7H2WYzAOqk4";
// const endpoint = "https://app.digiforma.com/api/v1/graphiql";
// const query = `query {
//                     trainees{
//             lastname
//             firstname
//             trainingSessions {
//               name
//               abandons {
//                 abandonStartDate
//                 abandonEndDate
//                 isJustified
//                 commentJustifiedAbsence
//               }
//             }
//             nationality
//             birthdate
//             email
//             roadAddress
//             phone
//             lastDiploma
//             status
//             handicaped
            
//           }
          
//         }`;

// const options = {
//   headers: {
//     Authorization: "Bearer " + accessToken,
//     "Content-Type": "application/json",
//   },
//   body: JSON.stringify({ query }),
// };

// got
//   .post(endpoint, options)
//   .then((response) => {
//     // console.log(response.body);
//     const dataResp = response.body
//     const dataParse = JSON.parse(dataResp)
//     // const data =  JSON.parse(dataParse)
//     console.log(typeof(dataParse));

//     // return dataResp
//   })
//   .catch((error) => {
//     console.log(error);
//   });

// const test = dataResp.map(u => `name:${u.firstname} -- lastname:${u.lastname}`).join("\n")
// console.log(test);

// require('isomorphic-fetch');
// import { got } from "got";

//   let users = [];
// let user;

fetch('https://app.digiforma.com/api/v1/graphiql', {
    method: 'POST',
  headers: { Authorization: "Bearer " + accessToken,
            'Content-Type': 'application/json' },
            body: JSON.stringify({ query:`query {
              trainees{
      lastname
      firstname
      trainingSessions {
        name
        abandons {
          abandonStartDate
          abandonEndDate
          isJustified
          commentJustifiedAbsence
        }

      }
      nationality
      birthdate
      email
      roadAddress
      phone
      lastDiploma
      status
      handicaped

    }

  }` 
  }),
})
.then( (res) => res.json())
// .then(res => console.log(res.data.firstname))
.then(function (res) {
// //  let users = data.map(u => `name:${u.firstname} -- lastname:${u.lastname}`).join("\n")
  // console.log(res.data)
  const sesion = res.data[0]
  const sesions = sesion[10]
console.log(sesions);
})
// .then(res => {
//   const  datos  = res.data
//   date = JSON.parse(datos);
//   console.log(date);
//   // res.data.forEach(u => {

//   //   let userDf = {

//   //                 Nom: u.lastname,
//   //                 Prenom: u.firstname,
//   //                 Session: u.trainingSessions.name,
//   //                 lastDiplome: u.lastDiploma,
//   //                 dateDeNaissance: u.birthdate,
//   //                 email: u.email,
//   //                 adresse: u.roadAddress,
//   //                 tel: u.phone,
//   //                 status: u.status,
//   //                 handicaped: u.handicaped,
//   //                 absance: u.trainingSessions.abandons,
//   //                        }


//   //                       });
//       console.log(userDf);
// })




// const obtenerUsuarios = async () => {
//   try {
//     const resp = await fetch('https://app.digiforma.com/api/v1/graphiql', {
//       method: 'POST',
//       headers: {
//         Authorization: "Bearer " + accessToken,
//         'Content-Type': 'application/json'
//       },
//       body: JSON.stringify({
//         query: `query {
//                   trainees{
//           lastname
//           firstname
//           trainingSessions {
//             name
//             abandons {
//               abandonStartDate
//               abandonEndDate
//               isJustified
//               commentJustifiedAbsence
//             }
            
//           }
//           nationality
//           birthdate
//           email
//           roadAddress
//           phone
//           lastDiplomalet users = data.map(u => `name:${u.firstname} -- lastname:${u.lastname}`).join("\n")

//     })
  
//     data = await JSON.parse(resp.body);
//     let usersDf = [];
//     console.log(data);

//     // await data.trainees.forEach((u) => {
//     //   let userDf = {

//     //     Nom: u.lastname,
//     //     Prenom: u.firstname,
//     //     Session: u.trainingSessions.name,
//     //     lastDiplome: u.lastDiploma,
//     //     dateDeNaissance: u.birthdate,
//     //     email: u.email,
//     //     adresse: u.roadAddress,
//     //     tel: u.phone,
//     //     status: u.status,
//     //     handicaped: u.handicaped,
//     //     absance: u.trainingSessions.abandons,
//     //   }
//     //   usersDf.push(userDf);
//     // });
//     // console.log(usersDf);


//   } catch (err) {
//     console.log(err);
//   }
// }

// obtenerUsuarios();

