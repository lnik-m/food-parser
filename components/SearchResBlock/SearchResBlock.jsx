import styles from './SearchResBlock.module.scss'
import {faImage, faArrowRight} from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Favourite from '../Favourite/Favourite'


const SearchResBlock = ({item}) => {
  return (
      <div className={styles.container}>

        <div className={styles.header}>
          <a href={item?.site?.link} target={'_blank'} rel={'noreferrer'}>{item?.site?.name}</a>
          <Favourite item={item} />
        </div>

        <div className={styles.imgBlock}>

          {item?.imgLink?.length > 0 ?
            // todo(Maria) fix
            <img src={item?.imgLink} alt={'imgLink'} />
            :
            <div className={styles.noImg}>
              <FontAwesomeIcon icon={faImage} fontSize={'4rem'} color={'white'}/>
              <p>фоточку не подгрузили :(</p>
            </div>
          }
        </div>


        <div className={styles.info}>
        <div className={styles.title}>
          <b>Название: </b>{item?.name}
        </div>

        {item?.description?.length > 0 &&
          <div className={styles.description}>
            <b>Описание: </b>{item?.description}
          </div>
        }
        
        <div className={styles.priceAndLink}>
          <div className={styles.price}>
            <strong>{item?.price}.-</strong>
          </div>

          {item?.link?.length > 0 &&
            <a className={styles.link} href={item?.link} target={'_blank'} rel={'noreferrer'}>
              <FontAwesomeIcon icon={faArrowRight} fontSize={'1.5rem'} />
            </a>
          }
        </div>
        </div>
      </div>
  );
}
export default SearchResBlock;
