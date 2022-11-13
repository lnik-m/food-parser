import styles from './SearchResBlock.module.scss'
import {faImage, faArrowRight} from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Image from 'next/image'


const SearchResBlock = ({item}) => {
  return (
      <div className={styles.container}>

        <div className={styles.site}>
          <a href={item.site.link} target={'_blank'} rel={'noreferrer'}>{item.site.name}</a>
        </div>

        {item.imgLink.length > 0 ?
          // todo(Maria) fix
          <img src={item.imgLink} alt={'imgLink'} className={styles.img} />
          :
          <div className={styles.img}>
            <FontAwesomeIcon icon={faImage} fontSize={'4rem'} color={'white'}/>
            <p>фоточку не подгрузили :(</p>
          </div>
        }

        <div className={styles.title}>
          Название: {item.name}
        </div>

        {item.description.length > 0 &&
          <div className={styles.description}>
            Описание: {item.description}
          </div>
        }

        <div className={styles.priceAndLink}>
          <div className={styles.price}>
            <strong>{item.price}.-</strong>
          </div>

          {item.link.length > 0 &&
            <a className={styles.link} href={item.link} target={'_blank'} rel={'noreferrer'}>
              <FontAwesomeIcon icon={faArrowRight} fontSize={'1.5rem'} />
            </a>
          }
        </div>

      </div>
  );
}
export default SearchResBlock;