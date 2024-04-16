# Solar-Eclipse-2024
Project 3
--------------------------------
- By M. Aparisio, H. Heer, M. Smith & L. Vara
--------------------------------

Note: It is important that if you are going to use this code, all files
are placed in a directory that matches this repository, for the better functionality of it.
Otherwise you would have to adjust the paths on the files, accordingly.

This repository consists of a Team Project were we explore the path of the Solar Eclipse observed on April 8th, 2024 across the United States:
---------------------------------
INDEX
---------------------------------
1. Analysis & Slide Presentation 
2. Content of the repository
3. Instructions for the Project
4. References

---------------------------------
Analysis & Slide Presentation
---------------------------------
- ??Solar Ecliplse 04/08/2024 Analysis Report: LINK
- ??Presentation: LINK 

---------------------------------
Content of the repository
---------------------------------
- Resources Directory:
  - Eclipse_Cities_Totality_duration.csv
  - Eclipse_Citites_Totality_duration.json
  - Eclipse_Totality_Averages.csv

- static Directory:
  - Cities_Outside_Totality.csv
  - Cities_Outside_Totality.geojson
  - Cities_Outisde_Totality.json
  - Cleanning_Ttl_E_duration.ipynb  <-- This file helped with calculation on the duration of the Total Eclipse and how many States had Total Eclipse Sightings.
  - Eclipse_Cities_Totality.csv
  - Eclipse_Cities_Totality.geojson
  - Eclipse_Cities_Totality.json
  - cleaned_TotalE_Duration.csv
  - cleaned_TotalE_Duration.json
  - cleaned_TotalE_Duration.xlsx
  - eclipse-background-2.png
  - eclipse-background.jpg
  - logic.js   <-- This is the main Javascript file that gives functionality to our HTML
  - style.css   <-- This is the css file that styles our HTML
 
- working_files Directory:
  - DurationPlots.js <-- Javascript that contains the Bar Plot, that we later incorporated to the logic.js file
  - durationIndex.html <-- HTML to test out the Bar Plot from this directory.
 
- Eclipse_Totality_Duration_csvtojson.ipynb
- index.html

----------------------------------
Instructions
----------------------------------


------------------------------------
References
------------------------------------

**References for the data source(s):**


**References for code:**
- To convert datetime using pd.to_datetime on the Jupyter Notebook "Cleanning_Ttl_E_duration.ipynb":
  - https://pandas.pydata.org/docs/reference/api/pandas.to_datetime.html
  - https://pandas.pydata.org/pandas-docs/version/0.23/generated/pandas.to_datetime.html
- For the format and referencing %Z
  - https://www.educative.io/answers/what-is-the-pandastodatetime-method

- For calculateDurationMMSS function in the logic.js file, to calculate the duration of the eclipse and transform that value into a MM:SS format:
  - https://stackoverflow.com/questions/17624335/converting-milliseconds-to-minutes-and-seconds
  - https://stackoverflow.com/questions/15493521/how-do-i-calculate-a-duration-time
  - https://www.geeksforgeeks.org/how-to-measure-time-taken-by-a-function-to-execute-using-javascript/
  - https://stackoverflow.com/questions/13894632/get-time-difference-between-two-dates-in-seconds

- For the fetch() method in the logic.js file:
  - https://reqbin.com/code/javascript/wc3qbk0b/javascript-fetch-json-example
  - https://learnjavascript.online/topics/fetch.html

**Image Resources:**
  -
  -
  -

-----------------------------------------------------------------------------------------------------------------------


