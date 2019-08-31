import re

manifestFileName = "./../cacheManifest.mf"
        
# We open the input file, read it and close it
with open(manifestFileName, 'r') as inputFile:
    lines = inputFile.readlines()

# We open the output file
with open(manifestFileName, 'w') as outputFile:
    # We read the lines
    for line in lines:
        if(line.startswith("# Version ")):
            fullVersionList = re.findall(r'[0-9]+', line)
            line = "# Version " + fullVersionList[0] + "." + str(int(fullVersionList[1])+1) + "\n"
        outputFile.write(line)
