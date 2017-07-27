# Music Player

A simple to use music player created in using React Js and Bootstrap/FontAwesome for easy styling. 
Webpack is also included for easy deployment and testing. ( You can remove this if not needed )

#### Familiar with Git?
Checkout this repo, install dependencies, then start the gulp process with the following:

```
> git clone https://github.com/TonCoder/react-music-player.git
> cd ReactMusicPlayer
> npm install
> npm start
```

#### Not Familiar with Git?
Click [here](https://github.com/TonCoder/react-music-player/archive/master.zip) then download the .zip file.  Extract the contents of the zip file, then open your terminal, change to the project directory, and:

```
> npm install
> npm start
```
### How to use it and add your own music
Navigate to app.js file and change/add your music information. example:

```
  "Albums":[
      {               
          "artist": "TonCoder",
          "albumName": "Ton Blast",
          "coverArt": "http://unrealitymag.com/wp-content/uploads/2015/01/80s_Villains_3.jpg",
          "songs": [
              {
                  "songName": "Belly Dancing",
                  "songUrl": "./songs/Belly Dancing.mp3",
              },
              {
                  "songName": "Kehta Hai Pal Pal",
                  "songUrl": "./songs/Kehta Hai Pal Pal.mp3",
              }
          ]
      }
  ]
```

As you can see it is pretty straight forward, but just in case:
-Albums :
  Using standard JSON, you will place your albums under this object, separated by comma for every additional album
-artist:
  This is the artist Name
-albumName:
  ummm.... the album name goes here.
-coverArt:
  You need to add the url or file path to this field property
-songs:
  This is an array of all the songs for the specific album which contain the following info:
     #songName :  Where you include the name of the song
     #songUrl : Where you include the path of the song to play
   
   
###Styles
The Music Player style is located under the Style folder, as Style.css


###Preview of Music Player
Sorry at the moment I have nothing for ya, but check back to find out!

###Changes and updates
Please feel free to change it to your benefit.
