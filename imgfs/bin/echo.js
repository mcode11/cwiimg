cmd_echo=()=>{return (argv)=>{ret='';for (key in argv) {;key=argv[key];ret+=key+' ';};ret=ret.slice(0,-1);return ret}}