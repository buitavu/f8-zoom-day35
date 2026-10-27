import classNames from "classnames/bind";
import PropTypes from "prop-types";
import style from "./Buttons.module.scss"
import { Link } from "react-router-dom";

const cx = classNames.bind(style);

function ButtonDefault({children , to , href, 
  primary , small , medium , Large, Bordered ,
  Rounded, disabled ,leftIcon,
 rightIcon,   onClick, ...passProps
}) { 
    let Comp = 'button';
    const props = {
    onClick,
    ...passProps,
  };
    if(to){
     props.to = to;
     Comp = Link;
    }else if(href ){
     props.href = href;
     Comp = "a";
    }
    const classes = cx("wrapper" , {
      primary,
      small ,
      medium,
      Large,
      Bordered,
      Rounded,
      disabled,
      loadding,
      leftIcon,
      rightIcon

    })  ;
    return (  
       <Comp className={classes} {...props}>
        {leftIcon && <span className={cx("icon")}>{leftIcon}</span>}
         <span>{children}</span>
        {rightIcon && <span className={cx("icon")}>{rightIcon}</span>}
       </Comp>
     );
}

export default ButtonDefault;