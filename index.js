"use strict";

const dayEl = document.getElementById("day");
const hourEl = document.getElementById("hour");
const minEl = document.getElementById("minutes");
const secEl = document.getElementById("seconds");

const newYearTime = new Date("Jan 1, 2025 00:00:00").getTime();

countdown();
function countdown() {
  const now = new Date().getTime();
  const gap = newYearTime - now;
  const sec = 1000;
  const min = sec * 60;
  const hour = min * 60;
  const day = hour * 24;

  const d = Math.floor(gap / day);
  const h = Math.floor((gap % day) / hour);
  const m = Math.floor((gap % hour) / min);
  const s = Math.floor((gap % min) / sec);

  dayEl.innerText = d;
  hourEl.innerText = h;
  minEl.innerText = m;
  secEl.innerText = s;

  setTimeout(countdown, 1000);
}
