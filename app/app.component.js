function Hero (id,name) {
    this.id = id;
    this.name = name;
}

(function(app) {

  app.AppComponent =
    ng.core.Component({
      selector: 'my-app',
      template: `
		  <h1>{{title}}</h1>
		  <h2>{{hero.name}} details!</h2>
		  <div><label>id: </label>{{hero.id}}</div>
		  <div>
		    <label>name: </label>
		    <input [(ngModel)]="hero.name" placeholder="name">
		  </div>
		  <h2>My Heroes</h2>
		  <ul class="heroes">
		    <li *ngFor="let hero of heroes">
		      <span class="badge">{{hero.id}}</span> {{hero.name}}
		    </li>
		  </ul>
  		`
    })
    .Class({
      constructor: function() {
      	this.title = 'Tour of Heroes';
  		this.hero = new Hero(1,"Windstorm");
  		this.heroes = [
				      { id: 11, name: 'Mr. Nice' },
				      { id: 12, name: 'Narco' },
				      { id: 13, name: 'Bombasto' },
				      { id: 14, name: 'Celeritas' },
				      { id: 15, name: 'Magneta' },
				      { id: 16, name: 'RubberMan' },
				      { id: 17, name: 'Dynama' },
				      { id: 18, name: 'Dr IQ' },
				      { id: 19, name: 'Magma' },
				      { id: 20, name: 'Tornado' }
				    ];
      }
    });
})(window.app || (window.app = {}));



