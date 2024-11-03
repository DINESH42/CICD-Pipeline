import React from "react";
import "./ErrorPage.css";

const ErrorPage = () => {
  return <div>
    Window: screenTop property

    The Window.screenTop read-only property returns the vertical distance, in CSS pixels, from the top border of the user's browser viewport to the top side of the screen.

    Note: screenTop is an alias of the older Window.screenY property. screenTop was originally supported only in IE but was introduced everywhere due to popularity.
    Value

    A number equal to the number of CSS pixels from the top edge of the browser viewport to the top edge of the screen.
    Examples

    In our screenleft-screentop example, you'll see a canvas onto which has been drawn a circle. In this example we are using screenLeft/screenTop plus Window.requestAnimationFrame() to constantly redraw the circle in the same physical position on the screen, even if the window position is moved.

    js

    initialLeft = window.screenLeft + canvasElem.offsetLeft;
    initialTop = window.screenTop + canvasElem.offsetTop;

    window.requestAnimationFrame(positionElem);

    Also in the code we include a snippet that detects whether screenLeft is supported, and if not, polyfills in screenLeft/screenTop using Window.screenX/Window.screenY.

    js



    Specifications
    Specification
    CSSOM View Module
    # dom-window-screentop
    Browser compatibility
    Report problems with this compatibility data on GitHub
    desktop	mobile

    Chrome

    Edge

    Firefox

    Opera

    Safari

    Chrome Android

    Firefox for Android

    Opera Android

    Safari on iOS

    Samsung Internet

    WebView Android
    screenTop

  </div>;
};

export default ErrorPage;
