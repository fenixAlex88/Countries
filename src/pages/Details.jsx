import { useNavigate, useParams } from 'react-router-dom';
import { IoArrowBack } from 'react-icons/io5';

import { Button } from '../components/Button';
import { Info } from '../components/Info';
import { useDispatch, useSelector } from 'react-redux';
import { selectCurrCountry } from '../store/details/details-selectors';
import { useEffect } from 'react';
import { loadCountryByName } from '../store/details/details-actions';
import { clearDetails } from '../store/countries/countries-actions';


export const Details = () => {
  const { name } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { currCountry: currentCountry, error, status } = useSelector(selectCurrCountry);

  useEffect(() => {
    dispatch(loadCountryByName(name))
    return ()=> {
      dispatch(clearDetails())
    }
  }, [dispatch, name])

  return (
    <div>
      <Button onClick={() => navigate(-1)}>
        <IoArrowBack /> Back
      </Button>
      {status === 'loading' && <h2>Loadind...</h2>}
      {error && <h2>{error}</h2>}
      {currentCountry && <Info push={navigate} {...currentCountry} />}
    </div>
  );
};
