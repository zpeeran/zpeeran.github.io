import { annotate } from "https://unpkg.com/rough-notation?module";

  window.addEventListener("load", () => {
    const annotations = {
      "highlight-1": {
        type: "highlight",
        color: "#fcc2d2",
        iterations: 4,
        multiline: true,
        animate: true,
        animationDuration: 2000,
      },
      "highlight-2": {
        type: "highlight",
        color: "orange",
        iterations: 4,
        multiline: true,
        animate: true,
      },
      underline: {
        type: "underline",
        color: "yellow",
        iterations: 4,
        multiline: true,
        animate: true,
      },
      box: {
        type: "box",
        color: "purple",
        iterations: 2,
        multiline: true,
        animate: true,
      },
      circle: {
        type: "circle",
        color: "green",
        iterations: 1,
        multiline: true,
        animate: true,
      },
      "strike-through": {
        type: "strike-through",
        color: "red",
        iterations: 1,
        multiline: true,
        animate: true,
      },
      "crossed-off": {
        type: "crossed-off",
        color: "black",
        iterations: 2,
        multiline: true,
        animate: true,
      },
      bracket: {
        type: "bracket",
        brackets: ["left", "right"],
        color: "blue",
        iterations: 2,
        multiline: true,
        animate: true,
      },
    };
    // Set the variables
    var iOSupported = "IntersectionObserver" in window; /* true if supported */
    var box = document.querySelectorAll(".notation");

    // Check if IntersectionObserver is supported by the browser
    if (!iOSupported) {
      return;
    }

    // Set the config options
    const config = {
      root: null, // sets the framing element to the viewport
      rootMargin: "0% 0% -25% 0%", // the animation will be triggered when at 25% from the bottom of the viewport
      threshold: 0,
    };

    // Init the observer
    let observer = new IntersectionObserver((entries) => {
      entries.forEach((item) => {
        let annotationType = item.target.dataset.notationType;
        let annotation = annotate(item.target, annotations[annotationType]);

        if (item.isIntersecting) {
          // Show the annotation when intersecting and stop observing after it.
          annotation.show();
          observer.unobserve(item.target);
        } else {
          // Add an action when the target is not intersecting anymore.
        }
      });
    }, config);

    box.forEach((item) => {
      observer.observe(item);
    });
  });