var i = 0;

function controller(event) {
    const songs = ['music/02-one_direction-story_of_my_life.mp3',
        'music/Coldplay - Hymn For The Weekend (Official Video).mp3',
        'music/DJ Snake - Taki Taki ft. Selena Gomez, Ozuna, Cardi B (Official Music Video).mp3',
        'music/Ed Sheeran - Perfect (Official Music Video).mp3',
        'music/Ed Sheeran - Shape of You [Official Video].mp3',
        'music/Eminem - Lose Yourself [HD].mp3',
        'music/Maroon 5 - Memories (Official Video).mp3',
        'music/The Chainsmokers - Don_t Let Me Down ft. Daya (Official Music Video).mp3'
    ];
    if (event === 'i') {
        i = i >= songs.length ? 0 : i + 1;
    } else if (event === 'd') {
        i = i <= 0 ? songs.length - 1 : i - 1;
    } else if (event === 's') { i = Math.floor(Math.random() * songs.length) }

    document.getElementById('audio').src = songs[i];
    document.getElementById('audio').load();
    document.getElementById('audio').play();
}