import MajorClock from './MajorClock';

const SplitTimes = ({value=[]}) => {
  return (
    <div className="split-times">
      {
        value.map((v, k) => (
          <MajorClock key={k} milliseconds={v} major={false} />
        ))
      }
    </div>
  )
};

export default SplitTimes;