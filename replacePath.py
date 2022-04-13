import re
import sys

#更换生成的html中的绝对路径为相对路径

def addDot(sourceStr):
    Str = str(sourceStr.group())
    Str = Str+"."
    return Str

currentPath = str(sys.path[0]).replace('/','\\')
print(currentPath)
reslines = []

with open(currentPath + "./dist/index.html","r",encoding="utf-8") as f:
    lines = f.readlines()
    for line in lines:
        line=re.sub(".*<script type=\"module\" crossorigin src=\"",addDot,line)
        line=re.sub(".*<link rel=\"modulepreload\" href=\"",addDot,line)
        line=re.sub(".*<link rel=\"stylesheet\" href=\"",addDot,line)
        reslines.append(line)
    f.close()

with open(currentPath + "./dist/index.html","w",encoding="utf-8") as f:
    f.writelines(reslines)
    f.close()