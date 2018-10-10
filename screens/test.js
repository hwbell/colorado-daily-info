let jsonData = require('../assets/json/weatherData');

const makeForeCastList = (list) => {

  // this array will hold an array for each day in the forecast. 
  // 5 days right now
  let daySeparatedList = [];

  // we will separate each day's info into an array. initialize 
  // the first one here.
  let todaysList = [];

  // Ex would be "2018-09-26 03:00:00" for the first date. 
  // This will be the first query to make the first array.
  // We will change the filter query below as the day changes
  // make a new array each time.

  //console.log(list)
  let queryStr = list[0].dt_txt.slice(0,10);

  for ( let i=1; i<list.length; i++) {

    let thisDateStr = list[i].dt_txt.slice(0,10);
    //console.log(`thisDateStr: ${thisDateStr}`)
    
    if (thisDateStr === queryStr) {
      //console.log("match!");
      // add to this day's array
      todaysList.push(list[i]);

    } else {
      // append to the master array
      daySeparatedList.push(todaysList);
      // start over with the new date
      todaysList = [list[i]];
      queryStr = list[i].dt_txt.slice(0,10);
    }
  }

  // grab one timepoint per day for display. Using between 13 - 15 hr
  // for afternoon timepoint. Will use all timepoints when clicking on 
  // individual day
  let condensedList = []
  daySeparatedList.forEach((day) => {
    day.forEach((obj) => {
      
      let time = obj.dt_txt.slice(11,13);
      //console.log(time)
      if (time > 12 && time < 16) {
        // console.log('found afternoon timepoint')
        // console.log({
        //   desc: obj.weather[0].description,
        //   icon: obj.weather[0].icon
        // })
        condensedList.push({
          desc: obj.weather[0].description,
          icon: obj.weather[0].icon
        });
      }
    });
  });

  return [daySeparatedList, condensedList];
}


let forecast = makeForeCastList(jsonData.list);

let condensed = forecast[1];
console.log(condensed.length);
condensed.forEach((day) => {
  console.log(day.desc)
  console.log(day.icon)
})