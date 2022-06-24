import React, { useEffect, useState } from 'react';
import { AiFillCaretRight, AiFillCaretDown } from 'react-icons/ai';
import { useDispatch, useSelector } from 'react-redux';
import { Item } from '../../../../../api';
import { LabelChildren } from '../LabelChildren';
import { actions } from '../../../../../store/data/data';
import { selectedById } from '../../../../../store/data/selectors';

import styles from '../../../../../styles/Home.module.css';

interface Props {
  item: Item;
  li: number;
}
interface View {
  id: string;
  open: boolean;
}
export const Label: React.FC<Props> = ({ item, li }) => {
  const dispatch = useDispatch();

  const [view, setView] = useState<View>({
    id: item.id,
    open: false
  });

  const [levelStyle, setLevelStyle] = useState({ marginLeft: '0px' });
  useEffect(() => {
    if (li > 0) {
      const marginLeft: string = (55 * li).toString() + 'px';
      setLevelStyle((prevStyle) => ({ ...prevStyle, marginLeft }));
    }
  }, [li]);

  const selectedItem = useSelector(selectedById(item.id));
  useEffect(() => {
    if (selectedItem) {
      const backgroundColor = 'lightblue';
      setLevelStyle((prevStyle) => ({ ...prevStyle, backgroundColor }));
    } else {
      const backgroundColor = 'rgb(188, 182, 182)';
      setLevelStyle((prevStyle) => ({ ...prevStyle, backgroundColor }));
    }
  }, [selectedItem]);

  return (
    <div>
      <p
        className={styles.rootlevel}
        style={levelStyle}
        onClick={(e) => {
          e.stopPropagation();
          if (selectedItem) {
            dispatch(actions.removeSelected({id: item.id}));
          } else {
            dispatch(actions.addSelected(item));
          }
        }}
      >
        <span
          onClick={(e) => {
            e.stopPropagation();
            setView((prevState) => ({ ...prevState, open: !prevState.open }));
          }}
        >
          {item.children.length > 0 ? (
            view.open ? (
              <AiFillCaretDown className='text-info' size='1em' />
            ) : (
              <AiFillCaretRight className='text-info' size='1em' />
            )
          ) : null}
        </span>
        <span
          onClick={() => {
            setView((prevState) => ({ ...prevState, open: !prevState.open }));
          }}
        ></span>
        {item.name} <span className={styles.info}>{item.info}</span>
      </p>

      {item.children && view.open && (
        <LabelChildren items={item.children} li={li + 1} />
      )}
    </div>
  );
};
