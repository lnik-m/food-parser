import styles from './SearchResBlock.module.scss';

const SearchResBlock = ({item}) => {
  // todo: сверстать блок когда данные будут в новом формате
  return (
      <div className={styles.container}>
        <strong>
          Найдено по: {item.foundBy === 'name' ? 'имени' : 'описанию'}
        </strong>{' '}
        <br />
        Название: {item.name}
        <br />
        Описание: {item.description}
      </div>
  );
}
export default SearchResBlock;