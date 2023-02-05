const fs = require("fs")
const chalk = require("chalk")


const menu = (prefix, pushname, isGroup, groupName, adivinhaa, NomeDoBot) => {

return `
┏━━━━━━[🗯]━━━━━━━━ ➤
┃[☆]╭

┃[☆] ➙ 🗯 ${!isGroup ? `𝗨𝘀𝘂𝗮𝗿𝗶𝗼: ${pushname}` :  `𝗚𝗿𝘂𝗽𝗼: ${groupName}`}

┃ [☆] ➙ SEU CELULAR É: ${adivinhaa}  
  
┃[☆] ➙ 𝘽𝙀𝙈 𝙑𝙄𝙉𝘿𝙊 𝘼𝙊 𝙈𝙀𝙉𝙐

┃[☆] ➙ ${NomeDoBot}

┃[☆]╰
┗━━━━━━[💫]━━━━━━━━ ➤
​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​
​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​
┏━━━━━━[🗯]━━━━━━━━ ➤

┃[☆] ➙ 💥 𝙑𝙀𝙍𝙎𝘼̃𝙊 : 7.0

┗━━━━━━[💫]━━━━━━━━ ➤

┏━━━━━━[🗯]━━━━━━━━ ➤

       𝙋𝙍𝙄𝙉𝘾𝙄𝙋𝘼𝙄𝙎:
       
┃[☆]╭
┃[☆] ➙ ${prefix}convite [link do gp]
┃[☆] ➙ ${prefix}alugar
┃[☆] ➙ ${prefix}duelo
┃[☆] ➙ ${prefix}conselhobiblico 
┃[☆] ➙ ${prefix}mediafire [LINK] 
┃[☆] ➙ ${prefix}ping
┃[☆] ➙ ${prefix}perfil
┃[☆] ➙ ${prefix}lista-online
┃[☆] ➙ ${prefix}instadw [LINK] 
┃[☆] ➙ ${prefix}gtts pt [texto] 
┃[☆] ➙ ${prefix}metadinha
┃[☆] ➙ ${prefix}videopralink [marcar vídeo] 
┃[☆] ➙ ${prefix}gerarlink 
┃[☆] ➙ ${prefix}level
┃[☆] ➙ ${prefix}ranklevel
┃[☆] ➙ ${prefix}correio
┃[☆]╰
┗━━━━━━[💫]━━━━━━━━ ➤

┏━━━━━━[🗯]━━━━━━━━ ➤

        𝙎𝙏𝙄𝘾𝙆𝙀𝙍𝙎:
       
┃[☆]╭
┃[☆] ➙ ${prefix}emoji 😛
┃[☆] ➙ ${prefix}emoji2 😈+☺️
┃[☆] ➙ ${prefix}attp [texto] 
┃[☆] ➙ ${prefix}attp2 [texto] 
┃[☆] ➙ ${prefix}attp3 [texto] 
┃[☆] ➙ ${prefix}attp4 [texto] 
┃[☆] ➙ ${prefix}attp5 [texto] 
┃[☆] ➙ ${prefix}attp6 [texto] 
┃[☆] ➙ ${prefix}ttp [texto] 
┃[☆] ➙ ${prefix}toimg
┃[☆] ➙ ${prefix}togif
┃[☆] ➙ ${prefix}sticker
┃[☆] ➙ ${prefix}roubar [marcar a figu] 
┃[☆] ➙ ${prefix}rename [marcar a figu]  
┃[☆] ➙ ${prefix}legenda [texto] 
┃[☆] ➙ ${prefix}legenda2 [texto|texto]
┃[☆] ➙ ${prefix}arma [marcar foto] 
┃[☆] ➙ ${prefix}cstiker
┃[☆] ➙ ${prefix}sfundo
┃[☆]╰
┗━━━━━━[💫]━━━━━━━━ ➤


┏━━━━━━[🗯]━━━━━━━━ ➤

        𝙋𝙊𝙍𝙉𝙊:
        
┃[☆]╭
┃[☆] ➙ ${prefix}hentai
┃[☆] ➙ ${prefix}porno
┃[☆] ➙ ${prefix}hentai-neko
┃[☆]╰
┗━━━━━━[💫]━━━━━━━━ ➤

┏━━━━━━[🗯]━━━━━━━━ ➤

       𝘼𝘿𝙈𝙄𝙉𝙄𝙎𝙏𝙍𝘼𝘿𝙊𝙍𝙀𝙎:
       
┃[☆]╭
┃[☆] ➙ ${prefix}tagall [marcar todos]
┃[☆] ➙ ${prefix}marcar [marcar todos]
┃[☆] ➙ ${prefix}resetaki [akinator]
┃[☆] ➙ ${prefix}autofigu-gp 1/0
┃[☆] ➙ ${prefix}hidetag [marcar todos] 
┃[☆] ➙ ${prefix}simih 1/0
┃[☆] ➙ ${prefix}simih2 1/0
┃[☆] ➙ ${prefix}descgp
┃[☆] ➙ ${prefix}nomegp
┃[☆] ➙ ${prefix}fotogp
┃[☆] ➙ ${prefix}ban
┃[☆] ➙ ${prefix}sairgp
┃[☆] ➙ ${prefix}reviver [marcar a msg]
┃[☆] ➙ ${prefix}kick @numero
┃[☆] ➙ ${prefix}marcarwa [marcar todos] 
┃[☆] ➙ ${prefix}add 552199..... 
┃[☆] ➙ ${prefix}linkgp
┃[☆] ➙ ${prefix}promover @numero
┃[☆] ➙ ${prefix}rebaixar @numero
┃[☆] ➙ ${prefix}tirardalista
┃[☆] ➙ ${prefix}listanegra
┃[☆] ➙ ${prefix}listban
┃[☆] ➙ ${prefix}autoban
┃[☆] ➙ ${prefix}kickfake [remove todos fake]
┃[☆] ➙ ${prefix}banfake [remove todos fake]
┃[☆]╰
┗━━━━━━[💫]━━━━━━━━ ➤


┏━━━━━━[🗯]━━━━━━━━ ➤

           𝙇𝙊𝙇𝙄𝙎:
           
┃[☆]╭
┃[☆] ➙ ${prefix}waifu
┃[☆] ➙ ${prefix}juice
┃[☆] ➙ ${prefix}cosplay
┃[☆] ➙ ${prefix}husbu
┃[☆] ➙ ${prefix}loli
┃[☆] ➙ ${prefix}yaoi
┃[☆] ➙ ${prefix}foto-de-cria
┃[☆] ➙ ${prefix}naruto
┃[☆] ➙ ${prefix}zoro
┃[☆] ➙ ${prefix}luffy
┃[☆] ➙ ${prefix}sanji
┃[☆] ➙ ${prefix}ussop
┃[☆] ➙ ${prefix}nami
┃[☆] ➙ ${prefix}copper
┃[☆] ➙ ${prefix}minato
┃[☆] ➙ ${prefix}sasuke
┃[☆] ➙ ${prefix}sakura
┃[☆] ➙ ${prefix}boruto
┃[☆] ➙ ${prefix}sarada
┃[☆] ➙ ${prefix}mitsuki
┃[☆] ➙ ${prefix}orochimaru
┃[☆] ➙ ${prefix}tsunade
┃[☆] ➙ ${prefix}kakashi
┃[☆] ➙ ${prefix}killua
┃[☆] ➙ ${prefix}gon
┃[☆] ➙ ${prefix}rimuru
┃[☆] ➙ ${prefix}sagiri
┃[☆] ➙ ${prefix}natsu
┃[☆] ➙ ${prefix}tanjirou
┃[☆] ➙ ${prefix}nezuko
┃[☆] ➙ ${prefix}senku
┃[☆]╰
┗━━━━━━[💫]━━━━━━━━ ➤


┏━━━━━━[🗯]━━━━━━━━ ➤

  𝘾𝙊𝙉𝙁𝙄𝙂𝙐𝙍𝘼𝘾𝙊𝙀𝙎 𝘿𝙊 𝙂𝙍𝙐𝙋𝙊:
     
┃[☆]╭
┃[☆] ➙ ${prefix}autofig-pv 1/0
┃[☆] ➙ ${prefix}autofig-gp 1/0
┃[☆] ➙ ${prefix}configp
┃[☆] ➙ ${prefix}Antidocumento 1 / 0  
┃[☆] ➙ ${prefix}antilinkhard 1/0
┃[☆] ➙ ${prefix}antilink 1/0
┃[☆] ➙ ${prefix}Antiloc 1 / 0  
┃[☆] ➙ ${prefix}Anticontato 1 / 0
┃[☆] ➙ ${prefix}Antiaudio 1 / 0
┃[☆] ➙ ${prefix}Antivideo 1 / 0
┃[☆] ➙ ${prefix}Antifake 1 / 0
┃[☆] ➙ ${prefix}Antiimg 1 / 0
┃[☆] ➙ ${prefix}AntiCatalogo 1 / 0
┃[☆] ➙ ${prefix}antisticker 1/0
┃[☆] ➙ ${prefix}Nsfw 1/0
┃[☆] ➙ ${prefix}leveling 1/0
┃[☆] ➙ ${prefix}anagrama 1/0
┃[☆] ➙ ${prefix}autoreação
┃[☆] ➙ ${prefix}legendabv2
┃[☆] ➙ ${prefix}legendasaiu2
┃[☆] ➙ ${prefix}bemvindo2
┃[☆] ➙ ${prefix}novolink
┃[☆] ➙ ${prefix}infogp
┃[☆] ➙ ${prefix}abrirgp
┃[☆]╰
┗━━━━━━[💫]━━━━━━━━ ➤

┏━━━━━━[🗯]━━━━━━━━ ➤

         𝘼𝙐𝘿𝙄𝙊𝙎:
         
┃[☆]╭
┃[☆] ➙ ${prefix}faustao 
┃[☆] ➙ ${prefix}patolino 
┃[☆] ➙ ${prefix}chapolin 
┃[☆] ➙ ${prefix}eminem
┃[☆] ➙ ${prefix}ibere 
┃[☆]╰
┗━━━━━━[💫]━━━━━━━━ ➤

┏━━━━━━[🗯]━━━━━━━━ ➤

       EFEITOS:
       
┃[☆]╭
┃[☆] ➙ ${prefix}lgbt
┃[☆] ➙ ${prefix}triggered
┃[☆] ➙ ${prefix}morto
┃[☆]╰
┗━━━━━━[💫]━━━━━━━━ ➤
┏━━━━━━[🗯]━━━━━━━━ ➤

          𝙋𝙀𝙎𝙌𝙐𝙄𝙎𝘼𝙎:
          
┃[☆]╭
┃[☆] ➙ ${prefix}pesquisar
┃[☆] ➙ ${prefix}google
┃[☆] ➙ ${prefix}mia
┃[☆] ➙ ${prefix}celular [nome do celular] 
┃[☆] ➙ ${prefix}pinterest [nome de qualquer coisa] 
┃[☆] ➙ ${prefix}pesquisar-mulheres
┃[☆] ➙ ${prefix}gerarcpf
┃[☆] ➙ ${prefix}cep
┃[☆] ➙ ${prefix}placa
┃[☆] ➙ ${prefix}ddd
┃[☆] ➙ ${prefix}encurtalink
┃[☆] ➙ ${prefix}listabr
┃[☆] ➙ ${prefix}listafake
┃[☆] ➙ ${prefix}listaddd
┃[☆]╰
┗━━━━━━[💫]━━━━━━━━ ➤

┏━━━━━━[🗯]━━━━━━━━ ➤

         𝘽𝙍𝙄𝙉𝘾𝘼𝘿𝙀𝙄𝙍𝘼𝙎:
         
┃[☆]╭
┃[☆] ➙ ${prefix}akinator
┃[☆] ➙ ${prefix}jogodaforca
┃[☆] ➙ ${prefix}forca (letter)
┃[☆] ➙ ${prefix}resetforca
┃[☆] ➙ ${prefix}joga @552195.... [pedra papel tesoura]
┃[☆] ➙ ${prefix}jogodavelha @
┃[☆] ➙ ${prefix}simi texto
┃[☆] ➙ ${prefix}fazernick
┃[☆] ➙ ${prefix}Pau
┃[☆] ➙ ${prefix}Gay1
┃[☆] ➙ ${prefix}Gadometro
┃[☆] ➙ ${prefix}Chance (Texto)
┃[☆] ➙ ${prefix}cassino
┃[☆] ➙ ${prefix}casal
┃[☆] ➙ ${prefix}shipo
┃[☆] ➙ ${prefix}alma-gemeas
┃[☆] ➙ ${prefix}duelo
┃[☆] ➙ ${prefix}gay
┃[☆] ➙ ${prefix}feio
┃[☆] ➙ ${prefix}matar
┃[☆] ➙ ${prefix}vesgo
┃[☆] ➙ ${prefix}bebado
┃[☆] ➙ ${prefix}gado
┃[☆] ➙ ${prefix}gostoso
┃[☆] ➙ ${prefix}gostosa
┃[☆] ➙ ${prefix}beijo
┃[☆] ➙ ${prefix}tapa
┃[☆] ➙ ${prefix}chutar
┃[☆] ➙ ${prefix}dogolpe
┃[☆] ➙ ${prefix}nazista
┃[☆] ➙ ${prefix}rankgay
┃[☆] ➙ ${prefix}rankgado
┃[☆] ➙ ${prefix}rankcorno
┃[☆] ➙ ${prefix}rankgostosos
┃[☆] ➙ ${prefix}rankgostosas
┃[☆] ➙ ${prefix}ranknazista
┃[☆] ➙ ${prefix}rankotakus
┃[☆] ➙ ${prefix}rankpau
┃[☆] ➙ ${prefix}quando
┃[☆] ➙ ${prefix}docfake
┃[☆]╰
┗━━━━━━[💫]━━━━━━━━ ➤

┏━━━━━━[🗯]━━━━━━━━ ➤

        𝙋𝙇𝘼𝙔𝙀𝙍𝙎:
        
┃[☆]╭
┃[☆] ➙ ${prefix}ytmp3
┃[☆] ➙ ${prefix}ytmp4
┃[☆] ➙ ${prefix}play [nome da música] 
┃[☆] ➙ ${prefix}tiktok (link)
┃[☆] ➙ ${prefix}ptlyrics [nome da música] 
┃[☆] ➙ ${prefix}lyrics [nome da música] 
┃[☆] ➙ ${prefix}tomp3 [marcar vídeo] 
┃[☆]╰
┗━━━━━━[💫]━━━━━━━━ ➤

┏━━━━━━[🗯]━━━━━━━━ ➤

         𝘿𝙊𝙉𝙊:
       
┃[☆]╭
┃[☆] ➙ ${prefix}anticall 1/0
┃[☆] ➙ ${prefix}premiumlist
┃[☆] ➙ ${prefix}addpremium @
┃[☆] ➙ ${prefix}delpremium @
┃[☆] ➙ ${prefix}reviverqr
┃[☆] ➙ ${prefix}arquivargp
┃[☆] ➙ ${prefix}nuke
┃[☆] ➙ ${prefix}setbio
┃[☆] ➙ ${prefix}entrar [link do gp]
┃[☆] ➙ ${prefix}antipvon
┃[☆] ➙ ${prefix}antipvoff
┃[☆] ➙ ${prefix}msg
┃[☆] ➙ ${prefix}block @
┃[☆] ➙ ${prefix}unblock @
┃[☆] ➙ ${prefix}clonargp
┃[☆] ➙ ${prefix}clonagp
┃[☆] ➙ ${prefix}fotobot
┃[☆] ➙ ${prefix}clonar
┃[☆] ➙ ${prefix}seradm [pra ser torna adm do gp]
┃[☆] ➙ ${prefix}sermembro [pra tira teu adm do gp]
┃[☆] ➙ ${prefix}listagp
┃[☆] ➙ ${prefix}banghost
┃[☆] ➙ ${prefix}serpremium
┃[☆] ➙ ${prefix}antipv 1/0
┃[☆] ➙ ${prefix}ganharxp
┃[☆] ➙ ${prefix}ganharlevel
┃[☆]╰
┗━━━━━━[💫]━━━━━━━━ ➤
`
}

exports.menu = menu
