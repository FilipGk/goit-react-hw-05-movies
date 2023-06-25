import { ThreeDots } from 'react-loader-spinner';
import style from './Loader.module.css';

const Loader = () => {
  return (
    <div className={style.wrapper}>
      <ThreeDots
        height="80"
        width="80"
        radius="9"
        color="#CCBA78"
        ariaLabel="three-dots-loading"
        wrapperStyle={{}}
        wrapperClassName=""
        visible={true}
      />
    </div>
  );
};

export default Loader;
