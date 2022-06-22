const fetch = require('node-fetch');
require ("dotenv").config();
const discord = require('discord.js');
const modelUser = require("./models/userSchema")
const modelMessage = require("./models/messageSchema")
const modelServer = require("./models/serverSchema")
const modelChannel = require("./models/channelSchema")
const client = new discord.Client({
    intents:["GUILDS", "GUILD_MESSAGES","GUILD_MEMBERS","GUILD_PRESENCES"],
});


// ======EVENS HANDLERS

client.commands = new discord.Collection();
client.events = new discord.Collection();

["commandHandler", "eventHandler"].forEach((file) => {
    require(`./handlers/${file}`)(client, discord);
});

//################ MONGO ################

const mongoose = require('mongoose');
const { removeListener, insertMany } = require("./models/messageSchema");
const mdb = process.env.MDB
mongoose.connect(mdb, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then (() => {
    console.log("Conectado a Mongodb");
}).catch((e) => {
    console.log(e);
})


//login bot
client.login(process.env.DSTOKEN);

// =================== fonction pour récupérer les serveurs ================
//==========================================================================================
const testGuild = '951838732275830794' // ID SERVER TESTS
let serverData;

// const getServer = async() => {
//     try {
//         const resp = await fetch(`https://discord.com/api/guilds/${testGuild}?with_counts=true`, {
//             headers: {
//                 'Authorization': `Bot ${process.env.DSTOKEN}`
//             }
//         })
//         const data = await resp.json()
// // ===========   NOUS VÉRIFIONS SI LE SERVEUR EXISTE   ===============
//         serverData = await modelServer.findOne({serverID: data.id})
        
//         if(!serverData) {
//             let server = await modelServer.create({
//                 serverID: data.id,
//                 serverName: data.name,
//                 serverDescription: data.description,
//                 aproxMemberCount: data.approximate_member_count,
//                 aproxPresenceCount: data.approximate_presence_count,
//             })
//             console.log(server);

//             //server.save();
//         }
        
//     }catch(err){
//         console.log(err);
//     }
// } 
// getServer();


//=================== FONCTION DE RÉCUPÉRATION LES UTILISATEURS DANS UN SERVEUR===============
// ==========================================================================================

// const getUsers = async() => {
//     try {
//         const resp = await fetch(`https://discord.com/api/guilds/${testGuild}/members?limit=100`, {
//             headers: {
//                 'Authorization': `Bot ${process.env.DSTOKEN}`
//             }
//         })
//         const data = await resp.json()
//         // console.log(data);
//         let serverUsers = [];
        
//         await data.forEach((user) => {
//             let userData = {
//                 UserID: user.user.id,
//                 userName: user.user.username,
//                 serverID: testGuild,
//             }
//             serverUsers.push(userData);
               
//         });

//         console.log(serverUsers);
    
//         // modelUser.insertMany(serverUsers)
    


//     }catch(err){
//         console.log(err);
//     }
// }

// getUsers();



//=================== FONCTION DE RÉCUPÉRATION DES CANAUX DANS UN SERVEUR===============
// ==========================================================================================

// const getChannels = async() => {
//     try {
//         const resp = await fetch(`https://discord.com/api/guilds/${testGuild}/channels`, {
//             headers: {
//                 'Authorization': `Bot ${process.env.DSTOKEN}`
//             }
//         })
//         const data = await resp.json()
//         // console.log(data);
//         let channelsServer = [];
        
//         await data.forEach((channel) => {
//             let channelData = {
//                 channelID: channel.id,
//                 channelName: channel.name,
//                 serverID: channel.guild_id,
//                 channelType: channel.type,
//             }
//             channelsServer.push(channelData);
               
//         });

//         console.log(channelsServer);
    
//         // modelChannel.insertMany(channelsServer)
    


//     }catch(err){
//         console.log(err);
//     }
// }

// getChannels();





// ========CHANNELS IDS================
const otroCanal = '960519768710987867'
const general = '951838732816891936'
const masCanales = '960546465086849035'
const log = '960498656853782539'


// ++++++++++++++++++ fonction pour récupérer les messages d'un channel ++++++++++++++++++++++


// const getMessages = async() => {
//     try {
//         const resp = await fetch(`https://discord.com/api/channels/${log}/messages?limit=100`, {
//             headers: {
//                 'Authorization': `Bot ${process.env.DSTOKEN}`
//             }
//         })
//         const data = await resp.json()
//         let messagesDc = [];
//         let messagesBd;
        
//         await data.forEach((message) => {
//             let mensaje = {
//                         messageID: message.id,
//                         messageContent: message.content,
//                         userID: message.author.id,
//                         userName: message.author.username,
//                         serverID: message.guild_id,
//                         channelID: message.channel_id,
//                         timeStamp: message.timestamp,
//                         message: message.editedTimestamp,
//             }
//                         messagesDc.push(mensaje);
               
//                 });
//          console.log(messagesDc);
    
//           //  modelMessage.insertMany(messagesDc)

        
//                 // messagesBd = await modelMessage.find({},{messageID:1})

//     }catch(err){
//         console.log(err);
//     }
// }

// getMessages();




 
























































// SLASH COMMANDS 

// let Scomand = [
//     {
//         name: "ping2",
//         description: "Contesta el ping del usuario",
//         run: async(client, interaction, args) => {
//             await interaction.followUp({content: ` Ping: ${client.ws.ping} ms`})
//         }
//     }
// ]

// client.slash = new discord.Collection();

//  client.once('ready',  async ()=> {
  

  
    //console.log(canales);
//     console.log("############################################################################################");
//     console.log(`Bot: ${client.user.username}`);
//     client.user.setStatus('online');
//     client.user.setActivity("Agent #117", {type: 'WATCHING'});
//     console.log("############################################################################################\n\n");
//     console.log("################################   CONSOLE LOGS       ######################################");

    // client.slash.set(Scomand[0].name, Scomand[0]);
    {/* // client.slash.set(Scomand[1].name, Scomand[1]); */}

// await client.application.commands.set(Scomand);



//  })

// client.on("interactionCreate", async (interaction) => {
//     if (interaction.isCommand()) {
//         await interaction.deferReply({ ephemeral : false }).catch((obj) => {
//             // console.log(obj);
//         })
//         console.log(client.slash.get(interaction.commandName));

//         const command = client.slash.get(interaction.commandName);

//         if(!command) return interaction.followUp({ content : "Comando no registrado" })

//         // const args = [];
//        try {
//            command.run(client, interaction )
//        }catch (error) {
//            console.log(error);
//        }

//     }
// })


// client.on("messageCreate", (msg) => {
//     console.log(msg);
// })



//     if(msg.content.startsWith(prefix)) {

//         // return msg.reply(`Este es un comando del prefijo ${prefix}`);
    
//         //estructura de un comando de prefijo
//         //?borrar 99 === prefijo/comando/ argumentos
    
//         const argumentos = msg.content.slice(prefix.length).split(/ +/);
//         const comando = argumentos.shift().toLocaleLowerCase(); //nos dejaria el array que devolvio split sin el primer argumento

       


//         if (comando == "ping") return msg.reply('pong');
//         if(comando == "suma") {
//             return msg.reply(`El resultado es: ${parseFloat(argumentos[0]) + parseFloat(argumentos[1])}`)
//     }
// }



// });
// }






//-------














// client.on("apiRequest" , () => {
//    client.fetchGuildPreview()
//     .then(result => result.json())
//     .then(response => {
//         console.log(response);
//     }).catch  = (err) => {
//         console.log(err);
//     }
// })





// const obtener = async() => {
//     try {
//         const resp = await fetch(`https://discord.com/api/guilds/951838732275830794/channels`, {
//             headers: {
//                 'Authorization': `Bot ${process.env.DSTOKEN}`
//             }
//         })
//         const data = await resp.json()
//         console.log(data);

//     }catch(err){
//         console.log(err);
//     }
// }
// obtenerUsuario();


