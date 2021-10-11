import c from '../Container.module.scss';
import logoImage from '../../image/logo/logo.png';
import style from './Logo.module.scss';

export const Logo = () => {
  return (
    <div className={c.container}>
      <div className={style.logo}>
        <LogoLeft/>
        <LogoRight/>
      </div>
    </div>
  );
};

const LogoLeft = () => {
  return (
    <div className={style.left}>
      <div>
        <img src={logoImage} alt="min-logo" />
      </div>
    </div>
  );
};

const LogoRight = () => {
  return (
    <div className={`${style.right} ${style.bg}`}>
      <div>
        <img src={logoImage} alt="logo" />
      </div>
    </div>
  );
};
