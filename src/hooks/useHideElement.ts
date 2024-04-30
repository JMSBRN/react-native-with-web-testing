import {useState, useEffect} from 'react';
import {Dimensions} from 'react-native';
const useHideElement = (thresholdWidth: number) => {
  const [windowSize, setWindowSize] = useState({width: 0, height: 0});

  useEffect(() => {
    const {width, height} = Dimensions.get('window');
    setWindowSize({width, height});

    const updateSize = () => {
      setWindowSize({width, height});
    };

    const subscription = Dimensions.addEventListener('change', updateSize);

    return () => {
      subscription?.remove();
    };
  }, []);

  return windowSize.width > thresholdWidth;
};
export default useHideElement;
