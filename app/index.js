import clock from "clock";
import document from "document";
import { preferences } from "user-settings";

// Update the clock every minute
clock.granularity = "minutes";

const clockElement = document.getElementById("clock");

clock.ontick = e => {
  let today = e.date;
  let hours = today.getHours();

  if (preferences.clockDisplay === "12h") {
    hours = hours % 12 || 12;
  }

  const hours = zeroPad(hours);
  const minutes = zeroPad(today.getMinutes());
  clockElement.text = `${hours}:${minutes}`;
};

function zeroPad(time) {
  if (time < 10) {
    time = "0" + time;
  }
  return time;
}
