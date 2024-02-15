let path = "./songs/"
let extention = " | MUSIC"

let playlistView = false

let currentPlaylist = null

let playlistIndex = 0

let bar = document.getElementById("bar")

let loop = false

let audio = new Audio()

function init() {
  let list = document.getElementById("list")
  for (let i = 0; i < songs.length; i++) {
    listElement(i)
  }
}

function listElement(i) {
  let div = document.createElement("div")
  div.className = "song center"

  let div2 = document.createElement("div")
  div2.className = "center"
  div2.style.width = 80 + "%"

  let div3 = document.createElement("div")
  div3.className = "center"
  div3.style.width = 20 + "%"

  let p = document.createElement("p")
  p.innerHTML = songs[i]

  let button = document.createElement("button")
  button.innerHTML = "Play"
  button.addEventListener("click", function() {
    currentPlaylist = songs
    playlistIndex = i
    audio.src = path + songs[i]
    audio.play()
    document.getElementById("pause").style.display = "block"
    document.getElementById("play").style.display = "none"
    document.getElementById("songName").innerHTML = currentPlaylist[playlistIndex]
    document.title = currentPlaylist[playlistIndex] + extention
    setPlaylist()
    highlight(playlistIndex)
  })

  div2.appendChild(p)
  div3.appendChild(button)
  div.appendChild(div2)
  div.appendChild(div3)
  list.appendChild(div)
}

document.getElementById("play").addEventListener("click", function() {
  audio.play()
  document.getElementById("pause").style.display = "block"
  document.getElementById("play").style.display = "none"
  document.getElementById("songName").innerHTML = currentPlaylist[playlistIndex]
  document.title = currentPlaylist[playlistIndex] + extention
})

document.getElementById("volume").addEventListener("input", function() {
  audio.volume = this.value
})

document.getElementById("pause").addEventListener("click", function() {
  audio.pause()
  document.getElementById("pause").style.display = "none"
  document.getElementById("play").style.display = "block"
})

document.getElementById("clearSearch").addEventListener("click", function() {
  clearSearch()
  searchElements = []
  for (let i = 0; i < songs.length; i++) {
    listElement(i)
  }
})

document.getElementById("skip").addEventListener("click", nextInPlaylist)

document.getElementById("prev").addEventListener("click", prevInPlaylist)

document.getElementById("loop").addEventListener("click", function() {
  if (!loop) {
    audio.loop = true
    loop = true
    document.getElementById("loop").style.color = "#2f2272"
  } else {
    audio.loop = false
    loop = false
    document.getElementById("loop").style.color = "#ffffff"
  }
  console.log(loop)
})

let value = 0

function test() {
  console.log(audio.constructor.prototype)
  // audio.src = path + "Brasilian Skies.mp3"
  audio.currentTime = 10
  // audio.oncanplay = function() {
  //   console.log("can play")
  //   if (value == 0) {
  //     audio.currentTime = 10;
  //     value = 1
  //   }
  //   console.log(audio.currentTime)
  // };
  // audio.play()
}

function nextInPlaylist() {
  playlistIndex ++
  if (playlistIndex > currentPlaylist.length - 1) {
    playlistIndex = 0
  }
  audio.src = path + currentPlaylist[playlistIndex]
  audio.play()
  document.getElementById("pause").style.display = "block"
  document.getElementById("play").style.display = "none"
  document.getElementById("songName").innerHTML = currentPlaylist[playlistIndex]
  document.title = currentPlaylist[playlistIndex] + extention
  bar.style.width = 0 + "%"
  highlight(playlistIndex)
}

function prevInPlaylist() {
  playlistIndex --
  if (playlistIndex < 0) {
    playlistIndex = currentPlaylist.length - 1
  }
  audio.src = path + currentPlaylist[playlistIndex]
  audio.play()
  document.getElementById("pause").style.display = "block"
  document.getElementById("play").style.display = "none"
  document.getElementById("songName").innerHTML = currentPlaylist[playlistIndex]
  document.title = currentPlaylist[playlistIndex] + extention
  bar.style.width = 0 + "%"
  highlight(playlistIndex)
}

