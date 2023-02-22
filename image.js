cwifs.setup()
function exec(argv) {argv=argv.split(` `);ret='';for (key in argv) {;key=argv[key];ret+=key+' ';};ret=ret.slice(0,-1);return eval(cwifs.file.read('/bin/'+ret.split(' ')[0]))()(ret.replace(ret.split(' ')[0]+' ','').split(' '))+`<br>`;}
cwifs.file.write(`/bin/echo`,`cmd_echo=()=>{return (argv)=>{ret='';for (key in argv) {;key=argv[key];ret+=key+' ';};ret=ret.slice(0,-1);return ret}}`)
cwifs.file.write(`/bin/exec`,`cmd_exec=()=>{return (argv)=>{ret='';for (key in argv) {;key=argv[key];ret+=key+' ';};ret=ret.slice(0,-1);return eval(cwifs.file.read('/bin/'+ret.split(' ')[0]))()(ret.replace(ret.split(' ')[0]+' ','').split(' '));}}`)
cwifs.file.write(`/etc/hostname`,`hostname='customimg'`)
cwifs.file.write(`/etc/motd`,`motd='Hello! Welcome to CustomIMG!'`)
cwifs.file.write(`/etc/version`,`version=1`)
cwifs.file.write(`/home/.user`,`user='main'`)
cwifs.file.write(`/home/main/.profile`,`prefix='main@customimg: % '`)
usrhome='/home/main/'