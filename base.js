cwifs.setup()
function exec(argv) {argv=argv.split(" ");ret='';for (key in argv) {;key=argv[key];ret+=key+' ';};ret=ret.slice(0,-1);return eval(cwifs.file.read('/bin/'+ret.split(' ')[0]))()(ret.replace(ret.split(' ')[0]+' ','').split(' '))+"<br>";}
