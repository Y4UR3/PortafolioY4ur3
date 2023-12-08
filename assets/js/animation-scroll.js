
const progressbar = document.querySelector('#progress');

progressbar.animate(
  [
    { width: 0 },
    { width: "100%" },
  ],
  {
    fill: 'forwards',
    timeline: new ScrollTimeline({
      subject: document.documentElement,
    }),
  }
);


