//https://github.com/RAVANA-SL/slRavana
//Exclusively From RAVANA-SL/ravanabot 

const RaOne = require('../events');
const {WAConnection, MessageOptions, MessageType, Mimetype, Presence} = require('@adiwajshing/baileys');
const Config = require('../config');
const fs = require('fs');
const axios = require('axios');
const Language = require('../language');
const Lang = Language.getString('__RavanaBot');

const td = Config.WORKTYPE == 'public' ? false : true
const pr = Config.WORKTYPE == 'private' ? false : true

const MTEXT = '\n*๊ง๐๐๐ฑ๐พ๐ ๐ธ๐ฝ๐ต๐พ๐๐๊ง*\n\nHay Im '+Config.BOT+',\n\n'+Config.MENUTEXT+'\n\nโๅฝก[ Contact Owner: *wa.me/'+Config.OWNERNUM+'*\nโๅฝก[ Version: *'+Config.VERSION+'*\nโๅฝก[ Branch: *'+Config.BRANCH+'*\nโๅฝก[ Language: *'+Config.LANG+'*\nโๅฝก[ Work Type: *'+Config.WORKTYPE+'*\n\n\n   *๐ท๐ฒ  ๐๐จ๐ฆ๐ฆ๐ฮฎ๐น๐ข แฐ๐ข๐๐  ๐โ*\n\n'


    RaOne.useCmd({pattern: 'ravana ?(.*)', fromMe: td, dontAddCommandList: true}, (async (message, match) => {
        
        var CMD_HELP = '';
        if (match[1] === '') {
            RaOne.commands.map(
                async (command) =>  {
                    if (command.dontAddCommandList || command.pattern === undefined) return;
                    try {
                        var match = command.pattern.toString().match(/(\W*)([A-Za-zฤรผลiรถรง1234567890]*)/);
                    } catch {
                        var match = [command.pattern];
                    }
    
                    var HANDLER = '';
    
                    if (/\[(\W*)\]/.test(Config.HANDLERS)) {
                        HANDLER = Config.HANDLERS.match(/\[(\W*)\]/)[1][0];
                    } else {
                        HANDLER = '.';
                    }
                    CMD_HELP += Config.MENU_H + ' *' + Lang.COMMAND + ':* ' + (match.length >= 3 ? (HANDLER + match[2]) : command.pattern) + (command.desc === '' ? '\n\n' : '\n');
                    if (command.desc !== '') CMD_HELP += Config.MENU_E + ' *' + Lang.DESC + ':* ' + command.desc + (command.warn === '' ? '\n\n' : '\n');
                    if (command.usage !== '') CMD_HELP += '*โจ๏ธ ' + Lang.EXAMPLE + ':* ' + command.usage + '\n\n';
                    if (command.warn !== '') CMD_HELP += '*โ?๏ธ ' + Lang.WARN + ':* ' + command.warn + '\n\n';

                }
            );
        
            var webimage = await axios.get(Config.MENU_LOGO, { responseType: 'arraybuffer' })

    await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.image, {mimetype: Mimetype.png, caption: MTEXT + CMD_HELP});
        } else {
            
            var CMD_HELP = '';
            RaOne.commands.map(
                async (command) =>  {
                    if (command.dontAddCommandList || command.pattern === undefined) return;
                    try {
                        var cmatch = command.pattern.toString().match(/(\W*)([A-Za-zฤรผลiรถรง1234567890]*)/);
                    } catch {
                        var cmatch = [command.pattern];
                    }
                
                    if (cmatch[2] == match[1]) {
                        var HANDLER = '';
    
                        if (/\[(\W*)\]/.test(Config.HANDLERS)) {
                            HANDLER = Config.HANDLERS.match(/\[(\W*)\]/)[1][0];
                        } else {
                            HANDLER = '.';
                        }
                        CMD_HELP += Config.MENU_H + ' *' + Lang.COMMAND + ':* ' + (cmatch.length >= 3 ? (HANDLER + cmatch[2]) : command.pattern) + (command.desc === '' ? '\n\n' : '\n');
                        if (command.desc !== '') CMD_HELP += Config.MENU_E + ' *' + Lang.DESC + ':* ' + command.desc + (command.warn === '' ? '\n\n' : '\n');
                        if (command.usage !== '') CMD_HELP += '*โจ๏ธ ' + Lang.EXAMPLE + ':* ' + command.usage + '\n\n';
                        if (command.warn !== '') CMD_HELP += '*โ?๏ธ ' + Lang.WARN + ':* ' + command.warn + '\n\n';

                    }
                }
            );
            if (CMD_HELP === '') CMD_HELP += Lang.NOT_FOUND;
            var webimage = await axios.get(Config.MENU_LOGO, { responseType: 'arraybuffer' })

    await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.image, {mimetype: Mimetype.png, caption: MTEXT + CMD_HELP});
        }
    }));

    RaOne.useCmd({pattern: 'menu ?(.*)', fromMe: true, dontAddCommandList: true}, (async (message, match) => {

        var CMD_HELP = '';
        if (match[1] === '') {
            RaOne.commands.map(
                async (command) =>  {
                    if (command.dontAddCommandList || command.pattern === undefined) return;
                    try {
                        var match = command.pattern.toString().match(/(\W*)([A-Za-zฤรผลiรถรง1234567890]*)/);
                    } catch {
                        var match = [command.pattern];
                    }
    
                    var HANDLER = '';
    
                    if (/\[(\W*)\]/.test(Config.HANDLERS)) {
                        HANDLER = Config.HANDLERS.match(/\[(\W*)\]/)[1][0];
                    } else {
                        HANDLER = '.';
                    }
                    CMD_HELP += Config.MENU_H + ' *' + Lang.COMMAND + ':* ' + (match.length >= 3 ? (HANDLER + match[2]) : command.pattern) + (command.desc === '' ? '\n\n' : '\n');
                    if (command.desc !== '') CMD_HELP += Config.MENU_E + ' *' + Lang.DESC + ':* ' + command.desc + (command.warn === '' ? '\n\n' : '\n');
                    if (command.usage !== '') CMD_HELP += '*โจ๏ธ ' + Lang.EXAMPLE + ':* ' + command.usage + '\n\n';
                    if (command.warn !== '') CMD_HELP += '*โ?๏ธ ' + Lang.WARN + ':* ' + command.warn + '\n\n';

                }
            );
        
            var webimage = await axios.get(Config.MENU_LOGO, { responseType: 'arraybuffer' })

    await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.image, {mimetype: Mimetype.png, caption: MTEXT + CMD_HELP});
        } else {

            var CMD_HELP = '';
            RaOne.commands.map(
                async (command) =>  {
                    if (command.dontAddCommandList || command.pattern === undefined) return;
                    try {
                        var cmatch = command.pattern.toString().match(/(\W*)([A-Za-zฤรผลiรถรง1234567890]*)/);
                    } catch {
                        var cmatch = [command.pattern];
                    }
                
                    if (cmatch[2] == match[1]) {
                        var HANDLER = '';
    
                        if (/\[(\W*)\]/.test(Config.HANDLERS)) {
                            HANDLER = Config.HANDLERS.match(/\[(\W*)\]/)[1][0];
                        } else {
                            HANDLER = '.';
                        }
                        CMD_HELP += Config.MENU_H + ' *' + Lang.COMMAND + ':* ' + (cmatch.length >= 3 ? (HANDLER + cmatch[2]) : command.pattern) + (command.desc === '' ? '\n\n' : '\n');
                        if (command.desc !== '') CMD_HELP += Config.MENU_E + ' *' + Lang.DESC + ':* ' + command.desc + (command.warn === '' ? '\n\n' : '\n');
                        if (command.usage !== '') CMD_HELP += '*โจ๏ธ ' + Lang.EXAMPLE + ':* ' + command.usage + '\n\n';
                        if (command.warn !== '') CMD_HELP += '*โ?๏ธ ' + Lang.WARN + ':* ' + command.warn + '\n\n';

                    }
                }
            );
            if (CMD_HELP === '') CMD_HELP += Lang.NOT_FOUND;
            var webimage = await axios.get(Config.MENU_LOGO, { responseType: 'arraybuffer' })

    await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.image, {mimetype: Mimetype.png, caption: MTEXT + CMD_HELP});
        }
    }));

    RaOne.useCmd({pattern: 'help ?(.*)', fromMe: td, dontAddCommandList: true}, (async (message, match) => {

        var CMD_HELP = '';
        if (match[1] === '') {
            RaOne.commands.map(
                async (command) =>  {
                    if (command.dontAddCommandList || command.pattern === undefined) return;
                    try {
                        var match = command.pattern.toString().match(/(\W*)([A-Za-zฤรผลiรถรง1234567890]*)/);
                    } catch {
                        var match = [command.pattern];
                    }
    
                    var HANDLER = '';
    
                    if (/\[(\W*)\]/.test(Config.HANDLERS)) {
                        HANDLER = Config.HANDLERS.match(/\[(\W*)\]/)[1][0];
                    } else {
                        HANDLER = '.';
                    }
                    CMD_HELP += Config.MENU_H + ' *' + Lang.COMMAND + ':* ' + (match.length >= 3 ? (HANDLER + match[2]) : command.pattern) + (command.desc === '' ? '\n\n' : '\n');
                    if (command.desc !== '') CMD_HELP += Config.MENU_E + ' *' + Lang.DESC + ':* ' + command.desc + (command.warn === '' ? '\n\n' : '\n');
                    if (command.usage !== '') CMD_HELP += '*โจ๏ธ ' + Lang.EXAMPLE + ':* ' + command.usage + '\n\n';
                    if (command.warn !== '') CMD_HELP += '*โ?๏ธ ' + Lang.WARN + ':* ' + command.warn + '\n\n';

                }
            );
        
            var webimage = await axios.get(Config.MENU_LOGO, { responseType: 'arraybuffer' })

    await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.image, {mimetype: Mimetype.png, caption: MTEXT + CMD_HELP});
        } else {

            var CMD_HELP = '';
            RaOne.commands.map(
                async (command) =>  {
                    if (command.dontAddCommandList || command.pattern === undefined) return;
                    try {
                        var cmatch = command.pattern.toString().match(/(\W*)([A-Za-zฤรผลiรถรง1234567890]*)/);
                    } catch {
                        var cmatch = [command.pattern];
                    }
                
                    if (cmatch[2] == match[1]) {
                        var HANDLER = '';
    
                        if (/\[(\W*)\]/.test(Config.HANDLERS)) {
                            HANDLER = Config.HANDLERS.match(/\[(\W*)\]/)[1][0];
                        } else {
                            HANDLER = '.';
                        }
                        CMD_HELP += Config.MENU_H + ' *' + Lang.COMMAND + ':* ' + (cmatch.length >= 3 ? (HANDLER + cmatch[2]) : command.pattern) + (command.desc === '' ? '\n\n' : '\n');
                        if (command.desc !== '') CMD_HELP += Config.MENU_E + ' *' + Lang.DESC + ':* ' + command.desc + (command.warn === '' ? '\n\n' : '\n');
                        if (command.usage !== '') CMD_HELP += '*โจ๏ธ ' + Lang.EXAMPLE + ':* ' + command.usage + '\n\n';
                        if (command.warn !== '') CMD_HELP += '*โ?๏ธ ' + Lang.WARN + ':* ' + command.warn + '\n\n';

                    }
                }
            );
            if (CMD_HELP === '') CMD_HELP += Lang.NOT_FOUND;
            var webimage = await axios.get(Config.MENU_LOGO, { responseType: 'arraybuffer' })

    await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.image, {mimetype: Mimetype.png, caption: MTEXT + CMD_HELP});
        }
    }));

    RaOne.useCmd({pattern: 'list ?(.*)', fromMe: td, dontAddCommandList: true}, (async (message, match) => {

        var CMD_HELP = '';
        if (match[1] === '') {
            RaOne.commands.map(
                async (command) =>  {
                    if (command.dontAddCommandList || command.pattern === undefined) return;
                    try {
                        var match = command.pattern.toString().match(/(\W*)([A-Za-zฤรผลiรถรง1234567890]*)/);
                    } catch {
                        var match = [command.pattern];
                    }
    
                    var HANDLER = '';
    
                    if (/\[(\W*)\]/.test(Config.HANDLERS)) {
                        HANDLER = Config.HANDLERS.match(/\[(\W*)\]/)[1][0];
                    } else {
                        HANDLER = '.';
                    }
                    CMD_HELP += Config.MENU_H + ' *' + Lang.COMMAND + ':* ' + (match.length >= 3 ? (HANDLER + match[2]) : command.pattern) + (command.desc === '' ? '\n\n' : '\n');
                    if (command.desc !== '') CMD_HELP += Config.MENU_E + ' *' + Lang.DESC + ':* ' + command.desc + (command.warn === '' ? '\n\n' : '\n');
                    if (command.usage !== '') CMD_HELP += '*โจ๏ธ ' + Lang.EXAMPLE + ':* ' + command.usage + '\n\n';
                    if (command.warn !== '') CMD_HELP += '*โ?๏ธ ' + Lang.WARN + ':* ' + command.warn + '\n\n';

                }
            );
        
            var webimage = await axios.get(Config.MENU_LOGO, { responseType: 'arraybuffer' })

    await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.image, {mimetype: Mimetype.png, caption: MTEXT + CMD_HELP});
        } else {

            var CMD_HELP = '';
            RaOne.commands.map(
                async (command) =>  {
                    if (command.dontAddCommandList || command.pattern === undefined) return;
                    try {
                        var cmatch = command.pattern.toString().match(/(\W*)([A-Za-zฤรผลiรถรง1234567890]*)/);
                    } catch {
                        var cmatch = [command.pattern];
                    }
                
                    if (cmatch[2] == match[1]) {
                        var HANDLER = '';
    
                        if (/\[(\W*)\]/.test(Config.HANDLERS)) {
                            HANDLER = Config.HANDLERS.match(/\[(\W*)\]/)[1][0];
                        } else {
                            HANDLER = '.';
                        }
                        CMD_HELP += Config.MENU_H + ' *' + Lang.COMMAND + ':* ' + (cmatch.length >= 3 ? (HANDLER + cmatch[2]) : command.pattern) + (command.desc === '' ? '\n\n' : '\n');
                        if (command.desc !== '') CMD_HELP += Config.MENU_E + ' *' + Lang.DESC + ':* ' + command.desc + (command.warn === '' ? '\n\n' : '\n');
                        if (command.usage !== '') CMD_HELP += '*โจ๏ธ ' + Lang.EXAMPLE + ':* ' + command.usage + '\n\n';
                        if (command.warn !== '') CMD_HELP += '*โ?๏ธ ' + Lang.WARN + ':* ' + command.warn + '\n\n';

                    }
                }
            );
            if (CMD_HELP === '') CMD_HELP += Lang.NOT_FOUND;
            var webimage = await axios.get(Config.MENU_LOGO, { responseType: 'arraybuffer' })

    await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.image, {mimetype: Mimetype.png, caption: MTEXT + CMD_HELP});
        }
    }));

    RaOne.useCmd({pattern: 'เถธเทเถฑเท ?(.*)', fromMe: td, dontAddCommandList: true}, (async (message, match) => {

        var CMD_HELP = '';
        if (match[1] === '') {
            RaOne.commands.map(
                async (command) =>  {
                    if (command.dontAddCommandList || command.pattern === undefined) return;
                    try {
                        var match = command.pattern.toString().match(/(\W*)([A-Za-zฤรผลiรถรง1234567890]*)/);
                    } catch {
                        var match = [command.pattern];
                    }
    
                    var HANDLER = '';
    
                    if (/\[(\W*)\]/.test(Config.HANDLERS)) {
                        HANDLER = Config.HANDLERS.match(/\[(\W*)\]/)[1][0];
                    } else {
                        HANDLER = '.';
                    }
                    CMD_HELP += Config.MENU_H + ' *' + Lang.COMMAND + ':* ' + (match.length >= 3 ? (HANDLER + match[2]) : command.pattern) + (command.desc === '' ? '\n\n' : '\n');
                    if (command.desc !== '') CMD_HELP += Config.MENU_E + ' *' + Lang.DESC + ':* ' + command.desc + (command.warn === '' ? '\n\n' : '\n');
                    if (command.usage !== '') CMD_HELP += '*โจ๏ธ ' + Lang.EXAMPLE + ':* ' + command.usage + '\n\n';
                    if (command.warn !== '') CMD_HELP += '*โ?๏ธ ' + Lang.WARN + ':* ' + command.warn + '\n\n';

                }
            );
        
            var webimage = await axios.get(Config.MENU_LOGO, { responseType: 'arraybuffer' })

    await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.image, {mimetype: Mimetype.png, caption: MTEXT + CMD_HELP});
        } else {
            
            var CMD_HELP = '';
            RaOne.commands.map(
                async (command) =>  {
                    if (command.dontAddCommandList || command.pattern === undefined) return;
                    try {
                        var cmatch = command.pattern.toString().match(/(\W*)([A-Za-zฤรผลiรถรง1234567890]*)/);
                    } catch {
                        var cmatch = [command.pattern];
                    }
                
                    if (cmatch[2] == match[1]) {
                        var HANDLER = '';
    
                        if (/\[(\W*)\]/.test(Config.HANDLERS)) {
                            HANDLER = Config.HANDLERS.match(/\[(\W*)\]/)[1][0];
                        } else {
                            HANDLER = '.';
                        }
                        CMD_HELP += Config.MENU_H + ' *' + Lang.COMMAND + ':* ' + (cmatch.length >= 3 ? (HANDLER + cmatch[2]) : command.pattern) + (command.desc === '' ? '\n\n' : '\n');
                        if (command.desc !== '') CMD_HELP += Config.MENU_E + ' *' + Lang.DESC + ':* ' + command.desc + (command.warn === '' ? '\n\n' : '\n');
                        if (command.usage !== '') CMD_HELP += '*โจ๏ธ ' + Lang.EXAMPLE + ':* ' + command.usage + '\n\n';
                        if (command.warn !== '') CMD_HELP += '*โ?๏ธ ' + Lang.WARN + ':* ' + command.warn + '\n\n';

                    }
                }
            );
            if (CMD_HELP === '') CMD_HELP += Lang.NOT_FOUND;
            var webimage = await axios.get(Config.MENU_LOGO, { responseType: 'arraybuffer' })

    await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.image, {mimetype: Mimetype.png, caption: MTEXT + CMD_HELP});
        }
    }));
