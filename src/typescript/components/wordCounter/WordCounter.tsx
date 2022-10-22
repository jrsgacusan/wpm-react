import { useEffect, useState } from 'react';
import { FiRefreshCcw } from 'react-icons/fi';
import LoadingAnimation from '../loadingAnimation/LoadingAnimation';
import TextItem from './textItem/TextItem';
import classes from './WordCounter.module.scss';

const WordCounter = () => {
  const [isLoading, setIsLoading] = useState(false);

  const [paragraph, setParagraph] = useState('');
  const [typedCharacters, setTypedCharacters] = useState('');

  const fetchParagraph = async () => {
    setIsLoading(true);
    const API_LINK = 'https://baconipsum.com/api/?type=all-meat&paras=5';
    try {
      const response = await fetch(API_LINK);
      if (!response.ok) throw new Error('Something went wrong!');
      const data: string[] = JSON.parse(await response.text());
      setParagraph(data.join(' '));
    } catch (err) {
      throw new Error('Something went wrong!');
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    const fetch = async () => await fetchParagraph();
    fetch();
  }, []);

  return (
    <div className={classes.container}>
      <div className={classes.card}>
        <span>
          <button className={classes.icon} onClick={fetchParagraph}>
            <FiRefreshCcw size={20} />
          </button>
        </span>
        <div className={classes.cardWrapper}>
          {isLoading ? (
            <span className={classes.loadingAnimation}>
              <LoadingAnimation />
            </span>
          ) : (
            <textarea
              className={classes.textArea}
              placeholder={paragraph}
              value={typedCharacters}
              onChange={(e) => setTypedCharacters(e.currentTarget.value)}
            />
          )}

          <div className={classes.bottomContents}>
            <div className={classes.textsContainer}>
              <div className={classes.text}>
                <TextItem />
              </div>
              <div className={classes.text}>
                <TextItem />
              </div>
              <div className={classes.text}>
                <TextItem />
              </div>
            </div>
            <button className={classes.button}>Start</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WordCounter;
