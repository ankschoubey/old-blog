
import os.path, os, time

from datetime import datetime
def getLastUpdatedTime(file: str):
    return datetime.fromtimestamp(os.path.getmtime(file)).isoformat()

def updatePost(postUrl: str) -> None:
    lastUpdatedTime = getLastUpdatedTime(postUrl)
    prefix = "last_modified_at"
    string = f"{prefix}: {lastUpdatedTime}"
    with open(postUrl, "r", encoding="utf8") as file:
        lines = file.readlines()
        for index, line in enumerate(lines[1:]):
            #print(index, line)
            if line.startswith("---"):
                lines.insert(index - 1, string + '\n')
                #print("found break")
                break
            if line.startswith(prefix):
                if line.startswith(string[:28]):
                    return
                lines[index] = string + '\n'
    with open(postUrl, "w", encoding="utf8") as file:
        file.writelines(lines)
    
    

from os import listdir
from os.path import isfile, join

path = "_posts"
onlyfiles = [f for f in listdir(path) if isfile(join(path, f))]
#print(onlyfiles)

for i in onlyfiles:
    completePath = f"{path}/{i}"
    updatePost(completePath)