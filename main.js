

fetch('https://api-football-standings.azharimm.site/leagues')
    .then(res => res.json()) // parse response as JSON
    .then(data => {
     // data.data.forEach(x => console.log(x.id, x.name, x.logos))
      data.data.forEach((x) => {
        let teamID = x.id 
        let teamName = x.name 
        let teamLogos = x.logos
        console.table(teamID,teamName)
      })
      
    })
    .catch(err => {
        console.log(`error ${err}`)
    });


    let id = 'ger.1'
    let year = '2020'

    fetch(`https://api-football-standings.azharimm.site/leagues/${id}/standings?season=${year}&sort=asc`)
    .then(res => res.json()) // parse response as JSON
    .then(data => {
     // data.data.forEach(x => console.log(x.id, x.name, x.logos))
      console.log(data.data.standings)
      data.data.standings.forEach((x) => {
        console.log(x.team.name)
      })
    })
    .catch(err => {
        console.log(`error ${err}`)
    });
    