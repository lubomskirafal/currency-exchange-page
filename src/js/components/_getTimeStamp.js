let dataStamp;
let timeStamp;

export const getDataStamp = (dataNo)=> {
    const time = new Date().toLocaleTimeString();
    dataStamp = !localStorage.getItem('prevDataStamp')? dataNo : localStorage.getItem('prevDataStamp');
    timeStamp = !localStorage.getItem('prevTimeStamp')? time : localStorage.getItem('prevTimeStamp');
    if(dataNo !== dataStamp) {
        localStorage.setItem('prevDataStamp', dataNo);
        localStorage.setItem('prevTimeStamp', time);
        timeStamp = time;
    }else {
        localStorage.setItem('prevTimeStamp', timeStamp);
        localStorage.setItem('prevDataStamp', dataStamp);
    };
    return timeStamp;
};