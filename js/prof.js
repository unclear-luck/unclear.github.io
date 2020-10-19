$(function () {
  const $ripp = $("header");
  $ripp.ripples({
    resolution: 700,
    dropRadius: 100,
    perturbance: 0.05,
  });

  const $ripps = $(".sub-img");
  $ripps.ripples({
    resolution: 300,
    dropRadius: 50,
    perturbance: 0.5,
  });

  $(".animated").waypoint({
    handler(direction) {
      if (direction === "down") {
        $(this.element).addClass("fadeInUp");
        this.destroy();
      }
    },
    offset: "85%",
  });
});
