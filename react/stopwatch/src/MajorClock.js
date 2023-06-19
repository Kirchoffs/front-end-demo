import padStart from 'lodash/padStart';

const ms2Time = (milliseconds) => {
    let time = milliseconds;
    const ms = time % 1000;

    time = (milliseconds - ms) / 1000;
    const seconds = time % 60;

    time = (time - seconds) / 60;
    const minutes = time % 60;

    const hours = (time - minutes) / 60;
  
    const result = padStart(hours, 2, '0') + ":" + padStart(minutes, 2, '0') + ":" + padStart(seconds, 2, '0') + "." + padStart(ms, 3, '0');
    return result;
}

const MajorClock = ({ milliseconds = 0, major = true }) => {
    const style = (major ? " major-" : "minor-") + "clock";
    return (
        <div className={style}>
            <span>{ms2Time(milliseconds)}</span>
        </div>
    )
}

export default MajorClock;