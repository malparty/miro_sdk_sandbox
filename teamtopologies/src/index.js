


miro.onReady(() => {
  const tt_icon = `<svg version="1.1" id="team_topologies_logo_btn" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 339 103" style="enable-background:new 0 0 339 103;" xml:space="preserve">
	<style type="text/css">
		.st0{fill:#1D1D1B;}
		.st1{fill:#9B79EE;}
		.st2{fill:#59FBE3;}
		.st3{fill:#FFDF56;}
		.st4{fill:#1B2538;stroke:#1B2538;stroke-miterlimit:10;}
		.st5{fill:#EE6BD2;}
		.st6{fill:#F2195C;}
		.st7{fill:#9B79EE;stroke:#59FBE3;stroke-width:3;stroke-miterlimit:10;}
		.st8{opacity:0.5;fill:#59FBE3;stroke:#59FBE3;stroke-width:3;stroke-miterlimit:10;}
		.st9{opacity:0.5;fill:#9B79EE;stroke:#59FBE3;stroke-width:3;stroke-miterlimit:10;}
		.st10{fill:#354467;}
		.st11{fill:#1B2538;}
		.st12{fill:#9B79EE;stroke:#59FBE3;stroke-width:7;stroke-miterlimit:10;}
		.st13{fill:#354467;stroke:#59FBE3;stroke-width:2;stroke-miterlimit:10;}
		.st14{fill:#346EE2;}
		.st15{opacity:0.5;fill:#59FBE3;}
		.st16{opacity:0.54;fill:#FFDF56;}
		.st17{opacity:0.5;fill:#59FBE3;stroke:#59FBE3;stroke-width:0.5;stroke-miterlimit:10;}
		.st18{fill:#2FAC66;}
		.st20{fill:#9B79EE;stroke:#59FBE3;stroke-width:5;stroke-miterlimit:10;}
		.st21{opacity:0.5;}
		.st22{fill:url(#XMLID_34_);}
		.st23{fill:#545B69;}
	</style>
	<g>
		<path class="st2" d="M66.4,49.7v33.6h-9.2c-6.7,0-12.1-5.4-12.1-12.1V49.7h7.1H66.4z" />
		<path class="st1" d="M66.4,22.8v5.7h-2.1h-7.1H45.1V10.7h9.2C61,10.7,66.4,16.1,66.4,22.8z" />
		<path class="st1" d="M40,49.7v33.6h-9.2c-6.7,0-12.1-5.4-12.1-12.1V49.7H40z" />
		<path class="st3" d="M30.8,28.5c-6.7,0-12.1,5.4-12.1,12.1v9.2H40h12.2h14.2h5.9h1.6c6.7,0,12.1-5.4,12.1-12.1v-9.2" />
		<path class="st2" d="M40,22.8v5.7h-9.2c-6.7,0-12.1,5.4-12.1,12.1V10.7h9.2C34.6,10.7,40,16.1,40,22.8z" />
		<path class="st6" d="M66.4,28.5v9.2c0,6.7-6,12.1-13.4,12.1h-7.9v-9.2c0-6.7,6.1-12.1,13.5-12.1H66.4z" />
	</g>
</svg>`;
  miro.initialize({
    extensionPoints: {
      bottomBar: {
        title: 'Team Topologies',
        svgIcon: tt_icon,
        onClick: () => {
          alert("----")
        },
      },
    },
  })
})
