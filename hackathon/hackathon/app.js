$(document).ready(function () {
  //
  var audioCtx = new (window.AudioContext || window.webkitAudioContext)();
  var audioElement = document.getElementById('audioElement');
  var audioSrc = audioCtx.createMediaElementSource(audioElement);
  var analyser = audioCtx.createAnalyser();
  //
  // // Bind our analyser to the media element source.
  audioSrc.connect(analyser);
  audioSrc.connect(audioCtx.destination);

  var dataArray = new Uint8Array(200);
  var circleRadii = [];
  for (var i=100; i>0; i--) {
    circleRadii.push(i*10*1.06 + 2);
    circleRadii.push(i*10*1.07);
  };

  var svgHeight = '1000';
  var svgWidth = '1000';

  var svgContainer = d3.select("body").append("svg")
                                      .attr("width", 3000)
                                      .attr("height", 2500);

  var circles = svgContainer.selectAll("circle")
                            .data(circleRadii)
                            .enter()
                            .append("circle")
                            .attr("cx", "50%")
                            .attr("cy", "50%")
                            .attr("r", function (d) { return d; })


  function renderChart() {
    requestAnimationFrame(renderChart);
    console.log(dataArray);
    analyser.getByteFrequencyData(dataArray);
    svgContainer.selectAll("circle")
    .data(dataArray)
    .style("fill", function(d) {
      return 'rgb('+ d + ', ' + d + ', ' + (d) + ')';
    });
  }

  renderChart();

});
