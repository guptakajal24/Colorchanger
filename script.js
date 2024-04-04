document.getElementById('changeColorBtn').addEventListener('click', function() {
    var colors = ['#ff0000', '#00ff00', '#0000ff', '#ffff00', '#ff00ff', '#00ffff' ,'#CCCCFF']; // List of colors
    var randomColor = colors[Math.floor(Math.random() * colors.length)]; // Randomly select a color
    document.body.style.backgroundColor = randomColor; // Apply the color to the body background
  });
  