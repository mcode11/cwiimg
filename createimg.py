import os, requests
cwifscript=open("base.js","r").read()
os.chdir("imgfs")
cwiimg=[]
for root, dirs, files in os.walk("."):
    for file in files:
        p=os.path.join(root,file)
        cwiimg.append(p.replace("\\","/")[1:])
for ifile in cwiimg:
    string='cwifs.file.write("'+ifile.replace(".js","")+'","'+open("."+ifile,"r").read()+'")'
    cwifscript+=string+"\n"
cwifscript+="usrhome='/home/"+open("home/.user","r").read().replace("user=","").replace("'","")+"/"+"'"
os.chdir("..")
open("image.js","w").write(cwifscript.replace('"',"`"))
open("cwifs.js","w").write(requests.get("https://mcode11.github.io/cwifs/cwifs.js").text)