let i = setInterval(function() {
  let percentage = (audio.currentTime / audio.duration) * 100
  bar.style.width = percentage + "%"
  if (audio.ended) {
    nextInPlaylist()
  }
},250)

window.onload = init
// window.onload = test

document.getElementById("playlistButton").addEventListener("click", function() {
  document.getElementById("playlists").style.display = "flex"
  document.getElementById("list").style.display = "none"
})

document.getElementById("songsButton").addEventListener("click", function() {
  document.getElementById("list").style.display = "block"
  document.getElementById("playlists").style.display = "none"
})

document.getElementById("toPlaylist").addEventListener("click", function() {
  if (!playlistView) {
    document.getElementById("controls").style.top = "0px"
    document.getElementById("controls").style.bottom = ""
    document.getElementById("playlist").style.height = "calc(85vh - 2px)"
    document.getElementById("controls").style.borderTop = ""
    document.getElementById("controls").style.borderBottom = "2px solid white"
    playlistView = true
  } else {
    document.getElementById("controls").style.bottom = "0px"
    document.getElementById("controls").style.top = ""
    document.getElementById("playlist").style.height = 0 + "vh"
    document.getElementById("controls").style.borderTop = "2px solid white"
    document.getElementById("controls").style.borderBottom = ""
    playlistView = false
  }
})

document.getElementById("playlist1").addEventListener("click", function() {
  currentPlaylist = janplaylist
  playlistIndex = 0
  audio.src = path + currentPlaylist[0]
  audio.play()
  document.getElementById("pause").style.display = "block"
  document.getElementById("play").style.display = "none"
  document.getElementById("songName").innerHTML = currentPlaylist[playlistIndex]
  document.title = currentPlaylist[playlistIndex] + extention
  setPlaylist()
  highlight(playlistIndex)
})

document.getElementById("playlist2").addEventListener("click", function() {
  currentPlaylist = mfdoom
  playlistIndex = 0
  audio.src = path + currentPlaylist[0]
  audio.play()
  document.getElementById("pause").style.display = "block"
  document.getElementById("play").style.display = "none"
  document.getElementById("songName").innerHTML = currentPlaylist[playlistIndex]
  document.title = currentPlaylist[playlistIndex] + extention
  setPlaylist()
  highlight(playlistIndex)
})

document.getElementById("inesplaylist").addEventListener("click", function() {
  currentPlaylist = inesplaylist
  playlistIndex = 0
  audio.src = path + currentPlaylist[0]
  audio.play()
  document.getElementById("songName").innerHTML = currentPlaylist[playlistIndex]
  document.title = currentPlaylist[playlistIndex] + extention
  setPlaylist()
  highlight(playlistIndex)
})

document.getElementById("inesrunning").addEventListener("click", function() {
  currentPlaylist = inesrun
  playlistIndex = 0
  audio.src = path + currentPlaylist[0]
  audio.play()
  document.getElementById("pause").style.display = "block"
  document.getElementById("play").style.display = "none"
  document.getElementById("songName").innerHTML = currentPlaylist[playlistIndex]
  document.title = currentPlaylist[playlistIndex] + extention
  setPlaylist()
  highlight(playlistIndex)
})

document.getElementById("rockplaylist").addEventListener("click", function(){
  currentPlaylist = rock
  playlistIndex = 0
  audio.src = path + currentPlaylist[0]
  audio.play()
  document.getElementById("pause").style.display = "block"
  document.getElementById("play").style.display = "none"
  document.getElementById("songName").innerHTML = currentPlaylist[playlistIndex]
  document.title = currentPlaylist[playlistIndex] + extention
  setPlaylist()
  highlight(playlistIndex)
})

