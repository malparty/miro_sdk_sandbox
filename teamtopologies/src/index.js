const tt_icon = require('static/tt_logo.svg')

miro.onReady(() => {

  miro.initialize({
    extensionPoints: {
      bottomBar: {
        title: 'Team Topologies',
        svgIcon: tt_icon,
        onClick: () => {
          alert("That's a good first step!!!")
        },
      },
    },
  })
})
