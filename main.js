phina.globalize();

phina.define('MainScene' {
  superClass: 'CanvasScene ,
  init: function() {
    this.superInit();
    this.backgroundColor = '#444' ;
    this.label = label('Hello, phina.js!').addChildTo(this);
    this.label.x = this.gridX.center();
    this.label.y = this.gridY.center();
    this.label.fill = 'white';
  };
};

phina.main(function() {
  var app = GameApp({
    starLabel: 'main',
  });

  app.run();
 });