window.addEventListener("keydown", function(event) {
  if (event.code == "Space" && document.activeElement != document.getElementById("searchInput")) {
    if (audio.paused) {
      audio.play()
      document.getElementById("pause").style.display = "block"
      document.getElementById("play").style.display = "none"
    } else {
      audio.pause()
      document.getElementById("pause").style.display = "none"
      document.getElementById("play").style.display = "block"
    }
  }
  if (event.code == "ArrowUp") {
    audio.volume += 0.1
    if (audio.volume > 1) {
      audio.volume = 1
    }
    document.getElementById("volume").value = audio.volume
  }
  if (event.code == "ArrowDown") {
    audio.volume -= 0.1
    if (audio.volume < 0) {
      audio.volume = 0
    }
    document.getElementById("volume").value = audio.volume
  }

  if (event.code == "ArrowLeft") {
    prevInPlaylist()
  }
  if (event.code == "ArrowRight") {
    nextInPlaylist()
  }
})

let divElements = []

function setPlaylist() {
  if (document.getElementById("playlist").children.length) {
    clearPlaylist()
  }
  for (let i = 0; i < currentPlaylist.length; i++) {
    let div = document.createElement("div")
    div.className = "playlist-song center"

    div.addEventListener("click", function() {
      playlistIndex = i
      audio.src = path + currentPlaylist[i]
      audio.play()
      document.getElementById("pause").style.display = "block"
      document.getElementById("play").style.display = "none"
      document.getElementById("songName").innerHTML = currentPlaylist[playlistIndex]
      document.title = currentPlaylist[playlistIndex] + extention
      highlight(playlistIndex)
    })

    let p = document.createElement("p")
    p.innerHTML = currentPlaylist[i]

    div.appendChild(p)
    document.getElementById("playlist").appendChild(div)
    divElements.push(div)
  }
}

function clearPlaylist() {
  for (let i = 0; i < divElements.length; i++) {
    divElements[i].remove()
  }
  divElements = []
}

function highlight(index) {
  for (let i = 0; i < divElements.length; i++) {
    divElements[i].style.backgroundColor = "#1c2333"
  }
  divElements[index].style.backgroundColor = "#414d71"
}

searchElements = []

document.getElementById("searchButton").addEventListener("click", function() {
  let value = document.getElementById("searchInput").value.toLowerCase()
  let newPlaylist = []
  let copy = [...songs]
  for (let i = 0; i < songs.length; i++) {
    let newString = copy[i].slice(0, value.length).toLowerCase()
    if (newString == value) {
      console.log(songs[i])
      newPlaylist.push(i)
    }
  }
  setSearch(newPlaylist)
})

function setSearch(array) {
  clearSearch()
  for (let i = 0; i < array.length; i++) {
    listElement(array[i])
  }
}

function clearSearch() {
  for (let i = document.getElementById("list").children.length-1; i > 0; i--) {
    document.getElementById("list").children[i].remove()
  }
}

volumeView = false

document.getElementById("toVolume").addEventListener("click", function() {
  if (!volumeView) {
    document.getElementById("volume").style.display = "block"
    volumeView = true
  } else {
    document.getElementById("volume").style.display = "none"
    volumeView = false
  }
})

document.getElementById("shufflePlaylist").addEventListener("click", function() {
  for (let i = 0; i < currentPlaylist.length; i++) {
    let random = Math.floor(Math.random() * currentPlaylist.length);
    let temp = currentPlaylist[i] 
    currentPlaylist[i] = currentPlaylist[random]
    currentPlaylist[random] = temp
  }
  setPlaylist(currentPlaylist)
  playlistIndex = 0
  audio.src = path + currentPlaylist[0]
  audio.play()
  document.getElementById("pause").style.display = "block"
  document.getElementById("play").style.display = "none"
  document.getElementById("songName").innerHTML = currentPlaylist[playlistIndex]
  document.title = currentPlaylist[playlistIndex] + extention
  highlight(playlistIndex)
})
