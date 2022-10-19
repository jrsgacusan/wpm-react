import classes from './WordCounter.module.scss';

const WordCounter = () => {
  return (
    <div className={classes.container}>
      <div className={classes.card}>
        <div className={classes.cardWrapper}>
          <textarea className={classes.textArea} placeholder="test" />
          <div className={classes.bottomContents}>
            <div className={classes.textsContainer}>
              <div className={classes.text}>test</div>
              <div className={classes.text}>test</div>
              <div className={classes.text}>test</div>
            </div>
            <button>test</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WordCounter;
