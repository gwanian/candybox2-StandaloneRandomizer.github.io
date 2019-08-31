import os
import sys
from jsFormat import *

tupleList = []
rootdir = "./../ascii/"
finalFileName = "./../code/gen/genAscii.ts"

# We get the list of files in each subdirectory
for root, subFolders, files in os.walk(rootdir):
    for file in files:
        fullPath = os.path.join(root, file)
        tupleList.append((fullPath, os.path.splitext(fullPath)[0].replace(rootdir, "")))

# We open the output file
with open(finalFileName, mode='w', encoding="utf-8") as outfile:
    # We copy the content of each file in a big "genAscii.ts" file
    for tup in tupleList:
        # Open, read and close the input file
        with open(tup[0], 'r', encoding="utf-8") as infile:
            infileLines = infile.readlines()
        # Check if there's an @author instruction or not
        hasauthor = infileLines[0].startswith("@author")
        # Calc the max width of this ascii art
        maxwidth = 0
        for index, line in enumerate(infileLines):
            #! Why does this check authorness of line 0 when a check below is for authorness of the current line?
            if(len(line) > maxwidth and (not hasauthor or index > 0)):
                maxwidth = len(line)
        # Cal the height of the ascii art
        height = len(infileLines)
        if hasauthor:
            height -= 1
        # Write the beginning of the Database.addAscii() call
        outfile.write("Database.addAscii(\"" + tup[1].replace('\\','/') + "\", " + str(maxwidth-1) + ", " + str(height) + ", \n[\n")
        # Write the ascii art itself to the function call
        for index, line in enumerate(infileLines):
            #! Why does this check authorness of current line when a check above is for authorness of line 0?
            if not line.startswith("@author") or index > 0: # We don't write the line if it starts with @author and its the first line
                outfile.write("\"" + jsFormat(line.rstrip()) + "\"");
                if index < len(infileLines)-1: # We don't write the "," if we're the last line
                    outfile.write(",");
                outfile.write("\n");
        # Write the end of the function call
        outfile.write("]);\n");
